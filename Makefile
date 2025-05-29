ARTIFACT_OPERATOR=redis-operator
ARTIFACT_INITCONTAINER=init-container

PREFIX?=cinple/

SOURCES := $(shell find . ! -name "*_test.go" -name '*.go')

CMDBINS := operator node metrics
CRD_OPTIONS ?= "crd:crdVersions=v1,maxDescLen=64,generateEmbeddedObjectMeta=true"

ifeq (,$(shell go env GOBIN))
GOBIN=$(shell go env GOPATH)/bin
else
GOBIN=$(shell go env GOBIN)
endif

TAG?=$(shell git tag|tail -1)
COMMIT=$(shell git rev-parse HEAD)
DATE=$(shell date +%Y-%m-%d/%H:%M:%S)
BUILDINFOPKG=github.com/IBM/operator-for-redis-cluster/pkg/utils
LDFLAGS= -ldflags "-w -X ${BUILDINFOPKG}.TAG=${TAG} -X ${BUILDINFOPKG}.COMMIT=${COMMIT} -X ${BUILDINFOPKG}.OPERATOR_VERSION=${OPERATOR_VERSION} -X ${BUILDINFOPKG}.REDIS_VERSION=${REDIS_VERSION} -X ${BUILDINFOPKG}.BUILDTIME=${DATE} -s"

PLATFORM?=linux/amd64
GOOS=$(shell echo $(PLATFORM) | cut -d'/' -f1)
GOARCH=$(shell echo $(PLATFORM) | cut -d'/' -f2)

all: build

plugin: build-kubectl-rc install-plugin

install-plugin:
	./tools/install-plugin.sh

build-%:
	CGO_ENABLED=0 GOOS=$(GOOS) GOARCH=$(GOARCH) go build -installsuffix cgo ${LDFLAGS} -o bin/$* ./cmd/$*

buildlinux-%: ${SOURCES}
	CGO_ENABLED=0 GOOS=$(GOOS) GOARCH=$(GOARCH) go build -installsuffix cgo ${LDFLAGS} -o docker/$*/$* ./cmd/$*/main.go

container-%: buildlinux-%
	docker buildx build --platform $(PLATFORM) -t $(PREFIX)operator-for-redis-cluster-$*:$(TAG) -f Dockerfile.$* . --load

container-push-%: 
	docker buildx build --platform linux/amd64,linux/arm64 -t $(PREFIX)operator-for-redis-cluster-$*:$(TAG) -f Dockerfile.$* . --push

load-%: container-%
	kind load docker-image $(PREFIX)operator-for-redis-cluster-$*:$(TAG)

build: $(addprefix build-,$(CMDBINS))

buildlinux: $(addprefix buildlinux-,$(CMDBINS))

container: $(addprefix container-,$(CMDBINS))

container-push: $(addprefix container-push-,$(CMDBINS))

load: $(addprefix load-,$(CMDBINS))

manifests: controller-gen
	$(CONTROLLER_GEN) $(CRD_OPTIONS) rbac:roleName=manager-role output:rbac:none paths="./..." output:crd:artifacts:config=charts/operator-for-redis/crds/

generate: controller-gen ## Generate code containing DeepCopy, DeepCopyInto, and DeepCopyObject method implementations.
	$(CONTROLLER_GEN) object paths="./..."

# find or download controller-gen
# download controller-gen if necessary
controller-gen:
ifeq (, $(shell which controller-gen))
	@{ \
	set -e ;\
	CONTROLLER_GEN_TMP_DIR=$$(mktemp -d) ;\
	cd $$CONTROLLER_GEN_TMP_DIR ;\
	go mod init tmp ;\
	go get sigs.k8s.io/controller-tools/cmd/controller-gen@v0.17.3 ;\
	rm -rf $$CONTROLLER_GEN_TMP_DIR ;\
	}
CONTROLLER_GEN=$(GOBIN)/controller-gen
else
CONTROLLER_GEN=$(shell which controller-gen)
endif


test:
	./go.test.sh

push-%: container-%
	docker push $(PREFIX)operator-for-redis-cluster-$*:$(TAG)

push: $(addprefix push-,$(CMDBINS))

clean:
	rm -f ${ARTIFACT_OPERATOR}

# gofmt and goimports all go files
fmt:
	find . -name '*.go' -not -wholename './vendor/*' | while read -r file; do gofmt -w -s "$$file"; goimports -w "$$file"; done
.PHONY: fmt

# Run all the linters
lint:
	golangci-lint run --enable copyloopvar
.PHONY: lint

.PHONY: build push clean test container-push

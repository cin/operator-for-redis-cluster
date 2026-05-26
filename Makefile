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

CONTROLLER_TOOLS_VERSION ?= v0.21.0
OPERATOR_SDK_VERSION ?= v1.42.2

# Install pinned dev tools (see hack/tools/*/go.mod).
controller-gen:
	go -C hack/tools/controller-gen install tool

# operator-sdk v1.42.2 requires libgpgme-dev to build from source; use the release binary.
operator-sdk:
	@install -d $(GOBIN)
	@curl -fsSL -o $(GOBIN)/operator-sdk \
		https://github.com/operator-framework/operator-sdk/releases/download/$(OPERATOR_SDK_VERSION)/operator-sdk_linux_amd64
	@chmod +x $(GOBIN)/operator-sdk

CONTROLLER_GEN?=$(GOBIN)/controller-gen


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

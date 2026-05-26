#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail

#	`make controller-gen` installs controller-gen (see hack/tools/controller-gen/go.mod)
controller-gen object:headerFile=./hack/custom-boilerplate.go.txt paths="github.com/IBM/operator-for-redis-cluster/pkg/..."

# old code generator command
#./vendor/k8s.io/code-generator/generate-groups.sh all github.com/IBM/operator-for-redis-cluster/pkg/client github.com/IBM/operator-for-redis-cluster/pkg/api redis:v1 --go-header-file ./hack/custom-boilerplate.go.txt

# Development tool pins

| Tool | Version | Install |
|------|---------|---------|
| [controller-gen](https://github.com/kubernetes-sigs/controller-tools) | v0.21.0 | `make controller-gen` |
| [operator-sdk](https://github.com/operator-framework/operator-sdk) | v1.42.2 | `make operator-sdk` (release binary) |

`controller-gen` is built from `hack/tools/controller-gen/go.mod` (aligned with Kubernetes 1.36 / controller-runtime 0.24).

`operator-sdk` is downloaded from GitHub releases because v1.42.2 does not build cleanly against `k8s.io/api` v0.36 (removed `scheduling/v1alpha1`) without `libgpgme-dev` for a source build.

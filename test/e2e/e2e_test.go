package e2e

import (
	goflag "flag"
	"os"
	"path/filepath"
	"testing"

	"github.com/golang/glog"

	"github.com/IBM/operator-for-redis-cluster/test/e2e/framework"
	"github.com/spf13/pflag"
)

func TestE2E(t *testing.T) {
	RunE2ETests(t)
}

func getDefaultKubeConfig() string {
    if v, ok := os.LookupEnv("KUBECONFIG"); ok {
        return v
    }
    home, err := os.UserHomeDir()
    if err != nil {
        return ""
    }
    return filepath.Join(home, ".kube", "config")
}

func TestMain(m *testing.M) {

	pflag.StringVar(&framework.FrameworkContext.KubeConfigPath, "kubeconfig", getDefaultKubeConfig(), "Path to kubeconfig")
	pflag.StringVar(&framework.FrameworkContext.ImageTag, "image-tag", "local", "image tag")
	pflag.CommandLine.AddGoFlagSet(goflag.CommandLine)
	pflag.Parse()
	err := goflag.CommandLine.Parse([]string{})
	if err != nil {
		glog.Errorf("failed to parse args: %v", err)
		os.Exit(1)
	}

	os.Exit(m.Run())
}

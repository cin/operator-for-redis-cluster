package redisnode

import (
	"context"
	"errors"

	//	"net"
	"os"
	"testing"

	discoveryv1 "k8s.io/api/discovery/v1"
	kmetav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	kfakeclient "k8s.io/client-go/kubernetes/fake"

	"github.com/IBM/operator-for-redis-cluster/pkg/config"
	"github.com/IBM/operator-for-redis-cluster/pkg/redis/fake"
	"github.com/IBM/operator-for-redis-cluster/pkg/redis/fake/admin"
)

func TestTestAndWaitConnection(t *testing.T) {
	redisSrv1 := fake.NewRedisServer(t)
	ctx := context.Background()
	defer redisSrv1.Close()
	addr1 := redisSrv1.GetHostPort()

	rq := "PING"
	resp := "PONG"
	redisSrv1.PushResponse(rq, resp)

	err := testAndWaitConnection(ctx, addr1, 1)
	if err != nil {
		t.Errorf("Unexpected error while waiting for fake redis node: %v", err)
	}
}

func int32Ptr(i int32) *int32 {
	return &i
}

func TestIsClusterInitialization(t *testing.T) {
	currentIP := "1.2.3.4"
	conf := Config{
		Redis:   config.Redis{ServerPort: "1234"},
		Cluster: config.Cluster{Namespace: "default", NodeService: "redis-service"},
	}

	testCases := []struct {
		name             string
		endpointSlice    discoveryv1.EndpointSlice
		isInitialization bool
	}{
		{
			name: "1) test init true",
			endpointSlice: discoveryv1.EndpointSlice{
				ObjectMeta: kmetav1.ObjectMeta{
					Name:      "redis-service-slice",
					Namespace: "default",
					Labels:    map[string]string{discoveryv1.LabelServiceName: "redis-service"},
				},
				AddressType: discoveryv1.AddressTypeIPv4,
				Endpoints:   []discoveryv1.Endpoint{}, // empty
				Ports:       []discoveryv1.EndpointPort{{Port: int32Ptr(1234)}},
			},
			isInitialization: true,
		},
		{
			name: "2) test init false",
			endpointSlice: discoveryv1.EndpointSlice{
				ObjectMeta: kmetav1.ObjectMeta{
					Name:      "redis-service-slice",
					Namespace: "default",
					Labels:    map[string]string{discoveryv1.LabelServiceName: "redis-service"},
				},
				AddressType: discoveryv1.AddressTypeIPv4,
				Endpoints: []discoveryv1.Endpoint{
					{Addresses: []string{"1.0.0.1"}},
					{Addresses: []string{"1.0.0.2"}},
					{Addresses: []string{"1.0.0.3"}},
				},
				Ports: []discoveryv1.EndpointPort{{Port: int32Ptr(1234)}},
			},
			isInitialization: false,
		},
		{
			name: "3) test init true",
			endpointSlice: discoveryv1.EndpointSlice{
				ObjectMeta: kmetav1.ObjectMeta{
					Name:      "redis-service-slice",
					Namespace: "default",
					Labels:    map[string]string{discoveryv1.LabelServiceName: "redis-service"},
				},
				AddressType: discoveryv1.AddressTypeIPv4,
				Endpoints: []discoveryv1.Endpoint{
					{Addresses: []string{currentIP}},
				},
				Ports: []discoveryv1.EndpointPort{{Port: int32Ptr(1234)}},
			},
			isInitialization: true,
		},
	}

	for _, tc := range testCases {
		node := &RedisNode{
			config:     &conf,
			kubeClient: kfakeclient.NewClientset(&tc.endpointSlice),
		}
		_, isInit := node.isClusterInitialization(currentIP)
		if isInit != tc.isInitialization {
			t.Errorf("[case: %s] Wrong init status returned, expected %t, got %t", tc.name, tc.isInitialization, isInit)
		}
	}
}

func TestRedisInitializationAttach(t *testing.T) {
	myIP := "1.2.3.4"

	tmpfile, err := os.CreateTemp("", "config")
	if err != nil {
		t.Fatal(err)
	}
	defer func() {
		if err := os.Remove(tmpfile.Name()); err != nil {
			t.Logf("Error removing temp file %s: %v", tmpfile.Name(), err)
		}
	}() // clean up

	c := &Config{
		Redis:   config.Redis{ServerPort: "1234", ConfigFileName: tmpfile.Name()},
		Cluster: config.Cluster{Namespace: "default", NodeService: "redis-service"},
	}

	// other ips registered, will attach to them
	fakeAdmin := admin.NewFakeAdmin()
	fakeAdmin.AddrError[myIP] = errors.New("Should not call init cluster")

	endpointSlice := discoveryv1.EndpointSlice{
		ObjectMeta: kmetav1.ObjectMeta{
			Name:      "redis-service-slice",
			Namespace: "default",
			Labels:    map[string]string{discoveryv1.LabelServiceName: "redis-service"},
		},
		AddressType: discoveryv1.AddressTypeIPv4,
		Endpoints: []discoveryv1.Endpoint{
			{Addresses: []string{"1.1.1.1"}},
			{Addresses: []string{"2.2.2.2"}},
		},
		Ports: []discoveryv1.EndpointPort{{Port: int32Ptr(1234)}},
	}

	rn := &RedisNode{
		config:     c,
		redisAdmin: fakeAdmin,
		kubeClient: kfakeclient.NewClientset(&endpointSlice),
	}

	node, err := rn.init()
	if err != nil {
		t.Errorf("Unexpected error: %v", err)
	}
	if node == nil {
		t.Error("node should not be nil")
	}
}

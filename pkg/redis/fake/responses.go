package fake

// ClusterSlotsNode Representation of a node as returned by the CLUSTER SLOTS command (deprecated, use CLUSTER SHARDS instead)
type ClusterSlotsNode struct {
	IP   string
	Port int
}

// ClusterSlotsSlot Representation of a slot as returned by the CLUSTER SLOTS command (deprecated, use CLUSTER SHARDS instead)
type ClusterSlotsSlot struct {
	Min   int
	Max   int
	Nodes []ClusterSlotsNode
}

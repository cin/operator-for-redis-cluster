"use strict";(self.webpackChunkoperator_for_redis_cluster=self.webpackChunkoperator_for_redis_cluster||[]).push([[919],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),o=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},u=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=o(r),b=n,f=c["".concat(s,".").concat(b)]||c[b]||p[b]||l;return r?a.createElement(f,d(d({ref:t},u),{},{components:r})):a.createElement(f,d({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,d=new Array(l);d[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,d[1]=i;for(var o=2;o<l;o++)d[o]=r[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},7686:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=r(7462),n=(r(7294),r(3905));const l={title:"Kubectl Plugin",slug:"/kubectl-plugin"},d="Kubectl Plugin",i={unversionedId:"kubectl-plugin",id:"kubectl-plugin",title:"Kubectl Plugin",description:"The Redis Operator kubectl plugin helps you visualise the status of your Redis cluster. Please visit the official documentation for more details.",source:"@site/docs/kubectl-plugin.md",sourceDirName:".",slug:"/kubectl-plugin",permalink:"/operator-for-redis-cluster/kubectl-plugin",draft:!1,editUrl:"https://cin.github.io/operator-for-redis-cluster/docs/kubectl-plugin.md",tags:[],version:"current",lastUpdatedAt:1682472442,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{title:"Kubectl Plugin",slug:"/kubectl-plugin"},sidebar:"docs",previous:{title:"Cookbook",permalink:"/operator-for-redis-cluster/cookbook"},next:{title:"Redis Server Configuration",permalink:"/operator-for-redis-cluster/configuration"}},s={},o=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Redis Cluster Status",id:"redis-cluster-status",level:2},{value:"Redis Cluster Status Fields",id:"redis-cluster-status-fields",level:3},{value:"Redis Cluster Pod Role Prefix Legend",id:"redis-cluster-pod-role-prefix-legend",level:3},{value:"Redis Cluster State",id:"redis-cluster-state",level:2},{value:"Redis Cluster State Fields",id:"redis-cluster-state-fields",level:3}],u={toc:o},c="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kubectl-plugin"},"Kubectl Plugin"),(0,n.kt)("p",null,"The Redis Operator kubectl plugin helps you visualise the status of your Redis cluster. Please visit the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/extend-kubectl/kubectl-plugins/"},"official documentation")," for more details."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"By default, the plugin will install in ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.kube/plugins"),"."),(0,n.kt)("p",null,"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"make plugin")," to install the plugin. After installation is complete, add the plugin to your PATH so ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/extend-kubectl/kubectl-plugins/#installing-kubectl-plugins"},(0,n.kt)("inlineCode",{parentName:"a"},"kubectl"))," can find it. By default, the plugin is installed to ",(0,n.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/plugins/rediscluster"),"."),(0,n.kt)("p",null,"Alternatively, you can download the plugin manually from the assets tab on the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/IBM/operator-for-redis-cluster/releases"},"releases page")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Example usage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"kubectl rc\n  POD NAME                                    IP              NODE           ID                                        ZONE   USED MEMORY  MAX MEMORY  KEYS        SLOTS\n  + rediscluster-rc1-node-for-redis-7jl8q  172.30.255.112  10.183.176.60  5478771ba4c34dbad9df8d30ac4bec5c9ba0842e  wdc04  1023.75M     1.00G       db0=669808  2731-5461\n  | rediscluster-rc1-node-for-redis-7q9jn  172.30.68.235   10.191.41.164  15c388f164ad0946691482c7de72939848ca86e2  wdc07  1023.76M     1.00G       db0=669808\n  | rediscluster-rc1-node-for-redis-wjkk4  172.30.255.169  10.188.125.58  442de26f8cc9a011df307932a683177a5cd034a9  wdc06  1023.77M     1.00G       db0=669808\n  + rediscluster-rc1-node-for-redis-bmrgm  172.30.217.164  10.183.176.51  dd59697e82edf1554468f239f63ea1efd6718d4b  wdc04  1023.78M     1.00G       db0=669675  5462-8192\n  | rediscluster-rc1-node-for-redis-7lw4l  172.30.61.98    10.188.125.33  fc5718a7e9bd963f80b9cbd786bbc02d80b7f191  wdc06  1023.78M     1.00G       db0=669675\n  | rediscluster-rc1-node-for-redis-qtzx8  172.30.188.104  10.191.41.140  8cd31d550d6935868d5da12ab78ddfb8c6fea1a2  wdc07  1023.78M     1.00G       db0=669675\n  + rediscluster-rc1-node-for-redis-dbrmg  172.30.140.228  10.183.176.53  c56420993afd35596425ae9e10a7e902cad5b6f8  wdc04  1023.78M     1.00G       db0=670310  13655-16383\n  | rediscluster-rc1-node-for-redis-f4mxd  172.30.68.236   10.191.41.164  b3356e03f83227832662f1bc3bae50273e99059b  wdc07  1023.82M     1.00G       db0=670310\n  | rediscluster-rc1-node-for-redis-hhzdx  172.30.255.170  10.188.125.58  cc7bb986e42dd2fe9ead405e39a1a559b1b86e71  wdc06  1023.77M     1.00G       db0=670310\n  + rediscluster-rc1-node-for-redis-srxrs  172.30.188.105  10.191.41.140  31e880eef26377e719b28894a8fa469939b05a98  wdc07  1023.79M     1.00G       db0=669522  10924-13654\n  | rediscluster-rc1-node-for-redis-hg6q4  172.30.255.113  10.183.176.60  bd9cd001e5bdcba527277e39f63908ea18504f75  wdc04  1023.80M     1.00G       db0=669522\n  | rediscluster-rc1-node-for-redis-zgmqk  172.30.16.231   10.188.125.3   caaac384a8cd2cb6181925c889557bdb028aec0e  wdc06  1023.81M     1.00G       db0=669522\n  + rediscluster-rc1-node-for-redis-szb9x  172.30.61.97    10.188.125.33  07de0c67262e816f7792f0a68c4c4a5b47291f46  wdc06  1023.80M     1.00G       db0=669743  0-2730\n  | rediscluster-rc1-node-for-redis-gvkb4  172.30.217.165  10.183.176.51  f1ff1e5c0a77cb7b5850d8808f950c1303f96056  wdc04  1023.76M     1.00G       db0=669743\n  | rediscluster-rc1-node-for-redis-znn4x  172.30.67.94    10.191.41.163  e0ab667b6629a660b01c20574750e3a487c69a1b  wdc07  1023.78M     1.00G       db0=669743\n  + rediscluster-rc1-node-for-redis-xf8mr  172.30.67.95    10.191.41.163  8e9fe3e022f63f5fcc2a117edaadd93e39bfbb27  wdc07  1023.78M     1.00G       db0=669711  8193-10923\n  | rediscluster-rc1-node-for-redis-r2qd2  172.30.16.232   10.188.125.3   0da8f5799b86c40f7ea0c3ebf71ce3955afa1dd1  wdc06  1023.79M     1.00G       db0=669711\n  | rediscluster-rc1-node-for-redis-zfsxt  172.30.140.229  10.183.176.53  b4c22806c4c2529713e6e05b0d6fd994f0e801c7  wdc04  1023.78M     1.00G       db0=669711\n\n  POD NAME                                    IP              NODE           ID                                        ZONE   USED MEMORY  MAX MEMORY  KEYS        SLOTS\n  + rediscluster-rc2-node-for-redis-57g56  172.30.68.237   10.191.41.164  cc82878c2bdd6381d569709334db86ef6cfade19  wdc07  175.67M      1.00G       db0=113397  5462-10923\n  + rediscluster-rc2-node-for-redis-942rt  172.30.140.230  10.183.176.53  291f2f06d13a1d821219bc9acfbd5323be1552d9  wdc04  174.82M      1.00G       db0=112681  10924-16383\n  + rediscluster-rc2-node-for-redis-gqmhs  172.30.16.233   10.188.125.3   85f3c1c6652b5fb76b40c8bdffe3a9af57f22d4d  wdc06  175.34M      1.00G       db0=113014  0-5461\n\n  NAME                   NAMESPACE  PODS      OPS STATUS  REDIS STATUS  NB PRIMARY  REPLICATION\n  rc1-node-for-redis  default    18/18/18  ClusterOK   OK            6/6         2-2/2\n  rc2-node-for-redis  default    3/3/3     ClusterOK   OK            3/3         0-0/0\n")),(0,n.kt)("p",null,"The example above illustrates the Redis cluster plugin's output when there are two clusters being managed by one Redis operator. The top portion of the output is referred to as the Redis cluster's status and the bottom portion refers to the Redis cluster's state."),(0,n.kt)("h2",{id:"redis-cluster-status"},"Redis Cluster Status"),(0,n.kt)("p",null,"The Redis cluster status provides an easy way to see how your cluster is set up and which replicas belong to which primary. Without the cluster state, it's really difficult to determine in which ",(0,n.kt)("inlineCode",{parentName:"p"},"ZONE")," a Redis pod resides. The ",(0,n.kt)("inlineCode",{parentName:"p"},"POD NAME"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"IP"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"ID")," fields help when parsing logs because these properties are used differently depending on what part of the code is logging messages. The ",(0,n.kt)("inlineCode",{parentName:"p"},"USED MEMORY")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"MAX MEMORY")," fields help determine if you should be seeing evictions, while the ",(0,n.kt)("inlineCode",{parentName:"p"},"KEYS")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"SLOTS")," fields can help determine if you have any hot spots in your cluster."),(0,n.kt)("h3",{id:"redis-cluster-status-fields"},"Redis Cluster Status Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"POD NAME"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of Redis pod where the first character indicates its role. See the ",(0,n.kt)("a",{parentName:"td",href:"#redis-cluster-pod-role-prefix-legend"},"legend")," for more details")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IP"),(0,n.kt)("td",{parentName:"tr",align:null},"Internal IP address of the Redis pod")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NODE"),(0,n.kt)("td",{parentName:"tr",align:null},"IP address of the worker node on which the pod has been scheduled")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ID"),(0,n.kt)("td",{parentName:"tr",align:null},"Redis ID of the pod")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ZONE"),(0,n.kt)("td",{parentName:"tr",align:null},"Zone of the worker node on which the pod has been scheduled")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"USED MEMORY"),(0,n.kt)("td",{parentName:"tr",align:null},"Human-readable representation of the total number of bytes allocated by Redis using its allocator")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MAX MEMORY"),(0,n.kt)("td",{parentName:"tr",align:null},"Human-readable representation of Redis' ",(0,n.kt)("inlineCode",{parentName:"td"},"maxmemory")," configuration directive")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"KEYS"),(0,n.kt)("td",{parentName:"tr",align:null},"List of the number of keys in each database using the form ",(0,n.kt)("inlineCode",{parentName:"td"},"db0:db0_key_count"),",",(0,n.kt)("inlineCode",{parentName:"td"},"db1:db1_key_count"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SLOTS"),(0,n.kt)("td",{parentName:"tr",align:null},"List of the slot ranges owned by this primary")))),(0,n.kt)("h3",{id:"redis-cluster-pod-role-prefix-legend"},"Redis Cluster Pod Role Prefix Legend"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Prefix"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"+"),(0,n.kt)("td",{parentName:"tr",align:null},"Primary")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"|"),(0,n.kt)("td",{parentName:"tr",align:null},"Replica to the primary above")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"?"),(0,n.kt)("td",{parentName:"tr",align:null},"Pod that matches the label selector but is not a part of the cluster yet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"^"),(0,n.kt)("td",{parentName:"tr",align:null},"Pod that is currently joining the cluster but has yet to be assigned a role")))),(0,n.kt)("h2",{id:"redis-cluster-state"},"Redis Cluster State"),(0,n.kt)("p",null,"The Redis cluster state provides additional information that is useful when trying to determine the cluster's health. It also indicates if a scaling, rebalancing, or rolling update operation is occurring."),(0,n.kt)("h3",{id:"redis-cluster-state-fields"},"Redis Cluster State Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NAME"),(0,n.kt)("td",{parentName:"tr",align:null},"Redis cluster name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NAMESPACE"),(0,n.kt)("td",{parentName:"tr",align:null},"Namespace of Redis cluster deployment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"OPS STATUS"),(0,n.kt)("td",{parentName:"tr",align:null},"ClusterOK ","|"," Scaling ","|"," Rebalancing ","|"," RollingUpdate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"REDIS STATUS"),(0,n.kt)("td",{parentName:"tr",align:null},"OK ","|"," KO ","|"," Scaling ","|"," Calculating Rebalancing ","|"," Rebalancing ","|"," RollingUpdate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PODS"),(0,n.kt)("td",{parentName:"tr",align:null},"Current number of ready pods / current number of total pods / desired number of pods")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NB PRIMARY"),(0,n.kt)("td",{parentName:"tr",align:null},"Current number of primaries / desired number of primaries")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"REPLICATION"),(0,n.kt)("td",{parentName:"tr",align:null},"Current min RF - current max RF / desired RF")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ZONE SKEW"),(0,n.kt)("td",{parentName:"tr",align:null},"Primary node zone skew / replica node zone skew / BALANCED ","|"," UNBALANCED")))))}p.isMDXComponent=!0}}]);
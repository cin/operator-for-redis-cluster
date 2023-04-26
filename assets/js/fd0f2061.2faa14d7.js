"use strict";(self.webpackChunkoperator_for_redis_cluster=self.webpackChunkoperator_for_redis_cluster||[]).push([[168],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9613:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={title:"Rolling Update Procedure",slug:"/rolling-update"},i="Rolling Update Procedure",l={unversionedId:"rolling-update",id:"rolling-update",title:"Rolling Update Procedure",description:"Overview",source:"@site/docs/rolling-update.md",sourceDirName:".",slug:"/rolling-update",permalink:"/operator-for-redis-cluster/rolling-update",draft:!1,editUrl:"https://cin.github.io/operator-for-redis-cluster/docs/rolling-update.md",tags:[],version:"current",lastUpdatedAt:1682472442,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{title:"Rolling Update Procedure",slug:"/rolling-update"},sidebar:"docs",previous:{title:"Scaling Operations",permalink:"/operator-for-redis-cluster/scaling"},next:{title:"Key Migration",permalink:"/operator-for-redis-cluster/key-migration"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Redis cluster upgrades",id:"redis-cluster-upgrades",level:2},{value:"Resource limitations",id:"resource-limitations",level:2}],d={toc:s},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rolling-update-procedure"},"Rolling Update Procedure"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"In production, developers aim for zero downtime when periodically deploying newer versions of their application. Per Kubernetes documentation:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"rolling updates allow Deployments' update to take place with zero downtime by incrementally updating Pods instances with new ones")),(0,n.kt)("p",null,"To learn more about how rolling updates work in k8s, see ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/"},"Performing a Rolling Update"),"."),(0,n.kt)("h2",{id:"redis-cluster-upgrades"},"Redis cluster upgrades"),(0,n.kt)("p",null,"A rolling update occurs when the user applies a change to the Redis cluster pod template spec. For example, a user might update the Redis cluster pod image tag in ",(0,n.kt)("inlineCode",{parentName:"p"},"charts/node-for-redis/values.yaml")," and run ",(0,n.kt)("inlineCode",{parentName:"p"},"helm upgrade"),". When the Redis operator detects the pod template spec change, the following procedure takes place:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Compare the number of running Redis pods with the number of pods required for the rolling update:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"# migration pods = 1 + replication factor\n# required pods = # primaries x # migration pods\n# pods to create = # required pods + # migration pods - # of running pods\n")),"where ",(0,n.kt)("inlineCode",{parentName:"li"},"# migration pods")," is the number of pods needed to migrate one primary and all of its replicas, ",(0,n.kt)("inlineCode",{parentName:"li"},"# required pods")," is the total number of pods required for the cluster, and ",(0,n.kt)("inlineCode",{parentName:"li"},"# pods to create")," is the number of pods to create on a single rolling update iteration."),(0,n.kt)("li",{parentName:"ol"},"If ",(0,n.kt)("inlineCode",{parentName:"li"},"# pods to create > 0"),", create additional pods with the new pod template spec."),(0,n.kt)("li",{parentName:"ol"},"Separate old nodes and new nodes according to their pod spec hash annotation."),(0,n.kt)("li",{parentName:"ol"},"Select the old primary node to replace with one of the newly created pods."),(0,n.kt)("li",{parentName:"ol"},"Generate the primary to replicas mapping for the newly created pods."),(0,n.kt)("li",{parentName:"ol"},"Attach the new replicas to the new primary.   "),(0,n.kt)("li",{parentName:"ol"},"Migrate slots (and by default, keys) from the old primary to the new primary. "),(0,n.kt)("li",{parentName:"ol"},"Detach, forget, and delete the old pods.")),(0,n.kt)("p",null,"The Redis cluster rolling update procedure ensures that there is no downtime as new nodes replace old ones. However, because the migration of keys from old primaries to new ones is a time intensive operation, you may see a temporary decrease in the performance of your cluster during this process. To learn more about step 7, see ",(0,n.kt)("a",{parentName:"p",href:"/operator-for-redis-cluster/key-migration"},"key migration"),"."),(0,n.kt)("h2",{id:"resource-limitations"},"Resource limitations"),(0,n.kt)("p",null,"This procedure requires additional resources beyond what is normally allocated to the Redis cluster. More specifically, this procedure creates an extra ",(0,n.kt)("inlineCode",{parentName:"p"},"1 + replication factor")," pods on each rolling update iteration, so you will need ensure that you have allocated sufficient resources. For standard configurations that allow multiple pods per node, you may need to increase memory + cpu on your existing nodes. If you have configured your cluster topology to limit one Redis pod per k8s node, you may need to increase the number of k8s nodes in your worker pool."),(0,n.kt)("p",null,"In the case where there are insufficient resources to schedule new Redis pods, the pods will get stuck in ",(0,n.kt)("inlineCode",{parentName:"p"},"Pending")," state. This state is difficult to recover from because the Redis operator will continue to apply the rolling update procedure until it completes. If you find your newly created pods are in ",(0,n.kt)("inlineCode",{parentName:"p"},"Pending")," state, increase the allocated memory + cpus."))}c.isMDXComponent=!0}}]);
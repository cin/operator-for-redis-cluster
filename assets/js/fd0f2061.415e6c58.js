"use strict";(self.webpackChunkoperator_for_redis_cluster=self.webpackChunkoperator_for_redis_cluster||[]).push([[168],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return r?o.createElement(f,a(a({ref:t},d),{},{components:r})):o.createElement(f,a({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9613:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],l={title:"Rolling Update Procedure",slug:"/rolling-update"},p="Rolling Update Procedure",s={unversionedId:"rolling-update",id:"rolling-update",title:"Rolling Update Procedure",description:"Overview",source:"@site/docs/rolling-update.md",sourceDirName:".",slug:"/rolling-update",permalink:"/operator-for-redis-cluster/rolling-update",editUrl:"https://ibm.github.io/operator-for-redis-cluster/docs/rolling-update.md",tags:[],version:"current",lastUpdatedAt:1641591035,formattedLastUpdatedAt:"1/7/2022",frontMatter:{title:"Rolling Update Procedure",slug:"/rolling-update"},sidebar:"docs",previous:{title:"Scaling Operations",permalink:"/operator-for-redis-cluster/scaling"},next:{title:"Key Migration",permalink:"/operator-for-redis-cluster/key-migration"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"Redis cluster upgrades",id:"redis-cluster-upgrades",children:[],level:2},{value:"Resource limitations",id:"resource-limitations",children:[],level:2}],u={toc:d};function c(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rolling-update-procedure"},"Rolling Update Procedure"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In production, developers aim for zero downtime when periodically deploying newer versions of their application. Per Kubernetes documentation:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"rolling updates allow Deployments' update to take place with zero downtime by incrementally updating Pods instances with new ones")),(0,i.kt)("p",null,"To learn more about how rolling updates work in k8s, see ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/"},"Performing a Rolling Update"),"."),(0,i.kt)("h2",{id:"redis-cluster-upgrades"},"Redis cluster upgrades"),(0,i.kt)("p",null,"A rolling update occurs when the user applies a change to the Redis cluster pod template spec. For example, a user might update the Redis cluster pod image tag in ",(0,i.kt)("inlineCode",{parentName:"p"},"charts/node-for-redis/values.yaml")," and run ",(0,i.kt)("inlineCode",{parentName:"p"},"helm upgrade"),". When the Redis operator detects the pod template spec change, the following procedure takes place:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Compare the number of running Redis pods with the number of pods required for the rolling update:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"# migration pods = 1 + replication factor\n# required pods = # primaries x # migration pods\n# pods to create = # required pods + # migration pods - # of running pods\n")),"where ",(0,i.kt)("inlineCode",{parentName:"li"},"# migration pods")," is the number of pods needed to migrate one primary and all of its replicas, ",(0,i.kt)("inlineCode",{parentName:"li"},"# required pods")," is the total number of pods required for the cluster, and ",(0,i.kt)("inlineCode",{parentName:"li"},"# pods to create")," is the number of pods to create on a single rolling update iteration."),(0,i.kt)("li",{parentName:"ol"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"# pods to create > 0"),", create additional pods with the new pod template spec."),(0,i.kt)("li",{parentName:"ol"},"Separate old nodes and new nodes according to their pod spec hash annotation."),(0,i.kt)("li",{parentName:"ol"},"Select the old primary node to replace with one of the newly created pods."),(0,i.kt)("li",{parentName:"ol"},"Generate the primary to replicas mapping for the newly created pods."),(0,i.kt)("li",{parentName:"ol"},"Attach the new replicas to the new primary.   "),(0,i.kt)("li",{parentName:"ol"},"Migrate slots (and by default, keys) from the old primary to the new primary. "),(0,i.kt)("li",{parentName:"ol"},"Detach, forget, and delete the old pods.")),(0,i.kt)("p",null,"The Redis cluster rolling update procedure ensures that there is no downtime as new nodes replace old ones. However, because the migration of keys from old primaries to new ones is a time intensive operation, you may see a temporary decrease in the performance of your cluster during this process. To learn more about step 7, see ",(0,i.kt)("a",{parentName:"p",href:"/operator-for-redis-cluster/key-migration"},"key migration"),"."),(0,i.kt)("h2",{id:"resource-limitations"},"Resource limitations"),(0,i.kt)("p",null,"This procedure requires additional resources beyond what is normally allocated to the Redis cluster. More specifically, this procedure creates an extra ",(0,i.kt)("inlineCode",{parentName:"p"},"1 + replication factor")," pods on each rolling update iteration, so you will need ensure that you have allocated sufficient resources. For standard configurations that allow multiple pods per node, you may need to increase memory + cpu on your existing nodes. If you have configured your cluster topology to limit one Redis pod per k8s node, you may need to increase the number of k8s nodes in your worker pool."),(0,i.kt)("p",null,"In the case where there are insufficient resources to schedule new Redis pods, the pods will get stuck in ",(0,i.kt)("inlineCode",{parentName:"p"},"Pending")," state. This state is difficult to recover from because the Redis operator will continue to apply the rolling update procedure until it completes. If you find your newly created pods are in ",(0,i.kt)("inlineCode",{parentName:"p"},"Pending")," state, increase the allocated memory + cpus."))}c.isMDXComponent=!0}}]);
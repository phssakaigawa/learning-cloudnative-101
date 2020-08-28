(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{xjyh:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return u}));var a,o=n("wx14"),i=n("zLVn"),r=(n("q1tI"),n("7ljp")),c=n("013z"),b=(n("qKvR"),{}),l=(a="InlineNotification",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),s={_frontmatter:b},p=c.a;function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(p,Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Problem"),Object(r.b)("p",null,"This service has already been packaged into a container image, but there is one special requirement:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The legacy app is hard-coded to only serve content on port ",Object(r.b)("inlineCode",{parentName:"li"},"8989"),", but the team wants to be able to access the service using the standard port ",Object(r.b)("inlineCode",{parentName:"li"},"80"),".")),Object(r.b)("p",null,"Your task is to build a Kubernetes pod that runs this legacy container and uses the ambassador design pattern to expose access to the service on port ",Object(r.b)("inlineCode",{parentName:"p"},"80"),"."),Object(r.b)("p",null,"This setup will need to meet the following specifications:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The pod should have the name ",Object(r.b)("inlineCode",{parentName:"li"},"vader-service"),"."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"vader-service")," pod should have a container that runs the legacy vader service image: ",Object(r.b)("inlineCode",{parentName:"li"},"ibmcase/millennium-falcon:1"),"."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"vader-service")," pod should have an ambassador container that runs the ",Object(r.b)("inlineCode",{parentName:"li"},"haproxy:1.7")," image and proxies incoming traffic on port ",Object(r.b)("inlineCode",{parentName:"li"},"80")," to the legacy service on port ",Object(r.b)("inlineCode",{parentName:"li"},"8989")," (the HAProxy configuration for this is provided below)."),Object(r.b)("li",{parentName:"ul"},"Port ",Object(r.b)("inlineCode",{parentName:"li"},"80")," should be exposed as a ",Object(r.b)("inlineCode",{parentName:"li"},"containerPort"),".")),Object(r.b)(l,{mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": You do not need to expose port 8989")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The HAProxy configuration should be stored in a ConfigMap called ",Object(r.b)("inlineCode",{parentName:"li"},"vader-service-ambassador-config"),"."),Object(r.b)("li",{parentName:"ul"},"The HAProxy config should be provided to the ambassador container using a volume mount that places the data from the ConfigMap in a file at /usr/local/etc/haproxy/haproxy.cfg.\nhaproxy.cfg should contain the following configuration data:")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"global\n    daemon\n    maxconn 256\n\ndefaults\n    mode http\n    timeout connect 5000ms\n    timeout client 50000ms\n    timeout server 50000ms\n\nlisten http-in\n    bind *:80\n    server server1 127.0.0.1:8989 maxconn 32\n")),Object(r.b)("p",null,"Once your pod is up and running, it’s a good idea to test it to make sure you can access the service from within the cluster using port 80. In order to do this, you can create a busybox pod in the cluster, and then run a command to attempt to access the service from within the busybox pod."),Object(r.b)("p",null,"Create a descriptor for the busybox pod called ",Object(r.b)("inlineCode",{parentName:"p"},"busybox.yml")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox\nspec:\n  containers:\n  - name: myapp-container\n    image: radial/busyboxplus:curl\n    command: ['sh', '-c', 'while true; do sleep 3600; done']\n")),Object(r.b)("p",null,"Create the busybox testing pod."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl apply -f busybox.yml\n")),Object(r.b)("p",null,"Use this command to access ",Object(r.b)("inlineCode",{parentName:"p"},"vader-service")," using port 80 from within the busybox pod."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"kubectl exec busybox -- curl $(kubectl get pod vader-service -o=custom-columns=IP:.status.podIP --no-headers):80\n")),Object(r.b)("p",null,"If the service is working, you should get a message that the hyper drive of the millennium falcon needs repair."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Relevant Documentation:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/cluster-administration/logging/#using-a-sidecar-container-with-the-logging-agent"}),"Kubernetes Sidecar Logging Agent")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/communicate-containers-same-pod-shared-volume/"}),"Shared Volumes")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/"}),"Distributed System Toolkit Patterns"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-lab-3-index-mdx-b307e75c3856eefc97fa.js.map
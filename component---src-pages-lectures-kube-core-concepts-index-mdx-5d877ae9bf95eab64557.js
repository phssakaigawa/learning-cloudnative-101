(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{Qj8b:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));var b=n("wx14"),a=n("zLVn"),c=(n("q1tI"),n("7ljp")),p=n("013z"),r=(n("qKvR"),{}),o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},l=o("AnchorLinks"),s=o("AnchorLink"),j=o("Tabs"),i=o("Tab"),O={_frontmatter:r},u=p.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)(u,Object(b.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(l,{small:!0,mdxType:"AnchorLinks"},Object(c.b)(s,{mdxType:"AnchorLink"},"Kubernetes API Primitives"),Object(c.b)(s,{mdxType:"AnchorLink"},"Creating Pods"),Object(c.b)(s,{mdxType:"AnchorLink"},"Namespaces")),Object(c.b)("h1",null,"Kubernetes API Primitives"),Object(c.b)("p",null,"Kubernetes API primitive, also known as Kubernetes objects, are the basic building blocks of any application running in Kubernetes"),Object(c.b)("p",null,"Examples:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Pod"),Object(c.b)("li",{parentName:"ul"},"Node"),Object(c.b)("li",{parentName:"ul"},"Service"),Object(c.b)("li",{parentName:"ul"},"ServiceAccount")),Object(c.b)("p",null,"Two primary members"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Spec, desired state"),Object(c.b)("li",{parentName:"ul"},"Status, current state")),Object(c.b)("h2",null,"Resources"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"OpenShift")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/nodes/pods/nodes-pods-using.html"}),"Pods")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/nodes/nodes/nodes-nodes-viewing.html"}),"Nodes"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"IKS")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/"}),"Objects")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"}),"Kube Basics"))),Object(c.b)("h2",null,"References"),Object(c.b)(j,{mdxType:"Tabs"},Object(c.b)(i,{label:"OpenShift",mdxType:"Tab"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Prints all API Resources")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-language=bash"}),"oc api-resources\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Prints all API Resources with their verbs.")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"oc api-resources -o wide\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Prints all API Resources names only")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"oc api-resources -o name\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Explain the Resource specification")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"oc explain Pod.spec\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Getting a list of specific objects")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"oc get nodes,ns,po,deploy,svc\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Describing the resources")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"oc describe node \n"))),Object(c.b)(i,{label:"IKS",mdxType:"Tab"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Prints all API Resources")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"kubectl api-resources\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Prints all API Resources with their verbs.")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"kubectl api-resources -o wide\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Prints all API Resources names only")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"kubectl api-resources -o name\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Explain the Resource specification")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"kubectl explain Pod.spec\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Getting a list of specific objects")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"kubectl get nodes,ns,po,deploy,svc\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Describing the resources")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"kubectl describe node\n")))),Object(c.b)("h1",null,"Creating Pods"),Object(c.b)("p",null,"A Pod is the basic execution unit of a Kubernetes application–the smallest and simplest unit in the Kubernetes object model that you create or deploy. A Pod represents processes running on your Cluster."),Object(c.b)("p",null,"A Pod encapsulates an application’s container (or, in some cases, multiple containers), storage resources, a unique network IP, and options that govern how the container(s) should run. A Pod represents a unit of deployment: a single instance of an application in Kubernetes, which might consist of either a single container or a small number of containers that are tightly coupled and that share resources."),Object(c.b)("h2",null,"Resources"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"OpenShift")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/nodes/pods/nodes-pods-using.html"}),"About Pods")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/nodes/pods/nodes-pods-configuring.html"}),"Cluster Configuration for Pods")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/nodes/pods/nodes-pods-autoscaling.html"}),"Pod Autoscaling"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"IKS")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/"}),"Pod Overview")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/"}),"Pod Lifecycle")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/workloads/pods/pod/"}),"Pod Usage"))),Object(c.b)("h2",null,"References"),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: myapp-pod\n  labels:\n    app: myapp\nspec:\n  containers:\n    - name: myapp-container\n      image: busybox\n      command: ["sh", "-c", "echo Hello Kubernetes! && sleep 3600"]\n')),Object(c.b)(j,{mdxType:"Tabs"},Object(c.b)(i,{label:"OpenShift",mdxType:"Tab"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Create Pod using yaml file ")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"oc apply -f pod.yaml\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Get Current Pods in Project ")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"oc get pods\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Get Pods with their IP and node location ")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"oc get pods -o wide\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Get Pod’s Description ")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"oc describe pod myapp-pod\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Get the logs  ")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"oc logs myapp-pod\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Delete a Pod ")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"oc delete pod myapp-pod\n"))),Object(c.b)(i,{label:"IKS",mdxType:"Tab"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Create Pod using yaml file ")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"kubectl apply -f pod.yaml\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Get Current Pods in Project ")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"kubectl get pods\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Get Pods with their IP and node location ")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"kubectl get pods -o wide\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Get Pod’s Description ")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"kubectl describe pod myapp-pod\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Get the logs  ")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"kubectl logs myapp-pod\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"}," Delete a Pod ")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"kubectl delete pod myapp-pod\n")))),Object(c.b)("h1",null,"Projects/Namespaces"),Object(c.b)("p",null,"Namespaces are intended for use in environments with many users spread across multiple teams, or projects."),Object(c.b)("p",null,"Namespaces provide a scope for names. Names of resources need to be unique within a namespace, but not across namespaces."),Object(c.b)("p",null,"Namespaces are a way to divide cluster resources between multiple users (via resource quota)."),Object(c.b)("p",null,"It is not necessary to use multiple namespaces just to separate slightly different resources, such as different versions of the same software: use labels to distinguish resources within the same namespace. In practice namespaces are used to deploy different versions based on stages of the CICD pipeline (dev, test, stage, prod)"),Object(c.b)("h2",null,"Resources"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"OpenShift")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/projects/working-with-projects.html"}),"Working With Projects")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/cli_reference/openshift_cli/getting-started-cli.html#creating-a-project"}),"Creating Projects")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://docs.openshift.com/container-platform/4.3/applications/projects/configuring-project-creation.html"}),"Configure Project Creation"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"IKS")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"}),"Namespaces"))),Object(c.b)("h2",null,"References:"),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: dev\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: myapp-pod\n  namespace: dev\nspec:\n  containers:\n    - name: myapp-container\n      image: busybox\n      command: ["sh", "-c", "echo Hello Kubernetes! && sleep 3600"]\n')),Object(c.b)(j,{mdxType:"Tabs"},Object(c.b)(i,{label:"OpenShift",mdxType:"Tab"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Getting all namespaces/projects")," "),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"oc projects\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Create a new Project")," "),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"oc new-project dev\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Viewing Current Project")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"oc project\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Setting Namespace in Context")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"oc project dev\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Viewing Project Status")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"oc status\n"))),Object(c.b)(i,{label:"IKS",mdxType:"Tab"},Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Getting all namespaces")," "),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"kubectl get namespaces\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Create a new namespace called bar")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"kubectl create ns dev\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Setting Namespace in Context")),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{}),"kubectl config set-context --current --namespace=dev\n")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-core-concepts-index-mdx-5d877ae9bf95eab64557.js.map
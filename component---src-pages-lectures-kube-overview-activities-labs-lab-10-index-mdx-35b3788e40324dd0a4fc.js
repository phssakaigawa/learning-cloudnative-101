(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{C9oz:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return p})),a.d(t,"default",(function(){return c}));var n=a("wx14"),l=a("zLVn"),b=(a("q1tI"),a("7ljp")),i=a("013z"),p=(a("qKvR"),{}),o={_frontmatter:p},r=i.a;function c(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(b.b)(r,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Problem"),Object(b.b)("p",null,"The death star plans can’t be lost no matter what happens so we need to make sure we protect them at all costs."),Object(b.b)("p",null,"In order to do that you will need to do the following:"),Object(b.b)("p",null,"Create a ",Object(b.b)("inlineCode",{parentName:"p"},"PersistentVolume"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"The PersistentVolume should be named ",Object(b.b)("inlineCode",{parentName:"p"},"postgresql-pv"),".")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"The volume needs a capacity of ",Object(b.b)("inlineCode",{parentName:"p"},"1Gi"),".")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Use a storageClassName of ",Object(b.b)("inlineCode",{parentName:"p"},"localdisk"),".")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Use the accessMode ",Object(b.b)("inlineCode",{parentName:"p"},"ReadWriteOnce"),".")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Store the data locally on the node using a ",Object(b.b)("inlineCode",{parentName:"p"},"hostPath")," volume at the location ",Object(b.b)("inlineCode",{parentName:"p"},"/mnt/data"),"."))),Object(b.b)("p",null,"Create a ",Object(b.b)("inlineCode",{parentName:"p"},"PersistentVolumeClaim"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"The PersistentVolumeClaim should be named ",Object(b.b)("inlineCode",{parentName:"p"},"postgresql-pv-claim"),".")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Set a resource request on the claim for ",Object(b.b)("inlineCode",{parentName:"p"},"500Mi")," of storage.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Use the same storageClassName and accessModes as the PersistentVolume so that this claim can bind to the PersistentVolume."))),Object(b.b)("p",null,"Create a ",Object(b.b)("inlineCode",{parentName:"p"},"Postgresql")," Pod configured to use the ",Object(b.b)("inlineCode",{parentName:"p"},"PersistentVolumeClaim"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"The Pod should be named ",Object(b.b)("inlineCode",{parentName:"p"},"postgresql-pod"),".")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Use the image ",Object(b.b)("inlineCode",{parentName:"p"},"bitnami/postgresql"),".")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Expose the containerPort ",Object(b.b)("inlineCode",{parentName:"p"},"5432"),".")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Set an ",Object(b.b)("inlineCode",{parentName:"p"},"environment variable")," called ",Object(b.b)("inlineCode",{parentName:"p"},"MYSQL_ROOT_PASSWORD")," with the value ",Object(b.b)("inlineCode",{parentName:"p"},"password"),".")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Add the ",Object(b.b)("inlineCode",{parentName:"p"},"PersistentVolumeClaim")," as a volume and mount it to the container at the path ",Object(b.b)("inlineCode",{parentName:"p"},"/bitnami/postgresql/"),"."))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-lab-10-index-mdx-35b3788e40324dd0a4fc.js.map
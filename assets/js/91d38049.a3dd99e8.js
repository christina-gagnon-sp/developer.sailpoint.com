"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[30261],{2340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={id:"reference",title:"Reference",pagination_label:"Reference",sidebar_label:"Reference",sidebar_class_name:"reference",keywords:["transforms","operations","reference"],description:"Reuse a transform that has already been written.",slug:"/docs/transforms/operations/reference",tags:["Transforms","Transform Operations"]},o=void 0,i={unversionedId:"docs/identity-now/transforms/operations/reference",id:"docs/identity-now/transforms/operations/reference",title:"Reference",description:"Reuse a transform that has already been written.",source:"@site/products/idn/docs/identity-now/transforms/operations/reference.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/reference",permalink:"/idn/docs/transforms/operations/reference",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/reference.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1693831543,formattedLastUpdatedAt:"Sep 4, 2023",frontMatter:{id:"reference",title:"Reference",pagination_label:"Reference",sidebar_label:"Reference",sidebar_class_name:"reference",keywords:["transforms","operations","reference"],description:"Reuse a transform that has already been written.",slug:"/docs/transforms/operations/reference",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Random Numeric",permalink:"/idn/docs/transforms/operations/random-numeric"},next:{title:"Replace All",permalink:"/idn/docs/transforms/operations/replace-all"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Use the reference transform to reuse a transform that has already been written within another transform. This transform is often useful when you want to repeat the same logic multiple times within other transforms. This transform allows you to maintain only one transform and have it propagate through to other implementations of that logic."),(0,a.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,a.kt)("p",null,"In addition to the standard ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," attributes, the structure of a reference transform requires the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of the transform you want to reference:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "id": "Build Display Name"\n  },\n  "type": "reference",\n  "name": "Reference Transform"\n}\n')),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Required Attributes")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"reference"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"id")," - This ID specifies the name of the pre-existing transform you want to use within your current transform."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,'If you had a "Get Worker Type" transform that evaluated multiple pieces of data to determine whether a user is an employee or a contractor, this transform would output the result of that transform just as if the logic were contained directly within this transform.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "id": "Get Worker Type"\n  },\n  "type": "reference",\n  "name": "Reference Transform"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\xa0"),(0,a.kt)("p",null,'This transform builds the user\'s display name, adds a hyphen to the end, and then adds the evaluated worker type from the earlier transform to build a string that would look something like "John Smith - Employee".'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "values": [\n      {\n        "attributes": {\n          "id": "Get Display Name"\n        },\n        "type": "reference"\n      },\n      " - ",\n      {\n        "attributes": {\n          "id": "Get Worker Type"\n        },\n        "type": "reference"\n      }\n    ]\n  },\n  "type": "concat",\n  "name": "Reference Transform"\n}\n')))}d.isMDXComponent=!0}}]);
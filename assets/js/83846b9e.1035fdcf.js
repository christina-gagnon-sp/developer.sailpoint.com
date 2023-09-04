"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[60332],{69439:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={id:"first-valid",title:"First Valid",pagination_label:"First Valid",sidebar_label:"First Valid",sidebar_class_name:"firstValid",keywords:["transforms","operations","first","valid"],description:"Return the first piece of data that is not null.",slug:"/docs/transforms/operations/first-valid",tags:["Transforms","Transform Operations"]},s=void 0,o={unversionedId:"docs/identity-now/transforms/operations/first-valid",id:"docs/identity-now/transforms/operations/first-valid",title:"First Valid",description:"Return the first piece of data that is not null.",source:"@site/products/idn/docs/identity-now/transforms/operations/first-valid.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/first-valid",permalink:"/idn/docs/transforms/operations/first-valid",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/first-valid.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1693831543,formattedLastUpdatedAt:"Sep 4, 2023",frontMatter:{id:"first-valid",title:"First Valid",pagination_label:"First Valid",sidebar_label:"First Valid",sidebar_class_name:"firstValid",keywords:["transforms","operations","first","valid"],description:"Return the first piece of data that is not null.",slug:"/docs/transforms/operations/first-valid",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"E.164 Phone",permalink:"/idn/docs/transforms/operations/e164-phone"},next:{title:"Generate Random String",permalink:"/idn/docs/transforms/operations/generate-random-string"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],d={toc:u};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Use the first valid transform to perform if/then/else operations on multiple different data points to return the first piece of data that is not null. This is often useful for the SailPoint username (uid) attribute in which case each identity requires a value, but the desired information is not available yet (e.g., Active Directory username). In these cases, you can use a first valid transform to populate the uid attribute with the user's linked Active Directory (AD) account information if the uid attribute is not null. If the attribute is null, use a different attribute from a source that the user does have, like his/her employee number."),(0,a.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,a.kt)("p",null,"The first valid transform requires an array list of ",(0,a.kt)("inlineCode",{parentName:"p"},"values")," that you must consider. These can be static strings or other nested transforms' return values. Remember that the transform returns the first entry in the array that evaluates to a non-null value, so you are recommended to provide the entries in the array in descending order of preference."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "values": [\n      {\n        "attributes": {\n          "sourceName": "Active Directory",\n          "attributeName": "sAMAccountName"\n        },\n        "type": "accountAttribute"\n      },\n      {\n        "attributes": {\n          "sourceName": "Okta",\n          "attributeName": "login"\n        },\n        "type": "accountAttribute"\n      },\n      {\n        "attributes": {\n          "sourceName": "HR Source",\n          "attributeName": "employeeID"\n        },\n        "type": "accountAttribute"\n      }\n    ]\n  },\n  "type": "firstValid",\n  "name": "Test First Valid Transform"\n}\n')),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required Attributes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"firstValid"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"values")," - This is an array of attributes to evaluate for existence."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional Attributes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ignoreErrors")," - This ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether to proceed to the next option if an error (like an NPE) occurs.")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"This transform first attempts to return the user's ",(0,a.kt)("inlineCode",{parentName:"p"},"sAMAccountName")," from his/her AD account. In the event that the user does not have an AD account, the transform then attempts to return the user's Okta login. If the Okta login is also blank, the transform returns the user's employee ID from his/her HR record."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "values": [\n      {\n        "attributes": {\n          "sourceName": "Active Directory",\n          "attributeName": "sAMAccountName"\n        },\n        "type": "accountAttribute"\n      },\n      {\n        "attributes": {\n          "sourceName": "Okta",\n          "attributeName": "login"\n        },\n        "type": "accountAttribute"\n      },\n      {\n        "attributes": {\n          "sourceName": "HR Source",\n          "attributeName": "employeeID"\n        },\n        "type": "accountAttribute"\n      }\n    ]\n  },\n  "type": "firstValid",\n  "name": "First Valid Transform"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\xa0"),(0,a.kt)("p",null,'This transform is often useful for populating the work email identity attribute. Since the work email attribute is a required field for a valid identity, it cannot be blank. However, often new hires do not have an AD account and/or email provisioned until after the user has been provisioned. A common practice in this situation is to return a static string of "none" to ensure that this required attribute does not remain empty.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "values": [\n      {\n        "attributes": {\n          "sourceName": "Active Directory",\n          "attributeName": "mail"\n        },\n        "type": "accountAttribute"\n      },\n      {\n        "attributes": {\n          "value": "none"\n        },\n        "type": "static"\n      }\n    ]\n  },\n  "type": "firstValid",\n  "name": "First Valid Transform"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\xa0"),(0,a.kt)("p",null,'This transform is often useful for populating an attribute called "Manager DN". It pulls the manager of the identity and then gets the identity attribute "Network DN" for the manager. "Network DN" pulls directly from ',(0,a.kt)("inlineCode",{parentName:"p"},"distinguishedName")," in AD. With this transform, you can set a user's manager's DN as an identity attribute to allow for attribute sync down to AD. Without ",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreErrors")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", this transform throws a null pointer exception (NPE) for any user without a manager. With ",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreErrors")," set to true, the first value in the ",(0,a.kt)("inlineCode",{parentName:"p"},"firstValid"),' throws an error for users without managers, but the error is ignored, and the transform selects the empty string to set the "Manager DN" identity attribute to.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "ignoreErrors": "true",\n    "values": [\n      {\n        "attributes": {\n          "value": "$identity.manager.attributes.networkDn"\n        },\n        "type": "static"\n      },\n      ""\n    ]\n  },\n  "name": "Example_Transform_ManagerDN",\n  "type": "firstValid"\n}\n')))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[65949],{25683:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>g,toc:()=>l});var i=t(87462),n=(t(67294),t(3905));const r={id:"campaign-activated",title:"Campaign Activated",pagination_label:"Campaign Activated",sidebar_label:"Campaign Activated",sidebar_class_name:"campaignActivated",keywords:["event","trigger","campaign","activated","available"],description:"Triggered when a campaign is activated.",slug:"/docs/event-triggers/triggers/campaign-activated",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},d=void 0,g={unversionedId:"docs/identity-now/event-triggers/available/campaign-activated",id:"docs/identity-now/event-triggers/available/campaign-activated",title:"Campaign Activated",description:"Triggered when a campaign is activated.",source:"@site/products/idn/docs/identity-now/event-triggers/available/campaign-activated.md",sourceDirName:"docs/identity-now/event-triggers/available",slug:"/docs/event-triggers/triggers/campaign-activated",permalink:"/idn/docs/event-triggers/triggers/campaign-activated",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/available/campaign-activated.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/idn/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/idn/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1693831543,formattedLastUpdatedAt:"Sep 4, 2023",frontMatter:{id:"campaign-activated",title:"Campaign Activated",pagination_label:"Campaign Activated",sidebar_label:"Campaign Activated",sidebar_class_name:"campaignActivated",keywords:["event","trigger","campaign","activated","available"],description:"Triggered when a campaign is activated.",slug:"/docs/event-triggers/triggers/campaign-activated",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"idnDocs",previous:{title:"Account Aggregation Completed",permalink:"/idn/docs/event-triggers/triggers/account-aggregation-completed"},next:{title:"Campaign Ended",permalink:"/idn/docs/event-triggers/triggers/campaign-ended"}},s={},l=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],c={toc:l};function o(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"event-context"},"Event Context"),(0,n.kt)("p",null,"The Campaign Activated events occur after a campaign is activated."),(0,n.kt)("p",null,"Some uses cases for this trigger include the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Notify reviewers of the new campaign"),(0,n.kt)("li",{parentName:"ul"},"Monitor campaigns to make sure they are starting on time")),(0,n.kt)("p",null,"This is an example input from this trigger:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "campaign": {\n    "id": "2c91808576f886190176f88cac5a0010",\n    "name": "Manager Access Campaign",\n    "description": "Audit access for all employees.",\n    "created": "2021-02-16T03:04:45.815Z",\n    "modified": null,\n    "deadline": "2021-03-16T03:04:45.815Z",\n    "type": "MANAGER",\n    "campaignOwner": {\n      "id": "37f080867702c1910177031320c40n27",\n      "displayName": "William Wilson",\n      "email": "william.wilson@example.com"\n    },\n    "status": "ACTIVE"\n  }\n}\n')),(0,n.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,n.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}o.isMDXComponent=!0}}]);
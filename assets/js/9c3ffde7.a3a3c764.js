"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[65511],{3439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={id:"account-discover",title:"Account Discover",pagination_label:"Account Discover",sidebar_label:"Account Discover",keywords:["connectivity","connectors","account discover"],description:"Dynamically determine account schema from the source.",slug:"/docs/saas-connectivity/commands/account-discover",tags:["Connectivity","Connector Command"]},c=void 0,s={unversionedId:"docs/identity-now/saas-connectivity/connector-commands/account-discover",id:"docs/identity-now/saas-connectivity/connector-commands/account-discover",title:"Account Discover",description:"Dynamically determine account schema from the source.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-commands/account-discover.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-commands",slug:"/docs/saas-connectivity/commands/account-discover",permalink:"/idn/docs/saas-connectivity/commands/account-discover",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-commands/account-discover.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"},{label:"Connector Command",permalink:"/idn/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1693831543,formattedLastUpdatedAt:"Sep 4, 2023",frontMatter:{id:"account-discover",title:"Account Discover",pagination_label:"Account Discover",sidebar_label:"Account Discover",keywords:["connectivity","connectors","account discover"],description:"Dynamically determine account schema from the source.",slug:"/docs/saas-connectivity/commands/account-discover",tags:["Connectivity","Connector Command"]},sidebar:"idnDocs",previous:{title:"Account Disable",permalink:"/idn/docs/saas-connectivity/commands/account-disable"},next:{title:"Account Enable",permalink:"/idn/docs/saas-connectivity/commands/account-enable"}},r={},l=[{value:"Example StdTestConnectionOutput",id:"example-stdtestconnectionoutput",level:3},{value:"Description",id:"description",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Programmatically build an account schema",id:"programmatically-build-an-account-schema",level:2},{value:"Test in IdentityNow",id:"test-in-identitynow",level:2}],d={toc:l};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,i.kt)("td",{parentName:"tr",align:"center"},"undefined")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,i.kt)("td",{parentName:"tr",align:"center"},"StdTestConnectionOutput")))),(0,i.kt)("h3",{id:"example-stdtestconnectionoutput"},"Example StdTestConnectionOutput"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "displayAttribute": "id",\n    "identityAttribute": "email",\n    "groupAttribute": "entitlements",\n    "attributes": [\n        {\n            "name": "displayName",\n            "type": "string",\n            "description": "Display Name of the account"\n        },\n        {\n            "name": "id",\n            "type": "string",\n            "description": "unique Id of the account"\n        },\n        {\n            "name": "email",\n            "type": "string",\n            "description": "Email of the account"\n        },\n        {\n            "name": "entitlements",\n            "type": "string",\n            "entitlement": true,\n            "managed": true,\n            "multi": true,\n            "description": "The groups the user belongs to presented as an array of strings"\n        }\n    ]\n}\n')),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The account discover schema command tells IDN to dynamically create the account schema for the source rather than use the account schema provided by the connector in connector-spec.json. It is often ideal to statically define the account schema because it is generally more performant and easier to develop and reason about the code. However, some sources have schemas that can be different for each customer deployment. It can also be difficult to determine which account attributes to statically expose, which requires the schema to be dynamically generated. SalesForce is an example of a source that can have thousands of account attributes, which makes it impractical to statically define a set of attributes that satisfies all connector users. Although the SalesForce connector defines a standard set of account attributes out of the box, it also allows schema discovery for users looking for more attributes."),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"If your connector requires dynamic schema discovery, you must add std:account:discover-schema to the list of commands in connector-spec.json. Because the account schema is dynamic, you do not need to specify an accountSchema or an accountCreateTemplate object in connector-spec.json. Your connector-spec.json file will look similar to this example from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/connector-spec.json"},"Airtable connector"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n "name": "airtable-v4",\n "keyType": "simple",\n "commands": [\n  "std:account:list",\n  "std:account:read",\n  "std:entitlement:list",\n  "std:entitlement:read",\n  "std:test-connection",\n  "std:account:update",\n  "std:account:discover-schema",\n  "std:account:create",\n  "std:account:delete",\n  "std:account:disable",\n  "std:account:enable",\n  "std:account:unlock"\n ],\n "sourceConfig": [\n  {\n   "type": "section",\n   "items": [\n    {\n     "key": "apiKey",\n     "label": "API Key",\n     "type": "text"\n    },\n    {\n     "key": "airtableBase",\n     "label": "airtable base ID",\n     "type": "text"\n    }\n   ]\n  }\n ],\n "entitlementSchemas": [\n  {\n   "type": "group",\n   "displayAttribute": "name",\n   "identityAttribute": "id",\n   "attributes": [\n    {\n     "name": "id",\n     "type": "string",\n     "description": "Unique ID of the group (ex. admin)"\n    },\n    {\n     "name": "name",\n     "type": "string",\n     "description": "The display name of the group (ex. Admin)"\n    }\n   ]\n  }\n ],\n "accountCreateTemplate": {\n  "fields": [\n   {\n    "key": "email",\n    "label": "Email",\n    "type": "string",\n    "required": true,\n    "initialValue": {\n     "type": "identityAttribute",\n     "attributes": {\n      "name": "email"\n     }\n    }\n   },\n   {\n    "key": "id",\n    "label": "id",\n    "type": "string",\n    "required": true,\n    "initialValue": {\n     "type": "identityAttribute",\n     "attributes": {\n      "name": "uid"\n     }\n    }\n   },\n   {\n    "key": "password",\n    "label": "Password",\n    "type": "string",\n    "required": true,\n    "initialValue": {\n     "type": "generator",\n     "attributes": {\n      "name": "Create Password"\n     }\n    }\n   },\n   {\n    "key": "department",\n    "label": "Department",\n    "type": "string",\n    "required": false,\n    "initialValue": {\n     "type": "identityAttribute",\n     "attributes": {\n      "name": "department"\n     }\n    }\n   },\n   {\n    "key": "displayName",\n    "label": "Display Name",\n    "type": "string",\n    "required": false,\n    "initialValue": {\n     "type": "identityAttribute",\n     "attributes": {\n      "name": "displayName"\n     }\n    }\n   },\n   {\n    "key": "firstName",\n    "label": "First Name",\n    "type": "string",\n    "required": false,\n    "initialValue": {\n     "type": "identityAttribute",\n     "attributes": {\n      "name": "firstname"\n     }\n    }\n   },\n   {\n    "key": "lastName",\n    "label": "Last Name",\n    "type": "string",\n    "required": false,\n    "initialValue": {\n     "type": "identityAttribute",\n     "attributes": {\n      "name": "lastname"\n     }\n    }\n   }\n  ]\n }\n}\n')),(0,i.kt)("h2",{id:"programmatically-build-an-account-schema"},"Programmatically build an account schema"),(0,i.kt)("p",null,"There are many ways to programmatically build the account schema for a source. This section will cover one such method. To start, register your command in the main connector file, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts"},"index.ts"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"export const connector = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    // Use the vendor SDK, or implement own client as necessary, to initialize a client\n    const airtable = new AirtableClient(config)\n\n    return createConnector()\n\n...\n\n        .stdAccountDiscoverSchema(async (context: Context, input: undefined, res: Response<StdAccountDiscoverSchemaOutput>) => {\n            const account = await airtable.getAccountSchema()\n\n            res.send(account)\n        })\n\n...\n}\n")),(0,i.kt)("p",null,"Next, implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"discoverSchema()")," function in your client code. The following function calls the necessary endpoints to get the full schema of the user account you want to represent in IDN. After you receive a response from your call, you must build your account schema object that will return to IDN. The response has a structure like the accountSchema property in the connector-spec.json file. The following is an example from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts"},"airtable.ts"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'async getAccountSchema(): Promise<StdAccountDiscoverSchemaOutput> {\n    return this.airTableBase(\'Users\').select({\n        view: \'Grid view\'\n    }).firstPage().then(records => {\n        const recordArray: StdAccountDiscoverSchemaOutput = {\n            "identityAttribute": \'email\',\n            "displayAttribute": \'id\',\n            "groupAttribute": \'entitlments\',\n            "attributes": []\n        }\n        recordArray.attributes = []\n        for (const record of records) {\n            const fieldset = record.fields\n            for (const [key] of Object.entries(fieldset)) {\n                if (key === \'entitlements\') {\n                    recordArray.attributes.push(\n                        {\n                            "name": key,\n                            "description": key,\n                            "type": "string",\n                            "entitlement": true,\n                            "managed": true,\n                            "multi": true\n                        }\n                    )\n                } else {\n                    recordArray.attributes.push(\n                        {\n                            "name": key,\n                            "description": key,\n                            "type": "string"\n                        }\n                    )\n                }\n            }\n            break\n        }\n        return recordArray\n    }).catch(err => {\n        throw new ConnectorError(\'error while getting accounts: \' + err)\n    })\n}\n')),(0,i.kt)("p",null,"This code produces the following payload that will be sent back to IDN."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "identityAttribute": "email",\n    "displayAttribute": "id",\n    "groupAttribute": "entitlments",\n    "attributes": [\n        {\n            "name": "id",\n            "description": "id",\n            "type": "string"\n        },\n        {\n            "name": "enabled",\n            "description": "enabled",\n            "type": "string"\n        },\n        {\n            "name": "department",\n            "description": "department",\n            "type": "string"\n        },\n        {\n            "name": "locked",\n            "description": "locked",\n            "type": "string"\n        },\n        {\n            "name": "entitlements",\n            "description": "entitlements",\n            "type": "string",\n            "entitlement": true,\n            "managed": true,\n            "multi": true\n        },\n        {\n            "name": "password",\n            "description": "password",\n            "type": "string"\n        },\n        {\n            "name": "displayName",\n            "description": "displayName",\n            "type": "string"\n        },\n        {\n            "name": "lastName",\n            "description": "lastName",\n            "type": "string"\n        },\n        {\n            "name": "email",\n            "description": "email",\n            "type": "string"\n        },\n        {\n            "name": "firstName",\n            "description": "firstName",\n            "type": "string"\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"There are many properties in this payload, so you may want to remove some, but it can be hard to determine which properties to keep in a dynamic way. If you can programmatically determine which properties to remove, you can alter the ",(0,i.kt)("inlineCode",{parentName:"p"},"discoverSchema()")," function to remove them."),(0,i.kt)("h2",{id:"test-in-identitynow"},"Test in IdentityNow"),(0,i.kt)("p",null,"To test the account discover schema command in IDN, ensure that you upload your latest connector code and create a new source in IDN. After you configure and test your source connection, go to the \u2018Account Schema\u2019 page. You will see an empty schema."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Discover Schema 1",src:n(72271).Z,width:"2557",height:"982"})),(0,i.kt)("p",null,"To discover the schema for this source, click the \u2018Options\u2019 dropdown in the upper right and select \u2018Discover Schema.\u2019"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Discover Schema 2",src:n(71408).Z,width:"2558",height:"546"})),(0,i.kt)("p",null,"IDN then asks you to assign attributes to \u2018Account ID\u2019 and 'Account Name.'"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Discover Schema 3",src:n(55410).Z,width:"619",height:"540"})),(0,i.kt)("p",null,"Save the schema. You now have a populated account schema. A user of this source must provide further details, like descriptions and identifying which attributes are entitlements."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Discover Schema 4",src:n(91848).Z,width:"2556",height:"892"})))}m.isMDXComponent=!0},72271:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/discover_schema_idn1-39c8e84531b7ba3a215094da37edd6b1.png"},71408:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/discover_schema_idn2-20b250d1a256f304c4f7e7157ae327b0.png"},55410:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/discover_schema_idn3-59147b246d8ce1e247927b8fe1d6ee58.png"},91848:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/discover_schema_idn4-28e843d70d934508a0a701b0afcd1f4c.png"}}]);
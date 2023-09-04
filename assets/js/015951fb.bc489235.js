"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[29285],{48804:(e,_,a)=>{a.r(_),a.d(_,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var t=a(87462),i=(a(67294),a(3905));const n={id:"rule-validator",title:"IdentityNow Rule Validator",pagination_label:"IdentityNow Rule Validator",sidebar_label:"IdentityNow Rule Validator",sidebar_position:5,sidebar_class_name:"ruleValidator",keywords:["rule","validator"],description:"IdentityNow Rule Validator",slug:"/docs/rules/rule-validator",tags:["Rules"]},l=void 0,o={unversionedId:"docs/identity-now/rules/rule-validator",id:"docs/identity-now/rules/rule-validator",title:"IdentityNow Rule Validator",description:"IdentityNow Rule Validator",source:"@site/products/idn/docs/identity-now/rules/rule_validator.md",sourceDirName:"docs/identity-now/rules",slug:"/docs/rules/rule-validator",permalink:"/idn/docs/rules/rule-validator",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/rules/rule_validator.md",tags:[{label:"Rules",permalink:"/idn/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1693831543,formattedLastUpdatedAt:"Sep 4, 2023",sidebarPosition:5,frontMatter:{id:"rule-validator",title:"IdentityNow Rule Validator",pagination_label:"IdentityNow Rule Validator",sidebar_label:"IdentityNow Rule Validator",sidebar_position:5,sidebar_class_name:"ruleValidator",keywords:["rule","validator"],description:"IdentityNow Rule Validator",slug:"/docs/rules/rule-validator",tags:["Rules"]},sidebar:"idnDocs",previous:{title:"IdentityNow Rule Utility",permalink:"/idn/docs/rules/rule-utility"},next:{title:"Java Docs",permalink:"/idn/docs/rules/java-docs"}},r={},s=[{value:"Overview",id:"overview",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Version 3.0",id:"version-30",level:3},{value:"Version 2.0",id:"version-20",level:3},{value:"Version 1.0.1",id:"version-101",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Support / Features",id:"support--features",level:2},{value:"Installation and Updates",id:"installation-and-updates",level:2},{value:"Linux and MacOS Considerations",id:"linux-and-macos-considerations",level:3},{value:"Run the Rule Validator",id:"run-the-rule-validator",level:2},{value:"Watch Option",id:"watch-option",level:3},{value:"Example Output",id:"example-output",level:2},{value:"Rule With No Errors but One Warning",id:"rule-with-no-errors-but-one-warning",level:3},{value:"Failure With Warnings",id:"failure-with-warnings",level:3},{value:"Resources",id:"resources",level:2}],d={toc:s};function u(e){let{components:_,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:_,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The IDN Rule Validator is built and maintained by SailPoint Professional Services.  If you have any issues, bugs, or feature requests, please ",(0,i.kt)("a",{parentName:"p",href:"https://www.sailpoint.com/services/professional/#contact-form"},"submit them here"))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The IdentityNow (IDN) Rule Validator is a simple tool you can use to validate IDN rules for malformed or incorrect code fragments and help make sure they conform to the SailPoint ",(0,i.kt)("a",{parentName:"p",href:"/idn/docs/rules#rule-guidelines"},"IdentityNow Rule Guide")," before rule submission. Included is a BeanShell Linter that will take over much of the validation role of rules. It will validate syntax of the BeanShell code and object usage. This isn't designed to replace any sort of unit testing you might do outside IDN. Running the IDN Rule Validator against your rules before submission helps you find problems early on. It is designed to help catch common items that often trip up rule reviews and provide immediate feedback during the rule writing process. However this is not a guarantee that the rule will be approved or that they won't have any other flaws."),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("h3",{id:"version-30"},"Version 3.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"BeanShell linter will now validate syntax and usage to help discover issues in your code before you deploy."),(0,i.kt)("li",{parentName:"ul"},"There is now a watch option that continuously monitors and validate/lint your code while you develop.")),(0,i.kt)("h3",{id:"version-20"},"Version 2.0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Migrated to a Java-based runtime"),(0,i.kt)("li",{parentName:"ul"},"Enhanced results reporting"),(0,i.kt)("li",{parentName:"ul"},"Ability to toggle warnings on/off as part of the results report"),(0,i.kt)("li",{parentName:"ul"},"File naming convention checks"),(0,i.kt)("li",{parentName:"ul"},"Handling for connector-executed rules")),(0,i.kt)("h3",{id:"version-101"},"Version 1.0.1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Initial release!")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"This utility is a Java based application and requires ",(0,i.kt)("strong",{parentName:"p"},"Java SE Development Kit (JDK) 11")," or higher to run."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Note that the previous version used JDK 8 (1.8). If you do not have the JDK 11 or above, then you must download and install JDK 11 first. ")),(0,i.kt)("h2",{id:"support--features"},"Support / Features"),(0,i.kt)("p",null,"The IDN Rule Validator is built and maintained by SailPoint Professional Services.  If you have any issues, bugs, or feature requests, please ",(0,i.kt)("a",{parentName:"p",href:"https://www.sailpoint.com/services/professional/#contact-form"},"submit them here")),(0,i.kt)("h2",{id:"installation-and-updates"},"Installation and Updates"),(0,i.kt)("p",null,"To use the Rule Validator locally, decompress the ",(0,i.kt)("inlineCode",{parentName:"p"},"sailpoint-saas-rule-validator-{3.0.xx}-distribution.zip")," package into a folder on your workstation. The sp-rv command executes the java package, and has been designed to be run from a path so can be executed anywhere from your file system."),(0,i.kt)("h3",{id:"linux-and-macos-considerations"},"Linux and MacOS Considerations"),(0,i.kt)("p",null,"Under Linux and MacOS ensure the ",(0,i.kt)("inlineCode",{parentName:"p"},"sp-rv")," script has execute privileges. To do so, execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"chmod")," command on the ",(0,i.kt)("inlineCode",{parentName:"p"},"sp-rv")," script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x sp-rv\n")),(0,i.kt)("h2",{id:"run-the-rule-validator"},"Run the Rule Validator"),(0,i.kt)("p",null,"To run the validator with standard reporting, invoke this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sp-rv --file {path or file name}\n")),(0,i.kt)("p",null,"This automatically validates all XML files in the path or a specific file name. To automatically include all nested sub-directories in the validation, include the ",(0,i.kt)("inlineCode",{parentName:"p"},"--recursive")," flag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sp-rv --file "~/path-to-rules" --recursive\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you provide a specific file name, then the ",(0,i.kt)("inlineCode",{parentName:"p"},"--recursive")," flag parameter is ignored - the validator will only conduct the recursive evaluation if the filePath parameter is null or a directory.")),(0,i.kt)("h3",{id:"watch-option"},"Watch Option"),(0,i.kt)("p",null,"The new rule validator contains a watch feature to monitor a folder for changes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sp-rv --watch {path}\n")),(0,i.kt)("p",null,"This will automatically validate all XML files within the specified path. The path must always be a directory and not a file.\nTo automatically include all nested sub-directories in the validation, include the ",(0,i.kt)("inlineCode",{parentName:"p"},"--recursive")," flag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sp-rv --watch "~/path-to-rules" --recursive\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To exit watch mode, press ",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL+C"),".")),(0,i.kt)("h2",{id:"example-output"},"Example Output"),(0,i.kt)("h3",{id:"rule-with-no-errors-but-one-warning"},"Rule With No Errors but One Warning"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"________________________________________________________________________________\nSailPoint SaaS Rule Validator v3.0.9-beta\nBy the SaaS Acceleration Team\n\u200b\n(c)2022-23 SailPoint Technologies Inc\n\u200b\n________________________________________________________________________________\nExecuted from: /Users/sailpoint/Documents/test rules\nJar location : /Users/sailpoint/Documents/tools\nFile name    : /Users/sailpoint/Documents/test rules/Rule - AttributeGenerator - Generate userPrincipalName.xml\nScript name  : Generate userPrincipalName\nDate         : Wed Mar 08 18:13:12 GMT 2023\n\u200b\n________________________________________________________________________________\nNo errors found.\nWarnings: \n  Line 126 - [LintBSHAmbiguousName] Could not find variable name 'calculatedUpnDomain ' \n\u200b\n________________________________________________________________________________\n  Runtime stats:\n    Started validation at 2023-03-08 06:13:12.558\n    1 Rules Analyzed\n    0 Errors\n    1 Warnings\n\u200b\n    Finished validation at:  2023-03-08 06:13:13.009\n    Process completed in 0 seconds.\n________________________________________________________________________________\n")),(0,i.kt)("h3",{id:"failure-with-warnings"},"Failure With Warnings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"SailPoint SaaS Rule Validator v3.0.9-beta\nBy the SaaS Acceleration Team\n\u200b\n(c)2022-23 SailPoint Technologies Inc\n\u200b\n________________________________________________________________________________\nExecuted from: /Users/sailpoint/Documents/test rules\nJar location : /Users/sailpoint/Documents/tools\nFile name    : /Users/sailpoint/Documents/test rules/Rule - Generic - WS_OGE_ID_Generation.xml\nScript name  : WS_OGE_ID_Generation\nDate         : Wed Mar 08 18:15:58 GMT 2023\n\u200b\n________________________________________________________________________________\nErrors: (2)\n  Line 72 - [IDNLintProcessor] While statement detected: while ( ! isIDUnique && Util .isNotNullOrEmpty ( APPLICATION_ID ) && count <= 9 ) { .  .  While loops are disallowed due to infinite loop risks; use a 'for' loop with explicit exit conditions instead \n  Line 121 - [IDNLintProcessor] While statement detected: while ( ! isUnique && ( attempt <= MAX_ATTEMPTS ) ) { .  .  While loops are disallowed due to infinite loop risks; use a 'for' loop with explicit exit conditions instead \n\u200b\nWarnings: \n  Line 36 - [LintBSHMethodInvocation] No type was assigned or resolved for variable name: idn \n  Line 49 - [LintBSHTypedVariableDeclaration] Variable name 'ogeId' is shadowing an earlier variable declaration \n  Line 73 - [LintBSHTypedVariableDeclaration] Variable name 'sourceId' is shadowing an earlier variable declaration \n  Line 105 - [LintBSHTypedVariableDeclaration] Variable name 'ogeId' is shadowing an earlier variable declaration \n  Line 125 - [LintBSHTypedVariableDeclaration] Variable name 'sourceId' is shadowing an earlier variable declaration \n  Line 147 - [LintBSHAmbiguousName] Could not find variable name 'e_firstname ' \n  Line 160 - [LintBSHAmbiguousName] Could not find variable name 'e_firstname ' \n  Line 160 - [LintBSHAmbiguousName] Could not find variable name 'e_middleName ' \n  Line 160 - [LintBSHAmbiguousName] Could not find variable name 'e_lastname ' \n  Line 162 - [LintBSHAmbiguousName] Could not find variable name 'c_firstname ' \n  Line 162 - [LintBSHAmbiguousName] Could not find variable name 'c_middleName ' \n  Line 162 - [LintBSHAmbiguousName] Could not find variable name 'c_lastname ' \n\u200b\n________________________________________________________________________________\n  Runtime stats:\n    Started validation at 2023-03-08 06:15:57.946\n    1 Rules Analyzed\n    2 Errors\n    12 Warnings\n\u200b\n    Finished validation at:  2023-03-08 06:15:58.261\n    Process completed in 0 seconds.\n________________________________________________________________________________\n")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("a",{target:"\\_blank",href:a(58726).Z}," Identity Now Rule Validator "))}u.isMDXComponent=!0},58726:(e,_,a)=>{a.d(_,{Z:()=>t});const t=a.p+"assets/files/sailpoint-saas-rule-validator-3.0.28-552678361422ef3d96231eaf61c8c6d3.zip"}}]);
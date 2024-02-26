"use strict";(self.webpackChunkosc_docs=self.webpackChunkosc_docs||[]).push([[3903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?i.createElement(b,a(a({ref:t},u),{},{components:n})):i.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,a[1]=o;for(var c=2;c<s;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5829:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const s={title:"Testing & Linting",description:"Club Website Developer Testing",sidebar_position:8},a="Testing & Linting",o={unversionedId:"Developers/testing",id:"Developers/testing",title:"Testing & Linting",description:"Club Website Developer Testing",source:"@site/docs/website/Developers/testing.md",sourceDirName:"Developers",slug:"/Developers/testing",permalink:"/docs/website/Developers/testing",draft:!1,editUrl:"https://github.com/ufosc/osc-docs/blob/main/docs/website/Developers/testing.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Testing & Linting",description:"Club Website Developer Testing",sidebar_position:8},sidebar:"defaultSidebar",previous:{title:"Authentication",permalink:"/docs/website/Developers/authentication"},next:{title:"Deploying to Kubernetes",permalink:"/docs/website/Developers/kubernetes"}},l={},c=[{value:"Test Index",id:"test-index",level:2},{value:"Running Tests",id:"running-tests",level:2},{value:"Testing for Style Issues (Linting)",id:"testing-for-style-issues-linting",level:2},{value:"Fixing Style Issues Automatically",id:"fixing-style-issues-automatically",level:2},{value:"Silencing Linting Errors",id:"silencing-linting-errors",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing--linting"},"Testing & Linting"),(0,r.kt)("p",null,"The project currently maintains unit tests for several backend routes and routines - no automated frontend testing has been implemented. The unit testing library used is ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"MochaJS"),", coupled with ",(0,r.kt)("a",{parentName:"p",href:"https://www.chaijs.com/"},"ChaiJS")," for testing assertions. Additionally, a linter has been configured to automatically format code according to the ",(0,r.kt)("a",{parentName:"p",href:"https://standardjs.com/"},"JavaScript Standard Style"),"."),(0,r.kt)("p",null,"Any contribution to the OSC Website source code must pass testing and linting workflows, as well as implement new tests where necessary. See: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ufosc/Club_Website_2/blob/main/CONTRIBUTING.md"},"contributing"),"."),(0,r.kt)("h2",{id:"test-index"},"Test Index"),(0,r.kt)("p",null,"Source code and documentation indices for currently available unit tests."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Blog API Route Tests: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ufosc/Club_Website_2/blob/main/test/blog.spec.js"},"GitHub")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/website/Developers/API/blog"},"Docs"),"."),(0,r.kt)("li",{parentName:"ul"},"Cache Tests: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ufosc/Club_Website_2/blob/main/test/cache.spec.js"},"GitHub")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/website/Developers/caching"},"Docs"),"."),(0,r.kt)("li",{parentName:"ul"},"Edit API Route Tests: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ufosc/Club_Website_2/blob/main/test/edit.spec.js"},"GitHub")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/website/Developers/API/edit"},"Docs"),"."),(0,r.kt)("li",{parentName:"ul"},"Users API Route Tests: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ufosc/Club_Website_2/blob/main/test/users.spec.js"},"GitHub")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/website/Developers/API/users"},"Docs"),".")),(0,r.kt)("h2",{id:"running-tests"},"Running Tests"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Tests are only meant to be ran on development environments. Do not use production databases in testing, their contents ",(0,r.kt)("b",null,"risk being deleted"),". To learn more about managing environments, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/website/Developers/configuration"},"Usage & Configuration"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test\n")),(0,r.kt)("h2",{id:"testing-for-style-issues-linting"},"Testing for Style Issues (Linting)"),(0,r.kt)("p",null,"OSC Website source code implements JavaScript Standard Style. To test for compliance, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run lint\n")),(0,r.kt)("h2",{id:"fixing-style-issues-automatically"},"Fixing Style Issues Automatically"),(0,r.kt)("p",null,"In certain cases, the linter may be able to automatically fix linting issues. This is feature is made available via the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run fix\n")),(0,r.kt)("p",null,"If an issue cannot be automatically fixed, the command will issue an error. If this happens, the developer must manually resolve the issue."),(0,r.kt)("h2",{id:"silencing-linting-errors"},"Silencing Linting Errors"),(0,r.kt)("p",null,"Sometimes, the implementation of certain pre-existing libraries (usually chaiJS and mochaJS) or functions may require the developer to break the linter's rules. Although this should ideally be avoided whenever possible, the following example illustrates how to silence a problematic line of code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"expect(fs.existsSync(path)).to.be.true // eslint-disable-line\n")),(0,r.kt)("p",null,"If the linter complains of undefined global variables, it is silenced by adding the following code as the first line of the problematic file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="First Line of Code"',title:'"First',Line:!0,of:!0,'Code"':!0},"/* global describe, it, before */\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"describe"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"it"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"before")," may each be replaced by some global variable."))}d.isMDXComponent=!0}}]);
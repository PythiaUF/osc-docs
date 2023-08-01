"use strict";(self.webpackChunkosc_docs=self.webpackChunkosc_docs||[]).push([[961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=i,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||n;return a?r.createElement(g,l(l({ref:t},d),{},{components:a})):r.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3222:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const n={title:"Edit Route",description:"Club Website Developer API",sidebar_position:4},l="Edit Route",o={unversionedId:"Developers/API/edit",id:"Developers/API/edit",title:"Edit Route",description:"Club Website Developer API",source:"@site/docs/website/Developers/API/edit.md",sourceDirName:"Developers/API",slug:"/Developers/API/edit",permalink:"/docs/website/Developers/API/edit",draft:!1,editUrl:"https://github.com/ufosc/osc-docs/blob/main/docs/website/Developers/API/edit.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Edit Route",description:"Club Website Developer API",sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Contact Route",permalink:"/docs/website/Developers/API/contact"},next:{title:"Images Route",permalink:"/docs/website/Developers/API/images"}},s={},p=[{value:"Create new Blog Entry: (GET) /api/edit/blog",id:"create-new-blog-entry-get-apieditblog",level:2},{value:"Request Parameters",id:"request-parameters",level:3},{value:"Example",id:"example",level:3},{value:"Modify Existing Blog Entry: (GET) /api/edit/blog/:id",id:"modify-existing-blog-entry-get-apieditblogid",level:2},{value:"Request Parameters",id:"request-parameters-1",level:3},{value:"Response",id:"response",level:3},{value:"Example",id:"example-1",level:3},{value:"Create new User: (GET) /api/edit/user",id:"create-new-user-get-apiedituser",level:2},{value:"Request Parameters",id:"request-parameters-2",level:3},{value:"Example",id:"example-2",level:3},{value:"Modify Existing User: (GET) /api/edit/user/:id",id:"modify-existing-user-get-apiedituserid",level:2},{value:"Request Parameters",id:"request-parameters-3",level:3},{value:"Response",id:"response-1",level:3},{value:"Example",id:"example-3",level:3},{value:"Upload new image: (GET) /api/edit/image",id:"upload-new-image-get-apieditimage",level:2},{value:"Request Parameters",id:"request-parameters-4",level:3},{value:"Example",id:"example-4",level:3}],d={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"edit-route"},"Edit Route"),(0,i.kt)("p",null,"The edit route renders the 'edit' pages that enable admins to create and modify articles, images, and other users. They return templated EJS sites that automatically fetch the requested resource's data and render it into editable HTML forms."),(0,i.kt)("p",null,"This set of routes is responsible for returning one of two possible options - both via the same EJS templates - for each form:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An empty form for creating new object instances."),(0,i.kt)("li",{parentName:"ol"},"A partially filled form for modifying existing instances.")),(0,i.kt)("admonition",{title:"routes/edit.js",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The edit route is defined in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ufosc/Club_Website_2/blob/main/routes/edit.js"},"/routes/edit.js")," and operates on the ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/edit")," API path.")),(0,i.kt)("h2",{id:"create-new-blog-entry-get-apieditblog"},"Create new Blog Entry: (GET) /api/edit/blog"),(0,i.kt)("p",null,"This route returns the blog entry creation form with no pre-filled fields. The form's template is implemented in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ufosc/Club_Website_2/blob/main/views/edit-blog.ejs"},"/views/edit-blog.ejs"),"."),(0,i.kt)("p",null,"This route is authenticated. It responds with an HTML page."),(0,i.kt)("h3",{id:"request-parameters"},"Request Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JWT (cookie)"),(0,i.kt)("td",{parentName:"tr",align:null},"(Required) Auth cookie")))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -XGET --cookie \"jwt=<AUTH COOKIE>\" 'https://ufosc.org/api/edit/blog'\n")),(0,i.kt)("h2",{id:"modify-existing-blog-entry-get-apieditblogid"},"Modify Existing Blog Entry: (GET) /api/edit/blog/:id"),(0,i.kt)("p",null,"This route returns an HTML form, filled with pre-existing blog post data, that enables an admit to modify the specified blog post. This is an authenticated route. It responds with an HTML page."),(0,i.kt)("h3",{id:"request-parameters-1"},"Request Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ID (path)"),(0,i.kt)("td",{parentName:"tr",align:null},"ID of blog post to modify")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JWT (cookie)"),(0,i.kt)("td",{parentName:"tr",align:null},"(Required) Auth cookie")))),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("p",null,"Responds with an HTML page of the blog modification form."),(0,i.kt)("p",null,"If the object ID is invalid, the following JSON error is returned:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="application/json"',title:'"application/json"'},'{ "error": "The article you\'ve tried to access no longer exists" }\n')),(0,i.kt)("p",null,"If the object ID is valid but cannot be found, the following JSON error is returned:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="application/json"',title:'"application/json"'},'{ "error": "Article not found" }\n')),(0,i.kt)("p",null,"If the client is not authenticated, a 403 forbidden error will be returned."),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -XGET --cookie \"jwt=<AUTH COOKIE>\" 'https://ufosc.org/api/edit/blog/<BLOG ID HERE>'\n")),(0,i.kt)("h2",{id:"create-new-user-get-apiedituser"},"Create new User: (GET) /api/edit/user"),(0,i.kt)("p",null,"This route returns the user creation form with no pre-filled fields. The form's template is implemented in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ufosc/Club_Website_2/blob/main/views/edit-user.ejs"},"/views/edit-user.ejs"),"."),(0,i.kt)("p",null,"This route is authenticated. It responds with an HTML page."),(0,i.kt)("h3",{id:"request-parameters-2"},"Request Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JWT (cookie)"),(0,i.kt)("td",{parentName:"tr",align:null},"(Required) Auth cookie")))),(0,i.kt)("h3",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -XGET --cookie \"jwt=<AUTH COOKIE>\" 'https://ufosc.org/api/edit/user'\n")),(0,i.kt)("h2",{id:"modify-existing-user-get-apiedituserid"},"Modify Existing User: (GET) /api/edit/user/:id"),(0,i.kt)("p",null,"This route returns an HTML form, filled with pre-existing user data, that enables an admit to modify the specified user. This is an authenticated route. It responds with an HTML page."),(0,i.kt)("h3",{id:"request-parameters-3"},"Request Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ID (path)"),(0,i.kt)("td",{parentName:"tr",align:null},"ID of user to modify")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JWT (cookie)"),(0,i.kt)("td",{parentName:"tr",align:null},"(Required) Auth cookie")))),(0,i.kt)("h3",{id:"response-1"},"Response"),(0,i.kt)("p",null,"Responds with an HTML page of the blog modification form."),(0,i.kt)("p",null,"If the object ID is invalid, the following JSON error is returned:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="application/json"',title:'"application/json"'},'{ "error": "The user you\'ve tried to access no longer exists" }\n')),(0,i.kt)("p",null,"If the object ID is valid but cannot be found, the following JSON error is returned:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="application/json"',title:'"application/json"'},'{ "error": "User not found" }\n')),(0,i.kt)("p",null,"If the client is not authenticated, a 403 forbidden error will be returned."),(0,i.kt)("h3",{id:"example-3"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -XGET --cookie \"jwt=<AUTH COOKIE>\" 'https://ufosc.org/api/edit/user/<USER ID HERE>'\n")),(0,i.kt)("h2",{id:"upload-new-image-get-apieditimage"},"Upload new image: (GET) /api/edit/image"),(0,i.kt)("p",null,"This route returns the image upload form with no pre-filled fields. The form's template is implemented in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ufosc/Club_Website_2/blob/main/views/edit-image.ejs"},"/views/edit-image.ejs"),"."),(0,i.kt)("p",null,"Since images are minimally customizable, their modification form does not exist. Instead, users may delete an existing image and replace it by uploading a new one."),(0,i.kt)("p",null,"This route is authenticated. It responds with an HTML page."),(0,i.kt)("h3",{id:"request-parameters-4"},"Request Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JWT (cookie)"),(0,i.kt)("td",{parentName:"tr",align:null},"(Required) Auth cookie")))),(0,i.kt)("h3",{id:"example-4"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -XGET --cookie \"jwt=<AUTH COOKIE>\" 'https://ufosc.org/api/edit/image'\n")))}m.isMDXComponent=!0}}]);
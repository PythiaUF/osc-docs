"use strict";(self.webpackChunkosc_docs=self.webpackChunkosc_docs||[]).push([[103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||r;return n?i.createElement(m,o(o({ref:t},h),{},{components:n})):i.createElement(m,o({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(7462),a=(n(7294),n(3905));const r={title:"Integrating with OAuth2",description:"OWS OAuth2",sidebar_position:1},o="Integrating with OAuth2",s={unversionedId:"usage/oauth2",id:"usage/oauth2",title:"Integrating with OAuth2",description:"OWS OAuth2",source:"@site/docs/ows/usage/oauth2.md",sourceDirName:"usage",slug:"/usage/oauth2",permalink:"/docs/ows/usage/oauth2",draft:!1,editUrl:"https://github.com/ufosc/osc-docs/blob/main/docs/ows/usage/oauth2.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Integrating with OAuth2",description:"OWS OAuth2",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/docs/ows/"},next:{title:"Accessing Resources",permalink:"/docs/ows/usage/resources"}},c={},l=[{value:"Definitions",id:"definitions",level:2},{value:"Creating an OWS Account",id:"creating-an-ows-account",level:2},{value:"Registering a Client",id:"registering-a-client",level:2},{value:"Authorization Schemes",id:"authorization-schemes",level:2},{value:"Deciding between Implicit &amp; Authorization Grant Schemes",id:"deciding-between-implicit--authorization-grant-schemes",level:3},{value:"Implicit Grant Scheme",id:"implicit-grant-scheme",level:3},{value:"Authorization Grant Scheme",id:"authorization-grant-scheme",level:3},{value:"Issuing Access Tokens using the Authorization Code",id:"issuing-access-tokens-using-the-authorization-code",level:4},{value:"Refreshing Access Tokens",id:"refreshing-access-tokens",level:4},{value:"Security Measures",id:"security-measures",level:2},{value:"State",id:"state",level:3},{value:"Error Handling",id:"error-handling",level:2},{value:"Errors from OAuth2 API",id:"errors-from-oauth2-api",level:3},{value:"Errors in URL Parameters",id:"errors-in-url-parameters",level:3}],h={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrating-with-oauth2"},"Integrating with OAuth2"),(0,a.kt)("p",null,"One of the goals of OpenWebServices is to establish a common authentication service for use across Open Source Club and UF projects. The OAuth2 implementation allows project developers to authenticate users using their Open Source Club credentials. This enables interaction, state management, and data sharing among various projects."),(0,a.kt)("p",null,"OpenWebServices is ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749"},"RFC6749")," compliant, meaning that developers can access a user's private resources by (1) first, asking the user for their permission, and (2) without accessing the user's password."),(0,a.kt)("admonition",{title:"IMPORTANT",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"You will need the Open Source Club's permission to register a client. Please contact a team member via the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/Gsxej6u"},"discord")," server or ",(0,a.kt)("a",{parentName:"p",href:"https://ufosc.org/#contact"},"contact form"),".")),(0,a.kt)("h2",{id:"definitions"},"Definitions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Resource Owner (user): "An entity capable of granting access to a protected resource" ',(0,a.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc6749"},"RFC6749"),", a.k.a an end-user."),(0,a.kt)("li",{parentName:"ul"},"Resources: information and privilidges owned by users, for example: their first and last name, email address, permission to access a service, etc."),(0,a.kt)("li",{parentName:"ul"},"Client: the third-party application that attempts to access the user's resources, i.e. the program that the user is trying to log into.")),(0,a.kt)("h2",{id:"creating-an-ows-account"},"Creating an OWS Account"),(0,a.kt)("p",null,"Clients are owned by users, so the first step to creating a client is registering an OWS account. This can be accomplished through the ",(0,a.kt)("a",{parentName:"p",href:"https://auth.ufosc.org"},"sign-up page"),":"),(0,a.kt)("img",{src:"/img/ows/sign_up.png",style:{width:"100%",maxWidth:600}}),(0,a.kt)("p",null,"You can access the page by clicking ",(0,a.kt)("a",{parentName:"p",href:"https://auth.ufosc.org"},"here"),". You can then enter your details in the form:"),(0,a.kt)("img",{src:"/img/ows/sign_up2.png",style:{width:"100%",maxWidth:600}}),(0,a.kt)("p",null,"Once done, you'll be prompted to verify your email. Check your inbox (and spam folders) for an email containing the verification URL, and then open the URL in your browser."),(0,a.kt)("h2",{id:"registering-a-client"},"Registering a Client"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This section is work in progress. To register a client, contact a member of OSC.")),(0,a.kt)("p",null,"Once registered, you will be provided with the following information:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "success",\n    "id": "<YOUR UNIQUE CLIENT ID>",\n    "pkey": "<YOUR PRIVATE KEY>"\n}\n')),(0,a.kt)("p",null,"Your private key ",(0,a.kt)("inlineCode",{parentName:"p"},"pkey")," ",(0,a.kt)("b",null,"must be kept secret"),". It will be used to authenticate your client in the authorization grant scheme (see Authorization Schemes). If you're using the implicit grant scheme, the private key is not necessary."),(0,a.kt)("p",null,"You must take note of the client id - unlike the private key, the client id does not have to be secret. You'll be using the client id to authorize users."),(0,a.kt)("h2",{id:"authorization-schemes"},"Authorization Schemes"),(0,a.kt)("p",null,"Authorization scheme refers to the means by which a user and client interact to enable authorization. Two distinct schemes are described: the authorization grant and implicit grant schemes."),(0,a.kt)("b",null,"Authorization grants")," are used by clients that can securely store client access tokens. This entails having a dedicated, isolated backend server. Clients that choose to use the authorization grant scheme have more resource access privilidges and are more likely to be granted access to users' sensitive data. Additionally, your client will be issued a refresh token, which means you can continue processing user information even after the original access token expires. If your project uses ExpressJS, Springboot (backend), or some other dedicated backend server, then you're eligible for the authorization grant scheme.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("b",null,"Implicit grants")," are for clients without the capabilities necessary to reliably secure access tokens, e.g. website frontends (without a backend server). Pure-frontend websites expose private information to the browser. XSS attacks, browser history APIs, CORS vulnerabilities, or anything with access to the DOM can potentially leak client access tokens. These types of clients are restricted to only (a) identifying the user and (b) accessing their publicly available information.",(0,a.kt)("h3",{id:"deciding-between-implicit--authorization-grant-schemes"},"Deciding between Implicit & Authorization Grant Schemes"),(0,a.kt)("p",null,"If your client application does not implement a dedicated server backend, then your only choice is implicit grant. However, there are situations in which a project with a dedicated backend may not want to use the authorization grant scheme. You should use authorization grant if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You want to keep accessing the user's resources for longer than 20 minutes."),(0,a.kt)("li",{parentName:"ul"},"You need access to private user information.")),(0,a.kt)("p",null,"If your sole intent is to ",(0,a.kt)("b",null,"identify")," a user (i.e. verify that they exist, access their full name and unique ID, and differentiate them from other users), then the implicit grant scheme will suffice. Implicit grant clients will need to ask the user to re-authenticate every 20 minutes."),(0,a.kt)("h3",{id:"implicit-grant-scheme"},"Implicit Grant Scheme"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+----------+\n| Resource |\n|  Owner   |\n|          |\n+----------+\n     ^\n     |\n    (B)\n+----|-----+          Client Identifier     +---------------+\n|         -+----(A)-- & Redirection URI ---\x3e|               |\n|  User-   |                                | Authorization |\n|  Agent  -|----(B)-- User authenticates --\x3e|     Server    |\n|          |                                |               |\n|          |<---(C)--- Redirection URI ----<|               |\n|          |          with Access Token     +---------------+\n|          |            in Fragment\n|          |                                +---------------+\n|          |----(D)--- Redirection URI ----\x3e|   Web-Hosted  |\n|          |          without Fragment      |     Client    |\n|          |                                |    Resource   |\n|     (F)  |<---(E)------- Script ---------<|               |\n|          |                                +---------------+\n+-|--------+\n  |    |\n (A)  (G) Access Token\n  |    |\n  ^    v\n+---------+\n|         |\n|  Client |\n|         |\n+---------+\n")),(0,a.kt)("p",null,"In the implicit grant scheme, you redirect users to the OWS authentication website. Your client's information is passed along with the request, in the form of URL parameters (more on this later). The user enters their email address/password and is asked to acknowledge their consent to use your client. Once the user accepts, the OWS website HTTP-redirects the user back to your client website. An access token is embedded into the redirect URL, which your client may now use to access the user's information."),(0,a.kt)("p",null,"You may begin the authorization flow by creating an HTML button that redirects users to the OWS authentication website. The choice of how to redirect the user is left up to you to decide, but a minimal example is illustrated below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<button\n    onclick=\"window.location.href='https://auth.ufosc.org/authorize?response_type=token&client_id=[CLIENT_ID]&redirect_uri=[URI]&state=[STATE]'\n>\nLogin with OSC\n</button>\n")),(0,a.kt)("p",null,"The button redirects users to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://auth.ufosc.org/authorize?response_type=token&client_id=[CLIENT_ID]&redirect_uri=[URI]&state=[STATE]"),". You must replace ",(0,a.kt)("inlineCode",{parentName:"p"},"[CLIENT_ID]")," with your client id (which was generated when the client was created), ",(0,a.kt)("inlineCode",{parentName:"p"},"[URI]")," with the redirect URL-encoded URI which you registered, and a ",(0,a.kt)("inlineCode",{parentName:"p"},"[STATE]")," string."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Using a state string is imperative in protecting against XSS and cross-origin attacks. Not using a secure state string may result in ",(0,a.kt)("b",null,"your account/client being banned"),". See ",(0,a.kt)("a",{parentName:"p",href:"#security-measures"},"security")," for further instructions.")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<URI>")," parameter MUST be URL-encoded, otherwise you'll receive an error. See ",(0,a.kt)("a",{parentName:"p",href:"https://www.urlencoder.org/"},"urlencoder.org")," for an example encoder, or ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI"},"MDN")," for implementation instructions in JavaScript.")),(0,a.kt)("p",null,"At this point, the user will need to enter their credentials using the secure OWS authentication website. Once done, they'll be redirected to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<URI>")," provided above. The redirect will attach three parameters to the URL: the access token, token type, and state. As a result, the final URL will look like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://my-redirect-uri.com/?access_token=65d505d98ed294abc0d10534&token_type=bearer&expires_in=1200&state=xyz\n")),(0,a.kt)("p",null,"It is imperative that the client application verifies that the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," is equal to the ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," provided in the first redirection (client-side) URI. If the state differs, it is likely that the ",(0,a.kt)("b",null,"authorization mechanism is under attack"),"."),(0,a.kt)("p",null,"You may retrieve the access token using JavaScript, as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let params = new URLSearchParams(document.location.search);\nlet access_token = params.get("access_token");\n')),(0,a.kt)("p",null,"You may now use the access token to retrieve the user's information. To identify the user, you'll use the ",(0,a.kt)("inlineCode",{parentName:"p"},"api.ufosc.org/user")," API route. For documentation on accessing resources, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/ows/usage/resources"},"Accessing Resources"),"."),(0,a.kt)("h3",{id:"authorization-grant-scheme"},"Authorization Grant Scheme"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+----------+\n| Resource |\n|   Owner  |\n|          |\n+----------+\n     ^\n     |\n    (B)\n+----|-----+          Client Identifier      +---------------+\n|         -+----(A)-- & Redirection URI ----\x3e|               |\n|  User-   |                                 | Authorization |\n|  Agent  -+----(B)-- User authenticates ---\x3e|     Server    |\n|          |                                 |               |\n|         -+----(C)-- Authorization Code ---<|               |\n+-|----|---+                                 +---------------+\n  |    |                                         ^      v\n (A)  (C)                                        |      |\n  |    |                                         |      |\n  ^    v                                         |      |\n+---------+                                      |      |\n|         |>---(D)-- Authorization Code ---------'      |\n|  Client |          & Redirection URI                  |\n|         |                                             |\n|         |<---(E)----- Access Token -------------------'\n+---------+       (w/ Optional Refresh Token)\n")),(0,a.kt)("p",null,"The authorization grant scheme follows a pattern similar to implicit token flow. First, the user is redirected by the client to the OWS authentication website, with the client's id and options specified in the URL parameters. The user is prompted for their email address and password, and then asked for their consent to grant client access. Once approved, the OWS website redirects to the client's redirect URI, with a authorization grant code (not an access token) attached to the URL parameters."),(0,a.kt)("p",null,"The authorization grant is used to generate an access and refresh token. Unlike implicit token flow, the client must authorize itself in order to retrieve an access token. This is accomplished through a request to the OWS authorization server, in which the client attaches their ID, private key, and user authorization grant. If succesful, the client is issued an access token - which they can use to make API requests on the user's behalf for the next 20 minutes - and a refresh token - which they may use to issue a new access token once the previous token expires."),(0,a.kt)("p",null,"The authorization flow begins at the client application. In order to login, the user must be redirected to the ",(0,a.kt)("a",{parentName:"p",href:"https://auth.ufosc.org"},"OWS authentication website"),". An example implementing an HTML login button is displayed below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<button\n    onclick=\"window.location.href='https://auth.ufosc.org/authorize?response_type=code&client_id=[CLIENT_ID]&redirect_uri=[URI]&state=[STATE]'\n>\nLogin with OSC\n</button>\n")),(0,a.kt)("p",null,"The button redirects users to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://auth.ufosc.org/authorize?response_type=code&client_id=[CLIENT_ID]&redirect_uri=[URI]&state=[STATE]"),". You must replace ",(0,a.kt)("inlineCode",{parentName:"p"},"[CLIENT_ID]")," with your client id (which was generated when the client was created), ",(0,a.kt)("inlineCode",{parentName:"p"},"[URI]")," with the redirect URL-encoded URI which you registered, and a ",(0,a.kt)("inlineCode",{parentName:"p"},"[STATE]")," string. The redirect URL differs from the implicit flow URL only in its ",(0,a.kt)("inlineCode",{parentName:"p"},"response_type")," parameter, which is ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," for implicit flow and ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," for authorization grant."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Using a state string is imperative in protecting against XSS and cross-origin attacks. Not using a secure state string may result in ",(0,a.kt)("b",null,"your account/client being banned"),". See ",(0,a.kt)("a",{parentName:"p",href:"#security-measures"},"security")," for further instructions.")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<URI>")," parameter MUST be URL-encoded, otherwise you'll receive an error. See ",(0,a.kt)("a",{parentName:"p",href:"https://www.urlencoder.org/"},"urlencoder.org")," for an example encoder, or ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI"},"MDN")," for implementation instructions in JavaScript.")),(0,a.kt)("p",null,"At this point, it is up to the user to enter their credentials and authorize access to the client application. Once done, they'll be redirected to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<URI>")," provided above. The redirect attaches two parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://my-redirect-uri.com/?code=65d8e41f4c09d49933b45680&state=xyz\n")),(0,a.kt)("p",null,"It is imperative that the client application verifies that the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," is equal to the ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," provided in the first redirection (client-side) URI. If the state differs, it is likely that the ",(0,a.kt)("b",null,"authorization mechanism is under attack"),"."),(0,a.kt)("p",null,"The code and state parameter must be retrieved by the client application. An example of how to retrieve URL parameters in JavaScript is attached below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let params = new URLSearchParams(document.location.search);\nlet code = params.get("code");\nlet state = params.get("state");\n')),(0,a.kt)("p",null,"The code may now be used to issue an access token. Note: the access token allows the client to access the user's information, whilst the authorization code is used to generate the access token. The authorization code is a necessary precursor to verifying that the client application is secure enough to authenticate itself."),(0,a.kt)("h4",{id:"issuing-access-tokens-using-the-authorization-code"},"Issuing Access Tokens using the Authorization Code"),(0,a.kt)("p",null,"To issue an access token, the client must send an API request to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.ufosc.org/auth/token"),". The request must include an ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header with the client's ID and private key. The Authorization header must assume the format below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Authorization: Basic NjU4MDNjMGFjNmMwMDgxNzA5ZjU5NDlkOmVBMXdUbFNYMGtUNktnZUYzKzFCNW9HTGMvNDZDZEhuamRoTStjMFZFN0k9\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," is the header name, basic is the authentication scheme, and the string is a base64-encoded id and private key combination. The base64-encoded ID and private key must follow the syntax below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"BASE64(<CLIENT_ID>:<PRIVATE_KEY>)\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"<CLIENT_ID>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<PRIVATE_KEY>")," are the ID and key generated in the client-creation process. The ",(0,a.kt)("inlineCode",{parentName:"p"},"BASE64()")," function indicates that the value should be base64-encoded and should not be part of the authorization string. Additionally, the client should attach the following in the ",(0,a.kt)("b",null,"URL parameters")," of the request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"grant_type=authorization_code\ncode=<AUTHORIZATION_CODE>\nredirect_uri=<REDIRECT_URI>\nclient_id=<CLIENT_ID>\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"<CLIENT_ID>")," is the ID used in the authorization field, and ",(0,a.kt)("inlineCode",{parentName:"p"},"<REDIRECT_URI>")," is the URI from the client's registration. The ",(0,a.kt)("inlineCode",{parentName:"p"},"<AUTHORIZATION_CODE")," is the authorization code received from the OWS redirect. The final API request string should look similar to the example below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://api.ufosc.org/auth/token?grant_type=authorization_code&code=65c4141016aeea486a7bcee8&redirect_uri=https%3A%2F%2Fgoogle.com&client_id=65803c0ac6c0081709f5949d\n")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<REDIRECT_URI>")," parameter MUST be URL-encoded, otherwise you'll receive an error. See ",(0,a.kt)("a",{parentName:"p",href:"https://www.urlencoder.org/"},"urlencoder.org")," for an example encoder, or ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI"},"MDN")," for implementation instructions in JavaScript.")),(0,a.kt)("p",null,"A JavaScript using ",(0,a.kt)("a",{parentName:"p",href:"https://axios-http.com/docs/api_intro"},"Axios")," example is illustrated below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'\nconst REDIRECT_URI = encodeURI("your redirect URI"); // encodeURI handles URL-encoding.\nconst CLIENT_ID = "your client id";\nconst AUTH_CODE = "your authorization code";\nconst PRIV_KEY = "your private key";\n\nconst client_authorization = btoa(`${CLIENT_ID}:${PRIV_KEY}`) // btoa encodes in base64.\n\nconst URL = `https://api.ufosc.org/auth/token?grant_type=authorization_code` +\n    `&code=${AUTH_CODE}&redirect_uri=${REDIRECT_URI}&client_id=${CLIENT_ID}`\n\naxios({\n  method: \'get\',\n  url: URL,\n  headers: {\n      \'Authorization\': `Basic ${client_authorization}`\n  }\n}).then((res) => {\n    // Succesfully received response.\n    console.log(res)\n});\n')),(0,a.kt)("p",null,"A successful response will include the following JSON body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "success",\n    "access_token": "<ACCESS_TOKEN>",\n    "token_type": "bearer",\n    "expires_in": 1200,\n    "refresh_token": "<REFRESH_TOKEN>",\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<ACCESS_TOKEN>")," may now be used to access resources on the user's behalf. For further instructions, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/ows/usage/resources"},"Accessing Resources"),". The access token will be available for 1200 seconds (20 minutes). After that, you'll need to use the refresh token to automatically reissue a new access token. This is a security measure that protects against hijacked access tokens. With a refresh token, you can continue accessing the user's information until the user prohibits you from doing so, or until the client expires. The process of using a refresh token to generate new access tokens is described in the following section."),(0,a.kt)("h4",{id:"refreshing-access-tokens"},"Refreshing Access Tokens"),(0,a.kt)("p",null,"Tokens may be refreshed using the ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.ufosc.org/auth/token")," route. Similar to the access token request route (above), the client must authorize itself by including its base64-encoded ID and private key combination. As before, the authorization header must assume the format below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Authorization: Basic NjU4MDNjMGFjNmMwMDgxNzA5ZjU5NDlkOmVBMXdUbFNYMGtUNktnZUYzKzFCNW9HTGMvNDZDZEhuamRoTStjMFZFN0k9\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," is the header name, basic is the authentication scheme, and the string is a base64-encoded id and private key combination. The base64-encoded ID and private key must follow the syntax below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"BASE64(<CLIENT_ID>:<PRIVATE_KEY>)\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"<CLIENT_ID>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<PRIVATE_KEY>")," are the ID and key generated in the client-creation process. The ",(0,a.kt)("inlineCode",{parentName:"p"},"BASE64()")," function indicates that the value should be base64-encoded and should not be part of the authorization string. Additionally, the client should attach the following in the ",(0,a.kt)("b",null,"URL parameters")," of the request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"grant_type=refresh_token\nrefresh_token=<REFRESH_TOKEN>\n")),(0,a.kt)("p",null,"Where the ",(0,a.kt)("inlineCode",{parentName:"p"},"<REFRESH_TOKEN>")," is the token received in the authorization grant request (specified in the section above). The server will respond with the new access token in the response body (JSON). An example is illustrated below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "success",\n    "token": "<NEW_ACCESS_TOKEN>",\n    "token_type": "bearer",\n    "expires_in": 1200,\n    "refresh_token": "<REFRESH_TOKEN>"\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<REFRESH_TOKEN>")," is the same as before, whilst the ",(0,a.kt)("inlineCode",{parentName:"p"},"<NEW_ACCESS_TOKEN>")," specifies a new access token for accessing resources on the user's behalf. The access token expires after 1200 seconds (20 minutes). To access resources using the access token, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/ows/usage/resources"},"Accessing Resources"),"."),(0,a.kt)("h2",{id:"security-measures"},"Security Measures"),(0,a.kt)("h3",{id:"state"},"State"),(0,a.kt)("p",null,"As per ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749#section-4.1.1"},"RFC6749"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"State:\nAn opaque value used by the client to maintain\nstate between the request and callback. The authorization\nserver includes this value when redirecting the user-agent back\nto the client. The parameter SHOULD be used for preventing\ncross-site request forgery as described in Section 10.12.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," parameter is an important security measure in protecting against CSRF (cross-site request forgery) attacks. State is used as follows:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The client attaches a state parameter that identifies the user's session."),(0,a.kt)("li",{parentName:"ol"},"The authorization server (i.e. ",(0,a.kt)("a",{parentName:"li",href:"https://auth.ufosc.org"},"https://auth.ufosc.org"),") processes the request, and redirects back to the client. It attaches the same state value to its request."),(0,a.kt)("li",{parentName:"ol"},"The client verifies that the state value is equivalent to the user's session string.")),(0,a.kt)("p",null,"When the client verifies the state string, it is in essence verifying that the user's login request originated from the client application. If the state differs, then it is likely that an attacker is trying to login using a hijacked token."),(0,a.kt)("p",null,"As per ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749#section-10.12"},"RFC6749"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'The client MUST implement CSRF protection for its redirection URI.\nThis is typically accomplished by requiring any request sent to the\nredirection URI endpoint to include a value that binds the request to\nthe user-agent\'s authenticated state (e.g., a hash of the session\ncookie used to authenticate the user-agent).  The client SHOULD\nutilize the "state" request parameter to deliver this value to the\nauthorization server when making an authorization request.')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Once authorization has been obtained from the end-user, the\nauthorization server redirects the end-user's user-agent back to the\nclient with the required binding value contained in the \"state\"\nparameter.  The binding value enables the client to verify the\nvalidity of the request by matching the binding value to the\nuser-agent's authenticated state.  The binding value used for CSRF\nprotection MUST contain a non-guessable value (as described in\nSection 10.10), and the user-agent's authenticated state (e.g.,\nsession cookie, HTML5 local storage) MUST be kept in a location\naccessible only to the client and the user-agent (i.e., protected by\nsame-origin policy).")),(0,a.kt)("admonition",{title:"CLIENT BAN",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Omitting the state parameter or intentionally using the state security measure haphazardly may lead to client/user ban & termination. The state parameter is imperative in securing both client applications and user accounts.")),(0,a.kt)("h2",{id:"error-handling"},"Error Handling"),(0,a.kt)("h3",{id:"errors-from-oauth2-api"},"Errors from OAuth2 API"),(0,a.kt)("p",null,"When interacting with the OWS OAuth2 API, you might come across a variety of errors. For consistency, these always conform the below format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"JSON Error",JSON:!0,Error:!0},'{\n    "error": "invalid_token",\n    "error_description": "client not found",\n}\n')),(0,a.kt)("p",null,"OAuth2 API errors are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In JSON body encoding."),(0,a.kt)("li",{parentName:"ul"},"Respond with a non-200 error status code."),(0,a.kt)("li",{parentName:"ul"},'Contain an "error" body field.'),(0,a.kt)("li",{parentName:"ul"},'May or may not contain an "error_description" field.')),(0,a.kt)("h3",{id:"errors-in-url-parameters"},"Errors in URL Parameters"),(0,a.kt)("p",null,"When redirects are involved (i.e. when redirecting the user to prompt for login to a client application), the OWS dashboard will delegate error handling to the client application whenever the integrity of the redirect URL can be verified. For example, if you've correctly identified the client ID and redirect URL but specified a wrong response type, the dashboard will redirect to the redirect URL with the following URL parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"error=<ERROR_TYPE>\nstate=<STATE>\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"<ERROR_TYPE>")," is one of the error response types specified in ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749#section-5.2"},"RFC6749")," and state is the variable specified in the original request. Optionally, an ",(0,a.kt)("inlineCode",{parentName:"p"},"error_description")," parameter may be included; it specifies a user-readable error message."))}p.isMDXComponent=!0}}]);
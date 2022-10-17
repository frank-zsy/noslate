"use strict";(self.webpackChunknoslate_website=self.webpackChunknoslate_website||[]).push([[2585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9547:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Custom Gateway",s={unversionedId:"noslate_workers/tutorials/custom_gateway",id:"noslate_workers/tutorials/custom_gateway",title:"Custom Gateway",description:"Following this tutorial, we will implement a custom Gateway module based on HTTP, and can store Worker function information persistently through sqllite.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/noslate_workers/tutorials/custom_gateway.md",sourceDirName:"noslate_workers/tutorials",slug:"/noslate_workers/tutorials/custom_gateway",permalink:"/en/docs/noslate_workers/tutorials/custom_gateway",draft:!1,editUrl:"https://github.com/noslate-project/noslate/tree/main/site/docs/noslate_workers/tutorials/custom_gateway.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Gateway",permalink:"/en/docs/noslate_workers/references/gateway"},next:{title:"Customize Outbound service proxy",permalink:"/en/docs/noslate_workers/tutorials/custom_outbound"}},l={},c=[{value:"Data storage",id:"data-storage",level:2},{value:"HTTP Server",id:"http-server",level:2},{value:"/invoke",id:"invoke",level:3},{value:"1. Create a HTTP Server",id:"1-create-a-http-server",level:4},{value:"2. Create Agent object and initialize",id:"2-create-agent-object-and-initialize",level:4},{value:"3. Parse the HTTP request and forward it",id:"3-parse-the-http-request-and-forward-it",level:3},{value:"4. Support update configuration",id:"4-support-update-configuration",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-gateway"},"Custom Gateway"),(0,a.kt)("p",null,"Following this tutorial, we will implement a custom Gateway module based on HTTP, and can store Worker function information persistently through sqllite."),(0,a.kt)("h2",{id:"data-storage"},"Data storage"),(0,a.kt)("p",null,"In this example, we choose sqlite3 as the storage, first create a database:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> sqlite3 gateway.db\n")),(0,a.kt)("p",null,"Then we create two tables to store Worker function configuration and service routing configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sqlite> CREATE TABLE function_profile (\n  id INT PRIMARY KEY NOT NULL,\n  name CHAR(50) NOT NULL,\n  codeInfo TEXT NOT NULL,\n  namespace CHAR(50),\n  workerConfig TEXT,\n  environments TEXT,\n  resourceLimit TEXT,\n  rateLimit TEXT\n);\n\nsqlite> CREATE TABLE service_profile (\n  id INT PRIMARY KEY NOT NULL,\n  name CHAR(50) NOT NULL,\n  type CHAR(50) NOT NULL,\n  selectors TEXT NOT NULL\n);\n")),(0,a.kt)("h2",{id:"http-server"},"HTTP Server"),(0,a.kt)("p",null,"In this example, we choose expressjs as the HTTP server framework."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> npm install express --save\n")),(0,a.kt)("p",null,"gateway provides the following routes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// gateway.js\napp.post('/invoke', this.invoke);\n\n// function\u3001service CURD\napp.post('/addFunction', this.addFunction);\napp.post('/addService', this.addService);\napp.get('/listFunction', this.listFunction);\napp.get('/listService', this.listService);\napp.post('/removeFunction', this.removeFunction);\napp.post('/removeService', this.removeService);\n")),(0,a.kt)("p",null,"Then we initialize sqllite db and noslated client."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// init db\nthis.db = new Sequelize({\n  dialect: 'sqlite',\n  storage: './gateway.db'\n});\n\n// init agent\nconst NoslatedClient = require(process.env.NOSLATE_PATH).NoslatedClient;\nthis.agent = new NoslatedClient();\n\nawait this.agent.start();\n")),(0,a.kt)("h3",{id:"invoke"},"/invoke"),(0,a.kt)("p",null,"Forwarding the request to Noslate and executing it is the core capability of the entire Gateway, so let's look at the implementation of this part first."),(0,a.kt)("p",null,"In the current gateway implementation, we agree that the specific call target is passed in with the query parameter target, the format is -- ",(0,a.kt)("strong",{parentName:"p"},"target type|target name"),", and the target type value is function or service."),(0,a.kt)("p",null,"Here, take HTTP Server as an example to introduce how to implement a custom Gateway module:"),(0,a.kt)("h4",{id:"1-create-a-http-server"},"1. Create a HTTP Server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const http = require('node:http');\n\nconst server = http.createServer((req, res) => {\n  res.end();\n});\n\nserver.listen(8000);\n")),(0,a.kt)("h4",{id:"2-create-agent-object-and-initialize"},"2. Create Agent object and initialize"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const NoslatedClient = require(process.env.NOSLATE_PATH).NoslatedClient;\nconst client = new NoslatedClient();\n\nawait client.start();\n")),(0,a.kt)("h3",{id:"3-parse-the-http-request-and-forward-it"},"3. Parse the HTTP request and forward it"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// The call target is specified by the x-noslate-target in the request header\nconst target = headers['x-noslate-target'];\nconst targetArr = target.split(':);\nlet _res;\n\nif (targetArr[0] === 'service') {\n    _res = await invokeService(targetArr[1], req, { headers: req.headers, url: req.url, method: req.method });\n} else {\n    _res = await invoke(targetArr[1], req, { headers: req.headers, url: req.url, method: req.method });\n}\n\n_res.pipe(res);\n")),(0,a.kt)("h3",{id:"4-support-update-configuration"},"4. Support update configuration"),(0,a.kt)("p",null,"Subscribe to remote Worker function configuration and update"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"setInterval(async () => {\n    const config = await fetch(configUrl);\n\n    await agent.setFunctionProfile(url);\n}, 60 * 1000);\n")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunknoslate_website=self.webpackChunknoslate_website||[]).push([[5404],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return r?n.createElement(m,s(s({ref:t},d),{},{components:r})):n.createElement(m,s({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7341:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},s="Serialize API",i={unversionedId:"noslate_workers/aworker/serialize-api",id:"noslate_workers/aworker/serialize-api",title:"Serialize API",description:"Aworker provides user code APIs for saving and restoring user code state, which are used in Warmfork scenarios and Startup Snapshot scenarios.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/noslate_workers/aworker/serialize-api.md",sourceDirName:"noslate_workers/aworker",slug:"/noslate_workers/aworker/serialize-api",permalink:"/en/docs/noslate_workers/aworker/serialize-api",draft:!1,editUrl:"https://github.com/noslate-project/noslate/tree/main/site/docs/noslate_workers/aworker/serialize-api.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Web API",permalink:"/en/docs/noslate_workers/aworker/web-api"},next:{title:"Noslated",permalink:"/en/docs/noslate_workers/noslated/intro"}},l={},p=[{value:"Warmfork",id:"warmfork",level:3},{value:"Startup Snapshot",id:"startup-snapshot",level:3},{value:"Event: <code>&#39;serialize&#39;</code>",id:"event-serialize",level:3},{value:"Event: <code>&#39;deserialize&#39;</code>",id:"event-deserialize",level:3}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serialize-api"},"Serialize API"),(0,a.kt)("p",null,"Aworker provides user code APIs for saving and restoring user code state, which are used in Warmfork scenarios and Startup Snapshot scenarios."),(0,a.kt)("h3",{id:"warmfork"},"Warmfork"),(0,a.kt)("p",null,"When Aworker is started with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--mode=seed-userland")," directive:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ aworker --mode=seed-userland [options] <script-filepath>\n")),(0,a.kt)("p",null,"User code can observe the ",(0,a.kt)("inlineCode",{parentName:"p"},"'serialize'")," event. At the end of the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent"},"ExtendableEvent")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"'serialize'")," event, it will enter the forkwait state after all asynchronous tasks are processed."),(0,a.kt)("p",null,"In the fork child process, user code can observe the ",(0,a.kt)("inlineCode",{parentName:"p"},"'deserialize'")," event. At the end of the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent"},"ExtendableEvent")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"'deserialize'")," event, the normal startup process begins, executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"'install'")," event, etc."),(0,a.kt)("h3",{id:"startup-snapshot"},"Startup Snapshot"),(0,a.kt)("p",null,"When Aworker started with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--build-snapshot")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ aworker --build-snapshot --snapshot-blob snapshot.blob code.js\n")),(0,a.kt)("p",null,"User code can observe the ",(0,a.kt)("inlineCode",{parentName:"p"},"'serialize'")," event. When the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent"},"ExtendableEvent")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"'serialize'")," event terminates, it will start generating a Startup Snapshot to the specified file after all asynchronous tasks are processed."),(0,a.kt)("p",null,"After the Startup Snapshot file is generated, Aworker can restore the process state from the Startup Snapshot and start executing user code via the ",(0,a.kt)("inlineCode",{parentName:"p"},"--snapshot-blob")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ aworker --snapshot-blob snapshot.blob\n")),(0,a.kt)("p",null,"During this phase, the ",(0,a.kt)("inlineCode",{parentName:"p"},"'deserialized'")," event can be observed by user code after the Worker instance has completed state recovery from the Startup Snapshot. At the end of the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent"},"ExtendableEvent")," of the ",(0,a.kt)("inlineCode",{parentName:"p"},"'deserialize'")," event, the normal startup process begins, executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"'install'")," event, etc."),(0,a.kt)("p",null,"Handlers for events such as ",(0,a.kt)("inlineCode",{parentName:"p"},"'deserialize'")," in the state restoration phase are registered in the user code used when the Startup Snapshot is generated."),(0,a.kt)("h3",{id:"event-serialize"},"Event: ",(0,a.kt)("inlineCode",{parentName:"h3"},"'serialize'")),(0,a.kt)("p",null,"Parameters: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"event <",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent"},"ExtendableEvent"),">")),(0,a.kt)("p",null,"Represents that the Worker instance is ready to perform state saving operations, such as forkwait mode, Startup Snapshot serialization mode, etc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"addEventListener('serialize', event => {\n  // Reset states that are correlated to the environment.\n  event.waitUntil(Promise.resolve());\n});\n")),(0,a.kt)("h3",{id:"event-deserialize"},"Event: ",(0,a.kt)("inlineCode",{parentName:"h3"},"'deserialize'")),(0,a.kt)("p",null,"Parameters: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"event <",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent"},"ExtendableEvent"),">")),(0,a.kt)("p",null,"Represents that the Worker instance is ready to perform state recovery operations, such as child processes in forkwait mode, Startup Snapshot deserialization completion, etc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"addEventListener('deserialize', event => {\n  // Restore states that are correlated to the environment.\n  event.waitUntil(Promise.resolve());\n});\n")))}c.isMDXComponent=!0}}]);
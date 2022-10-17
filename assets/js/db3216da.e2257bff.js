"use strict";(self.webpackChunknoslate_website=self.webpackChunknoslate_website||[]).push([[9171],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4855:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},l="Turf",i={unversionedId:"noslate_workers/turf/intro",id:"noslate_workers/turf/intro",title:"Turf",description:"\u5728 Noslate \u67b6\u6784\u4e0b\uff0c\u8c03\u5ea6\u5355\u5143\u4ece\u4e4b\u524d\u7684\u5bb9\u5668\u4e0b\u6c89\u5230\u4e86\u8fdb\u7a0b\uff0c\u56e0\u6b64\u8d44\u6e90\u9694\u79bb\u662f\u5f88\u91cd\u8981\u7684\u4e00\u70b9\u3002\u6211\u4eec\u57fa\u4e8e Linux \u7cfb\u7edf\u63d0\u4f9b\u7684\u80fd\u529b\uff0c",source:"@site/docs/noslate_workers/turf/intro.md",sourceDirName:"noslate_workers/turf",slug:"/noslate_workers/turf/intro",permalink:"/docs/noslate_workers/turf/intro",draft:!1,editUrl:"https://github.com/noslate-project/noslate/tree/main/site/docs/noslate_workers/turf/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Noslated",permalink:"/docs/noslate_workers/noslated/intro"},next:{title:"Worker \u51fd\u6570\u914d\u7f6e",permalink:"/docs/noslate_workers/references/function_profile"}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"turf"},"Turf"),(0,o.kt)("p",null,"\u5728 Noslate \u67b6\u6784\u4e0b\uff0c\u8c03\u5ea6\u5355\u5143\u4ece\u4e4b\u524d\u7684\u5bb9\u5668\u4e0b\u6c89\u5230\u4e86\u8fdb\u7a0b\uff0c\u56e0\u6b64\u8d44\u6e90\u9694\u79bb\u662f\u5f88\u91cd\u8981\u7684\u4e00\u70b9\u3002\u6211\u4eec\u57fa\u4e8e Linux \u7cfb\u7edf\u63d0\u4f9b\u7684\u80fd\u529b\uff0c\n\u5b9e\u73b0\u5bf9\u6267\u884c\u5355\u5143\u7684\u6700\u5c0f\u5316\u6388\u6743\u4ee5\u53ca\u8d44\u6e90\u4f7f\u7528\u9650\u5236\uff0c\u540c\u65f6\u7528\u6237\u63a5\u53e3\u8bbe\u8ba1\u9075\u4ece OCI \u89c4\u8303\uff0c\u63d0\u4f9b Worker \u5b9e\u4f8b\u7ba1\u7406\u80fd\u529b\u3002\u4f5c\u4e3a\u57fa\u7840\u7ec4\u4ef6\uff0c\n\u8d1f\u8d23\u7ba1\u7406\u5404 Worker \u5b9e\u4f8b\u6267\u884c\u5355\u5143\u7684\u751f\u547d\u5468\u671f\u4ee5\u53ca\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u8ba4\u4e3a turf \u662f\u4e00\u4e2a\u8d44\u6e90\u914d\u7f6e\u5668\u3002\u5b83\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"fork()")," \u7cfb\u7edf\u8c03\u7528\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8fdb\u7a0b\uff0c\u7136\u540e\u914d\u7f6e\u8fd9\u4e2a\u8fdb\u7a0b\u7684\u8d44\u6e90\u3001\u9694\u79bb\u53ca\u6743\u9650\uff0c\n\u6700\u540e\u5c06\u7a0b\u5e8f\u6267\u884c\u79fb\u4ea4\u5230\u5e94\u7528\u4ee3\u7801\u4e0a\uff0c\u4e4b\u540e\u5e94\u7528\u5c31\u8fd0\u884c\u5728\u4e86\u4e00\u4e2a\u7ea6\u675f\u7684\u6267\u884c\u73af\u5883\u4e2d\u3002"),(0,o.kt)("p",null,"\u6709\u5f88\u591a\u540d\u79f0\u4ee3\u8868\u7740\u7c7b\u4f3c\u7684\u610f\u601d\uff0c\u5982\u6c99\u76d2 (sandbox)\u3001\u7262\u7b3c (jail)\u3001\u5bb9\u5668 (container)\u3002\u73b0\u4ee3\u7684\u8fd0\u884c\u9694\u79bb\u6280\u672f\u90fd\u57fa\u4e8e\u76f8\u4f3c\n\u7684\u786c\u4ef6\u548c\u5185\u6838\u6240\u63d0\u4f9b\u7684\u9694\u79bb\u7279\u6027\u6216\u529f\u80fd\u4e0a\u5f00\u53d1\u7684\uff0c\u4f46\u662f\u6240\u5e94\u7528\u7684\u73af\u5883\u7684\u4e0d\u540c\u9020\u6210\u4ed6\u4eec\u4e4b\u95f4\u5b58\u5728\u4e00\u4e9b\u5dee\u5f02\u3002\u6c99\u76d2\u4e00\u822c\u5f3a\u8c03\u7684\u662f\u9694\n\u79bb\u6027\uff0c\u7262\u7b3c\u4e00\u822c\u5f3a\u8c03\u5176\u7684\u9650\u5236\uff0c\u800c\u5bb9\u5668\u5f3a\u8c03\u5b83\u7684\u6574\u4f53\u4ea4\u4ed8\u3002\u6240\u4ee5 docker \u4ee5\u96c6\u88c5\u7bb1\u5f0f\u7684\u4ea4\u4ed8\u7b80\u5316\u8fd0\u7ef4\u63d0\u9ad8\u6548\u7387\uff0c\u4f46\u672a\u5fc5\u6700\u9002\u5408\nNoslate \u7684\u573a\u666f\u3002"),(0,o.kt)("p",null,"turf \u7684\u4e3b\u8981\u8bbe\u8ba1\u76ee\u6807\u662f\u63d0\u4f9b\u7ed9 Noslate Workers \u53bb\u627f\u8f7d JavaScript \u51fd\u6570\uff0c\u6240\u4ee5\u5b83\u6709\u4e00\u4e9b\u65b0\u7684\u7279\u70b9\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JavaScript \u4ee3\u7801\u8fd0\u884c\u5728 VM \u91cc\uff0c\u5b83\u5e76\u4e0d\u76f4\u63a5\u8c03\u7528\u7cfb\u7edf\u8c03\u7528\uff1b"),(0,o.kt)("li",{parentName:"ul"},"JavaScript \u4f9d\u8d56\u5e93\u53ef\u80fd\u5f88\u591a\u5f88\u5927\uff0c\u57fa\u672c\u90fd\u4f1a\u4f9d\u8d56\u4e8e\u5916\u90e8\u670d\u52a1\uff1b"),(0,o.kt)("li",{parentName:"ul"},"JavaScript \u5e7f\u6cdb\u8fd0\u7528\u4e8e Web Server\u3001Server Side Rendering \u7b49\u670d\u52a1\u4e0a\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u9700\u8981\u80fd\u591f\u63d0\u4f9b\u5373\u65f6\u54cd\u5e94\u8bf7\u6c42\u7684\u542f\u52a8\u901f\u5ea6\uff1b")),(0,o.kt)("p",null,"\u6240\u4ee5\uff0cturf \u76ee\u6807\u63d0\u4f9b\u4e00\u5b9a\u7a0b\u5ea6\u7684\u9694\u79bb\u6027\u548c\u5171\u4eab\u6587\u4ef6\u7cfb\u7edf\u4e0e\u7cfb\u7edf\u670d\u52a1\u3002"))}p.isMDXComponent=!0}}]);
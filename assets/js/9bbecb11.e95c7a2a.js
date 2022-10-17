"use strict";(self.webpackChunknoslate_website=self.webpackChunknoslate_website||[]).push([[8981],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>s});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),b=c(t),s=r,g=b["".concat(i,".").concat(s)]||b[s]||u[s]||l;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=b;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},2814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={},o="\u4f7f\u7528 MacOS \u8c03\u8bd5",d={unversionedId:"debugger/andb/env_macos",id:"debugger/andb/env_macos",title:"\u4f7f\u7528 MacOS \u8c03\u8bd5",description:"\u7cfb\u7edf\u4f9d\u8d56",source:"@site/docs/debugger/andb/env_macos.md",sourceDirName:"debugger/andb",slug:"/debugger/andb/env_macos",permalink:"/docs/debugger/andb/env_macos",draft:!1,editUrl:"https://github.com/noslate-project/noslate/tree/main/site/docs/debugger/andb/env_macos.md",tags:[],version:"current",frontMatter:{},sidebar:"debugger",previous:{title:"\u4f7f\u7528 Linux \u8c03\u8bd5",permalink:"/docs/debugger/andb/env_linux"},next:{title:"\u547d\u4ee4\u884c",permalink:"/docs/debugger/andb/cli"}},i={},c=[{value:"\u7cfb\u7edf\u4f9d\u8d56",id:"\u7cfb\u7edf\u4f9d\u8d56",level:2},{value:"\u4f7f\u7528 XCode \u5185\u7f6e lldb \u8c03\u8bd5",id:"\u4f7f\u7528-xcode-\u5185\u7f6e-lldb-\u8c03\u8bd5",level:2},{value:"\u4f7f\u7528\u9884\u7f16\u8bd1\u7684 andb-gdb \u8c03\u8bd5",id:"\u4f7f\u7528\u9884\u7f16\u8bd1\u7684-andb-gdb-\u8c03\u8bd5",level:2},{value:"\u914d\u7f6e\u5de5\u5177",id:"\u914d\u7f6e\u5de5\u5177",level:2},{value:"\u4e00\u822c\u6027\u8c03\u8bd5",id:"\u4e00\u822c\u6027\u8c03\u8bd5",level:2},{value:"\u624b\u52a8\u8c03\u5f0f\u65b9\u6cd5",id:"\u624b\u52a8\u8c03\u5f0f\u65b9\u6cd5",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f7f\u7528-macos-\u8c03\u8bd5"},"\u4f7f\u7528 MacOS \u8c03\u8bd5"),(0,r.kt)("h2",{id:"\u7cfb\u7edf\u4f9d\u8d56"},"\u7cfb\u7edf\u4f9d\u8d56"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Catalina+"),(0,r.kt)("li",{parentName:"ul"},"LLDB 11.0+ (Xcode \u81ea\u5e26)"),(0,r.kt)("li",{parentName:"ul"},"GDB 10.2 (\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"andb-gdb"),")")),(0,r.kt)("h2",{id:"\u4f7f\u7528-xcode-\u5185\u7f6e-lldb-\u8c03\u8bd5"},"\u4f7f\u7528 XCode \u5185\u7f6e lldb \u8c03\u8bd5"),(0,r.kt)("p",null,"\u5b89\u88c5 xcode \u540e\u81ea\u5e26\u7684 lldb \u5373\u53ef\uff0c\u65e0\u9700\u5176\u4ed6\u989d\u5916\u5b89\u88c5\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u9884\u7f16\u8bd1\u7684-andb-gdb-\u8c03\u8bd5"},"\u4f7f\u7528\u9884\u7f16\u8bd1\u7684 andb-gdb \u8c03\u8bd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"brew")," \u4ed3\u5e93\u9ed8\u8ba4\u7684 gdb \u53ea\u9002\u5408 MacOS \u5e73\u53f0\u7684 Corefile\uff0c\u8981\u8c03\u8bd5 Linux \u5e73\u53f0\u7684 Corefile \u9700\u8981\u91cd\u65b0\u8fdb\u884c\u7f16\u8bd1\uff0c\u6216\u4f7f\u7528 andb \u9884\u7f16\u8bd1\u7684\u7248\u672c\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"andb-gdb")," \u662f\u591a\u5e73\u53f0\u9884\u7f16\u8bd1\u7684 gdb \u5de5\u5177\uff0c\u5f53\u524d\u7248\u672c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"10.2"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$git clone git@github.com:noslate-project/andb-gdb.git\n\n# \u540c\u6837\u9700\u8981\u628a gdb \u73af\u5883\u53d8\u91cf\u52a0\u5165\n$cd andb-gdb\n$source env.sh\nx86_64-Darwin\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e\u5de5\u5177"},"\u914d\u7f6e\u5de5\u5177"),(0,r.kt)("p",null,"\u514b\u9686 ",(0,r.kt)("inlineCode",{parentName:"p"},"andb")," \u4ed3\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:noslate-project/andb.git\n")),(0,r.kt)("p",null,"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"andb")," \u73af\u5883\u53d8\u91cf\u52a0\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$cd andb\n$source env.sh\nandb loader enabled, please use 'andb' command to start debugging.\n")),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"andb")," \u68c0\u67e5\u6240\u4f7f\u7528\u7684\u8def\u5f84"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[zlei@IntelMac andb]$ andb\n/Users/zlei/demo/andb/loader\n")),(0,r.kt)("h2",{id:"\u4e00\u822c\u6027\u8c03\u8bd5"},"\u4e00\u822c\u6027\u8c03\u8bd5"),(0,r.kt)("p",null,"\u91c7\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"gdb")," \u8fdb\u884c\u8c03\u8bd5\uff0c\u5e76\u52a0\u8f7d core.pid \u6587\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"andb -l -c core.pid\n")),(0,r.kt)("p",null,"\u91c7\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"lldb")," \u8fdb\u884c\u8c03\u8bd5\uff0c\u5e76\u52a0\u8f7d core.pid \u6587\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"andb -g -c core.<pid>\n")),(0,r.kt)("h2",{id:"\u624b\u52a8\u8c03\u5f0f\u65b9\u6cd5"},"\u624b\u52a8\u8c03\u5f0f\u65b9\u6cd5"),(0,r.kt)("p",null,"\u5728\u8c03\u8bd5\u975e\u5b98\u65b9\u53d1\u884c\u7248\u7684 core \u6587\u4ef6\u65f6\uff0c\u4f1a\u9700\u8981\u91c7\u7528\u624b\u52a8\u8c03\u8bd5\u65b9\u6cd5\uff0c\u6b64\u65f6\u9700\u8981\u51c6\u5907\u5982\u4e0b\u6587\u4ef6\uff0c\u5e76\u653e\u7f6e\u5728\u76f8\u540c\u76ee\u5f55\u4e0b\uff0c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u5957\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u5982 node\uff0c\u5fc5\u987b\u4e0e core.pid \u6587\u4ef6\u914d\u5957\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u914d\u5957\u7684 node.typ \u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u91c7\u7528\u548c\u5b98\u65b9 release \u76f8\u540c\u7248\u672c\u7684 node.typ \u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"core.pid \u6587\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528 gdb \u8c03\u8bd5\nandb -g node -c core.pid\n\n# \u6216 \u4f7f\u7528 lldb \u8c03\u8bd5\nandb -l node -c core.pid\n")))}u.isMDXComponent=!0}}]);
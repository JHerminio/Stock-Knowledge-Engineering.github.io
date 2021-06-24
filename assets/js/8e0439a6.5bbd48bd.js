(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(127)),i={title:"Configure the LMS",date:new Date("2018-12-29T05:02:05.000Z"),lastmod:new Date("2020-01-05T04:42:26.000Z"),weight:6,draft:!1,keywords:["Server"]},l={unversionedId:"LMS v1.0 Installation and Docs/Installation/Windows/Configure-the-LMS/_index.en",id:"LMS v1.0 Installation and Docs/Installation/Windows/Configure-the-LMS/_index.en",isDocsHomePage:!1,title:"Configure the LMS",description:"1. Navigate to admin folder under Stock Knowledge LMS Folder",source:"@site/docs/LMS v1.0 Installation and Docs/Installation/Windows/Configure-the-LMS/_index.en.md",sourceDirName:"LMS v1.0 Installation and Docs/Installation/Windows/Configure-the-LMS",slug:"/LMS v1.0 Installation and Docs/Installation/Windows/Configure-the-LMS/_index.en",permalink:"/docs/LMS v1.0 Installation and Docs/Installation/Windows/Configure-the-LMS/_index.en",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/LMS v1.0 Installation and Docs/Installation/Windows/Configure-the-LMS/_index.en.md",version:"current",frontMatter:{title:"Configure the LMS",date:"2018-12-29T05:02:05.000Z",lastmod:"2020-01-05T04:42:26.000Z",weight:6,draft:!1,keywords:["Server"]},sidebar:"tutorialSidebar",previous:{title:"MacOS",permalink:"/docs/LMS v1.0 Installation and Docs/Installation/MacOS/_index.en"},next:{title:"Install Git",permalink:"/docs/LMS v1.0 Installation and Docs/Installation/Windows/Install-Git/_index.en"}},c=[],s={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Navigate to admin folder under Stock Knowledge LMS Folder",Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},"X:\\xampp\\htdocs\\aws\\admin"))),Object(a.b)("li",{parentName:"ol"},"Open ","_","conf.dba.inc.php"),Object(a.b)("li",{parentName:"ol"},"Change database to your created database",Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},'\\$dba->database = "YOUR DATABASE NAME";'))),Object(a.b)("li",{parentName:"ol"},"Change home_url to your local admin url",Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},"\\$home_url = 'http://localhost/aws/admin';"))),Object(a.b)("li",{parentName:"ol"},"Done.")))}u.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(f,l(l({ref:t},s),{},{components:n})):o.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
import{M as E,a as F}from"./index.169aa352.js";import{P as k}from"./index.e975b118.js";import{aw as C,a as w,v as s,ay as t,o as g,j as B,z as r,i as p,n as a,k as A,B as d}from"./index.c4c5b1b1.js";import{C as D}from"./index.ac45ea84.js";import"./index.33b13fce.js";/* empty css              */import"./index.4fe6cb8f.js";import"./useWindowSizeFn.479b1b1f.js";import"./FullscreenOutlined.e19a3900.js";import"./index.8ffd8335.js";import"./index.909cf244.js";import"./useSize.7f70cba8.js";import"./eagerComputed.d7ba71c7.js";import"./useContentViewHeight.57e3794a.js";import"./ArrowLeftOutlined.36f95522.js";import"./index.9e69a644.js";import"./transButton.31bcfc79.js";import"./index.6e0454b1.js";import"./index.22f3caec.js";import"./Col.60adad3c.js";import"./useFlexGapSupport.b2b61870.js";import"./useRefs.489fe78a.js";import"./PlusOutlined.d485b8e8.js";const M=w({components:{MarkDown:E,PageWrapper:k,MarkdownViewer:F,ACard:D},setup(){const e=s(null),u=s(`
# \u6807\u9898h1

##### \u6807\u9898h5

**\u52A0\u7C97**
*\u659C\u4F53*
~~\u5220\u9664\u7EBF~~
[\u94FE\u63A5](https://github.com/vbenjs/vue-vben-admin)
\u2193\u5206\u5272\u7EBF\u2193

---


* \u65E0\u5E8F\u5217\u88681
  * \u65E0\u5E8F\u5217\u88681.1

1. \u6709\u5E8F\u5217\u88681
2. \u6709\u5E8F\u5217\u88682

* [ ] \u4EFB\u52A1\u5217\u88681
* [x] \u4EFB\u52A1\u5217\u88682

> \u5F15\u7528\u793A\u4F8B

\`\`\`js
// \u4EE3\u7801\u5757:
(() => {
  var htmlRoot = document.getElementById('htmlRoot');
  var theme = window.localStorage.getItem('__APP__DARK__MODE__');
  if (htmlRoot && theme) {
    htmlRoot.setAttribute('data-theme', theme);
    theme = htmlRoot = null;
  }
})();
\`\`\`

| \u8868\u683C | \u793A\u4F8B | \u{1F389}\uFE0F |
| --- | --- | --- |
| 1 | 2 | 3 |
| 4 | 5 | 6 |
`);function m(){const o=A(e);if(!o)return;o.getVditor().setTheme("dark","dark","dracula")}function l(o){u.value=o}function i(){u.value=""}return{value:u,toggleTheme:m,markDownRef:e,handleChange:l,clearValue:i}}}),V=d(" \u9ED1\u6697\u4E3B\u9898 "),R=d(" \u6E05\u7A7A\u5185\u5BB9 "),b={class:"mt-2"};function P(e,u,m,l,i,o){const n=t("a-button"),c=t("MarkDown"),_=t("MarkdownViewer"),h=t("a-card"),f=t("PageWrapper");return g(),B(f,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:r(()=>[p("div",null,[a(n,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:r(()=>[V]),_:1},8,["onClick"]),a(n,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:r(()=>[R]),_:1},8,["onClick"]),a(c,{value:e.value,"onUpdate:value":u[0]||(u[0]=v=>e.value=v),onChange:e.handleChange,ref:"markDownRef",placeholder:"\u8FD9\u662F\u5360\u4F4D\u6587\u672C"},null,8,["value","onChange"])]),p("div",b,[a(h,{title:"Markdown Viewer \u7EC4\u4EF6\u6F14\u793A"},{default:r(()=>[a(_,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}var ue=C(M,[["render",P]]);export{ue as default};

import{aw as m,a as l,dZ as c,b as d,ay as _,o as i,h as r,F as f,aB as u,q as p,bm as k,n as h}from"./index.c4c5b1b1.js";import{b as v}from"./index.74a72b18.js";import"./index.d53a450a.js";import"./index.fe2bc632.js";import"./ArrowLeftOutlined.36f95522.js";import"./index.71f388a3.js";import"./index.f1e4176f.js";import"./FullscreenOutlined.e19a3900.js";import"./index.0af282a9.js";import"./useWindowSizeFn.479b1b1f.js";import"./useContentViewHeight.57e3794a.js";import"./uniqBy.5709e5ee.js";import"./_baseIteratee.e417b5da.js";import"./get.9d13dfca.js";import"./index.33b13fce.js";import"./useRefs.489fe78a.js";import"./PlusOutlined.d485b8e8.js";import"./RedoOutlined.33c2a842.js";import"./index.6e0454b1.js";import"./lock.11a37800.js";const C=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:n}=d("setting-theme-picker");function o(s){e.event&&v(e.event,s)}return{prefixCls:n,handleClick:o}}}),b=["onClick"];function g(e,n,o,s,y,x){const a=_("CheckOutlined");return i(),r("div",{class:p(e.prefixCls)},[(i(!0),r(f,null,u(e.colorList||[],t=>(i(),r("span",{key:t,onClick:$=>e.handleClick(t),class:p([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:k({background:t})},[h(a)],14,b))),128))],2)}var J=m(C,[["render",g]]);export{J as default};

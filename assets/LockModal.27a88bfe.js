var f=(e,m,r)=>new Promise((c,a)=>{var d=o=>{try{t(r.next(o))}catch(i){a(i)}},s=o=>{try{t(r.throw(o))}catch(i){a(i)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(d,s);t((r=r.apply(e,m)).next())});import{aw as w,a as C,b as y,s as $,f as _,ay as u,o as x,j as F,z as h,i as p,q as l,t as g,n as k,B as L,az as M,c as S}from"./index.c4c5b1b1.js";import{B as I,a as N}from"./index.4fe6cb8f.js";import{B as R}from"./BasicForm.c40ed25b.js";import{u as P}from"./useForm.43ddc667.js";import{u as z}from"./lock.11a37800.js";import{h as U}from"./header.d801b988.js";import"./useWindowSizeFn.479b1b1f.js";import"./FullscreenOutlined.e19a3900.js";/* empty css              *//* empty css              */import"./index.71f388a3.js";import"./index.bcfd0c74.js";import"./Checkbox.1e62257e.js";import"./index.9db0ac8c.js";import"./index.96646871.js";import"./index.6f5cb6ce.js";import"./index.2ce8fd83.js";import"./index.8b516802.js";import"./get.9d13dfca.js";import"./index.dcfcb0b6.js";import"./eagerComputed.d7ba71c7.js";import"./index.d49206f8.js";import"./_baseIteratee.e417b5da.js";import"./DeleteOutlined.cd1cc243.js";import"./index.c810d829.js";import"./useRefs.489fe78a.js";import"./Form.86ced657.js";import"./Col.60adad3c.js";import"./useFlexGapSupport.b2b61870.js";import"./useSize.7f70cba8.js";import"./transButton.31bcfc79.js";import"./index.62b901b8.js";import"./index.418fd110.js";import"./index.fb0901df.js";import"./uuid.2b29000c.js";import"./download.43a6c176.js";import"./base64Conver.08b9f4ec.js";import"./index.9cac1b9f.js";import"./index.22f3caec.js";import"./uniqBy.5709e5ee.js";const V=C({name:"LockModal",components:{BasicModal:I,BasicForm:R},setup(){const{t:e}=S(),{prefixCls:m}=y("header-lock-modal"),r=$(),c=z(),a=_(()=>{var n;return(n=r.getUserInfo)==null?void 0:n.realName}),[d,{closeModal:s}]=N(),[t,{validateFields:o,resetFields:i}]=P({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const b=(yield o()).password;s(),c.setLockInfo({isLock:!0,pwd:b}),yield i()})}const B=_(()=>{const{avatar:n}=r.getUserInfo;return n||U});return{t:e,prefixCls:m,getRealName:a,register:d,registerForm:t,handleLock:v,avatar:B}}}),q=["src"];function D(e,m,r,c,a,d){const s=u("BasicForm"),t=u("a-button"),o=u("BasicModal");return x(),F(o,M({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:h(()=>[p("div",{class:l(`${e.prefixCls}__entry`)},[p("div",{class:l(`${e.prefixCls}__header`)},[p("img",{src:e.avatar,class:l(`${e.prefixCls}__header-img`)},null,10,q),p("p",{class:l(`${e.prefixCls}__header-name`)},g(e.getRealName),3)],2),k(s,{onRegister:e.registerForm},null,8,["onRegister"]),p("div",{class:l(`${e.prefixCls}__footer`)},[k(t,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:h(()=>[L(g(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var Fe=w(V,[["render",D]]);export{Fe as default};

var w=(x,n,i)=>new Promise((t,c)=>{var p=s=>{try{m(i.next(s))}catch(u){c(u)}},d=s=>{try{m(i.throw(s))}catch(u){c(u)}},m=s=>s.done?t(s.value):Promise.resolve(s.value).then(p,d);m((i=i.apply(x,n)).next())});import{u as z,a as I,L as S,_ as R,b as P}from"./LoginFormTitle.61ff422f.js";import{a as B,I as g,c as U,v as k,w as L,f as E,k as e,o as N,h as V,n as o,z as r,B as v,t as y,C,F as T,l as D}from"./index.c4c5b1b1.js";/* empty css              *//* empty css              */import{C as G}from"./index.9db0ac8c.js";import{S as M}from"./index.9cac1b9f.js";import{C as $}from"./index.8b516802.js";import{F as b}from"./Form.86ced657.js";import"./Checkbox.1e62257e.js";import"./Col.60adad3c.js";import"./useFlexGapSupport.b2b61870.js";import"./_baseIteratee.e417b5da.js";import"./get.9d13dfca.js";import"./useSize.7f70cba8.js";const ae=B({__name:"RegisterForm",setup(x){const n=b.Item,i=g.Password,{t}=U(),{handleBackLogin:c,getLoginState:p}=z(),d=k(),m=k(!1),s=L({account:"",password:"",confirmPassword:"",mobile:"",sms:"",policy:!1}),{getFormRules:u}=I(s),{validForm:F}=P(d),_=E(()=>e(p)===S.REGISTER);function h(){return w(this,null,function*(){const f=yield F()})}return(f,a)=>e(_)?(N(),V(T,{key:0},[o(R,{class:"enter-x"}),o(e(b),{class:"p-4 enter-x",model:s,rules:e(u),ref_key:"formRef",ref:d},{default:r(()=>[o(e(n),{name:"account",class:"enter-x"},{default:r(()=>[o(e(g),{class:"fix-auto-fill",size:"large",value:s.account,"onUpdate:value":a[0]||(a[0]=l=>s.account=l),placeholder:e(t)("sys.login.userName")},null,8,["value","placeholder"])]),_:1}),o(e(n),{name:"mobile",class:"enter-x"},{default:r(()=>[o(e(g),{size:"large",value:s.mobile,"onUpdate:value":a[1]||(a[1]=l=>s.mobile=l),placeholder:e(t)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),o(e(n),{name:"sms",class:"enter-x"},{default:r(()=>[o(e($),{size:"large",class:"fix-auto-fill",value:s.sms,"onUpdate:value":a[2]||(a[2]=l=>s.sms=l),placeholder:e(t)("sys.login.smsCode")},null,8,["value","placeholder"])]),_:1}),o(e(n),{name:"password",class:"enter-x"},{default:r(()=>[o(e(M),{size:"large",value:s.password,"onUpdate:value":a[3]||(a[3]=l=>s.password=l),placeholder:e(t)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),o(e(n),{name:"confirmPassword",class:"enter-x"},{default:r(()=>[o(e(i),{size:"large",visibilityToggle:"",value:s.confirmPassword,"onUpdate:value":a[4]||(a[4]=l=>s.confirmPassword=l),placeholder:e(t)("sys.login.confirmPassword")},null,8,["value","placeholder"])]),_:1}),o(e(n),{class:"enter-x",name:"policy"},{default:r(()=>[o(e(G),{checked:s.policy,"onUpdate:checked":a[5]||(a[5]=l=>s.policy=l),size:"small"},{default:r(()=>[v(y(e(t)("sys.login.policy")),1)]),_:1},8,["checked"])]),_:1}),o(e(C),{type:"primary",class:"enter-x",size:"large",block:"",onClick:h,loading:m.value},{default:r(()=>[v(y(e(t)("sys.login.registerButton")),1)]),_:1},8,["loading"]),o(e(C),{size:"large",block:"",class:"mt-4 enter-x",onClick:e(c)},{default:r(()=>[v(y(e(t)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1},8,["model","rules"])],64)):D("",!0)}});export{ae as default};

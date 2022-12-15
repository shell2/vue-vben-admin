var J=Object.defineProperty,K=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var z=(e,a,u)=>a in e?J(e,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[a]=u,y=(e,a)=>{for(var u in a||(a={}))Y.call(a,u)&&z(e,u,a[u]);if(j)for(var u of j(a))tt.call(a,u)&&z(e,u,a[u]);return e},B=(e,a)=>K(e,U(a));import{c as V,a as X,w as Z,v as M,cQ as et,f as T,a7 as A,L as nt,n as p,k as f,cC as C,dZ as it,fa as ot,b9 as H,az as st,fb as L,aF as Q}from"./index.c4c5b1b1.js";const{t:F}=V(),q={value:{type:Boolean,default:!1},isSlot:{type:Boolean,default:!1},text:{type:[String],default:F("component.verify.dragText")},successText:{type:[String],default:F("component.verify.successText")},height:{type:[Number,String],default:40},width:{type:[Number,String],default:220},circle:{type:Boolean,default:!1},wrapStyle:{type:Object,default:()=>({})},contentStyle:{type:Object,default:()=>({})},barStyle:{type:Object,default:()=>({})},actionStyle:{type:Object,default:()=>({})}},rt=B(y({},q),{src:{type:String},imgWidth:{type:Number,default:260},imgWrapStyle:{type:Object,default:()=>({})},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270},diffDegree:{type:Number,default:20}});var G=X({name:"BaseDargVerify",props:q,emits:["success","update:value","change","start","move","end"],setup(e,{emit:a,slots:u,expose:I}){const n=Z({isMoving:!1,isPassing:!1,moveDistance:0,toLeft:!1,startTime:0,endTime:0}),i=M(null),x=M(null),k=M(null),w=M(null);et({el:document,name:"mouseup",listener:()=>{n.isMoving&&h()}});const P=T(()=>{const{height:t,actionStyle:s}=e,c=`${parseInt(t)}px`;return y({left:0,width:c,height:c},s)}),O=T(()=>{const{height:t,width:s,circle:c,wrapStyle:o}=e,l=parseInt(t),m=`${parseInt(s)}px`;return y({width:m,height:`${l}px`,lineHeight:`${l}px`,borderRadius:c?l/2+"px":0},o)}),$=T(()=>{const{height:t,circle:s,barStyle:c}=e,o=parseInt(t);return y({height:`${o}px`,borderRadius:s?o/2+"px 0 0 "+o/2+"px":0},c)}),E=T(()=>{const{height:t,width:s,contentStyle:c}=e,o=`${parseInt(t)}px`,l=`${parseInt(s)}px`;return y({height:o,width:l},c)});A(()=>n.isPassing,t=>{if(t){const{startTime:s,endTime:c}=n,o=(c-s)/1e3;a("success",{isPassing:t,time:o.toFixed(1)}),a("update:value",t),a("change",t)}}),nt(()=>{n.isPassing=!!e.value});function S(t){return t.pageX||t.touches[0].pageX}function D(t){if(n.isPassing)return;const s=f(w);!s||(a("start",t),n.moveDistance=S(t)-parseInt(s.style.left.replace("px",""),10),n.startTime=new Date().getTime(),n.isMoving=!0)}function r(t){const s=parseInt(t.style.width),{width:c}=e,o=parseInt(c);return{offset:o-s-6,widthNum:o,actionWidth:s}}function d(t){const{isMoving:s,moveDistance:c}=n;if(s){const o=f(w),l=f(x);if(!o||!l)return;const{offset:m,widthNum:_,actionWidth:R}=r(o),v=S(t)-c;a("move",{event:t,moveDistance:c,moveX:v}),v>0&&v<=m?(o.style.left=`${v}px`,l.style.width=`${v+R/2}px`):v>m&&(o.style.left=`${_-R}px`,l.style.width=`${_-R/2}px`,e.isSlot||b())}}function g(t){const{isMoving:s,isPassing:c,moveDistance:o}=n;if(s&&!c){a("end",t);const l=f(w),m=f(x);if(!l||!m)return;const _=S(t)-o,{offset:R,widthNum:v,actionWidth:N}=r(l);_<R?e.isSlot?setTimeout(()=>{if(!e.value)h();else{const W=f(k);W&&(W.style.width=`${parseInt(m.style.width)}px`)}},0):h():(l.style.left=`${v-N}px`,m.style.width=`${v-N/2}px`,b()),n.isMoving=!1}}function b(){if(e.isSlot){h();return}n.endTime=new Date().getTime(),n.isPassing=!0,n.isMoving=!1}function h(){n.isMoving=!1,n.isPassing=!1,n.moveDistance=0,n.toLeft=!1,n.startTime=0,n.endTime=0;const t=f(w),s=f(x),c=f(k);!t||!s||!c||(n.toLeft=!0,H(()=>{n.toLeft=!1,t.style.left="0",s.style.width="0"},300),c.style.width=f(E).width)}return I({resume:h}),()=>{const t=()=>{const o=["darg-verify-bar"];return n.toLeft&&o.push("to-left"),p("div",{class:o,ref:x,style:f($)},null)},s=()=>{const o=["darg-verify-content"],{isPassing:l}=n,{text:m,successText:_}=e;return l&&o.push("success"),p("div",{class:o,ref:k,style:f(E)},[C(u,"text",l)||(l?_:m)])},c=()=>{const o=["darg-verify-action"],{toLeft:l,isPassing:m}=n;return l&&o.push("to-left"),p("div",{class:o,onMousedown:D,onTouchstart:D,style:f(P),ref:w},[C(u,"actionIcon",m)||(m?p(it,{class:"darg-verify-action__icon"},null):p(ot,{class:"darg-verify-action__icon"},null))])};return p("div",{class:"darg-verify",ref:i,style:f(O),onMousemove:d,onTouchmove:d,onMouseleave:g,onMouseup:g,onTouchend:g},[t(),s(),c()])}}});var at=X({name:"ImgRotateDragVerify",inheritAttrs:!1,props:rt,emits:["success","change","update:value"],setup(e,{emit:a,attrs:u,expose:I}){const n=M(null),i=Z({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{t:x}=V();A(()=>i.isPassing,r=>{if(r){const{startTime:d,endTime:g}=i,b=(g-d)/1e3;a("success",{isPassing:r,time:b.toFixed(1)}),a("change",r),a("update:value",r)}});const k=T(()=>{const{imgWrapStyle:r,imgWidth:d}=e;return y({width:`${d}px`,height:`${d}px`},r)}),w=T(()=>{const{minDegree:r,maxDegree:d}=e;return r===d?Math.floor(1+Math.random()*1)/10+1:1});function P(){i.startTime=new Date().getTime()}function O(r){i.draged=!0;const{imgWidth:d,height:g,maxDegree:b}=e,{moveX:h}=r,t=Math.ceil(h/(d-parseInt(g))*b*f(w));i.currentRotate=t,i.imgStyle=L("transform",`rotateZ(${i.randomRotate-t}deg)`)}function $(){const{minDegree:r,maxDegree:d}=e,g=Math.floor(r+Math.random()*(d-r));i.randomRotate=g,i.imgStyle=L("transform",`rotateZ(${g}deg)`)}function E(){const{randomRotate:r,currentRotate:d}=i,{diffDegree:g}=e;Math.abs(r-d)>=(g||20)?(i.imgStyle=L("transform",`rotateZ(${r}deg)`),i.toOrigin=!0,H(()=>{i.toOrigin=!1,i.showTip=!0},300)):S(),i.showTip=!0}function S(){i.isPassing=!0,i.endTime=new Date().getTime()}function D(){i.showTip=!1;const r=f(n);!r||(i.isPassing=!1,r.resume(),$())}return I({resume:D}),()=>{const{src:r}=e,{toOrigin:d,isPassing:g,startTime:b,endTime:h}=i,t=[];d&&t.push("to-origin");const s=(h-b)/1e3;return p("div",{class:"ir-dv"},[p("div",{class:"ir-dv-img__wrap",style:f(k)},[p("img",{src:r,onLoad:$,width:parseInt(e.width),class:t,style:i.imgStyle,onClick:()=>{D()},alt:"verify"},null),i.showTip&&p("span",{class:["ir-dv-img__tip",i.isPassing?"success":"error"]},[i.isPassing?x("component.verify.time",{time:s.toFixed(1)}):x("component.verify.error")]),!i.showTip&&!i.draged&&p("span",{class:["ir-dv-img__tip","normal"]},[x("component.verify.redoTip")])]),p(G,st({class:"ir-dv-drag__bar",onMove:O,onEnd:E,onStart:P,ref:n},y(y({},u),e),{value:g,isSlot:!0}),null)])}}});const dt=Q(G),ft=Q(at);export{dt as B,ft as R};

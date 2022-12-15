import{a as ba,G as g,J as ga,cN as v,Q as va,S as c,n as a,c5 as xa,aC as ha,cB as q,cO as ya,cP as ma}from"./index.c4c5b1b1.js";import"./index.6e0454b1.js";import{R as x,C as p}from"./index.22f3caec.js";import{T as H}from"./index.33b13fce.js";var _a=H.TabPane,wa=function(){return{prefixCls:String,title:g.any,extra:g.any,bordered:{type:Boolean,default:!0},bodyStyle:{type:Object,default:void 0},headStyle:{type:Object,default:void 0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},type:{type:String},size:{type:String},actions:g.any,tabList:{type:Array},tabBarExtraContent:g.any,activeTabKey:String,defaultActiveTabKey:String,cover:g.any,onTabChange:{type:Function}}},Ca=ba({name:"ACard",props:wa(),slots:["title","extra","tabBarExtraContent","actions","cover","customTab"],setup:function(n,X){var r=X.slots,m=ga("card",n),Y=m.prefixCls,Z=m.direction,A=m.size,aa=function(o){var i=o.map(function(l,f){return q(l)&&!ya(l)||!q(l)?a("li",{style:{width:"".concat(100/o.length,"%")},key:"action-".concat(f)},[a("span",null,[l])]):null});return i},ta=function(o){var i;(i=n.onTabChange)===null||i===void 0||i.call(n,o)},na=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],i;return o.forEach(function(l){l&&ma(l.type)&&l.type.__ANT_CARD_GRID&&(i=!0)}),i};return function(){var d,o,i,l,f,_,w,C,E=n.headStyle,ea=E===void 0?{}:E,P=n.bodyStyle,k=P===void 0?{}:P,K=n.loading,$=n.bordered,ra=$===void 0?!0:$,j=n.type,u=n.tabList,da=n.hoverable,G=n.activeTabKey,oa=n.defaultActiveTabKey,L=n.tabBarExtraContent,R=L===void 0?v((i=r.tabBarExtraContent)===null||i===void 0?void 0:i.call(r)):L,D=n.title,T=D===void 0?v((l=r.title)===null||l===void 0?void 0:l.call(r)):D,N=n.extra,S=N===void 0?v((f=r.extra)===null||f===void 0?void 0:f.call(r)):N,O=n.actions,z=O===void 0?v((_=r.actions)===null||_===void 0?void 0:_.call(r)):O,I=n.cover,V=I===void 0?v((w=r.cover)===null||w===void 0?void 0:w.call(r)):I,h=va((C=r.default)===null||C===void 0?void 0:C.call(r)),t=Y.value,ia=(d={},c(d,"".concat(t),!0),c(d,"".concat(t,"-loading"),K),c(d,"".concat(t,"-bordered"),ra),c(d,"".concat(t,"-hoverable"),!!da),c(d,"".concat(t,"-contain-grid"),na(h)),c(d,"".concat(t,"-contain-tabs"),u&&u.length),c(d,"".concat(t,"-").concat(A.value),A.value),c(d,"".concat(t,"-type-").concat(j),!!j),c(d,"".concat(t,"-rtl"),Z.value==="rtl"),d),la=k.padding===0||k.padding==="0px"?{padding:"24px"}:void 0,s=a("div",{class:"".concat(t,"-loading-block")},null),ca=a("div",{class:"".concat(t,"-loading-content"),style:la},[a(x,{gutter:8},{default:function(){return[a(p,{span:22},{default:function(){return[s]}})]}}),a(x,{gutter:8},{default:function(){return[a(p,{span:8},{default:function(){return[s]}}),a(p,{span:15},{default:function(){return[s]}})]}}),a(x,{gutter:8},{default:function(){return[a(p,{span:6},{default:function(){return[s]}}),a(p,{span:18},{default:function(){return[s]}})]}}),a(x,{gutter:8},{default:function(){return[a(p,{span:13},{default:function(){return[s]}}),a(p,{span:9},{default:function(){return[s]}})]}}),a(x,{gutter:8},{default:function(){return[a(p,{span:4},{default:function(){return[s]}}),a(p,{span:3},{default:function(){return[s]}}),a(p,{span:16},{default:function(){return[s]}})]}})]),W=G!==void 0,sa=(o={size:"large"},c(o,W?"activeKey":"defaultActiveKey",W?G:oa),c(o,"onChange",ta),c(o,"class","".concat(t,"-head-tabs")),o),F,J=u&&u.length?a(H,sa,{default:function(){return[u.map(function(e){var Q=e.tab,y=e.slots,U=y==null?void 0:y.tab;xa(!y,"Card","tabList slots is deprecated, Please use `customTab` instead.");var B=Q!==void 0?Q:r[U]?r[U](e):null;return B=ha(r,"customTab",e,function(){return[B]}),a(_a,{tab:B,key:e.key,disabled:e.disabled},null)})]},rightExtra:R?function(){return R}:null}):null;(T||S||J)&&(F=a("div",{class:"".concat(t,"-head"),style:ea},[a("div",{class:"".concat(t,"-head-wrapper")},[T&&a("div",{class:"".concat(t,"-head-title")},[T]),S&&a("div",{class:"".concat(t,"-extra")},[S])]),J]));var pa=V?a("div",{class:"".concat(t,"-cover")},[V]):null,fa=a("div",{class:"".concat(t,"-body"),style:k},[K?ca:h]),ua=z&&z.length?a("ul",{class:"".concat(t,"-actions")},[aa(z)]):null;return a("div",{class:ia,ref:"cardContainerRef"},[F,pa,h&&h.length?fa:null,ua])}}}),Ba=Ca;export{Ba as C};

import{D as f}from"./index.d9f579c6.js";import{B as _}from"./TableImg.34ccf56c.js";import"./BasicForm.c40ed25b.js";import{u as l}from"./useTable.e131a438.js";import{P as T}from"./index.e975b118.js";import{aw as g,a as h,ay as t,o as b,j as D,z as B,n as o}from"./index.c4c5b1b1.js";import{D as c}from"./index.71f388a3.js";import{refundSchema as v,refundData as S,personSchema as y,personData as C,refundTableData as w,refundTableSchema as F,refundTimeTableSchema as R,refundTimeTableData as E}from"./data.8b1acc5a.js";import"./index.7df9b8b3.js";import"./get.9d13dfca.js";import"./index.bcfd0c74.js";import"./Checkbox.1e62257e.js";import"./index.9db0ac8c.js";import"./index.dcfcb0b6.js";import"./eagerComputed.d7ba71c7.js";import"./useForm.43ddc667.js";import"./index.6f5cb6ce.js";import"./index.2ce8fd83.js";import"./index.96646871.js";import"./uuid.2b29000c.js";import"./index.d49206f8.js";import"./_baseIteratee.e417b5da.js";import"./DeleteOutlined.cd1cc243.js";import"./index.c810d829.js";import"./useRefs.489fe78a.js";import"./Form.86ced657.js";import"./Col.60adad3c.js";import"./useFlexGapSupport.b2b61870.js";import"./useSize.7f70cba8.js";import"./useWindowSizeFn.479b1b1f.js";import"./index.4fe6cb8f.js";import"./FullscreenOutlined.e19a3900.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.33c2a842.js";import"./index.fb0901df.js";import"./fromPairs.84aabb58.js";import"./scrollTo.ec4ddbd3.js";import"./index.ee7d8071.js";/* empty css              *//* empty css              */import"./index.8b516802.js";import"./transButton.31bcfc79.js";import"./index.62b901b8.js";import"./index.418fd110.js";import"./download.43a6c176.js";import"./base64Conver.08b9f4ec.js";import"./index.9cac1b9f.js";import"./index.22f3caec.js";import"./uniqBy.5709e5ee.js";import"./index.8ffd8335.js";import"./index.909cf244.js";import"./useContentViewHeight.57e3794a.js";import"./ArrowLeftOutlined.36f95522.js";import"./index.9e69a644.js";const k=h({components:{Description:f,BasicTable:_,PageWrapper:T,[c.name]:c},setup(){const[e]=l({title:"\u9000\u8D27\u5546\u54C1",dataSource:w,columns:F,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:n}),[p]=l({title:"\u9000\u8D27\u8FDB\u5EA6",columns:R,pagination:!1,dataSource:E,showIndexColumn:!1,scroll:{y:300}});function n(s){let a=0,i=0;return s.forEach(r=>{a+=r.t5,i+=r.t6}),[{t1:"\u603B\u8BA1",t5:a,t6:i}]}return{registerRefundTable:e,registerTimeTable:p,refundSchema:v,refundData:S,personSchema:y,personData:C}}});function x(e,p,n,s,a,i){const r=t("Description"),m=t("a-divider"),u=t("BasicTable"),d=t("PageWrapper");return b(),D(d,{title:"\u57FA\u7840\u8BE6\u60C5\u9875",contentBackground:""},{default:B(()=>[o(r,{size:"middle",title:"\u9000\u6B3E\u7533\u8BF7",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),o(m),o(r,{size:"middle",title:"\u7528\u6237\u4FE1\u606F",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),o(m),o(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),o(m),o(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])]),_:1})}var Pe=g(k,[["render",x],["__scopeId","data-v-33e8998f"]]);export{Pe as default};

import{B as b}from"./TableImg.34ccf56c.js";import{l as C}from"./BasicForm.c40ed25b.js";import{u as g}from"./useTable.e131a438.js";import{c as _}from"./system.de74bc3c.js";import{u as w}from"./index.d53a450a.js";import{R as D,c as B,s as T}from"./RoleDrawer.2e99f7aa.js";import{aw as R,a as k,ay as t,o as d,h as y,n as a,z as m,j as S,l as E,B as v}from"./index.c4c5b1b1.js";import"./index.bcfd0c74.js";import"./Checkbox.1e62257e.js";import"./index.9db0ac8c.js";import"./index.dcfcb0b6.js";import"./eagerComputed.d7ba71c7.js";import"./useForm.43ddc667.js";import"./index.e975b118.js";import"./index.8ffd8335.js";import"./index.909cf244.js";import"./useSize.7f70cba8.js";import"./useWindowSizeFn.479b1b1f.js";import"./useContentViewHeight.57e3794a.js";import"./ArrowLeftOutlined.36f95522.js";import"./index.9e69a644.js";import"./transButton.31bcfc79.js";import"./index.6f5cb6ce.js";import"./index.2ce8fd83.js";import"./index.96646871.js";import"./uuid.2b29000c.js";import"./index.d49206f8.js";import"./_baseIteratee.e417b5da.js";import"./get.9d13dfca.js";import"./DeleteOutlined.cd1cc243.js";import"./index.c810d829.js";import"./useRefs.489fe78a.js";import"./Form.86ced657.js";import"./Col.60adad3c.js";import"./useFlexGapSupport.b2b61870.js";import"./index.4fe6cb8f.js";import"./FullscreenOutlined.e19a3900.js";import"./index.71f388a3.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.33c2a842.js";import"./index.fb0901df.js";import"./fromPairs.84aabb58.js";import"./scrollTo.ec4ddbd3.js";import"./index.ee7d8071.js";/* empty css              *//* empty css              */import"./index.8b516802.js";import"./index.62b901b8.js";import"./index.418fd110.js";import"./download.43a6c176.js";import"./base64Conver.08b9f4ec.js";import"./index.9cac1b9f.js";import"./index.22f3caec.js";import"./uniqBy.5709e5ee.js";import"./index.fe2bc632.js";import"./index.885b8126.js";import"./useContextMenu.692c965b.js";const A=k({name:"RoleManagement",components:{BasicTable:b,RoleDrawer:D,TableAction:C},setup(){const[o,{openDrawer:r}]=w(),[p,{reload:s}]=g({title:"\u89D2\u8272\u5217\u8868",api:_,columns:B,formConfig:{labelWidth:120,schemas:T},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function l(){r(!0,{isUpdate:!1})}function c(e){r(!0,{record:e,isUpdate:!0})}function i(e){}function n(){s()}return{registerTable:p,registerDrawer:o,handleCreate:l,handleEdit:c,handleDelete:i,handleSuccess:n}}}),F=v(" \u65B0\u589E\u89D2\u8272 ");function $(o,r,p,s,l,c){const i=t("a-button"),n=t("TableAction"),e=t("BasicTable"),f=t("RoleDrawer");return d(),y("div",null,[a(e,{onRegister:o.registerTable},{toolbar:m(()=>[a(i,{type:"primary",onClick:o.handleCreate},{default:m(()=>[F]),_:1},8,["onClick"])]),bodyCell:m(({column:h,record:u})=>[h.key==="action"?(d(),S(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,u)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:o.handleDelete.bind(null,u)}}]},null,8,["actions"])):E("",!0)]),_:1},8,["onRegister"]),a(f,{onRegister:o.registerDrawer,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var Uo=R(A,[["render",$]]);export{Uo as default};

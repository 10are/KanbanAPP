"use strict";(globalThis.webpackChunkcms=globalThis.webpackChunkcms||[]).push([[8896],{55535:(V,A,t)=>{t.d(A,{B:()=>w,D:()=>L,H:()=>se,R:()=>k});var i=t(74081),M=t(10701),s=t(32370),P=t(27997),f=t(73354),p=t(74758),u=t(27875),E=t(15530),D=t(10411),v=t(76827),C=t(61020),j=t(76368),O=t(47706),I=t(70627),g=t(19003);const H=(0,g.ZP)(M.k)`
  svg path {
    fill: ${({theme:R})=>R.colors.neutral600};
  }
`;function x({name:R}){return(0,i.jsxs)(M.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,E.Q1)(300),children:[(0,i.jsx)(H,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,i.jsx)(D.Z,{width:`${8/16}rem`})}),(0,i.jsx)(s.Z,{fontWeight:"bold",children:R})]})}x.propTypes={name:I.string.isRequired};function h({type:R,item:N}){switch(R){case O.D.STAGE:return(0,i.jsx)(x,{...N});default:return null}}function L(){return(0,i.jsx)(j.D,{renderItem:h})}function k({children:R}){return(0,i.jsx)(P.A,{children:(0,i.jsx)(f.o,{tabIndex:-1,children:(0,i.jsx)(p.D,{children:R})})})}function w({href:R}){const{formatMessage:N}=(0,C.Z)();return(0,i.jsx)(E.rU,{startIcon:(0,i.jsx)(v.Z,{}),to:R,children:N({id:"global.back",defaultMessage:"Back"})})}function se({title:R,subtitle:N,navigationAction:ae,primaryAction:Q}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(E.SL,{name:R}),(0,i.jsx)(u.T,{navigationAction:ae,primaryAction:Q,title:R,subtitle:N})]})}},11745:(V,A,t)=>{t.d(A,{a:()=>P,g:()=>s});var i=t(97003),M=t(47706);function s(f){if(!f)return null;const u=Object.entries(i.W.colors).filter(([,E])=>E.toUpperCase()===f.toUpperCase()).reduce((E,[D])=>(M.S?.[D]&&(E=D),E),null);return u?{themeColorName:u,name:M.S[u]}:null}function P(){return Object.entries(M.S).map(([f,p])=>({hex:i.W.colors[f].toUpperCase(),name:p}))}},73314:(V,A,t)=>{t.d(A,{u:()=>f});var i=t(27279),M=t(15530),s=t(61020),P=t(40464);const f=(p={},u={})=>{const{id:E="",...D}=p,{get:v}=(0,M.kY)(),{locale:C}=(0,s.Z)(),j=(0,M.Xe)(C,{sensitivity:"base"}),{data:O,error:I,isError:g,isLoading:H,refetch:x}=(0,P.useQuery)(["roles",E,D],async()=>{const{data:L}=await v(`/admin/roles/${E??""}`,{params:D});return L},u);return{roles:i.useMemo(()=>{let L=[];return O&&(Array.isArray(O.data)?L=O.data:L=[O.data]),[...L].sort((k,w)=>j.compare(k.name,w.name))},[O,j]),error:I,isError:g,isLoading:H,refetch:x}}},59491:(V,A,t)=>{t.d(A,{u:()=>f});var i=t(27279),M=t(15530),s=t(53532),P=t(40464);function f(){const{get:p}=(0,M.kY)(),{formatAPIError:u}=(0,M.So)(),E=(0,M.lm)(),D=(0,P.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:g}}=await p("/content-manager/components");return g},onError(g){g instanceof s.d7&&E({type:"warning",message:u(g)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:g}}=await p("/content-manager/content-types");return g},onError(g){g instanceof s.d7&&E({type:"warning",message:u(g)})}}]),[v,C]=D,j=v.isLoading||C.isLoading,O=i.useMemo(()=>(C?.data??[]).filter(g=>g.kind==="collectionType"&&g.isDisplayed),[C?.data]),I=i.useMemo(()=>(C?.data??[]).filter(g=>g.kind!=="collectionType"&&g.isDisplayed),[C?.data]);return{isLoading:j,components:i.useMemo(()=>v?.data??[],[v?.data]),collectionTypes:O,singleTypes:I}}},88181:(V,A,t)=>{t.d(A,{u:()=>P});var i=t(27279),M=t(15530),s=t(40464);function P(f={}){const{get:p}=(0,M.kY)(),{id:u="",...E}=f,D={populate:"stages"},{data:v,isLoading:C,status:j,refetch:O}=(0,s.useQuery)(["review-workflows","workflows",u],async()=>(await p(`/admin/review-workflows/workflows/${u}`,{params:{...D,...E}})).data),I=i.useMemo(()=>u&&v?.data?[v.data]:Array.isArray(v?.data)?v.data:[],[v?.data,u]);return{meta:i.useMemo(()=>v?.meta??{},[v?.meta]),workflows:I,isLoading:C,status:j,refetch:O}}},97390:(V,A,t)=>{t.d(A,{S:()=>le,W:()=>ie,a:()=>ze,b:()=>ve,c:()=>Me,d:()=>Le,e:()=>Ue,f:()=>Ke,g:()=>$e,h:()=>me,i:()=>Ne,j:()=>Qe,k:()=>Ve,l:()=>Ae,r:()=>Be,s:()=>Xe,u:()=>We,v:()=>rt});var i=t(27279),M=t(30594),s=t(74081),P=t(93415),f=t(32370),p=t(10701),u=t(97232),E=t(4987),D=t(10989),v=t(45322),C=t(24920),j=t(34642),O=t(23298),I=t(74577),g=t(12881),H=t(63738),x=t(15530),h=t(70627),L=t(61020),k=t(59461),w=t(19003),se=t(77225),R=t(75438),N=t(33039),ae=t(78031),Q=t(69933),Y=t(81740),X=t(71563),Se=t(92241),pe=t(55377),Te=t(61815),Dt=t(8175),Ot=t(98934),Ce=t(43433),wt=t(74919),Rt=t(92249),St=t(87830),Tt=t(3243),Ct=t(29206),d=t(47706),ne=t(11745),U=t(57150),Ie=t(6078),W=t(47853);function We(e,n){const r=(0,M.V)();(0,i.useEffect)(()=>{r.injectReducer(e,n)},[r,e,n])}function xe(e){return{type:d.j,payload:{id:e}}}function Ae({workflow:e}){return{type:d.A,payload:e}}function Le({workflows:e}){return{type:d.c,payload:e}}function ke(e){return{type:d.k,payload:{stageId:e}}}function me(e={}){return{type:d.d,payload:e}}function oe(e,n){return{type:d.l,payload:{stageId:e,...n}}}function je(e){return{type:d.m,payload:e}}function be(e,n){return{type:d.n,payload:{newIndex:n,oldIndex:e}}}function fe(e){return{type:d.i,payload:e}}function Be(){return{type:d.e}}function Ue(e){return{type:d.f,payload:e}}function Ke(e){return{type:d.g,payload:e}}function $e(e){return{type:d.h,payload:e}}const re=(0,w.ZP)(se.Z)`
  > circle {
    fill: ${({theme:e})=>e.colors.neutral150};
  }
  > path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,Ze=(0,w.ZP)(P.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:e})=>e.spaces[6]};
    width: ${({theme:e})=>e.spaces[6]};

    > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary600} !important;
    ${f.Z} {
      color: ${({theme:e})=>e.colors.primary600} !important;
    }

    ${re} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }

  &:active {
    ${f.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    ${re} {
      > circle {
        fill: ${({theme:e})=>e.colors.primary600};
      }
      > path {
        fill: ${({theme:e})=>e.colors.neutral100};
      }
    }
  }
`;function Ee({children:e,...n}){return(0,s.jsx)(Ze,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...n,children:(0,s.jsxs)(p.k,{gap:2,children:[(0,s.jsx)(re,{"aria-hidden":!0}),(0,s.jsx)(f.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500",children:e})]})})}Ee.propTypes={children:h.node.isRequired};const G={serverState:{contentTypes:{collectionTypes:[],singleTypes:[]},roles:[],workflow:null,workflows:[]},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[],permissions:void 0}},isLoading:!0}};function Ne(e=G,n){return(0,Te.Uy)(e,r=>{const{payload:_}=n;switch(n.type){case d.f:{r.serverState.contentTypes=_;break}case d.h:{r.clientState.isLoading=_;break}case d.g:{r.serverState.roles=_;break}case d.A:{const l=_;l&&(r.serverState.workflow=l,r.clientState.currentWorkflow.data={...l,stages:l.stages.map(c=>({...c,color:c?.color??d.b}))});break}case d.c:{r.serverState.workflows=_;break}case d.e:{r.clientState=G.clientState,r.serverState=G.serverState;break}case d.k:{const{stageId:l}=_,{currentWorkflow:c}=e.clientState;r.clientState.currentWorkflow.data.stages=c.data.stages.filter(m=>(m?.id??m.__temp_key__)!==l);break}case d.d:{const{currentWorkflow:l}=e.clientState;l.data||(r.clientState.currentWorkflow.data={stages:[]});const c=he(r.clientState.currentWorkflow.data.stages);r.clientState.currentWorkflow.data.stages.push({..._,color:_?.color??d.b,__temp_key__:c});break}case d.j:{const{currentWorkflow:l}=e.clientState,{id:c}=_,m=l.data.stages.findIndex(S=>(S?.id??S?.__temp_key__)===c),y=l.data.stages[m];r.clientState.currentWorkflow.data.stages.splice(m+1,0,{...y,id:void 0,__temp_key__:he(r.clientState.currentWorkflow.data.stages)});break}case d.l:{const{currentWorkflow:l}=e.clientState,{stageId:c,...m}=_;r.clientState.currentWorkflow.data.stages=l.data.stages.map(y=>(y.id??y.__temp_key__)===c?{...y,...m}:y);break}case d.m:{const{currentWorkflow:l}=e.clientState;r.clientState.currentWorkflow.data.stages=l.data.stages.map(c=>({...c,..._}));break}case d.n:{const{currentWorkflow:{data:{stages:l}}}=e.clientState,{newIndex:c,oldIndex:m}=_;if(c>=0&&c<l.length){const y=l[m];let S=[...l];S.splice(m,1),S.splice(c,0,y),r.clientState.currentWorkflow.data.stages=S}break}case d.i:{r.clientState.currentWorkflow.data={...r.clientState.currentWorkflow.data,..._};break}}})}const he=(e=[])=>{const n=e.map(r=>r.id??r.__temp_key__);return Math.max(...n,-1)+1},K=e=>e[d.R]??G,He=(0,U.P1)(K,({serverState:{contentTypes:e}})=>e),Me=(0,U.P1)(K,({serverState:{roles:e}})=>e),ve=(0,U.P1)(K,({clientState:{currentWorkflow:e}})=>e.data),Fe=(0,U.P1)(K,({serverState:{workflows:e}})=>e),ze=(0,U.P1)(K,({serverState:e,clientState:{currentWorkflow:n}})=>!Ie(e.workflow,n.data)),Ve=(0,U.P1)(K,({serverState:e,clientState:{currentWorkflow:n}})=>!(e.workflow?.stages??[]).every(r=>!!n.data.stages.find(({id:_})=>_===r.id))),Xe=(0,U.P1)(K,({clientState:{isLoading:e}})=>e),Qe=(0,U.P1)(K,({serverState:e})=>e),Ye=(0,w.ZP)(u.ML)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`,Ge=(0,w.ZP)(p.k)`
  > * {
    flex-grow: 1;
  }
`,Je=(0,w.ZP)(Q.sN)`
  color: ${({theme:e})=>e.colors.danger600};
`,qe=(0,w.ZP)(Y.xz)`
  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }

  > span {
    font-size: 0;
  }
`,et=(0,w.ZP)(E.h)`
  align-items: center;
  border-radius: ${({theme:e})=>e.borderRadius};
  display: flex;
  justify-content: center;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }

  svg {
    height: auto;
    width: ${({theme:e})=>e.spaces[3]}};
  }
`,tt=(0,ne.a)();function st(){return(0,s.jsx)(P.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"})}function Pe({id:e,index:n,canDelete:r,canReorder:_,canUpdate:l,isOpen:c=!1,stagesCount:m}){const y=o=>`${o+1} of ${m}`,S=o=>{F(a({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:Z.value,position:y(o)}))},de=o=>{F(a({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:Z.value,position:y(o)}))},ce=()=>{F(a({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:Z.value}))},J=(o,T)=>{F(a({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:Z.value,position:y(o)})),B(be(T,o))},_e=()=>{ge(!0)},[q,F]=i.useState(null),{formatMessage:a}=(0,L.Z)(),{trackUsage:b}=(0,x.rS)(),B=(0,k.I0)(),$=(0,x.lm)(),[ue,lt]=i.useState(c),[it,ge]=i.useState(!1),[Z,ye,dt]=(0,X.U$)(`stages.${n}.name`),[ee,De,ct]=(0,X.U$)(`stages.${n}.color`),[z,Oe,_t]=(0,X.U$)(`stages.${n}.permissions`),ut=(0,k.v9)(Me),[{handlerId:gt,isDragging:pt,handleKeyDown:mt},ft,Et,ht,we]=(0,pe.u)(_,{index:n,item:{name:Z.value},onGrabItem:S,onDropItem:de,onMoveItem:J,onCancel:ce,type:d.D.STAGE}),Mt=(0,pe.c)(ft,Et),vt=tt.map(({hex:o,name:T})=>({value:o,label:a({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:T}),color:o})),{themeColorName:Pt}=(0,ne.g)(ee.value)??{},Re=ut.filter(o=>o.code!=="strapi-super-admin");return i.useEffect(()=>{we((0,Se.rX)(),{captureDraggingState:!1})},[we,n]),(0,s.jsxs)(P.x,{ref:Mt,children:[q&&(0,s.jsx)(D.T,{"aria-live":"assertive",children:q}),pt?(0,s.jsx)(st,{}):(0,s.jsxs)(v.U,{size:"S",variant:"primary",onToggle:()=>{lt(!ue),ue||b("willEditStage")},expanded:ue,shadow:"tableShadow",error:ye.error??De?.error??Oe?.error??!1,hasErrorMessage:!1,children:[(0,s.jsx)(C.B,{title:Z.value,togglePosition:"left",action:(r||l)&&(0,s.jsxs)(p.k,{children:[(0,s.jsxs)(Y.fC,{children:[(0,s.jsxs)(qe,{size:"S",endIcon:null,paddingLeft:2,paddingRight:2,children:[(0,s.jsx)(R.Z,{"aria-hidden":!0,focusable:!1}),(0,s.jsx)(D.T,{as:"span",children:a({id:"[tbdb].components.DynamicZone.more-actions",defaultMessage:"More actions"})})]}),(0,s.jsx)(Y.VY,{popoverPlacement:"bottom-end",zIndex:2,children:(0,s.jsxs)(Y.rl,{children:[l&&(0,s.jsx)(Q.sN,{onClick:()=>B(xe(e)),children:a({id:"Settings.review-workflows.stage.delete",defaultMessage:"Duplicate stage"})}),r&&(0,s.jsx)(Je,{onClick:()=>B(ke(e)),children:a({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete"})})]})})]}),l&&(0,s.jsx)(et,{background:"transparent",forwardedAs:"div",hasRadius:!0,role:"button",noBorder:!0,tabIndex:0,"data-handler-id":gt,ref:ht,label:a({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:o=>o.stopPropagation(),onKeyDown:mt,children:(0,s.jsx)(N.Z,{})})]})}),(0,s.jsx)(j.v,{padding:6,background:"neutral0",hasRadius:!0,children:(0,s.jsxs)(O.r,{gap:4,children:[(0,s.jsx)(I.P,{col:6,children:(0,s.jsx)(g.o,{...Z,id:Z.name,disabled:!l,label:a({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:ye.error??!1,onChange:o=>{dt.setValue(o.target.value),B(oe(e,{name:o.target.value}))},required:!0})}),(0,s.jsx)(I.P,{col:6,children:(0,s.jsx)(H.q4,{disabled:!l,error:De?.error??!1,id:ee.name,required:!0,label:a({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:o=>{ct.setValue(o),B(oe(e,{color:o}))},value:ee.value.toUpperCase(),startIcon:(0,s.jsx)(p.k,{as:"span",height:2,background:ee.value,borderColor:Pt==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:vt.map(({value:o,label:T,color:te})=>{const{themeColorName:yt}=(0,ne.g)(te);return(0,s.jsx)(H.ag,{value:o,startIcon:(0,s.jsx)(p.k,{as:"span",height:2,background:te,borderColor:yt==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:T},o)})})}),(0,s.jsx)(I.P,{col:6,children:Re.length===0?(0,s.jsx)(x.X0,{description:{id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"},intlLabel:{id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"},name:z.name}):(0,s.jsxs)(p.k,{alignItems:"flex-end",gap:3,children:[(0,s.jsx)(Ge,{grow:1,children:(0,s.jsx)(u.NU,{...z,disabled:!l,error:Oe.error??!1,id:z.name,label:a({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"}),onChange:o=>{const T=o.map(te=>({role:parseInt(te,10),action:"admin::review-workflows.stage.transition"}));_t.setValue(T),B(oe(e,{permissions:T}))},placeholder:a({id:"Settings.review-workflows.stage.permissions.placeholder",defaultMessage:"Select a role"}),required:!0,value:(z.value??[]).map(o=>`${o.role}`),withTags:!0,children:[{label:a({id:"Settings.review-workflows.stage.permissions.allRoles.label",defaultMessage:"All roles"}),children:Re.map(o=>({value:`${o.id}`,label:o.name}))}].map(o=>"children"in o?(0,s.jsx)(u.Ab,{label:o.label,values:o.children.map(T=>T.value),children:o.children.map(T=>(0,s.jsx)(Ye,{value:T.value,children:T.label},T.value))},o.label):(0,s.jsx)(u.ML,{value:o.value,children:o.label},o.value))})}),(0,s.jsx)(E.h,{disabled:!l,icon:(0,s.jsx)(ae.Z,{}),label:a({id:"Settings.review-workflows.stage.permissions.apply.label",defaultMessage:"Apply to all stages"}),size:"L",variant:"secondary",onClick:()=>_e(z.value)})]})})]})})]}),(0,s.jsx)(x.QH.Root,{iconRightButton:null,isOpen:it,onToggleDialog:()=>ge(!1),onConfirm:()=>{B(je({permissions:z.value})),ge(!1),$({type:"success",message:a({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy.success",defaultMessage:"Applied roles to all other stages of the workflow"})})},variantRightButton:"primary",children:(0,s.jsx)(x.QH.Body,{children:(0,s.jsx)(f.Z,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy",defaultMessage:"Roles that can change that stage will be applied to all the other stages."})})})})]})}Pe.propTypes=h.shape({id:h.number.isRequired,color:h.string.isRequired,canDelete:h.bool.isRequired,canReorder:h.bool.isRequired,canUpdate:h.bool.isRequired,stagesCount:h.number.isRequired}).isRequired;const at=(0,w.ZP)(P.x)`
  transform: translateX(-50%);
`;function le({canDelete:e,canUpdate:n,stages:r}){const{formatMessage:_}=(0,L.Z)(),l=(0,k.I0)(),{trackUsage:c}=(0,x.rS)();return(0,s.jsxs)(p.k,{direction:"column",gap:6,width:"100%",children:[(0,s.jsxs)(P.x,{position:"relative",spacing:4,width:"100%",children:[(0,s.jsx)(at,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),(0,s.jsx)(p.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol",children:r.map((m,y)=>{const S=m?.id??m.__temp_key__;return(0,s.jsx)(P.x,{as:"li",children:(0,s.jsx)(Pe,{id:S,index:y,isOpen:!m.id,canDelete:r.length>1&&e,canReorder:r.length>1,canUpdate:n,stagesCount:r.length})},`stage-${S}`)})})]}),n&&(0,s.jsx)(Ee,{type:"button",onClick:()=>{l(me({name:""})),c("willCreateStage")},children:_({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})})]})}le.defaultProps={canDelete:!0,canUpdate:!0,stages:[]},le.propTypes={canDelete:h.bool,canUpdate:h.bool,stages:h.arrayOf(h.shape({id:h.number,__temp_key__:h.number,name:h.string.isRequired}))};const nt=(0,w.ZP)(u.ML)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`,ot=(0,w.ZP)(f.Z)`
  font-style: italic;
`;function ie({canUpdate:e}){const{formatMessage:n,locale:r}=(0,L.Z)(),_=(0,k.I0)(),{collectionTypes:l,singleTypes:c}=(0,k.v9)(He),m=(0,k.v9)(ve),y=(0,k.v9)(Fe),[S,de,ce]=(0,X.U$)("name"),[J,_e,q]=(0,X.U$)("contentTypes"),F=(0,x.Xe)(r,{sensitivity:"base"});return(0,s.jsxs)(O.r,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow",children:[(0,s.jsx)(I.P,{col:6,children:(0,s.jsx)(g.o,{...S,id:S.name,disabled:!e,label:n({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:de.error??!1,onChange:a=>{_(fe({name:a.target.value})),ce.setValue(a.target.value)},required:!0})}),(0,s.jsx)(I.P,{col:6,children:(0,s.jsx)(u.NU,{...J,customizeContent:a=>n({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:a.length}),disabled:!e,error:_e.error??!1,id:J.name,label:n({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:a=>{_(fe({contentTypes:a})),q.setValue(a)},placeholder:n({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"}),children:[...l.length>0?[{label:n({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:[...l].sort((a,b)=>F.compare(a.info.displayName,b.info.displayName)).map(a=>({label:a.info.displayName,value:a.uid}))}]:[],...c.length>0?[{label:n({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:[...c].map(a=>({label:a.info.displayName,value:a.uid}))}]:[]].map(a=>"children"in a?(0,s.jsx)(u.Ab,{label:a.label,values:a.children.map(b=>b.value.toString()),children:a.children.map(b=>{const{name:B}=y.find($=>(m&&$.id!==m.id||!m)&&$.contentTypes.includes(b.value))??{};return(0,s.jsx)(nt,{value:b.value,children:n({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:b.label,name:B,em:(...$)=>(0,s.jsx)(f.Z,{as:"em",fontWeight:"bold",children:$}),i:(...$)=>(0,s.jsx)(ot,{children:$})})},b.value)})},a.label):(0,s.jsx)(u.ML,{value:a.value,children:a.label},a.value))})})]})}ie.defaultProps={canUpdate:!0},ie.propTypes={canUpdate:h.bool};async function rt({values:e,formatMessage:n}){const r=W.Ry({contentTypes:W.IX().of(W.Z_()),name:W.Z_().max(255,n({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:W.IX().of(W.Ry().shape({name:W.Z_().required(n({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,n({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",n({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(_){const{options:{context:l}}=this;return l.stages.filter(c=>c.name===_).length===1}),color:W.Z_().required(n({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i),permissions:W.IX(W.Ry({role:W.Rx().strict().typeError(n({id:"Settings.review-workflows.validation.stage.permissions.role.number",defaultMessage:"Role must be of type number"})).required,action:W.Z_().required({id:"Settings.review-workflows.validation.stage.permissions.action.required",defaultMessage:"Action is a required argument"})})).strict()})).min(1)});try{return await r.validate(e,{abortEarly:!1,context:e}),!0}catch(_){let l={};return _ instanceof W.p8&&_.inner.forEach(c=>{Ce(l,c.path,c.message)}),l}}}}]);

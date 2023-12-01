"use strict";(globalThis.webpackChunkcms=globalThis.webpackChunkcms||[]).push([[5797],{45797:(ps,u,e)=>{e.r(u),e.d(u,{default:()=>ss});var s=e(74081),T=e(27279),b=e(5938),F=e(6918),$=e(15244),N=e(23298),M=e(74577),H=e(39708),z=e(35250),x=e(48102),J=e(70774),Q=e(38101),c=e(93153),r=e(50086),f=e(10989),P=e(32370),X=e(86967),y=e(50703),v=e(4987),G=e(51926),C=e(73354),L=e(27875),R=e(74758),a=e(15530),O=e(61020),j=e(40464),i=e(63068),gs=e(10124),V=e(89486),U=e(82298),Y=e(71563),l=e(70627),E=e(47853),q=e(84352),I=e(26784),w=e(59082);const k=E.Ry().shape({options:E.Ry().shape({from:E.Ry().shape({name:E.Z_().required(a.I0.required),email:E.Z_().email(a.I0.email).required(a.I0.required)}).required(),response_email:E.Z_().email(a.I0.email),object:E.Z_().required(a.I0.required),message:E.Z_().required(a.I0.required)}).required(a.I0.required)}),A=({template:t,onToggle:m,onSubmit:n})=>{const{formatMessage:d}=(0,O.Z)();return(0,s.jsxs)(b.P,{onClose:m,labelledBy:`${d({id:(0,i.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${d({id:(0,i.g)(t.display),defaultMessage:t.display})}`,children:[(0,s.jsx)(F.x,{children:(0,s.jsxs)(V.O,{label:`${d({id:(0,i.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${d({id:(0,i.g)(t.display),defaultMessage:t.display})}`,children:[(0,s.jsx)(U.$,{children:d({id:(0,i.g)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}),(0,s.jsx)(U.$,{isCurrent:!0,children:d({id:(0,i.g)(t.display),defaultMessage:t.display})})]})}),(0,s.jsx)(Y.J9,{onSubmit:n,initialValues:t,validateOnChange:!1,validationSchema:k,enableReinitialize:!0,children:({errors:_,values:p,handleChange:g,isSubmitting:h})=>(0,s.jsxs)(a.l0,{children:[(0,s.jsx)($.f,{children:(0,s.jsxs)(N.r,{gap:5,children:[(0,s.jsx)(M.P,{col:6,s:12,children:(0,s.jsx)(a.jm,{intlLabel:{id:(0,i.g)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:g,value:p.options.from.name,error:_?.options?.from?.name,type:"text"})}),(0,s.jsx)(M.P,{col:6,s:12,children:(0,s.jsx)(a.jm,{intlLabel:{id:(0,i.g)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:g,value:p.options.from.email,error:_?.options?.from?.email,type:"text"})}),(0,s.jsx)(M.P,{col:6,s:12,children:(0,s.jsx)(a.jm,{intlLabel:{id:(0,i.g)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:g,value:p.options.response_email,error:_?.options?.response_email,type:"text"})}),(0,s.jsx)(M.P,{col:6,s:12,children:(0,s.jsx)(a.jm,{intlLabel:{id:(0,i.g)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:g,value:p.options.object,error:_?.options?.object,type:"text"})}),(0,s.jsx)(M.P,{col:12,s:12,children:(0,s.jsx)(H.g,{label:d({id:(0,i.g)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:g,value:p.options.message,error:_?.options?.message&&d({id:_.options.message,defaultMessage:_.options.message})})})]})}),(0,s.jsx)(z.m,{startActions:(0,s.jsx)(x.z,{onClick:m,variant:"tertiary",children:"Cancel"}),endActions:(0,s.jsx)(x.z,{loading:h,type:"submit",children:"Finish"})})]})})]})};A.propTypes={template:l.shape({display:l.string,icon:l.string,options:l.shape({from:l.shape({name:l.string,email:l.string}),message:l.string,object:l.string,response_email:l.string})}).isRequired,onSubmit:l.func.isRequired,onToggle:l.func.isRequired};const B=({canUpdate:t,onEditClick:m})=>{const{formatMessage:n}=(0,O.Z)();return(0,s.jsxs)(J.i,{colCount:3,rowCount:3,children:[(0,s.jsx)(Q.h,{children:(0,s.jsxs)(c.Tr,{children:[(0,s.jsx)(r.Th,{width:"1%",children:(0,s.jsx)(f.T,{children:n({id:(0,i.g)("Email.template.table.icon.label"),defaultMessage:"icon"})})}),(0,s.jsx)(r.Th,{children:(0,s.jsx)(P.Z,{variant:"sigma",textColor:"neutral600",children:n({id:(0,i.g)("Email.template.table.name.label"),defaultMessage:"name"})})}),(0,s.jsx)(r.Th,{width:"1%",children:(0,s.jsx)(f.T,{children:n({id:(0,i.g)("Email.template.table.action.label"),defaultMessage:"action"})})})]})}),(0,s.jsxs)(X.p,{children:[(0,s.jsxs)(c.Tr,{...(0,a.X7)({fn:()=>m("reset_password")}),children:[(0,s.jsx)(r.Td,{children:(0,s.jsx)(y.J,{children:(0,s.jsx)(q.Z,{"aria-label":n({id:"global.reset-password",defaultMessage:"Reset password"})})})}),(0,s.jsx)(r.Td,{children:(0,s.jsx)(P.Z,{children:n({id:"global.reset-password",defaultMessage:"Reset password"})})}),(0,s.jsx)(r.Td,{...a.UW,children:(0,s.jsx)(v.h,{onClick:()=>m("reset_password"),label:n({id:(0,i.g)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:t&&(0,s.jsx)(I.Z,{})})})]}),(0,s.jsxs)(c.Tr,{...(0,a.X7)({fn:()=>m("email_confirmation")}),children:[(0,s.jsx)(r.Td,{children:(0,s.jsx)(y.J,{children:(0,s.jsx)(w.Z,{"aria-label":n({id:(0,i.g)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})})}),(0,s.jsx)(r.Td,{children:(0,s.jsx)(P.Z,{children:n({id:(0,i.g)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})})}),(0,s.jsx)(r.Td,{...a.UW,children:(0,s.jsx)(v.h,{onClick:()=>m("email_confirmation"),label:n({id:(0,i.g)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:t&&(0,s.jsx)(I.Z,{})})})]})]})]})};B.propTypes={canUpdate:l.bool.isRequired,onEditClick:l.func.isRequired};const ss=()=>(0,s.jsx)(a.O4,{permissions:i.P.readEmailTemplates,children:(0,s.jsx)(es,{})}),es=()=>{const{formatMessage:t}=(0,O.Z)(),{trackUsage:m}=(0,a.rS)(),{notifyStatus:n}=(0,G.G)(),d=(0,a.lm)(),{lockApp:_,unlockApp:p}=(0,a.o1)(),g=(0,j.useQueryClient)(),{get:h,put:as}=(0,a.kY)(),{formatAPIError:W}=(0,a.So)();(0,a.go)();const[is,ts]=T.useState(!1),[K,ls]=T.useState(null),{isLoading:ns,allowedActions:{canUpdate:os}}=(0,a.ss)({update:i.P.updateEmailTemplates}),{isLoading:ds,data:S}=(0,j.useQuery)(["users-permissions","email-templates"],async()=>{const{data:o}=await h("/users-permissions/email-templates");return o},{onSuccess(){n(t({id:(0,i.g)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(o){d({type:"warning",message:W(o)})}}),ms=ns||ds,D=()=>{ts(o=>!o)},rs=o=>{ls(o),D()},Z=(0,j.useMutation)(o=>as("/users-permissions/email-templates",{"email-templates":o}),{async onSuccess(){await g.invalidateQueries(["users-permissions","email-templates"]),d({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),m("didEditEmailTemplates"),p(),D()},onError(o){d({type:"warning",message:W(o)}),p()},refetchActive:!0}),_s=o=>{_(),m("willEditEmailTemplates");const Es={...S,[K]:o};Z.mutate(Es)};return ms?(0,s.jsxs)(C.o,{"aria-busy":"true",children:[(0,s.jsx)(a.SL,{name:t({id:(0,i.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(L.T,{title:t({id:(0,i.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(R.D,{children:(0,s.jsx)(a.dO,{})})]}):(0,s.jsxs)(C.o,{"aria-busy":Z.isLoading,children:[(0,s.jsx)(a.SL,{name:t({id:(0,i.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsx)(L.T,{title:t({id:(0,i.g)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),(0,s.jsxs)(R.D,{children:[(0,s.jsx)(B,{onEditClick:rs,canUpdate:os}),is&&(0,s.jsx)(A,{template:S[K],onToggle:D,onSubmit:_s})]})]})}}}]);

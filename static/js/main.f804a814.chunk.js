(this.webpackJsonpnodeapp=this.webpackJsonpnodeapp||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n(0),i=n.n(a),s=n(10),o=n.n(s),r=(n(70),n(71),n(26)),l=n(110),d=n(111),j=n(42),u=n(117),b=n(116),O=n(58),x=n.n(O),p=n(37),h=n(32),f=n(115),m=n(105),g=n(109),v=n(57),N=n.n(v),C=function(e,t){switch(t.type){case"input":return Object(h.a)(Object(h.a)({},e),{},Object(p.a)({},t.inputName,t.inputValue));case"save":return Object(h.a)(Object(h.a)({},e),{},{title:"",description:""})}return e},S={title:"",description:""},y=function(e){var t=Object(a.useReducer)(C,S),n=Object(r.a)(t,2),s=n[0],o=n[1],l=function(e){o({type:"input",inputName:e.target.name,inputValue:e.target.value})},d=function(){e.onClose()},j=function(){return null!=sessionStorage.getItem("notes")?JSON.parse(sessionStorage.getItem("notes")):[]},b=function(e){e.push({title:s.title,description:s.description,addedOn:Date.now()}),sessionStorage.setItem("notes",JSON.stringify(e))},O=s.title,x=s.description;return Object(c.jsx)(i.a.Fragment,{children:Object(c.jsx)("form",{noValidate:!0,autoComplete:"off",children:Object(c.jsxs)(m.a,{children:[Object(c.jsx)(m.a,{item:!0,xs:12,children:Object(c.jsx)(g.a,{fullWidth:!0,children:Object(c.jsx)(f.a,{id:"txtNoteTitle",name:"title",value:O,label:"Title",variant:"filled",onChange:l})})}),Object(c.jsx)("br",{}),Object(c.jsx)(m.a,{item:!0,xs:12,children:Object(c.jsx)(g.a,{fullWidth:!0,children:Object(c.jsx)(f.a,{id:"txtNoteDescription",name:"description",value:x,label:"Discription",variant:"filled",multiline:!0,rows:3,onChange:l})})}),Object(c.jsx)("br",{}),Object(c.jsx)(m.a,{item:!0,xs:12,children:Object(c.jsx)(g.a,{children:Object(c.jsx)(u.a,{variant:"contained",color:"secondary",startIcon:Object(c.jsx)(N.a,{}),onClick:function(){var e=j();b(e),o({type:"save"}),d()},children:"Save"})})})]})})})},I=Object(a.createContext)(),w=function(e){var t=Object(a.useState)([]),n=Object(r.a)(t,2),i=n[0],s=n[1],o=function(){return null!=sessionStorage.getItem("notes")?JSON.parse(sessionStorage.getItem("notes")):[]};return Object(a.useEffect)((function(){s(o())}),[]),Object(c.jsx)(I.Provider,{value:{notes:i,setNotes:s,updateNotes:function(){s(o())}},children:e.children})},F=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),s=n[0],o=n[1],O=Object(a.useContext)(I).updateNotes,p=function(){O(),o(!1)};return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)(l.a,{position:"static",color:"primary",children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(j.a,{variant:"h6",children:"Notes"}),Object(c.jsx)(u.a,{"aria-label":"delete",style:{color:"#fff"},onClick:function(){o(!0)},children:Object(c.jsx)(x.a,{})})]})}),Object(c.jsx)(b.a,{open:s||!1,onClose:p,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",className:"modal",children:Object(c.jsx)("div",{className:"node-add-modal",children:Object(c.jsx)(y,{onClose:p})})})]})},k=n(112),D=n(113),J=n(114),T=function(e){return Object(c.jsxs)(k.a,{xs:4,className:"card",children:[Object(c.jsx)("span",{className:"close",onClick:e.deleteNote}),Object(c.jsx)(D.a,{title:e.data.title,subheader:new Date(e.data.addedOn).toLocaleString()}),Object(c.jsx)(J.a,{children:Object(c.jsx)(j.a,{variant:"body2",color:"textSecondary",component:"p",children:e.data.description})})]},e.data.addedOn)},L=function(){var e=Object(a.useContext)(I).notes;return Object(c.jsx)(m.a,{container:!0,direction:"row",className:"card-container",children:e.map((function(e){return Object(c.jsx)(T,{data:e},e.addedOn)}))})},P=function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)(w,{children:[Object(c.jsx)(F,{}),Object(c.jsx)(L,{})]})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,119)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(P,{})}),document.getElementById("root")),V()}},[[76,1,2]]]);
//# sourceMappingURL=main.f804a814.chunk.js.map
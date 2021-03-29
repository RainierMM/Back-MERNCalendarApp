(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{115:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(7),c=n.n(r),o=n(8),s=n(23),i=n(66),l=n(5),u="[ui] Open Modal",j="[ui] Close Modal",d="[event] Set Active",b="[event] Clean events",m="[event] Add New",O="[event] Clear Active Event",f="[event] Event Updated",p="[event] Event Deleted",v="[event] Events Loaded",h="[auth] Finish check login",x="[auth] Login",g="[auth] Logout",y={checking:!0},N=n(57),w={events:[],activeEvent:null},k={modalOpen:!1},E=Object(s.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!0});case j:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:t.payload});case m:return Object(l.a)(Object(l.a)({},e),{},{events:[].concat(Object(N.a)(e.events),[t.payload])});case O:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:null});case f:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case p:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case v:return Object(l.a)(Object(l.a)({},e),{},{events:Object(N.a)(t.payload)});case b:return Object(l.a)({},w);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(l.a)(Object(l.a)({},e),{},{checking:!1},t.payload);case h:return Object(l.a)(Object(l.a)({},e),{},{checking:!1});case g:return{checking:!1};default:return e}}}),S="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,C=Object(s.e)(E,S(Object(s.a)(i.a))),D=n(36),T=n(9),P=n(12),A=n.n(P),I=n(22),_=n(19),L=n.n(_),R="https://mern-calendar-rai.herokuapp.com/api",G=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(R,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},M=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(R,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},F=n(18),V=n.n(F),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{end:V()(e.end).toDate(),start:V()(e.start).toDate()})}))},J=function(e){return{type:m,payload:e}},U=function(){return{type:O}},B=function(e){return{type:f,payload:e}},X=function(){return{type:p}},q=function(e){return{type:v,payload:e}},z=function(){return{type:h}},K=function(e){return{type:x,payload:e}},Q=function(){return function(e){localStorage.clear(),e({type:b}),e(W())}},W=function(){return{type:g}},Y=n(15),Z=n(27),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(Y.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(l.a)(Object(l.a)({},r),{},Object(Z.a)({},t.name,t.value)))};return[r,s,o]},ee=(n(79),n(2)),te=function(){var e=Object(o.b)(),t=$({loginEmail:"rai@gmail.com",loginPassword:"123456"}),n=Object(Y.a)(t,2),a=n[0],r=n[1],c=$({registerName:"Test1",registerEmail:"test1@gmail.com",registerPassword1:"123456",registerPassword2:"123456"}),s=Object(Y.a)(c,2),i=s[0],l=s[1],u=a.loginEmail,j=a.loginPassword,d=i.registerEmail,b=i.registerName,m=i.registerPassword1,O=i.registerPassword2;return Object(ee.jsx)("div",{className:"container login-container",children:Object(ee.jsxs)("div",{className:"row",children:[Object(ee.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(ee.jsx)("h3",{children:"Ingreso"}),Object(ee.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=u,a=j,function(){var e=Object(I.a)(A.a.mark((function e(t){var r,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:c.uid,name:c.name}))):L.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"loginEmail",value:u,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"loginPassword",value:j,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(ee.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(ee.jsx)("h3",{children:"Registro"}),Object(ee.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),m!==O)return L.a.fire("Error","Las contrase\xf1as deben ser iguales","error");var n,a,r;e((n=d,a=m,r=b,function(){var e=Object(I.a)(A.a.mark((function e(t){var c,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:o.uid,name:o.name}))):L.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"registerName",value:b,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"registerEmail",value:d,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"registerPassword1",value:m,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"registerPassword2",value:O,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},ne=n(56),ae=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(ee.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(ee.jsx)("span",{className:"navbar-brand",children:t}),Object(ee.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(Q())},children:[Object(ee.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(ee.jsx)("span",{children:" Salir"})]})]})},re={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},ce=function(e){var t=e.event,n=t.title,a=t.user;return Object(ee.jsxs)("div",{children:[Object(ee.jsx)("strong",{children:n}),Object(ee.jsx)("div",{children:a.name})]})},oe=n(51),se=n.n(oe),ie=n(52),le=n.n(ie),ue=function(){return{type:u}},je={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};se.a.setAppElement("#root");var de=V()().add(1,"hours"),be=de.clone().add(1,"hours"),me={title:"",notes:"",start:de.toDate(),end:be.toDate()},Oe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})).activeEvent,n=Object(o.c)((function(e){return e.ui})).modalOpen,r=Object(a.useState)(de.toDate()),c=Object(Y.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)(be.toDate()),d=Object(Y.a)(u,2),b=d[0],m=d[1],O=Object(a.useState)(!0),f=Object(Y.a)(O,2),p=f[0],v=f[1],h=Object(a.useState)(me),x=Object(Y.a)(h,2),g=x[0],y=x[1],N=g.notes,w=g.title,k=g.start,E=g.end;Object(a.useEffect)((function(){y(t||me)}),[t,y]);var S=function(e){var t=e.target;y(Object(l.a)(Object(l.a)({},g),{},Object(Z.a)({},t.name,t.value)))},C=function(){e({type:j}),e(U()),y(me)};return Object(ee.jsxs)(se.a,{isOpen:n,onRequestClose:C,style:je,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(ee.jsx)("h1",{children:t?"Editar evento":"Nuevo evento"}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("form",{className:"container",onSubmit:function(n){n.preventDefault();var a,r=V()(k),c=V()(E);return r.isSameOrAfter(c)?L.a.fire("Error","La fecha fin debe ser mayor a la fecha de inicio","error"):w.trim().length<2?v(!1):(e(t?(a=g,function(){var e=Object(I.a)(A.a.mark((function e(t){var n,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(B(a)):L.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(I.a)(A.a.mark((function t(n,a){var r,c,o,s,i;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,M("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento.id,e.user={_id:c,name:o},n(J(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(g)),v(!0),void C())},children:[Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora inicio"}),Object(ee.jsx)(le.a,{onChange:function(e){i(e),y(Object(l.a)(Object(l.a)({},g),{},{start:e}))},value:s,className:"form-control"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora fin"}),Object(ee.jsx)(le.a,{onChange:function(e){m(e),y(Object(l.a)(Object(l.a)({},g),{},{end:e}))},value:b,minDate:s,className:"form-control"})]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Titulo y notas"}),Object(ee.jsx)("input",{type:"text",className:"form-control ".concat(!p&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:w,onChange:S}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:N,onChange:S}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(ee.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(ee.jsx)("i",{className:"far fa-save"}),Object(ee.jsx)("span",{children:" Guardar"})]})]})]})},fe=function(){var e=Object(o.b)();return Object(ee.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(ue())},children:Object(ee.jsx)("i",{className:"fas fa-plus"})})},pe=(n(109),n(110),function(){var e=Object(o.b)();return Object(ee.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(I.a)(A.a.mark((function e(t,n){var a,r,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,M("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(X()):L.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ee.jsx)("i",{className:"fas fa-trash"}),Object(ee.jsx)("span",{children:" Borrar evento "})]})});V.a.locale("es");var ve=Object(ne.b)(V.a),he=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(Y.a)(s,2),l=i[0],u=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(I.a)(A.a.mark((function e(t){var n,a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=H(a.eventos),t(q(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(ee.jsxs)("div",{className:"calendar-screen",children:[Object(ee.jsx)(ae,{}),Object(ee.jsx)(ne.a,{localizer:ve,events:n,startAccessor:"start",endAccessor:"end",messages:re,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(){e(ue())},onSelectEvent:function(t){e({type:d,payload:t})},onView:function(e){u(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(U())},selectable:!0,view:l,components:{event:ce}}),Object(ee.jsx)(fe,{}),r&&Object(ee.jsx)(pe,{}),Object(ee.jsx)(Oe,{})]})},xe=n(39),ge=function(e){var t=e.isAuthenticated,n=e.component,a=Object(xe.a)(e,["isAuthenticated","component"]);return Object(ee.jsx)(T.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(n,Object(l.a)({},e)):Object(ee.jsx)(T.a,{to:"/login"})}}))},ye=function(e){var t=e.isAuthenticated,n=e.component,a=Object(xe.a)(e,["isAuthenticated","component"]);return Object(ee.jsx)(T.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(T.a,{to:"/"}):Object(ee.jsx)(n,Object(l.a)({},e))}}))},Ne=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(I.a)(A.a.mark((function e(t){var n,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(K({uid:a.uid,name:a.name}))):t(z());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(ee.jsx)("h5",{children:"Espere..."}):Object(ee.jsx)(D.a,{children:Object(ee.jsx)("div",{children:Object(ee.jsxs)(T.d,{children:[Object(ee.jsx)(ye,{exact:!0,path:"/login",component:te,isAuthenticated:!!r}),Object(ee.jsx)(ge,{exact:!0,path:"/",component:he,isAuthenticated:!!r}),Object(ee.jsx)(T.a,{to:"/"})]})})})},we=function(){return Object(ee.jsx)(o.a,{store:C,children:Object(ee.jsx)(Ne,{})})};n(115);c.a.render(Object(ee.jsx)(we,{}),document.getElementById("root"))},79:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.09c4a74e.chunk.js.map
(this.webpackJsonppostsapp=this.webpackJsonppostsapp||[]).push([[0],{63:function(e,t,a){},84:function(e,t,a){e.exports=a(98)},89:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=(a(89),a(10)),i=a.n(l),s=a(19),u=a(14),m=(a(63),a(134)),p=a(70),d=a(11),f=a(29),h=a(33),b=a(136),g=a(145),E=a(143),v=a(137),x=a(51),j=a.n(x),O=a(100),y=a(132),w=a(18),k=Object(y.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://cdn.filestackcontent.com/G33P8iuoRuinYep5O6dt)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},multilineColor:{color:"white"},floatingLabelFocusStyle:{color:"white"}}})),S=function(e){var t=e.setAuth,a=k(),o=Object(n.useState)({email:"",password:""}),c=Object(u.a)(o,2),l=c[0],p=c[1],d=l.email,x=l.password,y=function(e){p(Object(h.a)(Object(h.a)({},l),{},Object(f.a)({},e.target.name,e.target.value)))},S=function(){var e=Object(s.a)(i.a.mark((function e(a){var n,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n={email:d,password:x},e.next=5,fetch("/api/jwtAuth/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:(o=e.sent).token?(localStorage.setItem("token",o.token),t(!0),w.a.success("loged in")):(t(!1),w.a.error(o)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(m.a,{container:!0,component:"main",className:a.root},r.a.createElement(m.a,{item:!0,xs:!1,sm:4,md:7,className:a.image}),r.a.createElement(m.a,{item:!0,xs:12,sm:8,md:5,elevation:6,square:!0},r.a.createElement("div",{className:a.paper},r.a.createElement(g.a,{className:a.avatar},r.a.createElement(j.a,null)),r.a.createElement(O.a,{component:"h1",variant:"h5",color:"primary"},"Sign in"),r.a.createElement("form",{className:a.form,onSubmit:S},r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",InputProps:{className:a.multilineColor},InputLabelProps:{className:a.floatingLabelFocusStyle},defaultValue:d,onChange:function(e){return y(e)},autoFocus:!0}),r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",InputProps:{className:a.multilineColor},InputLabelProps:{className:a.floatingLabelFocusStyle},defaultValue:x,onChange:function(e){return y(e)},autoComplete:"current-password"}),r.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign In"),r.a.createElement(m.a,{container:!0},r.a.createElement(m.a,{item:!0},r.a.createElement(v.a,{href:"/register",variant:"body2"},"Don't have an account? Sign Up")))))))},C=a(138),N=Object(y.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",color:"blue"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},multilineColor:{color:"white"},floatingLabelFocusStyle:{color:"white"}}})),P=function(e){var t=e.setAuth,a=N(),o=Object(n.useState)({name:"",email:"",password:""}),c=Object(u.a)(o,2),l=c[0],p=c[1],d=l.name,x=l.email,y=l.password,k=function(e){p(Object(h.a)(Object(h.a)({},l),{},Object(f.a)({},e.target.name,e.target.value)))},S=function(){var e=Object(s.a)(i.a.mark((function e(a){var n,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,n={name:d,email:x,password:y},e.next=5,fetch("/api/jwtAuth/register",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 5:return r=e.sent,e.next=8,r.json();case 8:(o=e.sent).token?(localStorage.setItem("token",o.token),t(!0),w.a.success("Registered")):(t(!1),w.a.error(o)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(C.a,{component:"main",maxWidth:"xs"},r.a.createElement("div",{className:a.paper},r.a.createElement(g.a,{className:a.avatar},r.a.createElement(j.a,null)),r.a.createElement(O.a,{component:"h1",variant:"h5",color:"primary"},"Sign up"),r.a.createElement("form",{className:a.form,onSubmit:S},r.a.createElement(m.a,{container:!0,spacing:2},r.a.createElement(m.a,{item:!0,xs:12,sm:12},r.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",InputProps:{className:a.multilineColor},InputLabelProps:{className:a.floatingLabelFocusStyle},defaultValue:d,onChange:function(e){return k(e)},autoComplete:"name"})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",InputProps:{className:a.multilineColor},InputLabelProps:{className:a.floatingLabelFocusStyle},defaultValue:x,onChange:function(e){return k(e)},autoComplete:"email"})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(E.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",InputProps:{className:a.multilineColor},InputLabelProps:{className:a.floatingLabelFocusStyle},defaultValue:y,onChange:function(e){return k(e)},autoComplete:"current-password"}))),r.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Sign Up"),r.a.createElement(m.a,{container:!0,justify:"flex-end"},r.a.createElement(m.a,{item:!0},r.a.createElement(v.a,{href:"/login",variant:"body2"},"Already have an account? Sign in"))))))},T=a(139),_=Object(y.a)((function(e){return{sendBtn:{position:"absolute",bottom:"20px",right:"10px",margin:e.spacing(1)},writePost:{position:"relative",paddingTop:"20px",paddingBottom:"20px"}}})),I=function(e){var t=e.addHandler,a=e.id,o=Object(n.useState)(""),c=Object(u.a)(o,2),l=c[0],i=c[1],s=_(),p=(new Date).toLocaleString();return r.a.createElement(m.a,{className:s.writePost},r.a.createElement(E.a,{id:"outlined-multiline-static",multiline:!0,variant:"outlined",rows:8,value:l,xs:8,fullWidth:!0,onChange:function(e){return i(e.currentTarget.value)}}),r.a.createElement(b.a,{className:s.sendBtn,variant:"contained",size:"medium",color:"primary",onClick:function(e){e.preventDefault(),t({txt_content:l},p,a)},endIcon:r.a.createElement(T.a,null,"send")},"Send"))},L=a(144),A=a(140),D=a(68),W=a.n(D),B=Object(y.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},deleteButton:{position:"relative"},updateButton:{position:"relative"},container:{position:"relative"}}})),F=function(e){var t=e.updateHandler,a=e.deleteHandler,o=e.arr,c=Object(n.useState)(""),l=Object(u.a)(c,2),i=l[0],s=l[1],p=B(),d=Object(n.useState)(""),f=Object(u.a)(d,2),h=(f[0],f[1],o.slice(0).reverse().map((function(e){return r.a.createElement(m.a,{className:p.container,key:e.post_id},r.a.createElement(L.a,{borderTop:1,borderColor:"primary.main"},r.a.createElement(m.a,null,r.a.createElement("h4",null,"Posted at "+e.post_date.slice(0,e.post_date.length-5).replace(/T/," "))),r.a.createElement(E.a,{id:"id".concat(e.post_id),multiline:!0,variant:"outlined",rows:8,defaultValue:e.txt_content,xs:8,fullWidth:!0,onChange:function(e){return s(e.currentTarget.value)}}),r.a.createElement(A.a,{className:p.deleteButton,"aria-label":"delete",color:"secondary",onClick:function(t){t.preventDefault(),a(e.post_id)}},r.a.createElement(W.a,null)),r.a.createElement(b.a,{className:p.updateButton,variant:"outlined",color:"primary",onClick:function(a){a.preventDefault(),t(e.post_id,{txt_content:i})}},"Edit")))})));return r.a.createElement(m.a,null,r.a.createElement(m.a,null,h))},G=a(141),q=a(142),H=a(71),J=a(147),V=a(69),z=a.n(V),R=Object(y.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},cicon:{}}})),U=function(e){var t=e.setAuth,a=R(),n=r.a.useState(!0),o=Object(u.a)(n,1)[0],c=r.a.useState(null),l=Object(u.a)(c,2),i=l[0],s=l[1],p=Boolean(i);return r.a.createElement("div",{className:a.root},r.a.createElement(G.a,{position:"static"},r.a.createElement(q.a,null,r.a.createElement(O.a,null,"POSTS"),r.a.createElement(m.a,{item:!0,xs:12}),o&&r.a.createElement(m.a,null,r.a.createElement(A.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit"},r.a.createElement(z.a,null)),r.a.createElement(H.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:function(){s(null)}},r.a.createElement(J.a,{onClick:function(e){return function(e){e.preventDefault(),localStorage.removeItem("token"),t(!1),w.a.info("logged out")}(e)}},"Logout"))))))},M=function(e){var t=e.setAuth,a=Object(n.useState)([]),o=Object(u.a)(a,2),c=o[0],l=o[1],p=Object(n.useState)(""),d=Object(u.a)(p,2),f=d[0],h=d[1],b=Object(n.useState)(""),g=Object(u.a)(b,2),E=g[0],v=g[1],x=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/dashboard",{method:"GET",headers:{token:localStorage.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,h(a.user_name),v(a.user_id),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){x()}));var j=function(){var e=Object(s.a)(i.a.mark((function e(t,a,n){var r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.txt_content,e.prev=1,""!==r){e.next=4;break}return e.abrupt("return");case 4:return o={txt_content:r,post_date:a,user_id:n},e.next=7,fetch("/api/posts/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 7:k(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/posts/".concat(t),{method:"GET"});case 3:return a=e.sent,e.next=6,a.json();case 6:if(e.sent[0].user_id===E){e.next=10;break}return w.a.error("cannot delete someone's post"),e.abrupt("return");case 10:return e.next=12,fetch("/api/posts/".concat(t),{method:"DELETE"});case 12:l(c.filter((function(e){return e.post_id!==t}))),w.a.info("deleted"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(i.a.mark((function e(t,a){var n,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.txt_content,e.prev=1,e.next=4,fetch("/api/posts/".concat(t),{method:"GET"});case 4:return r=e.sent,e.next=7,r.json();case 7:if(e.sent[0].user_id===E){e.next=11;break}return w.a.error("cannot edit someone's post"),e.abrupt("return");case 11:if(""!==n){e.next=13;break}return e.abrupt("return");case 13:return o={txt_content:n},e.next=16,fetch("/api/posts/".concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});case 16:w.a.info("updated"),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),console.log(e.t0.message);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t,a){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/posts/");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,l(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){k()}),[]),r.a.createElement(m.a,{container:!0,direction:"column"},r.a.createElement(m.a,{item:!0},r.a.createElement(U,{setAuth:t})),r.a.createElement(m.a,{item:!0,container:!0},r.a.createElement(m.a,{item:!0,xs:1}),r.a.createElement("h2",null,"Welcome: ",f)),r.a.createElement(m.a,{item:!0,container:!0},r.a.createElement(m.a,{item:!0,xs:2}),r.a.createElement(m.a,{item:!0,xs:8},r.a.createElement(I,{addHandler:j,id:E}),r.a.createElement(F,{deleteHandler:O,updateHandler:y,arr:c})),r.a.createElement(m.a,{item:!0,xs:2})))};a(95);w.a.configure();var Y=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],o=t[1],c=function(e){o(e)},l=function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/jwtAuth/is-verify",{method:"GET",headers:{token:localStorage.token}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,o(!0===a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()})),r.a.createElement(p.a,null,r.a.createElement(m.a,{container:!0},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(d.a,{to:"/dashboard"})}}),r.a.createElement(d.b,{exact:!0,path:"/dashboard",render:function(e){return a?r.a.createElement(M,Object.assign({},e,{setAuth:c})):r.a.createElement(d.a,{to:"/login"})}}),r.a.createElement(d.b,{exact:!0,path:"/login",render:function(e){return a?r.a.createElement(d.a,{to:"/dashboard"}):r.a.createElement(S,Object.assign({},e,{setAuth:c}))}}),r.a.createElement(d.b,{exact:!0,path:"/register",render:function(e){return a?r.a.createElement(d.a,{to:"/dashboard"}):r.a.createElement(P,Object.assign({},e,{setAuth:c}))}}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.e5ba7bc6.chunk.js.map
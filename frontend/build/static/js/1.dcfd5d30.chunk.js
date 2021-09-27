(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[1],{68:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"k",(function(){return r})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return h})),n.d(t,"e",(function(){return _})),n.d(t,"i",(function(){return I})),n.d(t,"h",(function(){return Y})),n.d(t,"f",(function(){return A})),n.d(t,"g",(function(){return B})),n.d(t,"j",(function(){return U})),n.d(t,"l",(function(){return V})),n.d(t,"c",(function(){return G}));var i={PrimaryDark:"#40798c",PrimaryLight:"#eceff1",Disabled:"#d7d7d7",Error:"#fa573f",White:"#ffffff",Black:"#000000"},r={tiny:4,small:8,base:12,large:16,xlarge:20,xxlarge:24,xxxlarge:28},a=n(61),o=n(60),c=n(0),l=n.n(c),s=n(1);var d=function(e){var t=e.size;return{principale:{width:t+4,height:t+4,display:"flex",justifyContent:"center",alignItems:"center"},image:{width:t,height:t}}},u=function(e){var t=e.name,i=e.styles,r=e.onClick,c=l.a.useState(),u=Object(o.a)(c,2),p=u[0],m=u[1];return n(89)("./"+t+".svg").then((function(e){return m(e.default)})),Object(s.jsx)("div",{style:Object(a.a)(Object(a.a)({},d(e).principale),i),onClick:r,className:"Icons",children:Object(s.jsx)("img",{src:p,style:d(e).image,alt:"icon"})})},p=r.tiny,m=r.base,g=i.PrimaryLight,b=i.PrimaryDark,j=i.White;var f=function(e,t){var n=e.type,i=e.mode,a=e.size;return{principale:{backgroundColor:t?"light"===i||i?b:"transparent":"contained"!==n&&n?"transparent":"light"===i||i?g:b,border:"1px solid "+(t?"light"===i?b:g:"light"===i?g:b),display:"flex",justifyContent:"center",alignItems:"center",borderRadius:p,padding:r[a||"base"]-2+"px",cursor:"default"},text:{color:t?"outlined"===n||n||"light"===i?j:b:"contained"!==n&&n?"light"===i?j:b:j,fontSize:m,whiteSpace:"nowrap"}}},h=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),i=n[0],r=n[1],l=e.children,d=e.onClick,u=e.style,p=e.className,m=e.disabled;return Object(s.jsx)(s.Fragment,{children:m?Object(s.jsx)("div",{children:"loading ..."}):Object(s.jsx)("div",{style:Object(a.a)(Object(a.a)({},f(e,i).principale),u),onClick:d,onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},className:p,children:Object(s.jsx)("div",{style:f(e,i).text,children:l})})})},v=r.tiny,y=r.base,x=i.PrimaryDark,O=i.White,k=i.Error;var S=function(e){var t=e.icon,n=e.name,i=e.type,a=e.mode,o=e.error,c=e.size;return{principale:{margin:"0px "+v+"px",flex:1},label:{fontSize:y,margin:0,marginBottom:y,color:"dark"===a?O:x},blockInput:{fontSize:y,position:"relative"},input:{border:(null===o||void 0===o?void 0:o.indexOf(n))>=0?"1px solid "+k:"none",borderRadius:v,width:"100%",padding:r[c||"base"]-2+"px",paddingLeft:t?8*v:y,paddingRight:"password"===i?8*v:"number"===i?v:""},iconRight:{position:"absolute",right:r.small-2,top:"50%",transform:"translateY(-50%)"},iconLeft:{position:"absolute",left:r.small-2,top:"50%",transform:"translateY(-50%)"}}},_=function(e){var t=e.icon,n=e.label,i=e.type,r=e.placeholder,l=e.onChange,d=e.value,p=e.name,m=e.setError,g=e.inputStyle,b=e.principalStyle,j=Object(c.useState)(""),f=Object(o.a)(j,2),h=f[0],y=f[1];Object(c.useEffect)((function(){y(i)}),[i]);var x=function(e){m&&m([]),l(e)};return Object(s.jsxs)("div",{style:Object(a.a)(Object(a.a)({},S(e).principale),b),className:"Input",children:[n&&Object(s.jsx)("p",{style:S(e).label,children:n}),Object(s.jsxs)("div",{style:S(e).blockInput,children:[t&&Object(s.jsx)(u,{name:t,size:4*v,styles:S(e).iconLeft}),Object(s.jsx)("input",{type:h,style:Object(a.a)(Object(a.a)({},S(e).input),g),placeholder:r||"",onChange:function(e){return x(e)},value:d,name:p}),"password"===i&&Object(s.jsx)(u,{name:"password"===h?"eye_closed":"eye",size:4*v,onClick:function(){y(h?"password"===h?"text":"password":"text")},styles:S(e).iconRight})]})]})};var C=r.tiny,w=r.base,N=i.White,E=i.Error,L=i.PrimaryDark;var D=function(e){var t=e.icon,n=e.mode,i=e.error,a=e.name,o=e.size;return{principale:{margin:"0px "+C+"px",flex:1},label:{fontSize:w,margin:0,marginBottom:w,color:"dark"===n?N:L},blockInput:{fontSize:w,position:"relative"},select:{border:(null===i||void 0===i?void 0:i.indexOf(a))>=0?"1px solid "+E:"none",borderRadius:C,width:"100%",backgroundColor:N,padding:r[o||"tiny"]+"px",paddingLeft:t?8*C:""},iconLeft:{position:"absolute",left:r.small-2,top:"50%",transform:"translateY(-50%)"}}},I=function(e){var t=e.icon,n=e.label,i=e.datas,r=e.onChange,a=e.value,o=e.name,c=e.setError,l=e.className;return Object(s.jsxs)("div",{style:D(e).principale,className:l,children:[n&&Object(s.jsx)("p",{style:D(e).label,children:n}),Object(s.jsxs)("div",{style:D(e).blockInput,children:[t&&Object(s.jsx)(u,{name:t,size:4*C,styles:D(e).iconLeft}),Object(s.jsx)("select",{name:o,value:a,style:D(e).select,onChange:function(e){c&&c([]),r(e)},children:null===i||void 0===i?void 0:i.map((function(e,t){var n=e.value,i=e.title;return Object(s.jsx)("option",{value:n,key:t,children:i})}))})]})]})};r.tiny,r.base,i.PrimaryDark,i.White;r.tiny;var z=n(78),T=n(90),M=n(85),P=n.n(M);n(87);var R=function(){return{principal:{width:200,margin:r.tiny+"px",backgroundColor:"white",display:"flex",flexDirection:"column"},containerImage:{position:"relative"},eye:{position:"absolute",top:8,left:8,padding:4,borderRadius:4,backgroundColor:"white",width:28,height:28,display:"flex",justifyContent:"center",alignItems:"center"},image:{width:"100%",height:120},body:{padding:r.small,display:"flex",flexDirection:"column",justifyContent:"space-between",flex:1},titre:{fontSize:r.xlarge-2},desc:{fontSize:r.base,opacity:.8},footer:{display:"flex"},createdAt:{fontSize:r.base-2,opacity:.7,margin:0}}},Y=function(e){var t=l.a.useState(!0),n=Object(o.a)(t,2),i=n[0],r=n[1],c=e.document,d=e.show,u=e.index,p=function(){b||e.history.push("/Details=".concat(c._id))},m=l.a.useState(!1),g=Object(o.a)(m,2),b=g[0],j=g[1],f=Object(T.useTransition)(d,{from:{opacity:0,transform:"translateY(-"+10*(u+1)+"px)"},enter:{opacity:1,transform:"translateY(0px)"},leave:{opacity:0,transform:"translateY(-"+10*(u+1)+"px)"},reverse:d,delay:200});return Object(s.jsx)(s.Fragment,{children:f((function(t,n){return n&&Object(s.jsxs)(T.animated.div,{className:"OneDocument shadowHover",onClick:p,style:Object(a.a)(Object(a.a)({},R(e).principal),t),children:[Object(s.jsxs)("div",{style:R(e).containerImage,children:[Object(s.jsx)(A,Object(a.a)(Object(a.a)({style:R(e).eye,className:"shadowHover",onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)}},Object(a.a)({hide:i,setHide:r},e)),{},{idDocument:null===c||void 0===c?void 0:c._id,children:Object(s.jsx)("i",{className:i?"fa fa-unlock-alt":"fa fa-eye"})})),Object(s.jsx)("img",{src:e.image||z.a,alt:"image_document",style:R(e).image})]}),Object(s.jsxs)("div",{style:R(e).body,children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{style:R(e).titre,children:c.titre.toUpperCase()}),Object(s.jsx)("p",{style:R(e).desc,children:(o=c.description,o.length>30?o.substring(0,30)+"...":o)})]}),Object(s.jsx)("div",{style:R(e).footer,children:Object(s.jsxs)("p",{style:R(e).createdAt,children:[Object(s.jsx)("i",{className:"fa fa-clock-o"})," ","il y a"," ",Object(s.jsx)(P.a,{fromNow:!0,ago:!0,locale:"fr",children:(null===c||void 0===c?void 0:c.updatedAt)||new Date})]})})]})]});var o}))})};var A=function(e){var t=e.onMouseEnter,n=e.onMouseLeave,i=e.className,r=e.style,a=e.children,o=e.hide,c=e.setHide,l=e.idDocument;return Object(s.jsx)("div",{className:i,style:r,onMouseEnter:t,onMouseLeave:n,onClick:function(){o&&c?c(!1):e.history.push("/LireDocument="+l),console.log("clickIcon")},children:a})},W=n(62);var H=function(){return{principale:{alignItems:"center",backgroundColor:i.PrimaryDark+"40",width:300,padding:r.xlarge},button:{margin:r.tiny,marginTop:r.xlarge},motdepass:{marginTop:r.xlarge,fontSize:r.base,color:i.PrimaryLight,cursor:"pointer",marginLeft:r.small},toggleSign:{marginTop:r.xlarge,fontSize:r.base,color:i.PrimaryLight,textAlign:"center",cursor:"pointer"}}},B=function(e){var t=e.setError,n=e.onSubmitLogin,i=e.error,l=e.className,d=e.setIsLogin,u=e.isLogin,p=Object(c.useState)({client_email:"",client_mdp:""}),m=Object(o.a)(p,2),g=m[0],b=m[1],j=function(e){b(Object.assign({},g,Object(W.a)({},e.target.name,e.target.value)))},f=function(e){e.preventDefault(),n(g)};return Object(s.jsxs)("form",{onSubmit:f,style:H(e).principale,className:l||"Login",children:[Object(s.jsxs)("div",{style:H(e).inputs,className:"Inputs",children:[Object(s.jsx)(_,{icon:"user",placeholder:"Votre email",name:"client_email",value:g.client_email,onChange:j,error:i,setError:t,label:"Email d'utilisateur",principalStyle:{marginTop:r.large},type:"email"}),Object(s.jsx)(_,{icon:"key",type:"password",placeholder:"Mot de passe",error:i,name:"client_mdp",value:g.client_pdp,onChange:j,setError:t,label:"Mot de passe",principalStyle:{marginTop:r.large}})]}),Object(s.jsx)("div",{style:Object(a.a)({},H(e).motdepass),onClick:function(){console.log("mot de pass oublier")},children:"Mot de pass oublier?"}),Object(s.jsx)(h,{style:Object(a.a)({},H(e).button),onClick:f,children:"Se connecter"}),Object(s.jsx)("div",{style:Object(a.a)({},H(e).toggleSign),onClick:function(){d(!u)},children:"Creer un compte?"})]})};var F=function(){return{principale:{alignItems:"center",backgroundColor:i.PrimaryDark+"40",width:300,padding:r.xlarge},inputs:{},button:{margin:r.tiny,marginTop:r.xlarge},toggleSign:{marginTop:r.xlarge,fontSize:r.base,color:i.PrimaryLight,textAlign:"center",cursor:"pointer"}}},U=function(e){var t=e.setError,n=e.onSubmitSignin,i=e.error,l=e.className,d=e.setIsLogin,u=e.isLogin,p=Object(c.useState)({client_nom:"",client_mdp:"",client_email:"",client_mdp_conf:""}),m=Object(o.a)(p,2),g=m[0],b=m[1],j=function(e){t([]),b(Object.assign({},g,Object(W.a)({},e.target.name,e.target.value)))},f=function(e){e.preventDefault(),g.client_mdp===g.client_mdp_conf&&g.client_mdp?n(g):(console.log(["client_mdp_conf","client_mdp"]),t(["client_mdp_conf","client_mdp"]))};return Object(s.jsxs)("form",{onSubmit:f,style:F(e).principale,className:l||"Login",children:[Object(s.jsxs)("div",{style:F(e).inputs,className:"Inputs",children:[Object(s.jsx)(_,{icon:"user",placeholder:"Nom d'utilisateur",name:"client_nom",value:g.client_nom,onChange:j,error:i,setError:t,label:"Nom d'utilisateur",principalStyle:{marginTop:r.large}}),Object(s.jsx)(_,{icon:"email",placeholder:"Example@example.com",name:"client_email",value:g.client_email,onChange:j,error:i,setError:t,label:"Email",principalStyle:{marginTop:r.large}}),Object(s.jsx)(_,{icon:"key",type:"password",placeholder:"Mot de passe",error:i,name:"client_mdp",value:g.client_pdp,onChange:j,setError:t,label:"Mot de passe",principalStyle:{marginTop:r.large}}),Object(s.jsx)(_,{icon:"key",type:"password",placeholder:"Confirmation",error:i,name:"client_mdp_conf",value:g.client_mdp_conf,onChange:j,setError:t,label:"Confirmation",principalStyle:{marginTop:r.large}})]}),Object(s.jsx)(h,{style:Object(a.a)({},F(e).button),onClick:f,children:"Creer compte"}),Object(s.jsx)("div",{style:Object(a.a)({},F(e).toggleSign),onClick:function(){d(!u)},children:"Se connecter?"})]})};n(96);var J=function(){return{principal:{margin:r.large},title:{cursor:"pointer",fontSize:r.xlarge},body:{display:"flex"}}},V=function(e){var t,n=l.a.useState(!1),i=Object(o.a)(n,2),r=i[0],c=i[1],d=l.a.useState(!0),u=Object(o.a)(d,2),p=u[0],m=u[1],g=l.a.useState(!1),b=Object(o.a)(g,2),j=b[0],f=b[1];return l.a.useEffect((function(){setTimeout((function(){c(j)}),500)}),[j]),Object(s.jsxs)("div",{className:"TypeDocument",style:J(e).principal,children:[Object(s.jsxs)("h1",{style:J(e).title,onClick:function(){f(!j),m(!1)},children:[" ",Object(s.jsx)("i",{className:r?"fa fa-angle-right rotates fa-rotate-90":p?"fa fa-angle-right":"fa fa-angle-right rotates-inverse"})," Malagasy"]}),r&&Object(s.jsx)("div",{style:J(e).body,children:null===e||void 0===e||null===(t=e.documents)||void 0===t?void 0:t.map((function(t,n){return Object(s.jsx)(Y,Object(a.a)(Object(a.a)({},Object(a.a)(Object(a.a)({document:t,key:n},e),{},{show:j})),{},{index:n}))}))})]})};var q=function(){return{principale:{alignItems:"center",backgroundColor:i.PrimaryDark+"40",width:300,padding:r.xlarge},button:{margin:r.tiny,marginTop:r.xlarge}}},G=function(e){var t=e.setError,n=e.error,i=e.className,l=e.onSubmitConfirmation,d=e.datas,u=Object(c.useState)({code:""}),p=Object(o.a)(u,2),m=p[0],g=p[1],b=function(e){e.preventDefault(),l(m)};return Object(s.jsxs)("form",{onSubmit:b,style:q(e).principale,className:i||"Login",children:[Object(s.jsx)("div",{style:q(e).inputs,className:"Inputs",children:Object(s.jsx)(_,{label:"Inserer ici le code dans votre email: "+(null===d||void 0===d?void 0:d.email),error:n,name:"code",value:m.code,onChange:function(e){t([]),g(Object.assign({},m,Object(W.a)({},e.target.name,e.target.value)))},setError:t,placeholder:"Code",principalStyle:{marginTop:r.large}})}),Object(s.jsx)(h,{style:Object(a.a)({},q(e).button),onClick:b,children:"Verifier le code"})]})}},78:function(e,t,n){"use strict";t.a=n.p+"static/media/reliure_metallique.b7c454c6.jpg"},89:function(e,t,n){var i={"./age.svg":[102,11],"./attachment.svg":[103,12],"./city-solid.svg":[104,13],"./down.svg":[105,14],"./drink.svg":[106,15],"./drink_smoke.svg":[107,16],"./edit.svg":[108,17],"./email.svg":[109,18],"./eye-slash.svg":[110,19],"./eye.svg":[111,20],"./eye_closed.svg":[112,21],"./eye_opened.svg":[113,22],"./gender.svg":[114,23],"./hair_woman.svg":[115,24],"./heart.svg":[116,25],"./heart_contained.svg":[117,26],"./human_back.svg":[118,27],"./icon_search.svg":[119,28],"./key.svg":[120,29],"./location.svg":[121,30],"./mail.svg":[122,31],"./message.svg":[123,32],"./milt-user.svg":[124,33],"./region.svg":[125,34],"./search.svg":[126,35],"./short-male-hair-shape.svg":[127,36],"./smille.svg":[128,37],"./smoke.svg":[129,38],"./star.svg":[130,39],"./star_contained.svg":[131,40],"./up.svg":[132,41],"./user.svg":[133,42]};function r(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(i)},r.id=89,e.exports=r},96:function(e,t,n){}}]);
//# sourceMappingURL=1.dcfd5d30.chunk.js.map
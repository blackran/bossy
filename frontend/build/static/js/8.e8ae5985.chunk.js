(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[8],{138:function(e,i,c){"use strict";c.r(i);var t=c(60),a=c(61),s=c(0),o=c.n(s),n=c(64),l=(c(99),c(78)),r=c(68),d=c(14),j=c.n(d),h=c(85),b=c.n(h),x=(c(87),c(1));function v(e){var i=e.corections;return(null===i||void 0===i?void 0:i.length)<=0?[]:Object(x.jsxs)("div",{className:"Correction",children:[Object(x.jsx)("h1",{children:"Correction: "}),Object(x.jsx)("div",{className:"listeCorrection",children:null===i||void 0===i?void 0:i.map((function(i,c){return Object(x.jsxs)(r.f,Object(a.a)(Object(a.a)({className:"oneBlock"},Object(a.a)({},e)),{},{hide:!0,idDocument:null===i||void 0===i?void 0:i._id,children:[Object(x.jsxs)("div",{className:"head",children:[Object(x.jsxs)("span",{children:["Corection ",c,": "]}),Object(x.jsx)("h1",{children:i.titre})]}),Object(x.jsx)("div",{className:"description",children:i.description}),Object(x.jsx)("div",{className:"footer",children:Object(x.jsxs)("p",{children:[Object(x.jsx)("i",{className:"fa fa-clock-o"})," ","Derni\xe8re modification il y a"," ",(null===i||void 0===i?void 0:i.createdAt)&&Object(x.jsx)(b.a,{fromNow:!0,ago:!0,locale:"fr",children:(null===i||void 0===i?void 0:i.updatedAt)||new Date})]})})]}))}))})]})}var u=function(){return{body:{padding:r.k.small,display:"flex",flexDirection:"column",justifyContent:"space-between",flex:1},titre:{fontSize:r.k.xlarge-2},desc:{fontSize:r.k.base,opacity:.8},header:{display:"flex",justifyContent:"space-between",padding:12,alignItems:"center"},createdAt:{fontSize:r.k.base,opacity:.7,margin:0}}};i.default=function(e){var i,c,s=o.a.useState(),d=Object(t.a)(s,2),h=d[0],f=d[1];o.a.useEffect((function(){var i,c,t,a=null===e||void 0===e||null===(i=e.history)||void 0===i||null===(c=i.location)||void 0===c||null===(t=c.pathname)||void 0===t?void 0:t.split("=")[1];j.a.get("/api/document/".concat(a)).then((function(e){var i=e.data;"success"===i.status&&(console.log(i.data),f(i.data))})).catch((function(e){console.log({error:e})}))}),[e.history.location.pathname]);var O=o.a.useState(!0),m=Object(t.a)(O,2),p=m[0],A=m[1];return Object(x.jsxs)("div",{className:"Details",children:[Object(x.jsx)(n.a,Object(a.a)({},Object(a.a)({},e))),Object(x.jsxs)("div",{className:"body",children:[Object(x.jsxs)("div",{className:"image",children:[Object(x.jsx)(r.f,Object(a.a)(Object(a.a)({className:"eye shadowHover"},Object(a.a)({hide:p,setHide:A},e)),{},{idDocument:null===h||void 0===h?void 0:h._id,children:Object(x.jsx)("i",{className:p?"fa fa-unlock-alt fa-2x":"fa fa-eye fa-2x"})})),Object(x.jsx)("img",{src:(null===h||void 0===h?void 0:h.image)||l.a,alt:""})]}),Object(x.jsxs)("div",{style:u(e).header,children:[Object(x.jsxs)("p",{style:u(e).createdAt,children:[Object(x.jsx)("i",{className:"fa fa-clock-o"})," ","Derni\xe8re modification il y a"," ",(null===h||void 0===h?void 0:h.createdAt)&&Object(x.jsx)(b.a,{fromNow:!0,ago:!0,locale:"fr",children:(null===h||void 0===h?void 0:h.updatedAt)||new Date})]}),Object(x.jsxs)("p",{children:["Niveau ",null===h||void 0===h||null===(i=h.niveau)||void 0===i?void 0:i.niveau]})]}),Object(x.jsxs)("div",{style:u(e).body,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{style:u(e).titre,children:null===h||void 0===h||null===(c=h.titre)||void 0===c?void 0:c.toUpperCase()}),Object(x.jsx)("p",{style:u(e).desc,children:null===h||void 0===h?void 0:h.description})]}),Object(x.jsx)("div",{children:Object(x.jsx)(v,Object(a.a)({corections:null===h||void 0===h?void 0:h.corection},e))})]})]})]})}},63:function(e,i,c){},64:function(e,i,c){"use strict";var t=c(60),a=c(0),s=c.n(a),o=(c(63),c(15)),n=c(1);i.a=function(e){var i=s.a.useState(""),c=Object(t.a)(i,2),a=c[0],l=c[1];return s.a.useEffect((function(){l(e.history.location.pathname)}),[e.history.location.pathname]),Object(n.jsxs)("nav",{className:"Navigation",children:[Object(n.jsx)(o.b,{to:"/Lecons",children:Object(n.jsx)("h1",{children:"Le\xe7ons&&exo"})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)(o.b,{to:"/Lecons",className:""===a||"/Lecons"===a?"active":"",children:Object(n.jsx)("li",{children:"Le\xe7ons"})}),Object(n.jsx)(o.b,{to:"/Exercices",className:"/Exercices"===a?"active":"",children:Object(n.jsx)("li",{children:"Exercices"})}),Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("li",{children:Object(n.jsx)("i",{className:"fa fa-facebook"})})}),Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("li",{children:Object(n.jsx)("i",{className:"fa fa-twitter"})})}),Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("li",{children:Object(n.jsx)("i",{className:"fa fa-skype"})})}),Object(n.jsx)("span",{className:"image",children:Object(n.jsx)("img",{src:"data:image/png;base64,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",alt:"image_utilisateur"})}),Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("li",{onClick:function(){sessionStorage.removeItem("token"),window.location.reload(!1)},children:"Deconnexion"})})]})]})}},99:function(e,i,c){}}]);
//# sourceMappingURL=8.e8ae5985.chunk.js.map
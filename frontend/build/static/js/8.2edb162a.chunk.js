(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[8],{100:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){"use strict";var a=c(11),i=c(0),n=c.n(i),s=(c(16),c(20)),r=c(1);t.a=function(e){var t=n.a.useState(""),c=Object(a.a)(t,2),i=c[0],o=c[1];return n.a.useEffect((function(){o(e.history.location.pathname)}),[e.history.location.pathname]),Object(r.jsxs)("nav",{className:"Navigation",children:[Object(r.jsx)(s.b,{to:"/Lecons",children:Object(r.jsx)("h1",{children:"Le\xe7ons&&exo"})}),Object(r.jsxs)("ul",{children:[Object(r.jsx)(s.b,{to:"/Lecons",className:""===i||"/Lecons"===i?"active":"",children:Object(r.jsx)("li",{children:"Le\xe7ons"})}),Object(r.jsx)(s.b,{to:"/Exercices",className:"/Exercices"===i?"active":"",children:Object(r.jsx)("li",{children:"Exercices"})}),Object(r.jsx)("a",{href:"/",children:Object(r.jsx)("li",{children:Object(r.jsx)("i",{className:"fa fa-facebook"})})}),Object(r.jsx)("a",{href:"/",children:Object(r.jsx)("li",{children:Object(r.jsx)("i",{className:"fa fa-twitter"})})}),Object(r.jsx)("a",{href:"/",children:Object(r.jsx)("li",{children:Object(r.jsx)("i",{className:"fa fa-skype"})})}),Object(r.jsx)("span",{className:"image",children:Object(r.jsx)("img",{src:"data:image/png;base64,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",alt:"image_utilisateur"})}),Object(r.jsx)("a",{href:"/",children:Object(r.jsx)("li",{onClick:function(){sessionStorage.removeItem("token"),setTimeout((function(){window.location.reload(!1)}),1e3)},children:"Deconnexion"})})]})]})}},99:function(e,t,c){"use strict";c.r(t);var a=c(13),i=c(26),n=c(11),s=c(0),r=c.n(s),o=(c(100),c(23)),l=c(17),j=c(15),h=c.n(j),u=c(1);t.default=function(e){var t=r.a.useState([]),c=Object(n.a)(t,2),s=c[0],j=c[1];r.a.useEffect((function(){h.a.get("api/documentMemeCategorie/lecon").then((function(e){var t=e.data;"success"===t.status&&j(t.data)})).catch((function(e){console.log({error:e})}))}),[]);var b=function(e){var t={};null===e||void 0===e||e.map((function(e){return t[e.niveau.niveau]?t[e.niveau.niveau]=[].concat(Object(i.a)(t[e.niveau.niveau]),[e]):t[e.niveau.niveau]=[e],null}));var c={};return Object.entries(t).map((function(e){var t=Object(n.a)(e,2),a=t[0],s=t[1],r={};return s.map((function(e){return r[e.type.type]?r[e.type.type]=[].concat(Object(i.a)(r[e.type.type]),[e]):r[e.type.type]=[e],c[a]=r,null})),null})),console.log({datas:e,respData:c}),c};return Object(u.jsxs)("div",{className:"Principal",children:[Object(u.jsx)(l.a,Object(a.a)({},e)),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"nav_float",children:Object(u.jsx)("ul",{children:Object.entries(b(s)).map((function(e){var t=Object(n.a)(e,2),c=t[0];t[1];return Object(u.jsx)("a",{href:"#"+c,children:Object(u.jsx)("li",{children:c})},c)}))})}),Object(u.jsx)("div",{className:"body",children:Object.entries(b(s)).map((function(t){var c=Object(n.a)(t,2),i=c[0],s=c[1];return Object(u.jsxs)("div",{className:"section",id:i,children:["Lecon pour les ",i,Object(u.jsx)(o.h,Object(a.a)({},Object(a.a)({documents:s},e)))]},i)}))})]})]})}}}]);
//# sourceMappingURL=8.2edb162a.chunk.js.map
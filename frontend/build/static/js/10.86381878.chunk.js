(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[10],{135:function(n,t,s){"use strict";s.r(t);var e=s(60),i=s(0),o=s.n(i),a=s(68),c=(s(76),s(14)),r=s.n(c),u=s(1);t.default=function(n){var t=o.a.useState(!0),s=Object(e.a)(t,2),i=s[0],c=s[1],l=o.a.useState([]),m=Object(e.a)(l,2),g=m[0],p=m[1];return Object(u.jsx)("div",{className:"Auth",children:i?Object(u.jsx)(a.g,{className:"Login",onSubmitLogin:function(t){var s=t.client_email,e=t.client_mdp;r.a.post("/api/user/login",{email:s,password:e}).then((function(t){var s=t.data;"success"===s.status&&(sessionStorage.setItem("token",s.token),n.history.push("/Lecons"),window.location.reload(!1))})).catch((function(n){console.log({error:n})}))},isLogin:i,setIsLogin:c,error:g,setError:p}):Object(u.jsx)(a.j,{className:"Singin",onSubmitSignin:function(t){console.log("onSubmitSignin()");var s=t.client_nom,e=t.client_mdp,i=t.client_email;r.a.post("/api/user/signup",{firstname:s,email:i,password:e}).then((function(t){var s=t.data;"success"===s.status&&n.history.push("/Confirmation?email=".concat(s.email))})).catch((function(n){console.log({error:n})}))},isLogin:i,setIsLogin:c,error:g,setError:p})})}},76:function(n,t,s){}}]);
//# sourceMappingURL=10.86381878.chunk.js.map
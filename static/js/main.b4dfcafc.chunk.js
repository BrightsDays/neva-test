(this["webpackJsonplogin-form"]=this["webpackJsonplogin-form"]||[]).push([[0],[,,,,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(1),c=a(4),o=a.n(c),s=a(2),l=(a(9),a(10),a(0)),i=function(t){var e=t.content,a=t.action,n=t.disabled,c=t.arrow;return Object(l.jsx)("button",{className:c?"button button--arrow":"button",onClick:a,disabled:n,children:Object(l.jsx)("span",{children:e})})},u=(a(12),function(t){var e=t.label,a=t.action,n=t.id,c=t.disabled,o=t.options.map((function(t){return Object(l.jsx)("option",{value:t.value,disabled:t.status,children:t.option},t.option)}));return Object(l.jsxs)("div",{className:"select-block",children:[Object(l.jsx)("label",{className:"select-block__label",htmlFor:n,children:e}),Object(l.jsx)("select",{className:"select-block__select",id:n,onChange:a,disabled:c,children:o})]})}),r=function(t,e){t.value=t.value.replace(/[^0-9]/g,""),+t.value.replace(/\s/g,"")<=e?(t.value=t.value.replace(/^0+/,""),t.value=t.value.replace(/(\..*)\./g,"$1")):(t.value=e,t.value=t.value.replace(/(\..*)\./g,"$1")),t.value=t.value.replace(/\B(?=(\d{3})+(?!\d))/g," ")},b=(a(13),function(t){var e=t.label,a=t.action,n=t.id,c=t.placeholder,o=t.disabled,s=t.value;return Object(l.jsxs)("div",{className:"input-block",children:[Object(l.jsx)("input",{className:"input-block__input",id:n,onChange:a,placeholder:c,disabled:o,maxLength:"2",autoComplete:"off",value:s,onInput:function(t){r(t.target,99)}}),Object(l.jsx)("label",{className:"input-block__label",htmlFor:n,children:e})]})}),j=function(t){var e=(t+-(new Date).getTimezoneOffset())/60,a=Math.floor(e),n=Math.round(60*(e-a)),c=Math.round(n);return a>23&&(a-=24),a.toString().length<2&&(a="0"+a),c.toString().length<2&&(c<19?c="0"+c:c+="0"),a+":"+c},d=function(){var t=700,e=1200,a=450,c=800,o=Object(n.useState)("order"),r=Object(s.a)(o,2),d=r[0],v=r[1],O=Object(n.useState)("\u0438\u0437 A \u0432 B"),f=Object(s.a)(O,2),p=f[0],h=f[1],x=Object(n.useState)("900"),B=Object(s.a)(x,2),m=B[0],A=B[1],g=Object(n.useState)("960"),N=Object(s.a)(g,2),S=N[0],k=N[1],_=Object(n.useState)("0"),w=Object(s.a)(_,2),D=w[0],y=w[1],C=Object(n.useState)("0"),E=Object(s.a)(C,2),M=E[0],F=E[1],I=Object(n.useState)(""),J=Object(s.a)(I,2),T=J[0],$=J[1],z=[{option:"".concat(j(900),"(\u0438\u0437 A \u0432 B)"),value:"900",status:""},{option:"".concat(j(930),"(\u0438\u0437 A \u0432 B)"),value:"930",status:""},{option:"".concat(j(945),"(\u0438\u0437 A \u0432 B)"),value:"945",status:""},{option:"".concat(j(960),"(\u0438\u0437 A \u0432 B)"),value:"960",status:""},{option:"".concat(j(975),"(\u0438\u0437 A \u0432 B)"),value:"975",status:""},{option:"".concat(j(1080),"(\u0438\u0437 A \u0432 B)"),value:"1080",status:""}],L=Object(n.useState)(z),q=Object(s.a)(L,1)[0],G=[{option:"".concat(j(930),"(\u0438\u0437 B \u0432 A)"),value:"930",status:""},{option:"".concat(j(945),"(\u0438\u0437 B \u0432 A)"),value:"945",status:""},{option:"".concat(j(960),"(\u0438\u0437 B \u0432 A)"),value:"960",status:""},{option:"".concat(j(975),"(\u0438\u0437 B \u0432 A)"),value:"975",status:""},{option:"".concat(j(995),"(\u0438\u0437 B \u0432 A)"),value:"995",status:""},{option:"".concat(j(1130),"(\u0438\u0437 B \u0432 A)"),value:"1130",status:""},{option:"".concat(j(1135),"(\u0438\u0437 B \u0432 A)"),value:"1135",status:""}],H=Object(n.useState)(G),K=Object(s.a)(H,2),P=K[0],Q=K[1];Object(n.useEffect)((function(){return R()}),[p,D,M]),Object(n.useEffect)((function(){return U()}),[m,p]);var R=function(){$("\u0438\u0437 A \u0432 B \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0432 \u0410"===p?+M*c+ +D*e:+M*a+ +D*t)},U=function(){for(var t in G)"\u0438\u0437 A \u0432 B \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0432 \u0410"===p&&+m+50>=+G[t].value?(G[t].status="disabled",Q(G)):(G[t].status="",Q(G))};return"order"===d?Object(l.jsxs)("form",{className:"form",method:"post",children:[Object(l.jsx)(u,{label:"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",options:[{option:"\u0438\u0437 A \u0432 B",status:""},{option:"\u0438\u0437 B \u0432 A",status:""},{option:"\u0438\u0437 A \u0432 B \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0432 \u0410",status:""}],action:function(t){h(t.target.value)}}),Object(l.jsx)(u,{label:"\u0412\u0440\u0435\u043c\u044f",id:"timeThere",options:q,action:function(t){A(t.target.value)},disabled:"\u0438\u0437 A \u0432 B"!==p&&"\u0438\u0437 A \u0432 B \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0432 \u0410"!==p||""}),Object(l.jsx)("div",{}),Object(l.jsx)(u,{label:"\u0412\u0440\u0435\u043c\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0435",id:"timeBack",options:P,action:function(t){k(t.target.value)},disabled:"\u0438\u0437 B \u0432 A"!==p&&"\u0438\u0437 A \u0432 B \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0432 \u0410"!==p||""}),Object(l.jsx)(b,{label:"\u0432\u0437\u0440\u043e\u0441\u043b\u044b\u0445 \u0431\u0438\u043b\u0435\u0442\u043e\u0432",id:"adult",action:function(t){y(t.target.value)},value:D}),Object(l.jsx)(b,{label:"\u0434\u0435\u0442\u0441\u043a\u0438\u0445 \u0431\u0438\u043b\u0435\u0442\u043e\u0432",id:"child",value:M,action:function(t){F(t.target.value)}}),Object(l.jsx)(i,{content:"\u041f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c",disabled:"\u0438\u0437 A \u0432 B \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0432 \u0410"===p&&+m+50>=+S||0===T||"",action:function(t){t.preventDefault(),v("info")}}),Object(l.jsx)(i,{content:"\u041a\u0443\u043f\u0438\u0442\u044c \u0431\u0438\u043b\u0435\u0442\u044b",arrow:">",disabled:!0})]}):"info"===d?Object(l.jsxs)("div",{className:"form",children:[Object(l.jsxs)("p",{children:["\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 ",+M+ +D," \u0431\u0438\u043b\u0435\u0442\u043e\u0432 \u043f\u043e \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0443 ",p," \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c\u044e ",T,"\u0440.",Object(l.jsx)("br",{}),"\u042d\u0442\u043e \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0437\u0430\u0439\u043c\u0435\u0442 \u0443 \u0432\u0430\u0441 ","\u0438\u0437 A \u0432 B \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0432 \u0410"===p?+S-(+m+50)+100:50," \u043c\u0438\u043d\u0443\u0442.",Object(l.jsx)("br",{}),"\u0422\u0435\u043f\u043b\u043e\u0445\u043e\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 ",j("\u0438\u0437 B \u0432 A"===p?+S:+m),", \u0430 \u043f\u0440\u0438\u0431\u0443\u0434\u0435\u0442 \u0432 ",j("\u0438\u0437 B \u0432 A"===p?+S+50:+m+50),".",Object(l.jsx)("br",{}),"\u0438\u0437 A \u0432 B \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0432 \u0410"===p?"\u041e\u0431\u0440\u0430\u0442\u043d\u043e \u043f\u043e\u0435\u0434\u0435\u043c \u0432 ".concat(j(+S),", \u0432\u0435\u0440\u043d\u0435\u043c\u0441\u044f \u0432 ").concat(j(+S+50)):""]}),Object(l.jsx)(i,{content:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",action:function(t){t.preventDefault(),v("order")}}),Object(l.jsx)(i,{content:"\u041a\u0443\u043f\u0438\u0442\u044c \u0431\u0438\u043b\u0435\u0442\u044b",arrow:">",action:function(t){t.preventDefault(),j(+m),j(+S),v("ready")}})]}):"ready"===d?Object(l.jsxs)("div",{className:"form form--ready",children:[Object(l.jsx)("h2",{children:"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!"}),Object(l.jsx)(i,{content:"\u0413\u043e\u0442\u043e\u0432\u043e",action:function(t){t.preventDefault(),v("order"),h("\u0438\u0437 A \u0432 B"),A("900"),k("960"),y("0"),F("0"),$("")}})]}):void 0},v=(a(14),function(){return Object(l.jsxs)("div",{className:"order",children:[Object(l.jsx)("h1",{className:"order__heading",children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0431\u0438\u043b\u0435\u0442\u044b"}),Object(l.jsx)(d,{})]})});o.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.b4dfcafc.chunk.js.map
(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c=n(4),s=n.n(c),i=(n(9),n(2)),o=n(1),a=(n(10),n(11),n(0)),r=function(t){var e=t.goods;return Object(a.jsx)("div",{className:"box is-flex is-flex-direction-column has-text-centered mx-auto",children:Object(a.jsx)("ul",{className:"block is-flex is-flex-direction-column is-align-items-flex-start mx-auto mt-0",children:e.map((function(t){return Object(a.jsx)("li",{children:t},t)}))})})},l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u=[1,2,3,4,5,6,7,8,9,10],b=function(){var t=[].concat(l),e=[].concat(u),n=Object(o.useState)(!1),c=Object(i.a)(n,2),s=c[0],b=c[1],m=Object(o.useState)(0),j=Object(i.a)(m,2),d=j[0],h=j[1],x=Object(o.useState)(""),f=Object(i.a)(x,2),p=f[0],O=f[1],g=Object(o.useState)(!1),y=Object(i.a)(g,2),k=y[0],N=y[1],v=t.filter((function(t){return t.length>=d}));return v.sort((function(t,e){switch(p){case"alphab":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),k&&v.reverse(),Object(a.jsxs)("div",{className:"App content is-large has-text-centered",children:[Object(a.jsx)("h1",{className:"fs-2",children:"Goods"}),s?Object(a.jsx)(r,{goods:v}):Object(a.jsx)("button",{type:"button",className:"button is-medium is-primary",onClick:function(){b(!0)},children:"Start"}),s&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{type:"button",className:"button is-medium is-link mx-2",onClick:function(){N((function(t){return!t}))},children:"Reverse"}),Object(a.jsx)("button",{type:"button",className:"button is-medium is-primary mx-2",onClick:function(){O("alphab")},children:"Sort alphabetically"}),Object(a.jsx)("button",{type:"button",className:"button is-medium is-danger mx-2",onClick:function(){O(""),N(!1)},children:"Reset"}),Object(a.jsx)("button",{type:"button",className:"button is-medium is-warning mx-2",onClick:function(){O("length")},children:"Sort by length"}),Object(a.jsx)("select",{className:"select is-medium is-primary mx-4",onChange:function(t){return h(+t.target.value)},children:e.map((function(t){return Object(a.jsx)("option",{value:t,children:t},t)}))})]})]})};s.a.render(Object(a.jsx)(b,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a4b916ab.chunk.js.map
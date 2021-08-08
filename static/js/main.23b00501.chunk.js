(this["webpackJsonptic-tac-toe-with-react-hooks"]=this["webpackJsonptic-tac-toe-with-react-hooks"]||[]).push([[0],{25:function(n,e,t){"use strict";t.r(e);var r,c,o,i,a,b,d,j=t(0),l=t.n(j),s=t(14),u=t.n(s),O=t(2),h=t(5),x=t(3),f=t(4),p=f.b.section(r||(r=Object(x.a)(["\n    background: #A6A5F8;\n    margin: 0 auto;\n    text-align: center;\n    margin-bottom: 1em;\n    padding: 1em;\n    border-bottom: 2px dashed #FD0000;\n    width: 250px;\n    \n"]))),m=f.b.h1(c||(c=Object(x.a)(["\n    font-size: 2rem;\n    margin: 0;\n    text-shadow: 1px 3px 2px #000; \n    color: #FD0000;\n    \n"]))),v=t(1),g=["children"],w=["children"];function k(n){var e=n.children,t=Object(h.a)(n,g);return Object(v.jsx)(p,Object(O.a)(Object(O.a)({},t),{},{children:e}))}k.Title=function(n){var e=n.children,t=Object(h.a)(n,w);return Object(v.jsx)(m,Object(O.a)(Object(O.a)({},t),{},{children:e}))};var A=f.b.section(o||(o=Object(x.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n"]))),y=f.b.div(i||(i=Object(x.a)(["\n    order: 4;\n    border: none;\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\n    display: grid;\n    grid-Template: repeat(3, 1fr) / repeat(3, 1fr);\n    width: 320px;\n    height: 50vh;\n    margin: 0px auto;\n    margin-bottom: 3em;\n\n    \n"]))),C=f.b.p(a||(a=Object(x.a)(["\n    order: 3\n    width: 150px;\n    margin: 0 auto;\n    color: #d4af37;\n    font-weight: bold;\n    text-shadow: 2px 2px 5px #FD0000;\n    font-size: 2rem;\n    margin-bottom:0.5em;\n"]))),F=f.b.button(b||(b=Object(x.a)(["\n    cursor: pointer;\n    font-weight: bold;\n    font-size: 1rem;\n    border: 2px solid #A6A5F8;\n    &:hover{\n        background-color: #88F7AA;\n    }\n    \n"]))),T=f.b.button(d||(d=Object(x.a)(["\n    order: 7;\n    background-color: #A6A5F8;\n    width: 150px;\n    margin: 0 auto;\n    font-size: 1.3rem;\n    padding: 0.5rem 1rem;\n    border: none;\n    text-shadow: 1px 2px 3px #000;\n    font-weight: bold;\n    color: #FD0000;\n    cursor: pointer;\n\n    &:hover{\n        color: #00C369;\n    }\n"]))),z=["children"],B=["children"],S=["children"],D=["children"],I=["children"];function M(n){var e=n.children,t=Object(h.a)(n,z);return Object(v.jsx)(A,Object(O.a)(Object(O.a)({},t),{},{children:e}))}function q(){return Object(v.jsx)(k,{children:Object(v.jsx)(k.Title,{children:"TIC TAC TOE"})})}M.Board=function(n){var e=n.children,t=Object(h.a)(n,B);return Object(v.jsx)(y,Object(O.a)(Object(O.a)({},t),{},{children:e}))},M.Text=function(n){var e=n.children,t=Object(h.a)(n,S);return Object(v.jsx)(C,Object(O.a)(Object(O.a)({},t),{},{children:e}))},M.Button=function(n){var e=n.children,t=Object(h.a)(n,D);return Object(v.jsx)(T,Object(O.a)(Object(O.a)({},t),{},{children:e}))},M.Square=function(n){var e=n.children,t=Object(h.a)(n,I);return Object(v.jsx)(F,Object(O.a)(Object(O.a)({},t),{},{children:e}))};var E=t(8),J=t(6);var N=l.a.createContext();function P(n){var e=n.children,t=Object(j.useState)(Array(9).fill(null)),r=Object(J.a)(t,2),c=r[0],o=r[1],i=Object(j.useState)(!0),a=Object(J.a)(i,2),b=a[0],d=a[1],l=function(n){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<e.length;t++){var r=Object(J.a)(e[t],3),c=r[0],o=r[1],i=r[2];if(n[c]&&n[c]===n[o]&&n[c]===n[i])return n[c]}return null}(c),s=Object(j.useState)([]),u=Object(J.a)(s,2),O=u[0],h=u[1];return Object(v.jsx)(N.Provider,{value:{board:c,winner:l,xIsNext:b,handleClick:function(n){var e=Object(E.a)(c);l||e[n]||(e[n]=b?"X":"O",o(e),d(!b),h([].concat(Object(E.a)(O),[n])))},undoMoves:function(){var n=Object(E.a)(c),e=Object(E.a)(O);if(!n.every((function(n){return null===n}))&&!l)return Object(v.jsx)("div",{onClick:function(){e.splice(-1),h(e),n[O[O.length-1]]=null,o(n),d(!b)},children:"Undo"})},renderMoves:function(){return Object(v.jsx)("div",{onClick:function(){return o(Array(9).fill(null))},children:"Start Game"})}},children:e})}function X(){var n=Object(j.useContext)(N),e=n.board,t=n.winner,r=n.xIsNext,c=n.handleClick,o=n.renderMoves,i=n.undoMoves;return Object(v.jsxs)(M,{children:[Object(v.jsx)(M.Board,{children:e.map((function(n,e){return Object(v.jsx)(M.Square,{onClick:function(){return c(e)},children:n},e)}))}),Object(v.jsx)(M.Text,{children:t?"Winner: "+t:"Player  "+(r?"X":"O")}),Object(v.jsx)(M.Button,{children:o()}),Object(v.jsx)(M.Button,{children:i()})]})}var G,H=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(q,{}),Object(v.jsx)(X,{})]})},U=Object(f.a)(G||(G=Object(x.a)(["\n    html, body {\n        font-family: 'Hind', sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        background-color: #A6A5F8;\n        color: #333333;\n        font-size: 16px;\n        margin: 0;\n    }\n"])));u.a.render(Object(v.jsxs)(P,{children:[Object(v.jsx)(U,{}),Object(v.jsx)(H,{})]}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.23b00501.chunk.js.map
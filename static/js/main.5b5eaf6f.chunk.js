(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),a=n(6),o=n.n(a),i=n(2),u=n.n(i),j=n(4),p=n(3),f=function(){return Object(c.jsx)("header",{children:"pokedex".toUpperCase()})},d=function(){return Object(c.jsx)("form",{children:Object(c.jsx)("input",{type:"text",placeholder:"Search"})})},l=function(e){var t=e.pokemon,n=t.name,s=t.url,a=Object(r.useState)(null),o=Object(p.a)(a,2),i=o[0],f=o[1],d=Object(r.useState)(!1),l=Object(p.a)(d,2),b=l[0],x=l[1];return Object(r.useEffect)((function(){var e=function(){var t=Object(j.a)(u.a.mark((function t(){var n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(s);case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,f(c.sprites.front_default),x(!e),console.log("state",c.sprites.front_default);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e()}),[i]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:n}),b?Object(c.jsx)("div",{children:"loading..."}):Object(c.jsx)("img",{src:i})]})},b=function(e){var t=e.pokemons;return Object(c.jsx)("div",{children:t?t.map((function(e,t){return Object(c.jsx)(l,{pokemon:e},t)})):Object(c.jsx)("div",{children:"fetching..."})})},x=function(){var e=Object(r.useState)(null),t=Object(p.a)(e,2),n=t[0],s=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,s(n.results.flat());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(f,{}),n?Object(c.jsxs)("div",{children:[Object(c.jsx)(d,{}),Object(c.jsx)(b,{pokemons:n})]}):Object(c.jsx)("div",{children:"...loading"})]})};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.5b5eaf6f.chunk.js.map
(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),i=n(6),a=n.n(i),j=n(3),o=n.n(j),u=n(4),d=n(2),l=(n(13),function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsx)("h1",{children:"pokedex"})})}),b=(n(14),function(e){var t=e.handler;return Object(c.jsx)("div",{className:"SearchPokemon",children:Object(c.jsx)("input",{className:"SearchInput",type:"text",placeholder:"Search",onChange:t})})}),h=function(e){var t=e.pokemon,n=t.abilities,r=t.types;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"abilities"}),Object(c.jsx)("ul",{children:n.map((function(e,t){return Object(c.jsx)("li",{children:e.ability.name},t)}))})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"Type"}),Object(c.jsx)("ul",{children:r.map((function(e,t){return Object(c.jsx)("li",{children:e.type.name},t)}))})]})]})},O=(n(15),function(e){var t=e.pokemon,n=t.name,s=t.url,i=Object(r.useState)(null),a=Object(d.a)(i,2),j=a[0],l=a[1],b=Object(r.useState)(!0),O=Object(d.a)(b,2),x=O[0],p=O[1],f=Object(r.useState)(!1),m=Object(d.a)(f,2),v=m[0],k=m[1];return Object(r.useEffect)((function(){var e=function(){var t=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(s);case 2:return n=t.sent,t.next=5,n.json().then((function(e){return l(e)})).then((function(){return p(!e)}));case 5:t.sent;case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e()}),[n]),Object(c.jsxs)("div",{children:[x?Object(c.jsx)("div",{children:"loading..."}):Object(c.jsx)("a",{onClick:function(){return k(!v)},children:Object(c.jsxs)("div",{className:"pokemonCard",children:[Object(c.jsx)("div",{className:"body",children:Object(c.jsx)("img",{src:j.sprites.front_default})}),Object(c.jsxs)("div",{className:"cardFooter",children:[Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:j.name})}),Object(c.jsx)("div",{className:"pokemonNumber",children:Object(c.jsxs)("p",{children:["#",j.id]})})]})]})}),v?Object(c.jsx)(h,{pokemon:j}):Object(c.jsx)("div",{})]})}),x=function(e){var t=e.pokemons;return Object(c.jsx)("div",{children:0!==t.length?t.map((function(e,t){return Object(c.jsx)(O,{pokemon:e},t)})):Object(c.jsx)("div",{children:"Pokemon not found"})})},p=(n(16),function(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(""),a=Object(d.a)(i,2),j=a[0],h=a[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151");case 2:return t=e.sent,e.next=5,t.json().then((function(e){return s(e.results)}));case 5:e.sent;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),console.log(n)}),[]);return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(l,{}),n?Object(c.jsxs)("div",{children:[Object(c.jsx)(b,{handler:function(e){h(e.target.value.toLowerCase())}}),Object(c.jsx)(x,{pokemons:n.filter((function(e){return e.name.includes(j)}))})]}):Object(c.jsx)("div",{children:"...loading"})]})});n(17);a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.778d7ae8.chunk.js.map
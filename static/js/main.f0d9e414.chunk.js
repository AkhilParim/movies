(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n(6),a=n.n(i),r=n(5),o=n(2),l=n.p+"static/media/checked.08385652.svg";var j=function(e){return"movie"==e.Type?Object(c.jsxs)("div",{className:"movie "+(e.list.indexOf(e.imdbID)>-1?"nom ":"nothing ")+(e.list.length>=5?"max":"allowed"),children:[Object(c.jsxs)("div",{className:"blur",children:[Object(c.jsx)("img",{className:"movie-img",src:"N/A"!=e.Poster?e.Poster:"https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1517845732/1517845731.jpg",alt:e.Title}),Object(c.jsxs)("div",{className:"movie-info",children:[Object(c.jsx)("h3",{children:e.Title}),Object(c.jsx)("span",{children:e.Year})]})]}),Object(c.jsx)("div",{className:"nominate-div",children:Object(c.jsx)("button",{className:"nominate-btn",onClick:function(){return e.nominated(e.imdbID)},children:"Nominate"})}),Object(c.jsx)("div",{className:"nominate-disabled",children:Object(c.jsx)("p",{children:"Max nominations reached"})}),Object(c.jsx)("img",{src:l,className:"checked"})]}):null};var m=function(e){var t=Object(s.useState)(""),n=Object(o.a)(t,2),i=n[0],a=n[1],r=Object(s.useState)(""),l=Object(o.a)(r,2),j=l[0],m=l[1];return fetch("https://www.omdbapi.com/?apikey=ef1a2d95&i="+e.movieId).then((function(e){return e.json()})).then((function(e){a(e.Title),m(e.Year)})),Object(c.jsxs)("div",{className:"card",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:i}),Object(c.jsx)("p",{children:j})]}),Object(c.jsx)("button",{className:"remove",onClick:function(){return e.remnominated(e.movieId)},children:"Remove"})]})},d=n(4),h=n.n(d);n(12);function b(){return Object(c.jsx)("h1",{children:"Search a movie to show results.."})}function u(e){return Object(c.jsxs)("h1",{children:['Showing results for "',e.name,'"']})}var O=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(s.useState)(""),l=Object(o.a)(a,2),d=l[0],O=l[1],x=Object(s.useState)(""),f=Object(o.a)(x,2),v=f[0],p=f[1],g=function(e){var t=document.getElementById("search").value;O(t),console.log("searchTerm"),console.log(d),t&&fetch("https://www.omdbapi.com/?apikey=ef1a2d95&s="+t).then((function(e){return e.json()})).then((function(e){console.log(e.Search),"undefined"===typeof e.Search?p(e.Error):(i(e.Search),p(""))})),e.preventDefault()},N=Object(s.useState)([]),S=Object(o.a)(N,2),w=S[0],y=S[1];function k(e){var t=w.concat(e);console.log("newSelected"),console.log(t),y(t),console.log(w),4==w.length&&T()}function I(e){var t=w.filter((function(t){return t!==e}));y(t)}function T(){return h.a.fire({title:"Do you want to confirm the nominations?",showDenyButton:!0,confirmButtonText:"Yes!",denyButtonText:"Edit List"}).then((function(e){if(e.isConfirmed){h.a.fire("Thanks!<br>Your nominations are saved!","Submit another response?","success");y([]),i([]),document.getElementById("search").value="",O("")}else e.isDenied}))}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{className:"title",children:"Shopify Awards"}),Object(c.jsxs)("form",{onSubmit:g,children:[Object(c.jsx)("input",{placeholder:"Search..",type:"search",className:"search",id:"search"}),Object(c.jsx)("button",{className:"search-btn",onClick:g,children:"Search"})]})]}),Object(c.jsxs)("div",{className:"main",children:[Object(c.jsxs)("div",{className:"left",children:[Object(c.jsxs)("div",{className:"results",children:[d.length>0&&Object(c.jsx)(u,{name:d}),0==d.length&&Object(c.jsx)(b,{})]}),d.length>0&&v.length>0?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{className:"nom-inst",children:v}),Object(c.jsx)("p",{className:"nom-inst",children:"Search for another movie!"})]}):Object(c.jsx)("div",{className:"movie-container",children:d.length>0&&n.map((function(e,t){return Object(c.jsx)(j,Object(r.a)(Object(r.a)({},e),{},{nominated:k,list:w}),t)}))})]}),Object(c.jsxs)("div",{className:"right",children:[Object(c.jsx)("h2",{children:"Nominations List"}),0==w.length?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{className:"nom-inst",children:"Movies you nominated"}),Object(c.jsx)("p",{className:"nom-inst",children:"are displayed here"})]}):5==w.length?Object(c.jsxs)(c.Fragment,{children:[w.length>0&&w.map((function(e,t){return Object(c.jsx)(m,{remnominated:I,movieId:e},t)})),T]}):Object(c.jsx)(c.Fragment,{children:w.length>0&&w.map((function(e,t){return Object(c.jsx)(m,{remnominated:I,movieId:e},t)}))})]})]})]})};a.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.f0d9e414.chunk.js.map
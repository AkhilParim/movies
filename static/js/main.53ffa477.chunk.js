(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),i=n(6),r=n.n(i),o=n(5),l=n(2),j=n.p+"static/media/checked.08385652.svg";var m=function(e){return"movie"==e.Type?Object(c.jsxs)("div",{className:"movie "+(e.list.indexOf(e.imdbID)>-1?"nom ":"nothing ")+(e.list.length>=5?"max":"allowed"),children:[Object(c.jsxs)("div",{className:"blur",children:[Object(c.jsx)("img",{className:"movie-img",src:"N/A"!=e.Poster?e.Poster:"https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1517845732/1517845731.jpg",alt:e.Title}),Object(c.jsxs)("div",{className:"movie-info",children:[Object(c.jsx)("h3",{children:e.Title}),Object(c.jsx)("span",{class:"year",children:e.Year})]})]}),Object(c.jsx)("div",{className:"nominate-div",children:Object(c.jsx)("button",{className:"nominate-btn",onClick:function(){return e.nominated(e.imdbID)},children:"Nominate"})}),Object(c.jsx)("div",{className:"nominate-disabled",children:Object(c.jsx)("p",{children:"Max nominations reached"})}),Object(c.jsx)("img",{src:j,className:"checked"})]}):null};var d=function(e){var t=Object(s.useState)(""),n=Object(l.a)(t,2),a=n[0],i=n[1],r=Object(s.useState)(""),o=Object(l.a)(r,2),j=o[0],m=o[1];return fetch("https://www.omdbapi.com/?apikey=ef1a2d95&i="+e.movieId).then((function(e){return e.json()})).then((function(e){i(e.Title),m(e.Year)})),Object(c.jsxs)("div",{className:"card",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:a}),Object(c.jsx)("p",{children:j})]}),Object(c.jsx)("button",{className:"remove",onClick:function(){return e.remnominated(e.movieId)},children:"Remove"})]})},h=n(4),u=n.n(h),b=n.p+"static/media/mov.b102a297.svg";n(12);function O(){return Object(c.jsx)("h2",{children:"Search a movie to show results.."})}function x(e){return Object(c.jsxs)("h2",{children:['Showing results for "',e.name,'"']})}var f=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],r=function(e){var t=a.a.useState(localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[]),n=Object(l.a)(t,2),c=n[0],s=n[1];return a.a.useEffect((function(){localStorage.setItem(e,JSON.stringify(c))}),[c]),console.log(localStorage.getItem(e)),[c,s]}("list"),j=Object(l.a)(r,2),h=j[0],f=j[1],v=Object(s.useState)(""),g=Object(l.a)(v,2),p=g[0],N=g[1],S=Object(s.useState)(""),y=Object(l.a)(S,2),w=y[0],I=y[1],k=function(e){var t=document.getElementById("search").value;N(t),t&&fetch("https://www.omdbapi.com/?apikey=ef1a2d95&s="+t).then((function(e){return e.json()})).then((function(e){"undefined"===typeof e.Search?I(e.Error):(i(e.Search),I(""))})),e.preventDefault()};function T(e){var t=h.concat(e);f(t),4==h.length&&D()}function B(e){var t=h.filter((function(t){return t!==e}));f(t)}function D(){return u.a.fire({title:"Do you want to confirm the nominations?",showDenyButton:!0,confirmButtonText:"Yes!",denyButtonText:"Edit List"}).then((function(e){if(e.isConfirmed){u.a.fire("Thanks!<br>Your nominations are saved!","Submit another response?","success");f([]),i([]),document.getElementById("search").value="",N("")}else e.isDenied}))}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{className:"title",children:"Shopify Awards"}),Object(c.jsxs)("form",{onSubmit:k,children:[Object(c.jsx)("input",{placeholder:"Search..",type:"search",className:"search",id:"search",onChange:!0}),Object(c.jsx)("button",{className:"search-btn",onClick:k,children:"Search"})]})]}),Object(c.jsxs)("div",{className:"main",children:[Object(c.jsxs)("div",{className:"left",children:[Object(c.jsxs)("div",{className:"results",children:[p.length>0&&Object(c.jsx)(x,{name:p}),0==p.length&&Object(c.jsx)(O,{})]}),0==p.length?Object(c.jsx)("img",{src:b,className:"movieImg"}):p.length>0&&w.length>0?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{className:"nom-inst less",children:w}),Object(c.jsx)("p",{className:"nom-inst less",children:"Search for another movie!"})]}):Object(c.jsx)("div",{className:"movie-container",children:p.length>0&&n.map((function(e,t){return Object(c.jsx)(m,Object(o.a)(Object(o.a)({},e),{},{nominated:T,list:h}),t)}))})]}),Object(c.jsxs)("div",{className:"right",children:[Object(c.jsx)("h2",{children:"Nominations List"}),0==h.length?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{className:"nom-inst",children:"Movies you nominated"}),Object(c.jsx)("p",{className:"nom-inst",children:"are displayed here"})]}):5==h.length?Object(c.jsxs)(c.Fragment,{children:[h.length>0&&h.map((function(e,t){return Object(c.jsx)(d,{remnominated:B,movieId:e},t)})),D]}):Object(c.jsx)(c.Fragment,{children:h.length>0&&h.map((function(e,t){return Object(c.jsx)(d,{remnominated:B,movieId:e},t)}))})]})]})]})};r.a.render(Object(c.jsx)(f,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.53ffa477.chunk.js.map
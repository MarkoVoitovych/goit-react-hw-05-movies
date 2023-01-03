"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[588],{588:function(e,r,t){t.r(r),t.d(r,{default:function(){return l}});var n=t(861),a=t(439),c=t(757),s=t.n(c),u=t(791),i=t(87),o=t(689),p=t(315),v=t(184);var l=function(){var e,r,t=(0,o.UO)().movieId,c=(0,u.useState)(null),l=(0,a.Z)(c,2),d=l[0],h=l[1],f=(0,o.TH)(),x=(0,u.useRef)(null!==(e=null===(r=f.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies"),m="https://image.tmdb.org/t/p/w300".concat(null===d||void 0===d?void 0:d.poster_path),w=null===d||void 0===d?void 0:d.genres.map((function(e){return e.name})).join(" "),g=Math.round(10*(null===d||void 0===d?void 0:d.vote_average)),j=new Date(Date.parse(null===d||void 0===d?void 0:d.release_date)).getFullYear()||"";return(0,u.useEffect)((function(){(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Pg)(t);case 3:r=e.sent,h(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[t]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i.rU,{to:x.current,children:"Go back"}),d&&(0,v.jsxs)("div",{children:[(0,v.jsx)("img",{src:m,alt:d.title,height:"300"}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("h3",{children:[d.title," (",j,")"]}),(0,v.jsxs)("p",{children:["User Score: ",g,"%"]}),(0,v.jsx)("p",{children:"Overview"}),(0,v.jsx)("p",{children:d.overview}),(0,v.jsx)("p",{children:"Genges"}),(0,v.jsx)("p",{children:w})]})]}),(0,v.jsx)("p",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(i.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(i.rU,{to:"reviews",children:"Reviews"})})]}),(0,v.jsx)(u.Suspense,{children:(0,v.jsx)(o.j3,{})})]})}},315:function(e,r,t){t.d(r,{Pg:function(){return o},Wf:function(){return i},_L:function(){return u},tx:function(){return v},zv:function(){return p}});var n=t(861),a=t(757),c=t.n(a),s=t(263);s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"663bd5fd8d905b7ce2d57e9867d3492e"};var u=function(){var e=(0,n.Z)(c().mark((function e(){var r,t,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:1,e.prev=1,e.next=4,s.Z.get("/trending/movie/day",{params:{page:r}});case 4:return t=e.sent,n=t.data,e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:1,e.prev=1,e.next=4,s.Z.get("/search/movie",{params:{query:r,page:t}});case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/credits"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(r,"/reviews"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=588.6a8aaaf5.chunk.js.map
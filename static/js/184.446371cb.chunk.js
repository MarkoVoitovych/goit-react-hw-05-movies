"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[184],{942:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(87),o=r(689),p=r(315),f=r(184);var v=function(){var t=(0,i.lr)({query:""}),e=(0,a.Z)(t,2),r=e[0],u=e[1],v=r.get("query"),h=(0,s.useState)([]),l=(0,a.Z)(h,2),d=l[0],m=l[1],w=(0,o.TH)();return(0,s.useEffect)((function(){""!==v&&(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.Wf)(v);case 3:e=t.sent,r=e.results,m(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}),[v]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.target.elements.query.value.trim();""!==e?(u({query:e}),t.target.reset()):t.target.reset()},children:[(0,f.jsx)("input",{type:"text",name:"query",autoFocus:!0}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),v&&(0,f.jsx)("ul",{children:d.map((function(t){return(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"/movies/".concat(t.id),state:{from:w},children:t.title})},t.id)}))})]})}},315:function(t,e,r){r.d(e,{Pg:function(){return o},Wf:function(){return i},_L:function(){return s},tx:function(){return f},zv:function(){return p}});var n=r(861),a=r(757),u=r.n(a),c=r(263);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"663bd5fd8d905b7ce2d57e9867d3492e"};var s=function(){var t=(0,n.Z)(u().mark((function t(){var e,r,n,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,t.prev=1,t.next=4,c.Z.get("/trending/movie/day",{params:{page:e}});case 4:return r=t.sent,n=r.data,t.abrupt("return",n);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n,a,s=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:1,t.prev=1,t.next=4,c.Z.get("/search/movie",{params:{query:e,page:r}});case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/movie/".concat(e));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/movie/".concat(e,"/credits"));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("/movie/".concat(e,"/reviews"));case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=184.446371cb.chunk.js.map
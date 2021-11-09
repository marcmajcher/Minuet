(this.webpackJsonpminuet=this.webpackJsonpminuet||[]).push([[0],{13:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),o=n(5),r=n.n(o),c=(n(13),n(2)),i=n(4),u=n(3);function l(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=0,s=0;s<n;s++)a+=Math.random()*(t-e)+e;return a}var d={available_biomass:{amount:0,decay:.5,generate_min:60,generate_max:90},cool_explore:{type:"cooldown",max:12,seconds:0,count:0,dropAt:4},droptable_explore:{drop_biomass:.25,drop_wire:.15,drop_scrap:.15},drop_biomass:{resource:"biomass",description:"desc_biomass",first:"msg_biomass_discover",min:5,max:20,limit:"available_biomass"},drop_wire:{resource:"wire",description:"desc_wire",first:"msg_wire_discover",min:1,max:4},drop_scrap:{resource:"scrap",description:"desc_scrap",first:"msg_scrap_discover",min:2,max:10},msg_explore:{active:!0,count:0,messages:[{after:1,chance:1,text:"msg_explore_1"},{after:3,chance:1,text:"msg_explore_2"},{after:9,chance:.25,text:"msg_explore_3"},{after:10,chance:.25,text:"msg_explore_4"}]}},m=Object(u.b)({name:"data",initialState:d,reducers:{warmCooldowns:function(e,t){var n=t.payload/1e3;Object.entries(e).forEach((function(t){var a=Object(i.a)(t,2),s=a[0],o=a[1];"cooldown"===o.type&&o.seconds>0&&(e[s].seconds=Math.max(o.seconds-n,0))}))},startCooldown:function(e,t){var n=t.payload;e[n].seconds=e[n].max,e[n].count+=1},resetCooldowns:function(e){Object.keys(e).forEach((function(t){e[t].seconds=0}))},addColonistBiomass:function(e,t){var n=t.payload;e.available_biomass.amount+=l(e.available_biomass.generate_min,e.available_biomass.generate_max,n||1)},decayBiomass:function(e){e.available_biomass.amount-=e.available_biomass.amount*e.available_biomass.decay},shiftActionMessage:function(e,t){var n=t.payload;e[n].active&&(e[n].messages.splice(0,1),e[n].messages.length<1&&(e[n].active=!1))},incrementActionMessage:function(e,t){e[t.payload].count+=1},removeFirstResourceMessage:function(e,t){delete e[t.payload].first}}}),b=m.actions,f=b.warmCooldowns,p=b.startCooldown,j=b.resetCooldowns,g=b.addColonistBiomass,_=b.decayBiomass,x=b.shiftActionMessage,v=b.incrementActionMessage,h=b.removeFirstResourceMessage,O=m.reducer,y={stability:{id:1,name:"res_stability",amount:100,rate:-1.67,max:100,type:"common",state:"hidden"},xp:{id:3,name:"res_experience",amount:0,rate:0,max:60,type:"res_common",state:"hidden"},biomass:{id:4,name:"res_biomass",amount:0,rate:0,max:200,type:"common",state:"hidden"},wire:{id:5,name:"res_wire",amount:0,rate:0,max:50,type:"common",state:"hidden"},scrap:{id:6,name:"res_scrap",amount:0,rate:0,max:50,type:"common",state:"hidden"},egregore:{id:20,name:"res_egregore",amount:0,rate:0,max:Number.MAX_VALUE,type:"persistent",state:"hidden"}},w=Object(u.b)({name:"resources",initialState:y,reducers:{updateAllResources:function(e,t){var n=t.payload/1e3;Object.entries(e).forEach((function(t){var a=Object(i.a)(t,2),s=a[0],o=a[1];if(0!==o.rate){var r=Math.max(e[s].amount+o.rate*n,0);e[s].amount=Math.min(r,e[s].max)}}))},addResource:function(e,t){var n=t.payload,a=n.resource,s=n.amount,o=e[a].amount+s;e[a].amount=Math.min(o,e[a].max),e[a].state="active"},setResourceRate:function(e,t){var n=t.payload,a=n.resource,s=n.rate;e[a].rate=s},showResource:function(e,t){e[t.payload].state="active"},setDefaultResources:function(e){Object.entries(y).forEach((function(t){var n=Object(i.a)(t,2),a=n[0],s=n[1];e[a]=s}))}}}),M=w.actions,N=M.updateAllResources,C=(M.setResourceRate,M.setDefaultResources),E=M.showResource,R=M.addResource,S=w.reducer,k={and:"and",resources:"Resources",storage_closet:"Storage Closet",you_find:"You find {items}",btn_clear:"Clear",btn_decant:"Decant",btn_explore:"Explore",btn_save:"Save",desc_biomass:"some unrecognizable biological material",desc_wire:"a length of scaveneged wire",desc_scrap:"a few pieces of scrap metal",msg_no_resources:"<<UNAVAILABLE>>",msg_log_start:"[LOG] Begin Messages",msg_decant:"[SYS] colonist {colonist} released from cryosleep :: instability {stability}",msg_colonist_expired:"[SYS] colonist {colonist} expired :: unviable",msg_biomass_discover:"You come across a pile of unrecognizable biological goo. Gross, but possibly useful.",msg_wire_discover:"You find an open panel, rip out the wiring, and stow it away someplace safe.",msg_scrap_discover:"You stumble upon some scrap metal. This junk may come in handy later.",msg_explore_1:"You are surrounded by endless hallways and catwalks around a vast chamber filled with frosted glass capsules.",msg_explore_2:"You become weaker and weaker as you feel your body collapsing in on itself.",msg_explore_3:"Something tickles at the back of your mind, as if you've been here before...",msg_explore_4:"You discover a disused storage closet. Maybe you can stash a few things there, in case you don't make it...",res_stability:"Stability",res_experience:"Experience",res_biomass:"Biomass",res_wire:"Wire",res_scrap:"Scrap",res_egregore:"Egregore"};var A=k,I={debug:!1,fps:5,logEntries:[{id:0,text:A.msg_log_start,type:"gameop"}],logIdCounter:1,paused:!0,frozen:!0,decants:0,colonistId:-1,logLength:100},z=Object(u.b)({name:"game",initialState:I,reducers:{pause:function(e){e.paused=!0},unpause:function(e){e.paused=!1},debug:function(e,t){e.debug=t.payload},setFPS:function(e,t){e.fps=t.payload},freeze:function(e){e.paused=!0,e.frozen=!0},start:function(e){e.paused=!1,e.frozen=!1},log:function(e,t){var n,a=t.payload;(n="object"===typeof a?function(e){var t=k[e.template];for(var n in e)t=t.replace("{".concat(n,"}"),e[n]);return t}(a):A[a]?A[a]:a)&&(e.logEntries.push({text:n,id:e.logIdCounter,type:a.type||"foo"}),e.logEntries.length>e.logLength&&e.logEntries.splice(0,e.logEntries.length-e.logLength),e.logIdCounter+=1)},decant:function(e){e.paused=!1,e.frozen=!1,e.decants+=1},setColonistId:function(e,t){var n=t.payload;e.colonistId=n}}}),Y=z.actions,B=Y.pause,L=Y.unpause,F=(Y.debug,Y.setFPS,Y.freeze),D=(Y.start,Y.log),G=Y.decant,U=Y.setColonistId,V=z.reducer;function H(){var e=Object(c.b)(),t=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.game.colonistId}));return function(n){n.stability.amount<=0&&(e(F()),e(D({template:"msg_colonist_expired",colonist:t,type:"system"})),e(g()),e(_()))}}(),n=Object(c.c)((function(e){return e.resources})),s=Object(c.c)((function(e){return e.game.paused})),o=Object(c.c)((function(e){return e.game.fps})),r=o>0?1e3/o:Number.MAX_VALUE,i=Object(a.useRef)((function(){e(N(r)),e(f(r))}));Object(a.useEffect)((function(){if(o>0&&!s){var e=setInterval((function(){i.current(r),t(n)}),r);return function(){return clearInterval(e)}}}),[o,r,s,n])}var J=n(0);function P(e){var t=e.resource,n=t.name,a=t.amount,s=t.rate,o=t.max,r=t.type,c=t.state;return Object(J.jsxs)("div",{className:"resource ".concat(c," ").concat(r),children:[Object(J.jsxs)("span",{className:"resource-name",children:[A[n],":"]})," ",Object(J.jsxs)("span",{className:"resource-amount",children:[a.toFixed(2),"/",o]})," ",Object(J.jsx)("span",{className:"resource-rate",children:0!==s?"(".concat(s.toFixed(2),"/sec)"):""})]})}function X(){return""}function T(){var e=Object(c.c)((function(e){return e.game.decants})),t=Object(c.c)((function(e){return Object.values(e.resources)}));return Object(J.jsxs)("div",{className:"resource-list",children:[Object(J.jsxs)("section",{className:"resources",children:[Object(J.jsxs)("h2",{children:["[ ",A.resources," ]"]}),e>0?t.map((function(e){return Object(J.jsx)(P,{resource:e},e.id)})):A.msg_no_resources]}),Object(J.jsx)(X,{})]})}function W(){var e=Object(c.c)((function(e){return e.game.logEntries}));return Object(J.jsx)("div",{className:"log-entries",children:e&&e.slice().reverse().map((function(e){return Object(J.jsx)("p",{className:e.type,children:e.text},e.id)}))})}function q(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.resources.stability.rate})),n=Date.now().toString().substr(-8);return Object(J.jsx)("button",{className:"button-primary",onClick:function(){e(C()),e(j()),e(G()),e(E("stability")),e(U(n)),e(D({template:"msg_decant",type:"system",colonist:n,stability:t<0?"HIGH":"none"}))},children:A.btn_decant})}function K(e){var t=e.cooldown,n=e.cool_id,a=e.label_id,s=e.callback,o=Object(c.b)();return Object(J.jsxs)("div",{className:"btn-cooldown",children:[Object(J.jsx)("div",{className:"btn-cooldown-bar",style:{width:"".concat(t.seconds/t.max*100,"%")}}),Object(J.jsxs)("button",{className:"cooldown",disabled:t.seconds>0,onClick:function(){o(p(n)),s()},children:[A[a]," : ",Math.ceil(t.seconds)]})]})}function Q(){var e=Object(c.c)((function(e){return e.data.cool_explore})),t=Object(c.c)((function(e){return e.resources.xp})),n=Object(c.b)(),a=function(e){var t=Object(c.b)(),n=Object(c.c)((function(t){return t.data[e]}));return function(){if(n.active){var a=n.messages[0];n.count>=a.after&&Math.random()<a.chance&&(t(D(a.text)),t(x(e))),t(v(e))}}}("msg_explore"),s=function(e){var t=Object(c.b)(),n=Object(c.c)((function(t){return t.data[e]})),a=Object(c.c)((function(e){return e.data}));return function(){var e=[];for(var s in n)if(Math.random()<n[s]){var o=a[s];if(o.limit&&a[o.limit].amount<=0)continue;o.first?(t(D(o.first)),t(h(s))):e.push(o.description);var r=l(o.min,o.max);o.limit&&(r=Math.min(r,a[o.limit].amount)),t(R({resource:o.resource,amount:r}))}return e}}("droptable_explore");function o(e){var t=e.map((function(e){return A[e]}));switch(t.length){case 0:return"";case 1:return t[0];case 2:return"".concat(t[0]," ").concat(A.and," ").concat(t[1]);default:return t[t.length-1]="".concat(A.and," ").concat(t[t.length-1]),t.join(", ")}}return Object(J.jsx)(K,{cooldown:e,cool_id:"cool_explore",label_id:"btn_explore",callback:function(){if(e.count>=e.dropAt){var r=s();r.length>0&&n(D({template:"you_find",items:o(r)}))}n(R({resource:"xp",amount:1})),"hidden"===t.state&&n(E("xp")),a()}})}function Z(){var e=Object(c.c)((function(e){return e.game.frozen}));return Object(J.jsx)("div",{className:"action-panel",children:e?Object(J.jsx)(q,{}):Object(J.jsx)(Q,{})})}function $(){return Object(J.jsxs)("div",{className:"main-page",children:[Object(J.jsx)(T,{}),Object(J.jsx)(Z,{}),Object(J.jsx)(W,{})]})}var ee=n.p+"static/media/orbital.391d4365.svg";function te(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.game.paused})),n=Object(c.c)((function(e){return e.game.frozen}));return Object(J.jsxs)("header",{children:[Object(J.jsx)("h1",{children:"minuet"}),Object(J.jsx)("img",{className:t?"orbit":"orbit spin",src:ee,alt:"orbit logo",onClick:t&&!n?function(){return e(L())}:function(){return e(B())}})]})}function ne(){return Object(J.jsxs)("footer",{children:[Object(J.jsx)("button",{children:A.btn_save})," ",Object(J.jsx)("button",{children:A.btn_clear})]})}var ae=function(){return H(),Object(J.jsxs)("div",{className:"container",children:[Object(J.jsx)(te,{}),Object(J.jsx)($,{}),Object(J.jsx)(ne,{})]})},se=Object(u.a)({reducer:{resources:S,game:V,data:O}});r.a.render(Object(J.jsx)(s.a.StrictMode,{children:Object(J.jsx)(c.a,{store:se,children:Object(J.jsx)(ae,{})})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.8adfea3b.chunk.js.map
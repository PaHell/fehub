var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,n,l)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,o=(t,o)=>{for(var c in o||(o={}))n.call(o,c)&&s(t,c,o[c]);if(e)for(var c of e(o))l.call(o,c)&&s(t,c,o[c]);return t};import{S as c,i as r,s as a,E as i,e as u,c as p,a as f,d as $,b as h,f as d,F as m,x as g,u as v,j as x,m as y,o as b,v as E,t as w,g as I,H as k,h as D,r as V,w as O,M as j,X as P,C as T,N as K,O as _,P as N,Q as U,l as B,R as C,J as L,L as S,K as M,A as q,U as A}from"./vendor-4bc98d00.js";import{r as F}from"./singletons-bb9012b7.js";function G(t){let e,n;const l=t[1].default,s=i(l,t,t[0],null);return{c(){e=u("i"),s&&s.c(),this.h()},l(t){e=p(t,"I",{class:!0});var n=f(e);s&&s.l(n),n.forEach($),this.h()},h(){h(e,"class","icon material-icons-round")},m(t,l){d(t,e,l),s&&s.m(e,null),n=!0},p(t,[e]){s&&s.p&&(!n||1&e)&&m(s,l,t,t[0],n?e:-1,null,null)},i(t){n||(g(s,t),n=!0)},o(t){v(s,t),n=!1},d(t){t&&$(e),s&&s.d(t)}}}function H(t,e,n){let{$$slots:l={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,l]}class J extends c{constructor(t){super(),r(this,t,H,G,a,{})}}function Q(t){let e,n;return e=new J({props:{$$slots:{default:[R]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},p(t,n){const l={};9&n&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function R(t){let e,n=t[0].icon+"";return{c(){e=w(n)},l(t){e=I(t,n)},m(t,n){d(t,e,n)},p(t,l){1&l&&n!==(n=t[0].icon+"")&&D(e,n)},d(t){t&&$(e)}}}function z(t){let e,n,l,s,o,c,r=t[1](t[0].info)+"";return l=new J({props:{$$slots:{default:[W]},$$scope:{ctx:t}}}),{c(){e=u("div"),n=u("div"),x(l.$$.fragment),s=u("p"),o=w(r),this.h()},l(t){e=p(t,"DIV",{class:!0}),f(e).forEach($),n=p(t,"DIV",{class:!0});var c=f(n);y(l.$$.fragment,c),s=p(c,"P",{class:!0});var a=f(s);o=I(a,r),a.forEach($),c.forEach($),this.h()},h(){h(e,"class","divider"),h(s,"class","text caption"),h(n,"class","info")},m(t,r){d(t,e,r),d(t,n,r),b(l,n,null),k(n,s),k(s,o),c=!0},p(t,e){const n={};8&e&&(n.$$scope={dirty:e,ctx:t}),l.$set(n),(!c||3&e)&&r!==(r=t[1](t[0].info)+"")&&D(o,r)},i(t){c||(g(l.$$.fragment,t),c=!0)},o(t){v(l.$$.fragment,t),c=!1},d(t){t&&$(e),t&&$(n),E(l)}}}function W(t){let e;return{c(){e=w("info_outline")},l(t){e=I(t,"info_outline")},m(t,n){d(t,e,n)},d(t){t&&$(e)}}}function X(t){let e,n,l,s,o,c,r=t[1](t[0].text)+"",a=t[0].icon&&Q(t),i=t[0].info&&z(t);return{c(){e=u("div"),a&&a.c(),n=u("p"),l=w(r),i&&i.c(),this.h()},l(t){e=p(t,"DIV",{class:!0});var s=f(e);a&&a.l(s),n=p(s,"P",{class:!0});var o=f(n);l=I(o,r),o.forEach($),i&&i.l(s),s.forEach($),this.h()},h(){h(n,"class",s="text "+t[0].level),h(e,"class",o=`cell-text level-${t[0].level} align-${t[0].align}`)},m(t,s){d(t,e,s),a&&a.m(e,null),k(e,n),k(n,l),i&&i.m(e,null),c=!0},p(t,[u]){t[0].icon?a?(a.p(t,u),1&u&&g(a,1)):(a=Q(t),a.c(),g(a,1),a.m(e,n)):a&&(V(),v(a,1,1,(()=>{a=null})),O()),(!c||3&u)&&r!==(r=t[1](t[0].text)+"")&&D(l,r),(!c||1&u&&s!==(s="text "+t[0].level))&&h(n,"class",s),t[0].info?i?(i.p(t,u),1&u&&g(i,1)):(i=z(t),i.c(),g(i,1),i.m(e,null)):i&&(V(),v(i,1,1,(()=>{i=null})),O()),(!c||1&u&&o!==(o=`cell-text level-${t[0].level} align-${t[0].align}`))&&h(e,"class",o)},i(t){c||(g(a),g(i),c=!0)},o(t){v(a),v(i),c=!1},d(t){t&&$(e),a&&a.d(),i&&i.d()}}}function Y(t,e,n){let l;j(t,P,(t=>n(1,l=t)));let{props:s}=e;return s=o(o({},{text:!1,icon:!1,level:"headline",align:"left",info:!1}),s),t.$$set=t=>{"props"in t&&n(0,s=t.props)},[s,l]}const Z=T(0),tt=T(0),et=T(0);function nt(t,e,n){const l=t.slice();return l[8]=e[n][0],l[9]=e[n][1],l}function lt(t){let e,n=t[0].icon+"";return{c(){e=w(n)},l(t){e=I(t,n)},m(t,n){d(t,e,n)},p(t,l){1&l&&n!==(n=t[0].icon+"")&&D(e,n)},d(t){t&&$(e)}}}function st(t){let e;return{c(){e=w("arrow_drop_down")},l(t){e=I(t,"arrow_drop_down")},m(t,n){d(t,e,n)},d(t){t&&$(e)}}}function ot(t){let e,n,l,s,o,c,r=t[4](t[9])+"";function a(){return t[6](t[8])}return{c(){e=u("button"),n=u("div"),l=u("p"),s=w(r),this.h()},l(t){e=p(t,"BUTTON",{});var o=f(e);n=p(o,"DIV",{class:!0}),f(n).forEach($),l=p(o,"P",{class:!0});var c=f(l);s=I(c,r),c.forEach($),o.forEach($),this.h()},h(){h(n,"class","control"),h(l,"class","text bold"),K(e,"selected",t[8]===t[0].selected)},m(t,r){d(t,e,r),k(e,n),k(e,l),k(l,s),o||(c=_(e,"click",N(a)),o=!0)},p(n,l){t=n,17&l&&r!==(r=t[4](t[9])+"")&&D(s,r),1&l&&K(e,"selected",t[8]===t[0].selected)},d(t){t&&$(e),o=!1,c()}}}function ct(t){let e,n,l,s,o,c,r,a,i,m,V,O,j,P,T,N,B,C=t[4](t[0].label)+"",L=t[4](t[0].options[t[0].selected])+"";l=new J({props:{$$slots:{default:[lt]},$$scope:{ctx:t}}}),m=new J({props:{$$slots:{default:[st]},$$scope:{ctx:t}}});let S=Object.entries(t[0].options),M=[];for(let u=0;u<S.length;u+=1)M[u]=ot(nt(t,S,u));return{c(){e=u("div"),n=u("button"),x(l.$$.fragment),s=u("div"),o=u("p"),c=w(C),r=w(":"),a=u("p"),i=w(L),x(m.$$.fragment),V=u("div"),O=u("div"),j=u("div");for(let t=0;t<M.length;t+=1)M[t].c();this.h()},l(t){e=p(t,"DIV",{class:!0,style:!0});var u=f(e);n=p(u,"BUTTON",{});var h=f(n);y(l.$$.fragment,h),s=p(h,"DIV",{});var d=f(s);o=p(d,"P",{class:!0});var g=f(o);c=I(g,C),r=I(g,":"),g.forEach($),a=p(d,"P",{class:!0});var v=f(a);i=I(v,L),v.forEach($),d.forEach($),y(m.$$.fragment,h),h.forEach($),V=p(u,"DIV",{class:!0});var x=f(V);O=p(x,"DIV",{class:!0});var b=f(O);j=p(b,"DIV",{class:!0}),f(j).forEach($),b.forEach($);for(let e=0;e<M.length;e+=1)M[e].l(x);x.forEach($),u.forEach($),this.h()},h(){h(o,"class","text label"),h(a,"class","text bold"),h(j,"class","cursor"),h(O,"class","container-cursor"),h(V,"class","options"),h(e,"class","cell-select"),h(e,"style",P=`height: ${t[2]?(Object.keys(t[0].options).length+1)*t[3]:t[3]}px`),K(e,"active",t[2])},m(u,p){d(u,e,p),k(e,n),b(l,n,null),k(n,s),k(s,o),k(o,c),k(o,r),k(s,a),k(a,i),b(m,n,null),k(e,V),k(V,O),k(O,j);for(let t=0;t<M.length;t+=1)M[t].m(V,null);T=!0,N||(B=_(n,"click",t[1]),N=!0)},p(t,[n]){const s={};4097&n&&(s.$$scope={dirty:n,ctx:t}),l.$set(s),(!T||17&n)&&C!==(C=t[4](t[0].label)+"")&&D(c,C),(!T||17&n)&&L!==(L=t[4](t[0].options[t[0].selected])+"")&&D(i,L);const o={};if(4096&n&&(o.$$scope={dirty:n,ctx:t}),m.$set(o),49&n){let e;for(S=Object.entries(t[0].options),e=0;e<S.length;e+=1){const l=nt(t,S,e);M[e]?M[e].p(l,n):(M[e]=ot(l),M[e].c(),M[e].m(V,null))}for(;e<M.length;e+=1)M[e].d(1);M.length=S.length}(!T||13&n&&P!==(P=`height: ${t[2]?(Object.keys(t[0].options).length+1)*t[3]:t[3]}px`))&&h(e,"style",P),4&n&&K(e,"active",t[2])},i(t){T||(g(l.$$.fragment,t),g(m.$$.fragment,t),T=!0)},o(t){v(l.$$.fragment,t),v(m.$$.fragment,t),T=!1},d(t){t&&$(e),E(l),E(m),U(M,t),N=!1,B()}}}function rt(t,e,n){let l;j(t,P,(t=>n(4,l=t)));let{props:s}=e;s=o(o({},{icon:"",label:"Select",options:{},selected:""}),s);let c,r=!1;function a(t){n(0,s.selected=t,s),n(2,r=!1),s.onChange&&s.onChange(t,s.options[t])}tt.subscribe((t=>n(3,c=t)));return t.$$set=t=>{"props"in t&&n(0,s=t.props)},[s,function(t){n(2,r=!r)},r,c,l,a,t=>a(t)]}function at(t){let e,n=t[0].icon+"";return{c(){e=w(n)},l(t){e=I(t,n)},m(t,n){d(t,e,n)},p(t,l){1&l&&n!==(n=t[0].icon+"")&&D(e,n)},d(t){t&&$(e)}}}function it(t){let e,n,l=t[2](t[0].text)+"";return{c(){e=u("p"),n=w(l),this.h()},l(t){e=p(t,"P",{class:!0});var s=f(e);n=I(s,l),s.forEach($),this.h()},h(){h(e,"class","text bold")},m(t,l){d(t,e,l),k(e,n)},p(t,e){5&e&&l!==(l=t[2](t[0].text)+"")&&D(n,l)},d(t){t&&$(e)}}}function ut(t){let e;return{c(){e=w("launch")},l(t){e=I(t,"launch")},m(t,n){d(t,e,n)},d(t){t&&$(e)}}}function pt(t){let e,n,l,s,o,c,r;n=new J({props:{$$slots:{default:[at]},$$scope:{ctx:t}}});let a=t[0].text&&it(t);return s=new J({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){e=u("button"),x(n.$$.fragment),a&&a.c(),l=B(),x(s.$$.fragment),this.h()},l(t){e=p(t,"BUTTON",{class:!0});var o=f(e);y(n.$$.fragment,o),a&&a.l(o),l=B(),y(s.$$.fragment,o),o.forEach($),this.h()},h(){h(e,"class","cell-link")},m(i,u){d(i,e,u),b(n,e,null),a&&a.m(e,null),k(e,l),b(s,e,null),o=!0,c||(r=_(e,"click",t[1]),c=!0)},p(t,[o]){const c={};17&o&&(c.$$scope={dirty:o,ctx:t}),n.$set(c),t[0].text?a?a.p(t,o):(a=it(t),a.c(),a.m(e,l)):a&&(a.d(1),a=null);const r={};16&o&&(r.$$scope={dirty:o,ctx:t}),s.$set(r)},i(t){o||(g(n.$$.fragment,t),g(s.$$.fragment,t),o=!0)},o(t){v(n.$$.fragment,t),v(s.$$.fragment,t),o=!1},d(t){t&&$(e),E(n),a&&a.d(),E(s),c=!1,r()}}}function ft(t,e,n){let l;j(t,P,(t=>n(2,l=t)));let{props:s}=e;return s=o(o({},{text:!1,icon:"language"}),s),t.$$set=t=>{"props"in t&&n(0,s=t.props)},[s,function(){window.open(s.value,"_blank").focus()},l]}function $t(t){let e,n;return e=new J({props:{$$slots:{default:[ht]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},p(t,n){const l={};257&n&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function ht(t){let e,n=t[0].icon+"";return{c(){e=w(n)},l(t){e=I(t,n)},m(t,n){d(t,e,n)},p(t,l){1&l&&n!==(n=t[0].icon+"")&&D(e,n)},d(t){t&&$(e)}}}function dt(t){let e,n,l,s=t[2](t[0].label)+"";return{c(){e=u("p"),n=w(s),l=w(":"),this.h()},l(t){e=p(t,"P",{class:!0});var o=f(e);n=I(o,s),l=I(o,":"),o.forEach($),this.h()},h(){h(e,"class","label")},m(t,s){d(t,e,s),k(e,n),k(e,l)},p(t,e){5&e&&s!==(s=t[2](t[0].label)+"")&&D(n,s)},d(t){t&&$(e)}}}function mt(t){let e,n,l,s,o,c,r,a,i,m,x,y=(t[0].value?"":t[2](t[0].placeholder))+"",b=t[0].icon&&$t(t),E=t[0].label&&dt(t);return{c(){e=u("div"),n=u("input"),s=u("div"),b&&b.c(),o=u("div"),E&&E.c(),c=u("p"),r=w(y),a=u("div"),this.h()},l(t){e=p(t,"DIV",{class:!0});var l=f(e);n=p(l,"INPUT",{type:!0,name:!0,placeholder:!0}),s=p(l,"DIV",{class:!0});var i=f(s);b&&b.l(i),o=p(i,"DIV",{class:!0});var u=f(o);E&&E.l(u),c=p(u,"P",{class:!0});var h=f(c);r=I(h,y),h.forEach($),a=p(u,"DIV",{class:!0}),f(a).forEach($),u.forEach($),i.forEach($),l.forEach($),this.h()},h(){h(n,"type","text"),h(n,"name",l=t[0].name),h(n,"placeholder",""),K(n,"has-icon",t[0].icon),K(n,"has-label",t[0].label),h(c,"class","placeholder"),h(a,"class","line"),h(o,"class","right"),h(s,"class","overlay"),h(e,"class","cell-input")},m(l,u){d(l,e,u),k(e,n),C(n,t[0].value),t[6](n),k(e,s),b&&b.m(s,null),k(s,o),E&&E.m(o,null),k(o,c),k(c,r),k(o,a),i=!0,m||(x=_(n,"input",t[5]),m=!0)},p(t,[e]){(!i||1&e&&l!==(l=t[0].name))&&h(n,"name",l),1&e&&n.value!==t[0].value&&C(n,t[0].value),1&e&&K(n,"has-icon",t[0].icon),1&e&&K(n,"has-label",t[0].label),t[0].icon?b?(b.p(t,e),1&e&&g(b,1)):(b=$t(t),b.c(),g(b,1),b.m(s,o)):b&&(V(),v(b,1,1,(()=>{b=null})),O()),t[0].label?E?E.p(t,e):(E=dt(t),E.c(),E.m(o,c)):E&&(E.d(1),E=null),(!i||5&e)&&y!==(y=(t[0].value?"":t[2](t[0].placeholder))+"")&&D(r,y)},i(t){i||(g(b),i=!0)},o(t){v(b),i=!1},d(n){n&&$(e),t[6](null),b&&b.d(),E&&E.d(),m=!1,x()}}}function gt(t,e,n){let l;j(t,P,(t=>n(2,l=t)));let{props:s}=e;let c;return s=o(o({},{label:!1,icon:!1,value:!1,name:!1,placeholder:"placeholder"}),s),t.$$set=t=>{"props"in t&&n(0,s=t.props)},[s,c,l,function(t){c.focus()},function(t){c.blur()},function(){s.value=this.value,n(0,s)},function(t){L[t?"unshift":"push"]((()=>{c=t,n(1,c)}))}]}function vt(t){let e,n;return e=new J({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},p(t,n){const l={};17&n&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function xt(t){let e,n=t[0].icon+"";return{c(){e=w(n)},l(t){e=I(t,n)},m(t,n){d(t,e,n)},p(t,l){1&l&&n!==(n=t[0].icon+"")&&D(e,n)},d(t){t&&$(e)}}}function yt(t){let e;return{c(){e=w("done")},l(t){e=I(t,"done")},m(t,n){d(t,e,n)},d(t){t&&$(e)}}}function bt(t){let e,n,l,s,o,c,r,a,i,m,j=t[2](t[0].text)+"",P=t[0].icon&&vt(t);return c=new J({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){e=u("button"),P&&P.c(),n=u("p"),l=w(j),s=u("div"),o=u("div"),x(c.$$.fragment),this.h()},l(t){e=p(t,"BUTTON",{class:!0});var r=f(e);P&&P.l(r),n=p(r,"P",{class:!0});var a=f(n);l=I(a,j),a.forEach($),s=p(r,"DIV",{class:!0});var i=f(s);o=p(i,"DIV",{});var u=f(o);y(c.$$.fragment,u),u.forEach($),i.forEach($),r.forEach($),this.h()},h(){h(n,"class","text bold"),h(s,"class","control"),h(e,"class",r=`cell-checkbox variant-${t[0].variant}`),K(e,"active",t[0].value)},m(r,u){d(r,e,u),P&&P.m(e,null),k(e,n),k(n,l),k(e,s),k(s,o),b(c,o,null),a=!0,i||(m=_(e,"click",t[1]),i=!0)},p(t,[s]){t[0].icon?P?(P.p(t,s),1&s&&g(P,1)):(P=vt(t),P.c(),g(P,1),P.m(e,n)):P&&(V(),v(P,1,1,(()=>{P=null})),O()),(!a||5&s)&&j!==(j=t[2](t[0].text)+"")&&D(l,j);const o={};16&s&&(o.$$scope={dirty:s,ctx:t}),c.$set(o),(!a||1&s&&r!==(r=`cell-checkbox variant-${t[0].variant}`))&&h(e,"class",r),1&s&&K(e,"active",t[0].value)},i(t){a||(g(P),g(c.$$.fragment,t),a=!0)},o(t){v(P),v(c.$$.fragment,t),a=!1},d(t){t&&$(e),P&&P.d(),E(c),i=!1,m()}}}function Et(t,e,n){let l;j(t,P,(t=>n(2,l=t)));let{props:s}=e;return s=o(o({},{text:"text",icon:!1,variant:"checkbox",value:!1}),s),t.$$set=t=>{"props"in t&&n(0,s=t.props)},[s,function(t){n(0,s.value=!s.value,s)},l]}const wt=async function(t,e){return F.goto(t,e,[])};function It(t){let e,n;return e=new J({props:{$$slots:{default:[kt]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},p(t,n){const l={};17&n&&(l.$$scope={dirty:n,ctx:t}),e.$set(l)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function kt(t){let e,n=t[0].icon+"";return{c(){e=w(n)},l(t){e=I(t,n)},m(t,n){d(t,e,n)},p(t,l){1&l&&n!==(n=t[0].icon+"")&&D(e,n)},d(t){t&&$(e)}}}function Dt(t){let e,n,l=t[2](t[0].text)+"";return{c(){e=u("p"),n=w(l),this.h()},l(t){e=p(t,"P",{class:!0});var s=f(e);n=I(s,l),s.forEach($),this.h()},h(){h(e,"class","text bold")},m(t,l){d(t,e,l),k(e,n)},p(t,e){5&e&&l!==(l=t[2](t[0].text)+"")&&D(n,l)},d(t){t&&$(e)}}}function Vt(t){let e,n;return e=new J({props:{$$slots:{default:[Ot]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,l){b(e,t,l),n=!0},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function Ot(t){let e;return{c(){e=w("chevron_right")},l(t){e=I(t,"chevron_right")},m(t,n){d(t,e,n)},d(t){t&&$(e)}}}function jt(t){let e,n,l,s,o,c,r,a=t[0].icon&&It(t),i=t[0].text&&Dt(t),m="link"===t[0].variant&&Vt(t);return{c(){e=u("button"),a&&a.c(),n=B(),i&&i.c(),l=B(),m&&m.c(),this.h()},l(t){e=p(t,"BUTTON",{class:!0});var s=f(e);a&&a.l(s),n=B(),i&&i.l(s),l=B(),m&&m.l(s),s.forEach($),this.h()},h(){h(e,"class",s=`cell-button variant-${t[0].variant}`)},m(s,u){d(s,e,u),a&&a.m(e,null),k(e,n),i&&i.m(e,null),k(e,l),m&&m.m(e,null),o=!0,c||(r=_(e,"click",t[1]),c=!0)},p(t,[c]){t[0].icon?a?(a.p(t,c),1&c&&g(a,1)):(a=It(t),a.c(),g(a,1),a.m(e,n)):a&&(V(),v(a,1,1,(()=>{a=null})),O()),t[0].text?i?i.p(t,c):(i=Dt(t),i.c(),i.m(e,l)):i&&(i.d(1),i=null),"link"===t[0].variant?m?1&c&&g(m,1):(m=Vt(t),m.c(),g(m,1),m.m(e,null)):m&&(V(),v(m,1,1,(()=>{m=null})),O()),(!o||1&c&&s!==(s=`cell-button variant-${t[0].variant}`))&&h(e,"class",s)},i(t){o||(g(a),g(m),o=!0)},o(t){v(a),v(m),o=!1},d(t){t&&$(e),a&&a.d(),i&&i.d(),m&&m.d(),c=!1,r()}}}function Pt(t,e,n){let l;j(t,P,(t=>n(2,l=t)));let{props:s}=e;return s=o(o({},{icon:!1,text:!1,value:t=>{console.log("button has no fn",t)},variant:""}),s),t.$$set=t=>{"props"in t&&n(0,s=t.props)},[s,function(t){const e=s.value;"string"==typeof e||e instanceof String?wt(e):s.value(t)},l]}const{window:Tt}=A;function Kt(t,e,n){const l=t.slice();return l[22]=e[n],l[23]=e,l[24]=n,l}function _t(t){let e,n,l,s,o;return{c(){e=u("div"),n=u("div"),l=u("div"),s=u("div"),this.h()},l(t){e=p(t,"DIV",{id:!0});var o=f(e);n=p(o,"DIV",{id:!0,style:!0});var c=f(n);l=p(c,"DIV",{class:!0}),f(l).forEach($),s=p(c,"DIV",{class:!0}),f(s).forEach($),c.forEach($),o.forEach($),this.h()},h(){h(l,"class","row"),h(s,"class","row"),h(n,"id","cursor"),h(n,"style",o=t[1][t[2]].css),h(e,"id","container-cursor")},m(t,o){d(t,e,o),k(e,n),k(n,l),k(n,s)},p(t,e){6&e&&o!==(o=t[1][t[2]].css)&&h(n,"style",o)},d(t){t&&$(e)}}}function Nt(t){let e,n,l,s,o,c,r=t[23],a=t[24];function i(e){t[12](e,t[22])}const m=()=>t[13](n,r,a),w=()=>t[13](null,r,a);var I=Bt[t[22].type].component;function k(t){let e={};return void 0!==t[0][t[22].name]&&(e.props=t[0][t[22].name]),{props:e}}return I&&(n=new I(k(t)),L.push((()=>M(n,"props",i))),m()),{c(){e=u("div"),n&&x(n.$$.fragment),this.h()},l(t){e=p(t,"DIV",{class:!0,style:!0});var l=f(e);n&&y(n.$$.fragment,l),l.forEach($),this.h()},h(){h(e,"class",s=`element element-${t[22].type}`),h(e,"style",o=`grid-area: ${t[22].name}`),K(e,"active",t[2]===t[24]),K(e,"disabled",t[22].disabled||!1)},m(t,l){d(t,e,l),n&&b(n,e,null),c=!0},p(u,p){r===(t=u)[23]&&a===t[24]||(w(),r=t[23],a=t[24],m());const f={};if(!l&&3&p&&(l=!0,f.props=t[0][t[22].name],S((()=>l=!1))),I!==(I=Bt[t[22].type].component)){if(n){V();const t=n;v(t.$$.fragment,1,0,(()=>{E(t,1)})),O()}I?(n=new I(k(t)),L.push((()=>M(n,"props",i))),m(),x(n.$$.fragment),g(n.$$.fragment,1),b(n,e,null)):n=null}else I&&n.$set(f);(!c||2&p&&s!==(s=`element element-${t[22].type}`))&&h(e,"class",s),(!c||2&p&&o!==(o=`grid-area: ${t[22].name}`))&&h(e,"style",o),6&p&&K(e,"active",t[2]===t[24]),2&p&&K(e,"disabled",t[22].disabled||!1)},i(t){c||(n&&g(n.$$.fragment,t),c=!0)},o(t){n&&v(n.$$.fragment,t),c=!1},d(t){t&&$(e),w(),n&&E(n)}}}function Ut(t){let e,n,l,s,o,c=t[1].length&&_t(t),r=t[1],a=[];for(let u=0;u<r.length;u+=1)a[u]=Nt(Kt(t,r,u));const i=t=>v(a[t],1,1,(()=>{a[t]=null}));return{c(){e=u("div"),c&&c.c(),n=u("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=p(t,"DIV",{class:!0,style:!0});var l=f(e);c&&c.l(l),n=p(l,"DIV",{class:!0,id:!0}),f(n).forEach($);for(let e=0;e<a.length;e+=1)a[e].l(l);l.forEach($),this.h()},h(){h(n,"class","hidden"),h(n,"id","ref"),h(e,"class","grid"),h(e,"style",t[3])},m(r,i){d(r,e,i),c&&c.m(e,null),k(e,n),t[11](n);for(let t=0;t<a.length;t+=1)a[t].m(e,null);l=!0,s||(o=_(Tt,"keydown",t[5]),s=!0)},p(t,[s]){if(t[1].length?c?c.p(t,s):(c=_t(t),c.c(),c.m(e,n)):c&&(c.d(1),c=null),7&s){let n;for(r=t[1],n=0;n<r.length;n+=1){const l=Kt(t,r,n);a[n]?(a[n].p(l,s),g(a[n],1)):(a[n]=Nt(l),a[n].c(),g(a[n],1),a[n].m(e,null))}for(V(),n=r.length;n<a.length;n+=1)i(n);O()}(!l||8&s)&&h(e,"style",t[3])},i(t){if(!l){for(let t=0;t<r.length;t+=1)g(a[t]);l=!0}},o(t){a=a.filter(Boolean);for(let e=0;e<a.length;e+=1)v(a[e]);l=!1},d(n){n&&$(e),c&&c.d(),t[11](null),U(a,n),s=!1,o()}}}const Bt={button:{component:class extends c{constructor(t){super(),r(this,t,Pt,jt,a,{props:0,onEnterKey:1})}get onEnterKey(){return this.$$.ctx[1]}}},checkbox:{component:class extends c{constructor(t){super(),r(this,t,Et,bt,a,{props:0,onEnterKey:1})}get onEnterKey(){return this.$$.ctx[1]}}},input:{component:class extends c{constructor(t){super(),r(this,t,gt,mt,a,{props:0,onEnter:3,onLeave:4})}get onEnter(){return this.$$.ctx[3]}get onLeave(){return this.$$.ctx[4]}}},link:{component:class extends c{constructor(t){super(),r(this,t,ft,pt,a,{props:0,onEnterKey:1})}get onEnterKey(){return this.$$.ctx[1]}}},select:{component:class extends c{constructor(t){super(),r(this,t,rt,ct,a,{props:0,onEnterKey:1})}get onEnterKey(){return this.$$.ctx[1]}}},text:{component:class extends c{constructor(t){super(),r(this,t,Y,X,a,{props:0})}},disabled:!0}};function Ct(t,e){const n=[t];for(let l=1;l<=e-1;l++)n.push(t-l),n.push(t+l);return n}function Lt(t,e,n){let l,s,{elements:o=!1}=e,{layout:c=!1}=e,r=[],a=0,i=0,u=0,p=0,f=c[0].length-1,$=c.length-1,h=c[0].splice(1),d=[...c].splice(1).map((t=>t[0])),m=[...c].splice(1).map((t=>[...t].splice(1))),g=0;q((()=>{const{width:t,height:e,marginTop:l}=window.getComputedStyle(s);n(7,i=parseInt(t)),Z.set(i),n(8,u=parseInt(e)),tt.set(u),n(9,p=parseInt(l)),et.set(p),function(){const t=(t,e)=>{const n={top:0,left:0};for(let l=0;l<e;l++)n.top+=d[l];for(let l=0;l<t;l++)n.left+=h[l];return n},e=(t,e)=>{const n={width:0,height:0};for(let l=e[0];l<=e[1];l++)n.height+=d[l];for(let l=t[0];l<=t[1];l++)n.width+=h[l];return n},l=t=>Object.keys(t).map((e=>`${e}: ${t[e]}px;`)).join("");r.forEach(((s,c)=>{const a=t(s.x[0],s.y[0]),h=e(s.x,s.y);s.css=l({"margin-top":a.top*(u+p),"margin-left":a.left*(i+p),width:h.width*(i+p)-p,height:h.height*(u+p)-p}),s.mid={y:Math.floor(s.y[0]+.5*(s.y[1]-s.y[0])),x:Math.floor(s.x[0]+.5*(s.x[1]-s.x[0]))},function(t){const e=Ct(r[t].mid.y,$),l=Ct(r[t].mid.x,f),s=(e,l,s)=>{const c=((t,e)=>Object.keys(o).indexOf(m[e][t]))(e,l);return-1!==c&&c!==t&&!r[c].disabled&&(n(1,r[t][s]=c,r),!0)};t:{let l=r[t].y[1]-r[t].y[0];for(let o=r[t].x[1]+1;o<f;o++){for(let t=0;t<=l;t++)if(n(10,g++,g),e[t]>-1&&e[t]<$&&s(o,e[t],"right"))break t;l+=2}}t:{let l=r[t].y[1]-r[t].y[0];for(let o=r[t].x[0]-1;o>=0;o--){for(let t=0;t<=l;t++)if(n(10,g++,g),e[t]>-1&&e[t]<$&&s(o,e[t],"left"))break t;l+=2}}t:{let e=r[t].x[1]-r[t].x[0];for(let o=r[t].y[0]-1;o>=0;o--){for(let t=0;t<=e;t++)if(n(10,g++,g),l[t]>-1&&l[t]<f&&s(l[t],o,"up"))break t;e+=2}}t:{let e=r[t].x[1]-r[t].x[0];for(let o=r[t].y[1]+1;o<$;o++){for(let t=0;t<=e;t++)if(n(10,g++,g),l[t]>-1&&l[t]<f&&s(l[t],o,"down"))break t;e+=2}}}(c)}))}()}));for(let v=0;v<$;v++)for(let t=0;t<f;t++){const e=m[v][t],n=Object.keys(o).indexOf(e);-1===n?"."!==e&&console.log("no elem found for",e,t,v):r[n]?(r[n].x=[t<r[n].x[0]?t:r[n].x[0],t>r[n].x[1]?t:r[n].x[1]],r[n].y=[v<r[n].y[0]?v:r[n].y[0],v>r[n].y[1]?v:r[n].y[1]]):r[n]={name:e,type:o[e].type,ref:void 0,disabled:o[e].disabled||Bt[o[e].type].disabled,x:[t,t],y:[v,v],css:""}}return t.$$set=t=>{"elements"in t&&n(0,o=t.elements),"layout"in t&&n(6,c=t.layout)},t.$$.update=()=>{1026&t.$$.dirty&&(console.log("total searches:",g),console.log("Ø searches per elem per direction",g/r.length/4)),896&t.$$.dirty&&n(3,l=`\n\t\tgrid-template-areas: "${m.map((t=>[...t].join(" "))).join('" "')}";\n\t\tgrid-template-columns: ${h.map((t=>t*(i+p)-p+"px")).join(" ")};\n\t\tgrid-template-rows: ${d.map((t=>t*(u+p)-p+"px")).join(" ")};\n\t`)},[o,r,a,l,s,function(t){const e={37:"left",38:"up",39:"right",40:"down"};switch(t.keyCode){case 37:case 38:case 39:case 40:t.preventDefault();const l=r[a][e[t.keyCode]];void 0!==l&&(r[a].ref.onLeave&&r[a].ref.onLeave(t),n(2,a=l),r[a].ref.onEnter&&r[a].ref.onEnter(t));break;case 13:t.preventDefault(),r[a].ref.onEnterKey&&r[a].ref.onEnterKey(t)}},c,i,u,p,g,function(t){L[t?"unshift":"push"]((()=>{s=t,n(4,s)}))},function(e,l){t.$$.not_equal(o[l.name],e)&&(o[l.name]=e,n(0,o))},function(t,e,l){L[t?"unshift":"push"]((()=>{e[l].ref=t,n(1,r)}))}]}class St extends c{constructor(t){super(),r(this,t,Lt,Ut,a,{elements:0,layout:6})}}export{St as G};

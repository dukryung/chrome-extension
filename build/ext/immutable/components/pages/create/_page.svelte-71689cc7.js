import{S as O,i as U,s as H,k as h,q as g,l as b,m as $,r as k,h as f,p as d,b as m,C as N,I as S,B as w,a as y,c as B,J as D,K as G,L as q,w as z,x as A,y as I,M as J,f as P,t as T,z as K,e as j,d as F,g as Q}from"../../../chunks/index-51cb6782.js";function R(l){let e,s,n,r;return{c(){e=h("button"),s=g("Next"),this.h()},l(c){e=b(c,"BUTTON",{style:!0});var t=$(e);s=k(t,"Next"),t.forEach(f),this.h()},h(){d(e,"width","30px"),d(e,"height","40px")},m(c,t){m(c,e,t),N(e,s),n||(r=S(e,"click",l[2]),n=!0)},p:w,i:w,o:w,d(c){c&&f(e),n=!1,r()}}}function V(l,e,s){let{step:n}=e;function r(){s(1,n-=1)}const c=()=>{r()};return l.$$set=t=>{"step"in t&&s(1,n=t.step)},[r,n,c]}class W extends O{constructor(e){super(),U(this,e,V,R,H,{step:1})}}function X(l){let e,s,n,r,c,t,a,o,u,_,v,E,C;return{c(){e=h("button"),s=g("Back"),n=y(),r=h("h1"),c=g("New Password"),t=y(),a=h("h1"),o=g("Confirm Password"),u=y(),_=h("button"),v=g("Next"),this.h()},l(i){e=b(i,"BUTTON",{style:!0});var p=$(e);s=k(p,"Back"),p.forEach(f),n=B(i),r=b(i,"H1",{});var x=$(r);c=k(x,"New Password"),x.forEach(f),t=B(i),a=b(i,"H1",{});var L=$(a);o=k(L,"Confirm Password"),L.forEach(f),u=B(i),_=b(i,"BUTTON",{style:!0});var M=$(_);v=k(M,"Next"),M.forEach(f),this.h()},h(){d(e,"width","30px"),d(e,"height","40px"),d(_,"width","30px"),d(_,"height","40px")},m(i,p){m(i,e,p),N(e,s),m(i,n,p),m(i,r,p),N(r,c),m(i,t,p),m(i,a,p),N(a,o),m(i,u,p),m(i,_,p),N(_,v),E||(C=[S(e,"click",l[2]),S(_,"click",l[3])],E=!0)},p:w,i:w,o:w,d(i){i&&f(e),i&&f(n),i&&f(r),i&&f(t),i&&f(a),i&&f(u),i&&f(_),E=!1,D(C)}}}function Y(){history.back()}function Z(l,e,s){let{step:n}=e;function r(){s(1,n+=1)}const c=()=>{Y()},t=()=>{r()};return l.$$set=a=>{"step"in a&&s(1,n=a.step)},[r,n,c,t]}class ee extends O{constructor(e){super(),U(this,e,Z,X,H,{step:1})}}function te(l){let e,s,n,r,c,t,a,o,u,_,v;function E(i){l[2](i)}let C={};return l[0]!==void 0&&(C.step=l[0]),e=new W({props:C}),G.push(()=>q(e,"step",E)),{c(){z(e.$$.fragment),n=y(),r=h("h1"),c=g("Generate Seed Page"),t=y(),a=h("button"),o=g("Next"),this.h()},l(i){A(e.$$.fragment,i),n=B(i),r=b(i,"H1",{});var p=$(r);c=k(p,"Generate Seed Page"),p.forEach(f),t=B(i),a=b(i,"BUTTON",{style:!0});var x=$(a);o=k(x,"Next"),x.forEach(f),this.h()},h(){d(a,"width","30px"),d(a,"height","40px")},m(i,p){I(e,i,p),m(i,n,p),m(i,r,p),N(r,c),m(i,t,p),m(i,a,p),N(a,o),u=!0,_||(v=S(a,"click",l[3]),_=!0)},p(i,[p]){const x={};!s&&p&1&&(s=!0,x.step=i[0],J(()=>s=!1)),e.$set(x)},i(i){u||(P(e.$$.fragment,i),u=!0)},o(i){T(e.$$.fragment,i),u=!1},d(i){K(e,i),i&&f(n),i&&f(r),i&&f(t),i&&f(a),_=!1,v()}}}function ne(l,e,s){let{step:n}=e;function r(){s(0,n+=1)}function c(a){n=a,s(0,n)}const t=()=>{r()};return l.$$set=a=>{"step"in a&&s(0,n=a.step)},[n,r,c,t]}class se extends O{constructor(e){super(),U(this,e,ne,te,H,{step:0})}}function ie(l){let e,s,n,r,c,t,a;return{c(){e=h("h1"),s=g("Complete !!!!!!!!"),n=y(),r=h("button"),c=g("Next"),this.h()},l(o){e=b(o,"H1",{});var u=$(e);s=k(u,"Complete !!!!!!!!"),u.forEach(f),n=B(o),r=b(o,"BUTTON",{style:!0});var _=$(r);c=k(_,"Next"),_.forEach(f),this.h()},h(){d(r,"width","30px"),d(r,"height","40px")},m(o,u){m(o,e,u),N(e,s),m(o,n,u),m(o,r,u),N(r,c),t||(a=S(r,"click",l[0]),t=!0)},p:w,i:w,o:w,d(o){o&&f(e),o&&f(n),o&&f(r),t=!1,a()}}}function re(){location.href="/wallet"}function ae(l){return[()=>{re()}]}class oe extends O{constructor(e){super(),U(this,e,ae,ie,H,{})}}function le(l){let e,s,n;function r(t){l[3](t)}let c={};return l[0]!==void 0&&(c.step=l[0]),e=new oe({props:c}),G.push(()=>q(e,"step",r)),{c(){z(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){I(e,t,a),n=!0},p(t,a){const o={};!s&&a&1&&(s=!0,o.step=t[0],J(()=>s=!1)),e.$set(o)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function ce(l){let e,s,n;function r(t){l[2](t)}let c={};return l[0]!==void 0&&(c.step=l[0]),e=new se({props:c}),G.push(()=>q(e,"step",r)),{c(){z(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){I(e,t,a),n=!0},p(t,a){const o={};!s&&a&1&&(s=!0,o.step=t[0],J(()=>s=!1)),e.$set(o)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function fe(l){let e,s,n;function r(t){l[1](t)}let c={};return l[0]!==void 0&&(c.step=l[0]),e=new ee({props:c}),G.push(()=>q(e,"step",r)),{c(){z(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,a){I(e,t,a),n=!0},p(t,a){const o={};!s&&a&1&&(s=!0,o.step=t[0],J(()=>s=!1)),e.$set(o)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){T(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function ue(l){let e,s,n,r;const c=[fe,ce,le],t=[];function a(o,u){return o[0]===1?0:o[0]===2?1:o[0]===3?2:-1}return~(e=a(l))&&(s=t[e]=c[e](l)),{c(){s&&s.c(),n=j()},l(o){s&&s.l(o),n=j()},m(o,u){~e&&t[e].m(o,u),m(o,n,u),r=!0},p(o,[u]){let _=e;e=a(o),e===_?~e&&t[e].p(o,u):(s&&(Q(),T(t[_],1,1,()=>{t[_]=null}),F()),~e?(s=t[e],s?s.p(o,u):(s=t[e]=c[e](o),s.c()),P(s,1),s.m(n.parentNode,n)):s=null)},i(o){r||(P(s),r=!0)},o(o){T(s),r=!1},d(o){~e&&t[e].d(o),o&&f(n)}}}function pe(l,e,s){let n=1;function r(a){n=a,s(0,n)}function c(a){n=a,s(0,n)}function t(a){n=a,s(0,n)}return[n,r,c,t]}class me extends O{constructor(e){super(),U(this,e,pe,ue,H,{})}}export{me as default};
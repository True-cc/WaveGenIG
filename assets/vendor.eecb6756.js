function E(){}const X=t=>t;function Y(t,e){for(const n in e)t[n]=e[n];return t}function B(t){return t()}function L(){return Object.create(null)}function $(t){t.forEach(B)}function G(t){return typeof t=="function"}function wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Z(t){return Object.keys(t).length===0}function bt(t,e,n,r){if(t){const o=H(t,e,n,r);return t[0](o)}}function H(t,e,n,r){return t[1]&&r?Y(n.ctx.slice(),t[1](r(e))):n.ctx}function Et(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const i=[],s=Math.max(e.dirty.length,o.length);for(let l=0;l<s;l+=1)i[l]=e.dirty[l]|o[l];return i}return e.dirty|o}return e.dirty}function kt(t,e,n,r,o,i){if(o){const s=H(e,n,r,i);t.p(s,o)}}function jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const I=typeof window!="undefined";let tt=I?()=>window.performance.now():()=>Date.now(),O=I?t=>requestAnimationFrame(t):E;const x=new Set;function T(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&O(T)}function et(t){let e;return x.size===0&&O(T),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}function nt(t,e){t.appendChild(e)}function U(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function rt(t){const e=it("style");return st(U(t),e),e}function st(t,e){nt(t.head||t,e)}function At(t,e,n){t.insertBefore(e,n||null)}function ot(t){t.parentNode.removeChild(t)}function Ct(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function it(t){return document.createElement(t)}function St(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function ut(t){return document.createTextNode(t)}function Nt(){return ut(" ")}function Rt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function zt(t){return t===""?null:+t}function ct(t){return Array.from(t.childNodes)}function Dt(t,e){t.value=e==null?"":e}function Mt(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function lt(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}const z=new Set;let k=0;function at(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function J(t,e,n,r,o,i,s,l=0){const f=16.666/r;let u=`{
`;for(let g=0;g<=1;g+=f){const y=e+(n-e)*i(g);u+=g*100+`%{${s(y,1-y)}}
`}const m=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${at(m)}_${l}`,c=U(t);z.add(c);const _=c.__svelte_stylesheet||(c.__svelte_stylesheet=rt(t).sheet),d=c.__svelte_rules||(c.__svelte_rules={});d[a]||(d[a]=!0,_.insertRule(`@keyframes ${a} ${m}`,_.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${r}ms linear ${o}ms 1 both`,k+=1,a}function ft(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),o=n.length-r.length;o&&(t.style.animation=r.join(", "),k-=o,k||_t())}function _t(){O(()=>{k||(z.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),z.clear())})}let j;function A(t){j=t}function K(){if(!j)throw new Error("Function called outside component initialization");return j}function Pt(t){K().$$.on_mount.push(t)}function Ft(t){K().$$.after_update.push(t)}const v=[],Q=[],C=[],D=[],dt=Promise.resolve();let M=!1;function ht(){M||(M=!0,dt.then(V))}function S(t){C.push(t)}function qt(t){D.push(t)}let P=!1;const F=new Set;function V(){if(!P){P=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];A(e),mt(e.$$)}for(A(null),v.length=0;Q.length;)Q.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];F.has(e)||(F.add(e),e())}C.length=0}while(v.length);for(;D.length;)D.pop()();M=!1,P=!1,F.clear()}}function mt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}let w;function gt(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function q(t,e,n){t.dispatchEvent(lt(`${e?"intro":"outro"}${n}`))}const N=new Set;let h;function Bt(){h={r:0,c:[],p:h}}function Lt(){h.r||$(h.c),h=h.p}function pt(t,e){t&&t.i&&(N.delete(t),t.i(e))}function Gt(t,e,n,r){if(t&&t.o){if(N.has(t))return;N.add(t),h.c.push(()=>{N.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const yt={duration:0};function Ht(t,e,n,r){let o=e(t,n),i=r?0:1,s=null,l=null,f=null;function u(){f&&ft(t,f)}function m(c,_){const d=c.b-i;return _*=Math.abs(d),{a:i,b:c.b,d,duration:_,start:c.start,end:c.start+_,group:c.group}}function a(c){const{delay:_=0,duration:d=300,easing:p=X,tick:g=E,css:y}=o||yt,R={start:tt()+_,b:c};c||(R.group=h,h.r+=1),s||l?l=R:(y&&(u(),f=J(t,i,c,d,_,p,y)),c&&g(0,1),s=m(R,d),S(()=>q(t,c,"start")),et(b=>{if(l&&b>l.start&&(s=m(l,d),l=null,q(t,s.b,"start"),y&&(u(),f=J(t,i,s.b,s.duration,0,p,o.css))),s){if(b>=s.end)g(i=s.b,1-i),q(t,s.b,"end"),l||(s.b?u():--s.group.r||$(s.group.c)),s=null;else if(b>=s.start){const W=b-s.start;i=s.a+s.d*p(W/s.duration),g(i,1-i)}}return!!(s||l)}))}return{run(c){G(o)?gt().then(()=>{o=o(),a(c)}):a(c)},end(){u(),s=l=null}}}function It(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function Tt(t){t&&t.c()}function $t(t,e,n,r){const{fragment:o,on_mount:i,on_destroy:s,after_update:l}=t.$$;o&&o.m(e,n),r||S(()=>{const f=i.map(B).filter(G);s?s.push(...f):$(f),t.$$.on_mount=[]}),l.forEach(S)}function xt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){t.$$.dirty[0]===-1&&(v.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ut(t,e,n,r,o,i,s,l=[-1]){const f=j;A(t);const u=t.$$={fragment:null,ctx:null,props:i,update:E,not_equal:o,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:L(),dirty:l,skip_bound:!1,root:e.target||f.$$.root};s&&s(u.root);let m=!1;if(u.ctx=n?n(t,e.props||{},(a,c,..._)=>{const d=_.length?_[0]:c;return u.ctx&&o(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),m&&vt(t,a)),c}):[],u.update(),m=!0,$(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const a=ct(e.target);u.fragment&&u.fragment.l(a),a.forEach(ot)}else u.fragment&&u.fragment.c();e.intro&&pt(t.$$.fragment),$t(t,e.target,e.anchor,e.customElement),V()}A(f)}class Jt{$destroy(){xt(this,1),this.$destroy=E}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!Z(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ut as A,Dt as B,Rt as C,zt as D,S as E,Ht as F,$ as G,Bt as H,Lt as I,Jt as S,Ot as a,At as b,bt as c,Et as d,it as e,Gt as f,jt as g,ot as h,Ut as i,Tt as j,xt as k,St as l,$t as m,Mt as n,nt as o,E as p,Ct as q,Q as r,wt as s,pt as t,kt as u,It as v,Nt as w,qt as x,Pt as y,Ft as z};

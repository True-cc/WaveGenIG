import{S as le,i as ie,s as se,c as _e,e as d,a,b as q,u as ce,g as ge,d as de,t as R,f as D,h as z,j as ae,m as ue,k as re,l as x,n as K,o as m,p as ve,q as ze,r as pe,v as He,w as A,x as Ce,y as Me,z as Le,A as N,B as E,C as V,D as O,E as Ae,F as be,G as me,H as Ve,I as Ie}from"./vendor.eecb6756.js";const Oe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}};Oe();function we(l){var e=document.createElement("canvas").getContext("2d");e.fillStyle=l;var n=e.fillStyle.substring(1,3),i=e.fillStyle.substring(3,5),t=e.fillStyle.substring(5,7),s=e.fillStyle.substring(7,9)||"FF";return new Be(parseInt(n,16),parseInt(i,16),parseInt(t,16),parseInt(s,16)/255)}class Be{constructor(e,n,i,t=1){this.r=e,this.g=n,this.b=i,this.a=t}getLuminance(){var e=this.r/255,n=this.g/255,i=this.b/255;return .2126*e+.7152*n+.0722*i}toString(){return`rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`}toRGBA(){return this.toString()}toHex(){return`#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(16)}`}toHSL(){var e=this.r/255,n=this.g/255,i=this.b/255,t=Math.max(e,n,i),s=Math.min(e,n,i),r=0,h=0,f=(t+s)/2,p=t-s;if(t===s)r=h=0;else{switch(h=f>.5?p/(2-t-s):p/(t+s),t){case e:r=(n-i)/p+(n<i?6:0);break;case n:r=(i-e)/p+2;break;case i:r=(e-n)/p+4;break}r/=6}return`hsl(${r*360}, ${h*100}%, ${f*100}%)`}}function Pe(l){let e,n;const i=l[3].default,t=_e(i,l,l[2],null);return{c(){e=d("span"),t&&t.c(),a(e,"style",l[0])},m(s,r){q(s,e,r),t&&t.m(e,null),n=!0},p(s,[r]){t&&t.p&&(!n||r&4)&&ce(t,i,s,s[2],n?de(i,s[2],r,null):ge(s[2]),null),(!n||r&1)&&a(e,"style",s[0])},i(s){n||(R(t,s),n=!0)},o(s){D(t,s),n=!1},d(s){s&&z(e),t&&t.d(s)}}}function Fe(l,e,n){let i,{$$slots:t={},$$scope:s}=e,{style:r}=e;return l.$$set=h=>{"style"in h&&n(1,r=h.style),"$$scope"in h&&n(2,s=h.$$scope)},l.$$.update=()=>{l.$$.dirty&2&&n(0,i=Object.entries(r).map(([h,f])=>`--${h}:${f}`).join(";"))},[i,r,s,t]}class Ne extends le{constructor(e){super();ie(this,e,Fe,Pe,se,{style:1})}}function Te(l){let e,n;const i=l[3].default,t=_e(i,l,l[4],null);return{c(){e=d("div"),t&&t.c(),a(e,"class","svelte-1gvf6bv")},m(s,r){q(s,e,r),t&&t.m(e,null),n=!0},p(s,r){t&&t.p&&(!n||r&16)&&ce(t,i,s,s[4],n?de(i,s[4],r,null):ge(s[4]),null)},i(s){n||(R(t,s),n=!0)},o(s){D(t,s),n=!1},d(s){s&&z(e),t&&t.d(s)}}}function Ue(l){let e,n;return e=new Ne({props:{style:{bg:l[0],fg:l[1],minH:l[2]},$$slots:{default:[Te]},$$scope:{ctx:l}}}),{c(){ae(e.$$.fragment)},m(i,t){ue(e,i,t),n=!0},p(i,[t]){const s={};t&7&&(s.style={bg:i[0],fg:i[1],minH:i[2]}),t&16&&(s.$$scope={dirty:t,ctx:i}),e.$set(s)},i(i){n||(R(e.$$.fragment,i),n=!0)},o(i){D(e.$$.fragment,i),n=!1},d(i){re(e,i)}}}function Re(l,e,n){let{$$slots:i={},$$scope:t}=e,{bg:s}=e,{fg:r}=e,{minH:h}=e;return l.$$set=f=>{"bg"in f&&n(0,s=f.bg),"fg"in f&&n(1,r=f.fg),"minH"in f&&n(2,h=f.minH),"$$scope"in f&&n(4,t=f.$$scope)},[s,r,h,i,t]}class ke extends le{constructor(e){super();ie(this,e,Re,Ue,se,{bg:0,fg:1,minH:2})}}function De(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){var e=Math.random()*16|0,n=l=="x"?e:e&3|8;return n.toString(16)})}function ye(l,e,n){const i=l.slice();return i[17]=e[n],i[19]=n,i}function Se(l){let e,n,i;return{c(){e=x("animate"),a(e,"attributeName","d"),a(e,"values",n=""+(l[17].start+";"+l[17].end)),a(e,"dur",i=""+((l[7]+Math.random()*l[8]-l[8]/2)*l[6]+"s")),a(e,"keyTimes","0;1"),a(e,"repeatCount","indefinite")},m(t,s){q(t,e,s)},p(t,s){s&1024&&n!==(n=""+(t[17].start+";"+t[17].end))&&a(e,"values",n),s&448&&i!==(i=""+((t[7]+Math.random()*t[8]-t[8]/2)*t[6]+"s"))&&a(e,"dur",i)},d(t){t&&z(e)}}}function Ee(l){let e,n,i=l[3]&&Se(l);return{c(){e=x("path"),i&&i.c(),K(e,"opacity",l[19]==l[5]-1?1:l[9]),a(e,"fill",l[2]),a(e,"d",n=l[17].start)},m(t,s){q(t,e,s),i&&i.m(e,null)},p(t,s){t[3]?i?i.p(t,s):(i=Se(t),i.c(),i.m(e,null)):i&&(i.d(1),i=null),s&544&&K(e,"opacity",t[19]==t[5]-1?1:t[9]),s&4&&a(e,"fill",t[2]),s&1024&&n!==(n=t[17].start)&&a(e,"d",n)},d(t){t&&z(e),i&&i.d()}}}function Ge(l){let e,n,i,t,s,r,h=l[10],f=[];for(let p=0;p<h.length;p+=1)f[p]=Ee(ye(l,h,p));return{c(){e=d("div"),n=x("svg"),i=x("pattern"),t=x("rect");for(let p=0;p<f.length;p+=1)f[p].c();r=x("rect"),a(t,"x","0"),a(t,"y","0"),a(t,"width",l[11]),a(t,"height",T),a(t,"fill",l[1]),a(i,"id",l[12]),a(i,"viewBox",s="0 0 "+l[11]+" "+T),a(i,"width",l[11]),a(i,"height",T),a(i,"patternUnits","userSpaceOnUse"),a(r,"fill","url(#"+l[12]+")"),a(r,"x","0"),a(r,"y","0"),a(r,"width","400"),a(r,"height",T),a(n,"viewBox","0 0 1 1"),a(n,"xmlns","http://www.w3.org/2000/svg"),a(n,"overflow","visible"),a(n,"height","100%"),K(e,"height",l[4]),K(e,"width","100%"),K(e,"display","block"),K(e,"overflow","hidden")},m(p,u){q(p,e,u),m(e,n),m(n,i),m(i,t);for(let o=0;o<f.length;o+=1)f[o].m(i,null);m(n,r),l[16](e)},p(p,[u]){if(u&2048&&a(t,"width",p[11]),u&2&&a(t,"fill",p[1]),u&2028){h=p[10];let o;for(o=0;o<h.length;o+=1){const v=ye(p,h,o);f[o]?f[o].p(v,u):(f[o]=Ee(v),f[o].c(),f[o].m(i,null))}for(;o<f.length;o+=1)f[o].d(1);f.length=h.length}u&2048&&s!==(s="0 0 "+p[11]+" "+T)&&a(i,"viewBox",s),u&2048&&a(i,"width",p[11]),u&16&&K(e,"height",p[4])},i:ve,o:ve,d(p){p&&z(e),ze(f,p),l[16](null)}}}var T=1;function We(l,e,n){let i;const t=De();let{from:s}=e,{to:r}=e,{animated:h=!0}=e,{height:f}=e,{amount:p=4}=e,{seperation:u=.1}=e,{ratio:o=5}=e,{speed:v=4}=e,{speedVariation:g=3}=e,{opacity:w=.5}=e,{divElement:H}=e;var k=[];const b=()=>k,y=()=>{n(10,k=[]);const c=i/2,L=i/4,U=T-u*(p-1);for(let P=0;P<p;P++){const G=T-(p-P-1)*u,C=-i*Math.random(),W=`${`
      c ${L},0 ${L},${-U} ${c},${-U}
      c ${L},0 ${L}, ${U} ${c}, ${U}
      `.repeat(3)}
      L ${i*2},${T}
      L 0,${T}
      z`;k.push({start:`
      M${C},${G}
      ${W}`.replaceAll(`
`,""),end:`
      M${C-i},${G}
      ${W}`.replaceAll(`
`,"")})}};function B(c){pe[c?"unshift":"push"](()=>{H=c,n(0,H)})}return l.$$set=c=>{"from"in c&&n(1,s=c.from),"to"in c&&n(2,r=c.to),"animated"in c&&n(3,h=c.animated),"height"in c&&n(4,f=c.height),"amount"in c&&n(5,p=c.amount),"seperation"in c&&n(13,u=c.seperation),"ratio"in c&&n(6,o=c.ratio),"speed"in c&&n(7,v=c.speed),"speedVariation"in c&&n(8,g=c.speedVariation),"opacity"in c&&n(9,w=c.opacity),"divElement"in c&&n(0,H=c.divElement)},l.$$.update=()=>{l.$$.dirty&64&&n(11,i=T*o*2),l.$$.dirty&8288&&y()},[H,s,r,h,f,p,o,v,g,w,k,i,t,u,b,y,B]}class Ke extends le{constructor(e){super();ie(this,e,We,Ge,se,{from:1,to:2,animated:3,height:4,amount:5,seperation:13,ratio:6,speed:7,speedVariation:8,opacity:9,divElement:0,getPaths:14,refresh:15})}get getPaths(){return this.$$.ctx[14]}get refresh(){return this.$$.ctx[15]}}function je(l){let e,n,i,t,s,r,h,f,p,u,o,v,g,w,H,k;return{c(){e=d("p"),n=d("label"),i=N(`Speed:
				`),t=d("input"),h=A(),f=d("label"),p=N(`Speed Variation:
				`),u=d("input"),a(t,"type","number"),a(t,"min",s=0),a(t,"step",r=.05),a(t,"class","svelte-wlrjzq"),a(u,"type","number"),a(u,"min",o=0),a(u,"step",v=.05),a(u,"class","svelte-wlrjzq")},m(b,y){q(b,e,y),m(e,n),m(n,i),m(n,t),E(t,l[8]),m(e,h),m(e,f),m(f,p),m(f,u),E(u,l[9]),w=!0,H||(k=[V(t,"input",l[25]),V(u,"input",l[26])],H=!0)},p(b,y){y[0]&256&&O(t.value)!==b[8]&&E(t,b[8]),y[0]&512&&O(u.value)!==b[9]&&E(u,b[9])},i(b){w||(Ae(()=>{g||(g=be(e,qe,{duration:200},!0)),g.run(1)}),w=!0)},o(b){g||(g=be(e,qe,{duration:200},!1)),g.run(0),w=!1},d(b){b&&z(e),b&&g&&g.end(),H=!1,me(k)}}}function Je(l){let e,n,i,t,s,r,h,f,p,u,o,v,g,w,H,k,b,y,B,c,L,U,P,G,C,W,J,te,M,Q,X,ne,Y,I,F,fe,ee,Z,$,oe,he,j=l[2]&&je(l);return{c(){e=d("p"),n=d("label"),i=N(`From:
			`),t=d("input"),s=A(),r=d("label"),h=N(`To:
			`),f=d("input"),p=A(),u=d("label"),o=N(`Opacity:
			`),v=d("input"),g=A(),w=d("label"),H=N(`Animated:
			`),k=d("input"),b=A(),y=d("p"),B=d("label"),c=N(`Height:
			`),L=d("input"),U=A(),P=d("label"),G=N(`Amount:
			`),C=d("input"),W=A(),J=d("label"),te=N(`Seperation:
			`),M=d("input"),ne=A(),Y=d("label"),I=N(`Ratio:
			`),F=d("input"),fe=A(),j&&j.c(),ee=A(),Z=d("button"),Z.textContent="Refresh",a(t,"type","color"),a(t,"class","svelte-wlrjzq"),a(f,"type","color"),a(f,"class","svelte-wlrjzq"),a(v,"type","number"),a(v,"min",0),a(v,"max",1),a(v,"step",.05),a(v,"class","svelte-wlrjzq"),a(k,"type","checkbox"),a(L,"type","string"),a(L,"class","svelte-wlrjzq"),a(C,"type","number"),a(C,"min",1),a(C,"step",1),a(C,"class","svelte-wlrjzq"),a(M,"type","number"),a(M,"min",0),a(M,"max",Q=Math.min(1,1/(l[5]-1))),a(M,"step",X=1/32/(l[5]-1)),a(M,"class","svelte-wlrjzq"),a(F,"type","number"),a(F,"min",.25),a(F,"step",.25),a(F,"class","svelte-wlrjzq"),a(Z,"class","svelte-wlrjzq")},m(_,S){q(_,e,S),m(e,n),m(n,i),m(n,t),E(t,l[0]),m(e,s),m(e,r),m(r,h),m(r,f),E(f,l[1]),m(e,p),m(e,u),m(u,o),m(u,v),E(v,l[10]),m(e,g),m(e,w),m(w,H),m(w,k),k.checked=l[2],q(_,b,S),q(_,y,S),m(y,B),m(B,c),m(B,L),E(L,l[4]),m(y,U),m(y,P),m(P,G),m(P,C),E(C,l[5]),m(y,W),m(y,J),m(J,te),m(J,M),E(M,l[6]),m(y,ne),m(y,Y),m(Y,I),m(Y,F),E(F,l[7]),q(_,fe,S),j&&j.m(_,S),q(_,ee,S),q(_,Z,S),$=!0,oe||(he=[V(t,"input",l[17]),V(f,"input",l[18]),V(v,"input",l[19]),V(k,"change",l[20]),V(L,"input",l[21]),V(C,"input",l[22]),V(M,"input",l[23]),V(F,"input",l[24]),V(Z,"click",l[15])],oe=!0)},p(_,S){S[0]&1&&E(t,_[0]),S[0]&2&&E(f,_[1]),S[0]&1024&&O(v.value)!==_[10]&&E(v,_[10]),S[0]&4&&(k.checked=_[2]),S[0]&16&&E(L,_[4]),S[0]&32&&O(C.value)!==_[5]&&E(C,_[5]),(!$||S[0]&32&&Q!==(Q=Math.min(1,1/(_[5]-1))))&&a(M,"max",Q),(!$||S[0]&32&&X!==(X=1/32/(_[5]-1)))&&a(M,"step",X),S[0]&64&&O(M.value)!==_[6]&&E(M,_[6]),S[0]&128&&O(F.value)!==_[7]&&E(F,_[7]),_[2]?j?(j.p(_,S),S[0]&4&&R(j,1)):(j=je(_),j.c(),R(j,1),j.m(ee.parentNode,ee)):j&&(Ve(),D(j,1,1,()=>{j=null}),Ie())},i(_){$||(R(j),$=!0)},o(_){D(j),$=!1},d(_){_&&z(e),_&&z(b),_&&z(y),_&&z(fe),j&&j.d(_),_&&z(ee),_&&z(Z),oe=!1,me(he)}}}function Qe(l){let e,n,i,t,s,r,h;return{c(){e=d("p"),n=d("button"),n.textContent="Copy",i=A(),t=d("p"),s=d("textarea"),a(n,"class","svelte-wlrjzq"),a(s,"class","svelte-wlrjzq")},m(f,p){q(f,e,p),m(e,n),q(f,i,p),q(f,t,p),m(t,s),E(s,l[12]),r||(h=[V(n,"click",l[16]),V(s,"input",l[29])],r=!0)},p(f,p){p[0]&4096&&E(s,f[12])},d(f){f&&z(e),f&&z(i),f&&z(t),r=!1,me(h)}}}function Xe(l){let e,n,i,t,s,r,h;e=new ke({props:{bg:l[0],fg:l[14],minH:"40vh",$$slots:{default:[Je]},$$scope:{ctx:l}}});function f(u){l[28](u)}let p={from:l[0],to:l[1],animated:l[2],height:l[4],amount:l[5],seperation:l[6],ratio:l[7],speed:l[8],speedVariation:l[9],opacity:l[10]};return l[11]!==void 0&&(p.divElement=l[11]),i=new Ke({props:p}),l[27](i),pe.push(()=>He(i,"divElement",f)),r=new ke({props:{bg:l[1],fg:l[13],minH:"60vh",$$slots:{default:[Qe]},$$scope:{ctx:l}}}),{c(){ae(e.$$.fragment),n=A(),ae(i.$$.fragment),s=A(),ae(r.$$.fragment)},m(u,o){ue(e,u,o),q(u,n,o),ue(i,u,o),q(u,s,o),ue(r,u,o),h=!0},p(u,o){const v={};o[0]&1&&(v.bg=u[0]),o[0]&16384&&(v.fg=u[14]),o[0]&2039|o[1]&1&&(v.$$scope={dirty:o,ctx:u}),e.$set(v);const g={};o[0]&1&&(g.from=u[0]),o[0]&2&&(g.to=u[1]),o[0]&4&&(g.animated=u[2]),o[0]&16&&(g.height=u[4]),o[0]&32&&(g.amount=u[5]),o[0]&64&&(g.seperation=u[6]),o[0]&128&&(g.ratio=u[7]),o[0]&256&&(g.speed=u[8]),o[0]&512&&(g.speedVariation=u[9]),o[0]&1024&&(g.opacity=u[10]),!t&&o[0]&2048&&(t=!0,g.divElement=u[11],Ce(()=>t=!1)),i.$set(g);const w={};o[0]&2&&(w.bg=u[1]),o[0]&8192&&(w.fg=u[13]),o[0]&4096|o[1]&1&&(w.$$scope={dirty:o,ctx:u}),r.$set(w)},i(u){h||(R(e.$$.fragment,u),R(i.$$.fragment,u),R(r.$$.fragment,u),h=!0)},o(u){D(e.$$.fragment,u),D(i.$$.fragment,u),D(r.$$.fragment,u),h=!1},d(u){re(e,u),u&&z(n),l[27](null),re(i,u),u&&z(s),re(r,u)}}}function qe(l,{duration:e}){return{duration:e,css:n=>`
					max-height: ${n*2}em;
					opacity: ${n};
					overflow: hidden;
				`}}function Ye(l,e,n){let i,t;var s=!0,r,h="#ffffff",f="#000000",p="5rem",u=4,o=.05,v=5,g=4,w=3,H=.4,k,b="";Me(()=>B()),Le(()=>B());function y(){r.refresh()}function B(){return n(12,b=k&&k.outerHTML.replace(/\s+/g," ").trim())}function c(){var I=document.createElement("textarea");I.value=B(),document.body.appendChild(I),I.select(),document.execCommand("copy"),document.body.removeChild(I)}function L(){h=this.value,n(0,h)}function U(){f=this.value,n(1,f)}function P(){H=O(this.value),n(10,H)}function G(){s=this.checked,n(2,s)}function C(){p=this.value,n(4,p)}function W(){u=O(this.value),n(5,u)}function J(){o=O(this.value),n(6,o)}function te(){v=O(this.value),n(7,v)}function M(){g=O(this.value),n(8,g)}function Q(){w=O(this.value),n(9,w)}function X(I){pe[I?"unshift":"push"](()=>{r=I,n(3,r)})}function ne(I){k=I,n(11,k)}function Y(){b=this.value,n(12,b)}return l.$$.update=()=>{l.$$.dirty[0]&1&&n(14,i=we(h).getLuminance()>.5?"black":"white"),l.$$.dirty[0]&2&&n(13,t=we(f).getLuminance()>.5?"black":"white")},[h,f,s,r,p,u,o,v,g,w,H,k,b,t,i,y,c,L,U,P,G,C,W,J,te,M,Q,X,ne,Y]}class Ze extends le{constructor(e){super();ie(this,e,Ye,Xe,se,{},null,[-1,-1])}}new Ze({target:document.getElementById("app")});

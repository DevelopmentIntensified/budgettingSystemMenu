import{S as z,i as G,s as J,e as i,a as C,c as u,b as D,g as S,d as E,f as _,h as o,k as F,l as c,n as j,o as K,t as Q,p as W}from"./index-BgcfM5eQ.js";import{e as O}from"./each-D6YF6ztN.js";import{h as X}from"./index-Fr1wWxHn.js";import"./lifecycle-BSK-R06m.js";import"./_commonjsHelpers-BosuxZz1.js";function U(p,e,s){const h=p.slice();return h[1]=e[s],h}function B(p){let e,s,h,g=p[1]+"",d;return{c(){e=i("div"),s=i("input"),h=C(),d=Q(g),this.h()},l(n){e=u(n,"DIV",{class:!0});var a=D(e);s=u(a,"INPUT",{class:!0,type:!0}),h=E(a),d=W(a,g),a.forEach(_),this.h()},h(){o(s,"class","float-left h-6 w-6"),o(s,"type","checkbox"),o(e,"class","block p-2 text-center text-xl border border-gray-700")},m(n,a){F(n,e,a),c(e,s),c(e,h),c(e,d)},p:j,d(n){n&&_(e)}}}function Y(p){let e,s,h='<h1 class="font-bold">Delete Assumption</h1>',g,d,n,a,m,L="Search for Assumption Name",A,y,M,x,T,v,N="Delete",w=O(p[0]),r=[];for(let l=0;l<w.length;l+=1)r[l]=B(U(p,w,l));return{c(){e=i("div"),s=i("div"),s.innerHTML=h,g=C(),d=i("div"),n=i("form"),a=i("div"),m=i("label"),m.textContent=L,A=C(),y=i("input"),M=C(),x=i("div");for(let l=0;l<r.length;l+=1)r[l].c();T=C(),v=i("button"),v.textContent=N,this.h()},l(l){e=u(l,"DIV",{class:!0});var f=D(e);s=u(f,"DIV",{class:!0,"data-svelte-h":!0}),S(s)!=="svelte-1msmca9"&&(s.innerHTML=h),g=E(f),d=u(f,"DIV",{class:!0});var t=D(d);n=u(t,"FORM",{action:!0,class:!0});var b=D(n);a=u(b,"DIV",{class:!0});var k=D(a);m=u(k,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),S(m)!=="svelte-12n5wdi"&&(m.textContent=L),A=E(k),y=u(k,"INPUT",{class:!0,type:!0,placeholder:!0}),M=E(k),x=u(k,"DIV",{class:!0});var P=D(x);for(let V=0;V<r.length;V+=1)r[V].l(P);P.forEach(_),k.forEach(_),T=E(b),v=u(b,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),S(v)!=="svelte-1ojbpex"&&(v.textContent=N),b.forEach(_),t.forEach(_),f.forEach(_),this.h()},h(){o(s,"class","w-full text-center text-2xl bg-green-700 p-3 "),o(m,"class","block mb-2 text-xl"),o(m,"for","Assumption-name"),o(y,"class","w-full p-3 border rounded"),o(y,"type","text"),o(y,"placeholder","Search"),o(x,"class","scrollbar w-full h-56 overflow-auto p-3 svelte-e5w2vr"),o(a,"class","justify-normal space-y-3"),o(v,"type","submit"),o(v,"class","text-center text-lg hover:bg-orange-700 bg-orange-600 w-full h-10 text-white font-bold py-1 px-2 mb-0 block mt-auto justify-end"),o(n,"action",""),o(n,"class","w-full h-96 text-center flex justify-between flex-col"),o(d,"class","w-full p-7 h-full"),o(e,"class","w-1/2 bg-gray-800 text-white min-h-96 rounded")},m(l,f){F(l,e,f),c(e,s),c(e,g),c(e,d),c(d,n),c(n,a),c(a,m),c(a,A),c(a,y),c(a,M),c(a,x);for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(x,null);c(n,T),c(n,v)},p(l,[f]){if(f&1){w=O(l[0]);let t;for(t=0;t<w.length;t+=1){const b=U(l,w,t);r[t]?r[t].p(b,f):(r[t]=B(b),r[t].c(),r[t].m(x,null))}for(;t<r.length;t+=1)r[t].d(1);r.length=w.length}},i:j,o:j,d(l){l&&_(e),K(r,l)}}}function Z(p){let e=[];for(let s=0;s<10;s++)e.push(X());return[e]}class R extends z{constructor(e){super(),G(this,e,Z,Y,J,{})}}R.__docgen={version:3,name:"Menu.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const re={title:"Assumptions/Delete Assumption Menu",component:R,tags:["autodocs"]},I={};var H,$,q;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:"{}",...(q=($=I.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const oe=["Primary"];export{I as Primary,oe as __namedExportsOrder,re as default};

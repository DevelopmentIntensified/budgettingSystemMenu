import{S as fe,i as me,s as be,e as r,a as n,c as s,b as k,g as u,d as o,f as g,h as e,j as he,k as ve,l as t,n as W}from"./index-BgcfM5eQ.js";import"./lifecycle-BSK-R06m.js";function ye(xe){let c,_,X='<h1 class="font-bold">New Scenario</h1>',D,E,d,l,p,Z="Scenario Name",A,L,U,x,$="Scenario Template",V,f,i,ee="Template 1",O,j,H,m,te="Years",z,C,R,b,le="Currently Employed",Y,T,q,h,ae="Employee Salaries",F,I,G,v,re="Current Tax Rate",J,N,K,w,se='<label class="p-3 mb-2 text-xl" for="balance">Year to Date Balance</label> <input class="w-1/3 p-3 border rounded" type="number" placeholder=""/>',Q,y,ne="Create";return{c(){c=r("div"),_=r("div"),_.innerHTML=X,D=n(),E=r("div"),d=r("form"),l=r("div"),p=r("label"),p.textContent=Z,A=n(),L=r("input"),U=n(),x=r("label"),x.textContent=$,V=n(),f=r("select"),i=r("option"),i.textContent=ee,O=n(),j=r("div"),H=n(),m=r("label"),m.textContent=te,z=n(),C=r("input"),R=n(),b=r("label"),b.textContent=le,Y=n(),T=r("input"),q=n(),h=r("label"),h.textContent=ae,F=n(),I=r("input"),G=n(),v=r("label"),v.textContent=re,J=n(),N=r("input"),K=n(),w=r("div"),w.innerHTML=se,Q=n(),y=r("button"),y.textContent=ne,this.h()},l(B){c=s(B,"DIV",{class:!0});var S=k(c);_=s(S,"DIV",{class:!0,"data-svelte-h":!0}),u(_)!=="svelte-141w52d"&&(_.innerHTML=X),D=o(S),E=s(S,"DIV",{class:!0});var oe=k(E);d=s(oe,"FORM",{action:!0,class:!0});var M=k(d);l=s(M,"DIV",{class:!0});var a=k(l);p=s(a,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),u(p)!=="svelte-1uuza73"&&(p.textContent=Z),A=o(a),L=s(a,"INPUT",{class:!0,type:!0,placeholder:!0}),U=o(a),x=s(a,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),u(x)!=="svelte-17h9t8z"&&(x.textContent=$),V=o(a),f=s(a,"SELECT",{class:!0,name:!0,id:!0});var ce=k(f);i=s(ce,"OPTION",{"data-svelte-h":!0}),u(i)!=="svelte-1jy1wwm"&&(i.textContent=ee),ce.forEach(g),O=o(a),j=s(a,"DIV",{class:!0}),k(j).forEach(g),H=o(a),m=s(a,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),u(m)!=="svelte-10i0miy"&&(m.textContent=te),z=o(a),C=s(a,"INPUT",{class:!0,type:!0,placeholder:!0}),R=o(a),b=s(a,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),u(b)!=="svelte-zgtis6"&&(b.textContent=le),Y=o(a),T=s(a,"INPUT",{class:!0,type:!0,placeholder:!0}),q=o(a),h=s(a,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),u(h)!=="svelte-1hjga09"&&(h.textContent=ae),F=o(a),I=s(a,"INPUT",{class:!0,type:!0,placeholder:!0}),G=o(a),v=s(a,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),u(v)!=="svelte-33et5k"&&(v.textContent=re),J=o(a),N=s(a,"INPUT",{class:!0,type:!0,placeholder:!0}),K=o(a),w=s(a,"DIV",{class:!0,"data-svelte-h":!0}),u(w)!=="svelte-1fgdw01"&&(w.innerHTML=se),a.forEach(g),Q=o(M),y=s(M,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),u(y)!=="svelte-77jrcp"&&(y.textContent=ne),M.forEach(g),oe.forEach(g),S.forEach(g),this.h()},h(){e(_,"class","w-full text-center text-2xl bg-green-700 p-3 "),e(p,"class","block mb-2 text-xl"),e(p,"for","scenario-name"),e(L,"class","w-full p-3 border rounded"),e(L,"type","text"),e(L,"placeholder","Scenario Name"),e(x,"class","block mb-2 text-xl"),e(x,"for","scenario-template"),i.__value="1",he(i,i.__value),e(f,"class","w-full p-3 border rounded"),e(f,"name","scenario-template"),e(f,"id","scenario-template"),e(j,"class","w-full h-7"),e(m,"class","block p-3 mb-2 text-xl"),e(m,"for","years"),e(C,"class","w-1/4 p-3 border rounded"),e(C,"type","number"),C.value="3",e(C,"placeholder","3"),e(b,"class","block p-3 mb-2 text-xl"),e(b,"for","employees"),e(T,"class","w-1/4 p-3 border rounded"),e(T,"type","number"),e(T,"placeholder",""),e(h,"class","block p-2 text-xl"),e(h,"for","salary"),e(I,"class","w-1/4 p-3 border rounded"),e(I,"type","number"),e(I,"placeholder",""),e(v,"class","block p-3 mb-2 text-xl"),e(v,"for","tax-rate"),e(N,"class","w-1/4 p-3 border rounded"),e(N,"type","number"),e(N,"placeholder",""),e(w,"class","justify-normal w-full text-left text-nowrap"),e(l,"class","justify-between space-y-3 flex-wrap flex"),e(y,"type","submit"),e(y,"class","text-center text-lg hover:bg-orange-700 bg-orange-500 w-full h-10 text-white font-bold py-1 px-2 mb-0 block mt-auto justify-end"),e(d,"action",""),e(d,"class","w-full h-[500px] text-center flex justify-between flex-col"),e(E,"class","w-full p-7 h-full"),e(c,"class","w-full bg-gray-800 text-white min-h-[600px] rounded")},m(B,S){ve(B,c,S),t(c,_),t(c,D),t(c,E),t(E,d),t(d,l),t(l,p),t(l,A),t(l,L),t(l,U),t(l,x),t(l,V),t(l,f),t(f,i),t(l,O),t(l,j),t(l,H),t(l,m),t(l,z),t(l,C),t(l,R),t(l,b),t(l,Y),t(l,T),t(l,q),t(l,h),t(l,F),t(l,I),t(l,G),t(l,v),t(l,J),t(l,N),t(l,K),t(l,w),t(d,Q),t(d,y)},p:W,i:W,o:W,d(B){B&&g(c)}}}class pe extends fe{constructor(c){super(),me(this,c,null,ye,be,{})}}pe.__docgen={version:3,name:"Menu.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const we={title:"Scenario/New Scenario Menu",component:pe,tags:["autodocs"]},P={};var ue,de,ie;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:"{}",...(ie=(de=P.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};const ge=["Primary"];export{P as Primary,ge as __namedExportsOrder,we as default};
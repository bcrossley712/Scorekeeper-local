import{_ as p,d as u,l as g,b,A as c,s as h,k as v,c as s,a as e,F as n,r as f,g as l,w as i,i as r,o,t as w,p as x,m as y,j as S}from"./index.35f621a1.js";const k={setup(){return u(()=>{g()}),{games:b(()=>c.games),goTo(a){c.activeGame=a,h(),v.push({name:"Game",params:{id:a.id}})}}}},A=a=>(x("data-v-ba4589b8"),a=a(),y(),a),G={class:"container-fluid"},C=A(()=>e("div",{class:"row"},[e("div",{class:"col-12 p-2 d-flex justify-content-between"},[e("h3",null,"What game will we play?!"),e("button",{class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#add-game"}," Add Game ")])],-1)),F={class:"row px-2"},I={class:"text-center h-100"},N=["onClick","src","alt"],B=S("Add New Game");function M(a,T,V,d,$,j){const _=r("AddGameForm"),m=r("Modal");return o(),s(n,null,[e("div",G,[C,e("div",F,[(o(!0),s(n,null,f(d.games,t=>(o(),s("div",{class:"col-12 col-md-2 p-2",key:t.id},[e("div",I,[e("h5",null,w(t.title),1),e("img",{onClick:H=>d.goTo(t),class:"img-cover selectable",src:t.image,alt:t.title+" image"},null,8,N)])]))),128))])]),l(m,{id:"add-game"},{title:i(()=>[B]),body:i(()=>[l(_)]),_:1})],64)}const D=p(k,[["render",M],["__scopeId","data-v-ba4589b8"]]);export{D as default};

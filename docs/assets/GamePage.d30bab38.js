import{_ as S,d as f,l as b,A as t,e as m,f as w,P as G,c as i,a as e,t as _,F as u,r as x,g as d,w as g,u as k,h as y,i as c,o as r,j as C}from"./index.35f621a1.js";import{s as E}from"./SessionsService.e8adb3a4.js";const F={setup(){const l=k(),a=y();return f(()=>{b(),t.activeGame=t.games.find(s=>s.id==l.params.id)}),{sessions:m(()=>t.sessions.filter(s=>s.gameId==t.activeGame.id)),game:m(()=>t.activeGame),goTo(s){a.push({name:"Session",params:{id:s}})},newSession(){try{const s={gameId:t.activeGame.id},o=E.addSession(s);a.push({name:"Session",params:{id:o.id}})}catch(s){w.error(s),G.toast(s.message,"error")}}}}},N={class:"container-fluid"},B={class:"row"},M={class:"col-12 p-2 d-flex justify-content-between"},P={class:"text-center"},R=e("i",{class:"mdi mdi-pencil selectable text-warning me-4",title:"Edit Game","data-bs-toggle":"modal","data-bs-target":"#edit-game"},null,-1),T={class:"row"},V={class:"col-12 col-md-6"},j=e("h6",null,"Game Rules",-1),A={class:"col-12 col-md-6 bg-dark p-3"},I=e("h4",null,"Game History",-1),D=["onClick"],H=C("Edit Game?");function L(l,a,s,o,q,z){const p=c("Session"),h=c("EditGameForm"),v=c("Modal");return r(),i(u,null,[e("div",N,[e("div",B,[e("div",M,[e("button",{class:"btn btn-primary",onClick:a[0]||(a[0]=(...n)=>o.newSession&&o.newSession(...n))},"New Session"),e("div",P,[e("h2",null,_(o.game.title),1)]),R])]),e("div",T,[e("div",V,[j,e("p",null,_(o.game.scoring),1)]),e("div",A,[I,(r(!0),i(u,null,x(o.sessions,n=>(r(),i("div",{onClick:J=>o.goTo(n.id),class:"rounded bg-white text-dark p-1 m-2 selectable",key:n.id},[d(p,{session:n},null,8,["session"])],8,D))),128))])])]),d(v,{id:"edit-game"},{title:g(()=>[H]),body:g(()=>[d(h)]),_:1})],64)}const Q=S(F,[["render",L]]);export{Q as default};
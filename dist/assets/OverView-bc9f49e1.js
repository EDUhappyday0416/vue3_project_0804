import{u as S,L as C}from"./Loading-068b3ee2.js";import{_ as u,o as i,b as n,d as t,t as _,h as I,p as w,g as T,s as L,r as m,F as g,e as y,i as A,f as $,j as D,k,c as B,n as M,l as x,m as N}from"./index-f06ea9c3.js";const l=e=>(w("data-v-19a88a64"),e=e(),T(),e),V={key:0,class:"modal"},H={class:"modal__info"},P={class:"modal__top"},q={class:"modal__top__info"},j=l(()=>t("div",{class:"modal__top__line"},null,-1)),z={class:"modal__top__flight"},E={class:"modal__top__flight__left"},F=l(()=>t("div",null,"to",-1)),G={class:"modal__top__flight__right"},O=l(()=>t("div",{class:"modal__top__line"},null,-1)),R={class:"modal__top__info__bar"},W={class:"modal__top__info__bar__left"},Q=l(()=>t("div",null,"Passenger",-1)),J={class:"modal__top__info__bar__right"},K=l(()=>t("div",null,"Date",-1)),U={class:"modal__top__info__bar"},X={class:"modal__top__info__bar__left"},Y=l(()=>t("div",null,"班機",-1)),Z={class:"modal__top__info__bar__right"},tt=l(()=>t("div",null,"Gate/Seat",-1)),et=l(()=>t("div",{class:"modal__doash"},[t("div",{class:"modal__doash__top"}),t("div",{class:"modal__doash__bottom"})],-1)),_t={class:"modal__bottom"},st=l(()=>t("div",null,"Qr Code",-1)),ot={class:"modal__bottom__qrcode"},at=["src"],it={__name:"TicketInfo",props:{modal:{type:Boolean,default:!1},data:{type:Object}},emits:["close"],setup(e,{emit:a}){const o=()=>{a("close")};return(f,p)=>e.modal?(i(),n("div",V,[t("div",H,[t("button",{onClick:o},"關閉"),t("div",P,[t("div",q,[j,t("div",z,[t("div",E,_(e.data.flight.departure),1),F,t("div",G,_(e.data.flight.destination),1)]),O]),t("div",R,[t("div",W,[Q,t("div",null,_(e.data.passenger),1)]),t("div",J,[K,t("div",null,_(e.data.departureTime),1)])]),t("div",U,[t("div",X,[Y,t("div",null,_(e.data.flight.flightNumber),1)]),t("div",Z,[tt,t("div",null,_(e.data.gateSeat),1)])])]),et,t("div",_t,[st,t("div",ot,[t("img",{src:e.data.qrcode,alt:"",class:"modal__bottom__qrcode__img"},null,8,at)])])])])):I("",!0)}},lt=u(it,[["__scopeId","data-v-19a88a64"]]);const h=e=>(w("data-v-81275bb3"),e=e(),T(),e),dt=["onClick"],ct={class:"tieket__info"},nt={class:"tieket__left"},rt={class:"tieket__left__info"},vt={class:"tieket__left__info__name"},ut={class:"tieket__left__info__departure"},ht={class:"tieket__left__info__destination"},ft={class:"tieket__left__info__dotted"},pt=D('<div class="tieket__left__info__plane" data-v-81275bb3><div class="border-dotted" data-v-81275bb3></div><div class="tieket__left__info__plane__icon" data-v-81275bb3><svg xmlns="http://www.w3.org/2000/svg" height="1.25em" viewBox="0 0 576 512" data-v-81275bb3><path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z" data-v-81275bb3></path></svg></div><div class="border-dotted" data-v-81275bb3></div></div>',1),mt={class:"tieket__left__info__name"},gt={class:"tieket__left__info__departure"},bt={class:"tieket__left__info__destination"},kt={class:"tieket__left__info__bottom"},$t=h(()=>t("div",{class:"weight"},"Date",-1)),wt=h(()=>t("div",{class:"weight"},"Departure",-1)),Tt=h(()=>t("div",{class:"weight"},"Passenger",-1)),yt=h(()=>t("div",{class:"weight"},"Gate/Seat",-1)),xt=h(()=>t("div",{class:"tieket__doash"},[t("div",{class:"tieket__doash__top"}),t("div",{class:"tieket__doash__bottom"})],-1)),St={class:"tieket__right"},Ct=["src"],It={__name:"Tickets",setup(e){const a=S();L(a);const o=m(!1),f=c=>{o.value=!0,setTimeout(()=>{o.value=!1},1e3),d.value=!0,r.value=c},p=c=>{const{scrollHeight:v,scrollTop:s,clientHeight:b}=c.target;s+b>=v*.9&&(o.value=!0,setTimeout(()=>{o.value=!1},1e3),a.increment())},d=m(!1),r=m([]);return(c,v)=>(i(),n(g,null,[t("div",{class:"tieket__bar",onScroll:p},[(i(!0),n(g,null,y(A(a).planeData,(s,b)=>(i(),n("div",{class:"tieket",onClick:zt=>f(s),key:b},[t("div",ct,[t("div",nt,[t("div",rt,[t("div",vt,[t("div",ut,_(s.flight.departure),1),t("div",ht,_(s.flight.destination),1)]),t("div",ft,[t("div",null,_(s.flight.flightNumber),1),pt,t("div",null,_(s.flight.duration),1)]),t("div",mt,[t("div",gt,_(s.flight.departure),1),t("div",bt,_(s.flight.destination),1)])]),t("div",kt,[t("div",null,[$t,t("div",null,_(s.date),1)]),t("div",null,[wt,t("div",null,_(s.departureTime),1)]),t("div",null,[Tt,t("div",null,_(s.passenger),1)]),t("div",null,[yt,t("div",null,_(s.gateSeat),1)])])]),xt,t("div",St,[t("img",{src:s.qrcode,alt:""},null,8,Ct)])])],8,dt))),128))],32),$(lt,{modal:d.value,onClose:v[0]||(v[0]=s=>d.value=!1),data:r.value},null,8,["modal","data"]),$(C,{loading:o.value},null,8,["loading"])],64))}},Lt=u(It,[["__scopeId","data-v-81275bb3"]]),At={};function Dt(e,a){return"past"}const Bt=u(At,[["render",Dt]]),Mt={};function Nt(e,a){return"will"}const Vt=u(Mt,[["render",Nt]]);const Ht={class:"header"},Pt=["onClick"],qt={__name:"MainHeader",props:{activeTab:{type:String,default:"Ticket"}},emits:["fouce"],setup(e,{emit:a}){const o=m([{title:"Tickets",isActive:!0,view:k(Lt)},{title:"Past",isActive:!1,view:k(Bt)},{title:"Waitlist",isActive:!1,view:k(Vt)}]),f=B(()=>o.value.find(d=>d.isActive).view),p=d=>{o.value.forEach(r=>{r.isActive=r.title==d.title})};return(d,r)=>(i(),n(g,null,[t("div",Ht,[(i(!0),n(g,null,y(o.value,(c,v)=>(i(),n("div",{class:M(["header__title",{active:c.isActive}]),onClick:s=>p(c),key:v},_(c.title),11,Pt))),128))]),(i(),x(N(f.value)))],64))}},jt=u(qt,[["__scopeId","data-v-9c00b7fb"]]),Gt={__name:"OverView",setup(e){return(a,o)=>(i(),x(jt))}};export{Gt as default};

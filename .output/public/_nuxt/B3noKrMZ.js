import{u as N}from"./3ToSDevF.js";import{e as l,N as P,u as q,q as L,i as y,c as f,o as s,b as c,w as g,f as m,l as x,d as E,t as M,g as a,F as h,r as _,s as T}from"./BicOSPaJ.js";const j=n=>{const t=Object.create(null);for(const r in n){const e=n[r];e!==void 0&&(t[r]=e)}return t},u=(n,t)=>(r,e)=>(N(()=>n({...j(r),...e.attrs},e)),()=>{var o,d;return t?(d=(o=e.slots).default)==null?void 0:d.call(o):null}),p={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:[String,Object,Array],tabindex:String,title:String,translate:String},z=l({name:"Link",inheritAttrs:!1,props:{...p,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:u(n=>({link:[n]}))}),C=l({name:"Title",inheritAttrs:!1,setup:u((n,{slots:t})=>{var r,e,o;return{title:((o=(e=(r=t.default)==null?void 0:r.call(t))==null?void 0:e[0])==null?void 0:o.children)||null}})}),F=l({name:"Meta",inheritAttrs:!1,props:{...p,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:u(n=>{const t={...n};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),O=l({name:"Head",inheritAttrs:!1,setup:(n,t)=>()=>{var r,e;return(e=(r=t.slots).default)==null?void 0:e.call(r)}}),V=l({name:"Html",inheritAttrs:!1,props:{...p,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:u(n=>({htmlAttrs:n}),!0)}),w=l({name:"Body",inheritAttrs:!1,props:{...p,renderPriority:[String,Number]},setup:u(n=>({bodyAttrs:n}),!0)}),R={__name:"default",setup(n){const t=P(),{t:r}=q(),e=L({}),o=y(()=>t.meta.title?r(t.meta.title):"LocalSend"),d=y(()=>t.meta.description?r(t.meta.description):null);return(b,U)=>{const B=C,S=F,k=z,A=O,v=w,H=V;return s(),f("div",null,[c(H,{lang:a(e).htmlAttrs.lang,dir:a(e).htmlAttrs.dir},{default:g(()=>[c(A,null,{default:g(()=>[c(B,null,{default:g(()=>[E(M(a(o)),1)]),_:1}),a(d)?(s(),m(S,{key:0,name:"description",content:a(d)},null,8,["content"])):x("",!0),(s(!0),f(h,null,_(a(e).link,i=>(s(),m(k,{key:i.id,id:i.id,rel:i.rel,href:i.href,hreflang:i.hreflang},null,8,["id","rel","href","hreflang"]))),128)),(s(!0),f(h,null,_(a(e).meta,i=>(s(),m(S,{key:i.id,id:i.id,property:i.property,content:i.content},null,8,["id","property","content"]))),128))]),_:1}),c(v,{class:"dark:bg-gray-900"},{default:g(()=>[T(b.$slots,"default")]),_:3})]),_:3},8,["lang","dir"])])}}};export{R as default};

import{e as i,c as r,o as t,n as l,f as s,l as c,s as d,p as f}from"./BicOSPaJ.js";const g={class:"inline-block"},m=["href","target"],h=i({__name:"AppButton",props:{href:{type:String,required:!1},target:{type:String,required:!1},dark:{type:Boolean,required:!1,default:!1},icon:{type:String,required:!1}},setup(e){const a=e;return(n,u)=>{const o=f;return t(),r("div",g,[e.href?(t(),r("a",{key:0,href:e.href,target:e.target,class:l(["flex items-center rounded-lg px-4 py-2 font-bold text-white hover:bg-teal-700 dark:text-gray-300 dark:hover:bg-teal-800",e.dark?"bg-teal-950":"bg-teal-600"])},[a.icon?(t(),s(o,{key:0,name:a.icon,class:"me-2 dark:text-gray-300"},null,8,["name"])):c("",!0),d(n.$slots,"default")],10,m)):(t(),r("button",{key:1,class:l(["flex items-center rounded-lg px-4 py-2 font-bold text-white hover:bg-teal-700 dark:text-gray-300 dark:hover:bg-teal-800",e.dark?"bg-teal-950":"bg-teal-600"])},[a.icon?(t(),s(o,{key:0,name:a.icon,class:"me-2 dark:text-gray-300"},null,8,["name"])):c("",!0),d(n.$slots,"default")],2))])}}});export{h as _};

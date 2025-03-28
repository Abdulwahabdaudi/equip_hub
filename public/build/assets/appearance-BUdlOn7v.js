import{r as o,j as a,L as u}from"./app-COQPPtvC.js";import{c as p,a as i}from"./app-logo-icon-O3xIIjt1.js";import{S as h,H as y}from"./layout-DGShSPC4.js";import{A as x}from"./app-layout-Bjcr4i3i.js";import"./logo-35vgJNCo.js";import"./index-CVcixo5H.js";import"./index-yKrt8jcL.js";import"./index-Bc_HtPI7.js";import"./floating-ui.react-dom-BxqGDvZ8.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],k=p("Monitor",g);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],b=p("Moon",f);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],v=p("Sun",j),w=()=>typeof window>"u"?!1:window.matchMedia("(prefers-color-scheme: dark)").matches,A=(e,n,r=365)=>{if(typeof document>"u")return;const t=r*24*60*60;document.cookie=`${e}=${n};path=/;max-age=${t};SameSite=Lax`},l=e=>{const n=e==="dark"||e==="system"&&w();document.documentElement.classList.toggle("dark",n)},S=()=>typeof window>"u"?null:window.matchMedia("(prefers-color-scheme: dark)"),M=()=>{const e=localStorage.getItem("appearance");l(e||"system")};function L(){const[e,n]=o.useState("system"),r=o.useCallback(t=>{n(t),localStorage.setItem("appearance",t),A("appearance",t),l(t)},[]);return o.useEffect(()=>{const t=localStorage.getItem("appearance");return r(t||"system"),()=>{var s;return(s=S())==null?void 0:s.removeEventListener("change",M)}},[r]),{appearance:e,updateAppearance:r}}function N({className:e="",...n}){const{appearance:r,updateAppearance:t}=L(),s=[{value:"light",icon:v,label:"Light"},{value:"dark",icon:b,label:"Dark"},{value:"system",icon:k,label:"System"}];return a.jsx("div",{className:i("inline-flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800",e),...n,children:s.map(({value:c,icon:d,label:m})=>a.jsxs("button",{onClick:()=>t(c),className:i("flex items-center rounded-md px-3.5 py-1.5 transition-colors",r===c?"bg-white shadow-xs dark:bg-neutral-700 dark:text-neutral-100":"text-neutral-500 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60"),children:[a.jsx(d,{className:"-ml-1 h-4 w-4"}),a.jsx("span",{className:"ml-1.5 text-sm",children:m})]},c))})}const _=[{title:"Appearance settings",href:"/settings/appearance"}];function Q(){return a.jsxs(x,{breadcrumbs:_,children:[a.jsx(u,{title:"Appearance settings"}),a.jsx(h,{children:a.jsxs("div",{className:"space-y-6",children:[a.jsx(y,{title:"Appearance settings",description:"Update your account's appearance settings"}),a.jsx(N,{})]})})]})}export{Q as default};

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2684:function(e,t,n){Promise.resolve().then(n.bind(n,8871)),Promise.resolve().then(n.bind(n,9512)),Promise.resolve().then(n.t.bind(n,3247,23)),Promise.resolve().then(n.t.bind(n,8397,23)),Promise.resolve().then(n.t.bind(n,5714,23)),Promise.resolve().then(n.t.bind(n,8085,23)),Promise.resolve().then(n.t.bind(n,8877,23))},8871:function(e,t,n){"use strict";n.d(t,{default:function(){return r}});var a=n(7437),c=n(9512),o=n(2265),s=n(9904);function r(){let{resolvedTheme:e="dark",setTheme:t,systemTheme:n}=(0,c.F)(),[r,l]=(0,o.useState)(!1),i="dark"===e;return(0,o.useEffect)(()=>l(!0),[]),(0,a.jsx)("div",{className:"bg-color transition-all border-b border-[0.5px] border-neutral-100 dark:border-neutral-900 sticky h-max top-0 z-[39] ",children:(0,a.jsxs)("div",{className:"relative flex justify-between items-center max-w-2xl mx-auto px-5 md:px-3 h-[60px]",children:[r&&(0,a.jsx)(s.default,{href:"/blog",className:"font-sans inline-block text-2xl font-black",children:(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsxs)("svg",{viewBox:"0 0 50 50",width:"28",height:"28",children:[(0,a.jsx)("polygon",{points:"25,15 10,30 40,30",fill:"".concat(i?"#e2e8f0":"black")}),(0,a.jsx)("rect",{x:"15",y:"28",width:"20",height:"15",fill:"".concat(i?"#e2e8f0":"black")})]})})}),r&&(0,a.jsxs)("div",{style:{position:"relative",width:"28px",height:"28px"},className:"cursor-pointer ",onClick:()=>{t("light"===e?"dark":"light")},children:[(0,a.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 50 50",style:{position:"absolute",top:0,left:0,transform:i?"scale(0)":"scale(1)",transition:"transform 0.5s"},children:[(0,a.jsx)("circle",{cx:"25",cy:"25",r:"10",fill:"dark"}),(0,a.jsxs)("g",{fill:"dark",children:[(0,a.jsx)("circle",{cx:"25",cy:"5",r:"2"}),(0,a.jsx)("circle",{cx:"25",cy:"45",r:"2"}),(0,a.jsx)("circle",{cx:"5",cy:"25",r:"2"}),(0,a.jsx)("circle",{cx:"45",cy:"25",r:"2"}),(0,a.jsx)("circle",{cx:"38",cy:"38",r:"2"}),(0,a.jsx)("circle",{cx:"38",cy:"12",r:"2"}),(0,a.jsx)("circle",{cx:"12",cy:"38",r:"2"}),(0,a.jsx)("circle",{cx:"12",cy:"12",r:"2"})]})]}),(0,a.jsx)("svg",{width:"28",height:"28",viewBox:"6 2 50 50",style:{position:"absolute",top:0,left:0,transform:i?"scale(1) rotate(125deg)":"scale(0)",transition:"transform 0.5s"},children:(0,a.jsx)("path",{d:"M25 10 a15 15 0 0 1 0 30 a25 25 0 0 0 0 -30",fill:"white"})})]})]})})}},9904:function(e,t,n){"use strict";n.d(t,{default:function(){return r}});var a=n(7437),c=n(2265),o=n(7138),s=n(6463);function r(e){let{className:t,children:n,style:r,href:l,target:i,...m}=e,d=(0,s.useRouter)(),[u,h]=(0,c.useTransition)();return i||l.startsWith("/")||(i="_blank"),(0,a.jsx)(o.default,{...m,target:i,href:l,onClick:e=>{!function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(e.preventDefault(),h(()=>{d.push(e.currentTarget.href)}))},className:[t,"scale-100 active:scale-100"].join(" "),style:{...r,transform:u?"scale(1)":"",opacity:u?.85:1,transition:"transform 0.2s ease-in-out, opacity 0.2s 0.4s linear"},children:n})}},8877:function(){},3247:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},8397:function(e){e.exports={style:{fontFamily:"'__Roboto_Mono_c9cbed', '__Roboto_Mono_Fallback_c9cbed'",fontStyle:"normal"},className:"__className_c9cbed"}},8085:function(e){e.exports={style:{fontFamily:"'__GeistMono_c1e5c9', ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace"},className:"__className_c1e5c9",variable:"__variable_c1e5c9"}},5714:function(e){e.exports={style:{fontFamily:"'__GeistSans_3a0388', '__GeistSans_Fallback_3a0388'"},className:"__className_3a0388",variable:"__variable_3a0388"}},9512:function(e,t,n){"use strict";n.d(t,{F:function(){return i},ThemeProvider:function(){return m}});var a=n(2265),c=["light","dark"],o="(prefers-color-scheme: dark)",s="undefined"==typeof window,r=a.createContext(void 0),l={setTheme:e=>{},themes:[]},i=()=>{var e;return null!=(e=a.useContext(r))?e:l},m=e=>a.useContext(r)?e.children:a.createElement(u,{...e}),d=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:s=!0,enableColorScheme:l=!0,storageKey:i="theme",themes:m=d,defaultTheme:u=s?"system":"light",attribute:x="data-theme",value:b,children:_,nonce:g}=e,[p,k]=a.useState(()=>f(i,u)),[w,j]=a.useState(()=>f(i)),S=b?Object.values(b):m,N=a.useCallback(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=v());let a=b?b[t]:t,o=n?y():null,r=document.documentElement;if("class"===x?(r.classList.remove(...S),a&&r.classList.add(a)):a?r.setAttribute(x,a):r.removeAttribute(x),l){let e=c.includes(u)?u:null,n=c.includes(t)?t:e;r.style.colorScheme=n}null==o||o()},[]),C=a.useCallback(e=>{let t="function"==typeof e?e(e):e;k(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),T=a.useCallback(e=>{j(v(e)),"system"===p&&s&&!t&&N("system")},[p,t]);a.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),a.useEffect(()=>{let e=e=>{e.key===i&&C(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),a.useEffect(()=>{N(null!=t?t:p)},[t,p]);let E=a.useMemo(()=>({theme:p,setTheme:C,forcedTheme:t,resolvedTheme:"system"===p?w:p,themes:s?[...m,"system"]:m,systemTheme:s?w:void 0}),[p,C,t,w,s,m]);return a.createElement(r.Provider,{value:E},a.createElement(h,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:s,enableColorScheme:l,storageKey:i,themes:m,defaultTheme:u,attribute:x,value:b,children:_,attrs:S,nonce:g}),_)},h=a.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:s,enableSystem:r,enableColorScheme:l,defaultTheme:i,value:m,attrs:d,nonce:u}=e,h="system"===i,f="class"===s?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(s,"',s='setAttribute';"),y=l?(c.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],a=m?m[e]:e,o=t?e+"|| ''":"'".concat(a,"'"),r="";return l&&n&&!t&&c.includes(e)&&(r+="d.style.colorScheme = '".concat(e,"';")),"class"===s?t||a?r+="c.add(".concat(o,")"):r+="null":a&&(r+="d[s](n,".concat(o,")")),r},x=t?"!function(){".concat(f).concat(v(t),"}()"):r?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(o,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(v("dark"),"}else{").concat(v("light"),"}}else if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(v(m?"x[e]":"e",!0),"}").concat(h?"":"else{"+v(i,!1,!1)+"}").concat(y,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(m?"var x=".concat(JSON.stringify(m),";"):"").concat(v(m?"x[e]":"e",!0),"}else{").concat(v(i,!1,!1),";}").concat(y,"}catch(t){}}();");return a.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:x}})}),f=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},y=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")}},function(e){e.O(0,[245,291,971,23,744],function(){return e(e.s=2684)}),_N_E=e.O()}]);
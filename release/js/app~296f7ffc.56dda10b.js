"use strict";(globalThis.webpackChunkquasar=globalThis.webpackChunkquasar||[]).push([[103],{3373:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(2673),r=n(1348),s=n(4918),a=n(3983),i=n(732);async function l(e,t){const n=e(s.A);n.use(o.A,t);const l="function"==typeof a.A?await(0,a.A)({}):a.A;n.use(l);const u=(0,r.IG)("function"==typeof i.A?await(0,i.A)({store:l}):i.A);return l.use((({store:e})=>{e.router=u})),{app:n,store:l,router:u}}},8898:(e,t,n)=>{var o=n(4011),r=n(3373),s=n(9446);async function a({app:e,router:t,store:n},o){let r=!1;const s=e=>{if(r=!0,"string"==typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const n=(e=>{try{return t.resolve(e).href}catch(e){}return Object(e)===e?null:e})(e);null!==n&&(window.location.href=n,window.location.reload())},a=window.location.href.replace(window.location.origin,"");for(let i=0;!1===r&&i<o.length;i++)try{await o[i]({app:e,router:t,store:n,ssrContext:null,redirect:s,urlPath:a,publicPath:""})}catch(e){return e&&e.url?void s(e.url):void console.error("[Quasar] boot error:",e)}!0!==r&&(e.use(t),e.mount("#q-app"))}(0,r.A)(o.Ef,s.A).then((e=>{const[t,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(n.bind(n,1367)),Promise.resolve().then(n.bind(n,4122))]).then((t=>{const n=o(t).filter((e=>"function"==typeof e));a(e,n)}))}))},9446:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(4305),r=n(6569),s=n(1897),a=n(7693),i=n(4209),l=n(4120),u=n(4419);const c={config:{screen:{bodyClasses:!0},loadingBar:{color:"primary",size:"3px",position:"top"},loading:{spinner:"QSpinnerIos",message:"正在加载中,请稍后......"},brand:{positive:"#48BB78",negative:"#F56565",info:"#4299E1",warning:"#FEAE65",primary:"#2d5cf6",secondary:"#FFFFFF",accent:"#F2F3F5",dark:"#2c2e3e"}},lang:o.A,iconSet:r.A,components:{QSpinnerIos:s.A},plugins:{Loading:a.A,Notify:i.A,LoadingBar:l.A,SessionStorage:u.A}};c.config.loading.spinner=s.A;const d=c},7179:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(5775),r=n(5427),s=n(3849),a=n(375),i=n(7194);const l={http:r.A,xhr:s.A,fetch:a.A};o.A.forEach(l,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const u=e=>`- ${e}`,c=e=>o.A.isFunction(e)||null===e||!1===e,d={getAdapter:e=>{e=o.A.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){let t;if(n=e[o],r=n,!c(n)&&(r=l[(t=String(n)).toLowerCase()],void 0===r))throw new i.A(`Unknown adapter '${t}'`);if(r)break;s[t||"#"+o]=r}if(!r){const e=Object.entries(s).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(u).join("\n"):" "+u(e[0]):"as no adapter specified";throw new i.A("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r},adapters:l}},375:(e,t,n)=>{n.d(t,{A:()=>E});var o=n(5976),r=n(5775),s=n(7194),a=n(6431),i=n(9675),l=n(1098),u=n(3377),c=n(6578),d=n(4313);const p=(e,t)=>{const n=null!=e;return o=>setTimeout((()=>t({lengthComputable:n,total:e,loaded:o})))},A="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,f=A&&"function"==typeof ReadableStream,h=A&&("function"==typeof TextEncoder?(m=new TextEncoder,e=>m.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var m;const w=f&&(()=>{let e=!1;const t=new Request(o.A.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),y=f&&!!(()=>{try{return r.A.isReadableStream(new Response("").body)}catch(e){}})(),g={stream:y&&(e=>e.body)};var b;A&&(b=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!g[e]&&(g[e]=r.A.isFunction(b[e])?t=>t[e]():(t,n)=>{throw new s.A(`Response type '${e}' is not supported`,s.A.ERR_NOT_SUPPORT,n)})})));const T=async(e,t)=>{const n=r.A.toFiniteNumber(e.getContentLength());return null==n?(async e=>null==e?0:r.A.isBlob(e)?e.size:r.A.isSpecCompliantForm(e)?(await new Request(e).arrayBuffer()).byteLength:r.A.isArrayBufferView(e)?e.byteLength:(r.A.isURLSearchParams(e)&&(e+=""),r.A.isString(e)?(await h(e)).byteLength:void 0))(t):n},E=A&&(async e=>{let{url:t,method:n,data:o,signal:A,cancelToken:f,timeout:m,onDownloadProgress:b,onUploadProgress:E,responseType:R,headers:v,withCredentials:x="same-origin",fetchOptions:C}=(0,c.A)(e);R=R?(R+"").toLowerCase():"text";let O,S,[P,F]=A||f||m?(0,a.A)([A,f],m):[];const L=()=>{!O&&setTimeout((()=>{P&&P.unsubscribe()})),O=!0};let N;try{if(E&&w&&"get"!==n&&"head"!==n&&0!==(N=await T(v,o))){let e,n=new Request(t,{method:"POST",body:o,duplex:"half"});r.A.isFormData(o)&&(e=n.headers.get("content-type"))&&v.setContentType(e),n.body&&(o=(0,i.E9)(n.body,65536,p(N,(0,u.A)(E)),null,h))}r.A.isString(x)||(x=x?"cors":"omit"),S=new Request(t,{...C,signal:P,method:n.toUpperCase(),headers:v.normalize().toJSON(),body:o,duplex:"half",withCredentials:x});let s=await fetch(S);const a=y&&("stream"===R||"response"===R);if(y&&(b||a)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=s[t]}));const t=r.A.toFiniteNumber(s.headers.get("content-length"));s=new Response((0,i.E9)(s.body,65536,b&&p(t,(0,u.A)(b,!0)),a&&L,h),e)}R=R||"text";let c=await g[r.A.findKey(g,R)||"text"](s,e);return!a&&L(),F&&F(),await new Promise(((t,n)=>{(0,d.A)(t,n,{data:c,headers:l.A.from(s.headers),status:s.status,statusText:s.statusText,config:e,request:S})}))}catch(t){if(L(),t&&"TypeError"===t.name&&/fetch/i.test(t.message))throw Object.assign(new s.A("Network Error",s.A.ERR_NETWORK,e,S),{cause:t.cause||t});throw s.A.from(t,t&&t.code,e,S)}})},3849:(e,t,n)=>{n.d(t,{A:()=>A});var o=n(5775),r=n(4313),s=n(7531),a=n(7194),i=n(8886),l=n(4119),u=n(5976),c=n(1098),d=n(3377),p=n(6578);const A="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){const A=(0,p.A)(e);let f=A.data;const h=c.A.from(A.headers).normalize();let m,{responseType:w}=A;function y(){A.cancelToken&&A.cancelToken.unsubscribe(m),A.signal&&A.signal.removeEventListener("abort",m)}let g=new XMLHttpRequest;function b(){if(!g)return;const o=c.A.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),s={data:w&&"text"!==w&&"json"!==w?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:o,config:e,request:g};(0,r.A)((function(e){t(e),y()}),(function(e){n(e),y()}),s),g=null}g.open(A.method.toUpperCase(),A.url,!0),g.timeout=A.timeout,"onloadend"in g?g.onloadend=b:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(b)},g.onabort=function(){g&&(n(new a.A("Request aborted",a.A.ECONNABORTED,A,g)),g=null)},g.onerror=function(){n(new a.A("Network Error",a.A.ERR_NETWORK,A,g)),g=null},g.ontimeout=function(){let e=A.timeout?"timeout of "+A.timeout+"ms exceeded":"timeout exceeded";const t=A.transitional||s.A;A.timeoutErrorMessage&&(e=A.timeoutErrorMessage),n(new a.A(e,t.clarifyTimeoutError?a.A.ETIMEDOUT:a.A.ECONNABORTED,A,g)),g=null},void 0===f&&h.setContentType(null),"setRequestHeader"in g&&o.A.forEach(h.toJSON(),(function(e,t){g.setRequestHeader(t,e)})),o.A.isUndefined(A.withCredentials)||(g.withCredentials=!!A.withCredentials),w&&"json"!==w&&(g.responseType=A.responseType),"function"==typeof A.onDownloadProgress&&g.addEventListener("progress",(0,d.A)(A.onDownloadProgress,!0)),"function"==typeof A.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",(0,d.A)(A.onUploadProgress)),(A.cancelToken||A.signal)&&(m=t=>{g&&(n(!t||t.type?new i.A(null,e,g):t),g.abort(),g=null)},A.cancelToken&&A.cancelToken.subscribe(m),A.signal&&(A.signal.aborted?m():A.signal.addEventListener("abort",m)));const T=(0,l.A)(A.url);T&&-1===u.A.protocols.indexOf(T)?n(new a.A("Unsupported protocol "+T+":",a.A.ERR_BAD_REQUEST,e)):g.send(f||null)}))}},7364:(e,t,n)=>{n.d(t,{A:()=>T});var o=n(5775),r=n(3009),s=n(6142),a=n(3938),i=n(7233),l=n(3723),u=n(8886),c=n(9654),d=n(1067),p=n(8884),A=n(2325),f=n(7194),h=n(1073),m=n(670),w=n(1098),y=n(7179),g=n(7185);const b=function e(t){const n=new s.A(t),i=(0,r.A)(s.A.prototype.request,n);return o.A.extend(i,s.A.prototype,n,{allOwnKeys:!0}),o.A.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e((0,a.A)(t,n))},i}(i.A);b.Axios=s.A,b.CanceledError=u.A,b.CancelToken=c.A,b.isCancel=d.A,b.VERSION=p.x,b.toFormData=A.A,b.AxiosError=f.A,b.Cancel=b.CanceledError,b.all=function(e){return Promise.all(e)},b.spread=h.A,b.isAxiosError=m.A,b.mergeConfig=a.A,b.AxiosHeaders=w.A,b.formToJSON=e=>(0,l.A)(o.A.isHTMLForm(e)?new FormData(e):e),b.getAdapter=y.A.getAdapter,b.HttpStatusCode=g.A,b.default=b;const T=b}}]);
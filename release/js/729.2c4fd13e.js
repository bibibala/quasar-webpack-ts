(globalThis.webpackChunkquasar=globalThis.webpackChunkquasar||[]).push([[729],{4428:t=>{t.exports=function(t,e,n){const o=void 0!==t.__vccOpts?t.__vccOpts:t,i=o[e];if(void 0===i)o[e]=n;else for(const t in n)void 0===i[t]&&(i[t]=n[t])}},7426:(t,e)=>{"use strict";e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[t,o]of e)n[t]=o;return n}},2608:(t,e,n)=>{t.exports=n.p+"img/img.945fcb49.png"},2068:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var o=n(4935),i=n(7447),l=n(1366);function r(t){if(!1===t)return 0;if(!0===t||void 0===t)return 1;const e=parseInt(t,10);return isNaN(e)?0:e}const s=(0,o.Yg)({name:"close-popup",beforeMount(t,{value:e}){const n={depth:r(e),handler(e){0!==n.depth&&setTimeout((()=>{const o=(0,i.Rv)(t);void 0!==o&&(0,i.k0)(o,e,n.depth)}))},handlerKey(t){!0===(0,l.Dv)(t,13)&&n.handler(t)}};t.__qclosepopup=n,t.addEventListener("click",n.handler),t.addEventListener("keyup",n.handlerKey)},updated(t,{value:e,oldValue:n}){e!==n&&(t.__qclosepopup.depth=r(e))},beforeUnmount(t){const e=t.__qclosepopup;t.removeEventListener("click",e.handler),t.removeEventListener("keyup",e.handlerKey),delete t.__qclosepopup}})},6594:(t,e,n)=>{"use strict";n.d(e,{A:()=>c});var o=n(9441),i=n(4935),l=n(4041),r=n(5760),s=n(8537);function d(t,e,n){const o=(0,r.G1)(t);let i,l=o.left-e.event.x,s=o.top-e.event.y,d=Math.abs(l),a=Math.abs(s);const c=e.direction;!0===c.horizontal&&!0!==c.vertical?i=l<0?"left":"right":!0!==c.horizontal&&!0===c.vertical?i=s<0?"up":"down":!0===c.up&&s<0?(i="up",d>a&&(!0===c.left&&l<0?i="left":!0===c.right&&l>0&&(i="right"))):!0===c.down&&s>0?(i="down",d>a&&(!0===c.left&&l<0?i="left":!0===c.right&&l>0&&(i="right"))):!0===c.left&&l<0?(i="left",d<a&&(!0===c.up&&s<0?i="up":!0===c.down&&s>0&&(i="down"))):!0===c.right&&l>0&&(i="right",d<a&&(!0===c.up&&s<0?i="up":!0===c.down&&s>0&&(i="down")));let u=!1;if(void 0===i&&!1===n){if(!0===e.event.isFirst||void 0===e.event.lastDir)return{};i=e.event.lastDir,u=!0,"left"===i||"right"===i?(o.left-=l,d=0,l=0):(o.top-=s,a=0,s=0)}return{synthetic:u,payload:{evt:t,touch:!0!==e.event.mouse,mouse:!0===e.event.mouse,position:o,direction:i,isFirst:e.event.isFirst,isFinal:!0===n,duration:Date.now()-e.event.time,distance:{x:d,y:a},offset:{x:l,y:s},delta:{x:o.left-e.event.lastX,y:o.top-e.event.lastY}}}}let a=0;const c=(0,i.Yg)({name:"touch-pan",beforeMount(t,{value:e,modifiers:n}){if(!0!==n.mouse&&!0!==o.Sn.has.touch)return;function i(t,e){!0===n.mouse&&!0===e?(0,r.Gu)(t):(!0===n.stop&&(0,r.ds)(t),!0===n.prevent&&(0,r.F4)(t))}const c={uid:"qvtp_"+a++,handler:e,modifiers:n,direction:(0,l.U)(n),noop:r.lQ,mouseStart(t){(0,l.W)(t,c)&&(0,r.w7)(t)&&((0,r.Z4)(c,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),c.start(t,!0))},touchStart(t){if((0,l.W)(t,c)){const e=t.target;(0,r.Z4)(c,"temp",[[e,"touchmove","move","notPassiveCapture"],[e,"touchcancel","end","passiveCapture"],[e,"touchend","end","passiveCapture"]]),c.start(t)}},start(e,i){if(!0===o.Sn.is.firefox&&(0,r.M5)(t,!0),c.lastEvt=e,!0===i||!0===n.stop){if(!0!==c.direction.all&&(!0!==i||!0!==c.modifiers.mouseAllDir&&!0!==c.modifiers.mousealldir)){const t=-1!==e.type.indexOf("mouse")?new MouseEvent(e.type,e):new TouchEvent(e.type,e);!0===e.defaultPrevented&&(0,r.F4)(t),!0===e.cancelBubble&&(0,r.ds)(t),Object.assign(t,{qKeyEvent:e.qKeyEvent,qClickOutside:e.qClickOutside,qAnchorHandled:e.qAnchorHandled,qClonedBy:void 0===e.qClonedBy?[c.uid]:e.qClonedBy.concat(c.uid)}),c.initialEvent={target:e.target,event:t}}(0,r.ds)(e)}const{left:l,top:s}=(0,r.G1)(e);c.event={x:l,y:s,time:Date.now(),mouse:!0===i,detected:!1,isFirst:!0,isFinal:!1,lastX:l,lastY:s}},move(t){if(void 0===c.event)return;const e=(0,r.G1)(t),o=e.left-c.event.x,l=e.top-c.event.y;if(0===o&&0===l)return;c.lastEvt=t;const a=!0===c.event.mouse,u=()=>{let e;i(t,a),!0!==n.preserveCursor&&!0!==n.preservecursor&&(e=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),!0===a&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),(0,s.w)(),c.styleCleanup=t=>{if(c.styleCleanup=void 0,void 0!==e&&(document.documentElement.style.cursor=e),document.body.classList.remove("non-selectable"),!0===a){const e=()=>{document.body.classList.remove("no-pointer-events--children")};void 0!==t?setTimeout((()=>{e(),t()}),50):e()}else void 0!==t&&t()}};if(!0===c.event.detected){!0!==c.event.isFirst&&i(t,c.event.mouse);const{payload:e,synthetic:n}=d(t,c,!1);return void(void 0!==e&&(!1===c.handler(e)?c.end(t):(void 0===c.styleCleanup&&!0===c.event.isFirst&&u(),c.event.lastX=e.position.left,c.event.lastY=e.position.top,c.event.lastDir=!0===n?void 0:e.direction,c.event.isFirst=!1)))}if(!0===c.direction.all||!0===a&&(!0===c.modifiers.mouseAllDir||!0===c.modifiers.mousealldir))return u(),c.event.detected=!0,void c.move(t);const h=Math.abs(o),v=Math.abs(l);h!==v&&(!0===c.direction.horizontal&&h>v||!0===c.direction.vertical&&h<v||!0===c.direction.up&&h<v&&l<0||!0===c.direction.down&&h<v&&l>0||!0===c.direction.left&&h>v&&o<0||!0===c.direction.right&&h>v&&o>0?(c.event.detected=!0,c.move(t)):c.end(t,!0))},end(e,n){if(void 0!==c.event){if((0,r.Fh)(c,"temp"),!0===o.Sn.is.firefox&&(0,r.M5)(t,!1),!0===n)void 0!==c.styleCleanup&&c.styleCleanup(),!0!==c.event.detected&&void 0!==c.initialEvent&&c.initialEvent.target.dispatchEvent(c.initialEvent.event);else if(!0===c.event.detected){!0===c.event.isFirst&&c.handler(d(void 0===e?c.lastEvt:e,c).payload);const{payload:t}=d(void 0===e?c.lastEvt:e,c,!0),n=()=>{c.handler(t)};void 0!==c.styleCleanup?c.styleCleanup(n):n()}c.event=void 0,c.initialEvent=void 0,c.lastEvt=void 0}}};if(t.__qtouchpan=c,!0===n.mouse){const e=!0===n.mouseCapture||!0===n.mousecapture?"Capture":"";(0,r.Z4)(c,"main",[[t,"mousedown","mouseStart",`passive${e}`]])}!0===o.Sn.has.touch&&(0,r.Z4)(c,"main",[[t,"touchstart","touchStart","passive"+(!0===n.capture?"Capture":"")],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,e){const n=t.__qtouchpan;void 0!==n&&(e.oldValue!==e.value&&("function"!=typeof value&&n.end(),n.handler=e.value),n.direction=(0,l.U)(e.modifiers))},beforeUnmount(t){const e=t.__qtouchpan;void 0!==e&&(void 0!==e.event&&e.end(),(0,r.Fh)(e,"main"),(0,r.Fh)(e,"temp"),!0===o.Sn.is.firefox&&(0,r.M5)(t,!1),void 0!==e.styleCleanup&&e.styleCleanup(),delete t.__qtouchpan)}})},3133:(t,e,n)=>{"use strict";n.d(e,{e:()=>c,r:()=>a});n(2079);var o=n(5760),i=n(7447);let l=null;const{notPassiveCapture:r}=o.mG,s=[];function d(t){null!==l&&(clearTimeout(l),l=null);const e=t.target;if(void 0===e||8===e.nodeType||!0===e.classList.contains("no-pointer-events"))return;let n=i.jx.length-1;for(;n>=0;){const t=i.jx[n].$;if("QTooltip"!==t.type.name){if("QDialog"!==t.type.name)break;if(!0!==t.props.seamless)return;n--}else n--}for(let n=s.length-1;n>=0;n--){const o=s[n];if(null!==o.anchorEl.value&&!1!==o.anchorEl.value.contains(e)||e!==document.body&&(null===o.innerRef.value||!1!==o.innerRef.value.contains(e)))return;t.qClickOutside=!0,o.onClickOutside(t)}}function a(t){s.push(t),1===s.length&&(document.addEventListener("mousedown",d,r),document.addEventListener("touchstart",d,r))}function c(t){const e=s.findIndex((e=>e===t));-1!==e&&(s.splice(e,1),0===s.length&&(null!==l&&(clearTimeout(l),l=null),document.removeEventListener("mousedown",d,r),document.removeEventListener("touchstart",d,r)))}},6392:(t,e,n)=>{"use strict";n.d(e,{FD:()=>r,Gy:()=>d,gv:()=>s});n(2079);let o=[],i=[];function l(t){i=i.filter((e=>e!==t))}function r(t){l(t),i.push(t)}function s(t){l(t),0===i.length&&0!==o.length&&(o[o.length-1](),o=[])}function d(t){0===i.length?t():o.push(t)}},9673:(t,e,n)=>{"use strict";n.d(e,{g:()=>r,v:()=>s});n(2079);var o=n(9441);const i=[];function l(t){i[i.length-1](t)}function r(t){!0===o.Sn.is.desktop&&(i.push(t),1===i.length&&document.body.addEventListener("focusin",l))}function s(t){const e=i.indexOf(t);-1!==e&&(i.splice(e,1),0===i.length&&document.body.removeEventListener("focusin",l))}},4873:(t,e,n)=>{"use strict";n.d(e,{I:()=>u,V:()=>h});n(2079);var o=n(9441),i=n(1366);const l=[];let r;function s(t){r=27===t.keyCode}function d(){!0===r&&(r=!1)}function a(t){!0===r&&(r=!1,!0===(0,i.Dv)(t,27)&&l[l.length-1](t))}function c(t){window[t]("keydown",s),window[t]("blur",d),window[t]("keyup",a),r=!1}function u(t){!0===o.Sn.is.desktop&&(l.push(t),1===l.length&&c("addEventListener"))}function h(t){const e=l.indexOf(t);-1!==e&&(l.splice(e,1),0===l.length&&c("removeEventListener"))}},7447:(t,e,n)=>{"use strict";n.d(e,{Rv:()=>l,bc:()=>r,jx:()=>i,k0:()=>s});var o=n(7761);const i=[];function l(t){return i.find((e=>null!==e.contentEl&&e.contentEl.contains(t)))}function r(t,e){do{if("QMenu"===t.$options.name){if(t.hide(e),!0===t.$props.separateClosePopup)return(0,o.V_)(t)}else if(!0===t.__qPortal){const n=(0,o.V_)(t);return void 0!==n&&"QPopupProxy"===n.$options.name?(t.hide(e),n):t}t=(0,o.V_)(t)}while(null!=t)}function s(t,e,n){for(;0!==n&&null!=t;){if(!0===t.__qPortal){if(n--,"QMenu"===t.$options.name){t=r(t,e);continue}t.hide(e)}t=(0,o.V_)(t)}}},6541:(t,e,n)=>{"use strict";n.d(e,{Kk:()=>h,aC:()=>d,o3:()=>s,rk:()=>c});var o=n(6140),i=n(9441);let l,r;function s(t){const e=t.split(" ");return 2===e.length&&(!0!==["top","center","bottom"].includes(e[0])?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):!0===["left","middle","right","start","end"].includes(e[1])||(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1))}function d(t){return!t||2===t.length&&("number"==typeof t[0]&&"number"==typeof t[1])}const a={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};function c(t,e){const n=t.split(" ");return{vertical:n[0],horizontal:a[`${n[1]}#${!0===e?"rtl":"ltr"}`]}}function u(t,e,n,o){return{top:t[n.vertical]-e[o.vertical],left:t[n.horizontal]-e[o.horizontal]}}function h(t,e=0){if(null===t.targetEl||null===t.anchorEl||e>5)return;if(0===t.targetEl.offsetHeight||0===t.targetEl.offsetWidth)return void setTimeout((()=>{h(t,e+1)}),10);const{targetEl:n,offset:o,anchorEl:s,anchorOrigin:d,selfOrigin:a,absoluteOffset:c,fit:f,cover:p,maxHeight:m,maxWidth:g}=t;if(!0===i.Sn.is.ios&&void 0!==window.visualViewport){const t=document.body.style,{offsetLeft:e,offsetTop:n}=window.visualViewport;e!==l&&(t.setProperty("--q-pe-left",e+"px"),l=e),n!==r&&(t.setProperty("--q-pe-top",n+"px"),r=n)}const{scrollLeft:y,scrollTop:w}=n,x=void 0===c?function(t,e){let{top:n,left:o,right:i,bottom:l,width:r,height:s}=t.getBoundingClientRect();return void 0!==e&&(n-=e[1],o-=e[0],l+=e[1],i+=e[0],r+=e[0],s+=e[1]),{top:n,bottom:l,height:s,left:o,right:i,width:r,middle:o+(i-o)/2,center:n+(l-n)/2}}(s,!0===p?[0,0]:o):function(t,e,n){let{top:o,left:i}=t.getBoundingClientRect();return o+=e.top,i+=e.left,void 0!==n&&(o+=n[1],i+=n[0]),{top:o,bottom:o+1,height:1,left:i,right:i+1,width:1,middle:i,center:o}}(s,c,o);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g||"100vw",maxHeight:m||"100vh",visibility:"visible"});const{offsetWidth:b,offsetHeight:E}=n,{elWidth:C,elHeight:_}=!0===f||!0===p?{elWidth:Math.max(x.width,b),elHeight:!0===p?Math.max(x.height,E):E}:{elWidth:b,elHeight:E};let M={maxWidth:g,maxHeight:m};!0!==f&&!0!==p||(M.minWidth=x.width+"px",!0===p&&(M.minHeight=x.height+"px")),Object.assign(n.style,M);const q={top:0,center:(W=_)/2,bottom:W,left:0,middle:(k=C)/2,right:k};var k,W;let H=u(x,q,d,a);if(void 0===c||void 0===o)v(H,x,q,d,a);else{const{top:t,left:e}=H;v(H,x,q,d,a);let n=!1;if(H.top!==t){n=!0;const t=2*o[1];x.center=x.top-=t,x.bottom-=t+2}if(H.left!==e){n=!0;const t=2*o[0];x.middle=x.left-=t,x.right-=t+2}!0===n&&(H=u(x,q,d,a),v(H,x,q,d,a))}M={top:H.top+"px",left:H.left+"px"},void 0!==H.maxHeight&&(M.maxHeight=H.maxHeight+"px",x.height>H.maxHeight&&(M.minHeight=M.maxHeight)),void 0!==H.maxWidth&&(M.maxWidth=H.maxWidth+"px",x.width>H.maxWidth&&(M.minWidth=M.maxWidth)),Object.assign(n.style,M),n.scrollTop!==w&&(n.scrollTop=w),n.scrollLeft!==y&&(n.scrollLeft=y)}function v(t,e,n,i,l){const r=n.bottom,s=n.right,d=(0,o.XJ)(),a=window.innerHeight-d,c=document.body.clientWidth;if(t.top<0||t.top+r>a)if("center"===l.vertical)t.top=e[i.vertical]>a/2?Math.max(0,a-r):0,t.maxHeight=Math.min(r,a);else if(e[i.vertical]>a/2){const n=Math.min(a,"center"===i.vertical?e.center:i.vertical===l.vertical?e.bottom:e.top);t.maxHeight=Math.min(r,n),t.top=Math.max(0,n-r)}else t.top=Math.max(0,"center"===i.vertical?e.center:i.vertical===l.vertical?e.top:e.bottom),t.maxHeight=Math.min(r,a-t.top);if(t.left<0||t.left+s>c)if(t.maxWidth=Math.min(s,c),"middle"===l.horizontal)t.left=e[i.horizontal]>c/2?Math.max(0,c-s):0;else if(e[i.horizontal]>c/2){const n=Math.min(c,"middle"===i.horizontal?e.middle:i.horizontal===l.horizontal?e.right:e.left);t.maxWidth=Math.min(s,n),t.left=Math.max(0,n-t.maxWidth)}else t.left=Math.max(0,"middle"===i.horizontal?e.middle:i.horizontal===l.horizontal?e.left:e.right),t.maxWidth=Math.min(s,c-t.left)}["left","middle","right"].forEach((t=>{a[`${t}#ltr`]=t,a[`${t}#rtl`]=t}))},8537:(t,e,n)=>{"use strict";n.d(e,{w:()=>i});var o=n(9441);function i(){if(void 0!==window.getSelection){const t=window.getSelection();void 0!==t.empty?t.empty():void 0!==t.removeAllRanges&&(t.removeAllRanges(),!0!==o.Ay.is.mobile&&t.addRange(document.createRange()))}else void 0!==document.selection&&document.selection.empty()}},4041:(t,e,n)=>{"use strict";n.d(e,{U:()=>l,W:()=>s});const o={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},i=Object.keys(o);function l(t){const e={};for(const n of i)!0===t[n]&&(e[n]=!0);return 0===Object.keys(e).length?o:(!0===e.horizontal?e.left=e.right=!0:!0===e.left&&!0===e.right&&(e.horizontal=!0),!0===e.vertical?e.up=e.down=!0:!0===e.up&&!0===e.down&&(e.vertical=!0),!0===e.horizontal&&!0===e.vertical&&(e.all=!0),e)}o.all=!0;const r=["INPUT","TEXTAREA"];function s(t,e){return void 0===e.event&&void 0!==t.target&&!0!==t.target.draggable&&"function"==typeof e.handler&&!1===r.includes(t.target.nodeName.toUpperCase())&&(void 0===t.qClonedBy||-1===t.qClonedBy.indexOf(e.uid))}},7332:(t,e,n)=>{"use strict";n.d(e,{A:()=>d});n(2079),n(1490),n(9179),n(7251),n(8008);let o,i=0;const l=new Array(256);for(let t=0;t<256;t++)l[t]=(t+256).toString(16).substring(1);const r=(()=>{const t="undefined"!=typeof crypto?crypto:"undefined"!=typeof window?window.crypto||window.msCrypto:void 0;if(void 0!==t){if(void 0!==t.randomBytes)return t.randomBytes;if(void 0!==t.getRandomValues)return e=>{const n=new Uint8Array(e);return t.getRandomValues(n),n}}return t=>{const e=[];for(let n=t;n>0;n--)e.push(Math.floor(256*Math.random()));return e}})(),s=4096;function d(){(void 0===o||i+16>s)&&(i=0,o=r(s));const t=Array.prototype.slice.call(o,i,i+=16);return t[6]=15&t[6]|64,t[8]=63&t[8]|128,l[t[0]]+l[t[1]]+l[t[2]]+l[t[3]]+"-"+l[t[4]]+l[t[5]]+"-"+l[t[6]]+l[t[7]]+"-"+l[t[8]]+l[t[9]]+"-"+l[t[10]]+l[t[11]]+l[t[12]]+l[t[13]]+l[t[14]]+l[t[15]]}}}]);
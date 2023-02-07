var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const e={submitBtnSearchEl:document.querySelector(".submit-search-button"),formEl:document.querySelector(".form-search"),mainHomeEl:document.querySelector("#main-home"),inputAnswerParEl:document.querySelector(".input-answer"),homeBTN:document.querySelector(".home"),libraryCurrentBntEl:document.querySelector(".my-library .current"),pageBtns:document.querySelector(".pagination-list"),pageBtnsInput:document.querySelector(".paginatio-input-list"),pageBtnsGenres:document.querySelector(".paginatio-genres-list"),filmGalleryHomeEl:document.querySelector(".movie-gallery"),filmGalleryLibraryEl:document.querySelector(".movie-gallery-library"),openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-team-backdrop"),modalEl:document.querySelector(".modal"),backdropEl:document.querySelector(".backdrop"),containerEl:document.querySelector(".modal-container"),modalCloseBtn:document.querySelector(".modal__close-btn"),loaderEl:document.querySelector(".loader"),themeButtonEl:document.querySelector(".theme"),themeListEl:document.querySelector(".theme__list"),defaultThemeButtonEl:document.querySelector(".reset-theme-btn"),lightThemeButtonEl:document.querySelector(".light-theme-btn"),darkThemeButtonEl:document.querySelector(".dark-theme-btn"),htmlEl:document.documentElement,themeContainerEl:document.querySelector(".theme-container"),trailerBackdrop:document.querySelector(".trailer-backdrop"),trailerBox:document.querySelector(".trailer-box"),trailerBtnClose:document.querySelector(".trailer-btn__close"),trailerBtnOpen:document.querySelector("[data-modal-open]"),boxIframe:document.querySelector(".box-iframe"),pop:document.querySelectorAll(".pop"),genresListEl:document.querySelector(".genres-list"),choiceBtnEl:document.querySelector(".choice-genre "),genresBtnsEl:document.querySelectorAll(".btn-genre")};function n(){window.removeEventListener("keydown",i),document.body.classList.remove("show-modal")}function i(t){"Escape"===t.code&&n()}e.openModalBtn&&(e.openModalBtn.addEventListener("click",(function(t){t.preventDefault(),window.addEventListener("keydown",i),document.body.classList.add("show-modal")})),e.closeModalBtn.addEventListener("click",n),e.backdrop.addEventListener("click",(function(t){t.currentTarget===t.target&&n()})));const r=document.querySelector(".btn-to-top");function s(){return localStorage.getItem("user-theme")}function o(){e.lightThemeButtonEl.classList.remove("current-theme"),e.darkThemeButtonEl.classList.remove("current-theme"),e.defaultThemeButtonEl.classList.remove("current-theme")}function a(){localStorage.removeItem("user-theme");let t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.htmlEl.classList.remove("light","dark"),e.htmlEl.classList.add(t),e.defaultThemeButtonEl.classList.add("current-theme")}function l(t,e){return function(){return t.apply(e,arguments)}}window.addEventListener("scroll",(function(){const t=window.pageYOffset,e=document.documentElement.clientHeight;t>e&&r.classList.add("btn-to-top--visible");t<e&&r.classList.remove("btn-to-top--visible")})),r.addEventListener("click",(function(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})})),e.themeListEl.classList.add("hidden"),window.addEventListener("load",(function(){s()?(e.htmlEl.classList.add(s()),"light"===s()?e.lightThemeButtonEl.classList.add("current-theme"):"dark"===s()&&e.darkThemeButtonEl.classList.add("current-theme")):a(),s()||window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(()=>{null===s()&&a()}));s(),e.themeButtonEl.addEventListener("click",(function(){e.themeListEl.classList.toggle("hidden"),e.themeListEl.addEventListener("click",(t=>{t.target.classList.contains("light-theme-btn")?(o(),e.htmlEl.classList.remove("light","dark"),e.htmlEl.classList.add("light"),e.lightThemeButtonEl.classList.add("current-theme"),localStorage.setItem("user-theme","light"),e.themeListEl.classList.add("hidden")):t.target.classList.contains("dark-theme-btn")?(o(),e.htmlEl.classList.remove("light","dark"),e.htmlEl.classList.add("dark"),e.darkThemeButtonEl.classList.add("current-theme"),localStorage.setItem("user-theme","dark"),e.themeListEl.classList.add("hidden")):t.target.classList.contains("reset-theme-btn")&&(o(),e.themeListEl.classList.add("hidden"),a())}))}))}));const{toString:c}=Object.prototype,{getPrototypeOf:h}=Object,u=(d=Object.create(null),t=>{const e=c.call(t);return d[e]||(d[e]=e.slice(8,-1).toLowerCase())});var d;const p=t=>(t=t.toLowerCase(),e=>u(e)===t),f=t=>e=>typeof e===t,{isArray:g}=Array,m=f("undefined");const y=p("ArrayBuffer");const _=f("string"),v=f("function"),b=f("number"),w=t=>null!==t&&"object"==typeof t,E=t=>{if("object"!==u(t))return!1;const e=h(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},T=p("Date"),I=p("File"),C=p("Blob"),S=p("FileList"),k=p("URLSearchParams");function R(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let i,r;if("object"!=typeof t&&(t=[t]),g(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),s=r.length;let o;for(i=0;i<s;i++)o=r[i],e.call(null,t[o],o,t)}}function A(t,e){e=e.toLowerCase();const n=Object.keys(t);let i,r=n.length;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,O=t=>!m(t)&&t!==N;const L=(P="undefined"!=typeof Uint8Array&&h(Uint8Array),t=>P&&t instanceof P);var P;const D=p("HTMLFormElement"),x=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),M=p("RegExp"),U=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};R(n,((n,r)=>{!1!==e(n,r,t)&&(i[r]=n)})),Object.defineProperties(t,i)},F={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};var B={isArray:g,isArrayBuffer:y,isBuffer:function(t){return null!==t&&!m(t)&&null!==t.constructor&&!m(t.constructor)&&v(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||c.call(t)===e||v(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&y(t.buffer),e},isString:_,isNumber:b,isBoolean:t=>!0===t||!1===t,isObject:w,isPlainObject:E,isUndefined:m,isDate:T,isFile:I,isBlob:C,isRegExp:M,isFunction:v,isStream:t=>w(t)&&v(t.pipe),isURLSearchParams:k,isTypedArray:L,isFileList:S,forEach:R,merge:function t(){const{caseless:e}=O(this)&&this||{},n={},i=(i,r)=>{const s=e&&A(n,r)||r;E(n[s])&&E(i)?n[s]=t(n[s],i):E(i)?n[s]=t({},i):g(i)?n[s]=i.slice():n[s]=i};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&R(arguments[t],i);return n},extend:(t,e,n,{allOwnKeys:i}={})=>(R(e,((e,i)=>{n&&v(e)?t[i]=l(e,n):t[i]=e}),{allOwnKeys:i}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},null==t)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],i&&!i(o,t,e)||a[o]||(e[o]=t[o],a[o]=!0);t=!1!==n&&h(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:u,kindOfTest:p,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return-1!==i&&i===n},toArray:t=>{if(!t)return null;if(g(t))return t;let e=t.length;if(!b(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=n.next())&&!i.done;){const n=i.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const i=[];for(;null!==(n=t.exec(e));)i.push(n);return i},isHTMLForm:D,hasOwnProperty:x,hasOwnProp:x,reduceDescriptors:U,freezeMethods:t=>{U(t,((e,n)=>{if(v(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=t[n];v(i)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},i=t=>{t.forEach((t=>{n[t]=!0}))};return g(t)?i(t):i(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:A,global:N,isContextDefined:O,ALPHABET:F,generateString:(t=16,e=F.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n},isSpecCompliantForm:function(t){return!!(t&&v(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),n=(t,i)=>{if(w(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[i]=t;const r=g(t)?[]:{};return R(t,((t,e)=>{const s=n(t,i+1);!m(s)&&(r[e]=s)})),e[i]=void 0,r}}return t};return n(t,0)}};function j(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}B.inherits(j,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const q=j.prototype,H={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{H[t]={value:t}})),Object.defineProperties(j,H),Object.defineProperty(q,"isAxiosError",{value:!0}),j.from=(t,e,n,i,r,s)=>{const o=Object.create(q);return B.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),j.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var $,z,V,W=j;z=function(t){var e,n,i=et(t),r=i[0],s=i[1],o=new X(function(t,e,n){return 3*(e+n)/4-n}(0,r,s)),a=0,l=s>0?r-4:r;for(n=0;n<l;n+=4)e=Y[t.charCodeAt(n)]<<18|Y[t.charCodeAt(n+1)]<<12|Y[t.charCodeAt(n+2)]<<6|Y[t.charCodeAt(n+3)],o[a++]=e>>16&255,o[a++]=e>>8&255,o[a++]=255&e;2===s&&(e=Y[t.charCodeAt(n)]<<2|Y[t.charCodeAt(n+1)]>>4,o[a++]=255&e);1===s&&(e=Y[t.charCodeAt(n)]<<10|Y[t.charCodeAt(n+1)]<<4|Y[t.charCodeAt(n+2)]>>2,o[a++]=e>>8&255,o[a++]=255&e);return o},V=function(t){for(var e,n=t.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(nt(t,o,o+s>a?a:o+s));1===i?(e=t[n-1],r.push(J[e>>2]+J[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],r.push(J[e>>10]+J[e>>4&63]+J[e<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var G,K,J=[],Y=[],X="undefined"!=typeof Uint8Array?Uint8Array:Array,Q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Z=0,tt=Q.length;Z<tt;++Z)J[Z]=Q[Z],Y[Q.charCodeAt(Z)]=Z;function et(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function nt(t,e,n){for(var i,r,s=[],o=e;o<n;o+=3)i=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),s.push(J[(r=i)>>18&63]+J[r>>12&63]+J[r>>6&63]+J[63&r]);return s.join("")}Y["-".charCodeAt(0)]=62,Y["_".charCodeAt(0)]=63,G=function(t,e,n,i,r){var s,o,a=8*r-i-1,l=(1<<a)-1,c=l>>1,h=-7,u=n?r-1:0,d=n?-1:1,p=t[e+u];for(u+=d,s=p&(1<<-h)-1,p>>=-h,h+=a;h>0;s=256*s+t[e+u],u+=d,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=i;h>0;o=256*o+t[e+u],u+=d,h-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(p?-1:1);o+=Math.pow(2,i),s-=c}return(p?-1:1)*o*Math.pow(2,s-i)},K=function(t,e,n,i,r,s){var o,a,l,c=8*s-r-1,h=(1<<c)-1,u=h>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,p=i?0:s-1,f=i?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=h):(o=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-o))<1&&(o--,l*=2),(e+=o+u>=1?d/l:d*Math.pow(2,1-u))*l>=2&&(o++,l/=2),o+u>=h?(a=0,o=h):o+u>=1?(a=(e*l-1)*Math.pow(2,r),o+=u):(a=e*Math.pow(2,u-1)*Math.pow(2,r),o=0));r>=8;t[n+p]=255&a,p+=f,a/=256,r-=8);for(o=o<<r|a,c+=r;c>0;t[n+p]=255&o,p+=f,o/=256,c-=8);t[n+p-f]|=128*g};const it="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;$=st;function rt(t){if(t>2147483647)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,st.prototype),e}function st(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return lt(t)}return ot(t,e,n)}function ot(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!st.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|dt(t,e);let i=rt(n);const r=i.write(t,e);r!==n&&(i=i.slice(0,r));return i}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Vt(t,Uint8Array)){const e=new Uint8Array(t);return ht(e.buffer,e.byteOffset,e.byteLength)}return ct(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Vt(t,ArrayBuffer)||t&&Vt(t.buffer,ArrayBuffer))return ht(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(Vt(t,SharedArrayBuffer)||t&&Vt(t.buffer,SharedArrayBuffer)))return ht(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return st.from(i,e,n);const r=function(t){if(st.isBuffer(t)){const e=0|ut(t.length),n=rt(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||Wt(t.length)?rt(0):ct(t);if("Buffer"===t.type&&Array.isArray(t.data))return ct(t.data)}(t);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return st.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function at(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function lt(t){return at(t),rt(t<0?0:0|ut(t))}function ct(t){const e=t.length<0?0:0|ut(t.length),n=rt(e);for(let i=0;i<e;i+=1)n[i]=255&t[i];return n}function ht(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(i,st.prototype),i}function ut(t){if(t>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|t}function dt(t,e){if(st.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Vt(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Ht(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return $t(t).length;default:if(r)return i?-1:Ht(t).length;e=(""+e).toLowerCase(),r=!0}}function pt(t,e,n){let i=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return St(this,e,n);case"utf8":case"utf-8":return Tt(this,e,n);case"ascii":return It(this,e,n);case"latin1":case"binary":return Ct(this,e,n);case"base64":return Et(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return kt(this,e,n);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function ft(t,e,n){const i=t[e];t[e]=t[n],t[n]=i}function gt(t,e,n,i,r){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Wt(n=+n)&&(n=r?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(r)return-1;n=t.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof e&&(e=st.from(e,i)),st.isBuffer(e))return 0===e.length?-1:mt(t,e,n,i,r);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):mt(t,[e],n,i,r);throw new TypeError("val must be string, number or Buffer")}function mt(t,e,n,i,r){let s,o=1,a=t.length,l=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return-1;o=2,a/=2,l/=2,n/=2}function c(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(r){let i=-1;for(s=n;s<a;s++)if(c(t,s)===c(e,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===l)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){let n=!0;for(let i=0;i<l;i++)if(c(t,s+i)!==c(e,i)){n=!1;break}if(n)return s}return-1}function yt(t,e,n,i){n=Number(n)||0;const r=t.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=e.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(e.substr(2*o,2),16);if(Wt(i))return o;t[n+o]=i}return o}function _t(t,e,n,i){return zt(Ht(e,t.length-n),t,n,i)}function vt(t,e,n,i){return zt(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,i)}function bt(t,e,n,i){return zt($t(e),t,n,i)}function wt(t,e,n,i){return zt(function(t,e){let n,i,r;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(e,t.length-n),t,n,i)}function Et(t,e,n){return 0===e&&n===t.length?V(t):V(t.slice(e,n))}function Tt(t,e,n){n=Math.min(t.length,n);const i=[];let r=e;for(;r<n;){const e=t[r];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(r+o<=n){let n,i,a,l;switch(o){case 1:e<128&&(s=e);break;case 2:n=t[r+1],128==(192&n)&&(l=(31&e)<<6|63&n,l>127&&(s=l));break;case 3:n=t[r+1],i=t[r+2],128==(192&n)&&128==(192&i)&&(l=(15&e)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(s=l));break;case 4:n=t[r+1],i=t[r+2],a=t[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&e)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(s=l))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(t){const e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);let n="",i=0;for(;i<e;)n+=String.fromCharCode.apply(String,t.slice(i,i+=4096));return n}(i)}st.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),st.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(st.prototype,"parent",{enumerable:!0,get:function(){if(st.isBuffer(this))return this.buffer}}),Object.defineProperty(st.prototype,"offset",{enumerable:!0,get:function(){if(st.isBuffer(this))return this.byteOffset}}),st.poolSize=8192,st.from=function(t,e,n){return ot(t,e,n)},Object.setPrototypeOf(st.prototype,Uint8Array.prototype),Object.setPrototypeOf(st,Uint8Array),st.alloc=function(t,e,n){return function(t,e,n){return at(t),t<=0?rt(t):void 0!==e?"string"==typeof n?rt(t).fill(e,n):rt(t).fill(e):rt(t)}(t,e,n)},st.allocUnsafe=function(t){return lt(t)},st.allocUnsafeSlow=function(t){return lt(t)},st.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==st.prototype},st.compare=function(t,e){if(Vt(t,Uint8Array)&&(t=st.from(t,t.offset,t.byteLength)),Vt(e,Uint8Array)&&(e=st.from(e,e.offset,e.byteLength)),!st.isBuffer(t)||!st.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,i=e.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(t[r]!==e[r]){n=t[r],i=e[r];break}return n<i?-1:i<n?1:0},st.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},st.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return st.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const i=st.allocUnsafe(e);let r=0;for(n=0;n<t.length;++n){let e=t[n];if(Vt(e,Uint8Array))r+e.length>i.length?(st.isBuffer(e)||(e=st.from(e)),e.copy(i,r)):Uint8Array.prototype.set.call(i,e,r);else{if(!st.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(i,r)}r+=e.length}return i},st.byteLength=dt,st.prototype._isBuffer=!0,st.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)ft(this,e,e+1);return this},st.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)ft(this,e,e+3),ft(this,e+1,e+2);return this},st.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)ft(this,e,e+7),ft(this,e+1,e+6),ft(this,e+2,e+5),ft(this,e+3,e+4);return this},st.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?Tt(this,0,t):pt.apply(this,arguments)},st.prototype.toLocaleString=st.prototype.toString,st.prototype.equals=function(t){if(!st.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===st.compare(this,t)},st.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},it&&(st.prototype[it]=st.prototype.inspect),st.prototype.compare=function(t,e,n,i,r){if(Vt(t,Uint8Array)&&(t=st.from(t,t.offset,t.byteLength)),!st.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),e<0||n>t.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&e>=n)return 0;if(i>=r)return-1;if(e>=n)return 1;if(this===t)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(e>>>=0);const a=Math.min(s,o),l=this.slice(i,r),c=t.slice(e,n);for(let t=0;t<a;++t)if(l[t]!==c[t]){s=l[t],o=c[t];break}return s<o?-1:o<s?1:0},st.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},st.prototype.indexOf=function(t,e,n){return gt(this,t,e,n,!0)},st.prototype.lastIndexOf=function(t,e,n){return gt(this,t,e,n,!1)},st.prototype.write=function(t,e,n,i){if(void 0===e)i="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)i=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-e;if((void 0===n||n>r)&&(n=r),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return yt(this,t,e,n);case"utf8":case"utf-8":return _t(this,t,e,n);case"ascii":case"latin1":case"binary":return vt(this,t,e,n);case"base64":return bt(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return wt(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},st.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function It(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(127&t[r]);return i}function Ct(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(t[r]);return i}function St(t,e,n){const i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=e;i<n;++i)r+=Gt[t[i]];return r}function kt(t,e,n){const i=t.slice(e,n);let r="";for(let t=0;t<i.length-1;t+=2)r+=String.fromCharCode(i[t]+256*i[t+1]);return r}function Rt(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function At(t,e,n,i,r,s){if(!st.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<s)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function Nt(t,e,n,i,r){Ft(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,n}function Ot(t,e,n,i,r){Ft(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s>>=8,t[n+6]=s,s>>=8,t[n+5]=s,s>>=8,t[n+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=o,o>>=8,t[n+2]=o,o>>=8,t[n+1]=o,o>>=8,t[n]=o,n+8}function Lt(t,e,n,i,r,s){if(n+i>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Pt(t,e,n,i,r){return e=+e,n>>>=0,r||Lt(t,0,n,4),K(t,e,n,i,23,4),n+4}function Dt(t,e,n,i,r){return e=+e,n>>>=0,r||Lt(t,0,n,8),K(t,e,n,i,52,8),n+8}st.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const i=this.subarray(t,e);return Object.setPrototypeOf(i,st.prototype),i},st.prototype.readUintLE=st.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||Rt(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return i},st.prototype.readUintBE=st.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||Rt(t,e,this.length);let i=this[t+--e],r=1;for(;e>0&&(r*=256);)i+=this[t+--e]*r;return i},st.prototype.readUint8=st.prototype.readUInt8=function(t,e){return t>>>=0,e||Rt(t,1,this.length),this[t]},st.prototype.readUint16LE=st.prototype.readUInt16LE=function(t,e){return t>>>=0,e||Rt(t,2,this.length),this[t]|this[t+1]<<8},st.prototype.readUint16BE=st.prototype.readUInt16BE=function(t,e){return t>>>=0,e||Rt(t,2,this.length),this[t]<<8|this[t+1]},st.prototype.readUint32LE=st.prototype.readUInt32LE=function(t,e){return t>>>=0,e||Rt(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},st.prototype.readUint32BE=st.prototype.readUInt32BE=function(t,e){return t>>>=0,e||Rt(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},st.prototype.readBigUInt64LE=Kt((function(t){Bt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||jt(t,this.length-8);const i=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,r=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),st.prototype.readBigUInt64BE=Kt((function(t){Bt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||jt(t,this.length-8);const i=e*2**24+65536*this[++t]+256*this[++t]+this[++t],r=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),st.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||Rt(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*e)),i},st.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||Rt(t,e,this.length);let i=e,r=1,s=this[t+--i];for(;i>0&&(r*=256);)s+=this[t+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*e)),s},st.prototype.readInt8=function(t,e){return t>>>=0,e||Rt(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},st.prototype.readInt16LE=function(t,e){t>>>=0,e||Rt(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},st.prototype.readInt16BE=function(t,e){t>>>=0,e||Rt(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},st.prototype.readInt32LE=function(t,e){return t>>>=0,e||Rt(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},st.prototype.readInt32BE=function(t,e){return t>>>=0,e||Rt(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},st.prototype.readBigInt64LE=Kt((function(t){Bt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||jt(t,this.length-8);const i=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),st.prototype.readBigInt64BE=Kt((function(t){Bt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||jt(t,this.length-8);const i=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(i)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),st.prototype.readFloatLE=function(t,e){return t>>>=0,e||Rt(t,4,this.length),G(this,t,!0,23,4)},st.prototype.readFloatBE=function(t,e){return t>>>=0,e||Rt(t,4,this.length),G(this,t,!1,23,4)},st.prototype.readDoubleLE=function(t,e){return t>>>=0,e||Rt(t,8,this.length),G(this,t,!0,52,8)},st.prototype.readDoubleBE=function(t,e){return t>>>=0,e||Rt(t,8,this.length),G(this,t,!1,52,8)},st.prototype.writeUintLE=st.prototype.writeUIntLE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){At(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[e]=255&t;++s<n&&(r*=256);)this[e+s]=t/r&255;return e+n},st.prototype.writeUintBE=st.prototype.writeUIntBE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){At(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[e+r]=255&t;--r>=0&&(s*=256);)this[e+r]=t/s&255;return e+n},st.prototype.writeUint8=st.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,1,255,0),this[e]=255&t,e+1},st.prototype.writeUint16LE=st.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},st.prototype.writeUint16BE=st.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},st.prototype.writeUint32LE=st.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},st.prototype.writeUint32BE=st.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},st.prototype.writeBigUInt64LE=Kt((function(t,e=0){return Nt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),st.prototype.writeBigUInt64BE=Kt((function(t,e=0){return Ot(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),st.prototype.writeIntLE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);At(this,t,e,n,i-1,-i)}let r=0,s=1,o=0;for(this[e]=255&t;++r<n&&(s*=256);)t<0&&0===o&&0!==this[e+r-1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},st.prototype.writeIntBE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);At(this,t,e,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[e+r]=255&t;--r>=0&&(s*=256);)t<0&&0===o&&0!==this[e+r+1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},st.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},st.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},st.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},st.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},st.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},st.prototype.writeBigInt64LE=Kt((function(t,e=0){return Nt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),st.prototype.writeBigInt64BE=Kt((function(t,e=0){return Ot(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),st.prototype.writeFloatLE=function(t,e,n){return Pt(this,t,e,!0,n)},st.prototype.writeFloatBE=function(t,e,n){return Pt(this,t,e,!1,n)},st.prototype.writeDoubleLE=function(t,e,n){return Dt(this,t,e,!0,n)},st.prototype.writeDoubleBE=function(t,e,n){return Dt(this,t,e,!1,n)},st.prototype.copy=function(t,e,n,i){if(!st.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);const r=i-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),e),r},st.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!st.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){const e=t.charCodeAt(0);("utf8"===i&&e<128||"latin1"===i)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let r;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(r=e;r<n;++r)this[r]=t;else{const s=st.isBuffer(t)?t:st.from(t,i),o=s.length;if(0===o)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(r=0;r<n-e;++r)this[r+e]=s[r%o]}return this};const xt={};function Mt(t,e,n){xt[t]=class extends n{get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}}}function Ut(t){let e="",n=t.length;const i="-"===t[0]?1:0;for(;n>=i+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function Ft(t,e,n,i,r,s){if(t>n||t<e){const i="bigint"==typeof e?"n":"";let r;throw r=s>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${e}${i} and <= ${n}${i}`,new xt.ERR_OUT_OF_RANGE("value",r,t)}!function(t,e,n){Bt(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||jt(e,t.length-(n+1))}(i,r,s)}function Bt(t,e){if("number"!=typeof t)throw new xt.ERR_INVALID_ARG_TYPE(e,"number",t)}function jt(t,e,n){if(Math.floor(t)!==t)throw Bt(t,n),new xt.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new xt.ERR_BUFFER_OUT_OF_BOUNDS;throw new xt.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}Mt("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Mt("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),Mt("ERR_OUT_OF_RANGE",(function(t,e,n){let i=`The value of "${t}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=Ut(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=Ut(r)),r+="n"),i+=` It must be ${e}. Received ${r}`,i}),RangeError);const qt=/[^+/0-9A-Za-z-_]/g;function Ht(t,e){let n;e=e||1/0;const i=t.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=t.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(e-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(e-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function $t(t){return z(function(t){if((t=(t=t.split("=")[0]).trim().replace(qt,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function zt(t,e,n,i){let r;for(r=0;r<i&&!(r+n>=e.length||r>=t.length);++r)e[r+n]=t[r];return r}function Vt(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Wt(t){return t!=t}const Gt=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)e[i+r]=t[n]+t[r]}return e}();function Kt(t){return"undefined"==typeof BigInt?Jt:t}function Jt(){throw new Error("BigInt not supported")}var Yt=$;function Xt(t){return B.isPlainObject(t)||B.isArray(t)}function Qt(t){return B.endsWith(t,"[]")?t.slice(0,-2):t}function Zt(t,e,n){return t?t.concat(e).map((function(t,e){return t=Qt(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const te=B.toFlatObject(B,{},null,(function(t){return/^is[A-Z]/.test(t)}));var ee=function(t,e,n){if(!B.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const i=(n=B.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!B.isUndefined(e[t])}))).metaTokens,r=n.visitor||c,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&B.isSpecCompliantForm(e);if(!B.isFunction(r))throw new TypeError("visitor must be a function");function l(t){if(null===t)return"";if(B.isDate(t))return t.toISOString();if(!a&&B.isBlob(t))throw new W("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(t)||B.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Yt.from(t):t}function c(t,n,r){let a=t;if(t&&!r&&"object"==typeof t)if(B.endsWith(n,"{}"))n=i?n:n.slice(0,-2),t=JSON.stringify(t);else if(B.isArray(t)&&function(t){return B.isArray(t)&&!t.some(Xt)}(t)||(B.isFileList(t)||B.endsWith(n,"[]"))&&(a=B.toArray(t)))return n=Qt(n),a.forEach((function(t,i){!B.isUndefined(t)&&null!==t&&e.append(!0===o?Zt([n],i,s):null===o?n:n+"[]",l(t))})),!1;return!!Xt(t)||(e.append(Zt(r,n,s),l(t)),!1)}const h=[],u=Object.assign(te,{defaultVisitor:c,convertValue:l,isVisitable:Xt});if(!B.isObject(t))throw new TypeError("data must be an object");return function t(n,i){if(!B.isUndefined(n)){if(-1!==h.indexOf(n))throw Error("Circular reference detected in "+i.join("."));h.push(n),B.forEach(n,(function(n,s){!0===(!(B.isUndefined(n)||null===n)&&r.call(e,n,B.isString(s)?s.trim():s,i,u))&&t(n,i?i.concat(s):[s])})),h.pop()}}(t),e};function ne(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function ie(t,e){this._pairs=[],t&&ee(t,this,e)}const re=ie.prototype;re.append=function(t,e){this._pairs.push([t,e])},re.toString=function(t){const e=t?function(e){return t.call(this,e,ne)}:ne;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var se=ie;function oe(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ae(t,e,n){if(!e)return t;const i=n&&n.encode||oe,r=n&&n.serialize;let s;if(s=r?r(e,n):B.isURLSearchParams(e)?e.toString():new se(e,n).toString(i),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}var le=class{use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){B.forEach(this.handlers,(function(e){null!==e&&t(e)}))}constructor(){this.handlers=[]}},ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},he="undefined"!=typeof URLSearchParams?URLSearchParams:se,ue=FormData;const de=(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),pe="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var fe={isBrowser:!0,classes:{URLSearchParams:he,FormData:ue,Blob:Blob},isStandardBrowserEnv:de,isStandardBrowserWebWorkerEnv:pe,protocols:["http","https","file","blob","url","data"]};function ge(t,e){return ee(t,new fe.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return fe.isNode&&B.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}var me=function(t){function e(t,n,i,r){let s=t[r++];const o=Number.isFinite(+s),a=r>=t.length;if(s=!s&&B.isArray(i)?i.length:s,a)return B.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&B.isObject(i[s])||(i[s]=[]);return e(t,n,i[s],r)&&B.isArray(i[s])&&(i[s]=function(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}(i[s])),!o}if(B.isFormData(t)&&B.isFunction(t.entries)){const n={};return B.forEachEntry(t,((t,i)=>{e(function(t){return B.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),i,n,0)})),n}return null};const ye={"Content-Type":void 0};const _e={transitional:ce,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,r=B.isObject(t);r&&B.isHTMLForm(t)&&(t=new FormData(t));if(B.isFormData(t))return i&&i?JSON.stringify(me(t)):t;if(B.isArrayBuffer(t)||B.isBuffer(t)||B.isStream(t)||B.isFile(t)||B.isBlob(t))return t;if(B.isArrayBufferView(t))return t.buffer;if(B.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return ge(t,this.formSerializer).toString();if((s=B.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return ee(s?{"files[]":t}:t,e&&new e,this.formSerializer)}}return r||i?(e.setContentType("application/json",!1),function(t,e,n){if(B.isString(t))try{return(e||JSON.parse)(t),B.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||_e.transitional,n=e&&e.forcedJSONParsing,i="json"===this.responseType;if(t&&B.isString(t)&&(n&&!this.responseType||i)){const n=!(e&&e.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw W.from(t,W.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:fe.classes.FormData,Blob:fe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};B.forEach(["delete","get","head"],(function(t){_e.headers[t]={}})),B.forEach(["post","put","patch"],(function(t){_e.headers[t]=B.merge(ye)}));var ve=_e;const be=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var we=t=>{const e={};let n,i,r;return t&&t.split("\n").forEach((function(t){r=t.indexOf(":"),n=t.substring(0,r).trim().toLowerCase(),i=t.substring(r+1).trim(),!n||e[n]&&be[n]||("set-cookie"===n?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)})),e};const Ee=Symbol("internals");function Te(t){return t&&String(t).trim().toLowerCase()}function Ie(t){return!1===t||null==t?t:B.isArray(t)?t.map(Ie):String(t)}function Ce(t,e,n,i){return B.isFunction(i)?i.call(this,e,n):B.isString(e)?B.isString(i)?-1!==e.indexOf(i):B.isRegExp(i)?i.test(e):void 0:void 0}let Se=Symbol.iterator,ke=Symbol.toStringTag;class Re{set(t,e,n){const i=this;function r(t,e,n){const r=Te(e);if(!r)throw new Error("header name must be a non-empty string");const s=B.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||e]=Ie(t))}const s=(t,e)=>B.forEach(t,((t,n)=>r(t,n,e)));return B.isPlainObject(t)||t instanceof this.constructor?s(t,e):B.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z]+$/.test(t.trim())?s(we(t),e):null!=t&&r(e,t,n),this}get(t,e){if(t=Te(t)){const n=B.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}(t);if(B.isFunction(e))return e.call(this,t,n);if(B.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=Te(t)){const n=B.findKey(this,t);return!(!n||void 0===this[n]||e&&!Ce(0,this[n],n,e))}return!1}delete(t,e){const n=this;let i=!1;function r(t){if(t=Te(t)){const r=B.findKey(n,t);!r||e&&!Ce(0,n[r],r,e)||(delete n[r],i=!0)}}return B.isArray(t)?t.forEach(r):r(t),i}clear(t){const e=Object.keys(this);let n=e.length,i=!1;for(;n--;){const r=e[n];t&&!Ce(0,this[r],r,t)||(delete this[r],i=!0)}return i}normalize(t){const e=this,n={};return B.forEach(this,((i,r)=>{const s=B.findKey(n,r);if(s)return e[s]=Ie(i),void delete e[r];const o=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete e[r],e[o]=Ie(i),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return B.forEach(this,((n,i)=>{null!=n&&!1!==n&&(e[i]=t&&B.isArray(n)?n.join(", "):n)})),e}[Se](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[ke](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[Ee]=this[Ee]={accessors:{}}).accessors,n=this.prototype;function i(t){const i=Te(t);e[i]||(!function(t,e){const n=B.toCamelCase(" "+e);["get","set","has"].forEach((i=>{Object.defineProperty(t,i+n,{value:function(t,n,r){return this[i].call(this,e,t,n,r)},configurable:!0})}))}(n,t),e[i]=!0)}return B.isArray(t)?t.forEach(i):i(t),this}constructor(t){t&&this.set(t)}}Re.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),B.freezeMethods(Re.prototype),B.freezeMethods(Re);var Ae=Re;function Ne(t,e){const n=this||ve,i=e||n,r=Ae.from(i.headers);let s=i.data;return B.forEach(t,(function(t){s=t.call(n,s,r.normalize(),e?e.status:void 0)})),r.normalize(),s}function Oe(t){return!(!t||!t.__CANCEL__)}function Le(t,e,n){W.call(this,null==t?"canceled":t,W.ERR_CANCELED,e,n),this.name="CanceledError"}B.inherits(Le,W,{__CANCEL__:!0});var Pe=Le;function De(t,e,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var xe=fe.isStandardBrowserEnv?{write:function(t,e,n,i,r,s){const o=[];o.push(t+"="+encodeURIComponent(e)),B.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),B.isString(i)&&o.push("path="+i),B.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Me(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Ue(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?Me(t,e):e}var Fe=fe.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function i(n){let i=n;return t&&(e.setAttribute("href",i),i=e.href),e.setAttribute("href",i),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){const e=B.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function Be(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}var je=function(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const l=Date.now(),c=i[o];r||(r=l),n[s]=a,i[s]=l;let h=o,u=0;for(;h!==s;)u+=n[h++],h%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),l-r<e)return;const d=c&&l-c;return d?Math.round(1e3*u/d):void 0}};function qe(t,e){let n=0;const i=je(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,l=i(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:r};c[e?"download":"upload"]=!0,t(c)}}var He="undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let i=t.data;const r=Ae.from(t.headers).normalize(),s=t.responseType;let o;function a(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}B.isFormData(i)&&(fe.isStandardBrowserEnv||fe.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let l=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(e+":"+n))}const c=Ue(t.baseURL,t.url);function h(){if(!l)return;const i=Ae.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());De((function(t){e(t),a()}),(function(t){n(t),a()}),{data:s&&"text"!==s&&"json"!==s?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:i,config:t,request:l}),l=null}if(l.open(t.method.toUpperCase(),ae(c,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,"onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(h)},l.onabort=function(){l&&(n(new W("Request aborted",W.ECONNABORTED,t,l)),l=null)},l.onerror=function(){n(new W("Network Error",W.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const i=t.transitional||ce;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new W(e,i.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,t,l)),l=null},fe.isStandardBrowserEnv){const e=(t.withCredentials||Fe(c))&&t.xsrfCookieName&&xe.read(t.xsrfCookieName);e&&r.set(t.xsrfHeaderName,e)}void 0===i&&r.setContentType(null),"setRequestHeader"in l&&B.forEach(r.toJSON(),(function(t,e){l.setRequestHeader(e,t)})),B.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),s&&"json"!==s&&(l.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",qe(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",qe(t.onUploadProgress)),(t.cancelToken||t.signal)&&(o=e=>{l&&(n(!e||e.type?new Pe(null,t,l):e),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));const u=Be(c);u&&-1===fe.protocols.indexOf(u)?n(new W("Unsupported protocol "+u+":",W.ERR_BAD_REQUEST,t)):l.send(i||null)}))};const $e={http:null,xhr:He};B.forEach($e,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var ze={getAdapter:t=>{t=B.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let r=0;r<e&&(n=t[r],!(i=B.isString(n)?$e[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new W(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(B.hasOwnProp($e,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!B.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:$e};function Ve(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Pe(null,t)}function We(t){Ve(t),t.headers=Ae.from(t.headers),t.data=Ne.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return ze.getAdapter(t.adapter||ve.adapter)(t).then((function(e){return Ve(t),e.data=Ne.call(t,t.transformResponse,e),e.headers=Ae.from(e.headers),e}),(function(e){return Oe(e)||(Ve(t),e&&e.response&&(e.response.data=Ne.call(t,t.transformResponse,e.response),e.response.headers=Ae.from(e.response.headers))),Promise.reject(e)}))}const Ge=t=>t instanceof Ae?t.toJSON():t;function Ke(t,e){e=e||{};const n={};function i(t,e,n){return B.isPlainObject(t)&&B.isPlainObject(e)?B.merge.call({caseless:n},t,e):B.isPlainObject(e)?B.merge({},e):B.isArray(e)?e.slice():e}function r(t,e,n){return B.isUndefined(e)?B.isUndefined(t)?void 0:i(void 0,t,n):i(t,e,n)}function s(t,e){if(!B.isUndefined(e))return i(void 0,e)}function o(t,e){return B.isUndefined(e)?B.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}function a(n,r,s){return s in e?i(n,r):s in t?i(void 0,n):void 0}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e)=>r(Ge(t),Ge(e),!0)};return B.forEach(Object.keys(t).concat(Object.keys(e)),(function(i){const s=l[i]||r,o=s(t[i],e[i],i);B.isUndefined(o)&&s!==a||(n[i]=o)})),n}const Je={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{Je[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Ye={};Je.transitional=function(t,e,n){function i(t,e){return"[Axios v1.3.2] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,r,s)=>{if(!1===t)throw new W(i(r," has been removed"+(e?" in "+e:"")),W.ERR_DEPRECATED);return e&&!Ye[r]&&(Ye[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,s)}};var Xe={assertOptions:function(t,e,n){if("object"!=typeof t)throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new W("option "+s+" must be "+n,W.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new W("Unknown option "+s,W.ERR_BAD_OPTION)}},validators:Je};const Qe=Xe.validators;class Ze{request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=Ke(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:r}=e;let s;void 0!==n&&Xe.assertOptions(n,{silentJSONParsing:Qe.transitional(Qe.boolean),forcedJSONParsing:Qe.transitional(Qe.boolean),clarifyTimeoutError:Qe.transitional(Qe.boolean)},!1),void 0!==i&&Xe.assertOptions(i,{encode:Qe.function,serialize:Qe.function},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase(),s=r&&B.merge(r.common,r[e.method]),s&&B.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete r[t]})),e.headers=Ae.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(t){l.push(t.fulfilled,t.rejected)}));let h,u=0;if(!a){const t=[We.bind(this),void 0];for(t.unshift.apply(t,o),t.push.apply(t,l),h=t.length,c=Promise.resolve(e);u<h;)c=c.then(t[u++],t[u++]);return c}h=o.length;let d=e;for(u=0;u<h;){const t=o[u++],e=o[u++];try{d=t(d)}catch(t){e.call(this,t);break}}try{c=We.call(this,d)}catch(t){return Promise.reject(t)}for(u=0,h=l.length;u<h;)c=c.then(l[u++],l[u++]);return c}getUri(t){return ae(Ue((t=Ke(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}constructor(t){this.defaults=t,this.interceptors={request:new le,response:new le}}}B.forEach(["delete","get","head","options"],(function(t){Ze.prototype[t]=function(e,n){return this.request(Ke(n||{},{method:t,url:e,data:(n||{}).data}))}})),B.forEach(["post","put","patch"],(function(t){function e(e){return function(n,i,r){return this.request(Ke(r||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}Ze.prototype[t]=e(),Ze.prototype[t+"Form"]=e(!0)}));var tn=Ze;class en{throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new en((function(e){t=e})),cancel:t}}constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const i=new Promise((t=>{n.subscribe(t),e=t})).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t((function(t,i,r){n.reason||(n.reason=new Pe(t,i,r),e(n.reason))}))}}var nn=en;const rn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(rn).forEach((([t,e])=>{rn[e]=t}));var sn=rn;const on=function t(e){const n=new tn(e),i=l(tn.prototype.request,n);return B.extend(i,tn.prototype,n,{allOwnKeys:!0}),B.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return t(Ke(e,n))},i}(ve);on.Axios=tn,on.CanceledError=Pe,on.CancelToken=nn,on.isCancel=Oe,on.VERSION="1.3.2",on.toFormData=ee,on.AxiosError=W,on.Cancel=on.CanceledError,on.all=function(t){return Promise.all(t)},on.spread=function(t){return function(e){return t.apply(null,e)}},on.isAxiosError=function(t){return B.isObject(t)&&!0===t.isAxiosError},on.mergeConfig=Ke,on.AxiosHeaders=Ae,on.formToJSON=t=>me(B.isHTMLForm(t)?new FormData(t):t),on.HttpStatusCode=sn,on.default=on;var an=on;const{Axios:ln,AxiosError:cn,CanceledError:hn,isCancel:un,CancelToken:dn,VERSION:pn,all:fn,Cancel:gn,isAxiosError:mn,spread:yn,toFormData:_n,AxiosHeaders:vn,HttpStatusCode:bn,formToJSON:wn,mergeConfig:En}=an;async function Tn(t,e){try{const n=await an.get(`https://api.themoviedb.org/3/search/movie?api_key=2a9019ab3cb7c560ad73000751e89f97&page=${e}&language=en-US&query=${t}&include_adult=false`);return n.data}catch(t){console.log(t)}}async function In(t=1){try{const e=await an.get(`https://api.themoviedb.org/3/movie/popular?api_key=2a9019ab3cb7c560ad73000751e89f97&page=${t}&language=en-US&include_adult=false`);return e.data}catch(t){console.log(t)}}async function Cn(t){try{return(await an.get(`https://api.themoviedb.org/3/movie/${t}?api_key=2a9019ab3cb7c560ad73000751e89f97&language=en-US`)).data}catch(t){console.log("there is no such ID")}}async function Sn(t){try{return(await an.get(`https://api.themoviedb.org/3/movie/${t}/videos?api_key=2a9019ab3cb7c560ad73000751e89f97&language=en-US`)).data}catch(t){console.log("there is no such ID")}}function kn(t){const e=t.genresArr.join(", "),n=t.vote_average.toFixed(1),i=t.popularity.toFixed(1),r=t.title.toUpperCase();return`\n  <div class="image-btn-wrapper">\n  <img\n    class="modal-container__img"\n    src="https://image.tmdb.org/t/p/w500${t.poster_path}"\n    alt="movie-poster"\n  />\n</div>\n  <div class = 'modal-container__fullInfo'>\n  <h2 class = 'modal-container__title'>${r}</h2>\n  <div class = 'modal-container__info'>\n  <div class = 'modal-container__info--key'> \n  <p class = 'modal-container__info--keytext'>Vote / Votes</p>\n  <p class = 'modal-container__info--keytext'>Popularity</p>\n  <p  class = 'modal-container__info--keytext'>Original Title</p>\n  <p  class = 'modal-container__info--keytext'>Genre</p>\n  </div>\n  <div >\n  <p class = 'modal-container__info--valuetext'><span class = 'avarage-effects'>${n}</span> / <span class = 'count-effect'>${t.vote_count}</span></p>\n  <p class = 'modal-container__info--valuetext'>${i}</p>\n  <p class = 'modal-container__info--valuetext'>${r}</p>\n  <p class = 'modal-container__info--valuetext'>${e}</p>\n  </div>\n  </div>\n  <h3 class = 'modal-container__second-title'>ABOUT</h3>\n  <p class = 'modal-container__description'>${t.overview}</p>\n  <div class = 'btn-container'>\n      <button data-id="${t.id}" class="trailers" type="button" data-modal-open>\n    <img\n      data-id="${t.id}"\n      class="icon-youtube"\n      src="https://cdn-icons-png.flaticon.com/512/49/49084.png"\n      alt="logo"\n    />\n    <span data-id="${t.id}" class="trailers-text">Trailer</span>\n  </button>\n  <button class="watched" id='watched-modal' type="button">add to Watched</button>\n  <button class="queue" id='queue-modal' type="button">add to queue</button>\n  </div>\n  \n\n  `}let Rn;async function An(t){t.stopPropagation,console.dir(t.target),"movie-gallery__photo"===t.target.className&&e.backdropEl.classList.remove("is-hidden");const n=t.target.offsetParent.dataset.id,i=await Cn(n),{poster_path:r,genres:s,overview:o,id:a,vote_average:l,vote_count:c,popularity:h,original_title:u,title:d,release_date:p}=i,f=p.slice(0,4),g=[...s].map((t=>t.name));Rn={poster_path:r,genresArr:g,overview:o,id:a,vote_average:l,vote_count:c,popularity:h,original_title:u,title:d,releaseDate:f};const m=kn(Rn);e.containerEl.innerHTML=m}e.filmGalleryHomeEl&&e.filmGalleryHomeEl.addEventListener("click",(t=>An(t))),e.filmGalleryLibraryEl&&e.filmGalleryLibraryEl.addEventListener("click",(t=>An(t))),e.modalEl&&e.modalEl.addEventListener("click",(t=>{if("ADD TO WATCHED"===t.target.innerText){t.stopPropagation;const e=JSON.parse(localStorage.getItem("add-to-watch"));if(e){e.push(Rn);const t="id",n=[...new Map(e.map((e=>[e[t],e]))).values()];localStorage.setItem("add-to-watch",JSON.stringify(n))}else{const t=[Rn];t.push,localStorage.setItem("add-to-watch",JSON.stringify(t)),console.log(t)}}if("ADD TO QUEUE"===t.target.innerText){t.stopPropagation;const e=JSON.parse(localStorage.getItem("add-to-queue"));if(e){e.push(Rn);const t="id",n=[...new Map(e.map((e=>[e[t],e]))).values()];localStorage.setItem("add-to-queue",JSON.stringify(n))}else{const t=[Rn];t.push,localStorage.setItem("add-to-queue",JSON.stringify(t))}}"modal__close-btn"===t.target.classList.value&&e.backdropEl.classList.add("is-hidden")}));const Nn={12:"Adventure",14:"Fantasy",16:"Animation",18:"Drama",27:"Horror",28:"Action",35:"Comedy",36:"History",37:"Western",53:"Thriller",80:"Crime",99:"Documentary",878:"Science Fiction",9648:"Mystery",10402:"Music",10751:"Family",10752:"War",10770:"TV Movie"};function On(t,e,n,i,r,s){const o=r.slice(0,4);return`\n   <li class="movie-gallery__item" >\n    <div class="movie-gallery__poster" data-id="${t}">\n      <img\n        class="movie-gallery__photo"\n        src="https://image.tmdb.org/t/p/w500${e}"\n        alt="${n}"\n      />\n    </div>\n    <div class="movie-gallery__wrap">\n      <h2 class="movie-gallery__title">${n}</h2>\n      <div class="movie-info">\n        <p class="movie-info__genre">${i.map((t=>Nn[t])).join(", ")} | ${o}</p>\n         <span class="movie-info__vote">IMDb: ${s}</span>\n      </div>\n    </div>\n  </li>`}function Ln(t){return t.map((t=>{const{id:e,poster_path:n,title:i,genre_ids:r,release_date:s,vote_average:o}=t;return On(e,n,i,r,s,o)})).join("")}function Pn(){e.inputAnswerParEl.innerHTML="Search result not successful. Enter the correct movie name and"}function Dn(t,e){let n="";return e>9?(1===t&&(n=` <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">2</button>\n        <button class="pgn-btn" type="button">3</button>\n        <button class="pgn-btn" type="button">4</button>\n        <button class="pgn-btn pgn-mobbile" type="button">5</button>\n        <span class="pgn-dots">...</span>\n        <button class="pgn-btn last-number" type="button">${e}</button>\n        <button class="pgn-btn next" type="button">\n            <svg class="next" width="20" height="20" viewBox="0 0 32 32">\n            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>\n            </svg>\n        </button>`),2===t&&(n=`\n        <button data-action="previos" class="pgn-btn previos" type="button">\n            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">\n            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>\n            </svg>\n        </button>\n        <button class="pgn-btn" type="button">1</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">3</button>\n        <button class="pgn-btn pgn-mobbile" type="button">4</button>\n        <button class="pgn-btn pgn-mobbile" type="button">5</button>\n        <span class="pgn-dots">...</span>\n        <button class="pgn-btn last-number" type="button">${e}</button>\n        <button class="pgn-btn next" type="button">\n            <svg class="next" width="20" height="20" viewBox="0 0 32 32">\n            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>\n            </svg>\n        </button>`),3===t&&(n=`\n        <button data-action="previos" class="pgn-btn previos" type="button">\n            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">\n            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>\n            </svg>\n        </button>\n        <button class="pgn-btn" type="button">1</button>\n        <button class="pgn-btn" type="button">${t-1}</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">${t+1}</button>\n        <button class="pgn-btn" type="button">${t+2}</button>\n        <span class="pgn-dots">...</span>\n        <button class="pgn-btn last-number" type="button">${e}</button>\n        <button class="pgn-btn next" type="button">\n            <svg class="next" width="20" height="20" viewBox="0 0 32 32">\n            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>\n            </svg>\n        </button>`),t>3&&t<e&&(n=`\n        <button data-action="previos" class="pgn-btn previos" type="button">\n            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">\n            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>\n            </svg>\n        </button>\n        <button class="pgn-btn first-number" type="button">1</button>\n        <span class="pgn-dots">...</span>\n        <button class="pgn-btn" type="button">${t-2}</button>\n        <button class="pgn-btn" type="button">${t-1}</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">${t+1}</button>\n        <button class="pgn-btn" type="button">${t+2}</button>\n        <span class="pgn-dots">...</span>\n        <button class="pgn-btn last-number" type="button">${e}</button>\n        <button class="pgn-btn next" type="button">\n            <svg class="next" width="20" height="20" viewBox="0 0 32 32">\n            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>\n            </svg>\n        </button>`),t===e-2&&(n=`\n        <button data-action="previos" class="pgn-btn previos" type="button">\n            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">\n            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>\n            </svg>\n        </button>\n        <button class="pgn-btn first-number" type="button">1</button>\n        <span class="pgn-dots">...</span>\n        <button class="pgn-btn" type="button">${t-2}</button>\n        <button class="pgn-btn" type="button">${t-1}</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">${t+1}</button>\n        <button class="pgn-btn" type="button">${e}</button>\n        <button class="pgn-btn next" type="button">\n            <svg class="next" width="20" height="20" viewBox="0 0 32 32">\n            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>\n            </svg>\n        </button>`),t===e-1&&(n=`\n        <button data-action="previos" class="pgn-btn previos" type="button">\n            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">\n            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>\n            </svg>\n        </button>\n        <button class="pgn-btn first-number" type="button">1</button>\n        <span class="pgn-dots">...</span>\n        <button class="pgn-btn pgn-mobbile" type="button">${t-3}</button>\n        <button class="pgn-btn pgn-mobbile" type="button">${t-2}</button>\n        <button class="pgn-btn" type="button">${t-1}</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">${e}</button>\n        <button class="pgn-btn next" type="button">\n            <svg class="next" width="20" height="20" viewBox="0 0 32 32">\n            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>\n            </svg>\n        </button>`),t===e&&(n=` \n        <button data-action="previos" class="pgn-btn previos" type="button">\n            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">\n            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>\n            </svg>\n        </button>\n        <button class="pgn-btn first-number" type="button">1</button>\n        <span class="pgn-dots">...</span>\n        <button class="pgn-btn pgn-mobbile" type="button">${e-3}</button>\n        <button class="pgn-btn" type="button">${e-2}</button>\n        <button class="pgn-btn" type="button">${e-1}</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>`)):1===e?n=`<button class="pgn-current pgn-btn" type="button" disabled>${t}</button>`:2===e?(1===t&&(n=`<button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">2</button>`),2===t&&(n=`\n        <button class="pgn-btn" type="button">1</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>`)):3===e?(1===t&&(n=`<button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">2</button>\n        <button class="pgn-btn" type="button">3</button>`),2===t&&(n=`\n        <button class="pgn-btn" type="button">1</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">3</button>`),3===t&&(n=`\n        <button class="pgn-btn" type="button">1</button>\n        <button class="pgn-btn" type="button">2</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>`)):4===e&&(1===t&&(n=`<button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">2</button>\n        <button class="pgn-btn" type="button">3</button>\n        <button class="pgn-btn" type="button">4</button>`),2===t&&(n=`\n        <button class="pgn-btn" type="button">1</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">3</button>\n        <button class="pgn-btn" type="button">4</button>`),3===t&&(n=`\n        <button class="pgn-btn" type="button">1</button>\n        <button class="pgn-btn" type="button">2</button>\n        <button class="pgn-btn" type="button">3</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>`)),n}let xn=1;async function Mn(t){if(e.inputAnswerParEl.textContent)console.log(e.inputAnswerParEl.textContent);else if("DIV"!==t.target.nodeName&&"SPAN"!==t.target.nodeName){e.pageBtns.innerHTML="",e.pageBtnsInput.innerHTML="",e.loaderEl.classList.remove("hidden"),t.target.classList.contains("previos")?xn-=1:t.target.classList.contains("next")?xn+=1:xn=Number(t.target.textContent);const n=await In(xn);e.loaderEl.classList.add("hidden");const{results:i}=n;let r=99;const s=n.page,o=Ln([...i]);e.filmGalleryHomeEl.innerHTML=o;const a=Dn(s,r);e.pageBtnsInput.innerHTML="",e.pageBtns.innerHTML=a}}let Un=1;async function Fn(t,n,i){if(e.pageBtns.innerHTML="",e.pageBtnsInput.innerHTML="","DIV"!==t.target.nodeName&&"SPAN"!==t.target.nodeName){e.filmGalleryHomeEl.innerHTML="",e.loaderEl.classList.remove("hidden"),t.target.classList.contains("previos")?Un-=1:t.target.classList.contains("next")?Un+=1:Un=Number(t.target.textContent);const r=await Tn(n,Un);e.loaderEl.classList.add("hidden");const{results:s}=r;i=r.total_pages>99?99:r.total_pages;const o=r.page,a=Ln([...s]);e.filmGalleryHomeEl.innerHTML=a;const l=Dn(o,i);e.pageBtns.innerHTML="",e.pageBtnsInput.innerHTML=l}}async function Bn(t){e.choiceBtnEl.classList.add("hidden"),t.preventDefault(),t.preventDefault(),e.pageBtns.innerHTML="",e.pageBtnsInput.innerHTML="";const n=t.target.elements.input.value;if(""===n.trim())return void Pn();e.filmGalleryHomeEl.innerHTML="",e.loaderEl.classList.remove("hidden");const i=await Tn(n);if(e.loaderEl.classList.add("hidden"),0===i.total_results)return void Pn();e.inputAnswerParEl.innerHTML="";const{results:r}=i;console.log(i);const s=[...r],o=i.page;let a;i.total_pages>99?a=99:i.total_pages<99&&(a=i.total_pages),console.log(a);const l=Ln(s);e.filmGalleryHomeEl.innerHTML=l;const c=Dn(o,a);e.pageBtns.innerHTML="",e.pageBtnsInput.innerHTML=c,e.pageBtnsInput.addEventListener("click",(e=>{e.target!==e.currentTarget&&"SPAN"!==e.target.nodeName?(console.log(e.target.nodeName),Fn(e,n,a)):console.log(t.target)}))}function jn(t){"Escape"===t.key&&(e.trailerBackdrop.classList.add("is-hidden"),e.boxIframe.innerHTML="")}function qn(){document.querySelector(".button-watched").classList.remove("current"),document.querySelector(".button-queue").classList.add("current");const t=function(){const t=localStorage.getItem("add-to-queue");if(!t)return console.log("nothing"),"<p>Nothing here yet</p>";console.log("saveMovie",t);const e=JSON.parse(t);console.log("parseMovie",e);return e.map((t=>{const{id:e,poster_path:n,title:i,genresArr:r,releaseDate:s,vote_average:o}=t;console.log("vote_average",o);const a=o.toFixed(1);console.log("avarage",a),console.log("poster_path",n);return`\n   <li class="movie-gallery__item" >\n    <div class="movie-gallery__poster" data-id="${e}">\n      <img\n        class="movie-gallery__photo"\n        src="${"https://image.tmdb.org/t/p/w500"}${n}"\n        alt="${i}"\n      />\n    </div>\n    <div class="movie-gallery__wrap">\n      <h2 class="movie-gallery__title">${i}</h2>\n      <div class="movie-info">\n        <p class="movie-info__genre">${r} | ${s}</p>\n         <span class="movie-info__vote">IMDb: ${a}</span>\n      </div>\n    </div>\n  </li>`})).join("")}();e.filmGalleryLibraryEl.innerHTML=t}e.modalEl.addEventListener("click",(async function(t){if("trailers"!==t.target.className&&"icon-youtube"!==t.target.className&&"trailers-text"!==t.target.className)return;e.trailerBackdrop.classList.remove("is-hidden");const n=t.target.dataset.id;try{const t=await Sn(n),{results:i}=t,r=[...i],s=`\n    <iframe class='trailer-iframe' width="auto" height="auto" src='https://www.youtube.com/embed/${r[0].key}' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n     `;e.boxIframe.innerHTML=s}catch(t){const n='\n    <iframe class=\'trailer-iframe\' width="auto" height="auto" src=\'https://www.youtube.com/embed/zwBpUdZ0lrQ\' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n      ';e.boxIframe.innerHTML=n,jn()}})),e.trailerBackdrop&&e.trailerBtnClose.addEventListener("click",(function(){e.trailerBackdrop.classList.add("is-hidden"),e.boxIframe.innerHTML=""})),window.addEventListener("keydown",jn),e.trailerBackdrop&&e.trailerBackdrop.addEventListener("click",(function(t){if("trailer-backdrop"!==t.target.className)return;e.trailerBackdrop.classList.add("is-hidden"),e.boxIframe.innerHTML=""})),document.querySelector(".button-watched")&&document.querySelector(".button-watched").addEventListener("click",(function(){document.querySelector(".button-watched").classList.add("current"),document.querySelector(".button-queue").classList.remove("current");const t=function(){const t=localStorage.getItem("add-to-watch");if(!t)return"<p>Nothing here yet</p>";const e=JSON.parse(t);console.log("parseMovie",e);return e.map((t=>{const{id:e,poster_path:n,title:i,genresArr:r,releaseDate:s,vote_average:o}=t;return`\n   <li class="movie-gallery__item" >\n    <div class="movie-gallery__poster" data-id="${e}">\n      <img\n        class="movie-gallery__photo"\n        src="${"https://image.tmdb.org/t/p/w500"}${n}"\n        alt="${i}"\n      />\n    </div>\n    <div class="movie-gallery__wrap">\n      <h2 class="movie-gallery__title">${i}</h2>\n      <div class="movie-info">\n        <p class="movie-info__genre">${r} | ${s}</p>\n         <span class="movie-info__vote">IMDb: ${o.toFixed(1)}</span>\n      </div>\n    </div>\n  </li>`})).join("")}();e.filmGalleryLibraryEl.innerHTML=t})),document.querySelector(".button-queue")&&(document.querySelector(".button-queue").addEventListener("click",qn),qn());var Hn,$n,zn,Vn=Hn={};function Wn(){throw new Error("setTimeout has not been defined")}function Gn(){throw new Error("clearTimeout has not been defined")}function Kn(t){if($n===setTimeout)return setTimeout(t,0);if(($n===Wn||!$n)&&setTimeout)return $n=setTimeout,setTimeout(t,0);try{return $n(t,0)}catch(e){try{return $n.call(null,t,0)}catch(e){return $n.call(this,t,0)}}}!function(){try{$n="function"==typeof setTimeout?setTimeout:Wn}catch(t){$n=Wn}try{zn="function"==typeof clearTimeout?clearTimeout:Gn}catch(t){zn=Gn}}();var Jn,Yn=[],Xn=!1,Qn=-1;function Zn(){Xn&&Jn&&(Xn=!1,Jn.length?Yn=Jn.concat(Yn):Qn=-1,Yn.length&&ti())}function ti(){if(!Xn){var t=Kn(Zn);Xn=!0;for(var e=Yn.length;e;){for(Jn=Yn,Yn=[];++Qn<e;)Jn&&Jn[Qn].run();Qn=-1,e=Yn.length}Jn=null,Xn=!1,function(t){if(zn===clearTimeout)return clearTimeout(t);if((zn===Gn||!zn)&&clearTimeout)return zn=clearTimeout,clearTimeout(t);try{zn(t)}catch(e){try{return zn.call(null,t)}catch(e){return zn.call(this,t)}}}(t)}}function ei(t,e){this.fun=t,this.array=e}function ni(){}Vn.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];Yn.push(new ei(t,e)),1!==Yn.length||Xn||Kn(ti)},ei.prototype.run=function(){this.fun.apply(null,this.array)},Vn.title="browser",Vn.browser=!0,Vn.env={},Vn.argv=[],Vn.version="",Vn.versions={},Vn.on=ni,Vn.addListener=ni,Vn.once=ni,Vn.off=ni,Vn.removeListener=ni,Vn.removeAllListeners=ni,Vn.emit=ni,Vn.prependListener=ni,Vn.prependOnceListener=ni,Vn.listeners=function(t){return[]},Vn.binding=function(t){throw new Error("process.binding is not supported")},Vn.cwd=function(){return"/"},Vn.chdir=function(t){throw new Error("process.chdir is not supported")},Vn.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ii=!1,ri=!1,si="${JSCORE_VERSION}",oi=function(t,e){if(!t)throw ai(e)},ai=function(t){return new Error("Firebase Database ("+si+") INTERNAL ASSERT FAILED: "+t)},li=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},ci={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=r>>2,h=(3&r)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(li(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw Error();const l=r<<2|s>>4;if(i.push(l),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},hi=function(t){const e=li(t);return ci.encodeByteArray(e,!0)},ui=function(t){return hi(t).replace(/\./g,"")},di=function(t){try{return ci.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pi(t){return fi(void 0,t)}function fi(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:return new Date(e.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&"__proto__"!==n&&(t[n]=fi(t[n],e[n]));return t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gi=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,mi=()=>{try{return gi()||(()=>{if(void 0===Hn||void 0===Hn.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&di(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},yi=t=>{var e,n;return null===(n=null===(e=mi())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},_i=t=>{const e=yi(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},vi=t=>{var e;return null===(e=mi())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bi{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ui(JSON.stringify({alg:"none",type:"JWT"})),ui(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ti(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ei())}function Ii(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function Ci(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Si(){const t=Ei();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ki(){return!0===ii||!0===ri}function Ri(){try{return"object"==typeof indexedDB}catch(t){return!1}}class Ai extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ai.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(Oi,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new Ai(i,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const Oi=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t){return JSON.parse(t)}function Pi(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=Li(di(s[0])||""),n=Li(di(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(t){}return{header:e,claims:n,data:i,signature:r}},xi=function(t){const e=Di(t).claims;return!!e&&"object"==typeof e&&e.hasOwnProperty("iat")},Mi=function(t){const e=Di(t).claims;return"object"==typeof e&&!0===e.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ui(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Fi(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function Bi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ji(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function qi(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(Hi(n)&&Hi(s)){if(!qi(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function Hi(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $i(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function zi(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function Vi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const n=this.W_;if("string"==typeof t)for(let i=0;i<16;i++)n[i]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let i=0;i<16;i++)n[i]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let t=16;t<80;t++){const e=n[t-3]^n[t-8]^n[t-14]^n[t-16];n[t]=4294967295&(e<<1|e>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let t=0;t<80;t++){t<40?t<20?(i=l^o&(a^l),r=1518500249):(i=o^a^l,r=1859775393):t<60?(i=o&a|l&(o|a),r=2400959708):(i=o^a^l,r=3395469782);const e=(s<<5|s>>>27)+i+c+r+n[t]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const n=e-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<e;){if(0===s)for(;i<=n;)this.compress_(t,i),i+=this.blockSize;if("string"==typeof t){for(;i<e;)if(r[s]=t.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<e;)if(r[s]=t[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let t=this.blockSize-1;t>=56;t--)this.buf_[t]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let e=0;e<5;e++)for(let i=24;i>=0;i-=8)t[n]=this.chain_[e]>>i&255,++n;return t}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}}function Gi(t,e){const n=new Ki(t,e);return n.subscribe.bind(n)}class Ki{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=Ji),void 0===i.error&&(i.error=Ji),void 0===i.complete&&(i.complete=Ji);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function Ji(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t,e){return`${t} failed: ${e} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xi=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const e=r-55296;i++,oi(i<t.length,"Surrogate pair missing trail surrogate.");r=65536+(e<<10)+(t.charCodeAt(i)-56320)}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},Qi=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zi(t){return t&&t._delegate?t._delegate:t}class tr{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class er{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new bi;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,"[DEFAULT]"===i?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class nr{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new er(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=[];var rr,sr;(sr=rr||(rr={}))[sr.DEBUG=0]="DEBUG",sr[sr.VERBOSE=1]="VERBOSE",sr[sr.INFO=2]="INFO",sr[sr.WARN=3]="WARN",sr[sr.ERROR=4]="ERROR",sr[sr.SILENT=5]="SILENT";const or={debug:rr.DEBUG,verbose:rr.VERBOSE,info:rr.INFO,warn:rr.WARN,error:rr.ERROR,silent:rr.SILENT},ar=rr.INFO,lr={[rr.DEBUG]:"log",[rr.VERBOSE]:"log",[rr.INFO]:"info",[rr.WARN]:"warn",[rr.ERROR]:"error"},cr=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=lr[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class hr{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in rr))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?or[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,rr.DEBUG,...t),this._logHandler(this,rr.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,rr.VERBOSE,...t),this._logHandler(this,rr.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,rr.INFO,...t),this._logHandler(this,rr.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,rr.WARN,...t),this._logHandler(this,rr.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,rr.ERROR,...t),this._logHandler(this,rr.ERROR,...t)}constructor(t){this.name=t,this._logLevel=ar,this._logHandler=cr,this._userLogHandler=null,ir.push(this)}}let ur,dr;const pr=new WeakMap,fr=new WeakMap,gr=new WeakMap,mr=new WeakMap,yr=new WeakMap;let _r={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return fr.get(t);if("objectStoreNames"===e)return t.objectStoreNames||gr.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wr(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function vr(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(dr||(dr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Er(this),e),wr(pr.get(this))}:function(...e){return wr(t.apply(Er(this),e))}:function(e,...n){const i=t.call(Er(this),e,...n);return gr.set(i,e.sort?e.sort():[e]),wr(i)}}function br(t){return"function"==typeof t?vr(t):(t instanceof IDBTransaction&&function(t){if(fr.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));fr.set(t,e)}(t),e=t,(ur||(ur=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,_r):t);var e}function wr(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(wr(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&pr.set(e,t)})).catch((()=>{})),yr.set(e,t),e}(t);if(mr.has(t))return mr.get(t);const e=br(t);return e!==t&&(mr.set(t,e),yr.set(e,t)),e}const Er=t=>yr.get(t);function Tr(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=wr(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(wr(o.result),t.oldVersion,t.newVersion,wr(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Ir=["get","getKey","getAll","getAllKeys","count"],Cr=["put","add","delete","clear"],Sr=new Map;function kr(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Sr.get(e))return Sr.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Cr.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Ir.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return Sr.set(e,s),s}_r=(t=>({...t,get:(e,n,i)=>kr(e,n)||t.get(e,n,i),has:(e,n)=>!!kr(e,n)||t.has(e,n)}))(_r);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rr{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const Ar=new hr("@firebase/app"),Nr={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Or=new Map,Lr=new Map;function Pr(t,e){try{t.container.addComponent(e)}catch(n){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dr(t){const e=t.name;if(Lr.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;Lr.set(e,t);for(const e of Or.values())Pr(e,t);return!0}function xr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mr=new Ni("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ur{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Mr.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new tr("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw Mr.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=mi())||void 0===s?void 0:s.config),!n)throw Mr.create("no-options");const o=Or.get(r);if(o){if(qi(n,o.options)&&qi(i,o.config))return o;throw Mr.create("duplicate-app",{appName:r})}const a=new nr(r);for(const t of Lr.values())a.addComponent(t);const l=new Ur(n,i,a);return Or.set(r,l),l}function Br(t="[DEFAULT]"){const e=Or.get(t);if(!e&&"[DEFAULT]"===t)return Fr();if(!e)throw Mr.create("no-app",{appName:t});return e}function jr(t,e,n){var i;let r=null!==(i=Nr[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Ar.warn(t.join(" "))}Dr(new tr(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}let qr=null;function Hr(){return qr||(qr=Tr("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw Mr.create("idb-open",{originalErrorMessage:t.message})}))),qr}async function $r(t,e){try{const n=(await Hr()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(e,zr(t)),n.done}catch(t){if(t instanceof Ai)Ar.warn(t.message);else{const e=Mr.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Ar.warn(e.message)}}}function zr(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Wr();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Wr(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Kr(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Kr(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=ui(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Gr(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function Wr(){return(new Date).toISOString().substring(0,10)}class Gr{async runIndexedDBEnvironmentCheck(){return!!Ri()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await Hr()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(zr(t))}catch(t){if(t instanceof Ai)Ar.warn(t.message);else{const e=Mr.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Ar.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return $r(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return $r(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Kr(t){return ui(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jr;Jr="",Dr(new tr("platform-logger",(t=>new Rr(t)),"PRIVATE")),Dr(new tr("heartbeat",(t=>new Vr(t)),"PRIVATE")),jr("@firebase/app","0.9.3",Jr),jr("@firebase/app","0.9.3","esm2017"),jr("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
jr("firebase","9.17.1","app");var Yr,Xr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},Qr={},Zr=Zr||{},ts=Xr||self;function es(){}function ns(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function is(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var rs="closure_uid_"+(1e9*Math.random()>>>0),ss=0;function os(t,e,n){return t.call.apply(t.bind,arguments)}function as(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function ls(t,e,n){return(ls=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?os:as).apply(null,arguments)}function cs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function hs(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function us(){this.s=this.s,this.o=this.o}us.prototype.s=!1,us.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,rs)&&t[rs]||(t[rs]=++ss))},us.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ds=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ps(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function fs(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(ns(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function gs(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}gs.prototype.h=function(){this.defaultPrevented=!0};var ms=function(){if(!ts.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ts.addEventListener("test",es,e),ts.removeEventListener("test",es,e)}catch(t){}return t}();function ys(t){return/^[\s\xa0]*$/.test(t)}var _s=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function vs(t,e){return t<e?-1:t>e?1:0}function bs(){var t=ts.navigator;return t&&(t=t.userAgent)?t:""}function ws(t){return-1!=bs().indexOf(t)}function Es(t){return Es[" "](t),t}Es[" "]=es;var Ts,Is,Cs=ws("Opera"),Ss=ws("Trident")||ws("MSIE"),ks=ws("Edge"),Rs=ks||Ss,As=ws("Gecko")&&!(-1!=bs().toLowerCase().indexOf("webkit")&&!ws("Edge"))&&!(ws("Trident")||ws("MSIE"))&&!ws("Edge"),Ns=-1!=bs().toLowerCase().indexOf("webkit")&&!ws("Edge");function Os(){var t=ts.document;return t?t.documentMode:void 0}t:{var Ls="",Ps=(Is=bs(),As?/rv:([^\);]+)(\)|;)/.exec(Is):ks?/Edge\/([\d\.]+)/.exec(Is):Ss?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Is):Ns?/WebKit\/(\S+)/.exec(Is):Cs?/(?:Version)[ \/]?(\S+)/.exec(Is):void 0);if(Ps&&(Ls=Ps?Ps[1]:""),Ss){var Ds=Os();if(null!=Ds&&Ds>parseFloat(Ls)){Ts=String(Ds);break t}}Ts=Ls}var xs,Ms={};function Us(){return function(t){var e=Ms;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=_s(String(Ts)).split("."),n=_s("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=vs(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||vs(0==r[2].length,0==s[2].length)||vs(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(ts.document&&Ss){var Fs=Os();xs=Fs||(parseInt(Ts,10)||void 0)}else xs=void 0;var Bs=xs;function js(t,e){if(gs.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(As){t:{try{Es(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:qs[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&js.X.h.call(this)}}hs(js,gs);var qs={2:"touch",3:"pen",4:"mouse"};js.prototype.h=function(){js.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Hs="closure_listenable_"+(1e6*Math.random()|0),$s=0;function zs(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++$s,this.ba=this.ea=!1}function Vs(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ws(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Gs(t){const e={};for(const n in t)e[n]=t[n];return e}const Ks="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Js(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<Ks.length;e++)n=Ks[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ys(t){this.src=t,this.g={},this.h=0}function Xs(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=ds(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Vs(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Qs(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}Ys.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=Qs(t,e,i,r);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new zs(e,this.src,s,!!i,r)).ea=n,t.push(e)),e};var Zs="closure_lm_"+(1e6*Math.random()|0),to={};function eo(t,e,n,i,r){if(i&&i.once)return io(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)eo(t,e[s],n,i,r);return null}return n=ho(n),t&&t[Hs]?t.N(e,n,is(i)?!!i.capture:!!i,r):no(t,e,n,!1,i,r)}function no(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=is(r)?!!r.capture:!!r,a=lo(t);if(a||(t[Zs]=a=new Ys(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=ao;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)ms||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(oo(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function io(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)io(t,e[s],n,i,r);return null}return n=ho(n),t&&t[Hs]?t.O(e,n,is(i)?!!i.capture:!!i,r):no(t,e,n,!0,i,r)}function ro(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)ro(t,e[s],n,i,r);else i=is(i)?!!i.capture:!!i,n=ho(n),t&&t[Hs]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Qs(s=t.g[e],n,i,r))&&(Vs(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=lo(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Qs(e,n,i,r)),(n=-1<t?e[t]:null)&&so(n))}function so(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[Hs])Xs(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(oo(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=lo(e))?(Xs(n,t),0==n.h&&(n.src=null,e[Zs]=null)):Vs(t)}}}function oo(t){return t in to?to[t]:to[t]="on"+t}function ao(t,e){if(t.ba)t=!0;else{e=new js(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&so(t),t=n.call(i,e)}return t}function lo(t){return(t=t[Zs])instanceof Ys?t:null}var co="__closure_events_fn_"+(1e9*Math.random()>>>0);function ho(t){return"function"==typeof t?t:(t[co]||(t[co]=function(e){return t.handleEvent(e)}),t[co])}function uo(){us.call(this),this.i=new Ys(this),this.P=this,this.I=null}function po(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new gs(e,t);else if(e instanceof gs)e.target=e.target||t;else{var r=e;Js(e=new gs(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=fo(o,i,!0,e)&&r}if(r=fo(o=e.g=t,i,!0,e)&&r,r=fo(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=fo(o=e.g=n[s],i,!1,e)&&r}function fo(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Xs(t.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}hs(uo,us),uo.prototype[Hs]=!0,uo.prototype.removeEventListener=function(t,e,n,i){ro(this,t,e,n,i)},uo.prototype.M=function(){if(uo.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Vs(n[i]);delete e.g[t],e.h--}}this.I=null},uo.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},uo.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var go=ts.JSON.stringify;function mo(){var t=To;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var yo,_o=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new vo),(t=>t.reset()));class vo{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function bo(t){ts.setTimeout((()=>{throw t}),0)}function wo(t,e){yo||function(){var t=ts.Promise.resolve(void 0);yo=function(){t.then(Io)}}(),Eo||(yo(),Eo=!0),To.add(t,e)}var Eo=!1,To=new class{add(t,e){const n=_o.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Io(){for(var t;t=mo();){try{t.h.call(t.g)}catch(t){bo(t)}var e=_o;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Eo=!1}function Co(t,e){uo.call(this),this.h=t||1,this.g=e||ts,this.j=ls(this.lb,this),this.l=Date.now()}function So(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function ko(t,e,n){if("function"==typeof t)n&&(t=ls(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ls(t.handleEvent,t)}return 2147483647<Number(e)?-1:ts.setTimeout(t,e||0)}function Ro(t){t.g=ko((()=>{t.g=null,t.i&&(t.i=!1,Ro(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}hs(Co,uo),(Yr=Co.prototype).ca=!1,Yr.R=null,Yr.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),po(this,"tick"),this.ca&&(So(this),this.start()))}},Yr.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Yr.M=function(){Co.X.M.call(this),So(this),delete this.g};class Ao extends us{l(t){this.h=arguments,this.g?this.i=!0:Ro(this)}M(){super.M(),this.g&&(ts.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function No(t){us.call(this),this.h=t,this.g={}}hs(No,us);var Oo=[];function Lo(t,e,n,i){Array.isArray(n)||(n&&(Oo[0]=n.toString()),n=Oo);for(var r=0;r<n.length;r++){var s=eo(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Po(t){Ws(t.g,(function(t,e){this.g.hasOwnProperty(e)&&so(t)}),t),t.g={}}function Do(){this.g=!0}function xo(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return go(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}No.prototype.M=function(){No.X.M.call(this),Po(this)},No.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Do.prototype.Aa=function(){this.g=!1},Do.prototype.info=function(){};var Mo={},Uo=null;function Fo(){return Uo=Uo||new uo}function Bo(t){gs.call(this,Mo.Pa,t)}function jo(t){const e=Fo();po(e,new Bo(e))}function qo(t,e){gs.call(this,Mo.STAT_EVENT,t),this.stat=e}function Ho(t){const e=Fo();po(e,new qo(e,t))}function $o(t,e){gs.call(this,Mo.Qa,t),this.size=e}function zo(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return ts.setTimeout((function(){t()}),e)}Mo.Pa="serverreachability",hs(Bo,gs),Mo.STAT_EVENT="statevent",hs(qo,gs),Mo.Qa="timingevent",hs($o,gs);var Vo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Wo={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Go(){}function Ko(t){return t.h||(t.h=t.i())}function Jo(){}Go.prototype.h=null;var Yo,Xo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Qo(){gs.call(this,"d")}function Zo(){gs.call(this,"c")}function ta(){}function ea(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new No(this),this.O=ia,t=Rs?125:void 0,this.T=new Co(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new na}function na(){this.i=null,this.g="",this.h=!1}hs(Qo,gs),hs(Zo,gs),hs(ta,Go),ta.prototype.g=function(){return new XMLHttpRequest},ta.prototype.i=function(){return{}},Yo=new ta;var ia=45e3,ra={},sa={};function oa(t,e,n){t.K=1,t.v=Ca(ba(e)),t.s=n,t.P=!0,aa(t,null)}function aa(t,e){t.F=Date.now(),ua(t),t.A=ba(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),Fa(n.i,"t",i),t.C=0,n=t.l.H,t.h=new na,t.g=Ul(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Ao(ls(t.La,t,t.g),t.N)),Lo(t.S,t.g,"readystatechange",t.ib),e=t.H?Gs(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),jo(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&"type"==u[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function la(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function ca(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=ha(t,n),i==sa){4==e&&(t.o=4,Ho(14),r=!1),xo(t.j,t.m,null,"[Incomplete Response]");break}if(i==ra){t.o=4,Ho(15),xo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}xo(t.j,t.m,i,null),ma(t,i)}la(t)&&i!=sa&&i!=ra&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Ho(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Al(e),e.K=!0,Ho(11))):(xo(t.j,t.m,n,"[Invalid Chunked Response]"),ga(t),fa(t))}function ha(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?sa:(n=Number(e.substring(n,i)),isNaN(n)?ra:(i+=1)+n>e.length?sa:(e=e.substr(i,n),t.C=i+n,e))}function ua(t){t.V=Date.now()+t.O,da(t,t.O)}function da(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=zo(ls(t.gb,t),e)}function pa(t){t.B&&(ts.clearTimeout(t.B),t.B=null)}function fa(t){0==t.l.G||t.I||Ll(t.l,t)}function ga(t){pa(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,So(t.T),Po(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ma(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||za(n.h,t)))if(!t.J&&za(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ol(n),wl(n)}Rl(n),Ho(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=zo(ls(n.cb,n),6e3));if(1>=$a(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Dl(n,11)}else if((t.J||n.g==t)&&Ol(n),!ys(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const e=c[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=c[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const h=c[5];null!=h&&"number"==typeof h&&0<h&&(i=1.5*h,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Va(s,s.h),s.h=null))}if(i.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,Ia(i.F,i.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((i=n).sa=Ml(i,i.H?i.ka:null,i.V),o.J){Wa(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(pa(a),ua(a)),i.g=o}else kl(i);0<n.i.length&&Tl(n)}else"stop"!=c[0]&&"close"!=c[0]||Dl(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Dl(n,7):bl(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}jo()}catch(t){}}function ya(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ns(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(ns(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(ns(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(Yr=ea.prototype).setTimeout=function(t){this.O=t},Yr.ib=function(t){t=t.target;const e=this.L;e&&3==fl(t)?e.l():this.La(t)},Yr.La=function(t){try{if(t==this.g)t:{const h=fl(this.g);var e=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||Rs||this.g&&(this.h.h||this.g.fa()||gl(this.g)))){this.I||4!=h||7==e||jo(),pa(this);var n=this.g.aa();this.Y=n;e:if(la(this)){var i=gl(this.g);t="";var r=i.length,s=4==fl(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ga(this),fa(this);var o="";break e}this.h.i=new ts.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ys(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,Ho(12),ga(this),fa(this);break t}xo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ma(this,n)}this.P?(ca(this,h,o),Rs&&this.i&&3==h&&(Lo(this.S,this.T,"tick",this.hb),this.T.start())):(xo(this.j,this.m,o,null),ma(this,o)),4==h&&ga(this),this.i&&!this.I&&(4==h?Ll(this.l,this):(this.i=!1,ua(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ho(12)):(this.o=0,Ho(13)),ga(this),fa(this)}}}catch(t){}},Yr.hb=function(){if(this.g){var t=fl(this.g),e=this.g.fa();this.C<e.length&&(pa(this),ca(this,t,e),this.i&&4!=t&&ua(this))}},Yr.cancel=function(){this.I=!0,ga(this)},Yr.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(jo(),Ho(17)),ga(this),this.o=2,fa(this)):da(this,this.V-t)};var _a=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function va(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof va){this.h=void 0!==e?e:t.h,wa(this,t.j),this.s=t.s,this.g=t.g,Ea(this,t.m),this.l=t.l,e=t.i;var n=new Da;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ta(this,n),this.o=t.o}else t&&(n=String(t).match(_a))?(this.h=!!e,wa(this,n[1]||"",!0),this.s=Sa(n[2]||""),this.g=Sa(n[3]||"",!0),Ea(this,n[4]),this.l=Sa(n[5]||"",!0),Ta(this,n[6]||"",!0),this.o=Sa(n[7]||"")):(this.h=!!e,this.i=new Da(null,this.h))}function ba(t){return new va(t)}function wa(t,e,n){t.j=n?Sa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ea(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ta(t,e,n){e instanceof Da?(t.i=e,function(t,e){e&&!t.j&&(xa(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ma(this,e),Fa(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=ka(e,La)),t.i=new Da(e,t.h))}function Ia(t,e,n){t.i.set(e,n)}function Ca(t){return Ia(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Sa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ka(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ra),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ra(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}va.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ka(e,Aa,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ka(e,Aa,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ka(n,"/"==n.charAt(0)?Oa:Na,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ka(n,Pa)),t.join("")};var Aa=/[#\/\?@]/g,Na=/[#\?:]/g,Oa=/[#\?]/g,La=/[#\?@]/g,Pa=/#/g;function Da(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xa(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ma(t,e){xa(t),e=Ba(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ua(t,e){return xa(t),e=Ba(t,e),t.g.has(e)}function Fa(t,e,n){Ma(t,e),0<n.length&&(t.i=null,t.g.set(Ba(t,e),ps(n)),t.h+=n.length)}function Ba(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Yr=Da.prototype).add=function(t,e){xa(this),this.i=null,t=Ba(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Yr.forEach=function(t,e){xa(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},Yr.oa=function(){xa(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},Yr.W=function(t){xa(this);let e=[];if("string"==typeof t)Ua(this,t)&&(e=e.concat(this.g.get(Ba(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Yr.set=function(t,e){return xa(this),this.i=null,Ua(this,t=Ba(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Yr.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},Yr.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function ja(t){this.l=t||qa,ts.PerformanceNavigationTiming?t=0<(t=ts.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(ts.g&&ts.g.Ga&&ts.g.Ga()&&ts.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qa=10;function Ha(t){return!!t.h||!!t.g&&t.g.size>=t.j}function $a(t){return t.h?1:t.g?t.g.size:0}function za(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Va(t,e){t.g?t.g.add(e):t.h=e}function Wa(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ga(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ps(t.i)}function Ka(){}function Ja(){this.g=new Ka}function Ya(t,e,n){const i=n||"";try{ya(t,(function(t,n){let r=t;is(t)&&(r=go(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function Xa(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function Qa(t){this.l=t.ac||null,this.j=t.jb||!1}function Za(t,e){uo.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=tl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ja.prototype.cancel=function(){if(this.i=Ga(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ka.prototype.stringify=function(t){return ts.JSON.stringify(t,void 0)},Ka.prototype.parse=function(t){return ts.JSON.parse(t,void 0)},hs(Qa,Go),Qa.prototype.g=function(){return new Za(this.l,this.j)},Qa.prototype.i=function(t){return function(){return t}}({}),hs(Za,uo);var tl=0;function el(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function nl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,il(t)}function il(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Yr=Za.prototype).open=function(t,e){if(this.readyState!=tl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,il(this)},Yr.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ts).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},Yr.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,nl(this)),this.readyState=tl},Yr.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,il(this)),this.g&&(this.readyState=3,il(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==ts.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;el(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},Yr.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?nl(this):il(this),3==this.readyState&&el(this)}},Yr.Va=function(t){this.g&&(this.response=this.responseText=t,nl(this))},Yr.Ua=function(t){this.g&&(this.response=t,nl(this))},Yr.ga=function(){this.g&&nl(this)},Yr.setRequestHeader=function(t,e){this.v.append(t,e)},Yr.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Yr.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Za.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var rl=ts.JSON.parse;function sl(t){uo.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ol,this.K=this.L=!1}hs(sl,uo);var ol="",al=/^https?$/i,ll=["POST","PUT"];function cl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hl(t),dl(t)}function hl(t){t.D||(t.D=!0,po(t,"complete"),po(t,"error"))}function ul(t){if(t.h&&void 0!==Zr&&(!t.C[1]||4!=fl(t)||2!=t.aa()))if(t.v&&4==fl(t))ko(t.Ha,0,t);else if(po(t,"readystatechange"),4==fl(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var r=String(t.H).match(_a)[1]||null;if(!r&&ts.self&&ts.self.location){var s=ts.self.location.protocol;r=s.substr(0,s.length-1)}i=!al.test(r?r.toLowerCase():"")}n=i}if(n)po(t,"complete"),po(t,"success");else{t.m=6;try{var o=2<fl(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",hl(t)}}finally{dl(t)}}}function dl(t,e){if(t.g){pl(t);const n=t.g,i=t.C[0]?es:null;t.g=null,t.C=null,e||po(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function pl(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ts.clearTimeout(t.A),t.A=null)}function fl(t){return t.g?t.g.readyState:0}function gl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ol:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ml(t){let e="";return Ws(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function yl(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=ml(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ia(t,e,n))}function _l(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function vl(t){this.Ca=0,this.i=[],this.j=new Do,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=_l("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=_l("baseRetryDelayMs",5e3,t),this.bb=_l("retryDelaySeedMs",1e4,t),this.$a=_l("forwardChannelMaxRetries",2,t),this.ta=_l("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ja(t&&t.concurrentRequestLimit),this.Fa=new Ja,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function bl(t){if(El(t),3==t.G){var e=t.U++,n=ba(t.F);Ia(n,"SID",t.I),Ia(n,"RID",e),Ia(n,"TYPE","terminate"),Cl(t,n),(e=new ea(t,t.j,e,void 0)).K=2,e.v=Ca(ba(n)),n=!1,ts.navigator&&ts.navigator.sendBeacon&&(n=ts.navigator.sendBeacon(e.v.toString(),"")),!n&&ts.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ul(e.l,null),e.g.da(e.v)),e.F=Date.now(),ua(e)}xl(t)}function wl(t){t.g&&(Al(t),t.g.cancel(),t.g=null)}function El(t){wl(t),t.u&&(ts.clearTimeout(t.u),t.u=null),Ol(t),t.h.cancel(),t.m&&("number"==typeof t.m&&ts.clearTimeout(t.m),t.m=null)}function Tl(t){Ha(t.h)||t.m||(t.m=!0,wo(t.Ja,t),t.C=0)}function Il(t,e){var n;n=e?e.m:t.U++;const i=ba(t.F);Ia(i,"SID",t.I),Ia(i,"RID",n),Ia(i,"AID",t.T),Cl(t,i),t.o&&t.s&&yl(i,t.o,t.s),n=new ea(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Sl(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Va(t.h,n),oa(n,i,e)}function Cl(t,e){t.ia&&Ws(t.ia,(function(t,n){Ia(e,n,t)})),t.l&&ya({},(function(t,n){Ia(e,n,t)}))}function Sl(t,e,n){n=Math.min(t.i.length,n);var i=t.l?ls(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),s=!1;else try{Ya(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function kl(t){t.g||t.u||(t.Z=1,wo(t.Ia,t),t.A=0)}function Rl(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=zo(ls(t.Ia,t),Pl(t,t.A)),t.A++,!0)}function Al(t){null!=t.B&&(ts.clearTimeout(t.B),t.B=null)}function Nl(t){t.g=new ea(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=ba(t.sa);Ia(e,"RID","rpc"),Ia(e,"SID",t.I),Ia(e,"CI",t.L?"0":"1"),Ia(e,"AID",t.T),Ia(e,"TYPE","xmlhttp"),Cl(t,e),t.o&&t.s&&yl(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ca(ba(e)),n.s=null,n.P=!0,aa(n,t)}function Ol(t){null!=t.v&&(ts.clearTimeout(t.v),t.v=null)}function Ll(t,e){var n=null;if(t.g==e){Ol(t),Al(t),t.g=null;var i=2}else{if(!za(t.h,e))return;n=e.D,Wa(t.h,e),i=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;po(i=Fo(),new $o(i,n)),Tl(t)}else kl(t);else if(3==(r=e.o)||0==r&&0<t.pa||!(1==i&&function(t,e){return!($a(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=zo(ls(t.Ja,t,e),Pl(t,t.C)),t.C++,0)))}(t,e)||2==i&&Rl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Dl(t,5);break;case 4:Dl(t,10);break;case 3:Dl(t,6);break;default:Dl(t,2)}}function Pl(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Dl(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=ls(t.kb,t);n||(n=new va("//www.google.com/images/cleardot.gif"),ts.location&&"http"==ts.location.protocol||wa(n,"https"),Ca(n)),function(t,e){const n=new Do;if(ts.Image){const i=new Image;i.onload=cs(Xa,n,i,"TestLoadImage: loaded",!0,e),i.onerror=cs(Xa,n,i,"TestLoadImage: error",!1,e),i.onabort=cs(Xa,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=cs(Xa,n,i,"TestLoadImage: timeout",!1,e),ts.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Ho(2);t.G=0,t.l&&t.l.va(e),xl(t),El(t)}function xl(t){if(t.G=0,t.la=[],t.l){const e=Ga(t.h);0==e.length&&0==t.i.length||(fs(t.la,e),fs(t.la,t.i),t.h.i.length=0,ps(t.i),t.i.length=0),t.l.ua()}}function Ml(t,e,n){var i=n instanceof va?ba(n):new va(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),Ea(i,i.m);else{var r=ts.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new va(null,void 0);i&&wa(s,i),e&&(s.g=e),r&&Ea(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&Ia(i,n,e),Ia(i,"VER",t.ma),Cl(t,i),i}function Ul(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new sl(new Qa({jb:!0})):new sl(t.ra)).Ka(t.H),e}function Fl(){}function Bl(){if(Ss&&!(10<=Number(Bs)))throw Error("Environmental error: no available transport.")}function jl(t,e){uo.call(this),this.g=new vl(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ys(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ys(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new $l(this)}function ql(t){Qo.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Hl(){Zo.call(this),this.status=1}function $l(t){this.g=t}(Yr=sl.prototype).Ka=function(t){this.L=t},Yr.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Yo.g(),this.C=this.u?Ko(this.u):Ko(Yo),this.g.onreadystatechange=ls(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void cl(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=ts.FormData&&t instanceof ts.FormData,!(0<=ds(ll,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pl(this),0<this.B&&((this.K=function(t){return Ss&&Us()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ls(this.qa,this)):this.A=ko(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){cl(this,t)}},Yr.qa=function(){void 0!==Zr&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,po(this,"timeout"),this.abort(8))},Yr.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,po(this,"complete"),po(this,"abort"),dl(this))},Yr.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),dl(this,!0)),sl.X.M.call(this)},Yr.Ha=function(){this.s||(this.F||this.v||this.l?ul(this):this.fb())},Yr.fb=function(){ul(this)},Yr.aa=function(){try{return 2<fl(this)?this.g.status:-1}catch(t){return-1}},Yr.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Yr.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),rl(e)}},Yr.Ea=function(){return this.m},Yr.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Yr=vl.prototype).ma=8,Yr.G=1,Yr.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new ea(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Gs(s),Js(s,this.S)):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Sl(this,r,e),Ia(n=ba(this.F),"RID",t),Ia(n,"CVER",22),this.D&&Ia(n,"X-HTTP-Session-Id",this.D),Cl(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(ml(s)))+"&"+e:this.o&&yl(n,this.o,s)),Va(this.h,r),this.Ya&&Ia(n,"TYPE","init"),this.O?(Ia(n,"$req",e),Ia(n,"SID","null"),r.Z=!0,oa(r,n,null)):oa(r,n,e),this.G=2}}else 3==this.G&&(t?Il(this,t):0==this.i.length||Ha(this.h)||Il(this))},Yr.Ia=function(){if(this.u=null,Nl(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=zo(ls(this.eb,this),t)}},Yr.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ho(10),wl(this),Nl(this))},Yr.cb=function(){null!=this.v&&(this.v=null,wl(this),Rl(this),Ho(19))},Yr.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ho(2)):(this.j.info("Failed to ping google.com"),Ho(1))},(Yr=Fl.prototype).xa=function(){},Yr.wa=function(){},Yr.va=function(){},Yr.ua=function(){},Yr.Ra=function(){},Bl.prototype.g=function(t,e){return new jl(t,e)},hs(jl,uo),jl.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ho(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ml(t,null,t.V),Tl(t)},jl.prototype.close=function(){bl(this.g)},jl.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=go(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&Tl(e)},jl.prototype.M=function(){this.g.l=null,delete this.j,bl(this.g),delete this.g,jl.X.M.call(this)},hs(ql,Qo),hs(Hl,Zo),hs($l,Fl),$l.prototype.xa=function(){po(this.g,"a")},$l.prototype.wa=function(t){po(this.g,new ql(t))},$l.prototype.va=function(t){po(this.g,new Hl)},$l.prototype.ua=function(){po(this.g,"b")},Bl.prototype.createWebChannel=Bl.prototype.g,jl.prototype.send=jl.prototype.u,jl.prototype.open=jl.prototype.m,jl.prototype.close=jl.prototype.close,Vo.NO_ERROR=0,Vo.TIMEOUT=8,Vo.HTTP_ERROR=6,Wo.COMPLETE="complete",Jo.EventType=Xo,Xo.OPEN="a",Xo.CLOSE="b",Xo.ERROR="c",Xo.MESSAGE="d",uo.prototype.listen=uo.prototype.N,sl.prototype.listenOnce=sl.prototype.O,sl.prototype.getLastError=sl.prototype.Oa,sl.prototype.getLastErrorCode=sl.prototype.Ea,sl.prototype.getStatus=sl.prototype.aa,sl.prototype.getResponseJson=sl.prototype.Sa,sl.prototype.getResponseText=sl.prototype.fa,sl.prototype.send=sl.prototype.da,sl.prototype.setWithCredentials=sl.prototype.Ka;Qr.createWebChannelTransport=function(){return new Bl},Qr.getStatEventTarget=function(){return Fo()},Qr.ErrorCode=Vo,Qr.EventType=Wo,Qr.Event=Mo,Qr.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Qr.FetchXmlHttpFactory=Qa,Qr.WebChannel=Jo,Qr.XhrIo=sl;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zl{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}zl.UNAUTHENTICATED=new zl(null),zl.GOOGLE_CREDENTIALS=new zl("google-credentials-uid"),zl.FIRST_PARTY=new zl("first-party-uid"),zl.MOCK_USER=new zl("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Vl="9.17.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=new hr("@firebase/firestore");function Gl(t,...e){if(Wl.logLevel<=rr.DEBUG){const n=e.map(Yl);Wl.debug(`Firestore (${Vl}): ${t}`,...n)}}function Kl(t,...e){if(Wl.logLevel<=rr.ERROR){const n=e.map(Yl);Wl.error(`Firestore (${Vl}): ${t}`,...n)}}function Jl(t,...e){if(Wl.logLevel<=rr.WARN){const n=e.map(Yl);Wl.warn(`Firestore (${Vl}): ${t}`,...n)}}function Yl(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t="Unexpected state"){const e=`FIRESTORE (${Vl}) INTERNAL ASSERTION FAILED: `+t;throw Kl(e),new Error(e)}function Ql(t,e){t||Xl()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zl={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class tc extends Ai{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ic{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(zl.UNAUTHENTICATED)))}shutdown(){}}class rc{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class sc{start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new ec;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ec,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Gl("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Gl("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ec)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Gl("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ql("string"==typeof e.accessToken),new nc(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ql(null===t||"string"==typeof t),new zl(t)}constructor(t){this.t=t,this.currentUser=zl.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class oc{I(){return this.g?this.g():(Ql(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i,this.type="FirstParty",this.user=zl.FIRST_PARTY,this.p=new Map}}class ac{getToken(){return Promise.resolve(new oc(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(zl.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i}}class lc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cc{start(t,e){const n=t=>{null!=t.error&&Gl("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Gl("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Gl("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?i(t):Gl("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ql("string"==typeof t.token),this.A=t.token,new lc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hc(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=hc(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function dc(t,e){return t<e?-1:t>e?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pc{get length(){return this.len}isEqual(t){return 0===pc.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof pc?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&Xl(),void 0===n?n=t.length-e:n>t.length-e&&Xl(),this.segments=t,this.offset=e,this.len=n}}class fc extends pc{construct(t,e,n){return new fc(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new tc(Zl.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new fc(e)}static emptyPath(){return new fc([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gc{static fromPath(t){return new gc(fc.fromString(t))}static fromName(t){return new gc(fc.fromString(t).popFirst(5))}static empty(){return new gc(fc.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===fc.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return fc.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new gc(new fc(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}mc.UNKNOWN_ID=-1;function yc(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _c{ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}}_c.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vc{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class bc{static empty(){return new bc("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof bc&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t){return 0===t&&1/t==-1/0}let Ec=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{static fromBase64String(t){const e=atob(t);return new Tc(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Tc(e)}[Ec](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return dc(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}Tc.EMPTY_BYTE_STRING=new Tc("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ic(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Cc(t){return"string"==typeof t?Tc.fromBase64String(t):Tc.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{insert(t,e){return new kc(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ac.BLACK,null,null))}remove(t){return new kc(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ac.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Rc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Rc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Rc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Rc(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||Ac.EMPTY}}class Rc{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class Ac{copy(t,e,n,i,r){return new Ac(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ac.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Ac.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ac.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ac.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Xl();if(this.right.isRed())throw Xl();const t=this.left.check();if(t!==this.right.check())throw Xl();return t+(this.isRed()?0:1)}constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Ac.RED,this.left=null!=i?i:Ac.EMPTY,this.right=null!=r?r:Ac.EMPTY,this.size=this.left.size+1+this.right.size}}Ac.EMPTY=null,Ac.RED=!0,Ac.BLACK=!1,Ac.EMPTY=new class{get key(){throw Xl()}get value(){throw Xl()}get color(){throw Xl()}get left(){throw Xl()}get right(){throw Xl()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Ac(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nc{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Oc(this.data.getIterator())}getIteratorFrom(t){return new Oc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Nc))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Nc(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new kc(this.comparator)}}class Oc{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lc{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function Pc(t){return new Lc(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Dc,xc;(xc=Dc||(Dc={}))[xc.OK=0]="OK",xc[xc.CANCELLED=1]="CANCELLED",xc[xc.UNKNOWN=2]="UNKNOWN",xc[xc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xc[xc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xc[xc.NOT_FOUND=5]="NOT_FOUND",xc[xc.ALREADY_EXISTS=6]="ALREADY_EXISTS",xc[xc.PERMISSION_DENIED=7]="PERMISSION_DENIED",xc[xc.UNAUTHENTICATED=16]="UNAUTHENTICATED",xc[xc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xc[xc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xc[xc.ABORTED=10]="ABORTED",xc[xc.OUT_OF_RANGE=11]="OUT_OF_RANGE",xc[xc.UNIMPLEMENTED=12]="UNIMPLEMENTED",xc[xc.INTERNAL=13]="INTERNAL",xc[xc.UNAVAILABLE=14]="UNAVAILABLE",xc[xc.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new kc(gc.comparator);new kc(gc.comparator);new kc(gc.comparator),new Nc(gc.comparator);new Nc(dc);const Mc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Uc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Fc=Uc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(Ic(t.integerValue));else if("doubleValue"in t){const n=Ic(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),wc(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(Cc(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?Sc(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):Xl()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const t of Object.keys(n))this.de(t,e),this.ce(n[t],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const t of n)this.ce(t,e)}me(t,e){this.he(e,37),gc.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}constructor(){}}Bc.Ie=new Bc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Uint8Array(0);class jc{static withCacheSize(t){return new jc(t,jc.DEFAULT_COLLECTION_PERCENTILE,jc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jc.DEFAULT_COLLECTION_PERCENTILE=10,jc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jc.DEFAULT=new jc(41943040,jc.DEFAULT_COLLECTION_PERCENTILE,jc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jc.DISABLED=new jc(-1,0,0);function qc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,e-n);i>0&&Gl("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(t,e,n=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $c{static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new $c(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new tc(Zl.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new ec,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function zc(t,e){if(Kl("AsyncQueue",`${e}: ${t}`),yc(t))return new tc(Zl.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vc(t,e,n){if(!n)throw new tc(Zl.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Wc(t){if(gc.isDocumentKey(t))throw new tc(Zl.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gc(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Xl()}function Kc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new tc(Zl.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gc(t);throw new tc(Zl.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jc=new Map;class Yc{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new tc(Zl.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new tc(Zl.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new tc(Zl.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{get app(){if(!this._app)throw new tc(Zl.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new tc(Zl.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ic;switch(t.type){case"gapi":const e=t.client;return new ac(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new tc(Zl.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Jc.get(t);e&&(Gl("ComponentProvider","Removing Datastore"),Jc.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yc({}),this._settingsFrozen=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qc{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new th(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Qc(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class Zc{withConverter(t){return new Zc(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class th extends Zc{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Qc(this.firestore,null,new gc(t))}withConverter(t){return new th(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,Pc(n)),this._path=n,this.type="collection"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eh{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new tc(Zl.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ec;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=zc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=zl.UNAUTHENTICATED,this.clientId=uc.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Gl("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Gl("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}class nh{get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=qc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new ec;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!yc(t))throw t;Gl("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;throw Kl("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const i=$c.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(i),i}zc(){this.Kc&&Xl()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Hc(this,"async_queue_retry"),this.Wc=()=>{const t=qc();t&&Gl("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=qc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}}class ih extends Xc{_terminate(){return this._firestoreClient||rh(this),this._firestoreClient.terminate()}constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new nh,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function rh(t){var e;const n=t._freezeSettings(),i=(r=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new vc(r,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var r,s,o,a;t._firestoreClient=new eh(t._authCredentials,t._appCheckCredentials,t._queue,i)}new RegExp("[~\\*/\\[\\]]");!function(t,e=!0){Vl="9.17.1",Dr(new tr("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new ih(new sc(t.getProvider("auth-internal")),new cc(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new tc(Zl.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bc(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),jr("@firebase/firestore","3.8.3",t),jr("@firebase/firestore","3.8.3","esm2017")}();function sh(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;function oh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ah=oh,lh=new Ni("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ch=new hr("@firebase/auth");function hh(t,...e){ch.logLevel<=rr.ERROR&&ch.error(`Auth (9.17.1): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(t,...e){throw fh(t,...e)}function dh(t,...e){return fh(t,...e)}function ph(t,e,n){const i=Object.assign(Object.assign({},ah()),{[e]:n});return new Ni("auth","Firebase",i).create(e,{appName:t.name})}function fh(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return lh.create(t,...e)}function gh(t,e,...n){if(!t)throw fh(e,...n)}function mh(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hh(e),new Error(e)}function yh(t,e){t||mh(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=new Map;function vh(t){yh(t instanceof Function,"Expected a class definition");let e=_h.get(t);return e?(yh(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_h.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bh(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function wh(){return"http:"===Eh()||"https:"===Eh()}function Eh(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(wh()||Ii()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ih{get(){return Th()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(t,e){this.shortDelay=t,this.longDelay=e,yh(e>t,"Short delay should be less than long delay!"),this.isMobile=Ti()||Ci()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t,e){yh(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void mh("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void mh("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void mh("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Rh=new Ih(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nh(t,e,n,i,r={}){return Oh(t,r,(async()=>{let r={},s={};i&&("GET"===e?s=i:r={body:JSON.stringify(i)});const o=$i(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Sh.fetch()(Ph(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Oh(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},kh),e);try{const e=new Dh(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw xh(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw xh(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw xh(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw xh(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ph(t,a,o);uh(t,a)}}catch(e){if(e instanceof Ai)throw e;uh(t,"network-request-failed")}}async function Lh(t,e,n,i,r={}){const s=await Nh(t,e,n,i,r);return"mfaPendingCredential"in s&&uh(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ph(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Ch(t.config,r):`${t.config.apiScheme}://${r}`}class Dh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(dh(this.auth,"network-request-failed"))),Rh.get())}))}}function xh(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=dh(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mh(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t){return 1e3*Number(t)}function Fh(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return hh("JWT malformed, contained fewer than 3 sections"),null;try{const t=di(n);return t?JSON.parse(t):(hh("Failed to decode base64 JWT payload"),null)}catch(t){return hh("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Bh(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof Ai&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class jh{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{_initializeTime(){this.lastSignInTime=Mh(this.lastLoginAt),this.creationTime=Mh(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Bh(t,async function(t,e){return Nh(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));gh(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=sh(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=t.providerData,c=o,[...l.filter((t=>!c.some((e=>e.providerId===t.providerId)))),...c]);var l,c;const h=t.isAnonymous,u=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!h&&u,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new qh(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $h{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){gh(t.idToken,"internal-error"),gh(void 0!==t.idToken,"internal-error"),gh(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Fh(t);return gh(e,"internal-error"),gh(void 0!==e.exp,"internal-error"),gh(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return gh(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await Oh(t,{},(async()=>{const n=$i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,s=Ph(t,i,"/v1/token",`key=${r}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Sh.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new $h;return n&&(gh("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(gh("string"==typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(gh("number"==typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new $h,this.toJSON())}_performRefresh(){return mh("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t,e){gh("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Vh{async getIdToken(t){const e=await Bh(this,this.stsTokenManager.getToken(this.auth,t));return gh(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=Zi(t),i=await n.getIdToken(e),r=Fh(i);gh(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Mh(Uh(r.auth_time)),issuedAtTime:Mh(Uh(r.iat)),expirationTime:Mh(Uh(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=Zi(t);await Hh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(gh(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Vh(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){gh(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Hh(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Bh(this,async function(t,e){return Nh(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,l,c;const h=null!==(n=e.displayName)&&void 0!==n?n:void 0,u=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=e.photoURL)&&void 0!==s?s:void 0,f=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=e.createdAt)&&void 0!==l?l:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:_,emailVerified:v,isAnonymous:b,providerData:w,stsTokenManager:E}=e;gh(_&&E,t,"internal-error");const T=$h.fromJSON(this.name,E);gh("string"==typeof _,t,"internal-error"),zh(h,t.name),zh(u,t.name),gh("boolean"==typeof v,t,"internal-error"),gh("boolean"==typeof b,t,"internal-error"),zh(d,t.name),zh(p,t.name),zh(f,t.name),zh(g,t.name),zh(m,t.name),zh(y,t.name);const I=new Vh({uid:_,auth:t,email:u,emailVerified:v,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:T,createdAt:m,lastLoginAt:y});return w&&Array.isArray(w)&&(I.providerData=w.map((t=>Object.assign({},t)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(t,e,n=!1){const i=new $h;i.updateFromServerResponse(e);const r=new Vh({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Hh(r),r}constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=sh(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new qh(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}Wh.type="NONE";const Gh=Wh;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t,e,n){return`firebase:${t}:${e}:${n}`}class Jh{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Vh._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Jh(vh(Gh),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||vh(Gh);const s=Kh(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const i=Vh._fromJSON(t,e);n!==r&&(o=i),r=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(t){}}))),new Jh(r,t,n)):new Jh(r,t,n)}constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Kh(this.userKey,i.apiKey,r),this.fullPersistenceKey=Kh("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nu(e))return"Blackberry";if(iu(e))return"Webos";if(Qh(e))return"Safari";if((e.includes("chrome/")||Zh(e))&&!e.includes("edge/"))return"Chrome";if(eu(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Xh(t=Ei()){return/firefox\//i.test(t)}function Qh(t=Ei()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zh(t=Ei()){return/crios\//i.test(t)}function tu(t=Ei()){return/iemobile/i.test(t)}function eu(t=Ei()){return/android/i.test(t)}function nu(t=Ei()){return/blackberry/i.test(t)}function iu(t=Ei()){return/webos/i.test(t)}function ru(t=Ei()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function su(){return Si()&&10===document.documentMode}function ou(t=Ei()){return ru(t)||eu(t)||iu(t)||nu(t)||/windows phone/i.test(t)||tu(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function au(t,e=[]){let n;switch(t){case"Browser":n=Yh(Ei());break;case"Worker":n=`${Yh(Ei())}-${t}`;break;default:n=t}return`${n}/JsCore/9.17.1/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}constructor(t){this.auth=t,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=vh(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Jh.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return gh(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Hh(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Zi(t):null;return e&&gh(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&gh(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(vh(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ni("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&vh(t)||this._popupRedirectResolver;gh(e,this,"argument-error"),this.redirectPersistenceManager=await Jh.create(this,[vh(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return gh(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return gh(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=au(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uu(this),this.idTokenSubscription=new uu(this),this.beforeStateQueue=new lu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}}function hu(t){return Zi(t)}class uu{get next(){return gh(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=Gi((t=>this.observer=t))}}function du(t,e,n){const i=hu(t);gh(i._canInitEmulator,i,"emulator-config-failed"),gh(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=pu(e),{host:o,port:a}=function(t){const e=pu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:fu(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:fu(e)}}}(e),l=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function pu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class gu{toJSON(){return mh("not implemented")}_getIdTokenResponse(t){return mh("not implemented")}_linkToIdToken(t,e){return mh("not implemented")}_getReauthenticationResolver(t){return mh("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(t,e){return Nh(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yu extends gu{static _fromEmailAndPassword(t,e){return new yu(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new yu(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return Lh(t,"POST","/v1/accounts:signInWithPassword",Ah(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return Lh(t,"POST","/v1/accounts:signInWithEmailLink",Ah(t,e))}(t,{email:this._email,oobCode:this._password});default:uh(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return mu(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Lh(t,"POST","/v1/accounts:signInWithEmailLink",Ah(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:uh(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _u(t,e){return Lh(t,"POST","/v1/accounts:signInWithIdp",Ah(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends gu{static _fromParams(t){const e=new vu(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):uh("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=sh(e,["providerId","signInMethod"]);if(!n||!i)return null;const s=new vu(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(t){return _u(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,_u(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,_u(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=$i(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wu extends gu{static _fromVerification(t,e){return new wu({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new wu({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return Lh(t,"POST","/v1/accounts:signInWithPhoneNumber",Ah(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await Lh(t,"POST","/v1/accounts:signInWithPhoneNumber",Ah(t,e));if(n.temporaryProof)throw xh(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return Lh(t,"POST","/v1/accounts:signInWithPhoneNumber",Ah(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),bu)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new wu({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(t){super("phone","phone"),this.params=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{static parseLink(t){const e=function(t){const e=zi(Vi(t)).link,n=e?zi(Vi(e)).deep_link_id:null,i=zi(Vi(t)).deep_link_id;return(i?zi(Vi(i)).link:null)||i||n||e||t}(t);try{return new Eu(e)}catch(t){return null}}constructor(t){var e,n,i,r,s,o;const a=zi(Vi(t)),l=null!==(e=a.apiKey)&&void 0!==e?e:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,h=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);gh(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tu{static credential(t,e){return yu._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Eu.parseLink(e);return gh(n,"argument-error"),yu._fromEmailAndCode(t,n.code,n.tenantId)}constructor(){this.providerId=Tu.PROVIDER_ID}}Tu.PROVIDER_ID="password",Tu.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Tu.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Iu{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu extends Iu{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Su extends Cu{static credential(t){return vu._fromParams({providerId:Su.PROVIDER_ID,signInMethod:Su.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Su.credentialFromTaggedObject(t)}static credentialFromError(t){return Su.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Su.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}Su.FACEBOOK_SIGN_IN_METHOD="facebook.com",Su.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ku extends Cu{static credential(t,e){return vu._fromParams({providerId:ku.PROVIDER_ID,signInMethod:ku.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ku.credentialFromTaggedObject(t)}static credentialFromError(t){return ku.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return ku.credential(e,n)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}ku.GOOGLE_SIGN_IN_METHOD="google.com",ku.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ru extends Cu{static credential(t){return vu._fromParams({providerId:Ru.PROVIDER_ID,signInMethod:Ru.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ru.credentialFromTaggedObject(t)}static credentialFromError(t){return Ru.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ru.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}Ru.GITHUB_SIGN_IN_METHOD="github.com",Ru.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Au extends Cu{static credential(t,e){return vu._fromParams({providerId:Au.PROVIDER_ID,signInMethod:Au.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Au.credentialFromTaggedObject(t)}static credentialFromError(t){return Au.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Au.credential(e,n)}catch(t){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Nu(t,e){return Lh(t,"POST","/v1/accounts:signUp",Ah(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Au.TWITTER_SIGN_IN_METHOD="twitter.com",Au.PROVIDER_ID="twitter.com";class Ou{static async _fromIdTokenResponse(t,e,n,i=!1){const r=await Vh._fromIdTokenResponse(t,n,i),s=Lu(n);return new Ou({user:r,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Lu(n);return new Ou({user:t,providerId:i,_tokenResponse:n,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function Lu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pu extends Ai{static _fromErrorAndOperation(t,e,n,i){return new Pu(t,e,n,i)}constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Pu.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}}function Du(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Pu._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xu(t,e,n=!1){const i=await Bh(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ou._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mu(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Bh(t,Du(i,r,e,t),n);gh(s.idToken,i,"internal-error");const o=Fh(s.idToken);gh(o,i,"internal-error");const{sub:a}=o;return gh(t.uid===a,i,"user-mismatch"),Ou._forOperation(t,r,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&uh(i,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uu(t,e,n=!1){const i="signIn",r=await Du(t,i,e),s=await Ou._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Fu(t,e){return Uu(hu(t),e)}async function Bu(t,e,n){const i=hu(t),r=await Nu(i,{returnSecureToken:!0,email:e,password:n}),s=await Ou._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function ju(t,e,n){return Fu(Zi(t),Tu.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qu{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu extends qu{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);su()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=Ei();return Qh(t)||ru(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=ou(),this._shouldAllowMigration=!0}}Hu.type="LOCAL";const $u=Hu;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends qu{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}zu.type="SESSION";const Vu=zu;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wu{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Wu(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gu(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wu.receivers=[];class Ku{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const l=Gu("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(t){this.target=t,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yu(){return void 0!==Ju().WorkerGlobalScope&&"function"==typeof Ju().importScripts}class Xu{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function Qu(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Zu(){const t=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Xu(t).toPromise()}(),e(await Zu()))}))}))}async function td(t,e,n){const i=Qu(t,!0).put({fbase_key:e,value:n});return new Xu(i).toPromise()}function ed(t,e){const n=Qu(t,!0).delete(e);return new Xu(n).toPromise()}class nd{async _openDb(){return this.db||(this.db=await Zu()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wu._getInstance(Yu()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Ku(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Zu();return await td(t,"__sak","1"),await ed(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>td(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=Qu(t,!1).get(e),i=await new Xu(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>ed(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Qu(t,!1).getAll();return new Xu(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}nd.type="LOCAL";const id=nd;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t){return new Promise(((e,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,s;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=dh("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function sd(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
sd("rcb"),new Ih(3e4,6e4);async function od(t,e,n){var i;const r=await n.verify();try{let s;if(gh("string"==typeof r,t,"argument-error"),gh("recaptcha"===n.type,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){gh("enroll"===e.type,t,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return Nh(t,"POST","/v2/accounts/mfaEnrollment:start",Ah(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{gh("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;gh(n,t,"missing-multi-factor-info");const o=await function(t,e){return Nh(t,"POST","/v2/accounts/mfaSignIn:start",Ah(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return Nh(t,"POST","/v1/accounts:sendVerificationCode",Ah(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ad{verifyPhoneNumber(t,e){return od(this.auth,t,Zi(e))}static credential(t,e){return wu._fromVerification(t,e)}static credentialFromResult(t){const e=t;return ad.credentialFromTaggedObject(e)}static credentialFromError(t){return ad.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?wu._fromTokenResponse(e,n):null}constructor(t){this.providerId=ad.PROVIDER_ID,this.auth=hu(t)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ld(t,e){return e?vh(e):(gh(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ad.PROVIDER_ID="phone",ad.PHONE_SIGN_IN_METHOD="phone";class cd extends gu{_getIdTokenResponse(t){return _u(t,this._buildIdpRequest())}_linkToIdToken(t,e){return _u(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return _u(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function hd(t){return Uu(t.auth,new cd(t),t.bypassAuthState)}function ud(t){const{auth:e,user:n}=t;return gh(n,e,"internal-error"),Mu(n,new cd(t),t.bypassAuthState)}async function dd(t){const{auth:e,user:n}=t;return gh(n,e,"internal-error"),xu(n,new cd(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return hd;case"linkViaPopup":case"linkViaRedirect":return dd;case"reauthViaPopup":case"reauthViaRedirect":return ud;default:uh(this.auth,"internal-error")}}resolve(t){yh(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){yh(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=new Ih(2e3,1e4);class gd extends pd{async executeNotNull(){const t=await this.execute();return gh(t,this.auth,"internal-error"),t}async onExecution(){yh(1===this.filter.length,"Popup operations only handle one event");const t=Gu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(dh(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(dh(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,gd.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(dh(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,fd.get())};t()}constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,gd.currentPopupAction&&gd.currentPopupAction.cancel(),gd.currentPopupAction=this}}gd.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const md=new Map;class yd extends pd{async execute(){let t=md.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=bd(e),i=vd(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}md.set(this.auth._key(),t)}return this.bypassAuthState||md.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}}function _d(t,e){md.set(t._key(),e)}function vd(t){return vh(t._redirectPersistence)}function bd(t){return Kh("pendingRedirect",t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wd(t,e,n=!1){const i=hu(t),r=ld(i,e),s=new yd(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}class Ed{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Id(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Id(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(dh(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Td(t))}saveEventToCache(t){this.cachedEventUids.add(Td(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Td(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Id({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sd=/^https?/;async function kd(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Nh(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Rd(t))return}catch(t){}uh(t,"unauthorized-domain")}function Rd(t){const e=bh(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Sd.test(n))return!1;if(Cd.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=new Ih(3e4,6e4);function Nd(){const t=Ju().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Od=null;function Ld(t){return Od=Od||function(t){return new Promise(((e,n)=>{var i,r,s;function o(){Nd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nd(),n(dh(t,"network-request-failed"))},timeout:Ad.get()})}if(null===(r=null===(i=Ju().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Ju().gapi)||void 0===s?void 0:s.load)){const e=sd("iframefcb");return Ju()[e]=()=>{gapi.load?o():n(dh(t,"network-request-failed"))},rd(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Od=null,t}))}(t),Od}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=new Ih(5e3,15e3),Dd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Md(t){const e=t.config;gh(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ch(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,i={apiKey:e.apiKey,appName:t.name,v:"9.17.1"},r=xd.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${$i(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ud={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Fd{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function Bd(t,e,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ud),{width:i.toString(),height:r.toString(),top:s,left:o}),c=Ei().toLowerCase();n&&(a=Zh(c)?"_blank":n),Xh(c)&&(e=e||"http://localhost",l.scrollbars="yes");const h=Object.entries(l).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=Ei()){var e;return ru(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(c)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",a),new Fd(null);const u=window.open(e||"",a,h);gh(u,t,"popup-blocked");try{u.focus()}catch(t){}return new Fd(u)}function jd(t,e,n,i,r,s){gh(t.config.authDomain,t,"auth-domain-config-required"),gh(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:"9.17.1",eventId:r};if(e instanceof Iu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof Cu){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){return t.emulator?Ch(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${$i(a).slice(1)}`}const qd=class{async _openPopup(t,e,n,i){var r;yh(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Bd(t,jd(t,e,n,bh(),i),Gu())}async _openRedirect(t,e,n,i){var r;return await this._originValidation(t),r=jd(t,e,n,bh(),i),Ju().location.href=r,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(yh(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await Ld(t),n=Ju().gapi;return gh(n,t,"internal-error"),e.open({where:document.body,url:Md(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dd,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=dh(t,"network-request-failed"),s=Ju().setTimeout((()=>{i(r)}),Pd.get());function o(){Ju().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}(t),n=new Ed(t);return e.register("authEvent",(e=>{gh(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&e(!!r),uh(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=kd(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return ou()||Qh()||ru()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vu,this._completeRedirectFn=wd,this._overrideRedirectResult=_d}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hd{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){gh(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $d=vi("authIdTokenMaxAge")||300;let zd=null;var Vd;Vd="Browser",Dr(new tr("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((t,n)=>{gh(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),gh(!(null==s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:r,authDomain:s,clientPlatform:Vd,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:au(Vd)},o=new cu(t,n,i);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(vh);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Dr(new tr("auth-internal",(t=>{const e=hu(t.getProvider("auth").getImmediate());return new Hd(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),jr("@firebase/auth","0.21.3",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Vd)),jr("@firebase/auth","0.21.3","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wd="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gd{set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Pi(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:Li(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}constructor(t){this.domStorage_=t,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return Ui(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=function(t){try{if("undefined"!=typeof window&&void 0!==window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Gd(e)}}catch(t){}return new Kd},Yd=Jd("localStorage"),Xd=Jd("sessionStorage"),Qd=new hr("@firebase/database"),Zd=function(){let t=1;return function(){return t++}}(),tp=function(t){const e=Xi(t),n=new Wi;n.update(e);const i=n.digest();return ci.encodeByteArray(i)},ep=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?e+=ep.apply(null,i):e+="object"==typeof i?Pi(i):i,e+=" "}return e};let np=null,ip=!0;const rp=function(t,e){oi(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(Qd.logLevel=rr.VERBOSE,np=Qd.log.bind(Qd),e&&Xd.set("logging_enabled",!0)):"function"==typeof t?np=t:(np=null,Xd.remove("logging_enabled"))},sp=function(...t){if(!0===ip&&(ip=!1,null===np&&!0===Xd.get("logging_enabled")&&rp(!0)),np){const e=ep.apply(null,t);np(e)}},op=function(t){return function(...e){sp(t,...e)}},ap=function(...t){const e="FIREBASE INTERNAL ERROR: "+ep(...t);Qd.error(e)},lp=function(...t){const e=`FIREBASE FATAL ERROR: ${ep(...t)}`;throw Qd.error(e),new Error(e)},cp=function(...t){const e="FIREBASE WARNING: "+ep(...t);Qd.warn(e)},hp=function(t){return"number"==typeof t&&(t!=t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},up=function(t,e){if(t===e)return 0;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return-1;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return 1;{const n=vp(t),i=vp(e);return null!==n?null!==i?n-i==0?t.length-e.length:n-i:-1:null!==i?1:t<e?-1:1}},dp=function(t,e){return t===e?0:t<e?-1:1},pp=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Pi(e))},fp=function(t){if("object"!=typeof t||null===t)return Pi(t);const e=[];for(const n in t)e.push(n);e.sort();let n="{";for(let i=0;i<e.length;i++)0!==i&&(n+=","),n+=Pi(e[i]),n+=":",n+=fp(t[e[i]]);return n+="}",n},gp=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function mp(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const yp=function(t){oi(!hp(t),"Invalid JSON number");const e=1023;let n,i,r,s,o;0===t?(i=0,r=0,n=1/t==-1/0?1:0):(n=t<0,(t=Math.abs(t))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(t)/Math.LN2),e),i=s+e,r=Math.round(t*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(t/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let t=parseInt(l.substr(o,8),2).toString(16);1===t.length&&(t="0"+t),c+=t}return c.toLowerCase()};const _p=new RegExp("^-?(0*)\\d{1,10}$"),vp=function(t){if(_p.test(t)){const e=Number(t);if(e>=-2147483648&&e<=2147483647)return e}return null},bp=function(t){try{t()}catch(t){setTimeout((()=>{const e=t.stack||"";throw cp("Exception was thrown by user callback.",e),t}),Math.floor(0))}},wp=function(t,e){const n=setTimeout(t,e);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ep{getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise(((e,n)=>{setTimeout((()=>{this.appCheck?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then((e=>e.addTokenListener(t)))}notifyForInvalidToken(){cp(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null==e?void 0:e.getImmediate({optional:!0}),this.appCheck||null==e||e.get().then((t=>this.appCheck=t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{getToken(t){return this.auth_?this.auth_.getToken(t).catch((t=>t&&"auth/token-not-initialized"===t.code?(sp("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t))):new Promise(((e,n)=>{setTimeout((()=>{this.auth_?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then((e=>e.addAuthTokenListener(t)))}removeTokenChangeListener(t){this.authProvider_.get().then((e=>e.removeAuthTokenListener(t)))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',cp(t)}constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((t=>this.auth_=t))}}class Ip{getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}constructor(t){this.accessToken=t}}Ip.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sp{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Yd.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${e}`}constructor(t,e,n,i,r=!1,s="",o=!1,a=!1){this.secure=e,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yd.get("host:"+t)||this._host}}function kp(t,e,n){let i;if(oi("string"==typeof e,"typeof type must == string"),oi("object"==typeof n,"typeof params must == object"),"websocket"===e)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if("long_polling"!==e)throw new Error("Unknown connection type: "+e);i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}(function(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams})(t)&&(n.ns=t.namespace);const r=[];return mp(n,((t,e)=>{r.push(t+"="+e)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{incrementCounter(t,e=1){Ui(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return pi(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap={},Np={};function Op(t){const e=t.toString();return Ap[e]||(Ap[e]=new Rp),Ap[e]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lp{closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){for(this.pendingResponses[t]=e;this.pendingResponses[this.currentResponseNum];){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&bp((()=>{this.onMessage_(t[e])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new Lp(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(t){if(ki()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Dp(((...t)=>{const[e,n,i,r,s]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===e)this.id=n,this.password=i;else{if("close"!==e)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)}),(()=>{this.onClosed_()}),this.urlFn);const t={start:"t"};t.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t.cb=this.scriptTagHolder.uniqueCallbackIdentifier),t.v="5",this.transportSessionId&&(t.s=this.transportSessionId),this.lastSessionId&&(t.ls=this.lastSessionId),this.applicationId&&(t.p=this.applicationId),this.appCheckToken&&(t.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Cp.test(location.hostname)&&(t.r="f");const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Pp.forceAllow_=!0}static forceDisallow(){Pp.forceDisallow_=!0}static isAvailable(){return!ki()&&(!!Pp.forceAllow_||!(Pp.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=Pi(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=hi(e),i=gp(n,1840);for(let t=0;t<i.length;t++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[t]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if(ki())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=t,n.pw=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=Pi(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}constructor(t,e,n,i,r,s,o){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=op(t),this.stats_=Op(e),this.urlFn=t=>(this.appCheckToken&&(t.ac=this.appCheckToken),kp(e,"long_polling",t))}}class Dp{static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{t.contentWindow.document||sp("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){for(this.myID=t,this.myPW=e,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t.id=this.myID,t.pw=this.myPW,t.ser=this.currentSerial;let e=this.urlFn(t),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const t=this.pendingSegs.shift();n=n+"&seg"+i+"="+t.seg+"&ts"+i+"="+t.ts+"&d"+i+"="+t.d,i++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(t,(()=>{clearTimeout(i),n()}))}addTag(t,e){ki()?this.doNodeLongPoll(t,e):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{sp("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(t){}}),Math.floor(1))}constructor(t,e,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,ki())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=Zd(),window["pLPCommand"+this.uniqueCallbackIdentifier]=t,window["pRTLPCB"+this.uniqueCallbackIdentifier]=e,this.myIFrame=Dp.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(t){sp("frame writing exception"),t.stack&&sp(t.stack),sp(t)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xp=null;"undefined"!=typeof MozWebSocket?xp=MozWebSocket:"undefined"!=typeof WebSocket&&(xp=WebSocket);class Mp{static connectionURL_(t,e,n,i,r){const s={v:"5"};return!ki()&&"undefined"!=typeof location&&location.hostname&&Cp.test(location.hostname)&&(s.r="f"),e&&(s.s=e),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),kp(t,"websocket",s)}open(t,e){this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yd.set("previous_websocket_failure",!0);try{let t;if(ki()){const e=this.nodeAdmin?"AdminNode":"Node";t={headers:{"User-Agent":`Firebase/5/${Wd}/${Hn.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(t.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(t.proxy={origin:i})}this.mySock=new xp(this.connURL,[],t)}catch(t){this.log_("Error instantiating WebSocket.");const e=t.message||t.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){Mp.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==xp&&!Mp.forceDisallow_}static previouslyFailed(){return Yd.isInMemoryStorage||!0===Yd.get("previous_websocket_failure")}markConnectionHealthy(){Yd.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=Li(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(oi(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t.data;if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=Pi(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=gp(e,16384);n.length>1&&this.sendString_(String(n.length));for(let t=0;t<n.length;t++)this.sendString_(n[t])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(t){try{this.mySock.send(t)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(t,e,n,i,r,s,o){this.connId=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=op(this.connId),this.stats_=Op(e),this.connURL=Mp.connectionURL_(e,s,o,i,n),this.nodeAdmin=e.nodeAdmin}}Mp.responsesRequiredToBeHealthy=2,Mp.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Up{static get ALL_TRANSPORTS(){return[Pp,Mp]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const e=Mp&&Mp.isAvailable();let n=e&&!Mp.previouslyFailed();if(t.webSocketOnly&&(e||cp("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Mp];else{const t=this.transports_=[];for(const e of Up.ALL_TRANSPORTS)e&&e.isAvailable()&&t.push(e);Up.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(t){this.initTransports_(t)}}Up.globalTransportInitialized_=!1;class Fp{start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(e,n)}),Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=wp((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if("t"in t){const e=t.t;"a"===e?this.upgradeIfSecondaryHealthy_():"r"===e?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===e&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=pp("t",t),n=pp("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=pp("t",t),n=pp("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=pp("t",t);if("d"in t){const n=t.d;if("h"===e){const t=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(t.h=this.repoInfo_.host),this.onHandshake_(t)}else if("n"===e){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===e?this.onConnectionShutdown_(n):"r"===e?this.onReset_(n):"e"===e?ap("Server Error: "+n):"o"===e?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ap("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),"5"!==n&&cp("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),wp((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wp((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yd.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(t,e,n,i,r,s,o,a,l,c){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=op("c:"+this.id+":"),this.transportManager_=new Up(e),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{put(t,e,n,i){}merge(t,e,n,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const i=this.getInitialEvent(t);i&&e.apply(n,i)}off(t,e,n){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let t=0;t<i.length;t++)if(i[t].callback===e&&(!n||n===i[t].context))return void i.splice(t,1)}validateEventType_(t){oi(this.allowedEvents_.find((e=>e===t)),"Unknown event: "+t)}constructor(t){this.allowedEvents_=t,this.listeners_={},oi(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp extends jp{static getInstance(){return new qp}getInitialEvent(t){return oi("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Ti()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}}function $p(){return new Hp("")}function zp(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Vp(t){return t.pieces_.length-t.pieceNum_}function Wp(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Hp(t.pieces_,e)}function Gp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Kp(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Jp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Hp(e,0)}function Yp(t,e){const n=[];for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);if(e instanceof Hp)for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new Hp(n,0)}function Xp(t){return t.pieceNum_>=t.pieces_.length}function Qp(t,e){const n=zp(t),i=zp(e);if(null===n)return e;if(n===i)return Qp(Wp(t),Wp(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Zp(t,e){if(Vp(t)!==Vp(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function tf(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Vp(t)>Vp(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class ef{constructor(t,e){this.errorPrefix_=e,this.parts_=Kp(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let t=0;t<this.parts_.length;t++)this.byteLength_+=Qi(this.parts_[t]);nf(this)}}function nf(t){if(t.byteLength_>768)throw new Error(t.errorPrefix_+"has a key path longer than 768 bytes ("+t.byteLength_+").");if(t.parts_.length>32)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+rf(t))}function rf(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends jp{static getInstance(){return new sf}getInitialEvent(t){return oi("visible"===t,"Unknown event type: "+t),[this.visible_]}constructor(){let t,e;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(e="visibilitychange",t="hidden"):void 0!==document.mozHidden?(e="mozvisibilitychange",t="mozHidden"):void 0!==document.msHidden?(e="msvisibilitychange",t="msHidden"):void 0!==document.webkitHidden&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,(()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of extends Bp{sendRequest(t,e,n){const i=++this.requestNumber_,r={r:i,a:t,b:e};this.log_(Pi(r)),oi(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(t){this.initConnection_();const e=new bi,n={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:t=>{const n=t.d;"ok"===t.s?e.resolve(n):e.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),e.promise}listen(t,e,n,i){this.initConnection_();const r=t._queryIdentifier,s=t._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),oi(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),oi(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:e,query:t,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,(n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)}))}sendListen_(t){const e=t.query,n=e._path.toString(),i=e._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};t.tag&&(r.q=e._queryObject,r.t=t.tag),r.h=t.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;of.warnOnListenWarnings_(s,e);(this.listens.get(n)&&this.listens.get(n).get(i))===t&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),t.onComplete&&t.onComplete(o,s))}))}static warnOnListenWarnings_(t,e){if(t&&"object"==typeof t&&Ui(t,"w")){const n=Fi(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();cp(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&40===t.length||Mi(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=xi(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(e,n,(e=>{const n=e.s,i=e.d||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(t=>{const e=t.s,n=t.d||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)}))}unlisten(t,e){const n=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),oi(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,t._queryObject,e)}sendUnlisten_(t,e,n,i){this.log_("Unlisten on "+t+" for "+e);const r={p:t};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,i){const r={p:e,d:n};this.log_("onDisconnect "+t,r),this.sendRequest(t,r,(t=>{i&&setTimeout((()=>{i(t.s,t.d)}),Math.floor(0))}))}put(t,e,n,i){this.putInternal("p",t,e,n,i)}merge(t,e,n,i){this.putInternal("m",t,e,n,i)}putInternal(t,e,n,i,r){this.initConnection_();const s={p:e,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:t,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,(n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,(t=>{if("ok"!==t.s){const e=t.d;this.log_("reportStats","Error sending stats: "+e)}}))}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Pi(t));const e=t.r,n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e.p,e.d,!1,e.t):"m"===t?this.onDataUpdate_(e.p,e.d,!0,e.t):"c"===t?this.onListenRevoked_(e.p,e.q):"ac"===t?this.onAuthRevoked_(e.s,e.d):"apc"===t?this.onAppCheckRevoked_(e.s,e.d):"sd"===t?this.onSecurityDebugPacket_(e):ap("Unrecognized action received from server: "+Pi(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){oi(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+of.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(t){oi(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(t)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?sp("getToken() completed but was canceled"):(sp("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new Fp(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,(t=>{cp(t+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(t){this.log_("Failed to get token: "+t),s||(this.repoInfo_.nodeAdmin&&cp(t),a())}}}interrupt(t){sp("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){sp("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Bi(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map((t=>fp(t))).join("$"):"default";const i=this.removeListen_(t,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,e){const n=new Hp(t).toString();let i;if(this.listens.has(n)){const t=this.listens.get(n);i=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(t,e){sp("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){sp("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";ki()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+Wd.replace(/\./g,"-")]=1,Ti()?t["framework.cordova"]=1:Ci()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=qp.getInstance().currentlyOnline();return Bi(this.interruptReasons_)&&t}constructor(t,e,n,i,r,s,o,a){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=of.nextPersistentConnectionId_++,this.log_=op("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ki())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sf.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&qp.getInstance().on("online",this.onOnline_,this)}}of.nextPersistentConnectionId_=0,of.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class af{static Wrap(t,e){return new af(t,e)}constructor(t,e){this.name=t,this.node=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new af("[MIN_NAME]",t),i=new af("[MIN_NAME]",e);return 0!==this.compare(n,i)}minPost(){return af.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cf;class hf extends lf{static get __EMPTY_NODE(){return cf}static set __EMPTY_NODE(t){cf=t}compare(t,e){return up(t.name,e.name)}isDefinedOn(t){throw ai("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return af.MIN}maxPost(){return new af("[MAX_NAME]",cf)}makePost(t,e){return oi("string"==typeof t,"KeyIndex indexValue must always be a string."),new af(t,cf)}toString(){return".key"}}const uf=new hf;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}constructor(t,e,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,i&&(s*=-1),s<0)t=this.isReverse_?t.left:t.right;else{if(0===s){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}}class pf{copy(t,e,n,i,r){return new pf(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ff.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,i;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return ff.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,pf.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,pf.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:pf.RED,this.left=null!=i?i:ff.EMPTY_NODE,this.right=null!=r?r:ff.EMPTY_NODE}}pf.RED=!0,pf.BLACK=!1;class ff{insert(t,e){return new ff(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,pf.BLACK,null,null))}remove(t){return new ff(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,pf.BLACK,null,null))}get(t){let e,n=this.root_;for(;!n.isEmpty();){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,i=null;for(;!n.isEmpty();){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}e<0?n=n.left:e>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new df(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new df(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new df(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new df(this.root_,null,this.comparator_,!0,t)}constructor(t,e=ff.EMPTY_NODE){this.comparator_=t,this.root_=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gf(t,e){return up(t.name,e.name)}function mf(t,e){return up(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yf;ff.EMPTY_NODE=new class{copy(t,e,n,i,r){return this}insert(t,e,n){return new pf(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const _f=function(t){return"number"==typeof t?"number:"+yp(t):"string:"+t},vf=function(t){if(t.isLeafNode()){const e=t.val();oi("string"==typeof e||"number"==typeof e||"object"==typeof e&&Ui(e,".sv"),"Priority must be a string or number.")}else oi(t===yf||t.isEmpty(),"priority of unexpected type.");oi(t===yf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let bf,wf,Ef;class Tf{static set __childrenNodeConstructor(t){bf=t}static get __childrenNodeConstructor(){return bf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Tf(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:Tf.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Xp(t)?this:".priority"===zp(t)?this.priorityNode_:Tf.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:Tf.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=zp(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:(oi(".priority"!==n||1===Vp(t),".priority must be the last token in a path"),this.updateImmediateChild(n,Tf.__childrenNodeConstructor.EMPTY_NODE.updateChild(Wp(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+_f(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?yp(this.value_):this.value_,this.lazyHash_=tp(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Tf.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Tf.__childrenNodeConstructor?-1:(oi(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,i=Tf.VALUE_TYPE_ORDER.indexOf(e),r=Tf.VALUE_TYPE_ORDER.indexOf(n);return oi(i>=0,"Unknown leaf type: "+e),oi(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}constructor(t,e=Tf.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,oi(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),vf(this.priorityNode_)}}Tf.VALUE_TYPE_ORDER=["object","boolean","number","string"];const If=new class extends lf{compare(t,e){const n=t.node.getPriority(),i=e.node.getPriority(),r=n.compareTo(i);return 0===r?up(t.name,e.name):r}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return af.MIN}maxPost(){return new af("[MAX_NAME]",new Tf("[PRIORITY-POST]",Ef))}makePost(t,e){const n=wf(t);return new af(e,new Tf("[PRIORITY-POST]",n))}toString(){return".priority"}},Cf=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}constructor(t){var e;this.count=(e=t+1,parseInt(Math.log(e)/Cf,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=t+1&n}}const kf=function(t,e,n,i){t.sort(e);const r=function(e,i){const s=i-e;let o,a;if(0===s)return null;if(1===s)return o=t[e],a=n?n(o):o,new pf(a,o.node,pf.BLACK,null,null);{const l=parseInt(s/2,10)+e,c=r(e,l),h=r(l+1,i);return o=t[l],a=n?n(o):o,new pf(a,o.node,pf.BLACK,c,h)}},s=function(e){let i=null,s=null,o=t.length;const a=function(e,i){const s=o-e,a=o;o-=e;const c=r(s+1,a),h=t[s],u=n?n(h):h;l(new pf(u,h.node,i,null,c))},l=function(t){i?(i.left=t,i=t):(s=t,i=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),i=Math.pow(2,e.count-(t+1));n?a(i,pf.BLACK):(a(i,pf.BLACK),a(i,pf.RED))}return s}(new Sf(t.length));return new ff(i||e,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rf;const Af={};class Nf{static get Default(){return oi(Af&&If,"ChildrenNode.ts has not been loaded"),Rf=Rf||new Nf({".priority":Af},{".priority":If}),Rf}get(t){const e=Fi(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof ff?e:null}hasIndex(t){return Ui(this.indexSet_,t.toString())}addIndex(t,e){oi(t!==uf,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=e.getIterator(af.Wrap);let s,o=r.getNext();for(;o;)i=i||t.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?kf(n,t.getCompare()):Af;const a=t.toString(),l=Object.assign({},this.indexSet_);l[a]=t;const c=Object.assign({},this.indexes_);return c[a]=s,new Nf(c,l)}addToIndexes(t,e){const n=ji(this.indexes_,((n,i)=>{const r=Fi(this.indexSet_,i);if(oi(r,"Missing index implementation for "+i),n===Af){if(r.isDefinedOn(t.node)){const n=[],i=e.getIterator(af.Wrap);let s=i.getNext();for(;s;)s.name!==t.name&&n.push(s),s=i.getNext();return n.push(t),kf(n,r.getCompare())}return Af}{const i=e.get(t.name);let r=n;return i&&(r=r.remove(new af(t.name,i))),r.insert(t,t.node)}}));return new Nf(n,this.indexSet_)}removeFromIndexes(t,e){const n=ji(this.indexes_,(n=>{if(n===Af)return n;{const i=e.get(t.name);return i?n.remove(new af(t.name,i)):n}}));return new Nf(n,this.indexSet_)}constructor(t,e){this.indexes_=t,this.indexSet_=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Of;class Lf{static get EMPTY_NODE(){return Of||(Of=new Lf(new ff(mf),null,Nf.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Of}updatePriority(t){return this.children_.isEmpty()?this:new Lf(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?Of:e}}getChild(t){const e=zp(t);return null===e?this:this.getImmediateChild(e).getChild(Wp(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if(oi(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new af(t,e);let i,r;e.isEmpty()?(i=this.children_.remove(t),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(t,e),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?Of:this.priorityNode_;return new Lf(i,s,r)}}updateChild(t,e){const n=zp(t);if(null===n)return e;{oi(".priority"!==zp(t)||1===Vp(t),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Wp(t),e);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,i=0,r=!0;if(this.forEachChild(If,((s,o)=>{e[s]=o.val(t),n++,r&&Lf.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!t&&r&&i<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+_f(this.getPriority().val())+":"),this.forEachChild(If,((e,n)=>{const i=n.hash();""!==i&&(t+=":"+e+":"+i)})),this.lazyHash_=""===t?"":tp(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new af(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new af(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new af(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal((t=>e(t.name,t.node))):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,(t=>t));{const n=this.children_.getIteratorFrom(t.name,af.Wrap);let i=n.peek();for(;null!=i&&e.compare(i,t)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,(t=>t));{const n=this.children_.getReverseIteratorFrom(t.name,af.Wrap);let i=n.peek();for(;null!=i&&e.compare(i,t)>0;)n.getNext(),i=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Pf?-1:0}withIndex(t){if(t===uf||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new Lf(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===uf||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(If),n=e.getIterator(If);let i=t.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=t.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(t){return t===uf?null:this.indexMap_.get(t.toString())}constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&vf(this.priorityNode_),this.children_.isEmpty()&&oi(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}Lf.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Pf=new class extends Lf{compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Lf.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new ff(mf),Lf.EMPTY_NODE,Nf.Default)}};Object.defineProperties(af,{MIN:{value:new af("[MIN_NAME]",Lf.EMPTY_NODE)},MAX:{value:new af("[MAX_NAME]",Pf)}}),hf.__EMPTY_NODE=Lf.EMPTY_NODE,Tf.__childrenNodeConstructor=Lf,yf=Pf,function(t){Ef=t}(Pf);function Df(t,e=null){if(null===t)return Lf.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(e=t[".priority"]),oi(null===e||"string"==typeof e||"number"==typeof e||"object"==typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){return new Tf(t,Df(e))}if(t instanceof Array){let n=Lf.EMPTY_NODE;return mp(t,((e,i)=>{if(Ui(t,e)&&"."!==e.substring(0,1)){const t=Df(i);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}})),n.updatePriority(Df(e))}{const n=[];let i=!1;if(mp(t,((t,e)=>{if("."!==t.substring(0,1)){const r=Df(e);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new af(t,r)))}})),0===n.length)return Lf.EMPTY_NODE;const r=kf(n,gf,(t=>t.name),mf);if(i){const t=kf(n,If.getCompare());return new Lf(r,Df(e),new Nf({".priority":t},{".priority":If}))}return new Lf(r,Df(e),Nf.Default)}}!function(t){wf=t}(Df);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xf extends lf{extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),i=this.extractChild(e.node),r=n.compareTo(i);return 0===r?up(t.name,e.name):r}makePost(t,e){const n=Df(t),i=Lf.EMPTY_NODE.updateChild(this.indexPath_,n);return new af(e,i)}maxPost(){const t=Lf.EMPTY_NODE.updateChild(this.indexPath_,Pf);return new af("[MAX_NAME]",t)}toString(){return Kp(this.indexPath_,0).join("/")}constructor(t){super(),this.indexPath_=t,oi(!Xp(t)&&".priority"!==zp(t),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new class extends lf{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?up(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return af.MIN}maxPost(){return af.MAX}makePost(t,e){const n=Df(t);return new af(e,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t){return{type:"value",snapshotNode:t}}function Ff(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Bf(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function jf(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qf{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return oi(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return oi(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return oi(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return oi(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return oi(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===If}copy(){const t=new qf;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=If}}function Hf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===If?n="$priority":t.index_===Mf?n="$value":t.index_===uf?n="$key":(oi(t.index_ instanceof xf,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Pi(n),t.startSet_){const n=t.startAfterSet_?"startAfter":"startAt";e[n]=Pi(t.indexStartValue_),t.startNameSet_&&(e[n]+=","+Pi(t.indexStartName_))}if(t.endSet_){const n=t.endBeforeSet_?"endBefore":"endAt";e[n]=Pi(t.indexEndValue_),t.endNameSet_&&(e[n]+=","+Pi(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $f(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e.vf=n}return t.index_!==If&&(e.i=t.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf extends Bp{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:(oi(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,i){const r=t._path.toString();this.log_("Listen called for "+r+" "+t._queryIdentifier);const s=zf.getListenId_(t,n),o={};this.listens_[s]=o;const a=Hf(t._queryParams);this.restRequest_(r+".json",a,((t,e)=>{let a=e;if(404===t&&(a=null,t=null),null===t&&this.onDataUpdate_(r,a,!1,n),Fi(this.listens_,s)===o){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",i(e,null)}}))}unlisten(t,e){const n=zf.getListenId_(t,e);delete this.listens_[n]}get(t){const e=Hf(t._queryParams),n=t._path.toString(),i=new bi;return this.restRequest_(n+".json",e,((t,e)=>{let r=e;404===t&&(r=null,t=null),null===t?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(e.auth=i.accessToken),r&&r.token&&(e.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+$i(e);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=Li(o.responseText)}catch(t){cp("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&cp("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}constructor(t,e,n,i){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=op("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}constructor(){this.rootNode_=Lf.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(){return{value:null,children:new Map}}function Gf(t,e,n){if(Xp(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const i=zp(e);t.children.has(i)||t.children.set(i,Wf());Gf(t.children.get(i),e=Wp(e),n)}}function Kf(t,e,n){null!==t.value?n(e,t.value):function(t,e){t.children.forEach(((t,n)=>{e(n,t)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,((t,i)=>{Kf(i,new Hp(e.toString()+"/"+t),n)}))}class Jf{get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&mp(this.last_,((t,n)=>{e[t]=e[t]-n})),this.last_=t,e}constructor(t){this.collection_=t,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;mp(t,((t,i)=>{i>0&&Ui(this.statsToReport_,t)&&(e[t]=i,n=!0)})),n&&this.server_.reportStats(e),wp(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new Jf(t);const n=1e4+2e4*Math.random();wp(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xf,Qf;function Zf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Qf=Xf||(Xf={}))[Qf.OVERWRITE=0]="OVERWRITE",Qf[Qf.MERGE=1]="MERGE",Qf[Qf.ACK_USER_WRITE=2]="ACK_USER_WRITE",Qf[Qf.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class tg{operationForChild(t){if(Xp(this.path)){if(null!=this.affectedTree.value)return oi(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new Hp(t));return new tg($p(),e,this.revert)}}return oi(zp(this.path)===t,"operationForChild called for unrelated child."),new tg(Wp(this.path),this.affectedTree,this.revert)}constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Xf.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eg{operationForChild(t){return Xp(this.path)?new eg(this.source,$p(),this.snap.getImmediateChild(t)):new eg(this.source,Wp(this.path),this.snap)}constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Xf.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{operationForChild(t){if(Xp(this.path)){const e=this.children.subtree(new Hp(t));return e.isEmpty()?null:e.value?new eg(this.source,$p(),e.value):new ng(this.source,$p(),e)}return oi(zp(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new ng(this.source,Wp(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Xf.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Xp(t))return this.isFullyInitialized()&&!this.filtered_;const e=zp(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t,e,n,i,r,s){const o=i.filter((t=>t.type===n));o.sort(((e,n)=>function(t,e,n){if(null==e.childName||null==n.childName)throw ai("Should only compare child_ events.");const i=new af(e.childName,e.snapshotNode),r=new af(n.childName,n.snapshotNode);return t.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e,n))),o.forEach((n=>{const i=function(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}(t,n,s);r.forEach((r=>{r.respondsTo(n.type)&&e.push(r.createEvent(i,t.query_))}))}))}function sg(t,e){return{eventCache:t,serverCache:e}}function og(t,e,n,i){return sg(new ig(e,n,i),t.serverCache)}function ag(t,e,n,i){return sg(t.eventCache,new ig(e,n,i))}function lg(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function cg(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hg;class ug{static fromObject(t){let e=new ug(null);return mp(t,((t,n)=>{e=e.set(new Hp(t),n)})),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:$p(),value:this.value};if(Xp(t))return null;{const n=zp(t),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(Wp(t),e);if(null!=r){return{path:Yp(new Hp(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,(()=>!0))}subtree(t){if(Xp(t))return this;{const e=zp(t),n=this.children.get(e);return null!==n?n.subtree(Wp(t)):new ug(null)}}set(t,e){if(Xp(t))return new ug(e,this.children);{const n=zp(t),i=(this.children.get(n)||new ug(null)).set(Wp(t),e),r=this.children.insert(n,i);return new ug(this.value,r)}}remove(t){if(Xp(t))return this.children.isEmpty()?new ug(null):new ug(null,this.children);{const e=zp(t),n=this.children.get(e);if(n){const i=n.remove(Wp(t));let r;return r=i.isEmpty()?this.children.remove(e):this.children.insert(e,i),null===this.value&&r.isEmpty()?new ug(null):new ug(this.value,r)}return this}}get(t){if(Xp(t))return this.value;{const e=zp(t),n=this.children.get(e);return n?n.get(Wp(t)):null}}setTree(t,e){if(Xp(t))return e;{const n=zp(t),i=(this.children.get(n)||new ug(null)).setTree(Wp(t),e);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new ug(this.value,r)}}fold(t){return this.fold_($p(),t)}fold_(t,e){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(Yp(t,i),e)})),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,$p(),e)}findOnPath_(t,e,n){const i=!!this.value&&n(e,this.value);if(i)return i;if(Xp(t))return null;{const i=zp(t),r=this.children.get(i);return r?r.findOnPath_(Wp(t),Yp(e,i),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,$p(),e)}foreachOnPath_(t,e,n){if(Xp(t))return this;{this.value&&n(e,this.value);const i=zp(t),r=this.children.get(i);return r?r.foreachOnPath_(Wp(t),Yp(e,i),n):new ug(null)}}foreach(t){this.foreach_($p(),t)}foreach_(t,e){this.children.inorderTraversal(((n,i)=>{i.foreach_(Yp(t,n),e)})),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal(((e,n)=>{n.value&&t(e,n.value)}))}constructor(t,e=(()=>(hg||(hg=new ff(dp)),hg))()){this.value=t,this.children=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{static empty(){return new dg(new ug(null))}constructor(t){this.writeTree_=t}}function pg(t,e,n){if(Xp(e))return new dg(new ug(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(null!=i){const r=i.path;let s=i.value;const o=Qp(r,e);return s=s.updateChild(o,n),new dg(t.writeTree_.set(r,s))}{const i=new ug(n),r=t.writeTree_.setTree(e,i);return new dg(r)}}}function fg(t,e,n){let i=t;return mp(n,((t,n)=>{i=pg(i,Yp(e,t),n)})),i}function gg(t,e){if(Xp(e))return dg.empty();{const n=t.writeTree_.setTree(e,new ug(null));return new dg(n)}}function mg(t,e){return null!=yg(t,e)}function yg(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(Qp(n.path,e)):null}function _g(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(If,((t,n)=>{e.push(new af(t,n))})):t.writeTree_.children.inorderTraversal(((t,n)=>{null!=n.value&&e.push(new af(t,n.value))})),e}function vg(t,e){if(Xp(e))return t;{const n=yg(t,e);return new dg(null!=n?new ug(n):t.writeTree_.subtree(e))}}function bg(t){return t.writeTree_.isEmpty()}function wg(t,e){return Eg($p(),t.writeTree_,e)}function Eg(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal(((e,r)=>{".priority"===e?(oi(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Eg(Yp(t,e),r,n)})),n.getChild(t).isEmpty()||null===i||(n=n.updateChild(Yp(t,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t,e){return Mg(e,t)}function Ig(t,e){const n=t.allWrites.findIndex((t=>t.writeId===e));oi(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const e=t.allWrites[o];e.visible&&(o>=n&&Cg(e,i.path)?r=!1:tf(i.path,e.path)&&(s=!0)),o--}if(r){if(s)return function(t){t.visibleWrites=kg(t.allWrites,Sg,$p()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}(t),!0;if(i.snap)t.visibleWrites=gg(t.visibleWrites,i.path);else{mp(i.children,(e=>{t.visibleWrites=gg(t.visibleWrites,Yp(i.path,e))}))}return!0}return!1}function Cg(t,e){if(t.snap)return tf(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&tf(Yp(t.path,n),e))return!0;return!1}function Sg(t){return t.visible}function kg(t,e,n){let i=dg.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const t=s.path;let e;if(s.snap)tf(n,t)?(e=Qp(n,t),i=pg(i,e,s.snap)):tf(t,n)&&(e=Qp(t,n),i=pg(i,$p(),s.snap.getChild(e)));else{if(!s.children)throw ai("WriteRecord should have .snap or .children");if(tf(n,t))e=Qp(n,t),i=fg(i,e,s.children);else if(tf(t,n))if(e=Qp(t,n),Xp(e))i=fg(i,$p(),s.children);else{const t=Fi(s.children,zp(e));if(t){const n=t.getChild(Wp(e));i=pg(i,$p(),n)}}}}}return i}function Rg(t,e,n,i,r){if(i||r){const s=vg(t.visibleWrites,e);if(!r&&bg(s))return n;if(r||null!=n||mg(s,$p())){const s=function(t){return(t.visible||r)&&(!i||!~i.indexOf(t.writeId))&&(tf(t.path,e)||tf(e,t.path))};return wg(kg(t.allWrites,s,e),n||Lf.EMPTY_NODE)}return null}{const i=yg(t.visibleWrites,e);if(null!=i)return i;{const i=vg(t.visibleWrites,e);if(bg(i))return n;if(null!=n||mg(i,$p())){return wg(i,n||Lf.EMPTY_NODE)}return null}}}function Ag(t,e,n,i){return Rg(t.writeTree,t.treePath,e,n,i)}function Ng(t,e){return function(t,e,n){let i=Lf.EMPTY_NODE;const r=yg(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(If,((t,e)=>{i=i.updateImmediateChild(t,e)})),i;if(n){const r=vg(t.visibleWrites,e);return n.forEachChild(If,((t,e)=>{const n=wg(vg(r,new Hp(t)),e);i=i.updateImmediateChild(t,n)})),_g(r).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}return _g(vg(t.visibleWrites,e)).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}(t.writeTree,t.treePath,e)}function Og(t,e,n,i){return function(t,e,n,i,r){oi(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Yp(e,n);if(mg(t.visibleWrites,s))return null;{const e=vg(t.visibleWrites,s);return bg(e)?r.getChild(n):wg(e,r.getChild(n))}}(t.writeTree,t.treePath,e,n,i)}function Lg(t,e){return function(t,e){return yg(t.visibleWrites,e)}(t.writeTree,Yp(t.treePath,e))}function Pg(t,e,n,i,r,s){return function(t,e,n,i,r,s,o){let a;const l=vg(t.visibleWrites,e),c=yg(l,$p());if(null!=c)a=c;else{if(null==n)return[];a=wg(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&t.length<r;)0!==e(l,i)&&t.push(l),l=n.getNext();return t}}(t.writeTree,t.treePath,e,n,i,r,s)}function Dg(t,e,n){return function(t,e,n,i){const r=Yp(e,n),s=yg(t.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return wg(vg(t.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(t.writeTree,t.treePath,e,n)}function xg(t,e){return Mg(Yp(t.treePath,e),t.writeTree)}function Mg(t,e){return{treePath:t,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{trackChildChange(t){const e=t.type,n=t.childName;oi("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),oi(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===e&&"child_removed"===r)this.changeMap.set(n,jf(n,t.snapshotNode,i.snapshotNode));else if("child_removed"===e&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===r)this.changeMap.set(n,Bf(n,i.oldSnap));else if("child_changed"===e&&"child_added"===r)this.changeMap.set(n,Ff(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==r)throw ai("Illegal combination of changes: "+t+" occurred after "+i);this.changeMap.set(n,jf(n,t.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=new class{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}};class Bg{getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new ig(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Dg(this.writes_,t,e)}}getChildAfterChild(t,e,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:cg(this.viewCache_),r=Pg(this.writes_,i,e,1,n,t);return 0===r.length?null:r[0]}constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t,e,n,i,r){const s=new Ug;let o,a;if(n.type===Xf.OVERWRITE){const l=n;l.source.fromUser?o=$g(t,e,l.path,l.snap,i,r,s):(oi(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!Xp(l.path),o=Hg(t,e,l.path,l.snap,i,r,a,s))}else if(n.type===Xf.MERGE){const l=n;l.source.fromUser?o=function(t,e,n,i,r,s,o){let a=e;return i.foreach(((i,l)=>{const c=Yp(n,i);zg(e,zp(c))&&(a=$g(t,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=Yp(n,i);zg(e,zp(c))||(a=$g(t,a,c,l,r,s,o))})),a}(t,e,l.path,l.children,i,r,s):(oi(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Wg(t,e,l.path,l.children,i,r,a,s))}else if(n.type===Xf.ACK_USER_WRITE){const a=n;o=a.revert?function(t,e,n,i,r,s){let o;if(null!=Lg(i,n))return e;{const a=new Bg(i,e,r),l=e.eventCache.getNode();let c;if(Xp(n)||".priority"===zp(n)){let n;if(e.serverCache.isFullyInitialized())n=Ag(i,cg(e));else{const t=e.serverCache.getNode();oi(t instanceof Lf,"serverChildren would be complete if leaf node"),n=Ng(i,t)}c=t.filter.updateFullNode(l,n,s)}else{const r=zp(n);let h=Dg(i,r,e.serverCache);null==h&&e.serverCache.isCompleteForChild(r)&&(h=l.getImmediateChild(r)),c=null!=h?t.filter.updateChild(l,r,h,Wp(n),a,s):e.eventCache.getNode().hasChild(r)?t.filter.updateChild(l,r,Lf.EMPTY_NODE,Wp(n),a,s):l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ag(i,cg(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||null!=Lg(i,$p()),og(e,c,o,t.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e,a.path,i,r,s):function(t,e,n,i,r,s,o){if(null!=Lg(r,n))return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(null!=i.value){if(Xp(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Hg(t,e,n,l.getNode().getChild(n),r,s,a,o);if(Xp(n)){let i=new ug(null);return l.getNode().forEachChild(uf,((t,e)=>{i=i.set(new Hp(t),e)})),Wg(t,e,n,i,r,s,a,o)}return e}{let c=new ug(null);return i.foreach(((t,e)=>{const i=Yp(n,t);l.isCompleteForPath(i)&&(c=c.set(t,l.getNode().getChild(i)))})),Wg(t,e,n,c,r,s,a,o)}}(t,e,a.path,a.affectedTree,i,r,s)}else{if(n.type!==Xf.LISTEN_COMPLETE)throw ai("Unknown operation type: "+n.type);o=function(t,e,n,i,r){const s=e.serverCache,o=ag(e,s.getNode(),s.isFullyInitialized()||Xp(n),s.isFiltered());return qg(t,o,n,i,Fg,r)}(t,e,n.path,i,s)}const l=s.getChanges();return function(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=lg(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Uf(lg(e)))}}(e,o,l),{viewCache:o,changes:l}}function qg(t,e,n,i,r,s){const o=e.eventCache;if(null!=Lg(i,n))return e;{let a,l;if(Xp(n))if(oi(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=cg(e),r=Ng(i,n instanceof Lf?n:Lf.EMPTY_NODE);a=t.filter.updateFullNode(e.eventCache.getNode(),r,s)}else{const n=Ag(i,cg(e));a=t.filter.updateFullNode(e.eventCache.getNode(),n,s)}else{const c=zp(n);if(".priority"===c){oi(1===Vp(n),"Can't have a priority with additional path components");const r=o.getNode();l=e.serverCache.getNode();const s=Og(i,n,r,l);a=null!=s?t.filter.updatePriority(r,s):o.getNode()}else{const h=Wp(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const t=Og(i,n,o.getNode(),l);u=null!=t?o.getNode().getImmediateChild(c).updateChild(h,t):o.getNode().getImmediateChild(c)}else u=Dg(i,c,e.serverCache);a=null!=u?t.filter.updateChild(o.getNode(),c,u,h,r,s):o.getNode()}}return og(e,a,o.isFullyInitialized()||Xp(n),t.filter.filtersNodes())}}function Hg(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(Xp(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const t=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),t,null)}else{const t=zp(n);if(!l.isCompleteForPath(n)&&Vp(n)>1)return e;const r=Wp(n),s=l.getNode().getImmediateChild(t).updateChild(r,i);c=".priority"===t?h.updatePriority(l.getNode(),s):h.updateChild(l.getNode(),t,s,r,Fg,null)}const u=ag(e,c,l.isFullyInitialized()||Xp(n),h.filtersNodes());return qg(t,u,n,r,new Bg(r,u,s),a)}function $g(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const h=new Bg(r,e,s);if(Xp(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=og(e,c,!0,t.filter.filtersNodes());else{const r=zp(n);if(".priority"===r)c=t.filter.updatePriority(e.eventCache.getNode(),i),l=og(e,c,a.isFullyInitialized(),a.isFiltered());else{const s=Wp(n),c=a.getNode().getImmediateChild(r);let u;if(Xp(s))u=i;else{const t=h.getCompleteChild(r);u=null!=t?".priority"===Gp(s)&&t.getChild(Jp(s)).isEmpty()?t:t.updateChild(s,i):Lf.EMPTY_NODE}if(c.equals(u))l=e;else{l=og(e,t.filter.updateChild(a.getNode(),r,u,s,h,o),a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function zg(t,e){return t.eventCache.isCompleteForChild(e)}function Vg(t,e,n){return n.foreach(((t,n)=>{e=e.updateChild(t,n)})),e}function Wg(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l,c=e;l=Xp(n)?i:new ug(null).setTree(n,i);const h=e.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=Vg(0,e.serverCache.getNode().getImmediateChild(n),i);c=Hg(t,c,new Hp(n),l,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!e.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=Vg(0,e.serverCache.getNode().getImmediateChild(n),i);c=Hg(t,c,new Hp(n),l,r,s,o,a)}})),c}function Gg(t,e){const n=cg(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Xp(e)&&!n.getImmediateChild(zp(e)).isEmpty())?n.getChild(e):null}function Kg(t,e,n,i){e.type===Xf.MERGE&&null!==e.source.queryId&&(oi(cg(t.viewCache_),"We should always have a full cache before handling merges"),oi(lg(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=jg(t.processor_,r,e,n,i);var o,a;return o=t.processor_,a=s.viewCache,oi(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),oi(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),oi(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Jg(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Jg(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return function(t,e,n,i){const r=[],s=[];return e.forEach((e=>{var n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&s.push((n=e.childName,{type:"child_moved",snapshotNode:e.snapshotNode,childName:n}))})),rg(t,r,"child_removed",e,i,n),rg(t,r,"child_added",e,i,n),rg(t,r,"child_moved",s,i,n),rg(t,r,"child_changed",e,i,n),rg(t,r,"value",e,i,n),r}(t.eventGenerator_,e,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yg,Xg;function Qg(t,e,n,i){const r=e.source.queryId;if(null!==r){const s=t.views.get(r);return oi(null!=s,"SyncTree gave us an op for an invalid query."),Kg(s,e,n,i)}{let r=[];for(const s of t.views.values())r=r.concat(Kg(s,e,n,i));return r}}function Zg(t,e){let n=null;for(const i of t.views.values())n=n||Gg(i,e);return n}class tm{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ug(null),this.pendingWriteTree_={visibleWrites:dg.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function em(t,e,n,i,r){return function(t,e,n,i,r){oi(i>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=pg(t.visibleWrites,e,n)),t.lastWriteId=i}(t.pendingWriteTree_,e,n,i,r),r?om(t,new eg({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},e,n)):[]}function nm(t,e,n=!1){const i=function(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}(t.pendingWriteTree_,e);if(Ig(t.pendingWriteTree_,e)){let e=new ug(null);return null!=i.snap?e=e.set($p(),!0):mp(i.children,(t=>{e=e.set(new Hp(t),!0)})),om(t,new tg(i.path,e,n))}return[]}function im(t,e,n){return om(t,new eg({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,n))}function rm(t,e,n,i){const r=cm(t,i);if(null!=r){const i=hm(r),s=i.path,o=i.queryId,a=Qp(s,e);return um(t,s,new eg(Zf(o),a,n))}return[]}function sm(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,((t,n)=>{const i=Zg(n,Qp(t,e));if(i)return i}));return Rg(i,e,r,n,!0)}function om(t,e){return am(e,t.syncPointTree_,null,Tg(t.pendingWriteTree_,$p()))}function am(t,e,n,i){if(Xp(t.path))return lm(t,e,n,i);{const r=e.get($p());null==n&&null!=r&&(n=Zg(r,$p()));let s=[];const o=zp(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const t=n?n.getImmediateChild(o):null,e=xg(i,o);s=s.concat(am(a,l,t,e))}return r&&(s=s.concat(Qg(r,t,i,n))),s}}function lm(t,e,n,i){const r=e.get($p());null==n&&null!=r&&(n=Zg(r,$p()));let s=[];return e.children.inorderTraversal(((e,r)=>{const o=n?n.getImmediateChild(e):null,a=xg(i,e),l=t.operationForChild(e);l&&(s=s.concat(lm(l,r,o,a)))})),r&&(s=s.concat(Qg(r,t,i,n))),s}function cm(t,e){return t.tagToQueryMap.get(e)}function hm(t){const e=t.indexOf("$");return oi(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Hp(t.substr(0,e))}}function um(t,e,n){const i=t.syncPointTree_.get(e);oi(i,"Missing sync point for query tag that we're tracking");return Qg(i,n,Tg(t.pendingWriteTree_,e),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dm{getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new dm(e)}node(){return this.node_}constructor(t){this.node_=t}}class pm{getImmediateChild(t){const e=Yp(this.path_,t);return new pm(this.syncTree_,e)}node(){return sm(this.syncTree_,this.path_)}constructor(t,e){this.syncTree_=t,this.path_=e}}const fm=function(t,e,n){return t&&"object"==typeof t?(oi(".sv"in t,"Unexpected leaf node or priority contents"),"string"==typeof t[".sv"]?gm(t[".sv"],e,n):"object"==typeof t[".sv"]?mm(t[".sv"],e):void oi(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},gm=function(t,e,n){if("timestamp"===t)return n.timestamp;oi(!1,"Unexpected server value: "+t)},mm=function(t,e,n){t.hasOwnProperty("increment")||oi(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;"number"!=typeof i&&oi(!1,"Unexpected increment value: "+i);const r=e.node();if(oi(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},ym=function(t,e,n,i){return vm(e,new pm(n,t),i)},_m=function(t,e,n){return vm(t,new dm(e),n)};function vm(t,e,n){const i=t.getPriority().val(),r=fm(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const i=t,s=fm(i.getValue(),e,n);return s!==i.getValue()||r!==i.getPriority().val()?new Tf(s,Df(r)):t}{const i=t;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new Tf(r))),i.forEachChild(If,((t,i)=>{const r=vm(i,e.getImmediateChild(t),n);r!==i&&(s=s.updateImmediateChild(t,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function wm(t,e){let n=e instanceof Hp?e:new Hp(e),i=t,r=zp(n);for(;null!==r;){const t=Fi(i.node.children,r)||{children:{},childCount:0};i=new bm(r,i,t),n=Wp(n),r=zp(n)}return i}function Em(t){return t.node.value}function Tm(t,e){t.node.value=e,Rm(t)}function Im(t){return t.node.childCount>0}function Cm(t,e){mp(t.node.children,((n,i)=>{e(new bm(n,t,i))}))}function Sm(t,e,n,i){n&&!i&&e(t),Cm(t,(t=>{Sm(t,e,!0,i)})),n&&i&&e(t)}function km(t){return new Hp(null===t.parent?t.name:km(t.parent)+"/"+t.name)}function Rm(t){null!==t.parent&&function(t,e,n){const i=function(t){return void 0===Em(t)&&!Im(t)}(n),r=Ui(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Rm(t)):i||r||(t.node.children[e]=n.node,t.node.childCount++,Rm(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.parent,t.name,t)}const Am=/[\[\].#$\/\u0000-\u001F\u007F]/,Nm=/[\[\].#$\u0000-\u001F\u007F]/,Om=function(t){return"string"==typeof t&&0!==t.length&&!Am.test(t)},Lm=function(t){return"string"==typeof t&&0!==t.length&&!Nm.test(t)},Pm=function(t,e,n){const i=n instanceof Hp?new ef(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+rf(i));if("function"==typeof e)throw new Error(t+"contains a function "+rf(i)+" with contents = "+e.toString());if(hp(e))throw new Error(t+"contains "+e.toString()+" "+rf(i));if("string"==typeof e&&e.length>10485760/3&&Qi(e)>10485760)throw new Error(t+"contains a string greater than 10485760 utf8 bytes "+rf(i)+" ('"+e.substring(0,50)+"...')");if(e&&"object"==typeof e){let n=!1,r=!1;if(mp(e,((e,s)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(r=!0,!Om(e)))throw new Error(t+" contains an invalid key ("+e+") "+rf(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=e,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=Qi(a),nf(o),Pm(t,s,i),function(t){const e=t.parts_.pop();t.byteLength_-=Qi(e),t.parts_.length>0&&(t.byteLength_-=1)}(i)})),n&&r)throw new Error(t+' contains ".value" child '+rf(i)+" in addition to actual children.")}},Dm=function(t,e){const n=e.path.toString();if("string"!=typeof e.repoInfo.host||0===e.repoInfo.host.length||!Om(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Lm(t)}(n))throw new Error(Yi(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Mm(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();null===n||Zp(s,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function Um(t,e,n){Mm(t,n),Fm(t,(t=>tf(t,e)||tf(e,t)))}function Fm(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){e(r.path)?(Bm(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Bm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const i=n.getEventRunner();np&&sp("event: "+n.toString()),bp(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(t,e,n,i){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Wf(),this.transactionQueueTree_=new bm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function qm(t,e,n){if(t.stats_=Op(t.repoInfo_),t.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)t.server_=new zf(t.repoInfo_,((e,n,i,r)=>{zm(t,e,n,i,r)}),t.authTokenProvider_,t.appCheckProvider_),setTimeout((()=>Vm(t,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Pi(n)}catch(t){throw new Error("Invalid authOverride provided: "+t)}}t.persistentConnection_=new of(t.repoInfo_,e,((e,n,i,r)=>{zm(t,e,n,i,r)}),(e=>{Vm(t,e)}),(e=>{!function(t,e){mp(e,((e,n)=>{Wm(t,e,n)}))}(t,e)}),t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener((e=>{t.server_.refreshAuthToken(e)})),t.appCheckProvider_.addTokenChangeListener((e=>{t.server_.refreshAppCheckToken(e.token)})),t.statsReporter_=function(t,e){const n=t.toString();return Np[n]||(Np[n]=e()),Np[n]}(t.repoInfo_,(()=>new Yf(t.stats_,t.server_))),t.infoData_=new Vf,t.infoSyncTree_=new tm({startListening:(e,n,i,r)=>{let s=[];const o=t.infoData_.getNode(e._path);return o.isEmpty()||(s=im(t.infoSyncTree_,e._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),Wm(t,"connected",!1),t.serverSyncTree_=new tm({startListening:(e,n,i,r)=>(t.server_.listen(e,i,n,((n,i)=>{const s=r(n,i);Um(t.eventQueue_,e._path,s)})),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function Hm(t){const e=t.infoData_.getNode(new Hp(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+e}function $m(t){return(e=(e={timestamp:Hm(t)})||{}).timestamp=e.timestamp||(new Date).getTime(),e;var e}function zm(t,e,n,i,r){t.dataUpdateCount++;const s=new Hp(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const e=ji(n,(t=>Df(t)));o=function(t,e,n,i){const r=cm(t,i);if(r){const i=hm(r),s=i.path,o=i.queryId,a=Qp(s,e),l=ug.fromObject(n);return um(t,s,new ng(Zf(o),a,l))}return[]}(t.serverSyncTree_,s,e,r)}else{const e=Df(n);o=rm(t.serverSyncTree_,s,e,r)}else if(i){const e=ji(n,(t=>Df(t)));o=function(t,e,n){const i=ug.fromObject(n);return om(t,new ng({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,i))}(t.serverSyncTree_,s,e)}else{const e=Df(n);o=im(t.serverSyncTree_,s,e)}let a=s;o.length>0&&(a=Qm(t,s)),Um(t.eventQueue_,a,o)}function Vm(t,e){Wm(t,"connected",e),!1===e&&function(t){Jm(t,"onDisconnectEvents");const e=$m(t),n=Wf();Kf(t.onDisconnect_,$p(),((i,r)=>{const s=ym(i,r,t.serverSyncTree_,e);Gf(n,i,s)}));let i=[];Kf(n,$p(),((e,n)=>{i=i.concat(im(t.serverSyncTree_,e,n));const r=iy(t,e);Qm(t,r)})),t.onDisconnect_=Wf(),Um(t.eventQueue_,$p(),i)}(t)}function Wm(t,e,n){const i=new Hp("/.info/"+e),r=Df(n);t.infoData_.updateSnapshot(i,r);const s=im(t.infoSyncTree_,i,r);Um(t.eventQueue_,i,s)}function Gm(t){return t.nextWriteId_++}function Km(t){t.persistentConnection_&&t.persistentConnection_.interrupt("repo_interrupt")}function Jm(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),sp(n,...e)}function Ym(t,e,n){return sm(t.serverSyncTree_,e,n)||Lf.EMPTY_NODE}function Xm(t,e=t.transactionQueueTree_){if(e||ny(t,e),Em(e)){const n=ty(t,e);oi(n.length>0,"Sending zero length transaction queue");n.every((t=>0===t.status))&&function(t,e,n){const i=n.map((t=>t.currentWriteId)),r=Ym(t,e,i);let s=r;const o=r.hash();for(let t=0;t<n.length;t++){const i=n[t];oi(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=Qp(e,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,(i=>{Jm(t,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let e=0;e<n.length;e++)n[e].status=2,r=r.concat(nm(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&i.push((()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved))),n[e].unwatcher();ny(t,wm(t.transactionQueueTree_,e)),Xm(t,t.transactionQueueTree_),Um(t.eventQueue_,e,r);for(let t=0;t<i.length;t++)bp(i[t])}else{if("datastale"===i)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{cp("transaction at "+l.toString()+" failed: "+i);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=i}Qm(t,e)}}),o)}(t,km(e),n)}else Im(e)&&Cm(e,(e=>{Xm(t,e)}))}function Qm(t,e){const n=Zm(t,e),i=km(n);return function(t,e,n){if(0===e.length)return;const i=[];let r=[];const s=e.filter((t=>0===t.status)).map((t=>t.currentWriteId));for(let a=0;a<e.length;a++){const l=e[a],c=Qp(n,l.path);let h,u=!1;if(oi(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,h=l.abortReason,r=r.concat(nm(t.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)u=!0,h="maxretry",r=r.concat(nm(t.serverSyncTree_,l.currentWriteId,!0));else{const n=Ym(t,l.path,s);l.currentInputSnapshot=n;const i=e[a].update(n.val());if(void 0!==i){Pm("transaction failed: Data returned ",i,l.path);let e=Df(i);"object"==typeof i&&null!=i&&Ui(i,".priority")||(e=e.updatePriority(n.getPriority()));const o=l.currentWriteId,a=$m(t),c=_m(e,n,a);l.currentOutputSnapshotRaw=e,l.currentOutputSnapshotResolved=c,l.currentWriteId=Gm(t),s.splice(s.indexOf(o),1),r=r.concat(em(t.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(nm(t.serverSyncTree_,o,!0))}else u=!0,h="nodata",r=r.concat(nm(t.serverSyncTree_,l.currentWriteId,!0))}Um(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,o=e[a].unwatcher,setTimeout(o,Math.floor(0)),e[a].onComplete&&("nodata"===h?i.push((()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot))):i.push((()=>e[a].onComplete(new Error(h),!1,null)))))}var o;ny(t,t.transactionQueueTree_);for(let t=0;t<i.length;t++)bp(i[t]);Xm(t,t.transactionQueueTree_)}(t,ty(t,n),i),i}function Zm(t,e){let n,i=t.transactionQueueTree_;for(n=zp(e);null!==n&&void 0===Em(i);)i=wm(i,n),n=zp(e=Wp(e));return i}function ty(t,e){const n=[];return ey(t,e,n),n.sort(((t,e)=>t.order-e.order)),n}function ey(t,e,n){const i=Em(e);if(i)for(let t=0;t<i.length;t++)n.push(i[t]);Cm(e,(e=>{ey(t,e,n)}))}function ny(t,e){const n=Em(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,Tm(e,n.length>0?n:void 0)}Cm(e,(e=>{ny(t,e)}))}function iy(t,e){const n=km(Zm(t,e)),i=wm(t.transactionQueueTree_,e);return function(t,e,n){let i=n?t:t.parent;for(;null!==i;){if(e(i))return!0;i=i.parent}}(i,(e=>{ry(t,e)})),ry(t,i),Sm(i,(e=>{ry(t,e)})),n}function ry(t,e){const n=Em(e);if(n){const i=[];let r=[],s=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?(oi(s===e-1,"All SENT items should be at beginning of queue."),s=e,n[e].status=3,n[e].abortReason="set"):(oi(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),r=r.concat(nm(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&i.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Tm(e,void 0):n.length=s+1,Um(t.eventQueue_,km(e),r);for(let t=0;t<i.length;t++)bp(i[t])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=function(t,e){const n=oy(t),i=n.namespace;"firebase.com"===n.domain&&lp(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||lp("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&cp("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Sp(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new Hp(n.pathString)}},oy=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof t){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");-1===h&&(h=t.length);let u=t.indexOf("?");-1===u&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(r=function(t){let e="";const n=t.split("/");for(let t=0;t<n.length;t++)if(n[t].length>0){let i=n[t];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(t){}e+="/"+i}return e}(t.substring(h,u)));const d=function(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):cp(`Invalid query segment '${n}' in query '${t}'`)}return e}(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const t=e.indexOf(".");i=e.substring(0,t).toLowerCase(),n=e.substring(t+1),s=i}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};!function(){let t=0;const e=[]}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ay{get key(){return Xp(this._path)?null:Gp(this._path)}get ref(){return new ly(this._repo,this._path)}get _queryIdentifier(){const t=$f(this._queryParams),e=fp(t);return"{}"===e?"default":e}get _queryObject(){return $f(this._queryParams)}isEqual(t){if(!((t=Zi(t))instanceof ay))return!1;const e=this._repo===t._repo,n=Zp(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return e&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}(this._path)}constructor(t,e,n,i){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=i}}class ly extends ay{get parent(){const t=Jp(this._path);return null===t?null:new ly(this._repo,t)}get root(){let t=this;for(;null!==t.parent;)t=t.parent;return t}constructor(t,e){super(t,e,new qf,!1)}}!function(t){oi(!Yg,"__referenceConstructor has already been defined"),Yg=t}(ly),function(t){oi(!Xg,"__referenceConstructor has already been defined"),Xg=t}(ly);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cy={};let hy=!1;function uy(t,e,n,i,r){let s=i||t.options.databaseURL;void 0===s&&(t.options.projectId||lp("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),sp("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=sy(s,r),c=l.repoInfo;void 0!==Hn&&Hn.env&&(a=Hn.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=sy(s,r),c=l.repoInfo):o=!l.repoInfo.secure;const h=r&&o?new Ip(Ip.OWNER):new Tp(t.name,t.options,e);Dm("Invalid Firebase Database URL",l),Xp(l.path)||lp("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(t,e,n,i){let r=cy[e.name];r||(r={},cy[e.name]=r);let s=r[t.toURLString()];s&&lp("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new jm(t,hy,n,i),r[t.toURLString()]=s,s}(c,t,h,new Ep(t.name,n));return new dy(u,t)}class dy{get _repo(){return this._instanceStarted||(qm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ly(this._repo,$p())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(t,e){const n=cy[e];n&&n[t.key]===t||lp(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Km(t),delete n[t.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&lp("Cannot call "+t+" on a deleted database.")}constructor(t,e){this._repoInternal=t,this.app=e,this.type="database",this._instanceStarted=!1}}of.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},of.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){Wd="9.17.1",Dr(new tr("database",((t,{instanceIdentifier:e})=>uy(t.getProvider("app").getImmediate(),t.getProvider("auth-internal"),t.getProvider("app-check-internal"),e)),"PUBLIC").setMultipleInstances(!0)),jr("@firebase/database","0.14.3",t),jr("@firebase/database","0.14.3","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();const py=Fr({apiKey:"AIzaSyCEvjWSGXAodZ-uOPqRUlwY7-bkZBuLMJM",authDomain:"film-library-8db5a.firebaseapp.com",projectId:"film-library-8db5a",storageBucket:"film-library-8db5a.appspot.com",messagingSenderId:"854707559729",appId:"1:854707559729:web:8a7e1d6f0fbec39a222410"}),fy=function(t,e){const n="string"==typeof t?t:e||"(default)",i=xr("object"==typeof t?t:Br(),"firestore").getImmediate({identifier:n});if(!i._initialized){const t=_i("firestore");t&&function(t,e,n,i={}){var r;const s=(t=Kc(t,Xc))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&Jl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=zl.MOCK_USER;else{e=wi(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new tc(Zl.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new zl(s)}t._authCredentials=new rc(new nc(e,n))}}(i,...t)}return i}(),gy=function(t=Br()){const e=xr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=xr(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(qi(n.getOptions(),null!=e?e:{}))return t;uh(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:qd,persistence:[id,$u,Vu]}),i=vi("authTokenSyncURL");if(i){const t=(r=i,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>$d)return;const i=null==e?void 0:e.token;zd!==i&&(zd=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(t,e,n){Zi(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){Zi(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}var r;const s=yi("auth");return s&&du(n,`http://${s}`),n}(py),my=(function(t,e,...n){if(t=Zi(t),Vc("collection","path",e),t instanceof Xc){const i=fc.fromString(e,...n);return Wc(i),new th(t,null,i)}{if(!(t instanceof Qc||t instanceof th))throw new tc(Zl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(fc.fromString(e,...n));Wc(i),new th(t.firestore,null,i)}}(fy,"library"),/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),yy=document.querySelector(".signup");yy.addEventListener("submit",(t=>{t.preventDefault();const e=yy.email.value,n=yy.password.value;console.log(my.test(e)),Bu(gy,e,n).then((t=>{t.user;return console.log("user created:",t.user),yy.reset(),console.log("wrong email")})).catch((t=>{alert(t.message)}))}));document.querySelector(".logout").addEventListener("click",(()=>{var t;(t=gy,Zi(t).signOut()).then((()=>{console.log("the user signed out")})).catch((t=>{console.log(t.message)}))}));const _y=document.querySelector(".login");_y.addEventListener("submit",(t=>{t.preventDefault();const e=_y.email.value,n=_y.password.value;ju(gy,e,n).then((t=>{console.log("user loggen in:",t.user)})).catch((t=>{console.log(t.message)}))}));const vy=document.querySelector(".modal-login"),by=document.querySelector("div[data-section='auth']"),wy=document.querySelector("div[data-section='logout']");vy.style.display="none";document.querySelector(".open-modal-bth").addEventListener("click",(t=>{vy.classList.remove("hidden"),console.log(vy),console.log(t),vy.style.display="",Ey.classList.remove("hidden"),Ty.classList.add("hidden")}));document.querySelector(".close-modal-bth").addEventListener("click",(t=>{vy.classList.add("hidden"),console.log(vy),console.log(t)}));const Ey=document.querySelector(".login-modal"),Ty=document.querySelector(".signup-modal"),Iy=t=>{"login"===t.target.dataset.block&&(console.dir(t.currentTarget.elements),console.log(Ey),Ey.classList.remove("hidden"),Ty.classList.add("hidden")),"signup"===t.target.dataset.block&&(Ey.classList.add("hidden"),Ty.classList.remove("hidden")),"signup"===t.target.dataset.action&&signUpFirebase().then((()=>console.log("your logic removeEventModal()")))};var Cy,Sy,ky;function Ry(t){return`<li class='genres-list__item'>\n    <button class='btn-genre ${t}'>${t}</button>\n    </li>`}Cy=t=>{t?(wy.classList.remove("hidden"),t.uid,console.log("u are inside")):(console.log("u r not in"),by.classList.remove("hidden"),wy.classList.add("hidden"))},Zi(gy).onAuthStateChanged(Cy,Sy,ky),vy.addEventListener("click",Iy),e.pop.forEach(((t,e,n)=>{let i=Math.random()*(e%2==0?-15:15),r=20*Math.random();t.animate([{transform:"translate(0, 0)"},{transform:`translate(${i}rem, ${r}rem)`}],{duration:5e3*(Math.random()+1),direction:"alternate",fill:"both",iterations:1/0,easing:"ease-in-out"})})),e.genresListEl.classList.add("hidden");const Ay=Object.values(Nn);if(e.homeBTN.classList.contains("current")){const t=Ay.map((t=>Ry(t))).join("");e.genresListEl.innerHTML=t,e.choiceBtnEl&&e.choiceBtnEl.addEventListener("click",(t=>{e.genresListEl.classList.toggle("hidden"),e.choiceBtnEl.classList.toggle("active")})),e.genresListEl&&e.genresListEl.addEventListener("click",(t=>{"BUTTON"===t.target.nodeName&&async function(t){t.currentTarget.childNodes.forEach((t=>t.children[0].classList.remove("active"))),t.target.classList.add("active");const n=[],i=[],r=t.target.textContent;for(let t=1;t<100;t++){h(await c(t),r)}for(let t=0;t<n.length;t+=20){const e=[];for(let i=0;i<20&&n[t+i];i++)e.push(n[t+i]);i.push(e)}const s=Ln(i[0]);e.filmGalleryHomeEl.innerHTML=s,e.pageBtns.innerHTML="";let o=1;const a=i.length,l=Dn(o,a);async function c(t=1){const e=await In(t),{results:n}=e;return[...n]}function h(t,e){t.map((t=>{t.genre_ids.map((t=>Nn[t])).join(", ").includes(e)&&n.push(t)}))}e.pageBtnsGenres.innerHTML=l,e.pageBtnsGenres.addEventListener("click",(t=>{if(t.target!==t.currentTarget&&"SPAN"!==t.target.nodeName){if(t.target.classList.contains("previos")){e.pageBtns.innerHTML="",e.pageBtnsGenres.innerHTML="",console.log(o),o-=1;const t=Dn(o,a);e.pageBtnsGenres.innerHTML=t;const n=Ln(i[o-1]);e.filmGalleryHomeEl.innerHTML=n}if(t.target.classList.contains("next")){e.pageBtns.innerHTML="",e.pageBtnsGenres.innerHTML="",console.log(o),o+=1;const t=Dn(o,a);e.pageBtnsGenres.innerHTML=t;const n=Ln(i[o-1]);e.filmGalleryHomeEl.innerHTML=n}if(!t.target.classList.contains("previos")&&!t.target.classList.contains("next")){e.pageBtns.innerHTML="",e.pageBtnsGenres.innerHTML="",o=+t.target.textContent;const n=Dn(o,a);e.pageBtnsGenres.innerHTML=n;const r=Ln(i[o-1]);e.filmGalleryHomeEl.innerHTML=r}}}))}(t)}))}e.homeBTN.classList.contains("current")&&async function(){e.choiceBtnEl.classList.remove("hidden"),e.pageBtns.innerHTML="",e.pageBtnsInput.innerHTML="",e.filmGalleryHomeEl.innerHTML="",e.loaderEl.classList.remove("hidden");const t=await In();e.loaderEl.classList.add("hidden");const{results:n}=t,i=t.page,r=Ln([...n]);e.filmGalleryHomeEl.innerHTML=r;const s=Dn(i,99);e.pageBtnsInput.innerHTML="",e.pageBtns.innerHTML=s,e.pageBtns.addEventListener("click",(t=>{console.log(t.target.nodeName),t.target===t.currentTarget&&"SPAN"===t.target.nodeName||Mn(t)}))}(),e.formEl&&e.formEl.addEventListener("submit",(t=>Bn(t)));
//# sourceMappingURL=library.294031ed.js.map

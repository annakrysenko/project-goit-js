var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const e={submitBtnSearchEl:document.querySelector(".submit-search-button"),formEl:document.querySelector(".form-search"),mainHomeEl:document.querySelector("#main-home"),inputAnswerParEl:document.querySelector(".input-answer"),homeBTN:document.querySelector(".home"),libraryCurrentBntEl:document.querySelector(".my-library .current"),pageBtns:document.querySelector(".pagination-list"),pageBtnsInput:document.querySelector(".paginatio-input-list"),pageBtnsGenres:document.querySelector(".paginatio-genres-list"),filmGalleryHomeEl:document.querySelector(".movie-gallery"),filmGalleryLibraryEl:document.querySelector(".movie-gallery-library"),openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-team-backdrop"),modalEl:document.querySelector(".modal"),backdropEl:document.querySelector(".backdrop"),containerEl:document.querySelector(".modal-container"),modalCloseBtn:document.querySelector(".modal__close-btn"),loaderEl:document.querySelector(".loader"),themeButtonEl:document.querySelector(".theme"),themeListEl:document.querySelector(".theme__list"),defaultThemeButtonEl:document.querySelector(".reset-theme-btn"),lightThemeButtonEl:document.querySelector(".light-theme-btn"),darkThemeButtonEl:document.querySelector(".dark-theme-btn"),htmlEl:document.documentElement,themeContainerEl:document.querySelector(".theme-container"),trailerBackdrop:document.querySelector(".trailer-backdrop"),trailerBox:document.querySelector(".trailer-box"),trailerBtnClose:document.querySelector(".trailer-btn__close"),trailerBtnOpen:document.querySelector("[data-modal-open]"),boxIframe:document.querySelector(".box-iframe"),pop:document.querySelectorAll(".pop"),genresListEl:document.querySelector(".genres-list"),choiceBtnEl:document.querySelector(".choice-genre "),genresBtnsEl:document.querySelectorAll(".btn-genre")};function n(){window.removeEventListener("keydown",i),document.body.classList.remove("show-modal")}function i(t){"Escape"===t.code&&n()}e.openModalBtn&&(e.openModalBtn.addEventListener("click",(function(t){t.preventDefault(),window.addEventListener("keydown",i),document.body.classList.add("show-modal")})),e.closeModalBtn.addEventListener("click",n),e.backdrop.addEventListener("click",(function(t){t.currentTarget===t.target&&n()})));const r=document.querySelector(".btn-to-top");function s(){return localStorage.getItem("user-theme")}function o(){e.lightThemeButtonEl.classList.remove("current-theme"),e.darkThemeButtonEl.classList.remove("current-theme"),e.defaultThemeButtonEl.classList.remove("current-theme")}function a(){localStorage.removeItem("user-theme");let t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.htmlEl.classList.remove("light","dark"),e.htmlEl.classList.add(t),e.defaultThemeButtonEl.classList.add("current-theme")}function l(t,e){return function(){return t.apply(e,arguments)}}window.addEventListener("scroll",(function(){const t=window.pageYOffset,e=document.documentElement.clientHeight;t>e&&r.classList.add("btn-to-top--visible");t<e&&r.classList.remove("btn-to-top--visible")})),r.addEventListener("click",(function(){window.pageYOffset>0&&window.scrollTo({top:0,behavior:"smooth"})})),e.themeListEl.classList.add("hidden"),window.addEventListener("load",(function(){s()?(e.htmlEl.classList.add(s()),"light"===s()?e.lightThemeButtonEl.classList.add("current-theme"):"dark"===s()&&e.darkThemeButtonEl.classList.add("current-theme")):a(),s()||window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(()=>{null===s()&&a()}));s(),e.themeButtonEl.addEventListener("click",(function(){e.themeListEl.classList.toggle("hidden"),e.themeListEl.addEventListener("click",(t=>{t.target.classList.contains("light-theme-btn")?(o(),e.htmlEl.classList.remove("light","dark"),e.htmlEl.classList.add("light"),e.lightThemeButtonEl.classList.add("current-theme"),localStorage.setItem("user-theme","light"),e.themeListEl.classList.add("hidden")):t.target.classList.contains("dark-theme-btn")?(o(),e.htmlEl.classList.remove("light","dark"),e.htmlEl.classList.add("dark"),e.darkThemeButtonEl.classList.add("current-theme"),localStorage.setItem("user-theme","dark"),e.themeListEl.classList.add("hidden")):t.target.classList.contains("reset-theme-btn")&&(o(),e.themeListEl.classList.add("hidden"),a())}))}))}));const{toString:c}=Object.prototype,{getPrototypeOf:h}=Object,u=(d=Object.create(null),t=>{const e=c.call(t);return d[e]||(d[e]=e.slice(8,-1).toLowerCase())});var d;const p=t=>(t=t.toLowerCase(),e=>u(e)===t),f=t=>e=>typeof e===t,{isArray:g}=Array,m=f("undefined");const y=p("ArrayBuffer");const _=f("string"),v=f("function"),b=f("number"),w=t=>null!==t&&"object"==typeof t,E=t=>{if("object"!==u(t))return!1;const e=h(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},T=p("Date"),I=p("File"),C=p("Blob"),S=p("FileList"),k=p("URLSearchParams");function R(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let i,r;if("object"!=typeof t&&(t=[t]),g(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),s=r.length;let o;for(i=0;i<s;i++)o=r[i],e.call(null,t[o],o,t)}}function A(t,e){e=e.toLowerCase();const n=Object.keys(t);let i,r=n.length;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const N="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,L=t=>!m(t)&&t!==N;const O=(P="undefined"!=typeof Uint8Array&&h(Uint8Array),t=>P&&t instanceof P);var P;const D=p("HTMLFormElement"),x=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),M=p("RegExp"),U=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};R(n,((n,r)=>{!1!==e(n,r,t)&&(i[r]=n)})),Object.defineProperties(t,i)},F={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};var B={isArray:g,isArrayBuffer:y,isBuffer:function(t){return null!==t&&!m(t)&&null!==t.constructor&&!m(t.constructor)&&v(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||c.call(t)===e||v(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&y(t.buffer),e},isString:_,isNumber:b,isBoolean:t=>!0===t||!1===t,isObject:w,isPlainObject:E,isUndefined:m,isDate:T,isFile:I,isBlob:C,isRegExp:M,isFunction:v,isStream:t=>w(t)&&v(t.pipe),isURLSearchParams:k,isTypedArray:O,isFileList:S,forEach:R,merge:function t(){const{caseless:e}=L(this)&&this||{},n={},i=(i,r)=>{const s=e&&A(n,r)||r;E(n[s])&&E(i)?n[s]=t(n[s],i):E(i)?n[s]=t({},i):g(i)?n[s]=i.slice():n[s]=i};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&R(arguments[t],i);return n},extend:(t,e,n,{allOwnKeys:i}={})=>(R(e,((e,i)=>{n&&v(e)?t[i]=l(e,n):t[i]=e}),{allOwnKeys:i}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},null==t)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],i&&!i(o,t,e)||a[o]||(e[o]=t[o],a[o]=!0);t=!1!==n&&h(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:u,kindOfTest:p,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return-1!==i&&i===n},toArray:t=>{if(!t)return null;if(g(t))return t;let e=t.length;if(!b(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=n.next())&&!i.done;){const n=i.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const i=[];for(;null!==(n=t.exec(e));)i.push(n);return i},isHTMLForm:D,hasOwnProperty:x,hasOwnProp:x,reduceDescriptors:U,freezeMethods:t=>{U(t,((e,n)=>{if(v(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=t[n];v(i)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},i=t=>{t.forEach((t=>{n[t]=!0}))};return g(t)?i(t):i(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:A,global:N,isContextDefined:L,ALPHABET:F,generateString:(t=16,e=F.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n},isSpecCompliantForm:function(t){return!!(t&&v(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),n=(t,i)=>{if(w(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[i]=t;const r=g(t)?[]:{};return R(t,((t,e)=>{const s=n(t,i+1);!m(s)&&(r[e]=s)})),e[i]=void 0,r}}return t};return n(t,0)}};function j(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}B.inherits(j,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const q=j.prototype,H={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{H[t]={value:t}})),Object.defineProperties(j,H),Object.defineProperty(q,"isAxiosError",{value:!0}),j.from=(t,e,n,i,r,s)=>{const o=Object.create(q);return B.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),j.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var $,z,V,W=j;z=function(t){var e,n,i=et(t),r=i[0],s=i[1],o=new X(function(t,e,n){return 3*(e+n)/4-n}(0,r,s)),a=0,l=s>0?r-4:r;for(n=0;n<l;n+=4)e=Y[t.charCodeAt(n)]<<18|Y[t.charCodeAt(n+1)]<<12|Y[t.charCodeAt(n+2)]<<6|Y[t.charCodeAt(n+3)],o[a++]=e>>16&255,o[a++]=e>>8&255,o[a++]=255&e;2===s&&(e=Y[t.charCodeAt(n)]<<2|Y[t.charCodeAt(n+1)]>>4,o[a++]=255&e);1===s&&(e=Y[t.charCodeAt(n)]<<10|Y[t.charCodeAt(n+1)]<<4|Y[t.charCodeAt(n+2)]>>2,o[a++]=e>>8&255,o[a++]=255&e);return o},V=function(t){for(var e,n=t.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(nt(t,o,o+s>a?a:o+s));1===i?(e=t[n-1],r.push(J[e>>2]+J[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],r.push(J[e>>10]+J[e>>4&63]+J[e<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var G,K,J=[],Y=[],X="undefined"!=typeof Uint8Array?Uint8Array:Array,Q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Z=0,tt=Q.length;Z<tt;++Z)J[Z]=Q[Z],Y[Q.charCodeAt(Z)]=Z;function et(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function nt(t,e,n){for(var i,r,s=[],o=e;o<n;o+=3)i=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),s.push(J[(r=i)>>18&63]+J[r>>12&63]+J[r>>6&63]+J[63&r]);return s.join("")}Y["-".charCodeAt(0)]=62,Y["_".charCodeAt(0)]=63,G=function(t,e,n,i,r){var s,o,a=8*r-i-1,l=(1<<a)-1,c=l>>1,h=-7,u=n?r-1:0,d=n?-1:1,p=t[e+u];for(u+=d,s=p&(1<<-h)-1,p>>=-h,h+=a;h>0;s=256*s+t[e+u],u+=d,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=i;h>0;o=256*o+t[e+u],u+=d,h-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(p?-1:1);o+=Math.pow(2,i),s-=c}return(p?-1:1)*o*Math.pow(2,s-i)},K=function(t,e,n,i,r,s){var o,a,l,c=8*s-r-1,h=(1<<c)-1,u=h>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,p=i?0:s-1,f=i?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=h):(o=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-o))<1&&(o--,l*=2),(e+=o+u>=1?d/l:d*Math.pow(2,1-u))*l>=2&&(o++,l/=2),o+u>=h?(a=0,o=h):o+u>=1?(a=(e*l-1)*Math.pow(2,r),o+=u):(a=e*Math.pow(2,u-1)*Math.pow(2,r),o=0));r>=8;t[n+p]=255&a,p+=f,a/=256,r-=8);for(o=o<<r|a,c+=r;c>0;t[n+p]=255&o,p+=f,o/=256,c-=8);t[n+p-f]|=128*g};const it="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;$=st;function rt(t){if(t>2147483647)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,st.prototype),e}function st(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return lt(t)}return ot(t,e,n)}function ot(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!st.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|dt(t,e);let i=rt(n);const r=i.write(t,e);r!==n&&(i=i.slice(0,r));return i}(t,e);if(ArrayBuffer.isView(t))return function(t){if(Vt(t,Uint8Array)){const e=new Uint8Array(t);return ht(e.buffer,e.byteOffset,e.byteLength)}return ct(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Vt(t,ArrayBuffer)||t&&Vt(t.buffer,ArrayBuffer))return ht(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(Vt(t,SharedArrayBuffer)||t&&Vt(t.buffer,SharedArrayBuffer)))return ht(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=t.valueOf&&t.valueOf();if(null!=i&&i!==t)return st.from(i,e,n);const r=function(t){if(st.isBuffer(t)){const e=0|ut(t.length),n=rt(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||Wt(t.length)?rt(0):ct(t);if("Buffer"===t.type&&Array.isArray(t.data))return ct(t.data)}(t);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return st.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function at(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function lt(t){return at(t),rt(t<0?0:0|ut(t))}function ct(t){const e=t.length<0?0:0|ut(t.length),n=rt(e);for(let i=0;i<e;i+=1)n[i]=255&t[i];return n}function ht(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(i,st.prototype),i}function ut(t){if(t>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|t}function dt(t,e){if(st.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Vt(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Ht(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return $t(t).length;default:if(r)return i?-1:Ht(t).length;e=(""+e).toLowerCase(),r=!0}}function pt(t,e,n){let i=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return St(this,e,n);case"utf8":case"utf-8":return Tt(this,e,n);case"ascii":return It(this,e,n);case"latin1":case"binary":return Ct(this,e,n);case"base64":return Et(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return kt(this,e,n);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}function ft(t,e,n){const i=t[e];t[e]=t[n],t[n]=i}function gt(t,e,n,i,r){if(0===t.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Wt(n=+n)&&(n=r?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(r)return-1;n=t.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof e&&(e=st.from(e,i)),st.isBuffer(e))return 0===e.length?-1:mt(t,e,n,i,r);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):mt(t,[e],n,i,r);throw new TypeError("val must be string, number or Buffer")}function mt(t,e,n,i,r){let s,o=1,a=t.length,l=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return-1;o=2,a/=2,l/=2,n/=2}function c(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(r){let i=-1;for(s=n;s<a;s++)if(c(t,s)===c(e,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===l)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){let n=!0;for(let i=0;i<l;i++)if(c(t,s+i)!==c(e,i)){n=!1;break}if(n)return s}return-1}function yt(t,e,n,i){n=Number(n)||0;const r=t.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=e.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(e.substr(2*o,2),16);if(Wt(i))return o;t[n+o]=i}return o}function _t(t,e,n,i){return zt(Ht(e,t.length-n),t,n,i)}function vt(t,e,n,i){return zt(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,i)}function bt(t,e,n,i){return zt($t(e),t,n,i)}function wt(t,e,n,i){return zt(function(t,e){let n,i,r;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(e,t.length-n),t,n,i)}function Et(t,e,n){return 0===e&&n===t.length?V(t):V(t.slice(e,n))}function Tt(t,e,n){n=Math.min(t.length,n);const i=[];let r=e;for(;r<n;){const e=t[r];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(r+o<=n){let n,i,a,l;switch(o){case 1:e<128&&(s=e);break;case 2:n=t[r+1],128==(192&n)&&(l=(31&e)<<6|63&n,l>127&&(s=l));break;case 3:n=t[r+1],i=t[r+2],128==(192&n)&&128==(192&i)&&(l=(15&e)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(s=l));break;case 4:n=t[r+1],i=t[r+2],a=t[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&e)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(s=l))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(t){const e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);let n="",i=0;for(;i<e;)n+=String.fromCharCode.apply(String,t.slice(i,i+=4096));return n}(i)}st.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),st.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(st.prototype,"parent",{enumerable:!0,get:function(){if(st.isBuffer(this))return this.buffer}}),Object.defineProperty(st.prototype,"offset",{enumerable:!0,get:function(){if(st.isBuffer(this))return this.byteOffset}}),st.poolSize=8192,st.from=function(t,e,n){return ot(t,e,n)},Object.setPrototypeOf(st.prototype,Uint8Array.prototype),Object.setPrototypeOf(st,Uint8Array),st.alloc=function(t,e,n){return function(t,e,n){return at(t),t<=0?rt(t):void 0!==e?"string"==typeof n?rt(t).fill(e,n):rt(t).fill(e):rt(t)}(t,e,n)},st.allocUnsafe=function(t){return lt(t)},st.allocUnsafeSlow=function(t){return lt(t)},st.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==st.prototype},st.compare=function(t,e){if(Vt(t,Uint8Array)&&(t=st.from(t,t.offset,t.byteLength)),Vt(e,Uint8Array)&&(e=st.from(e,e.offset,e.byteLength)),!st.isBuffer(t)||!st.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,i=e.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(t[r]!==e[r]){n=t[r],i=e[r];break}return n<i?-1:i<n?1:0},st.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},st.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return st.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const i=st.allocUnsafe(e);let r=0;for(n=0;n<t.length;++n){let e=t[n];if(Vt(e,Uint8Array))r+e.length>i.length?(st.isBuffer(e)||(e=st.from(e)),e.copy(i,r)):Uint8Array.prototype.set.call(i,e,r);else{if(!st.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(i,r)}r+=e.length}return i},st.byteLength=dt,st.prototype._isBuffer=!0,st.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)ft(this,e,e+1);return this},st.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)ft(this,e,e+3),ft(this,e+1,e+2);return this},st.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)ft(this,e,e+7),ft(this,e+1,e+6),ft(this,e+2,e+5),ft(this,e+3,e+4);return this},st.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?Tt(this,0,t):pt.apply(this,arguments)},st.prototype.toLocaleString=st.prototype.toString,st.prototype.equals=function(t){if(!st.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===st.compare(this,t)},st.prototype.inspect=function(){let t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},it&&(st.prototype[it]=st.prototype.inspect),st.prototype.compare=function(t,e,n,i,r){if(Vt(t,Uint8Array)&&(t=st.from(t,t.offset,t.byteLength)),!st.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),e<0||n>t.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&e>=n)return 0;if(i>=r)return-1;if(e>=n)return 1;if(this===t)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(e>>>=0);const a=Math.min(s,o),l=this.slice(i,r),c=t.slice(e,n);for(let t=0;t<a;++t)if(l[t]!==c[t]){s=l[t],o=c[t];break}return s<o?-1:o<s?1:0},st.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},st.prototype.indexOf=function(t,e,n){return gt(this,t,e,n,!0)},st.prototype.lastIndexOf=function(t,e,n){return gt(this,t,e,n,!1)},st.prototype.write=function(t,e,n,i){if(void 0===e)i="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)i=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-e;if((void 0===n||n>r)&&(n=r),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return yt(this,t,e,n);case"utf8":case"utf-8":return _t(this,t,e,n);case"ascii":case"latin1":case"binary":return vt(this,t,e,n);case"base64":return bt(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return wt(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},st.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function It(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(127&t[r]);return i}function Ct(t,e,n){let i="";n=Math.min(t.length,n);for(let r=e;r<n;++r)i+=String.fromCharCode(t[r]);return i}function St(t,e,n){const i=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=e;i<n;++i)r+=Gt[t[i]];return r}function kt(t,e,n){const i=t.slice(e,n);let r="";for(let t=0;t<i.length-1;t+=2)r+=String.fromCharCode(i[t]+256*i[t+1]);return r}function Rt(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function At(t,e,n,i,r,s){if(!st.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>r||e<s)throw new RangeError('"value" argument is out of bounds');if(n+i>t.length)throw new RangeError("Index out of range")}function Nt(t,e,n,i,r){Ft(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,n}function Lt(t,e,n,i,r){Ft(e,i,r,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s>>=8,t[n+6]=s,s>>=8,t[n+5]=s,s>>=8,t[n+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=o,o>>=8,t[n+2]=o,o>>=8,t[n+1]=o,o>>=8,t[n]=o,n+8}function Ot(t,e,n,i,r,s){if(n+i>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Pt(t,e,n,i,r){return e=+e,n>>>=0,r||Ot(t,0,n,4),K(t,e,n,i,23,4),n+4}function Dt(t,e,n,i,r){return e=+e,n>>>=0,r||Ot(t,0,n,8),K(t,e,n,i,52,8),n+8}st.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const i=this.subarray(t,e);return Object.setPrototypeOf(i,st.prototype),i},st.prototype.readUintLE=st.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||Rt(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return i},st.prototype.readUintBE=st.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||Rt(t,e,this.length);let i=this[t+--e],r=1;for(;e>0&&(r*=256);)i+=this[t+--e]*r;return i},st.prototype.readUint8=st.prototype.readUInt8=function(t,e){return t>>>=0,e||Rt(t,1,this.length),this[t]},st.prototype.readUint16LE=st.prototype.readUInt16LE=function(t,e){return t>>>=0,e||Rt(t,2,this.length),this[t]|this[t+1]<<8},st.prototype.readUint16BE=st.prototype.readUInt16BE=function(t,e){return t>>>=0,e||Rt(t,2,this.length),this[t]<<8|this[t+1]},st.prototype.readUint32LE=st.prototype.readUInt32LE=function(t,e){return t>>>=0,e||Rt(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},st.prototype.readUint32BE=st.prototype.readUInt32BE=function(t,e){return t>>>=0,e||Rt(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},st.prototype.readBigUInt64LE=Kt((function(t){Bt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||jt(t,this.length-8);const i=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,r=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),st.prototype.readBigUInt64BE=Kt((function(t){Bt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||jt(t,this.length-8);const i=e*2**24+65536*this[++t]+256*this[++t]+this[++t],r=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),st.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||Rt(t,e,this.length);let i=this[t],r=1,s=0;for(;++s<e&&(r*=256);)i+=this[t+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*e)),i},st.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||Rt(t,e,this.length);let i=e,r=1,s=this[t+--i];for(;i>0&&(r*=256);)s+=this[t+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*e)),s},st.prototype.readInt8=function(t,e){return t>>>=0,e||Rt(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},st.prototype.readInt16LE=function(t,e){t>>>=0,e||Rt(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},st.prototype.readInt16BE=function(t,e){t>>>=0,e||Rt(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},st.prototype.readInt32LE=function(t,e){return t>>>=0,e||Rt(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},st.prototype.readInt32BE=function(t,e){return t>>>=0,e||Rt(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},st.prototype.readBigInt64LE=Kt((function(t){Bt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||jt(t,this.length-8);const i=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),st.prototype.readBigInt64BE=Kt((function(t){Bt(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||jt(t,this.length-8);const i=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(i)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),st.prototype.readFloatLE=function(t,e){return t>>>=0,e||Rt(t,4,this.length),G(this,t,!0,23,4)},st.prototype.readFloatBE=function(t,e){return t>>>=0,e||Rt(t,4,this.length),G(this,t,!1,23,4)},st.prototype.readDoubleLE=function(t,e){return t>>>=0,e||Rt(t,8,this.length),G(this,t,!0,52,8)},st.prototype.readDoubleBE=function(t,e){return t>>>=0,e||Rt(t,8,this.length),G(this,t,!1,52,8)},st.prototype.writeUintLE=st.prototype.writeUIntLE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){At(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[e]=255&t;++s<n&&(r*=256);)this[e+s]=t/r&255;return e+n},st.prototype.writeUintBE=st.prototype.writeUIntBE=function(t,e,n,i){if(t=+t,e>>>=0,n>>>=0,!i){At(this,t,e,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[e+r]=255&t;--r>=0&&(s*=256);)this[e+r]=t/s&255;return e+n},st.prototype.writeUint8=st.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,1,255,0),this[e]=255&t,e+1},st.prototype.writeUint16LE=st.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},st.prototype.writeUint16BE=st.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},st.prototype.writeUint32LE=st.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},st.prototype.writeUint32BE=st.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},st.prototype.writeBigUInt64LE=Kt((function(t,e=0){return Nt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),st.prototype.writeBigUInt64BE=Kt((function(t,e=0){return Lt(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),st.prototype.writeIntLE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);At(this,t,e,n,i-1,-i)}let r=0,s=1,o=0;for(this[e]=255&t;++r<n&&(s*=256);)t<0&&0===o&&0!==this[e+r-1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},st.prototype.writeIntBE=function(t,e,n,i){if(t=+t,e>>>=0,!i){const i=Math.pow(2,8*n-1);At(this,t,e,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[e+r]=255&t;--r>=0&&(s*=256);)t<0&&0===o&&0!==this[e+r+1]&&(o=1),this[e+r]=(t/s>>0)-o&255;return e+n},st.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},st.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},st.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},st.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},st.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||At(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},st.prototype.writeBigInt64LE=Kt((function(t,e=0){return Nt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),st.prototype.writeBigInt64BE=Kt((function(t,e=0){return Lt(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),st.prototype.writeFloatLE=function(t,e,n){return Pt(this,t,e,!0,n)},st.prototype.writeFloatBE=function(t,e,n){return Pt(this,t,e,!1,n)},st.prototype.writeDoubleLE=function(t,e,n){return Dt(this,t,e,!0,n)},st.prototype.writeDoubleBE=function(t,e,n){return Dt(this,t,e,!1,n)},st.prototype.copy=function(t,e,n,i){if(!st.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-n&&(i=t.length-e+n);const r=i-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,i):Uint8Array.prototype.set.call(t,this.subarray(n,i),e),r},st.prototype.fill=function(t,e,n,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!st.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===t.length){const e=t.charCodeAt(0);("utf8"===i&&e<128||"latin1"===i)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let r;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(r=e;r<n;++r)this[r]=t;else{const s=st.isBuffer(t)?t:st.from(t,i),o=s.length;if(0===o)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(r=0;r<n-e;++r)this[r+e]=s[r%o]}return this};const xt={};function Mt(t,e,n){xt[t]=class extends n{get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}}}function Ut(t){let e="",n=t.length;const i="-"===t[0]?1:0;for(;n>=i+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function Ft(t,e,n,i,r,s){if(t>n||t<e){const i="bigint"==typeof e?"n":"";let r;throw r=s>3?0===e||e===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${e}${i} and <= ${n}${i}`,new xt.ERR_OUT_OF_RANGE("value",r,t)}!function(t,e,n){Bt(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||jt(e,t.length-(n+1))}(i,r,s)}function Bt(t,e){if("number"!=typeof t)throw new xt.ERR_INVALID_ARG_TYPE(e,"number",t)}function jt(t,e,n){if(Math.floor(t)!==t)throw Bt(t,n),new xt.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new xt.ERR_BUFFER_OUT_OF_BOUNDS;throw new xt.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}Mt("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),Mt("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),Mt("ERR_OUT_OF_RANGE",(function(t,e,n){let i=`The value of "${t}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=Ut(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=Ut(r)),r+="n"),i+=` It must be ${e}. Received ${r}`,i}),RangeError);const qt=/[^+/0-9A-Za-z-_]/g;function Ht(t,e){let n;e=e||1/0;const i=t.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=t.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(e-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(e-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function $t(t){return z(function(t){if((t=(t=t.split("=")[0]).trim().replace(qt,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function zt(t,e,n,i){let r;for(r=0;r<i&&!(r+n>=e.length||r>=t.length);++r)e[r+n]=t[r];return r}function Vt(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Wt(t){return t!=t}const Gt=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)e[i+r]=t[n]+t[r]}return e}();function Kt(t){return"undefined"==typeof BigInt?Jt:t}function Jt(){throw new Error("BigInt not supported")}var Yt=$;function Xt(t){return B.isPlainObject(t)||B.isArray(t)}function Qt(t){return B.endsWith(t,"[]")?t.slice(0,-2):t}function Zt(t,e,n){return t?t.concat(e).map((function(t,e){return t=Qt(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const te=B.toFlatObject(B,{},null,(function(t){return/^is[A-Z]/.test(t)}));var ee=function(t,e,n){if(!B.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const i=(n=B.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!B.isUndefined(e[t])}))).metaTokens,r=n.visitor||c,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&B.isSpecCompliantForm(e);if(!B.isFunction(r))throw new TypeError("visitor must be a function");function l(t){if(null===t)return"";if(B.isDate(t))return t.toISOString();if(!a&&B.isBlob(t))throw new W("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(t)||B.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Yt.from(t):t}function c(t,n,r){let a=t;if(t&&!r&&"object"==typeof t)if(B.endsWith(n,"{}"))n=i?n:n.slice(0,-2),t=JSON.stringify(t);else if(B.isArray(t)&&function(t){return B.isArray(t)&&!t.some(Xt)}(t)||(B.isFileList(t)||B.endsWith(n,"[]"))&&(a=B.toArray(t)))return n=Qt(n),a.forEach((function(t,i){!B.isUndefined(t)&&null!==t&&e.append(!0===o?Zt([n],i,s):null===o?n:n+"[]",l(t))})),!1;return!!Xt(t)||(e.append(Zt(r,n,s),l(t)),!1)}const h=[],u=Object.assign(te,{defaultVisitor:c,convertValue:l,isVisitable:Xt});if(!B.isObject(t))throw new TypeError("data must be an object");return function t(n,i){if(!B.isUndefined(n)){if(-1!==h.indexOf(n))throw Error("Circular reference detected in "+i.join("."));h.push(n),B.forEach(n,(function(n,s){!0===(!(B.isUndefined(n)||null===n)&&r.call(e,n,B.isString(s)?s.trim():s,i,u))&&t(n,i?i.concat(s):[s])})),h.pop()}}(t),e};function ne(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function ie(t,e){this._pairs=[],t&&ee(t,this,e)}const re=ie.prototype;re.append=function(t,e){this._pairs.push([t,e])},re.toString=function(t){const e=t?function(e){return t.call(this,e,ne)}:ne;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var se=ie;function oe(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ae(t,e,n){if(!e)return t;const i=n&&n.encode||oe,r=n&&n.serialize;let s;if(s=r?r(e,n):B.isURLSearchParams(e)?e.toString():new se(e,n).toString(i),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}var le=class{use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){B.forEach(this.handlers,(function(e){null!==e&&t(e)}))}constructor(){this.handlers=[]}},ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},he="undefined"!=typeof URLSearchParams?URLSearchParams:se,ue=FormData;const de=(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),pe="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var fe={isBrowser:!0,classes:{URLSearchParams:he,FormData:ue,Blob:Blob},isStandardBrowserEnv:de,isStandardBrowserWebWorkerEnv:pe,protocols:["http","https","file","blob","url","data"]};function ge(t,e){return ee(t,new fe.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return fe.isNode&&B.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}var me=function(t){function e(t,n,i,r){let s=t[r++];const o=Number.isFinite(+s),a=r>=t.length;if(s=!s&&B.isArray(i)?i.length:s,a)return B.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&B.isObject(i[s])||(i[s]=[]);return e(t,n,i[s],r)&&B.isArray(i[s])&&(i[s]=function(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}(i[s])),!o}if(B.isFormData(t)&&B.isFunction(t.entries)){const n={};return B.forEachEntry(t,((t,i)=>{e(function(t){return B.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),i,n,0)})),n}return null};const ye={"Content-Type":void 0};const _e={transitional:ce,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,r=B.isObject(t);r&&B.isHTMLForm(t)&&(t=new FormData(t));if(B.isFormData(t))return i&&i?JSON.stringify(me(t)):t;if(B.isArrayBuffer(t)||B.isBuffer(t)||B.isStream(t)||B.isFile(t)||B.isBlob(t))return t;if(B.isArrayBufferView(t))return t.buffer;if(B.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return ge(t,this.formSerializer).toString();if((s=B.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return ee(s?{"files[]":t}:t,e&&new e,this.formSerializer)}}return r||i?(e.setContentType("application/json",!1),function(t,e,n){if(B.isString(t))try{return(e||JSON.parse)(t),B.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||_e.transitional,n=e&&e.forcedJSONParsing,i="json"===this.responseType;if(t&&B.isString(t)&&(n&&!this.responseType||i)){const n=!(e&&e.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw W.from(t,W.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:fe.classes.FormData,Blob:fe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};B.forEach(["delete","get","head"],(function(t){_e.headers[t]={}})),B.forEach(["post","put","patch"],(function(t){_e.headers[t]=B.merge(ye)}));var ve=_e;const be=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var we=t=>{const e={};let n,i,r;return t&&t.split("\n").forEach((function(t){r=t.indexOf(":"),n=t.substring(0,r).trim().toLowerCase(),i=t.substring(r+1).trim(),!n||e[n]&&be[n]||("set-cookie"===n?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)})),e};const Ee=Symbol("internals");function Te(t){return t&&String(t).trim().toLowerCase()}function Ie(t){return!1===t||null==t?t:B.isArray(t)?t.map(Ie):String(t)}function Ce(t,e,n,i){return B.isFunction(i)?i.call(this,e,n):B.isString(e)?B.isString(i)?-1!==e.indexOf(i):B.isRegExp(i)?i.test(e):void 0:void 0}let Se=Symbol.iterator,ke=Symbol.toStringTag;class Re{set(t,e,n){const i=this;function r(t,e,n){const r=Te(e);if(!r)throw new Error("header name must be a non-empty string");const s=B.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||e]=Ie(t))}const s=(t,e)=>B.forEach(t,((t,n)=>r(t,n,e)));return B.isPlainObject(t)||t instanceof this.constructor?s(t,e):B.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z]+$/.test(t.trim())?s(we(t),e):null!=t&&r(e,t,n),this}get(t,e){if(t=Te(t)){const n=B.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}(t);if(B.isFunction(e))return e.call(this,t,n);if(B.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=Te(t)){const n=B.findKey(this,t);return!(!n||void 0===this[n]||e&&!Ce(0,this[n],n,e))}return!1}delete(t,e){const n=this;let i=!1;function r(t){if(t=Te(t)){const r=B.findKey(n,t);!r||e&&!Ce(0,n[r],r,e)||(delete n[r],i=!0)}}return B.isArray(t)?t.forEach(r):r(t),i}clear(t){const e=Object.keys(this);let n=e.length,i=!1;for(;n--;){const r=e[n];t&&!Ce(0,this[r],r,t)||(delete this[r],i=!0)}return i}normalize(t){const e=this,n={};return B.forEach(this,((i,r)=>{const s=B.findKey(n,r);if(s)return e[s]=Ie(i),void delete e[r];const o=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete e[r],e[o]=Ie(i),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return B.forEach(this,((n,i)=>{null!=n&&!1!==n&&(e[i]=t&&B.isArray(n)?n.join(", "):n)})),e}[Se](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[ke](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[Ee]=this[Ee]={accessors:{}}).accessors,n=this.prototype;function i(t){const i=Te(t);e[i]||(!function(t,e){const n=B.toCamelCase(" "+e);["get","set","has"].forEach((i=>{Object.defineProperty(t,i+n,{value:function(t,n,r){return this[i].call(this,e,t,n,r)},configurable:!0})}))}(n,t),e[i]=!0)}return B.isArray(t)?t.forEach(i):i(t),this}constructor(t){t&&this.set(t)}}Re.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),B.freezeMethods(Re.prototype),B.freezeMethods(Re);var Ae=Re;function Ne(t,e){const n=this||ve,i=e||n,r=Ae.from(i.headers);let s=i.data;return B.forEach(t,(function(t){s=t.call(n,s,r.normalize(),e?e.status:void 0)})),r.normalize(),s}function Le(t){return!(!t||!t.__CANCEL__)}function Oe(t,e,n){W.call(this,null==t?"canceled":t,W.ERR_CANCELED,e,n),this.name="CanceledError"}B.inherits(Oe,W,{__CANCEL__:!0});var Pe=Oe;function De(t,e,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var xe=fe.isStandardBrowserEnv?{write:function(t,e,n,i,r,s){const o=[];o.push(t+"="+encodeURIComponent(e)),B.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),B.isString(i)&&o.push("path="+i),B.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Me(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Ue(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?Me(t,e):e}var Fe=fe.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function i(n){let i=n;return t&&(e.setAttribute("href",i),i=e.href),e.setAttribute("href",i),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){const e=B.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};function Be(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}var je=function(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const l=Date.now(),c=i[o];r||(r=l),n[s]=a,i[s]=l;let h=o,u=0;for(;h!==s;)u+=n[h++],h%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),l-r<e)return;const d=c&&l-c;return d?Math.round(1e3*u/d):void 0}};function qe(t,e){let n=0;const i=je(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,l=i(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:r};c[e?"download":"upload"]=!0,t(c)}}var He="undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let i=t.data;const r=Ae.from(t.headers).normalize(),s=t.responseType;let o;function a(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}B.isFormData(i)&&(fe.isStandardBrowserEnv||fe.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let l=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(e+":"+n))}const c=Ue(t.baseURL,t.url);function h(){if(!l)return;const i=Ae.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());De((function(t){e(t),a()}),(function(t){n(t),a()}),{data:s&&"text"!==s&&"json"!==s?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:i,config:t,request:l}),l=null}if(l.open(t.method.toUpperCase(),ae(c,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,"onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(h)},l.onabort=function(){l&&(n(new W("Request aborted",W.ECONNABORTED,t,l)),l=null)},l.onerror=function(){n(new W("Network Error",W.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const i=t.transitional||ce;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new W(e,i.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,t,l)),l=null},fe.isStandardBrowserEnv){const e=(t.withCredentials||Fe(c))&&t.xsrfCookieName&&xe.read(t.xsrfCookieName);e&&r.set(t.xsrfHeaderName,e)}void 0===i&&r.setContentType(null),"setRequestHeader"in l&&B.forEach(r.toJSON(),(function(t,e){l.setRequestHeader(e,t)})),B.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),s&&"json"!==s&&(l.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",qe(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",qe(t.onUploadProgress)),(t.cancelToken||t.signal)&&(o=e=>{l&&(n(!e||e.type?new Pe(null,t,l):e),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));const u=Be(c);u&&-1===fe.protocols.indexOf(u)?n(new W("Unsupported protocol "+u+":",W.ERR_BAD_REQUEST,t)):l.send(i||null)}))};const $e={http:null,xhr:He};B.forEach($e,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));var ze={getAdapter:t=>{t=B.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let r=0;r<e&&(n=t[r],!(i=B.isString(n)?$e[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new W(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(B.hasOwnProp($e,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!B.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:$e};function Ve(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Pe(null,t)}function We(t){Ve(t),t.headers=Ae.from(t.headers),t.data=Ne.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return ze.getAdapter(t.adapter||ve.adapter)(t).then((function(e){return Ve(t),e.data=Ne.call(t,t.transformResponse,e),e.headers=Ae.from(e.headers),e}),(function(e){return Le(e)||(Ve(t),e&&e.response&&(e.response.data=Ne.call(t,t.transformResponse,e.response),e.response.headers=Ae.from(e.response.headers))),Promise.reject(e)}))}const Ge=t=>t instanceof Ae?t.toJSON():t;function Ke(t,e){e=e||{};const n={};function i(t,e,n){return B.isPlainObject(t)&&B.isPlainObject(e)?B.merge.call({caseless:n},t,e):B.isPlainObject(e)?B.merge({},e):B.isArray(e)?e.slice():e}function r(t,e,n){return B.isUndefined(e)?B.isUndefined(t)?void 0:i(void 0,t,n):i(t,e,n)}function s(t,e){if(!B.isUndefined(e))return i(void 0,e)}function o(t,e){return B.isUndefined(e)?B.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}function a(n,r,s){return s in e?i(n,r):s in t?i(void 0,n):void 0}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e)=>r(Ge(t),Ge(e),!0)};return B.forEach(Object.keys(t).concat(Object.keys(e)),(function(i){const s=l[i]||r,o=s(t[i],e[i],i);B.isUndefined(o)&&s!==a||(n[i]=o)})),n}const Je={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{Je[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Ye={};Je.transitional=function(t,e,n){function i(t,e){return"[Axios v1.3.2] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,r,s)=>{if(!1===t)throw new W(i(r," has been removed"+(e?" in "+e:"")),W.ERR_DEPRECATED);return e&&!Ye[r]&&(Ye[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,s)}};var Xe={assertOptions:function(t,e,n){if("object"!=typeof t)throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new W("option "+s+" must be "+n,W.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new W("Unknown option "+s,W.ERR_BAD_OPTION)}},validators:Je};const Qe=Xe.validators;class Ze{request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=Ke(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:r}=e;let s;void 0!==n&&Xe.assertOptions(n,{silentJSONParsing:Qe.transitional(Qe.boolean),forcedJSONParsing:Qe.transitional(Qe.boolean),clarifyTimeoutError:Qe.transitional(Qe.boolean)},!1),void 0!==i&&Xe.assertOptions(i,{encode:Qe.function,serialize:Qe.function},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase(),s=r&&B.merge(r.common,r[e.method]),s&&B.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete r[t]})),e.headers=Ae.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(t){l.push(t.fulfilled,t.rejected)}));let h,u=0;if(!a){const t=[We.bind(this),void 0];for(t.unshift.apply(t,o),t.push.apply(t,l),h=t.length,c=Promise.resolve(e);u<h;)c=c.then(t[u++],t[u++]);return c}h=o.length;let d=e;for(u=0;u<h;){const t=o[u++],e=o[u++];try{d=t(d)}catch(t){e.call(this,t);break}}try{c=We.call(this,d)}catch(t){return Promise.reject(t)}for(u=0,h=l.length;u<h;)c=c.then(l[u++],l[u++]);return c}getUri(t){return ae(Ue((t=Ke(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}constructor(t){this.defaults=t,this.interceptors={request:new le,response:new le}}}B.forEach(["delete","get","head","options"],(function(t){Ze.prototype[t]=function(e,n){return this.request(Ke(n||{},{method:t,url:e,data:(n||{}).data}))}})),B.forEach(["post","put","patch"],(function(t){function e(e){return function(n,i,r){return this.request(Ke(r||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}Ze.prototype[t]=e(),Ze.prototype[t+"Form"]=e(!0)}));var tn=Ze;class en{throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new en((function(e){t=e})),cancel:t}}constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const i=new Promise((t=>{n.subscribe(t),e=t})).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t((function(t,i,r){n.reason||(n.reason=new Pe(t,i,r),e(n.reason))}))}}var nn=en;const rn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(rn).forEach((([t,e])=>{rn[e]=t}));var sn=rn;const on=function t(e){const n=new tn(e),i=l(tn.prototype.request,n);return B.extend(i,tn.prototype,n,{allOwnKeys:!0}),B.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return t(Ke(e,n))},i}(ve);on.Axios=tn,on.CanceledError=Pe,on.CancelToken=nn,on.isCancel=Le,on.VERSION="1.3.2",on.toFormData=ee,on.AxiosError=W,on.Cancel=on.CanceledError,on.all=function(t){return Promise.all(t)},on.spread=function(t){return function(e){return t.apply(null,e)}},on.isAxiosError=function(t){return B.isObject(t)&&!0===t.isAxiosError},on.mergeConfig=Ke,on.AxiosHeaders=Ae,on.formToJSON=t=>me(B.isHTMLForm(t)?new FormData(t):t),on.HttpStatusCode=sn,on.default=on;var an=on;const{Axios:ln,AxiosError:cn,CanceledError:hn,isCancel:un,CancelToken:dn,VERSION:pn,all:fn,Cancel:gn,isAxiosError:mn,spread:yn,toFormData:_n,AxiosHeaders:vn,HttpStatusCode:bn,formToJSON:wn,mergeConfig:En}=an;async function Tn(t,e){try{const n=await an.get(`https://api.themoviedb.org/3/search/movie?api_key=2a9019ab3cb7c560ad73000751e89f97&page=${e}&language=en-US&query=${t}&include_adult=false`);return n.data}catch(t){console.log(t)}}async function In(t=1){try{const e=await an.get(`https://api.themoviedb.org/3/movie/popular?api_key=2a9019ab3cb7c560ad73000751e89f97&page=${t}&language=en-US&include_adult=false`);return e.data}catch(t){console.log(t)}}async function Cn(t){try{return(await an.get(`https://api.themoviedb.org/3/movie/${t}?api_key=2a9019ab3cb7c560ad73000751e89f97&language=en-US`)).data}catch(t){console.log("there is no such ID")}}async function Sn(t){try{return(await an.get(`https://api.themoviedb.org/3/movie/${t}/videos?api_key=2a9019ab3cb7c560ad73000751e89f97&language=en-US`)).data}catch(t){console.log("there is no such ID")}}function kn(t){const e=t.genresArr.join(", "),n=t.vote_average.toFixed(1),i=t.popularity.toFixed(1),r=t.title.toUpperCase();return`\n  <div class="image-btn-wrapper">\n  <img\n    class="modal-container__img"\n    src="https://image.tmdb.org/t/p/w500${t.poster_path}"\n    alt="movie-poster"\n  />\n</div>\n  <div class = 'modal-container__fullInfo'>\n  <h2 class = 'modal-container__title'>${r}</h2>\n  <div class = 'modal-container__info'>\n  <div class = 'modal-container__info--key'> \n  <p class = 'modal-container__info--keytext'>Vote / Votes</p>\n  <p class = 'modal-container__info--keytext'>Popularity</p>\n  <p  class = 'modal-container__info--keytext'>Original Title</p>\n  <p  class = 'modal-container__info--keytext'>Genre</p>\n  </div>\n  <div >\n  <p class = 'modal-container__info--valuetext'><span class = 'avarage-effects'>${n}</span> / <span class = 'count-effect'>${t.vote_count}</span></p>\n  <p class = 'modal-container__info--valuetext'>${i}</p>\n  <p class = 'modal-container__info--valuetext'>${r}</p>\n  <p class = 'modal-container__info--valuetext'>${e}</p>\n  </div>\n  </div>\n  <h3 class = 'modal-container__second-title'>ABOUT</h3>\n  <p class = 'modal-container__description'>${t.overview}</p>\n  <div class = 'btn-container'>\n      <button data-id="${t.id}" class="trailers" type="button" data-modal-open>\n    <img\n      data-id="${t.id}"\n      class="icon-youtube"\n      src="https://cdn-icons-png.flaticon.com/512/49/49084.png"\n      alt="logo"\n    />\n    <span data-id="${t.id}" class="trailers-text">Trailer</span>\n  </button>\n  <button class="watched" id='watched-modal' type="button">add to Watched</button>\n  <button class="queue" id='queue-modal' type="button">add to queue</button>\n  </div>\n  `}let Rn;async function An(t){t.stopPropagation,"movie-gallery__photo"===t.target.className&&(e.backdropEl.classList.remove("is-hidden"),e.backdropEl.addEventListener("click",Nn),window.addEventListener("keydown",Ln),document.body.style="overflow-y: hidden"),e.containerEl.innerHTML="";const n=t.target.offsetParent.dataset.id,i=await Cn(n),{poster_path:r,genres:s,overview:o,id:a,vote_average:l,vote_count:c,popularity:h,original_title:u,title:d,release_date:p}=i,f=p.slice(0,4),g=[...s].map((t=>t.name));Rn={poster_path:r,genresArr:g,overview:o,id:a,vote_average:l,vote_count:c,popularity:h,original_title:u,title:d,releaseDate:f};const m=kn(Rn);e.containerEl.innerHTML=m}function Nn(t){if("ADD TO WATCHED"===t.target.innerText){t.stopPropagation;const e=JSON.parse(localStorage.getItem("add-to-watch"));if(e){e.push(Rn);const t="id",n=[...new Map(e.map((e=>[e[t],e]))).values()];localStorage.setItem("add-to-watch",JSON.stringify(n))}else{const t=[Rn];t.push,localStorage.setItem("add-to-watch",JSON.stringify(t))}}if("ADD TO QUEUE"===t.target.innerText){t.stopPropagation;const e=JSON.parse(localStorage.getItem("add-to-queue"));if(e){e.push(Rn);const t="id",n=[...new Map(e.map((e=>[e[t],e]))).values()];localStorage.setItem("add-to-queue",JSON.stringify(n))}else{const t=[Rn];t.push,localStorage.setItem("add-to-queue",JSON.stringify(t))}}if("modal__close-btn"===t.target.classList.value||t.currentTarget){e.backdropEl.classList.add("is-hidden"),e.backdropEl.removeEventListener("click",Nn),window.removeEventListener("keydown",Ln);document.body.style.top;document.body.style.overflow=""}}function Ln(t){"Escape"===t.code&&(e.backdropEl.classList.add("is-hidden"),e.backdropEl.removeEventListener("click",Nn),window.removeEventListener("keydown",Ln),document.body.style.overflow="")}e.filmGalleryHomeEl&&e.filmGalleryHomeEl.addEventListener("click",An),e.filmGalleryLibraryEl&&e.filmGalleryLibraryEl.addEventListener("click",An);const On={12:"Adventure",14:"Fantasy",16:"Animation",18:"Drama",27:"Horror",28:"Action",35:"Comedy",36:"History",37:"Western",53:"Thriller",80:"Crime",99:"Documentary",878:"Science Fiction",9648:"Mystery",10402:"Music",10751:"Family",10752:"War",10770:"TV Movie"};function Pn(t,e,n,i,r,s){const o=r.slice(0,4);return`\n   <li class="movie-gallery__item" >\n    <div class="movie-gallery__poster" data-id="${t}">\n      <img\n        class="movie-gallery__photo"\n        src="https://image.tmdb.org/t/p/w500${e}"\n        alt="${n}"\n      />\n    </div>\n    <div class="movie-gallery__wrap">\n      <h2 class="movie-gallery__title">${n}</h2>\n      <div class="movie-info">\n        <p class="movie-info__genre">${i.map((t=>On[t])).join(", ")} | ${o}</p>\n         <span class="movie-info__vote">IMDb: ${s}</span>\n      </div>\n    </div>\n  </li>`}function Dn(t){return t.map((t=>{const{id:e,poster_path:n,title:i,genre_ids:r,release_date:s,vote_average:o}=t;return Pn(e,n,i,r,s,o)})).join("")}function xn(){e.inputAnswerParEl.innerHTML="Search result not successful. Enter the correct movie name and"}function Mn(t,e){let n="";return e>9?(1===t&&(n=` <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">2</button>\n        <button class="pgn-btn" type="button">3</button>\n        <button class="pgn-btn" type="button">4</button>\n        <button class="pgn-btn pgn-mobbile" type="button">5</button>\n        <span class="pgn-dots">...</span>\n        <button class="pgn-btn last-number" type="button">${e}</button>\n        <button class="pgn-btn next" type="button">\n            <svg class="next" width="20" height="20" viewBox="0 0 32 32">\n            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>\n            </svg>\n        </button>`),2===t&&(n=`\n        <button data-action="previos" class="pgn-btn previos" type="button">\n            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">\n            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>\n            </svg>\n        </button>\n        <button class="pgn-btn" type="button">1</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">3</button>\n        <button class="pgn-btn pgn-mobbile" type="button">4</button>\n        <button class="pgn-btn pgn-mobbile" type="button">5</button>\n        <span class="pgn-dots">...</span>\n        <button class="pgn-btn last-number" type="button">${e}</button>\n        <button class="pgn-btn next" type="button">\n            <svg class="next" width="20" height="20" viewBox="0 0 32 32">\n            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>\n            </svg>\n        </button>`),3===t&&(n=`\n        <button data-action="previos" class="pgn-btn previos" type="button">\n            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">\n            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>\n            </svg>\n        </button>\n        <button class="pgn-btn" type="button">1</button>\n        <button class="pgn-btn" type="button">${t-1}</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">${t+1}</button>\n        <button class="pgn-btn" type="button">${t+2}</button>\n        <span class="pgn-dots">...</span>\n        <button class="pgn-btn last-number" type="button">${e}</button>\n        <button class="pgn-btn next" type="button">\n            <svg class="next" width="20" height="20" viewBox="0 0 32 32">\n            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>\n            </svg>\n        </button>`),t>3&&t<e&&(n=`\n        <button data-action="previos" class="pgn-btn previos" type="button">\n            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">\n            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>\n            </svg>\n        </button>\n        <button class="pgn-btn first-number" type="button">1</button>\n        <span class="pgn-dots">...</span>\n        <button class="pgn-btn" type="button">${t-2}</button>\n        <button class="pgn-btn" type="button">${t-1}</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">${t+1}</button>\n        <button class="pgn-btn" type="button">${t+2}</button>\n        <span class="pgn-dots">...</span>\n        <button class="pgn-btn last-number" type="button">${e}</button>\n        <button class="pgn-btn next" type="button">\n            <svg class="next" width="20" height="20" viewBox="0 0 32 32">\n            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>\n            </svg>\n        </button>`),t===e-2&&(n=`\n        <button data-action="previos" class="pgn-btn previos" type="button">\n            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">\n            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>\n            </svg>\n        </button>\n        <button class="pgn-btn first-number" type="button">1</button>\n        <span class="pgn-dots">...</span>\n        <button class="pgn-btn" type="button">${t-2}</button>\n        <button class="pgn-btn" type="button">${t-1}</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">${t+1}</button>\n        <button class="pgn-btn" type="button">${e}</button>\n        <button class="pgn-btn next" type="button">\n            <svg class="next" width="20" height="20" viewBox="0 0 32 32">\n            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>\n            </svg>\n        </button>`),t===e-1&&(n=`\n        <button data-action="previos" class="pgn-btn previos" type="button">\n            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">\n            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>\n            </svg>\n        </button>\n        <button class="pgn-btn first-number" type="button">1</button>\n        <span class="pgn-dots">...</span>\n        <button class="pgn-btn pgn-mobbile" type="button">${t-3}</button>\n        <button class="pgn-btn pgn-mobbile" type="button">${t-2}</button>\n        <button class="pgn-btn" type="button">${t-1}</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">${e}</button>\n        <button class="pgn-btn next" type="button">\n            <svg class="next" width="20" height="20" viewBox="0 0 32 32">\n            <path class="next" d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>\n            </svg>\n        </button>`),t===e&&(n=` \n        <button data-action="previos" class="pgn-btn previos" type="button">\n            <svg class="previos" width="20" height="20" viewBox="0 0 32 32">\n            <path class="previos" d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>\n            </svg>\n        </button>\n        <button class="pgn-btn first-number" type="button">1</button>\n        <span class="pgn-dots">...</span>\n        <button class="pgn-btn pgn-mobbile" type="button">${e-3}</button>\n        <button class="pgn-btn" type="button">${e-2}</button>\n        <button class="pgn-btn" type="button">${e-1}</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>`)):1===e?n=`<button class="pgn-current pgn-btn" type="button" disabled>${t}</button>`:2===e?(1===t&&(n=`<button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">2</button>`),2===t&&(n=`\n        <button class="pgn-btn" type="button">1</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>`)):3===e?(1===t&&(n=`<button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">2</button>\n        <button class="pgn-btn" type="button">3</button>`),2===t&&(n=`\n        <button class="pgn-btn" type="button">1</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">3</button>`),3===t&&(n=`\n        <button class="pgn-btn" type="button">1</button>\n        <button class="pgn-btn" type="button">2</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>`)):4===e&&(1===t&&(n=`<button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">2</button>\n        <button class="pgn-btn" type="button">3</button>\n        <button class="pgn-btn" type="button">4</button>`),2===t&&(n=`\n        <button class="pgn-btn" type="button">1</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>\n        <button class="pgn-btn" type="button">3</button>\n        <button class="pgn-btn" type="button">4</button>`),3===t&&(n=`\n        <button class="pgn-btn" type="button">1</button>\n        <button class="pgn-btn" type="button">2</button>\n        <button class="pgn-btn" type="button">3</button>\n        <button class="pgn-current pgn-btn" type="button" disabled>${t}</button>`)),n}let Un=1;async function Fn(t){if(e.inputAnswerParEl.textContent)console.log(e.inputAnswerParEl.textContent);else if("DIV"!==t.target.nodeName&&"SPAN"!==t.target.nodeName){e.pageBtns.innerHTML="",e.pageBtnsInput.innerHTML="",e.loaderEl.classList.remove("hidden"),t.target.classList.contains("previos")?Un-=1:t.target.classList.contains("next")?Un+=1:Un=Number(t.target.textContent);const n=await In(Un);e.loaderEl.classList.add("hidden");const{results:i}=n;let r=99;const s=n.page,o=Dn([...i]);e.filmGalleryHomeEl.innerHTML=o;const a=Mn(s,r);e.pageBtnsInput.innerHTML="",e.pageBtns.innerHTML=a}}let Bn=1;async function jn(t,n,i){if(e.pageBtns.innerHTML="",e.pageBtnsInput.innerHTML="","DIV"!==t.target.nodeName&&"SPAN"!==t.target.nodeName){e.filmGalleryHomeEl.innerHTML="",e.loaderEl.classList.remove("hidden"),t.target.classList.contains("previos")?Bn-=1:t.target.classList.contains("next")?Bn+=1:Bn=Number(t.target.textContent);const r=await Tn(n,Bn);e.loaderEl.classList.add("hidden");const{results:s}=r;i=r.total_pages>99?99:r.total_pages;const o=r.page,a=Dn([...s]);e.filmGalleryHomeEl.innerHTML=a;const l=Mn(o,i);e.pageBtns.innerHTML="",e.pageBtnsInput.innerHTML=l}}async function qn(t){e.choiceBtnEl.classList.add("hidden"),t.preventDefault(),t.preventDefault(),e.pageBtns.innerHTML="",e.pageBtnsInput.innerHTML="";const n=t.target.elements.input.value;if(""===n.trim())return void xn();e.filmGalleryHomeEl.innerHTML="",e.loaderEl.classList.remove("hidden");const i=await Tn(n);if(e.loaderEl.classList.add("hidden"),0===i.total_results)return void xn();e.inputAnswerParEl.innerHTML="";const{results:r}=i;console.log(i);const s=[...r],o=i.page;let a;i.total_pages>99?a=99:i.total_pages<99&&(a=i.total_pages),console.log(a);const l=Dn(s);e.filmGalleryHomeEl.innerHTML=l;const c=Mn(o,a);e.pageBtns.innerHTML="",e.pageBtnsInput.innerHTML=c,e.pageBtnsInput.addEventListener("click",(e=>{e.target!==e.currentTarget&&"SPAN"!==e.target.nodeName?(console.log(e.target.nodeName),jn(e,n,a)):console.log(t.target)}))}function Hn(t){"Escape"===t.key&&(e.trailerBackdrop.classList.add("is-hidden"),e.boxIframe.innerHTML="")}function $n(){document.querySelector(".button-watched").classList.remove("current"),document.querySelector(".button-queue").classList.add("current");const t=function(){const t=localStorage.getItem("add-to-queue");if(!t)return console.log("nothing"),"<p>Nothing here yet</p>";console.log("saveMovie",t);const e=JSON.parse(t);console.log("parseMovie",e);return e.map((t=>{const{id:e,poster_path:n,title:i,genresArr:r,releaseDate:s,vote_average:o}=t;console.log("vote_average",o);const a=o.toFixed(1);console.log("avarage",a),console.log("poster_path",n);return`\n   <li class="movie-gallery__item" >\n    <div class="movie-gallery__poster" data-id="${e}">\n      <img\n        class="movie-gallery__photo"\n        src="${"https://image.tmdb.org/t/p/w500"}${n}"\n        alt="${i}"\n      />\n    </div>\n    <div class="movie-gallery__wrap">\n      <h2 class="movie-gallery__title">${i}</h2>\n      <div class="movie-info">\n        <p class="movie-info__genre">${r} | ${s}</p>\n         <span class="movie-info__vote">IMDb: ${a}</span>\n      </div>\n    </div>\n  </li>`})).join("")}();e.filmGalleryLibraryEl.innerHTML=t}e.modalEl.addEventListener("click",(async function(t){if("trailers"!==t.target.className&&"icon-youtube"!==t.target.className&&"trailers-text"!==t.target.className)return;e.trailerBackdrop.classList.remove("is-hidden");const n=t.target.dataset.id;try{const t=await Sn(n),{results:i}=t,r=[...i],s=`\n    <iframe class='trailer-iframe' width="auto" height="auto" src='https://www.youtube.com/embed/${r[0].key}' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n     `;e.boxIframe.innerHTML=s}catch(t){const n='\n    <iframe class=\'trailer-iframe\' width="auto" height="auto" src=\'https://www.youtube.com/embed/zwBpUdZ0lrQ\' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>\n      ';e.boxIframe.innerHTML=n,Hn()}})),e.trailerBackdrop&&e.trailerBtnClose.addEventListener("click",(function(){e.trailerBackdrop.classList.add("is-hidden"),e.boxIframe.innerHTML=""})),window.addEventListener("keydown",Hn),e.trailerBackdrop&&e.trailerBackdrop.addEventListener("click",(function(t){if("trailer-backdrop"!==t.target.className)return;e.trailerBackdrop.classList.add("is-hidden"),e.boxIframe.innerHTML=""})),document.querySelector(".button-watched")&&document.querySelector(".button-watched").addEventListener("click",(function(){document.querySelector(".button-watched").classList.add("current"),document.querySelector(".button-queue").classList.remove("current");const t=function(){const t=localStorage.getItem("add-to-watch");if(!t)return"<p>Nothing here yet</p>";const e=JSON.parse(t);console.log("parseMovie",e);return e.map((t=>{const{id:e,poster_path:n,title:i,genresArr:r,releaseDate:s,vote_average:o}=t;return`\n   <li class="movie-gallery__item" >\n    <div class="movie-gallery__poster" data-id="${e}">\n      <img\n        class="movie-gallery__photo"\n        src="${"https://image.tmdb.org/t/p/w500"}${n}"\n        alt="${i}"\n      />\n    </div>\n    <div class="movie-gallery__wrap">\n      <h2 class="movie-gallery__title">${i}</h2>\n      <div class="movie-info">\n        <p class="movie-info__genre">${r} | ${s}</p>\n         <span class="movie-info__vote">IMDb: ${o.toFixed(1)}</span>\n      </div>\n    </div>\n  </li>`})).join("")}();e.filmGalleryLibraryEl.innerHTML=t})),document.querySelector(".button-queue")&&(document.querySelector(".button-queue").addEventListener("click",$n),$n());var zn,Vn,Wn,Gn=zn={};function Kn(){throw new Error("setTimeout has not been defined")}function Jn(){throw new Error("clearTimeout has not been defined")}function Yn(t){if(Vn===setTimeout)return setTimeout(t,0);if((Vn===Kn||!Vn)&&setTimeout)return Vn=setTimeout,setTimeout(t,0);try{return Vn(t,0)}catch(e){try{return Vn.call(null,t,0)}catch(e){return Vn.call(this,t,0)}}}!function(){try{Vn="function"==typeof setTimeout?setTimeout:Kn}catch(t){Vn=Kn}try{Wn="function"==typeof clearTimeout?clearTimeout:Jn}catch(t){Wn=Jn}}();var Xn,Qn=[],Zn=!1,ti=-1;function ei(){Zn&&Xn&&(Zn=!1,Xn.length?Qn=Xn.concat(Qn):ti=-1,Qn.length&&ni())}function ni(){if(!Zn){var t=Yn(ei);Zn=!0;for(var e=Qn.length;e;){for(Xn=Qn,Qn=[];++ti<e;)Xn&&Xn[ti].run();ti=-1,e=Qn.length}Xn=null,Zn=!1,function(t){if(Wn===clearTimeout)return clearTimeout(t);if((Wn===Jn||!Wn)&&clearTimeout)return Wn=clearTimeout,clearTimeout(t);try{Wn(t)}catch(e){try{return Wn.call(null,t)}catch(e){return Wn.call(this,t)}}}(t)}}function ii(t,e){this.fun=t,this.array=e}function ri(){}Gn.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];Qn.push(new ii(t,e)),1!==Qn.length||Zn||Yn(ni)},ii.prototype.run=function(){this.fun.apply(null,this.array)},Gn.title="browser",Gn.browser=!0,Gn.env={},Gn.argv=[],Gn.version="",Gn.versions={},Gn.on=ri,Gn.addListener=ri,Gn.once=ri,Gn.off=ri,Gn.removeListener=ri,Gn.removeAllListeners=ri,Gn.emit=ri,Gn.prependListener=ri,Gn.prependOnceListener=ri,Gn.listeners=function(t){return[]},Gn.binding=function(t){throw new Error("process.binding is not supported")},Gn.cwd=function(){return"/"},Gn.chdir=function(t){throw new Error("process.chdir is not supported")},Gn.umask=function(){return 0};
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
const si=!1,oi=!1,ai="${JSCORE_VERSION}",li=function(t,e){if(!t)throw ci(e)},ci=function(t){return new Error("Firebase Database ("+ai+") INTERNAL ASSERT FAILED: "+t)},hi=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},ui={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=r>>2,h=(3&r)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hi(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw Error();const l=r<<2|s>>4;if(i.push(l),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},di=function(t){const e=hi(t);return ui.encodeByteArray(e,!0)},pi=function(t){return di(t).replace(/\./g,"")},fi=function(t){try{return ui.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function gi(t){return mi(void 0,t)}function mi(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:return new Date(e.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&"__proto__"!==n&&(t[n]=mi(t[n],e[n]));return t}
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
const yi=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,_i=()=>{try{return yi()||(()=>{if(void 0===zn||void 0===zn.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&fi(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},vi=t=>{var e,n;return null===(n=null===(e=_i())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},bi=t=>{const e=vi(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},wi=t=>{var e;return null===(e=_i())||void 0===e?void 0:e[`_${t}`]};
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
class Ei{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */function Ti(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pi(JSON.stringify({alg:"none",type:"JWT"})),pi(JSON.stringify(s)),""].join(".")}
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
 */function Ii(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ci(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ii())}function Si(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function ki(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Ri(){const t=Ii();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ai(){return!0===si||!0===oi}function Ni(){try{return"object"==typeof indexedDB}catch(t){return!1}}class Li extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Li.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oi.prototype.create)}}class Oi{create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(Pi,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new Li(i,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const Pi=/\{\$([^}]+)}/g;
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
 */function Di(t){return JSON.parse(t)}function xi(t){return JSON.stringify(t)}
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
 */const Mi=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=Di(fi(s[0])||""),n=Di(fi(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(t){}return{header:e,claims:n,data:i,signature:r}},Ui=function(t){const e=Mi(t).claims;return!!e&&"object"==typeof e&&e.hasOwnProperty("iat")},Fi=function(t){const e=Mi(t).claims;return"object"==typeof e&&!0===e.admin};
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
function Bi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ji(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function qi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hi(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function $i(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(zi(n)&&zi(s)){if(!$i(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function zi(t){return null!==t&&"object"==typeof t}
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
function Vi(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Wi(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function Gi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
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
 */class Ki{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){e||(e=0);const n=this.W_;if("string"==typeof t)for(let i=0;i<16;i++)n[i]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let i=0;i<16;i++)n[i]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let t=16;t<80;t++){const e=n[t-3]^n[t-8]^n[t-14]^n[t-16];n[t]=4294967295&(e<<1|e>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let t=0;t<80;t++){t<40?t<20?(i=l^o&(a^l),r=1518500249):(i=o^a^l,r=1859775393):t<60?(i=o&a|l&(o|a),r=2400959708):(i=o^a^l,r=3395469782);const e=(s<<5|s>>>27)+i+c+r+n[t]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);const n=e-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<e;){if(0===s)for(;i<=n;)this.compress_(t,i),i+=this.blockSize;if("string"==typeof t){for(;i<e;)if(r[s]=t.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<e;)if(r[s]=t[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=e}digest(){const t=[];let e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let t=this.blockSize-1;t>=56;t--)this.buf_[t]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let e=0;e<5;e++)for(let i=24;i>=0;i-=8)t[n]=this.chain_[e]>>i&255,++n;return t}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}}function Ji(t,e){const n=new Yi(t,e);return n.subscribe.bind(n)}class Yi{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=Xi),void 0===i.error&&(i.error=Xi),void 0===i.complete&&(i.complete=Xi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function Xi(){}
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
 */function Qi(t,e){return`${t} failed: ${e} argument `}
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
const Zi=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const e=r-55296;i++,li(i<t.length,"Surrogate pair missing trail surrogate.");r=65536+(e<<10)+(t.charCodeAt(i)-56320)}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},tr=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};
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
function er(t){return t&&t._delegate?t._delegate:t}class nr{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class ir{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Ei;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,"[DEFAULT]"===i?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class rr{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new ir(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
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
 */const sr=[];var or,ar;(ar=or||(or={}))[ar.DEBUG=0]="DEBUG",ar[ar.VERBOSE=1]="VERBOSE",ar[ar.INFO=2]="INFO",ar[ar.WARN=3]="WARN",ar[ar.ERROR=4]="ERROR",ar[ar.SILENT=5]="SILENT";const lr={debug:or.DEBUG,verbose:or.VERBOSE,info:or.INFO,warn:or.WARN,error:or.ERROR,silent:or.SILENT},cr=or.INFO,hr={[or.DEBUG]:"log",[or.VERBOSE]:"log",[or.INFO]:"info",[or.WARN]:"warn",[or.ERROR]:"error"},ur=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=hr[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class dr{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in or))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?lr[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,or.DEBUG,...t),this._logHandler(this,or.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,or.VERBOSE,...t),this._logHandler(this,or.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,or.INFO,...t),this._logHandler(this,or.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,or.WARN,...t),this._logHandler(this,or.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,or.ERROR,...t),this._logHandler(this,or.ERROR,...t)}constructor(t){this.name=t,this._logLevel=cr,this._logHandler=ur,this._userLogHandler=null,sr.push(this)}}let pr,fr;const gr=new WeakMap,mr=new WeakMap,yr=new WeakMap,_r=new WeakMap,vr=new WeakMap;let br={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return mr.get(t);if("objectStoreNames"===e)return t.objectStoreNames||yr.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function wr(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(fr||(fr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Ir(this),e),Tr(gr.get(this))}:function(...e){return Tr(t.apply(Ir(this),e))}:function(e,...n){const i=t.call(Ir(this),e,...n);return yr.set(i,e.sort?e.sort():[e]),Tr(i)}}function Er(t){return"function"==typeof t?wr(t):(t instanceof IDBTransaction&&function(t){if(mr.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));mr.set(t,e)}(t),e=t,(pr||(pr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,br):t);var e}function Tr(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(Tr(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&gr.set(e,t)})).catch((()=>{})),vr.set(e,t),e}(t);if(_r.has(t))return _r.get(t);const e=Er(t);return e!==t&&(_r.set(t,e),vr.set(e,t)),e}const Ir=t=>vr.get(t);function Cr(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Tr(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(Tr(o.result),t.oldVersion,t.newVersion,Tr(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const Sr=["get","getKey","getAll","getAllKeys","count"],kr=["put","add","delete","clear"],Rr=new Map;function Ar(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Rr.get(e))return Rr.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=kr.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Sr.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return Rr.set(e,s),s}br=(t=>({...t,get:(e,n,i)=>Ar(e,n)||t.get(e,n,i),has:(e,n)=>!!Ar(e,n)||t.has(e,n)}))(br);
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
class Nr{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const Lr=new dr("@firebase/app"),Or={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Pr=new Map,Dr=new Map;function xr(t,e){try{t.container.addComponent(e)}catch(n){Lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mr(t){const e=t.name;if(Dr.has(e))return Lr.debug(`There were multiple attempts to register component ${e}.`),!1;Dr.set(e,t);for(const e of Pr.values())xr(e,t);return!0}function Ur(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const Fr=new Oi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Br{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Fr.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new nr("app",(()=>this),"PUBLIC"))}}
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
 */function jr(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw Fr.create("bad-app-name",{appName:String(r)});var s;if(n||(n=null===(s=_i())||void 0===s?void 0:s.config),!n)throw Fr.create("no-options");const o=Pr.get(r);if(o){if($i(n,o.options)&&$i(i,o.config))return o;throw Fr.create("duplicate-app",{appName:r})}const a=new rr(r);for(const t of Dr.values())a.addComponent(t);const l=new Br(n,i,a);return Pr.set(r,l),l}function qr(t="[DEFAULT]"){const e=Pr.get(t);if(!e&&"[DEFAULT]"===t)return jr();if(!e)throw Fr.create("no-app",{appName:t});return e}function Hr(t,e,n){var i;let r=null!==(i=Or[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Lr.warn(t.join(" "))}Mr(new nr(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}let $r=null;function zr(){return $r||($r=Cr("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw Fr.create("idb-open",{originalErrorMessage:t.message})}))),$r}async function Vr(t,e){try{const n=(await zr()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");return await i.put(e,Wr(t)),n.done}catch(t){if(t instanceof Li)Lr.warn(t.message);else{const e=Fr.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Lr.warn(e.message)}}}function Wr(t){return`${t.name}!${t.options.appId}`}
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
 */class Gr{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Kr();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Kr(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Yr(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Yr(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=pi(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Jr(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function Kr(){return(new Date).toISOString().substring(0,10)}class Jr{async runIndexedDBEnvironmentCheck(){return!!Ni()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await zr()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Wr(t))}catch(t){if(t instanceof Li)Lr.warn(t.message);else{const e=Fr.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Lr.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Vr(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Vr(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Yr(t){return pi(JSON.stringify({version:2,heartbeats:t})).length}
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
 */var Xr;Xr="",Mr(new nr("platform-logger",(t=>new Nr(t)),"PRIVATE")),Mr(new nr("heartbeat",(t=>new Gr(t)),"PRIVATE")),Hr("@firebase/app","0.9.3",Xr),Hr("@firebase/app","0.9.3","esm2017"),Hr("fire-js","");
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
Hr("firebase","9.17.1","app");var Qr,Zr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},ts={},es=es||{},ns=Zr||self;function is(){}function rs(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ss(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var os="closure_uid_"+(1e9*Math.random()>>>0),as=0;function ls(t,e,n){return t.call.apply(t.bind,arguments)}function cs(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function hs(t,e,n){return(hs=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ls:cs).apply(null,arguments)}function us(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ds(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function ps(){this.s=this.s,this.o=this.o}ps.prototype.s=!1,ps.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,os)&&t[os]||(t[os]=++as))},ps.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fs=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gs(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function ms(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(rs(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function ys(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ys.prototype.h=function(){this.defaultPrevented=!0};var _s=function(){if(!ns.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ns.addEventListener("test",is,e),ns.removeEventListener("test",is,e)}catch(t){}return t}();function vs(t){return/^[\s\xa0]*$/.test(t)}var bs=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ws(t,e){return t<e?-1:t>e?1:0}function Es(){var t=ns.navigator;return t&&(t=t.userAgent)?t:""}function Ts(t){return-1!=Es().indexOf(t)}function Is(t){return Is[" "](t),t}Is[" "]=is;var Cs,Ss,ks=Ts("Opera"),Rs=Ts("Trident")||Ts("MSIE"),As=Ts("Edge"),Ns=As||Rs,Ls=Ts("Gecko")&&!(-1!=Es().toLowerCase().indexOf("webkit")&&!Ts("Edge"))&&!(Ts("Trident")||Ts("MSIE"))&&!Ts("Edge"),Os=-1!=Es().toLowerCase().indexOf("webkit")&&!Ts("Edge");function Ps(){var t=ns.document;return t?t.documentMode:void 0}t:{var Ds="",xs=(Ss=Es(),Ls?/rv:([^\);]+)(\)|;)/.exec(Ss):As?/Edge\/([\d\.]+)/.exec(Ss):Rs?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ss):Os?/WebKit\/(\S+)/.exec(Ss):ks?/(?:Version)[ \/]?(\S+)/.exec(Ss):void 0);if(xs&&(Ds=xs?xs[1]:""),Rs){var Ms=Ps();if(null!=Ms&&Ms>parseFloat(Ds)){Cs=String(Ms);break t}}Cs=Ds}var Us,Fs={};function Bs(){return function(t){var e=Fs;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=bs(String(Cs)).split("."),n=bs("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=ws(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||ws(0==r[2].length,0==s[2].length)||ws(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(ns.document&&Rs){var js=Ps();Us=js||(parseInt(Cs,10)||void 0)}else Us=void 0;var qs=Us;function Hs(t,e){if(ys.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ls){t:{try{Is(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:$s[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Hs.X.h.call(this)}}ds(Hs,ys);var $s={2:"touch",3:"pen",4:"mouse"};Hs.prototype.h=function(){Hs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var zs="closure_listenable_"+(1e6*Math.random()|0),Vs=0;function Ws(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++Vs,this.ba=this.ea=!1}function Gs(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ks(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Js(t){const e={};for(const n in t)e[n]=t[n];return e}const Ys="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xs(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<Ys.length;e++)n=Ys[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Qs(t){this.src=t,this.g={},this.h=0}function Zs(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=fs(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Gs(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function to(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}Qs.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=to(t,e,i,r);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new Ws(e,this.src,s,!!i,r)).ea=n,t.push(e)),e};var eo="closure_lm_"+(1e6*Math.random()|0),no={};function io(t,e,n,i,r){if(i&&i.once)return so(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)io(t,e[s],n,i,r);return null}return n=po(n),t&&t[zs]?t.N(e,n,ss(i)?!!i.capture:!!i,r):ro(t,e,n,!1,i,r)}function ro(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=ss(r)?!!r.capture:!!r,a=ho(t);if(a||(t[eo]=a=new Qs(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=co;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)_s||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(lo(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function so(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)so(t,e[s],n,i,r);return null}return n=po(n),t&&t[zs]?t.O(e,n,ss(i)?!!i.capture:!!i,r):ro(t,e,n,!0,i,r)}function oo(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)oo(t,e[s],n,i,r);else i=ss(i)?!!i.capture:!!i,n=po(n),t&&t[zs]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=to(s=t.g[e],n,i,r))&&(Gs(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=ho(t))&&(e=t.g[e.toString()],t=-1,e&&(t=to(e,n,i,r)),(n=-1<t?e[t]:null)&&ao(n))}function ao(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[zs])Zs(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(lo(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=ho(e))?(Zs(n,t),0==n.h&&(n.src=null,e[eo]=null)):Gs(t)}}}function lo(t){return t in no?no[t]:no[t]="on"+t}function co(t,e){if(t.ba)t=!0;else{e=new Hs(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&ao(t),t=n.call(i,e)}return t}function ho(t){return(t=t[eo])instanceof Qs?t:null}var uo="__closure_events_fn_"+(1e9*Math.random()>>>0);function po(t){return"function"==typeof t?t:(t[uo]||(t[uo]=function(e){return t.handleEvent(e)}),t[uo])}function fo(){ps.call(this),this.i=new Qs(this),this.P=this,this.I=null}function go(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new ys(e,t);else if(e instanceof ys)e.target=e.target||t;else{var r=e;Xs(e=new ys(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=mo(o,i,!0,e)&&r}if(r=mo(o=e.g=t,i,!0,e)&&r,r=mo(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=mo(o=e.g=n[s],i,!1,e)&&r}function mo(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Zs(t.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}ds(fo,ps),fo.prototype[zs]=!0,fo.prototype.removeEventListener=function(t,e,n,i){oo(this,t,e,n,i)},fo.prototype.M=function(){if(fo.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Gs(n[i]);delete e.g[t],e.h--}}this.I=null},fo.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},fo.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var yo=ns.JSON.stringify;function _o(){var t=Co;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var vo,bo=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new wo),(t=>t.reset()));class wo{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Eo(t){ns.setTimeout((()=>{throw t}),0)}function To(t,e){vo||function(){var t=ns.Promise.resolve(void 0);vo=function(){t.then(So)}}(),Io||(vo(),Io=!0),Co.add(t,e)}var Io=!1,Co=new class{add(t,e){const n=bo.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function So(){for(var t;t=_o();){try{t.h.call(t.g)}catch(t){Eo(t)}var e=bo;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Io=!1}function ko(t,e){fo.call(this),this.h=t||1,this.g=e||ns,this.j=hs(this.lb,this),this.l=Date.now()}function Ro(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Ao(t,e,n){if("function"==typeof t)n&&(t=hs(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=hs(t.handleEvent,t)}return 2147483647<Number(e)?-1:ns.setTimeout(t,e||0)}function No(t){t.g=Ao((()=>{t.g=null,t.i&&(t.i=!1,No(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}ds(ko,fo),(Qr=ko.prototype).ca=!1,Qr.R=null,Qr.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),go(this,"tick"),this.ca&&(Ro(this),this.start()))}},Qr.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Qr.M=function(){ko.X.M.call(this),Ro(this),delete this.g};class Lo extends ps{l(t){this.h=arguments,this.g?this.i=!0:No(this)}M(){super.M(),this.g&&(ns.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Oo(t){ps.call(this),this.h=t,this.g={}}ds(Oo,ps);var Po=[];function Do(t,e,n,i){Array.isArray(n)||(n&&(Po[0]=n.toString()),n=Po);for(var r=0;r<n.length;r++){var s=io(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function xo(t){Ks(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ao(t)}),t),t.g={}}function Mo(){this.g=!0}function Uo(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return yo(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Oo.prototype.M=function(){Oo.X.M.call(this),xo(this)},Oo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Mo.prototype.Aa=function(){this.g=!1},Mo.prototype.info=function(){};var Fo={},Bo=null;function jo(){return Bo=Bo||new fo}function qo(t){ys.call(this,Fo.Pa,t)}function Ho(t){const e=jo();go(e,new qo(e))}function $o(t,e){ys.call(this,Fo.STAT_EVENT,t),this.stat=e}function zo(t){const e=jo();go(e,new $o(e,t))}function Vo(t,e){ys.call(this,Fo.Qa,t),this.size=e}function Wo(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return ns.setTimeout((function(){t()}),e)}Fo.Pa="serverreachability",ds(qo,ys),Fo.STAT_EVENT="statevent",ds($o,ys),Fo.Qa="timingevent",ds(Vo,ys);var Go={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ko={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Jo(){}function Yo(t){return t.h||(t.h=t.i())}function Xo(){}Jo.prototype.h=null;var Qo,Zo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ta(){ys.call(this,"d")}function ea(){ys.call(this,"c")}function na(){}function ia(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new Oo(this),this.O=sa,t=Ns?125:void 0,this.T=new ko(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ra}function ra(){this.i=null,this.g="",this.h=!1}ds(ta,ys),ds(ea,ys),ds(na,Jo),na.prototype.g=function(){return new XMLHttpRequest},na.prototype.i=function(){return{}},Qo=new na;var sa=45e3,oa={},aa={};function la(t,e,n){t.K=1,t.v=ka(Ea(e)),t.s=n,t.P=!0,ca(t,null)}function ca(t,e){t.F=Date.now(),pa(t),t.A=Ea(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),ja(n.i,"t",i),t.C=0,n=t.l.H,t.h=new ra,t.g=Bl(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Lo(hs(t.La,t,t.g),t.N)),Do(t.S,t.g,"readystatechange",t.ib),e=t.H?Js(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Ho(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&"type"==u[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function ha(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function ua(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=da(t,n),i==aa){4==e&&(t.o=4,zo(14),r=!1),Uo(t.j,t.m,null,"[Incomplete Response]");break}if(i==oa){t.o=4,zo(15),Uo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Uo(t.j,t.m,i,null),_a(t,i)}ha(t)&&i!=aa&&i!=oa&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,zo(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ll(e),e.K=!0,zo(11))):(Uo(t.j,t.m,n,"[Invalid Chunked Response]"),ya(t),ma(t))}function da(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?aa:(n=Number(e.substring(n,i)),isNaN(n)?oa:(i+=1)+n>e.length?aa:(e=e.substr(i,n),t.C=i+n,e))}function pa(t){t.V=Date.now()+t.O,fa(t,t.O)}function fa(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Wo(hs(t.gb,t),e)}function ga(t){t.B&&(ns.clearTimeout(t.B),t.B=null)}function ma(t){0==t.l.G||t.I||Dl(t.l,t)}function ya(t){ga(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Ro(t.T),xo(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function _a(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Wa(n.h,t)))if(!t.J&&Wa(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Pl(n),Tl(n)}Nl(n),zo(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=Wo(hs(n.cb,n),6e3));if(1>=Va(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Ml(n,11)}else if((t.J||n.g==t)&&Pl(n),!vs(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const e=c[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=c[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const h=c[5];null!=h&&"number"==typeof h&&0<h&&(i=1.5*h,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Ga(s,s.h),s.h=null))}if(i.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,Sa(i.F,i.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((i=n).sa=Fl(i,i.H?i.ka:null,i.V),o.J){Ka(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(ga(a),pa(a)),i.g=o}else Al(i);0<n.i.length&&Cl(n)}else"stop"!=c[0]&&"close"!=c[0]||Ml(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Ml(n,7):El(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}Ho()}catch(t){}}function va(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(rs(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(rs(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(rs(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(Qr=ia.prototype).setTimeout=function(t){this.O=t},Qr.ib=function(t){t=t.target;const e=this.L;e&&3==ml(t)?e.l():this.La(t)},Qr.La=function(t){try{if(t==this.g)t:{const h=ml(this.g);var e=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||Ns||this.g&&(this.h.h||this.g.fa()||yl(this.g)))){this.I||4!=h||7==e||Ho(),ga(this);var n=this.g.aa();this.Y=n;e:if(ha(this)){var i=yl(this.g);t="";var r=i.length,s=4==ml(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ya(this),ma(this);var o="";break e}this.h.i=new ns.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vs(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,zo(12),ya(this),ma(this);break t}Uo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,_a(this,n)}this.P?(ua(this,h,o),Ns&&this.i&&3==h&&(Do(this.S,this.T,"tick",this.hb),this.T.start())):(Uo(this.j,this.m,o,null),_a(this,o)),4==h&&ya(this),this.i&&!this.I&&(4==h?Dl(this.l,this):(this.i=!1,pa(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,zo(12)):(this.o=0,zo(13)),ya(this),ma(this)}}}catch(t){}},Qr.hb=function(){if(this.g){var t=ml(this.g),e=this.g.fa();this.C<e.length&&(ga(this),ua(this,t,e),this.i&&4!=t&&pa(this))}},Qr.cancel=function(){this.I=!0,ya(this)},Qr.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Ho(),zo(17)),ya(this),this.o=2,ma(this)):fa(this,this.V-t)};var ba=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wa(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof wa){this.h=void 0!==e?e:t.h,Ta(this,t.j),this.s=t.s,this.g=t.g,Ia(this,t.m),this.l=t.l,e=t.i;var n=new Ma;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ca(this,n),this.o=t.o}else t&&(n=String(t).match(ba))?(this.h=!!e,Ta(this,n[1]||"",!0),this.s=Ra(n[2]||""),this.g=Ra(n[3]||"",!0),Ia(this,n[4]),this.l=Ra(n[5]||"",!0),Ca(this,n[6]||"",!0),this.o=Ra(n[7]||"")):(this.h=!!e,this.i=new Ma(null,this.h))}function Ea(t){return new wa(t)}function Ta(t,e,n){t.j=n?Ra(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ia(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ca(t,e,n){e instanceof Ma?(t.i=e,function(t,e){e&&!t.j&&(Ua(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Fa(this,e),ja(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Aa(e,Da)),t.i=new Ma(e,t.h))}function Sa(t,e,n){t.i.set(e,n)}function ka(t){return Sa(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ra(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Aa(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Na),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Na(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}wa.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Aa(e,La,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Aa(e,La,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Aa(n,"/"==n.charAt(0)?Pa:Oa,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Aa(n,xa)),t.join("")};var La=/[#\/\?@]/g,Oa=/[#\?:]/g,Pa=/[#\?]/g,Da=/[#\?@]/g,xa=/#/g;function Ma(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ua(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Fa(t,e){Ua(t),e=qa(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ba(t,e){return Ua(t),e=qa(t,e),t.g.has(e)}function ja(t,e,n){Fa(t,e),0<n.length&&(t.i=null,t.g.set(qa(t,e),gs(n)),t.h+=n.length)}function qa(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Qr=Ma.prototype).add=function(t,e){Ua(this),this.i=null,t=qa(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Qr.forEach=function(t,e){Ua(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},Qr.oa=function(){Ua(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},Qr.W=function(t){Ua(this);let e=[];if("string"==typeof t)Ba(this,t)&&(e=e.concat(this.g.get(qa(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Qr.set=function(t,e){return Ua(this),this.i=null,Ba(this,t=qa(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Qr.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},Qr.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function Ha(t){this.l=t||$a,ns.PerformanceNavigationTiming?t=0<(t=ns.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(ns.g&&ns.g.Ga&&ns.g.Ga()&&ns.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $a=10;function za(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Va(t){return t.h?1:t.g?t.g.size:0}function Wa(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ga(t,e){t.g?t.g.add(e):t.h=e}function Ka(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ja(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return gs(t.i)}function Ya(){}function Xa(){this.g=new Ya}function Qa(t,e,n){const i=n||"";try{va(t,(function(t,n){let r=t;ss(t)&&(r=yo(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function Za(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function tl(t){this.l=t.ac||null,this.j=t.jb||!1}function el(t,e){fo.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=nl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ha.prototype.cancel=function(){if(this.i=Ja(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ya.prototype.stringify=function(t){return ns.JSON.stringify(t,void 0)},Ya.prototype.parse=function(t){return ns.JSON.parse(t,void 0)},ds(tl,Jo),tl.prototype.g=function(){return new el(this.l,this.j)},tl.prototype.i=function(t){return function(){return t}}({}),ds(el,fo);var nl=0;function il(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function rl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,sl(t)}function sl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Qr=el.prototype).open=function(t,e){if(this.readyState!=nl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,sl(this)},Qr.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ns).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},Qr.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,rl(this)),this.readyState=nl},Qr.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,sl(this)),this.g&&(this.readyState=3,sl(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==ns.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;il(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},Qr.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?rl(this):sl(this),3==this.readyState&&il(this)}},Qr.Va=function(t){this.g&&(this.response=this.responseText=t,rl(this))},Qr.Ua=function(t){this.g&&(this.response=t,rl(this))},Qr.ga=function(){this.g&&rl(this)},Qr.setRequestHeader=function(t,e){this.v.append(t,e)},Qr.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Qr.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(el.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ol=ns.JSON.parse;function al(t){fo.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ll,this.K=this.L=!1}ds(al,fo);var ll="",cl=/^https?$/i,hl=["POST","PUT"];function ul(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,dl(t),fl(t)}function dl(t){t.D||(t.D=!0,go(t,"complete"),go(t,"error"))}function pl(t){if(t.h&&void 0!==es&&(!t.C[1]||4!=ml(t)||2!=t.aa()))if(t.v&&4==ml(t))Ao(t.Ha,0,t);else if(go(t,"readystatechange"),4==ml(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var r=String(t.H).match(ba)[1]||null;if(!r&&ns.self&&ns.self.location){var s=ns.self.location.protocol;r=s.substr(0,s.length-1)}i=!cl.test(r?r.toLowerCase():"")}n=i}if(n)go(t,"complete"),go(t,"success");else{t.m=6;try{var o=2<ml(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",dl(t)}}finally{fl(t)}}}function fl(t,e){if(t.g){gl(t);const n=t.g,i=t.C[0]?is:null;t.g=null,t.C=null,e||go(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function gl(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ns.clearTimeout(t.A),t.A=null)}function ml(t){return t.g?t.g.readyState:0}function yl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ll:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function _l(t){let e="";return Ks(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function vl(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=_l(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Sa(t,e,n))}function bl(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function wl(t){this.Ca=0,this.i=[],this.j=new Mo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=bl("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=bl("baseRetryDelayMs",5e3,t),this.bb=bl("retryDelaySeedMs",1e4,t),this.$a=bl("forwardChannelMaxRetries",2,t),this.ta=bl("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ha(t&&t.concurrentRequestLimit),this.Fa=new Xa,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function El(t){if(Il(t),3==t.G){var e=t.U++,n=Ea(t.F);Sa(n,"SID",t.I),Sa(n,"RID",e),Sa(n,"TYPE","terminate"),kl(t,n),(e=new ia(t,t.j,e,void 0)).K=2,e.v=ka(Ea(n)),n=!1,ns.navigator&&ns.navigator.sendBeacon&&(n=ns.navigator.sendBeacon(e.v.toString(),"")),!n&&ns.Image&&((new Image).src=e.v,n=!0),n||(e.g=Bl(e.l,null),e.g.da(e.v)),e.F=Date.now(),pa(e)}Ul(t)}function Tl(t){t.g&&(Ll(t),t.g.cancel(),t.g=null)}function Il(t){Tl(t),t.u&&(ns.clearTimeout(t.u),t.u=null),Pl(t),t.h.cancel(),t.m&&("number"==typeof t.m&&ns.clearTimeout(t.m),t.m=null)}function Cl(t){za(t.h)||t.m||(t.m=!0,To(t.Ja,t),t.C=0)}function Sl(t,e){var n;n=e?e.m:t.U++;const i=Ea(t.F);Sa(i,"SID",t.I),Sa(i,"RID",n),Sa(i,"AID",t.T),kl(t,i),t.o&&t.s&&vl(i,t.o,t.s),n=new ia(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Rl(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ga(t.h,n),la(n,i,e)}function kl(t,e){t.ia&&Ks(t.ia,(function(t,n){Sa(e,n,t)})),t.l&&va({},(function(t,n){Sa(e,n,t)}))}function Rl(t,e,n){n=Math.min(t.i.length,n);var i=t.l?hs(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),s=!1;else try{Qa(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function Al(t){t.g||t.u||(t.Z=1,To(t.Ia,t),t.A=0)}function Nl(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Wo(hs(t.Ia,t),xl(t,t.A)),t.A++,!0)}function Ll(t){null!=t.B&&(ns.clearTimeout(t.B),t.B=null)}function Ol(t){t.g=new ia(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Ea(t.sa);Sa(e,"RID","rpc"),Sa(e,"SID",t.I),Sa(e,"CI",t.L?"0":"1"),Sa(e,"AID",t.T),Sa(e,"TYPE","xmlhttp"),kl(t,e),t.o&&t.s&&vl(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ka(Ea(e)),n.s=null,n.P=!0,ca(n,t)}function Pl(t){null!=t.v&&(ns.clearTimeout(t.v),t.v=null)}function Dl(t,e){var n=null;if(t.g==e){Pl(t),Ll(t),t.g=null;var i=2}else{if(!Wa(t.h,e))return;n=e.D,Ka(t.h,e),i=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;go(i=jo(),new Vo(i,n)),Cl(t)}else Al(t);else if(3==(r=e.o)||0==r&&0<t.pa||!(1==i&&function(t,e){return!(Va(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=Wo(hs(t.Ja,t,e),xl(t,t.C)),t.C++,0)))}(t,e)||2==i&&Nl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Ml(t,5);break;case 4:Ml(t,10);break;case 3:Ml(t,6);break;default:Ml(t,2)}}function xl(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ml(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=hs(t.kb,t);n||(n=new wa("//www.google.com/images/cleardot.gif"),ns.location&&"http"==ns.location.protocol||Ta(n,"https"),ka(n)),function(t,e){const n=new Mo;if(ns.Image){const i=new Image;i.onload=us(Za,n,i,"TestLoadImage: loaded",!0,e),i.onerror=us(Za,n,i,"TestLoadImage: error",!1,e),i.onabort=us(Za,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=us(Za,n,i,"TestLoadImage: timeout",!1,e),ns.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else zo(2);t.G=0,t.l&&t.l.va(e),Ul(t),Il(t)}function Ul(t){if(t.G=0,t.la=[],t.l){const e=Ja(t.h);0==e.length&&0==t.i.length||(ms(t.la,e),ms(t.la,t.i),t.h.i.length=0,gs(t.i),t.i.length=0),t.l.ua()}}function Fl(t,e,n){var i=n instanceof wa?Ea(n):new wa(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),Ia(i,i.m);else{var r=ns.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new wa(null,void 0);i&&Ta(s,i),e&&(s.g=e),r&&Ia(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&Sa(i,n,e),Sa(i,"VER",t.ma),kl(t,i),i}function Bl(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new al(new tl({jb:!0})):new al(t.ra)).Ka(t.H),e}function jl(){}function ql(){if(Rs&&!(10<=Number(qs)))throw Error("Environmental error: no available transport.")}function Hl(t,e){fo.call(this),this.g=new wl(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!vs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vs(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Vl(this)}function $l(t){ta.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function zl(){ea.call(this),this.status=1}function Vl(t){this.g=t}(Qr=al.prototype).Ka=function(t){this.L=t},Qr.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qo.g(),this.C=this.u?Yo(this.u):Yo(Qo),this.g.onreadystatechange=hs(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void ul(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=ns.FormData&&t instanceof ns.FormData,!(0<=fs(hl,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{gl(this),0<this.B&&((this.K=function(t){return Rs&&Bs()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=hs(this.qa,this)):this.A=Ao(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){ul(this,t)}},Qr.qa=function(){void 0!==es&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,go(this,"timeout"),this.abort(8))},Qr.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,go(this,"complete"),go(this,"abort"),fl(this))},Qr.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fl(this,!0)),al.X.M.call(this)},Qr.Ha=function(){this.s||(this.F||this.v||this.l?pl(this):this.fb())},Qr.fb=function(){pl(this)},Qr.aa=function(){try{return 2<ml(this)?this.g.status:-1}catch(t){return-1}},Qr.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Qr.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ol(e)}},Qr.Ea=function(){return this.m},Qr.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Qr=wl.prototype).ma=8,Qr.G=1,Qr.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new ia(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Js(s),Xs(s,this.S)):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Rl(this,r,e),Sa(n=Ea(this.F),"RID",t),Sa(n,"CVER",22),this.D&&Sa(n,"X-HTTP-Session-Id",this.D),kl(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(_l(s)))+"&"+e:this.o&&vl(n,this.o,s)),Ga(this.h,r),this.Ya&&Sa(n,"TYPE","init"),this.O?(Sa(n,"$req",e),Sa(n,"SID","null"),r.Z=!0,la(r,n,null)):la(r,n,e),this.G=2}}else 3==this.G&&(t?Sl(this,t):0==this.i.length||za(this.h)||Sl(this))},Qr.Ia=function(){if(this.u=null,Ol(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Wo(hs(this.eb,this),t)}},Qr.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,zo(10),Tl(this),Ol(this))},Qr.cb=function(){null!=this.v&&(this.v=null,Tl(this),Nl(this),zo(19))},Qr.kb=function(t){t?(this.j.info("Successfully pinged google.com"),zo(2)):(this.j.info("Failed to ping google.com"),zo(1))},(Qr=jl.prototype).xa=function(){},Qr.wa=function(){},Qr.va=function(){},Qr.ua=function(){},Qr.Ra=function(){},ql.prototype.g=function(t,e){return new Hl(t,e)},ds(Hl,fo),Hl.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;zo(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Fl(t,null,t.V),Cl(t)},Hl.prototype.close=function(){El(this.g)},Hl.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=yo(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&Cl(e)},Hl.prototype.M=function(){this.g.l=null,delete this.j,El(this.g),delete this.g,Hl.X.M.call(this)},ds($l,ta),ds(zl,ea),ds(Vl,jl),Vl.prototype.xa=function(){go(this.g,"a")},Vl.prototype.wa=function(t){go(this.g,new $l(t))},Vl.prototype.va=function(t){go(this.g,new zl)},Vl.prototype.ua=function(){go(this.g,"b")},ql.prototype.createWebChannel=ql.prototype.g,Hl.prototype.send=Hl.prototype.u,Hl.prototype.open=Hl.prototype.m,Hl.prototype.close=Hl.prototype.close,Go.NO_ERROR=0,Go.TIMEOUT=8,Go.HTTP_ERROR=6,Ko.COMPLETE="complete",Xo.EventType=Zo,Zo.OPEN="a",Zo.CLOSE="b",Zo.ERROR="c",Zo.MESSAGE="d",fo.prototype.listen=fo.prototype.N,al.prototype.listenOnce=al.prototype.O,al.prototype.getLastError=al.prototype.Oa,al.prototype.getLastErrorCode=al.prototype.Ea,al.prototype.getStatus=al.prototype.aa,al.prototype.getResponseJson=al.prototype.Sa,al.prototype.getResponseText=al.prototype.fa,al.prototype.send=al.prototype.da,al.prototype.setWithCredentials=al.prototype.Ka;ts.createWebChannelTransport=function(){return new ql},ts.getStatEventTarget=function(){return jo()},ts.ErrorCode=Go,ts.EventType=Ko,ts.Event=Fo,ts.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ts.FetchXmlHttpFactory=tl,ts.WebChannel=Xo,ts.XhrIo=al;
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
class Wl{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}Wl.UNAUTHENTICATED=new Wl(null),Wl.GOOGLE_CREDENTIALS=new Wl("google-credentials-uid"),Wl.FIRST_PARTY=new Wl("first-party-uid"),Wl.MOCK_USER=new Wl("mock-user");
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
let Gl="9.17.1";
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
 */const Kl=new dr("@firebase/firestore");function Jl(t,...e){if(Kl.logLevel<=or.DEBUG){const n=e.map(Ql);Kl.debug(`Firestore (${Gl}): ${t}`,...n)}}function Yl(t,...e){if(Kl.logLevel<=or.ERROR){const n=e.map(Ql);Kl.error(`Firestore (${Gl}): ${t}`,...n)}}function Xl(t,...e){if(Kl.logLevel<=or.WARN){const n=e.map(Ql);Kl.warn(`Firestore (${Gl}): ${t}`,...n)}}function Ql(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function Zl(t="Unexpected state"){const e=`FIRESTORE (${Gl}) INTERNAL ASSERTION FAILED: `+t;throw Yl(e),new Error(e)}function tc(t,e){t||Zl()}
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
const ec={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class nc extends Li{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class ic{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class rc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class sc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Wl.UNAUTHENTICATED)))}shutdown(){}}class oc{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class ac{start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new ic;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ic,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Jl("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Jl("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ic)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Jl("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(tc("string"==typeof e.accessToken),new rc(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return tc(null===t||"string"==typeof t),new Wl(t)}constructor(t){this.t=t,this.currentUser=Wl.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class lc{I(){return this.g?this.g():(tc(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i,this.type="FirstParty",this.user=Wl.FIRST_PARTY,this.p=new Map}}class cc{getToken(){return Promise.resolve(new lc(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Wl.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i}}class hc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uc{start(t,e){const n=t=>{null!=t.error&&Jl("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Jl("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Jl("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?i(t):Jl("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(tc("string"==typeof t.token),this.A=t.token,new hc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
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
function dc(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class pc{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=dc(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function fc(t,e){return t<e?-1:t>e?1:0}
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
class gc{get length(){return this.len}isEqual(t){return 0===gc.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof gc?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&Zl(),void 0===n?n=t.length-e:n>t.length-e&&Zl(),this.segments=t,this.offset=e,this.len=n}}class mc extends gc{construct(t,e,n){return new mc(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new nc(ec.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new mc(e)}static emptyPath(){return new mc([])}}
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
class yc{static fromPath(t){return new yc(mc.fromString(t))}static fromName(t){return new yc(mc.fromString(t).popFirst(5))}static empty(){return new yc(mc.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===mc.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return mc.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new yc(new mc(t.slice()))}constructor(t){this.path=t}}
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
 */class _c{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}_c.UNKNOWN_ID=-1;function vc(t){return"IndexedDbTransactionError"===t.name}
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
class bc{ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}}bc.at=-1;
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
class wc{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ec{static empty(){return new Ec("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ec&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
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
 */function Tc(t){return 0===t&&1/t==-1/0}let Ic=Symbol.iterator;
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
 */class Cc{static fromBase64String(t){const e=atob(t);return new Cc(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Cc(e)}[Ic](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return fc(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}Cc.EMPTY_BYTE_STRING=new Cc("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sc(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function kc(t){return"string"==typeof t?Cc.fromBase64String(t):Cc.fromUint8Array(t)}
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
 */function Rc(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Ac{insert(t,e){return new Ac(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Lc.BLACK,null,null))}remove(t){return new Ac(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Lc.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Nc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Nc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Nc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Nc(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||Lc.EMPTY}}class Nc{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class Lc{copy(t,e,n,i,r){return new Lc(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Lc.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Lc.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Lc.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Lc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Zl();if(this.right.isRed())throw Zl();const t=this.left.check();if(t!==this.right.check())throw Zl();return t+(this.isRed()?0:1)}constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Lc.RED,this.left=null!=i?i:Lc.EMPTY,this.right=null!=r?r:Lc.EMPTY,this.size=this.left.size+1+this.right.size}}Lc.EMPTY=null,Lc.RED=!0,Lc.BLACK=!1,Lc.EMPTY=new class{get key(){throw Zl()}get value(){throw Zl()}get color(){throw Zl()}get left(){throw Zl()}get right(){throw Zl()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Lc(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
class Oc{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Pc(this.data.getIterator())}getIteratorFrom(t){return new Pc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Oc))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Oc(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new Ac(this.comparator)}}class Pc{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
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
class Dc{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function xc(t){return new Dc(t)}
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
var Mc,Uc;(Uc=Mc||(Mc={}))[Uc.OK=0]="OK",Uc[Uc.CANCELLED=1]="CANCELLED",Uc[Uc.UNKNOWN=2]="UNKNOWN",Uc[Uc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Uc[Uc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Uc[Uc.NOT_FOUND=5]="NOT_FOUND",Uc[Uc.ALREADY_EXISTS=6]="ALREADY_EXISTS",Uc[Uc.PERMISSION_DENIED=7]="PERMISSION_DENIED",Uc[Uc.UNAUTHENTICATED=16]="UNAUTHENTICATED",Uc[Uc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Uc[Uc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Uc[Uc.ABORTED=10]="ABORTED",Uc[Uc.OUT_OF_RANGE=11]="OUT_OF_RANGE",Uc[Uc.UNIMPLEMENTED=12]="UNIMPLEMENTED",Uc[Uc.INTERNAL=13]="INTERNAL",Uc[Uc.UNAVAILABLE=14]="UNAVAILABLE",Uc[Uc.DATA_LOSS=15]="DATA_LOSS";
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
new Ac(yc.comparator);new Ac(yc.comparator);new Ac(yc.comparator),new Oc(yc.comparator);new Oc(fc);const Fc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Bc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],jc=Bc;
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
 */class qc{ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(Sc(t.integerValue));else if("doubleValue"in t){const n=Sc(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),Tc(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(kc(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?Rc(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):Zl()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const t of Object.keys(n))this.de(t,e),this.ce(n[t],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const t of n)this.ce(t,e)}me(t,e){this.he(e,37),yc.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}constructor(){}}qc.Ie=new qc;
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
new Uint8Array(0);class Hc{static withCacheSize(t){return new Hc(t,Hc.DEFAULT_COLLECTION_PERCENTILE,Hc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
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
 */Hc.DEFAULT_COLLECTION_PERCENTILE=10,Hc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Hc.DEFAULT=new Hc(41943040,Hc.DEFAULT_COLLECTION_PERCENTILE,Hc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Hc.DISABLED=new Hc(-1,0,0);function $c(){return"undefined"!=typeof document?document:null}
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
 */class zc{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,e-n);i>0&&Jl("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(t,e,n=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
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
class Vc{static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Vc(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new nc(ec.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new ic,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Wc(t,e){if(Yl("AsyncQueue",`${e}: ${t}`),vc(t))return new nc(ec.UNAVAILABLE,`${e}: ${t}`);throw t}
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
function Gc(t,e,n){if(!n)throw new nc(ec.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Kc(t){if(yc.isDocumentKey(t))throw new nc(ec.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jc(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Zl()}function Yc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new nc(ec.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jc(t);throw new nc(ec.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
const Xc=new Map;class Qc{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new nc(ec.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new nc(ec.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new nc(ec.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
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
 */class Zc{get app(){if(!this._app)throw new nc(ec.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new nc(ec.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new sc;switch(t.type){case"gapi":const e=t.client;return new cc(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new nc(ec.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Xc.get(t);e&&(Jl("ComponentProvider","Removing Datastore"),Xc.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qc({}),this._settingsFrozen=!1}}
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
class th{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new th(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class eh{withConverter(t){return new eh(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class nh extends eh{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new th(this.firestore,null,new yc(t))}withConverter(t){return new nh(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,xc(n)),this._path=n,this.type="collection"}}
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
class ih{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new nc(ec.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ic;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Wc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Wl.UNAUTHENTICATED,this.clientId=pc.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Jl("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Jl("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}class rh{get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=$c();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new ic;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!vc(t))throw t;Jl("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;throw Yl("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const i=Vc.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(i),i}zc(){this.Kc&&Zl()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new zc(this,"async_queue_retry"),this.Wc=()=>{const t=$c();t&&Jl("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=$c();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}}class sh extends Zc{_terminate(){return this._firestoreClient||oh(this),this._firestoreClient.terminate()}constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new rh,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}}function oh(t){var e;const n=t._freezeSettings(),i=(r=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new wc(r,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var r,s,o,a;t._firestoreClient=new ih(t._authCredentials,t._appCheckCredentials,t._queue,i)}new RegExp("[~\\*/\\[\\]]");!function(t,e=!0){Gl="9.17.1",Mr(new nr("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new sh(new ac(t.getProvider("auth-internal")),new uc(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new nc(ec.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ec(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),Hr("@firebase/firestore","3.8.3",t),Hr("@firebase/firestore","3.8.3","esm2017")}();function ah(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;function lh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ch=lh,hh=new Oi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),uh=new dr("@firebase/auth");function dh(t,...e){uh.logLevel<=or.ERROR&&uh.error(`Auth (9.17.1): ${t}`,...e)}
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
 */function ph(t,...e){throw mh(t,...e)}function fh(t,...e){return mh(t,...e)}function gh(t,e,n){const i=Object.assign(Object.assign({},ch()),{[e]:n});return new Oi("auth","Firebase",i).create(e,{appName:t.name})}function mh(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return hh.create(t,...e)}function yh(t,e,...n){if(!t)throw mh(e,...n)}function _h(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dh(e),new Error(e)}function vh(t,e){t||_h(e)}
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
 */const bh=new Map;function wh(t){vh(t instanceof Function,"Expected a class definition");let e=bh.get(t);return e?(vh(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bh.set(t,e),e)}
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
function Eh(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function Th(){return"http:"===Ih()||"https:"===Ih()}function Ih(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
 */function Ch(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Th()||Si()||"connection"in navigator))||navigator.onLine}
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
class Sh{get(){return Ch()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(t,e){this.shortDelay=t,this.longDelay=e,vh(e>t,"Short delay should be less than long delay!"),this.isMobile=Ci()||ki()}}
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
 */function kh(t,e){vh(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
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
 */class Rh{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void _h("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void _h("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void _h("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Ah={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Nh=new Sh(3e4,6e4);
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
 */function Lh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Oh(t,e,n,i,r={}){return Ph(t,r,(async()=>{let r={},s={};i&&("GET"===e?s=i:r={body:JSON.stringify(i)});const o=Vi(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Rh.fetch()(xh(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Ph(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ah),e);try{const e=new Mh(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Uh(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Uh(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Uh(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw Uh(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw gh(t,a,o);ph(t,a)}}catch(e){if(e instanceof Li)throw e;ph(t,"network-request-failed")}}async function Dh(t,e,n,i,r={}){const s=await Oh(t,e,n,i,r);return"mfaPendingCredential"in s&&ph(t,"multi-factor-auth-required",{_serverResponse:s}),s}function xh(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?kh(t.config,r):`${t.config.apiScheme}://${r}`}class Mh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(fh(this.auth,"network-request-failed"))),Nh.get())}))}}function Uh(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=fh(t,e,i);return r.customData._tokenResponse=n,r}
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
function Fh(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
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
 */function Bh(t){return 1e3*Number(t)}function jh(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return dh("JWT malformed, contained fewer than 3 sections"),null;try{const t=fi(n);return t?JSON.parse(t):(dh("Failed to decode base64 JWT payload"),null)}catch(t){return dh("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
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
async function qh(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof Li&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Hh{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class $h{_initializeTime(){this.lastSignInTime=Fh(this.lastLoginAt),this.creationTime=Fh(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
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
 */async function zh(t){var e;const n=t.auth,i=await t.getIdToken(),r=await qh(t,async function(t,e){return Oh(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));yh(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=ah(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=t.providerData,c=o,[...l.filter((t=>!c.some((e=>e.providerId===t.providerId)))),...c]);var l,c;const h=t.isAnonymous,u=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!h&&u,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $h(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}
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
class Vh{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){yh(t.idToken,"internal-error"),yh(void 0!==t.idToken,"internal-error"),yh(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=jh(t);return yh(e,"internal-error"),yh(void 0!==e.exp,"internal-error"),yh(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return yh(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await
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
async function(t,e){const n=await Ph(t,{},(async()=>{const n=Vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,s=xh(t,i,"/v1/token",`key=${r}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Rh.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new Vh;return n&&(yh("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(yh("string"==typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(yh("number"==typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Vh,this.toJSON())}_performRefresh(){return _h("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function Wh(t,e){yh("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Gh{async getIdToken(t){const e=await qh(this,this.stsTokenManager.getToken(this.auth,t));return yh(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=er(t),i=await n.getIdToken(e),r=jh(i);yh(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Fh(Bh(r.auth_time)),issuedAtTime:Fh(Bh(r.iat)),expirationTime:Fh(Bh(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=er(t);await zh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(yh(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Gh(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){yh(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await zh(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await qh(this,async function(t,e){return Oh(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,l,c;const h=null!==(n=e.displayName)&&void 0!==n?n:void 0,u=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=e.photoURL)&&void 0!==s?s:void 0,f=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=e.createdAt)&&void 0!==l?l:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:_,emailVerified:v,isAnonymous:b,providerData:w,stsTokenManager:E}=e;yh(_&&E,t,"internal-error");const T=Vh.fromJSON(this.name,E);yh("string"==typeof _,t,"internal-error"),Wh(h,t.name),Wh(u,t.name),yh("boolean"==typeof v,t,"internal-error"),yh("boolean"==typeof b,t,"internal-error"),Wh(d,t.name),Wh(p,t.name),Wh(f,t.name),Wh(g,t.name),Wh(m,t.name),Wh(y,t.name);const I=new Gh({uid:_,auth:t,email:u,emailVerified:v,displayName:h,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:T,createdAt:m,lastLoginAt:y});return w&&Array.isArray(w)&&(I.providerData=w.map((t=>Object.assign({},t)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(t,e,n=!1){const i=new Vh;i.updateFromServerResponse(e);const r=new Gh({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await zh(r),r}constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=ah(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new $h(r.createdAt||void 0,r.lastLoginAt||void 0)}}
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
 */class Kh{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}Kh.type="NONE";const Jh=Kh;
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
 */function Yh(t,e,n){return`firebase:${t}:${e}:${n}`}class Xh{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Gh._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Xh(wh(Jh),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||wh(Jh);const s=Yh(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const i=Gh._fromJSON(t,e);n!==r&&(o=i),r=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(t){}}))),new Xh(r,t,n)):new Xh(r,t,n)}constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Yh(this.userKey,i.apiKey,r),this.fullPersistenceKey=Yh("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function Qh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ru(e))return"Blackberry";if(su(e))return"Webos";if(tu(e))return"Safari";if((e.includes("chrome/")||eu(e))&&!e.includes("edge/"))return"Chrome";if(iu(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Zh(t=Ii()){return/firefox\//i.test(t)}function tu(t=Ii()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eu(t=Ii()){return/crios\//i.test(t)}function nu(t=Ii()){return/iemobile/i.test(t)}function iu(t=Ii()){return/android/i.test(t)}function ru(t=Ii()){return/blackberry/i.test(t)}function su(t=Ii()){return/webos/i.test(t)}function ou(t=Ii()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function au(){return Ri()&&10===document.documentMode}function lu(t=Ii()){return ou(t)||iu(t)||su(t)||ru(t)||/windows phone/i.test(t)||nu(t)}
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
function cu(t,e=[]){let n;switch(t){case"Browser":n=Qh(Ii());break;case"Worker":n=`${Qh(Ii())}-${t}`;break;default:n=t}return`${n}/JsCore/9.17.1/${e.length?e.join(","):"FirebaseCore-web"}`}
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
 */class hu{pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}constructor(t){this.auth=t,this.queue=[]}}
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
 */class uu{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=wh(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Xh.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return yh(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await zh(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?er(t):null;return e&&yh(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&yh(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(wh(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Oi("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&wh(t)||this._popupRedirectResolver;yh(e,this,"argument-error"),this.redirectPersistenceManager=await Xh.create(this,[wh(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return yh(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return yh(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=cu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pu(this),this.idTokenSubscription=new pu(this),this.beforeStateQueue=new hu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}}function du(t){return er(t)}class pu{get next(){return yh(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=Ji((t=>this.observer=t))}}function fu(t,e,n){const i=du(t);yh(i._canInitEmulator,i,"emulator-config-failed"),yh(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=gu(e),{host:o,port:a}=function(t){const e=gu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:mu(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:mu(e)}}}(e),l=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
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
 */()}function gu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class yu{toJSON(){return _h("not implemented")}_getIdTokenResponse(t){return _h("not implemented")}_linkToIdToken(t,e){return _h("not implemented")}_getReauthenticationResolver(t){return _h("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
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
 */async function _u(t,e){return Oh(t,"POST","/v1/accounts:update",e)}
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
class vu extends yu{static _fromEmailAndPassword(t,e){return new vu(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new vu(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
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
return async function(t,e){return Dh(t,"POST","/v1/accounts:signInWithPassword",Lh(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(t,e){return Dh(t,"POST","/v1/accounts:signInWithEmailLink",Lh(t,e))}(t,{email:this._email,oobCode:this._password});default:ph(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return _u(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Dh(t,"POST","/v1/accounts:signInWithEmailLink",Lh(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:ph(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}}
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
 */async function bu(t,e){return Dh(t,"POST","/v1/accounts:signInWithIdp",Lh(t,e))}
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
 */class wu extends yu{static _fromParams(t){const e=new wu(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ph("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=ah(e,["providerId","signInMethod"]);if(!n||!i)return null;const s=new wu(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(t){return bu(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,bu(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,bu(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Vi(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const Eu={USER_NOT_FOUND:"user-not-found"};
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
class Tu extends yu{static _fromVerification(t,e){return new Tu({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Tu({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return Dh(t,"POST","/v1/accounts:signInWithPhoneNumber",Lh(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await Dh(t,"POST","/v1/accounts:signInWithPhoneNumber",Lh(t,e));if(n.temporaryProof)throw Uh(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return Dh(t,"POST","/v1/accounts:signInWithPhoneNumber",Lh(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),Eu)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new Tu({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(t){super("phone","phone"),this.params=t}}
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
 */class Iu{static parseLink(t){const e=function(t){const e=Wi(Gi(t)).link,n=e?Wi(Gi(e)).deep_link_id:null,i=Wi(Gi(t)).deep_link_id;return(i?Wi(Gi(i)).link:null)||i||n||e||t}(t);try{return new Iu(e)}catch(t){return null}}constructor(t){var e,n,i,r,s,o;const a=Wi(Gi(t)),l=null!==(e=a.apiKey)&&void 0!==e?e:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,h=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);yh(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
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
class Cu{static credential(t,e){return vu._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Iu.parseLink(e);return yh(n,"argument-error"),vu._fromEmailAndCode(t,n.code,n.tenantId)}constructor(){this.providerId=Cu.PROVIDER_ID}}Cu.PROVIDER_ID="password",Cu.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Cu.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Su{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class ku extends Su{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class Ru extends ku{static credential(t){return wu._fromParams({providerId:Ru.PROVIDER_ID,signInMethod:Ru.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ru.credentialFromTaggedObject(t)}static credentialFromError(t){return Ru.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Ru.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}Ru.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ru.PROVIDER_ID="facebook.com";
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
class Au extends ku{static credential(t,e){return wu._fromParams({providerId:Au.PROVIDER_ID,signInMethod:Au.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Au.credentialFromTaggedObject(t)}static credentialFromError(t){return Au.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Au.credential(e,n)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}Au.GOOGLE_SIGN_IN_METHOD="google.com",Au.PROVIDER_ID="google.com";
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
class Nu extends ku{static credential(t){return wu._fromParams({providerId:Nu.PROVIDER_ID,signInMethod:Nu.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Nu.credentialFromTaggedObject(t)}static credentialFromError(t){return Nu.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Nu.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}Nu.GITHUB_SIGN_IN_METHOD="github.com",Nu.PROVIDER_ID="github.com";
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
class Lu extends ku{static credential(t,e){return wu._fromParams({providerId:Lu.PROVIDER_ID,signInMethod:Lu.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Lu.credentialFromTaggedObject(t)}static credentialFromError(t){return Lu.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Lu.credential(e,n)}catch(t){return null}}constructor(){super("twitter.com")}}
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
async function Ou(t,e){return Dh(t,"POST","/v1/accounts:signUp",Lh(t,e))}
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
 */Lu.TWITTER_SIGN_IN_METHOD="twitter.com",Lu.PROVIDER_ID="twitter.com";class Pu{static async _fromIdTokenResponse(t,e,n,i=!1){const r=await Gh._fromIdTokenResponse(t,n,i),s=Du(n);return new Pu({user:r,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Du(n);return new Pu({user:t,providerId:i,_tokenResponse:n,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function Du(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class xu extends Li{static _fromErrorAndOperation(t,e,n,i){return new xu(t,e,n,i)}constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,xu.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}}function Mu(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw xu._fromErrorAndOperation(t,n,e,i);throw n}))}
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
 */async function Uu(t,e,n=!1){const i=await qh(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pu._forOperation(t,"link",i)}
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
async function Fu(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await qh(t,Mu(i,r,e,t),n);yh(s.idToken,i,"internal-error");const o=jh(s.idToken);yh(o,i,"internal-error");const{sub:a}=o;return yh(t.uid===a,i,"user-mismatch"),Pu._forOperation(t,r,s)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&ph(i,"user-mismatch"),t}}
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
 */async function Bu(t,e,n=!1){const i="signIn",r=await Mu(t,i,e),s=await Pu._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function ju(t,e){return Bu(du(t),e)}async function qu(t,e,n){const i=du(t),r=await Ou(i,{returnSecureToken:!0,email:e,password:n}),s=await Pu._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function Hu(t,e,n){return ju(er(t),Cu.credential(e,n))}
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
class $u{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
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
 */class zu extends $u{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);au()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=Ii();return tu(t)||ou(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=lu(),this._shouldAllowMigration=!0}}zu.type="LOCAL";const Vu=zu;
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
 */class Wu extends $u{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Wu.type="SESSION";const Gu=Wu;
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
class Ku{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ku(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function Ju(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
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
 */Ku.receivers=[];class Yu{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const l=Ju("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(t){this.target=t,this.handlers=new Set}}
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
 */function Xu(){return window}
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
function Qu(){return void 0!==Xu().WorkerGlobalScope&&"function"==typeof Xu().importScripts}class Zu{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function td(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ed(){const t=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Zu(t).toPromise()}(),e(await ed()))}))}))}async function nd(t,e,n){const i=td(t,!0).put({fbase_key:e,value:n});return new Zu(i).toPromise()}function id(t,e){const n=td(t,!0).delete(e);return new Zu(n).toPromise()}class rd{async _openDb(){return this.db||(this.db=await ed()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ku._getInstance(Qu()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Yu(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ed();return await nd(t,"__sak","1"),await id(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>nd(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=td(t,!1).get(e),i=await new Zu(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>id(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=td(t,!1).getAll();return new Zu(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}rd.type="LOCAL";const sd=rd;
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
 */function od(t){return new Promise(((e,n)=>{const i=document.createElement("script");
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
var r,s;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=fh("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function ad(t){return`__${t}${Math.floor(1e6*Math.random())}`}
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
ad("rcb"),new Sh(3e4,6e4);async function ld(t,e,n){var i;const r=await n.verify();try{let s;if(yh("string"==typeof r,t,"argument-error"),yh("recaptcha"===n.type,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){yh("enroll"===e.type,t,"internal-error");const n=await
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
function(t,e){return Oh(t,"POST","/v2/accounts/mfaEnrollment:start",Lh(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{yh("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;yh(n,t,"missing-multi-factor-info");const o=await function(t,e){return Oh(t,"POST","/v2/accounts/mfaSignIn:start",Lh(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return Oh(t,"POST","/v1/accounts:sendVerificationCode",Lh(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
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
class cd{verifyPhoneNumber(t,e){return ld(this.auth,t,er(e))}static credential(t,e){return Tu._fromVerification(t,e)}static credentialFromResult(t){const e=t;return cd.credentialFromTaggedObject(e)}static credentialFromError(t){return cd.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Tu._fromTokenResponse(e,n):null}constructor(t){this.providerId=cd.PROVIDER_ID,this.auth=du(t)}}
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
function hd(t,e){return e?wh(e):(yh(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */cd.PROVIDER_ID="phone",cd.PHONE_SIGN_IN_METHOD="phone";class ud extends yu{_getIdTokenResponse(t){return bu(t,this._buildIdpRequest())}_linkToIdToken(t,e){return bu(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return bu(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function dd(t){return Bu(t.auth,new ud(t),t.bypassAuthState)}function pd(t){const{auth:e,user:n}=t;return yh(n,e,"internal-error"),Fu(n,new ud(t),t.bypassAuthState)}async function fd(t){const{auth:e,user:n}=t;return yh(n,e,"internal-error"),Uu(n,new ud(t),t.bypassAuthState)}
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
 */class gd{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return dd;case"linkViaPopup":case"linkViaRedirect":return fd;case"reauthViaPopup":case"reauthViaRedirect":return pd;default:ph(this.auth,"internal-error")}}resolve(t){vh(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){vh(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
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
 */const md=new Sh(2e3,1e4);class yd extends gd{async executeNotNull(){const t=await this.execute();return yh(t,this.auth,"internal-error"),t}async onExecution(){vh(1===this.filter.length,"Popup operations only handle one event");const t=Ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(fh(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(fh(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yd.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(fh(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,md.get())};t()}constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,yd.currentPopupAction&&yd.currentPopupAction.cancel(),yd.currentPopupAction=this}}yd.currentPopupAction=null;
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
const _d=new Map;class vd extends gd{async execute(){let t=_d.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=Ed(e),i=wd(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}_d.set(this.auth._key(),t)}return this.bypassAuthState||_d.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}}function bd(t,e){_d.set(t._key(),e)}function wd(t){return wh(t._redirectPersistence)}function Ed(t){return Yh("pendingRedirect",t.config.apiKey,t.name)}
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
 */async function Td(t,e,n=!1){const i=du(t),r=hd(i,e),s=new vd(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}class Id{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sd(t);default:return!1}}
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
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Sd(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(fh(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cd(t))}saveEventToCache(t){this.cachedEventUids.add(Cd(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Cd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Sd({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
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
const kd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Rd=/^https?/;async function Ad(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Oh(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Nd(t))return}catch(t){}ph(t,"unauthorized-domain")}function Nd(t){const e=Eh(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Rd.test(n))return!1;if(kd.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
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
 */const Ld=new Sh(3e4,6e4);function Od(){const t=Xu().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Pd=null;function Dd(t){return Pd=Pd||function(t){return new Promise(((e,n)=>{var i,r,s;function o(){Od(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Od(),n(fh(t,"network-request-failed"))},timeout:Ld.get()})}if(null===(r=null===(i=Xu().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Xu().gapi)||void 0===s?void 0:s.load)){const e=ad("iframefcb");return Xu()[e]=()=>{gapi.load?o():n(fh(t,"network-request-failed"))},od(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Pd=null,t}))}(t),Pd}
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
 */const xd=new Sh(5e3,15e3),Md={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ud=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fd(t){const e=t.config;yh(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kh(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,i={apiKey:e.apiKey,appName:t.name,v:"9.17.1"},r=Ud.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Vi(i).slice(1)}`}
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
const Bd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class jd{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function qd(t,e,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Bd),{width:i.toString(),height:r.toString(),top:s,left:o}),c=Ii().toLowerCase();n&&(a=eu(c)?"_blank":n),Zh(c)&&(e=e||"http://localhost",l.scrollbars="yes");const h=Object.entries(l).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=Ii()){var e;return ou(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(c)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(e||"",a),new jd(null);const u=window.open(e||"",a,h);yh(u,t,"popup-blocked");try{u.focus()}catch(t){}return new jd(u)}function Hd(t,e,n,i,r,s){yh(t.config.authDomain,t,"auth-domain-config-required"),yh(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:"9.17.1",eventId:r};if(e instanceof Su){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(s||{}))o[t]=e}if(e instanceof ku){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){return t.emulator?kh(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
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
 */(t)}?${Vi(a).slice(1)}`}const $d=class{async _openPopup(t,e,n,i){var r;vh(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return qd(t,Hd(t,e,n,Eh(),i),Ju())}async _openRedirect(t,e,n,i){var r;return await this._originValidation(t),r=Hd(t,e,n,Eh(),i),Xu().location.href=r,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(vh(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await Dd(t),n=Xu().gapi;return yh(n,t,"internal-error"),e.open({where:document.body,url:Fd(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Md,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=fh(t,"network-request-failed"),s=Xu().setTimeout((()=>{i(r)}),xd.get());function o(){Xu().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}(t),n=new Id(t);return e.register("authEvent",(e=>{yh(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&e(!!r),ph(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Ad(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return lu()||tu()||ou()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gu,this._completeRedirectFn=Td,this._overrideRedirectResult=bd}};
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
class zd{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){yh(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
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
const Vd=wi("authIdTokenMaxAge")||300;let Wd=null;var Gd;Gd="Browser",Mr(new nr("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:r,authDomain:s}=n.options;return((t,n)=>{yh(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),yh(!(null==s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:r,authDomain:s,clientPlatform:Gd,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cu(Gd)},o=new uu(t,n,i);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(wh);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Mr(new nr("auth-internal",(t=>{const e=du(t.getProvider("auth").getImmediate());return new zd(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Hr("@firebase/auth","0.21.3",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Gd)),Hr("@firebase/auth","0.21.3","esm2017");
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
 */let Kd="";
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
class Jd{set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),xi(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:Di(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}constructor(t){this.domStorage_=t,this.prefix_="firebase:"}}
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
 */class Yd{set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return Bi(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
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
 */const Xd=function(t){try{if("undefined"!=typeof window&&void 0!==window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Jd(e)}}catch(t){}return new Yd},Qd=Xd("localStorage"),Zd=Xd("sessionStorage"),tp=new dr("@firebase/database"),ep=function(){let t=1;return function(){return t++}}(),np=function(t){const e=Zi(t),n=new Ki;n.update(e);const i=n.digest();return ui.encodeByteArray(i)},ip=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?e+=ip.apply(null,i):e+="object"==typeof i?xi(i):i,e+=" "}return e};let rp=null,sp=!0;const op=function(t,e){li(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(tp.logLevel=or.VERBOSE,rp=tp.log.bind(tp),e&&Zd.set("logging_enabled",!0)):"function"==typeof t?rp=t:(rp=null,Zd.remove("logging_enabled"))},ap=function(...t){if(!0===sp&&(sp=!1,null===rp&&!0===Zd.get("logging_enabled")&&op(!0)),rp){const e=ip.apply(null,t);rp(e)}},lp=function(t){return function(...e){ap(t,...e)}},cp=function(...t){const e="FIREBASE INTERNAL ERROR: "+ip(...t);tp.error(e)},hp=function(...t){const e=`FIREBASE FATAL ERROR: ${ip(...t)}`;throw tp.error(e),new Error(e)},up=function(...t){const e="FIREBASE WARNING: "+ip(...t);tp.warn(e)},dp=function(t){return"number"==typeof t&&(t!=t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},pp=function(t,e){if(t===e)return 0;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return-1;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return 1;{const n=wp(t),i=wp(e);return null!==n?null!==i?n-i==0?t.length-e.length:n-i:-1:null!==i?1:t<e?-1:1}},fp=function(t,e){return t===e?0:t<e?-1:1},gp=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xi(e))},mp=function(t){if("object"!=typeof t||null===t)return xi(t);const e=[];for(const n in t)e.push(n);e.sort();let n="{";for(let i=0;i<e.length;i++)0!==i&&(n+=","),n+=xi(e[i]),n+=":",n+=mp(t[e[i]]);return n+="}",n},yp=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function _p(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const vp=function(t){li(!dp(t),"Invalid JSON number");const e=1023;let n,i,r,s,o;0===t?(i=0,r=0,n=1/t==-1/0?1:0):(n=t<0,(t=Math.abs(t))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(t)/Math.LN2),e),i=s+e,r=Math.round(t*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(t/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let t=parseInt(l.substr(o,8),2).toString(16);1===t.length&&(t="0"+t),c+=t}return c.toLowerCase()};const bp=new RegExp("^-?(0*)\\d{1,10}$"),wp=function(t){if(bp.test(t)){const e=Number(t);if(e>=-2147483648&&e<=2147483647)return e}return null},Ep=function(t){try{t()}catch(t){setTimeout((()=>{const e=t.stack||"";throw up("Exception was thrown by user callback.",e),t}),Math.floor(0))}},Tp=function(t,e){const n=setTimeout(t,e);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
class Ip{getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise(((e,n)=>{setTimeout((()=>{this.appCheck?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then((e=>e.addTokenListener(t)))}notifyForInvalidToken(){up(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null==e?void 0:e.getImmediate({optional:!0}),this.appCheck||null==e||e.get().then((t=>this.appCheck=t))}}
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
 */class Cp{getToken(t){return this.auth_?this.auth_.getToken(t).catch((t=>t&&"auth/token-not-initialized"===t.code?(ap("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t))):new Promise(((e,n)=>{setTimeout((()=>{this.auth_?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then((e=>e.addAuthTokenListener(t)))}removeTokenChangeListener(t){this.authProvider_.get().then((e=>e.removeAuthTokenListener(t)))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',up(t)}constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((t=>this.auth_=t))}}class Sp{getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}constructor(t){this.accessToken=t}}Sp.OWNER="owner";
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
const kp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
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
class Rp{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Qd.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${e}`}constructor(t,e,n,i,r=!1,s="",o=!1,a=!1){this.secure=e,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qd.get("host:"+t)||this._host}}function Ap(t,e,n){let i;if(li("string"==typeof e,"typeof type must == string"),li("object"==typeof n,"typeof params must == object"),"websocket"===e)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if("long_polling"!==e)throw new Error("Unknown connection type: "+e);i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}(function(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams})(t)&&(n.ns=t.namespace);const r=[];return _p(n,((t,e)=>{r.push(t+"="+e)})),i+r.join("&")}
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
 */class Np{incrementCounter(t,e=1){Bi(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return gi(this.counters_)}constructor(){this.counters_={}}}
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
 */const Lp={},Op={};function Pp(t){const e=t.toString();return Lp[e]||(Lp[e]=new Np),Lp[e]}
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
class Dp{closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){for(this.pendingResponses[t]=e;this.pendingResponses[this.currentResponseNum];){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&Ep((()=>{this.onMessage_(t[e])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
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
 */class xp{open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new Dp(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(t){if(Ai()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Mp(((...t)=>{const[e,n,i,r,s]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===e)this.id=n,this.password=i;else{if("close"!==e)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)}),(()=>{this.onClosed_()}),this.urlFn);const t={start:"t"};t.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t.cb=this.scriptTagHolder.uniqueCallbackIdentifier),t.v="5",this.transportSessionId&&(t.s=this.transportSessionId),this.lastSessionId&&(t.ls=this.lastSessionId),this.applicationId&&(t.p=this.applicationId),this.appCheckToken&&(t.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&kp.test(location.hostname)&&(t.r="f");const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){xp.forceAllow_=!0}static forceDisallow(){xp.forceDisallow_=!0}static isAvailable(){return!Ai()&&(!!xp.forceAllow_||!(xp.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=xi(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=di(e),i=yp(n,1840);for(let t=0;t<i.length;t++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[t]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if(Ai())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=t,n.pw=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=xi(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}constructor(t,e,n,i,r,s,o){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=lp(t),this.stats_=Pp(e),this.urlFn=t=>(this.appCheckToken&&(t.ac=this.appCheckToken),Ap(e,"long_polling",t))}}class Mp{static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{t.contentWindow.document||ap("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){for(this.myID=t,this.myPW=e,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t.id=this.myID,t.pw=this.myPW,t.ser=this.currentSerial;let e=this.urlFn(t),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const t=this.pendingSegs.shift();n=n+"&seg"+i+"="+t.seg+"&ts"+i+"="+t.ts+"&d"+i+"="+t.d,i++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(t,(()=>{clearTimeout(i),n()}))}addTag(t,e){Ai()?this.doNodeLongPoll(t,e):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{ap("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(t){}}),Math.floor(1))}constructor(t,e,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Ai())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=ep(),window["pLPCommand"+this.uniqueCallbackIdentifier]=t,window["pRTLPCB"+this.uniqueCallbackIdentifier]=e,this.myIFrame=Mp.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(t){ap("frame writing exception"),t.stack&&ap(t.stack),ap(t)}}}}
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
 */let Up=null;"undefined"!=typeof MozWebSocket?Up=MozWebSocket:"undefined"!=typeof WebSocket&&(Up=WebSocket);class Fp{static connectionURL_(t,e,n,i,r){const s={v:"5"};return!Ai()&&"undefined"!=typeof location&&location.hostname&&kp.test(location.hostname)&&(s.r="f"),e&&(s.s=e),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),Ap(t,"websocket",s)}open(t,e){this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qd.set("previous_websocket_failure",!0);try{let t;if(Ai()){const e=this.nodeAdmin?"AdminNode":"Node";t={headers:{"User-Agent":`Firebase/5/${Kd}/${zn.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(t.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(t.proxy={origin:i})}this.mySock=new Up(this.connURL,[],t)}catch(t){this.log_("Error instantiating WebSocket.");const e=t.message||t.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){Fp.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==Up&&!Fp.forceDisallow_}static previouslyFailed(){return Qd.isInMemoryStorage||!0===Qd.get("previous_websocket_failure")}markConnectionHealthy(){Qd.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=Di(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(li(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t.data;if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=xi(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=yp(e,16384);n.length>1&&this.sendString_(String(n.length));for(let t=0;t<n.length;t++)this.sendString_(n[t])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(t){try{this.mySock.send(t)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(t,e,n,i,r,s,o){this.connId=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=lp(this.connId),this.stats_=Pp(e),this.connURL=Fp.connectionURL_(e,s,o,i,n),this.nodeAdmin=e.nodeAdmin}}Fp.responsesRequiredToBeHealthy=2,Fp.healthyTimeout=3e4;
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
class Bp{static get ALL_TRANSPORTS(){return[xp,Fp]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const e=Fp&&Fp.isAvailable();let n=e&&!Fp.previouslyFailed();if(t.webSocketOnly&&(e||up("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Fp];else{const t=this.transports_=[];for(const e of Bp.ALL_TRANSPORTS)e&&e.isAvailable()&&t.push(e);Bp.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(t){this.initTransports_(t)}}Bp.globalTransportInitialized_=!1;class jp{start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(e,n)}),Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Tp((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if("t"in t){const e=t.t;"a"===e?this.upgradeIfSecondaryHealthy_():"r"===e?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===e&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=gp("t",t),n=gp("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=gp("t",t),n=gp("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=gp("t",t);if("d"in t){const n=t.d;if("h"===e){const t=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(t.h=this.repoInfo_.host),this.onHandshake_(t)}else if("n"===e){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===e?this.onConnectionShutdown_(n):"r"===e?this.onReset_(n):"e"===e?cp("Server Error: "+n):"o"===e?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cp("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),"5"!==n&&up("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),Tp((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Tp((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qd.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(t,e,n,i,r,s,o,a,l,c){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=lp("c:"+this.id+":"),this.transportManager_=new Bp(e),this.log_("Connection created"),this.start_()}}
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
 */class qp{put(t,e,n,i){}merge(t,e,n,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
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
 */class Hp{trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const i=this.getInitialEvent(t);i&&e.apply(n,i)}off(t,e,n){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let t=0;t<i.length;t++)if(i[t].callback===e&&(!n||n===i[t].context))return void i.splice(t,1)}validateEventType_(t){li(this.allowedEvents_.find((e=>e===t)),"Unknown event: "+t)}constructor(t){this.allowedEvents_=t,this.listeners_={},li(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}}
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
 */class $p extends Hp{static getInstance(){return new $p}getInitialEvent(t){return li("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Ci()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
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
 */class zp{toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}}function Vp(){return new zp("")}function Wp(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Gp(t){return t.pieces_.length-t.pieceNum_}function Kp(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new zp(t.pieces_,e)}function Jp(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Yp(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Xp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new zp(e,0)}function Qp(t,e){const n=[];for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);if(e instanceof zp)for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new zp(n,0)}function Zp(t){return t.pieceNum_>=t.pieces_.length}function tf(t,e){const n=Wp(t),i=Wp(e);if(null===n)return e;if(n===i)return tf(Kp(t),Kp(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ef(t,e){if(Gp(t)!==Gp(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function nf(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Gp(t)>Gp(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class rf{constructor(t,e){this.errorPrefix_=e,this.parts_=Yp(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let t=0;t<this.parts_.length;t++)this.byteLength_+=tr(this.parts_[t]);sf(this)}}function sf(t){if(t.byteLength_>768)throw new Error(t.errorPrefix_+"has a key path longer than 768 bytes ("+t.byteLength_+").");if(t.parts_.length>32)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+of(t))}function of(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
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
 */class af extends Hp{static getInstance(){return new af}getInitialEvent(t){return li("visible"===t,"Unknown event type: "+t),[this.visible_]}constructor(){let t,e;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(e="visibilitychange",t="hidden"):void 0!==document.mozHidden?(e="mozvisibilitychange",t="mozHidden"):void 0!==document.msHidden?(e="msvisibilitychange",t="msHidden"):void 0!==document.webkitHidden&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,(()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))}),!1)}}
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
 */class lf extends qp{sendRequest(t,e,n){const i=++this.requestNumber_,r={r:i,a:t,b:e};this.log_(xi(r)),li(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(t){this.initConnection_();const e=new Ei,n={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:t=>{const n=t.d;"ok"===t.s?e.resolve(n):e.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),e.promise}listen(t,e,n,i){this.initConnection_();const r=t._queryIdentifier,s=t._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),li(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),li(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:e,query:t,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,(n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)}))}sendListen_(t){const e=t.query,n=e._path.toString(),i=e._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};t.tag&&(r.q=e._queryObject,r.t=t.tag),r.h=t.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;lf.warnOnListenWarnings_(s,e);(this.listens.get(n)&&this.listens.get(n).get(i))===t&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),t.onComplete&&t.onComplete(o,s))}))}static warnOnListenWarnings_(t,e){if(t&&"object"==typeof t&&Bi(t,"w")){const n=ji(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();up(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&40===t.length||Fi(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=Ui(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(e,n,(e=>{const n=e.s,i=e.d||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(t=>{const e=t.s,n=t.d||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)}))}unlisten(t,e){const n=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),li(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,t._queryObject,e)}sendUnlisten_(t,e,n,i){this.log_("Unlisten on "+t+" for "+e);const r={p:t};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,i){const r={p:e,d:n};this.log_("onDisconnect "+t,r),this.sendRequest(t,r,(t=>{i&&setTimeout((()=>{i(t.s,t.d)}),Math.floor(0))}))}put(t,e,n,i){this.putInternal("p",t,e,n,i)}merge(t,e,n,i){this.putInternal("m",t,e,n,i)}putInternal(t,e,n,i,r){this.initConnection_();const s={p:e,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:t,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,(n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,(t=>{if("ok"!==t.s){const e=t.d;this.log_("reportStats","Error sending stats: "+e)}}))}}onDataMessage_(t){if("r"in t){this.log_("from server: "+xi(t));const e=t.r,n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e.p,e.d,!1,e.t):"m"===t?this.onDataUpdate_(e.p,e.d,!0,e.t):"c"===t?this.onListenRevoked_(e.p,e.q):"ac"===t?this.onAuthRevoked_(e.s,e.d):"apc"===t?this.onAppCheckRevoked_(e.s,e.d):"sd"===t?this.onSecurityDebugPacket_(e):cp("Unrecognized action received from server: "+xi(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){li(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+lf.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(t){li(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(t)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?ap("getToken() completed but was canceled"):(ap("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new jp(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,(t=>{up(t+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(t){this.log_("Failed to get token: "+t),s||(this.repoInfo_.nodeAdmin&&up(t),a())}}}interrupt(t){ap("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){ap("Resuming connection for reason: "+t),delete this.interruptReasons_[t],qi(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map((t=>mp(t))).join("$"):"default";const i=this.removeListen_(t,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,e){const n=new zp(t).toString();let i;if(this.listens.has(n)){const t=this.listens.get(n);i=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(t,e){ap("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){ap("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";Ai()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+Kd.replace(/\./g,"-")]=1,Ci()?t["framework.cordova"]=1:ki()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=$p.getInstance().currentlyOnline();return qi(this.interruptReasons_)&&t}constructor(t,e,n,i,r,s,o,a){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=lf.nextPersistentConnectionId_++,this.log_=lp("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ai())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");af.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&$p.getInstance().on("online",this.onOnline_,this)}}lf.nextPersistentConnectionId_=0,lf.nextConnectionId_=0;
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
class cf{static Wrap(t,e){return new cf(t,e)}constructor(t,e){this.name=t,this.node=e}}
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
 */class hf{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new cf("[MIN_NAME]",t),i=new cf("[MIN_NAME]",e);return 0!==this.compare(n,i)}minPost(){return cf.MIN}}
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
 */let uf;class df extends hf{static get __EMPTY_NODE(){return uf}static set __EMPTY_NODE(t){uf=t}compare(t,e){return pp(t.name,e.name)}isDefinedOn(t){throw ci("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return cf.MIN}maxPost(){return new cf("[MAX_NAME]",uf)}makePost(t,e){return li("string"==typeof t,"KeyIndex indexValue must always be a string."),new cf(t,uf)}toString(){return".key"}}const pf=new df;
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
 */class ff{getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}constructor(t,e,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,i&&(s*=-1),s<0)t=this.isReverse_?t.left:t.right;else{if(0===s){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}}class gf{copy(t,e,n,i,r){return new gf(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return mf.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,i;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return mf.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,gf.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,gf.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:gf.RED,this.left=null!=i?i:mf.EMPTY_NODE,this.right=null!=r?r:mf.EMPTY_NODE}}gf.RED=!0,gf.BLACK=!1;class mf{insert(t,e){return new mf(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,gf.BLACK,null,null))}remove(t){return new mf(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,gf.BLACK,null,null))}get(t){let e,n=this.root_;for(;!n.isEmpty();){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,i=null;for(;!n.isEmpty();){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}e<0?n=n.left:e>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new ff(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new ff(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new ff(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new ff(this.root_,null,this.comparator_,!0,t)}constructor(t,e=mf.EMPTY_NODE){this.comparator_=t,this.root_=e}}
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
function yf(t,e){return pp(t.name,e.name)}function _f(t,e){return pp(t,e)}
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
 */let vf;mf.EMPTY_NODE=new class{copy(t,e,n,i,r){return this}insert(t,e,n){return new gf(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const bf=function(t){return"number"==typeof t?"number:"+vp(t):"string:"+t},wf=function(t){if(t.isLeafNode()){const e=t.val();li("string"==typeof e||"number"==typeof e||"object"==typeof e&&Bi(e,".sv"),"Priority must be a string or number.")}else li(t===vf||t.isEmpty(),"priority of unexpected type.");li(t===vf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Ef,Tf,If;class Cf{static set __childrenNodeConstructor(t){Ef=t}static get __childrenNodeConstructor(){return Ef}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Cf(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:Cf.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Zp(t)?this:".priority"===Wp(t)?this.priorityNode_:Cf.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:Cf.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=Wp(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:(li(".priority"!==n||1===Gp(t),".priority must be the last token in a path"),this.updateImmediateChild(n,Cf.__childrenNodeConstructor.EMPTY_NODE.updateChild(Kp(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+bf(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?vp(this.value_):this.value_,this.lazyHash_=np(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Cf.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Cf.__childrenNodeConstructor?-1:(li(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,i=Cf.VALUE_TYPE_ORDER.indexOf(e),r=Cf.VALUE_TYPE_ORDER.indexOf(n);return li(i>=0,"Unknown leaf type: "+e),li(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}constructor(t,e=Cf.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,li(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),wf(this.priorityNode_)}}Cf.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Sf=new class extends hf{compare(t,e){const n=t.node.getPriority(),i=e.node.getPriority(),r=n.compareTo(i);return 0===r?pp(t.name,e.name):r}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return cf.MIN}maxPost(){return new cf("[MAX_NAME]",new Cf("[PRIORITY-POST]",If))}makePost(t,e){const n=Tf(t);return new cf(e,new Cf("[PRIORITY-POST]",n))}toString(){return".priority"}},kf=Math.log(2);
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
 */class Rf{nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}constructor(t){var e;this.count=(e=t+1,parseInt(Math.log(e)/kf,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=t+1&n}}const Af=function(t,e,n,i){t.sort(e);const r=function(e,i){const s=i-e;let o,a;if(0===s)return null;if(1===s)return o=t[e],a=n?n(o):o,new gf(a,o.node,gf.BLACK,null,null);{const l=parseInt(s/2,10)+e,c=r(e,l),h=r(l+1,i);return o=t[l],a=n?n(o):o,new gf(a,o.node,gf.BLACK,c,h)}},s=function(e){let i=null,s=null,o=t.length;const a=function(e,i){const s=o-e,a=o;o-=e;const c=r(s+1,a),h=t[s],u=n?n(h):h;l(new gf(u,h.node,i,null,c))},l=function(t){i?(i.left=t,i=t):(s=t,i=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),i=Math.pow(2,e.count-(t+1));n?a(i,gf.BLACK):(a(i,gf.BLACK),a(i,gf.RED))}return s}(new Rf(t.length));return new mf(i||e,s)};
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
 */let Nf;const Lf={};class Of{static get Default(){return li(Lf&&Sf,"ChildrenNode.ts has not been loaded"),Nf=Nf||new Of({".priority":Lf},{".priority":Sf}),Nf}get(t){const e=ji(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof mf?e:null}hasIndex(t){return Bi(this.indexSet_,t.toString())}addIndex(t,e){li(t!==pf,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=e.getIterator(cf.Wrap);let s,o=r.getNext();for(;o;)i=i||t.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?Af(n,t.getCompare()):Lf;const a=t.toString(),l=Object.assign({},this.indexSet_);l[a]=t;const c=Object.assign({},this.indexes_);return c[a]=s,new Of(c,l)}addToIndexes(t,e){const n=Hi(this.indexes_,((n,i)=>{const r=ji(this.indexSet_,i);if(li(r,"Missing index implementation for "+i),n===Lf){if(r.isDefinedOn(t.node)){const n=[],i=e.getIterator(cf.Wrap);let s=i.getNext();for(;s;)s.name!==t.name&&n.push(s),s=i.getNext();return n.push(t),Af(n,r.getCompare())}return Lf}{const i=e.get(t.name);let r=n;return i&&(r=r.remove(new cf(t.name,i))),r.insert(t,t.node)}}));return new Of(n,this.indexSet_)}removeFromIndexes(t,e){const n=Hi(this.indexes_,(n=>{if(n===Lf)return n;{const i=e.get(t.name);return i?n.remove(new cf(t.name,i)):n}}));return new Of(n,this.indexSet_)}constructor(t,e){this.indexes_=t,this.indexSet_=e}}
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
 */let Pf;class Df{static get EMPTY_NODE(){return Pf||(Pf=new Df(new mf(_f),null,Of.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pf}updatePriority(t){return this.children_.isEmpty()?this:new Df(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?Pf:e}}getChild(t){const e=Wp(t);return null===e?this:this.getImmediateChild(e).getChild(Kp(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if(li(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new cf(t,e);let i,r;e.isEmpty()?(i=this.children_.remove(t),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(t,e),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?Pf:this.priorityNode_;return new Df(i,s,r)}}updateChild(t,e){const n=Wp(t);if(null===n)return e;{li(".priority"!==Wp(t)||1===Gp(t),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Kp(t),e);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,i=0,r=!0;if(this.forEachChild(Sf,((s,o)=>{e[s]=o.val(t),n++,r&&Df.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!t&&r&&i<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+bf(this.getPriority().val())+":"),this.forEachChild(Sf,((e,n)=>{const i=n.hash();""!==i&&(t+=":"+e+":"+i)})),this.lazyHash_=""===t?"":np(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new cf(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new cf(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new cf(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal((t=>e(t.name,t.node))):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,(t=>t));{const n=this.children_.getIteratorFrom(t.name,cf.Wrap);let i=n.peek();for(;null!=i&&e.compare(i,t)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,(t=>t));{const n=this.children_.getReverseIteratorFrom(t.name,cf.Wrap);let i=n.peek();for(;null!=i&&e.compare(i,t)>0;)n.getNext(),i=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===xf?-1:0}withIndex(t){if(t===pf||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new Df(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===pf||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(Sf),n=e.getIterator(Sf);let i=t.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=t.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(t){return t===pf?null:this.indexMap_.get(t.toString())}constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&wf(this.priorityNode_),this.children_.isEmpty()&&li(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}Df.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const xf=new class extends Df{compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Df.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new mf(_f),Df.EMPTY_NODE,Of.Default)}};Object.defineProperties(cf,{MIN:{value:new cf("[MIN_NAME]",Df.EMPTY_NODE)},MAX:{value:new cf("[MAX_NAME]",xf)}}),df.__EMPTY_NODE=Df.EMPTY_NODE,Cf.__childrenNodeConstructor=Df,vf=xf,function(t){If=t}(xf);function Mf(t,e=null){if(null===t)return Df.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(e=t[".priority"]),li(null===e||"string"==typeof e||"number"==typeof e||"object"==typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){return new Cf(t,Mf(e))}if(t instanceof Array){let n=Df.EMPTY_NODE;return _p(t,((e,i)=>{if(Bi(t,e)&&"."!==e.substring(0,1)){const t=Mf(i);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}})),n.updatePriority(Mf(e))}{const n=[];let i=!1;if(_p(t,((t,e)=>{if("."!==t.substring(0,1)){const r=Mf(e);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new cf(t,r)))}})),0===n.length)return Df.EMPTY_NODE;const r=Af(n,yf,(t=>t.name),_f);if(i){const t=Af(n,Sf.getCompare());return new Df(r,Mf(e),new Of({".priority":t},{".priority":Sf}))}return new Df(r,Mf(e),Of.Default)}}!function(t){Tf=t}(Mf);
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
class Uf extends hf{extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),i=this.extractChild(e.node),r=n.compareTo(i);return 0===r?pp(t.name,e.name):r}makePost(t,e){const n=Mf(t),i=Df.EMPTY_NODE.updateChild(this.indexPath_,n);return new cf(e,i)}maxPost(){const t=Df.EMPTY_NODE.updateChild(this.indexPath_,xf);return new cf("[MAX_NAME]",t)}toString(){return Yp(this.indexPath_,0).join("/")}constructor(t){super(),this.indexPath_=t,li(!Zp(t)&&".priority"!==Wp(t),"Can't create PathIndex with empty path or .priority key")}}
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
 */const Ff=new class extends hf{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?pp(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return cf.MIN}maxPost(){return cf.MAX}makePost(t,e){const n=Mf(t);return new cf(e,n)}toString(){return".value"}};
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
 */function Bf(t){return{type:"value",snapshotNode:t}}function jf(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function qf(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Hf(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}
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
class $f{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return li(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return li(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return li(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return li(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return li(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Sf}copy(){const t=new $f;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Sf}}function zf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Sf?n="$priority":t.index_===Ff?n="$value":t.index_===pf?n="$key":(li(t.index_ instanceof Uf,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xi(n),t.startSet_){const n=t.startAfterSet_?"startAfter":"startAt";e[n]=xi(t.indexStartValue_),t.startNameSet_&&(e[n]+=","+xi(t.indexStartName_))}if(t.endSet_){const n=t.endBeforeSet_?"endBefore":"endAt";e[n]=xi(t.indexEndValue_),t.endNameSet_&&(e[n]+=","+xi(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Vf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e.vf=n}return t.index_!==Sf&&(e.i=t.index_.toString()),e}
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
 */class Wf extends qp{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:(li(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,i){const r=t._path.toString();this.log_("Listen called for "+r+" "+t._queryIdentifier);const s=Wf.getListenId_(t,n),o={};this.listens_[s]=o;const a=zf(t._queryParams);this.restRequest_(r+".json",a,((t,e)=>{let a=e;if(404===t&&(a=null,t=null),null===t&&this.onDataUpdate_(r,a,!1,n),ji(this.listens_,s)===o){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",i(e,null)}}))}unlisten(t,e){const n=Wf.getListenId_(t,e);delete this.listens_[n]}get(t){const e=zf(t._queryParams),n=t._path.toString(),i=new Ei;return this.restRequest_(n+".json",e,((t,e)=>{let r=e;404===t&&(r=null,t=null),null===t?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(e.auth=i.accessToken),r&&r.token&&(e.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+Vi(e);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=Di(o.responseText)}catch(t){up("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&up("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}constructor(t,e,n,i){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=lp("p:rest:"),this.listens_={}}}
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
 */class Gf{getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}constructor(){this.rootNode_=Df.EMPTY_NODE}}
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
 */function Kf(){return{value:null,children:new Map}}function Jf(t,e,n){if(Zp(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const i=Wp(e);t.children.has(i)||t.children.set(i,Kf());Jf(t.children.get(i),e=Kp(e),n)}}function Yf(t,e,n){null!==t.value?n(e,t.value):function(t,e){t.children.forEach(((t,n)=>{e(n,t)}))}
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
 */(t,((t,i)=>{Yf(i,new zp(e.toString()+"/"+t),n)}))}class Xf{get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&_p(this.last_,((t,n)=>{e[t]=e[t]-n})),this.last_=t,e}constructor(t){this.collection_=t,this.last_=null}}
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
 */class Qf{reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;_p(t,((t,i)=>{i>0&&Bi(this.statsToReport_,t)&&(e[t]=i,n=!0)})),n&&this.server_.reportStats(e),Tp(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new Xf(t);const n=1e4+2e4*Math.random();Tp(this.reportStats_.bind(this),Math.floor(n))}}
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
 */var Zf,tg;function eg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
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
 */(tg=Zf||(Zf={}))[tg.OVERWRITE=0]="OVERWRITE",tg[tg.MERGE=1]="MERGE",tg[tg.ACK_USER_WRITE=2]="ACK_USER_WRITE",tg[tg.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class ng{operationForChild(t){if(Zp(this.path)){if(null!=this.affectedTree.value)return li(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new zp(t));return new ng(Vp(),e,this.revert)}}return li(Wp(this.path)===t,"operationForChild called for unrelated child."),new ng(Kp(this.path),this.affectedTree,this.revert)}constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Zf.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
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
class ig{operationForChild(t){return Zp(this.path)?new ig(this.source,Vp(),this.snap.getImmediateChild(t)):new ig(this.source,Kp(this.path),this.snap)}constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Zf.OVERWRITE}}
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
 */class rg{operationForChild(t){if(Zp(this.path)){const e=this.children.subtree(new zp(t));return e.isEmpty()?null:e.value?new ig(this.source,Vp(),e.value):new rg(this.source,Vp(),e)}return li(Wp(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new rg(this.source,Kp(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Zf.MERGE}}
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
 */class sg{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Zp(t))return this.isFullyInitialized()&&!this.filtered_;const e=Wp(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}}
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
 */function og(t,e,n,i,r,s){const o=i.filter((t=>t.type===n));o.sort(((e,n)=>function(t,e,n){if(null==e.childName||null==n.childName)throw ci("Should only compare child_ events.");const i=new cf(e.childName,e.snapshotNode),r=new cf(n.childName,n.snapshotNode);return t.index_.compare(i,r)}
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
 */(t,e,n))),o.forEach((n=>{const i=function(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}(t,n,s);r.forEach((r=>{r.respondsTo(n.type)&&e.push(r.createEvent(i,t.query_))}))}))}function ag(t,e){return{eventCache:t,serverCache:e}}function lg(t,e,n,i){return ag(new sg(e,n,i),t.serverCache)}function cg(t,e,n,i){return ag(t.eventCache,new sg(e,n,i))}function hg(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ug(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
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
 */let dg;class pg{static fromObject(t){let e=new pg(null);return _p(t,((t,n)=>{e=e.set(new zp(t),n)})),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:Vp(),value:this.value};if(Zp(t))return null;{const n=Wp(t),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(Kp(t),e);if(null!=r){return{path:Qp(new zp(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,(()=>!0))}subtree(t){if(Zp(t))return this;{const e=Wp(t),n=this.children.get(e);return null!==n?n.subtree(Kp(t)):new pg(null)}}set(t,e){if(Zp(t))return new pg(e,this.children);{const n=Wp(t),i=(this.children.get(n)||new pg(null)).set(Kp(t),e),r=this.children.insert(n,i);return new pg(this.value,r)}}remove(t){if(Zp(t))return this.children.isEmpty()?new pg(null):new pg(null,this.children);{const e=Wp(t),n=this.children.get(e);if(n){const i=n.remove(Kp(t));let r;return r=i.isEmpty()?this.children.remove(e):this.children.insert(e,i),null===this.value&&r.isEmpty()?new pg(null):new pg(this.value,r)}return this}}get(t){if(Zp(t))return this.value;{const e=Wp(t),n=this.children.get(e);return n?n.get(Kp(t)):null}}setTree(t,e){if(Zp(t))return e;{const n=Wp(t),i=(this.children.get(n)||new pg(null)).setTree(Kp(t),e);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new pg(this.value,r)}}fold(t){return this.fold_(Vp(),t)}fold_(t,e){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(Qp(t,i),e)})),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,Vp(),e)}findOnPath_(t,e,n){const i=!!this.value&&n(e,this.value);if(i)return i;if(Zp(t))return null;{const i=Wp(t),r=this.children.get(i);return r?r.findOnPath_(Kp(t),Qp(e,i),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,Vp(),e)}foreachOnPath_(t,e,n){if(Zp(t))return this;{this.value&&n(e,this.value);const i=Wp(t),r=this.children.get(i);return r?r.foreachOnPath_(Kp(t),Qp(e,i),n):new pg(null)}}foreach(t){this.foreach_(Vp(),t)}foreach_(t,e){this.children.inorderTraversal(((n,i)=>{i.foreach_(Qp(t,n),e)})),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal(((e,n)=>{n.value&&t(e,n.value)}))}constructor(t,e=(()=>(dg||(dg=new mf(fp)),dg))()){this.value=t,this.children=e}}
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
 */class fg{static empty(){return new fg(new pg(null))}constructor(t){this.writeTree_=t}}function gg(t,e,n){if(Zp(e))return new fg(new pg(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(null!=i){const r=i.path;let s=i.value;const o=tf(r,e);return s=s.updateChild(o,n),new fg(t.writeTree_.set(r,s))}{const i=new pg(n),r=t.writeTree_.setTree(e,i);return new fg(r)}}}function mg(t,e,n){let i=t;return _p(n,((t,n)=>{i=gg(i,Qp(e,t),n)})),i}function yg(t,e){if(Zp(e))return fg.empty();{const n=t.writeTree_.setTree(e,new pg(null));return new fg(n)}}function _g(t,e){return null!=vg(t,e)}function vg(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(tf(n.path,e)):null}function bg(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Sf,((t,n)=>{e.push(new cf(t,n))})):t.writeTree_.children.inorderTraversal(((t,n)=>{null!=n.value&&e.push(new cf(t,n.value))})),e}function wg(t,e){if(Zp(e))return t;{const n=vg(t,e);return new fg(null!=n?new pg(n):t.writeTree_.subtree(e))}}function Eg(t){return t.writeTree_.isEmpty()}function Tg(t,e){return Ig(Vp(),t.writeTree_,e)}function Ig(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal(((e,r)=>{".priority"===e?(li(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Ig(Qp(t,e),r,n)})),n.getChild(t).isEmpty()||null===i||(n=n.updateChild(Qp(t,".priority"),i)),n}}
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
 */function Cg(t,e){return Fg(e,t)}function Sg(t,e){const n=t.allWrites.findIndex((t=>t.writeId===e));li(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const e=t.allWrites[o];e.visible&&(o>=n&&kg(e,i.path)?r=!1:nf(i.path,e.path)&&(s=!0)),o--}if(r){if(s)return function(t){t.visibleWrites=Ag(t.allWrites,Rg,Vp()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}(t),!0;if(i.snap)t.visibleWrites=yg(t.visibleWrites,i.path);else{_p(i.children,(e=>{t.visibleWrites=yg(t.visibleWrites,Qp(i.path,e))}))}return!0}return!1}function kg(t,e){if(t.snap)return nf(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nf(Qp(t.path,n),e))return!0;return!1}function Rg(t){return t.visible}function Ag(t,e,n){let i=fg.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const t=s.path;let e;if(s.snap)nf(n,t)?(e=tf(n,t),i=gg(i,e,s.snap)):nf(t,n)&&(e=tf(t,n),i=gg(i,Vp(),s.snap.getChild(e)));else{if(!s.children)throw ci("WriteRecord should have .snap or .children");if(nf(n,t))e=tf(n,t),i=mg(i,e,s.children);else if(nf(t,n))if(e=tf(t,n),Zp(e))i=mg(i,Vp(),s.children);else{const t=ji(s.children,Wp(e));if(t){const n=t.getChild(Kp(e));i=gg(i,Vp(),n)}}}}}return i}function Ng(t,e,n,i,r){if(i||r){const s=wg(t.visibleWrites,e);if(!r&&Eg(s))return n;if(r||null!=n||_g(s,Vp())){const s=function(t){return(t.visible||r)&&(!i||!~i.indexOf(t.writeId))&&(nf(t.path,e)||nf(e,t.path))};return Tg(Ag(t.allWrites,s,e),n||Df.EMPTY_NODE)}return null}{const i=vg(t.visibleWrites,e);if(null!=i)return i;{const i=wg(t.visibleWrites,e);if(Eg(i))return n;if(null!=n||_g(i,Vp())){return Tg(i,n||Df.EMPTY_NODE)}return null}}}function Lg(t,e,n,i){return Ng(t.writeTree,t.treePath,e,n,i)}function Og(t,e){return function(t,e,n){let i=Df.EMPTY_NODE;const r=vg(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Sf,((t,e)=>{i=i.updateImmediateChild(t,e)})),i;if(n){const r=wg(t.visibleWrites,e);return n.forEachChild(Sf,((t,e)=>{const n=Tg(wg(r,new zp(t)),e);i=i.updateImmediateChild(t,n)})),bg(r).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}return bg(wg(t.visibleWrites,e)).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}(t.writeTree,t.treePath,e)}function Pg(t,e,n,i){return function(t,e,n,i,r){li(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Qp(e,n);if(_g(t.visibleWrites,s))return null;{const e=wg(t.visibleWrites,s);return Eg(e)?r.getChild(n):Tg(e,r.getChild(n))}}(t.writeTree,t.treePath,e,n,i)}function Dg(t,e){return function(t,e){return vg(t.visibleWrites,e)}(t.writeTree,Qp(t.treePath,e))}function xg(t,e,n,i,r,s){return function(t,e,n,i,r,s,o){let a;const l=wg(t.visibleWrites,e),c=vg(l,Vp());if(null!=c)a=c;else{if(null==n)return[];a=Tg(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&t.length<r;)0!==e(l,i)&&t.push(l),l=n.getNext();return t}}(t.writeTree,t.treePath,e,n,i,r,s)}function Mg(t,e,n){return function(t,e,n,i){const r=Qp(e,n),s=vg(t.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return Tg(wg(t.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(t.writeTree,t.treePath,e,n)}function Ug(t,e){return Fg(Qp(t.treePath,e),t.writeTree)}function Fg(t,e){return{treePath:t,writeTree:e}}
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
 */class Bg{trackChildChange(t){const e=t.type,n=t.childName;li("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),li(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===e&&"child_removed"===r)this.changeMap.set(n,Hf(n,t.snapshotNode,i.snapshotNode));else if("child_removed"===e&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===r)this.changeMap.set(n,qf(n,i.oldSnap));else if("child_changed"===e&&"child_added"===r)this.changeMap.set(n,jf(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==r)throw ci("Illegal combination of changes: "+t+" occurred after "+i);this.changeMap.set(n,Hf(n,t.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
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
 */const jg=new class{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}};class qg{getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new sg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Mg(this.writes_,t,e)}}getChildAfterChild(t,e,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ug(this.viewCache_),r=xg(this.writes_,i,e,1,n,t);return 0===r.length?null:r[0]}constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}}
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
 */function Hg(t,e,n,i,r){const s=new Bg;let o,a;if(n.type===Zf.OVERWRITE){const l=n;l.source.fromUser?o=Vg(t,e,l.path,l.snap,i,r,s):(li(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!Zp(l.path),o=zg(t,e,l.path,l.snap,i,r,a,s))}else if(n.type===Zf.MERGE){const l=n;l.source.fromUser?o=function(t,e,n,i,r,s,o){let a=e;return i.foreach(((i,l)=>{const c=Qp(n,i);Wg(e,Wp(c))&&(a=Vg(t,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=Qp(n,i);Wg(e,Wp(c))||(a=Vg(t,a,c,l,r,s,o))})),a}(t,e,l.path,l.children,i,r,s):(li(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Kg(t,e,l.path,l.children,i,r,a,s))}else if(n.type===Zf.ACK_USER_WRITE){const a=n;o=a.revert?function(t,e,n,i,r,s){let o;if(null!=Dg(i,n))return e;{const a=new qg(i,e,r),l=e.eventCache.getNode();let c;if(Zp(n)||".priority"===Wp(n)){let n;if(e.serverCache.isFullyInitialized())n=Lg(i,ug(e));else{const t=e.serverCache.getNode();li(t instanceof Df,"serverChildren would be complete if leaf node"),n=Og(i,t)}c=t.filter.updateFullNode(l,n,s)}else{const r=Wp(n);let h=Mg(i,r,e.serverCache);null==h&&e.serverCache.isCompleteForChild(r)&&(h=l.getImmediateChild(r)),c=null!=h?t.filter.updateChild(l,r,h,Kp(n),a,s):e.eventCache.getNode().hasChild(r)?t.filter.updateChild(l,r,Df.EMPTY_NODE,Kp(n),a,s):l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Lg(i,ug(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||null!=Dg(i,Vp()),lg(e,c,o,t.filter.filtersNodes())}}
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
 */(t,e,a.path,i,r,s):function(t,e,n,i,r,s,o){if(null!=Dg(r,n))return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(null!=i.value){if(Zp(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return zg(t,e,n,l.getNode().getChild(n),r,s,a,o);if(Zp(n)){let i=new pg(null);return l.getNode().forEachChild(pf,((t,e)=>{i=i.set(new zp(t),e)})),Kg(t,e,n,i,r,s,a,o)}return e}{let c=new pg(null);return i.foreach(((t,e)=>{const i=Qp(n,t);l.isCompleteForPath(i)&&(c=c.set(t,l.getNode().getChild(i)))})),Kg(t,e,n,c,r,s,a,o)}}(t,e,a.path,a.affectedTree,i,r,s)}else{if(n.type!==Zf.LISTEN_COMPLETE)throw ci("Unknown operation type: "+n.type);o=function(t,e,n,i,r){const s=e.serverCache,o=cg(e,s.getNode(),s.isFullyInitialized()||Zp(n),s.isFiltered());return $g(t,o,n,i,jg,r)}(t,e,n.path,i,s)}const l=s.getChanges();return function(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=hg(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Bf(hg(e)))}}(e,o,l),{viewCache:o,changes:l}}function $g(t,e,n,i,r,s){const o=e.eventCache;if(null!=Dg(i,n))return e;{let a,l;if(Zp(n))if(li(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=ug(e),r=Og(i,n instanceof Df?n:Df.EMPTY_NODE);a=t.filter.updateFullNode(e.eventCache.getNode(),r,s)}else{const n=Lg(i,ug(e));a=t.filter.updateFullNode(e.eventCache.getNode(),n,s)}else{const c=Wp(n);if(".priority"===c){li(1===Gp(n),"Can't have a priority with additional path components");const r=o.getNode();l=e.serverCache.getNode();const s=Pg(i,n,r,l);a=null!=s?t.filter.updatePriority(r,s):o.getNode()}else{const h=Kp(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const t=Pg(i,n,o.getNode(),l);u=null!=t?o.getNode().getImmediateChild(c).updateChild(h,t):o.getNode().getImmediateChild(c)}else u=Mg(i,c,e.serverCache);a=null!=u?t.filter.updateChild(o.getNode(),c,u,h,r,s):o.getNode()}}return lg(e,a,o.isFullyInitialized()||Zp(n),t.filter.filtersNodes())}}function zg(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(Zp(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const t=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),t,null)}else{const t=Wp(n);if(!l.isCompleteForPath(n)&&Gp(n)>1)return e;const r=Kp(n),s=l.getNode().getImmediateChild(t).updateChild(r,i);c=".priority"===t?h.updatePriority(l.getNode(),s):h.updateChild(l.getNode(),t,s,r,jg,null)}const u=cg(e,c,l.isFullyInitialized()||Zp(n),h.filtersNodes());return $g(t,u,n,r,new qg(r,u,s),a)}function Vg(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const h=new qg(r,e,s);if(Zp(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=lg(e,c,!0,t.filter.filtersNodes());else{const r=Wp(n);if(".priority"===r)c=t.filter.updatePriority(e.eventCache.getNode(),i),l=lg(e,c,a.isFullyInitialized(),a.isFiltered());else{const s=Kp(n),c=a.getNode().getImmediateChild(r);let u;if(Zp(s))u=i;else{const t=h.getCompleteChild(r);u=null!=t?".priority"===Jp(s)&&t.getChild(Xp(s)).isEmpty()?t:t.updateChild(s,i):Df.EMPTY_NODE}if(c.equals(u))l=e;else{l=lg(e,t.filter.updateChild(a.getNode(),r,u,s,h,o),a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Wg(t,e){return t.eventCache.isCompleteForChild(e)}function Gg(t,e,n){return n.foreach(((t,n)=>{e=e.updateChild(t,n)})),e}function Kg(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l,c=e;l=Zp(n)?i:new pg(null).setTree(n,i);const h=e.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=Gg(0,e.serverCache.getNode().getImmediateChild(n),i);c=zg(t,c,new zp(n),l,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!e.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=Gg(0,e.serverCache.getNode().getImmediateChild(n),i);c=zg(t,c,new zp(n),l,r,s,o,a)}})),c}function Jg(t,e){const n=ug(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Zp(e)&&!n.getImmediateChild(Wp(e)).isEmpty())?n.getChild(e):null}function Yg(t,e,n,i){e.type===Zf.MERGE&&null!==e.source.queryId&&(li(ug(t.viewCache_),"We should always have a full cache before handling merges"),li(hg(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=Hg(t.processor_,r,e,n,i);var o,a;return o=t.processor_,a=s.viewCache,li(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),li(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),li(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Xg(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Xg(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return function(t,e,n,i){const r=[],s=[];return e.forEach((e=>{var n;
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
 */"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&s.push((n=e.childName,{type:"child_moved",snapshotNode:e.snapshotNode,childName:n}))})),og(t,r,"child_removed",e,i,n),og(t,r,"child_added",e,i,n),og(t,r,"child_moved",s,i,n),og(t,r,"child_changed",e,i,n),og(t,r,"value",e,i,n),r}(t.eventGenerator_,e,n,r)}
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
 */let Qg,Zg;function tm(t,e,n,i){const r=e.source.queryId;if(null!==r){const s=t.views.get(r);return li(null!=s,"SyncTree gave us an op for an invalid query."),Yg(s,e,n,i)}{let r=[];for(const s of t.views.values())r=r.concat(Yg(s,e,n,i));return r}}function em(t,e){let n=null;for(const i of t.views.values())n=n||Jg(i,e);return n}class nm{constructor(t){this.listenProvider_=t,this.syncPointTree_=new pg(null),this.pendingWriteTree_={visibleWrites:fg.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function im(t,e,n,i,r){return function(t,e,n,i,r){li(i>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=gg(t.visibleWrites,e,n)),t.lastWriteId=i}(t.pendingWriteTree_,e,n,i,r),r?lm(t,new ig({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},e,n)):[]}function rm(t,e,n=!1){const i=function(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}(t.pendingWriteTree_,e);if(Sg(t.pendingWriteTree_,e)){let e=new pg(null);return null!=i.snap?e=e.set(Vp(),!0):_p(i.children,(t=>{e=e.set(new zp(t),!0)})),lm(t,new ng(i.path,e,n))}return[]}function sm(t,e,n){return lm(t,new ig({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,n))}function om(t,e,n,i){const r=um(t,i);if(null!=r){const i=dm(r),s=i.path,o=i.queryId,a=tf(s,e);return pm(t,s,new ig(eg(o),a,n))}return[]}function am(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,((t,n)=>{const i=em(n,tf(t,e));if(i)return i}));return Ng(i,e,r,n,!0)}function lm(t,e){return cm(e,t.syncPointTree_,null,Cg(t.pendingWriteTree_,Vp()))}function cm(t,e,n,i){if(Zp(t.path))return hm(t,e,n,i);{const r=e.get(Vp());null==n&&null!=r&&(n=em(r,Vp()));let s=[];const o=Wp(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const t=n?n.getImmediateChild(o):null,e=Ug(i,o);s=s.concat(cm(a,l,t,e))}return r&&(s=s.concat(tm(r,t,i,n))),s}}function hm(t,e,n,i){const r=e.get(Vp());null==n&&null!=r&&(n=em(r,Vp()));let s=[];return e.children.inorderTraversal(((e,r)=>{const o=n?n.getImmediateChild(e):null,a=Ug(i,e),l=t.operationForChild(e);l&&(s=s.concat(hm(l,r,o,a)))})),r&&(s=s.concat(tm(r,t,i,n))),s}function um(t,e){return t.tagToQueryMap.get(e)}function dm(t){const e=t.indexOf("$");return li(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new zp(t.substr(0,e))}}function pm(t,e,n){const i=t.syncPointTree_.get(e);li(i,"Missing sync point for query tag that we're tracking");return tm(i,n,Cg(t.pendingWriteTree_,e),null)}
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
class fm{getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new fm(e)}node(){return this.node_}constructor(t){this.node_=t}}class gm{getImmediateChild(t){const e=Qp(this.path_,t);return new gm(this.syncTree_,e)}node(){return am(this.syncTree_,this.path_)}constructor(t,e){this.syncTree_=t,this.path_=e}}const mm=function(t,e,n){return t&&"object"==typeof t?(li(".sv"in t,"Unexpected leaf node or priority contents"),"string"==typeof t[".sv"]?ym(t[".sv"],e,n):"object"==typeof t[".sv"]?_m(t[".sv"],e):void li(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},ym=function(t,e,n){if("timestamp"===t)return n.timestamp;li(!1,"Unexpected server value: "+t)},_m=function(t,e,n){t.hasOwnProperty("increment")||li(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;"number"!=typeof i&&li(!1,"Unexpected increment value: "+i);const r=e.node();if(li(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},vm=function(t,e,n,i){return wm(e,new gm(n,t),i)},bm=function(t,e,n){return wm(t,new fm(e),n)};function wm(t,e,n){const i=t.getPriority().val(),r=mm(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const i=t,s=mm(i.getValue(),e,n);return s!==i.getValue()||r!==i.getPriority().val()?new Cf(s,Mf(r)):t}{const i=t;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new Cf(r))),i.forEachChild(Sf,((t,i)=>{const r=wm(i,e.getImmediateChild(t),n);r!==i&&(s=s.updateImmediateChild(t,r))})),s}}
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
 */class Em{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function Tm(t,e){let n=e instanceof zp?e:new zp(e),i=t,r=Wp(n);for(;null!==r;){const t=ji(i.node.children,r)||{children:{},childCount:0};i=new Em(r,i,t),n=Kp(n),r=Wp(n)}return i}function Im(t){return t.node.value}function Cm(t,e){t.node.value=e,Nm(t)}function Sm(t){return t.node.childCount>0}function km(t,e){_p(t.node.children,((n,i)=>{e(new Em(n,t,i))}))}function Rm(t,e,n,i){n&&!i&&e(t),km(t,(t=>{Rm(t,e,!0,i)})),n&&i&&e(t)}function Am(t){return new zp(null===t.parent?t.name:Am(t.parent)+"/"+t.name)}function Nm(t){null!==t.parent&&function(t,e,n){const i=function(t){return void 0===Im(t)&&!Sm(t)}(n),r=Bi(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,Nm(t)):i||r||(t.node.children[e]=n.node,t.node.childCount++,Nm(t))}
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
 */(t.parent,t.name,t)}const Lm=/[\[\].#$\/\u0000-\u001F\u007F]/,Om=/[\[\].#$\u0000-\u001F\u007F]/,Pm=function(t){return"string"==typeof t&&0!==t.length&&!Lm.test(t)},Dm=function(t){return"string"==typeof t&&0!==t.length&&!Om.test(t)},xm=function(t,e,n){const i=n instanceof zp?new rf(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+of(i));if("function"==typeof e)throw new Error(t+"contains a function "+of(i)+" with contents = "+e.toString());if(dp(e))throw new Error(t+"contains "+e.toString()+" "+of(i));if("string"==typeof e&&e.length>10485760/3&&tr(e)>10485760)throw new Error(t+"contains a string greater than 10485760 utf8 bytes "+of(i)+" ('"+e.substring(0,50)+"...')");if(e&&"object"==typeof e){let n=!1,r=!1;if(_p(e,((e,s)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(r=!0,!Pm(e)))throw new Error(t+" contains an invalid key ("+e+") "+of(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=e,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=tr(a),sf(o),xm(t,s,i),function(t){const e=t.parts_.pop();t.byteLength_-=tr(e),t.parts_.length>0&&(t.byteLength_-=1)}(i)})),n&&r)throw new Error(t+' contains ".value" child '+of(i)+" in addition to actual children.")}},Mm=function(t,e){const n=e.path.toString();if("string"!=typeof e.repoInfo.host||0===e.repoInfo.host.length||!Pm(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Dm(t)}(n))throw new Error(Qi(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class Um{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fm(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();null===n||ef(s,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function Bm(t,e,n){Fm(t,n),jm(t,(t=>nf(t,e)||nf(e,t)))}function jm(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){e(r.path)?(qm(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function qm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const i=n.getEventRunner();rp&&ap("event: "+n.toString()),Ep(i)}}}
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
 */class Hm{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(t,e,n,i){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Um,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Kf(),this.transactionQueueTree_=new Em,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function $m(t,e,n){if(t.stats_=Pp(t.repoInfo_),t.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)t.server_=new Wf(t.repoInfo_,((e,n,i,r)=>{Wm(t,e,n,i,r)}),t.authTokenProvider_,t.appCheckProvider_),setTimeout((()=>Gm(t,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xi(n)}catch(t){throw new Error("Invalid authOverride provided: "+t)}}t.persistentConnection_=new lf(t.repoInfo_,e,((e,n,i,r)=>{Wm(t,e,n,i,r)}),(e=>{Gm(t,e)}),(e=>{!function(t,e){_p(e,((e,n)=>{Km(t,e,n)}))}(t,e)}),t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener((e=>{t.server_.refreshAuthToken(e)})),t.appCheckProvider_.addTokenChangeListener((e=>{t.server_.refreshAppCheckToken(e.token)})),t.statsReporter_=function(t,e){const n=t.toString();return Op[n]||(Op[n]=e()),Op[n]}(t.repoInfo_,(()=>new Qf(t.stats_,t.server_))),t.infoData_=new Gf,t.infoSyncTree_=new nm({startListening:(e,n,i,r)=>{let s=[];const o=t.infoData_.getNode(e._path);return o.isEmpty()||(s=sm(t.infoSyncTree_,e._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),Km(t,"connected",!1),t.serverSyncTree_=new nm({startListening:(e,n,i,r)=>(t.server_.listen(e,i,n,((n,i)=>{const s=r(n,i);Bm(t.eventQueue_,e._path,s)})),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function zm(t){const e=t.infoData_.getNode(new zp(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+e}function Vm(t){return(e=(e={timestamp:zm(t)})||{}).timestamp=e.timestamp||(new Date).getTime(),e;var e}function Wm(t,e,n,i,r){t.dataUpdateCount++;const s=new zp(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const e=Hi(n,(t=>Mf(t)));o=function(t,e,n,i){const r=um(t,i);if(r){const i=dm(r),s=i.path,o=i.queryId,a=tf(s,e),l=pg.fromObject(n);return pm(t,s,new rg(eg(o),a,l))}return[]}(t.serverSyncTree_,s,e,r)}else{const e=Mf(n);o=om(t.serverSyncTree_,s,e,r)}else if(i){const e=Hi(n,(t=>Mf(t)));o=function(t,e,n){const i=pg.fromObject(n);return lm(t,new rg({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,i))}(t.serverSyncTree_,s,e)}else{const e=Mf(n);o=sm(t.serverSyncTree_,s,e)}let a=s;o.length>0&&(a=ty(t,s)),Bm(t.eventQueue_,a,o)}function Gm(t,e){Km(t,"connected",e),!1===e&&function(t){Xm(t,"onDisconnectEvents");const e=Vm(t),n=Kf();Yf(t.onDisconnect_,Vp(),((i,r)=>{const s=vm(i,r,t.serverSyncTree_,e);Jf(n,i,s)}));let i=[];Yf(n,Vp(),((e,n)=>{i=i.concat(sm(t.serverSyncTree_,e,n));const r=sy(t,e);ty(t,r)})),t.onDisconnect_=Kf(),Bm(t.eventQueue_,Vp(),i)}(t)}function Km(t,e,n){const i=new zp("/.info/"+e),r=Mf(n);t.infoData_.updateSnapshot(i,r);const s=sm(t.infoSyncTree_,i,r);Bm(t.eventQueue_,i,s)}function Jm(t){return t.nextWriteId_++}function Ym(t){t.persistentConnection_&&t.persistentConnection_.interrupt("repo_interrupt")}function Xm(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ap(n,...e)}function Qm(t,e,n){return am(t.serverSyncTree_,e,n)||Df.EMPTY_NODE}function Zm(t,e=t.transactionQueueTree_){if(e||ry(t,e),Im(e)){const n=ny(t,e);li(n.length>0,"Sending zero length transaction queue");n.every((t=>0===t.status))&&function(t,e,n){const i=n.map((t=>t.currentWriteId)),r=Qm(t,e,i);let s=r;const o=r.hash();for(let t=0;t<n.length;t++){const i=n[t];li(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=tf(e,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,(i=>{Xm(t,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let e=0;e<n.length;e++)n[e].status=2,r=r.concat(rm(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&i.push((()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved))),n[e].unwatcher();ry(t,Tm(t.transactionQueueTree_,e)),Zm(t,t.transactionQueueTree_),Bm(t.eventQueue_,e,r);for(let t=0;t<i.length;t++)Ep(i[t])}else{if("datastale"===i)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{up("transaction at "+l.toString()+" failed: "+i);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=i}ty(t,e)}}),o)}(t,Am(e),n)}else Sm(e)&&km(e,(e=>{Zm(t,e)}))}function ty(t,e){const n=ey(t,e),i=Am(n);return function(t,e,n){if(0===e.length)return;const i=[];let r=[];const s=e.filter((t=>0===t.status)).map((t=>t.currentWriteId));for(let a=0;a<e.length;a++){const l=e[a],c=tf(n,l.path);let h,u=!1;if(li(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,h=l.abortReason,r=r.concat(rm(t.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)u=!0,h="maxretry",r=r.concat(rm(t.serverSyncTree_,l.currentWriteId,!0));else{const n=Qm(t,l.path,s);l.currentInputSnapshot=n;const i=e[a].update(n.val());if(void 0!==i){xm("transaction failed: Data returned ",i,l.path);let e=Mf(i);"object"==typeof i&&null!=i&&Bi(i,".priority")||(e=e.updatePriority(n.getPriority()));const o=l.currentWriteId,a=Vm(t),c=bm(e,n,a);l.currentOutputSnapshotRaw=e,l.currentOutputSnapshotResolved=c,l.currentWriteId=Jm(t),s.splice(s.indexOf(o),1),r=r.concat(im(t.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(rm(t.serverSyncTree_,o,!0))}else u=!0,h="nodata",r=r.concat(rm(t.serverSyncTree_,l.currentWriteId,!0))}Bm(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,o=e[a].unwatcher,setTimeout(o,Math.floor(0)),e[a].onComplete&&("nodata"===h?i.push((()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot))):i.push((()=>e[a].onComplete(new Error(h),!1,null)))))}var o;ry(t,t.transactionQueueTree_);for(let t=0;t<i.length;t++)Ep(i[t]);Zm(t,t.transactionQueueTree_)}(t,ny(t,n),i),i}function ey(t,e){let n,i=t.transactionQueueTree_;for(n=Wp(e);null!==n&&void 0===Im(i);)i=Tm(i,n),n=Wp(e=Kp(e));return i}function ny(t,e){const n=[];return iy(t,e,n),n.sort(((t,e)=>t.order-e.order)),n}function iy(t,e,n){const i=Im(e);if(i)for(let t=0;t<i.length;t++)n.push(i[t]);km(e,(e=>{iy(t,e,n)}))}function ry(t,e){const n=Im(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,Cm(e,n.length>0?n:void 0)}km(e,(e=>{ry(t,e)}))}function sy(t,e){const n=Am(ey(t,e)),i=Tm(t.transactionQueueTree_,e);return function(t,e,n){let i=n?t:t.parent;for(;null!==i;){if(e(i))return!0;i=i.parent}}(i,(e=>{oy(t,e)})),oy(t,i),Rm(i,(e=>{oy(t,e)})),n}function oy(t,e){const n=Im(e);if(n){const i=[];let r=[],s=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?(li(s===e-1,"All SENT items should be at beginning of queue."),s=e,n[e].status=3,n[e].abortReason="set"):(li(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),r=r.concat(rm(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&i.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Cm(e,void 0):n.length=s+1,Bm(t.eventQueue_,Am(e),r);for(let t=0;t<i.length;t++)Ep(i[t])}}
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
 */const ay=function(t,e){const n=ly(t),i=n.namespace;"firebase.com"===n.domain&&hp(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||hp("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&up("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Rp(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new zp(n.pathString)}},ly=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof t){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");-1===h&&(h=t.length);let u=t.indexOf("?");-1===u&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(r=function(t){let e="";const n=t.split("/");for(let t=0;t<n.length;t++)if(n[t].length>0){let i=n[t];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(t){}e+="/"+i}return e}(t.substring(h,u)));const d=function(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):up(`Invalid query segment '${n}' in query '${t}'`)}return e}(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const t=e.indexOf(".");i=e.substring(0,t).toLowerCase(),n=e.substring(t+1),s=i}"ns"in d&&(s=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};!function(){let t=0;const e=[]}();
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
class cy{get key(){return Zp(this._path)?null:Jp(this._path)}get ref(){return new hy(this._repo,this._path)}get _queryIdentifier(){const t=Vf(this._queryParams),e=mp(t);return"{}"===e?"default":e}get _queryObject(){return Vf(this._queryParams)}isEqual(t){if(!((t=er(t))instanceof cy))return!1;const e=this._repo===t._repo,n=ef(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return e&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}(this._path)}constructor(t,e,n,i){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=i}}class hy extends cy{get parent(){const t=Xp(this._path);return null===t?null:new hy(this._repo,t)}get root(){let t=this;for(;null!==t.parent;)t=t.parent;return t}constructor(t,e){super(t,e,new $f,!1)}}!function(t){li(!Qg,"__referenceConstructor has already been defined"),Qg=t}(hy),function(t){li(!Zg,"__referenceConstructor has already been defined"),Zg=t}(hy);
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
const uy={};let dy=!1;function py(t,e,n,i,r){let s=i||t.options.databaseURL;void 0===s&&(t.options.projectId||hp("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ap("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=ay(s,r),c=l.repoInfo;void 0!==zn&&zn.env&&(a=zn.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=ay(s,r),c=l.repoInfo):o=!l.repoInfo.secure;const h=r&&o?new Sp(Sp.OWNER):new Cp(t.name,t.options,e);Mm("Invalid Firebase Database URL",l),Zp(l.path)||hp("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(t,e,n,i){let r=uy[e.name];r||(r={},uy[e.name]=r);let s=r[t.toURLString()];s&&hp("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Hm(t,dy,n,i),r[t.toURLString()]=s,s}(c,t,h,new Ip(t.name,n));return new fy(u,t)}class fy{get _repo(){return this._instanceStarted||($m(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new hy(this._repo,Vp())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(t,e){const n=uy[e];n&&n[t.key]===t||hp(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ym(t),delete n[t.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&hp("Cannot call "+t+" on a deleted database.")}constructor(t,e){this._repoInternal=t,this.app=e,this.type="database",this._instanceStarted=!1}}lf.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},lf.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};!
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
function(t){Kd="9.17.1",Mr(new nr("database",((t,{instanceIdentifier:e})=>py(t.getProvider("app").getImmediate(),t.getProvider("auth-internal"),t.getProvider("app-check-internal"),e)),"PUBLIC").setMultipleInstances(!0)),Hr("@firebase/database","0.14.3",t),Hr("@firebase/database","0.14.3","esm2017")}
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
 */();const gy=jr({apiKey:"AIzaSyCEvjWSGXAodZ-uOPqRUlwY7-bkZBuLMJM",authDomain:"film-library-8db5a.firebaseapp.com",projectId:"film-library-8db5a",storageBucket:"film-library-8db5a.appspot.com",messagingSenderId:"854707559729",appId:"1:854707559729:web:8a7e1d6f0fbec39a222410"}),my=function(t,e){const n="string"==typeof t?t:e||"(default)",i=Ur("object"==typeof t?t:qr(),"firestore").getImmediate({identifier:n});if(!i._initialized){const t=bi("firestore");t&&function(t,e,n,i={}){var r;const s=(t=Yc(t,Zc))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&Xl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Wl.MOCK_USER;else{e=Ti(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new nc(ec.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Wl(s)}t._authCredentials=new oc(new rc(e,n))}}(i,...t)}return i}(),yy=function(t=qr()){const e=Ur(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=Ur(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if($i(n.getOptions(),null!=e?e:{}))return t;ph(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:$d,persistence:[sd,Vu,Gu]}),i=wi("authTokenSyncURL");if(i){const t=(r=i,async t=>{const e=t&&await t.getIdTokenResult(),n=e&&((new Date).getTime()-Date.parse(e.issuedAtTime))/1e3;if(n&&n>Vd)return;const i=null==e?void 0:e.token;Wd!==i&&(Wd=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(t,e,n){er(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){er(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}var r;const s=vi("auth");return s&&fu(n,`http://${s}`),n}(gy),_y=(function(t,e,...n){if(t=er(t),Gc("collection","path",e),t instanceof Zc){const i=mc.fromString(e,...n);return Kc(i),new nh(t,null,i)}{if(!(t instanceof th||t instanceof nh))throw new nc(ec.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(mc.fromString(e,...n));Kc(i),new nh(t.firestore,null,i)}}(my,"library"),/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),vy=document.querySelector(".signup");vy.addEventListener("submit",(t=>{t.preventDefault();const e=vy.email.value,n=vy.password.value;console.log(_y.test(e)),qu(yy,e,n).then((t=>{t.user;return console.log("user created:",t.user),vy.reset(),console.log("wrong email")})).catch((t=>{alert(t.message)}))}));document.querySelector(".logout").addEventListener("click",(()=>{var t;(t=yy,er(t).signOut()).then((()=>{console.log("the user signed out")})).catch((t=>{console.log(t.message)}))}));const by=document.querySelector(".login");by.addEventListener("submit",(t=>{t.preventDefault();const e=by.email.value,n=by.password.value;Hu(yy,e,n).then((t=>{console.log("user loggen in:",t.user)})).catch((t=>{console.log(t.message)}))}));const wy=document.querySelector(".modal-login"),Ey=document.querySelector("div[data-section='auth']"),Ty=document.querySelector("div[data-section='logout']");wy.style.display="none";document.querySelector(".open-modal-bth").addEventListener("click",(t=>{wy.classList.remove("hidden"),console.log(wy),console.log(t),wy.style.display="",Iy.classList.remove("hidden"),Cy.classList.add("hidden")}));document.querySelector(".close-modal-bth").addEventListener("click",(t=>{wy.classList.add("hidden"),console.log(wy),console.log(t)}));const Iy=document.querySelector(".login-modal"),Cy=document.querySelector(".signup-modal"),Sy=t=>{"login"===t.target.dataset.block&&(console.dir(t.currentTarget.elements),console.log(Iy),Iy.classList.remove("hidden"),Cy.classList.add("hidden")),"signup"===t.target.dataset.block&&(Iy.classList.add("hidden"),Cy.classList.remove("hidden")),"signup"===t.target.dataset.action&&signUpFirebase().then((()=>console.log("your logic removeEventModal()")))};var ky,Ry,Ay;function Ny(t){return`<li class='genres-list__item'>\n    <button class='btn-genre ${t}'>${t}</button>\n    </li>`}ky=t=>{t?(Ty.classList.remove("hidden"),t.uid,console.log("u are inside")):(console.log("u r not in"),Ey.classList.remove("hidden"),Ty.classList.add("hidden"))},er(yy).onAuthStateChanged(ky,Ry,Ay),wy.addEventListener("click",Sy),e.pop.forEach(((t,e,n)=>{let i=Math.random()*(e%2==0?-15:15),r=20*Math.random();t.animate([{transform:"translate(0, 0)"},{transform:`translate(${i}rem, ${r}rem)`}],{duration:5e3*(Math.random()+1),direction:"alternate",fill:"both",iterations:1/0,easing:"ease-in-out"})})),e.genresListEl.classList.add("hidden");const Ly=Object.values(On);if(e.homeBTN.classList.contains("current")){const t=Ly.map((t=>Ny(t))).join("");e.genresListEl.innerHTML=t,e.choiceBtnEl&&e.choiceBtnEl.addEventListener("click",(t=>{e.genresListEl.classList.toggle("hidden"),e.choiceBtnEl.classList.toggle("active")})),e.genresListEl&&e.genresListEl.addEventListener("click",(t=>{"BUTTON"===t.target.nodeName&&async function(t){t.currentTarget.childNodes.forEach((t=>t.children[0].classList.remove("active"))),t.target.classList.add("active");const n=[],i=[],r=t.target.textContent;e.loaderEl.classList.remove("hidden");for(let t=1;t<100;t++){h(await c(t),r)}for(let t=0;t<n.length;t+=20){const e=[];for(let i=0;i<20&&n[t+i];i++)e.push(n[t+i]);i.push(e)}const s=Dn(i[0]);e.filmGalleryHomeEl.innerHTML=s,e.pageBtns.innerHTML="";let o=1;const a=i.length,l=Mn(o,a);async function c(t=1){const e=await In(t),{results:n}=e;return[...n]}function h(t,e){t.map((t=>{t.genre_ids.map((t=>On[t])).join(", ").includes(e)&&n.push(t)}))}e.pageBtnsGenres.innerHTML=l,e.loaderEl.classList.add("hidden"),e.pageBtnsGenres.addEventListener("click",(t=>{if(t.target!==t.currentTarget&&"SPAN"!==t.target.nodeName){if(t.target.classList.contains("previos")){e.pageBtns.innerHTML="",e.pageBtnsGenres.innerHTML="",console.log(o),o-=1;const t=Mn(o,a);e.pageBtnsGenres.innerHTML=t;const n=Dn(i[o-1]);e.filmGalleryHomeEl.innerHTML=n,e.loaderEl.classList.add("hidden")}if(t.target.classList.contains("next")){e.pageBtns.innerHTML="",e.pageBtnsGenres.innerHTML="",console.log(o),o+=1;const t=Mn(o,a);e.pageBtnsGenres.innerHTML=t;const n=Dn(i[o-1]);e.filmGalleryHomeEl.innerHTML=n}if(!t.target.classList.contains("previos")&&!t.target.classList.contains("next")){e.pageBtns.innerHTML="",e.pageBtnsGenres.innerHTML="",o=+t.target.textContent;const n=Mn(o,a);e.pageBtnsGenres.innerHTML=n;const r=Dn(i[o-1]);e.filmGalleryHomeEl.innerHTML=r}}}))}(t)}))}e.homeBTN.classList.contains("current")&&async function(){e.choiceBtnEl.classList.remove("hidden"),e.pageBtns.innerHTML="",e.pageBtnsInput.innerHTML="",e.filmGalleryHomeEl.innerHTML="",e.loaderEl.classList.remove("hidden");const t=await In();e.loaderEl.classList.add("hidden");const{results:n}=t,i=t.page,r=Dn([...n]);e.filmGalleryHomeEl.innerHTML=r;const s=Mn(i,99);e.pageBtnsInput.innerHTML="",e.pageBtns.innerHTML=s,e.pageBtns.addEventListener("click",(t=>{console.log(t.target.nodeName),t.target===t.currentTarget&&"SPAN"===t.target.nodeName||Fn(t)}))}(),e.formEl&&e.formEl.addEventListener("submit",(t=>qn(t)));
//# sourceMappingURL=library.f2acaa90.js.map
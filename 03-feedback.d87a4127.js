!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,y=function(){return d.Date.now()};function p(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function S(e){return c=e,f=setTimeout(j,t),s?p(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function j(){var e=y();if(h(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function O(e){return f=void 0,m&&r?p(e):(r=i=void 0,u)}function T(){var e=y(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(j,t),p(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=w(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(w(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:O(y())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var S=document.querySelector("form.feedback-form"),h=document.querySelector('input[name="email"]'),j=document.querySelector('textarea[name="message"]'),O={},T="feedback-form-state";S.addEventListener("submit",(function(e){e.preventDefault(),""===h.value||""===j.value?alert("Поле Email або Password пусті. Заповніть всі поля!"):(console.log(O),e.currentTarget.reset(),localStorage.removeItem(T))})),S.addEventListener("input",e(t)((function(e){"email"===e.target.name?O.email=e.target.value:"message"===e.target.name&&(O.message=e.target.value);!function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}}(T,O)}),500)),window.addEventListener("DOMContentLoaded",(function(){var e=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}(T);e&&void 0!==e.email&&(h.value=e.email,O.email=e.email,console.log(1));e&&void 0!==e.message&&(j.value=e.message,O.message=e.message,console.log(e.message))}))}();
//# sourceMappingURL=03-feedback.d87a4127.js.map

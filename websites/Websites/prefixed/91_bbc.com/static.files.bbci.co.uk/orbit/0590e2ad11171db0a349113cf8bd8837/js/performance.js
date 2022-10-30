/*! For license information please see performance.js.LICENSE.txt */
!function(){"use strict";var t,e,n,r,o=-1,i=function(t){addEventListener("pageshow",(function(e){e.persisted&&(o=e.timeStamp,t(e))}),!0)},a=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},c=function(){var t=a();return t&&t.activationStart||0},u=function(t,e){var n=a(),r="navigate";return o>=0?r="back-forward-cache":n&&(r=document.prerendering||c()>0?"prerender":n.type.replace(/_/g,"-")),{name:t,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},f=function(t,e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var r=new PerformanceObserver((function(t){e(t.getEntries())}));return r.observe(Object.assign({type:t,buffered:!0},n||{})),r}}catch(t){}},s=function(t,e){var n=function n(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(t(r),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},l=function(t,e,n,r){var o,i;return function(a){e.value>=0&&(a||r)&&((i=e.value-(o||0))||void 0===o)&&(o=e.value,e.delta=i,e.rating=function(t,e){return t>e[1]?"poor":t>e[0]?"needs-improvement":"good"}(e.value,n),t(e))}},p=-1,h=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},d=function(){s((function(t){var e=t.timeStamp;p=e}),!0)},v=function(){return p<0&&(p=h(),d(),i((function(){setTimeout((function(){p=h(),d()}),0)}))),{get firstHiddenTime(){return p}}},m=function(t,e){e=e||{};var n,r=[1800,3e3],o=v(),a=u("FCP"),s=function(t){t.forEach((function(t){"first-contentful-paint"===t.name&&(h&&h.disconnect(),t.startTime<o.firstHiddenTime&&(a.value=t.startTime-c(),a.entries.push(t),n(!0)))}))},p=window.performance&&window.performance.getEntriesByName&&window.performance.getEntriesByName("first-contentful-paint")[0],h=p?null:f("paint",s);(p||h)&&(n=l(t,a,r,e.reportAllChanges),p&&s([p]),i((function(o){a=u("FCP"),n=l(t,a,r,e.reportAllChanges),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-o.timeStamp,n(!0)}))}))})))},y=!1,g=-1,w=function(t,e){e=e||{};var n=[.1,.25];y||(m((function(t){g=t.value})),y=!0);var r,o=function(e){g>-1&&t(e)},a=u("CLS",0),c=0,p=[],h=function(t){t.forEach((function(t){if(!t.hadRecentInput){var e=p[0],n=p[p.length-1];c&&t.startTime-n.startTime<1e3&&t.startTime-e.startTime<5e3?(c+=t.value,p.push(t)):(c=t.value,p=[t]),c>a.value&&(a.value=c,a.entries=p,r())}}))},d=f("layout-shift",h);d&&(r=l(o,a,n,e.reportAllChanges),s((function(){h(d.takeRecords()),r(!0)})),i((function(){c=0,g=-1,a=u("CLS",0),r=l(o,a,n,e.reportAllChanges)})))},b={passive:!0,capture:!0},E=new Date,L=function(r,o){t||(t=o,e=r,n=new Date,S(removeEventListener),x())},x=function(){if(e>=0&&e<n-E){var o={entryType:"first-input",name:t.type,target:t.target,cancelable:t.cancelable,startTime:t.timeStamp,processingStart:t.timeStamp+e};r.forEach((function(t){t(o)})),r=[]}},O=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,e){var n=function(){L(t,e),o()},r=function(){o()},o=function(){removeEventListener("pointerup",n,b),removeEventListener("pointercancel",r,b)};addEventListener("pointerup",n,b),addEventListener("pointercancel",r,b)}(e,t):L(e,t)}},S=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,O,b)}))},T=function(n,o){o=o||{};var a,c=[100,300],p=v(),h=u("FID"),d=function(t){t.startTime<p.firstHiddenTime&&(h.value=t.processingStart-t.startTime,h.entries.push(t),a(!0))},m=function(t){t.forEach(d)},y=f("first-input",m);a=l(n,h,c,o.reportAllChanges),y&&s((function(){m(y.takeRecords()),y.disconnect()}),!0),y&&i((function(){var i;h=u("FID"),a=l(n,h,c,o.reportAllChanges),r=[],e=-1,t=null,S(addEventListener),i=d,r.push(i),x()}))},j={},P=function(t,e){e=e||{};var n,r=[2500,4e3],o=v(),a=u("LCP"),p=function(t){var e=t[t.length-1];if(e){var r=e.startTime-c();r<o.firstHiddenTime&&(a.value=r,a.entries=[e],n())}},h=f("largest-contentful-paint",p);if(h){n=l(t,a,r,e.reportAllChanges);var d=function(){j[a.id]||(p(h.takeRecords()),h.disconnect(),j[a.id]=!0,n(!0))};["keydown","click"].forEach((function(t){addEventListener(t,d,{once:!0,capture:!0})})),s(d,!0),i((function(o){a=u("LCP"),n=l(t,a,r,e.reportAllChanges),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-o.timeStamp,j[a.id]=!0,n(!0)}))}))}))}},k=function t(e){document.prerendering?addEventListener("prerenderingchange",(function(){return t(e)}),!0):"complete"!==document.readyState?addEventListener("load",(function(){return t(e)}),!0):setTimeout(e,0)},C=function(t,e){e=e||{};var n=[800,1800],r=u("TTFB"),o=l(t,r,n,e.reportAllChanges);k((function(){var f=a();if(f){if(r.value=Math.max(f.responseStart-c(),0),r.value<0||r.value>performance.now())return;r.entries=[f],o(!0),i((function(){r=u("TTFB",0),(o=l(t,r,n,e.reportAllChanges))(!0)}))}}))};function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function _(){_=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new x(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=b(a,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function l(){}function p(){}function h(){}var d={};c(d,o,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(O([])));m&&m!==e&&n.call(m,o)&&(d=m);var y=h.prototype=l.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==A(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=h,c(y,"constructor",h),c(h,"constructor",p),p.displayName=c(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,a,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new w(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),c(y,a,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?F(Object(n),!0).forEach((function(e){N(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function N(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function B(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function G(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){B(i,r,o,a,c,"next",t)}function c(t){B(i,r,o,a,c,"throw",t)}a(void 0)}))}}var I,q=Date.now(),H=Math.random()<=.1,M=document.currentScript.getAttribute("data-ux"),R=document.currentScript.getAttribute("data-release");(I=G(_().mark((function t(){var e,n,r;return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.bbcuser.allowsPerformanceCookies();case 2:e=t.sent,navigator.sendBeacon&&H&&e&&(n={cls:null,fid:null,lcp:null,fcp:null,ttfb:null},w(r=function(t){var e=t.name,r=t.value,o=e.toLowerCase();n[o]=r},!0),T(r),P(r,!0),m(r),C(r),window.addEventListener("pagehide",G(_().mark((function t(){var e,r,o,i,a,c,u;return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.bbcpage.getDestination();case 2:return e=t.sent,t.next=5,window.bbcpage.getContentType();case 5:r=t.sent,o=document.documentElement.className.includes("b-reith-sans-font")?"1":"0",i="".concat("https://default.bbc-reporting-api.app/report-endpoint","?platform=orbit-").concat(M,"-").concat(R,"&owner=").concat(e,"&pageType=").concat(r,"&reith=").concat(o),a=[{type:"web-vitals",url:window.location.href,age:Date.now()-q,body:D({},n)}],c=JSON.stringify(a),u=new Blob([c],{type:"application/reports+json"}),navigator.sendBeacon(i,u);case 13:case"end":return t.stop()}}),t)})))));case 4:case"end":return t.stop()}}),t)}))),function(){return I.apply(this,arguments)})()}();
//# sourceMappingURL=performance.js.map
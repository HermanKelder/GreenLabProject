!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-darla",[],t):"object"==typeof exports?exports["wafer-darla"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-darla"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=window.wafer,u=l.constants,f=l.WaferBaseClass,c=u.ATTR_PREFIX,d=["darla-config"],p=function(e){function t(e){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{},{STATE_ATTRS:d}));return r._util=i({},r._util,{"darla-config":e.getAttribute(c+"darla-config")}),r}return a(t,e),s(t,[{key:"stateDidUpdate",value:function(){this._stateDidUpdate()}}]),t}(f);p.events={},t.default=p,e.exports=t.default},"./src/controller.js":function(e,t,r){"use strict";function n(){return l=o(r("./src/base.js"))}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u=function(){function e(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),d=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,r,n)}if("value"in o)return o.value;var i=o.get;if(void 0!==i)return i.call(n)},p=window.wafer,v=p.base,y=p.utils,w=y.getUrlParameterValueByName,h=window.wafer.controllers.WaferLazyController,b=y.bindEvent,g=function(e){function t(){a(this,t);var e=t.prototype.configs,r=e.selector,o=e.successClass,s=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{selector:r,successClass:o,WaferClass:(l||n()).default}));s._options=f({},s._options,{defaultOffsetY:1200,defaultOffsetX:0}),s._state=f({},s._state,{yieldAdInstances:new Map});var u=s;return(l||n()).default.prototype._stateDidUpdate=function(){var e=this._util.elem;u.loadElement(e).catch(function(){})},s.sync(),s}return s(t,e),c(t,[{key:"makeDarlaCall",value:function(e,t,r,n){var o=this,a=r.addAutoEvent,i=void 0!==a&&a,s=r.addCleanContainer,l=void 0!==s&&s,f=r.authed,c=void 0===f?"0":f,d=r.bucket,p=void 0===d?"testBucket":d,y=r.device,h=void 0===y?"smartphone":y,b=r.enabled,g=void 0===b||b,m=r.flex,_=r.height,O=void 0===_?250:_,j=r.includeRapidKey,x=void 0!==j&&j,C=r.intl,A=void 0===C?"us":C,P=r.maxRetry,E=void 0===P?5:P,T=r.meta,S=void 0===T?{}:T,k=r.metaSize,R=r.npv,D=void 0===R||R,I=r.rid,M=void 0===I?"testRid":I,z=r.rotateAds,U=void 0!==z&&z,L=r.rotateTime,N=void 0===L?3e4:L,W=r.site,B=void 0===W?"fp":W,F=r.siteAttribute,Y=r.ssl,K=void 0===Y||Y,V=r.supports,H=r.uuid,X=r.waitDelay,q=void 0===X?350:X,J=r.width,G=void 0===J?300:J,Q=r.yieldAd,Z=window.DARLA;if(g){if(Q){if(Q.enabled)return v.emitWaferEvent("darla:complete",{elem:n,meta:{darlaConfig:r}}),void this._state.yieldAdInstances.set(n,{darlaConfig:r})}if(e&&t&&Z){var $=Z.config(),ee=$.onFailure,te=$.onSuccess;Z.config().onSuccess=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];r.retryCount=0,te&&te.apply(Z,t)},Z.config().onFailure=function(){for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];var l=Z.prefetched();return r.retryCount===E&&Z.abort(),r.retryCount>E?(n&&n.style&&(n.style.display="none"),void(r.retryCount=0)):l&&l.length>0&&q>0?void setTimeout(function(){r.retryCount++,o.makeDarlaCall.call(o,e,t,r,n)},r.retryCount===E?2*q:q):void(ee&&ee.apply(Z,i))};var re=window.vzm&&window.vzm.getPageContext&&window.vzm.getPageContext()||window.YAHOO&&window.YAHOO.context||{},ne="";re.ynet&&(t=w("_spaceid",window.location.href)||t,ne=w("atwKV",window.location.href)||ne);var oe={pg:{device:h,intl:A,property:B,rid:M,test:p}},ae='Y-BUCKET="'+p+'"';if(F){var ie=F.split("pct"),se=u(ie,2),le=se[0],ue=se[1],fe="",ce=window.rapidInstance;if(x&&ce&&ce.getRapidAttribute){if(-1===decodeURIComponent(F).indexOf("lu:")){fe="lu:"+(re.authed||c)}var de=ce.getRapidAttribute("keys"),pe=de.pd,ve=void 0===pe?"":pe,ye=de.pt,we=void 0===ye?"":ye,he=de.ver,be=void 0===he?"":he;fe=fe+(ve?";pd:"+ve:"")+(we?";pt:"+we:"")+(be?";ver:"+be:"")}ae+=le&&ue?" "+le+fe+";pct"+ue:" "+F}else"tw"===A&&(ae+=' rs="lu:'+c+'"');ne&&(ae+=" "+ne);var ge=e.replace(",","_"),me="wafer_darla_fetch_"+ge;Z.add({name:me,autoStart:U,autoRT:N,ps:e,sa:ae,sp:t,ref:window.location.href,npv:D,ssl:K,ult:oe});var _e=e.split(","),Oe=Z.evtSettings("AUTO"),je={autoIV:1,autoMax:25,autoRT:"10000"};_e.forEach(function(e){var t=S[e]||{},r=t.width||G,n=t.height||O,o=t.metaSize||k,a=t.supports||V,s=t.flex||m,u=t.css,f=H?H+"-":"",c={pos:e,dest:"wafer-darla-"+f+e,w:r,h:n};l&&(c.clean="wafer-darla-clean-"+f+e),o&&(c.metaSize=o),a&&(c.supports=a),s&&(c.flex=s),u&&(c.css=u),i&&!Oe.ps[e]&&(Oe.ps[e]=Object.assign({},{id:e},je)),Z.addPos(c)}),i&&Z.add(Oe),Z.event(me)}}}},{key:"_checkIfDarlaNameSpaceExist",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(function(r,n){if(t>5)return n(new Error("namespace does not exist"));if(window.DARLA)return r();var o=t+1;setTimeout(function(){e._checkIfDarlaNameSpaceExist(o).then(function(){r()}).catch(function(e){n(e)})},50*o)})}},{key:"loadElement",value:function(e){var t=this;return new Promise(function(r,n){if(t._shouldLoadElement(e)){var o=t._state.elementInstances,a=o.get(e),i=a.instance,s={};try{s=JSON.parse(i._util["darla-config"]);var l=s.enabled,u="false"===l||!1===l;s.enabled=!u,s.retryCount=0}catch(e){return void n(e)}return s?t._checkIfDarlaNameSpaceExist().then(function(){var n=window.DARLA,o=n&&n.inProgress();if(o)throw new Error("darla in progress");var a=s,i=a.pos,l=a.spaceid;if(i&&l&&n){var u=s,f=u.abortDarlaCalls,c=void 0===f?[]:f;o&&Array.isArray(c)&&c.length&&-1!==c.indexOf(o)&&n.abort(),t.makeDarlaCall(i,l,s,e),b(e,"load",t._itemLoaded(e))}r()}).catch(function(e){n(e)}):void n(new Error("config missing"))}r()})}},{key:"destroy",value:function(e){if(e){var r=this._state.yieldAdInstances;if(r.has(e)){var n=r.get(e),o=n.darlaConfig;v.emitWaferEvent("darla:destroyed",{elem:e,meta:{darlaConfig:o}}),r.delete(e)}}d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this,e)}}]),t}(h);g.prototype.configs={selector:".wafer-darla",successClass:"wafer-darla-done"},t.default=g,e.exports=t.default},"./src/entry.js":function(e,t,r){"use strict";function n(){return a=o(r("./src/controller.js"))}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a;t.default=new((a||n()).default)({selector:(a||n()).default.prototype.configs.selector}),e.exports=t.default}})});
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"1iyJ":function(e,t,n){"use strict";n.r(t);n("RzqG")},3:function(e,t,n){e.exports=n("1iyJ")},RzqG:function(e,t){!function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){var n,i=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)),i}function n(n){for(var i=1;i<arguments.length;i++){var o=null!=arguments[i]?arguments[i]:{};i%2?t(Object(o),!0).forEach((function(t){e(n,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var o,r,a=(o={},r={},{publish:function e(t){var n,i=void 0===(n=t.name)?"":n,a=void 0===(n=t.value)?{}:n;"all"!==(t=void 0===(t=t.scope)?"page":t)&&e({name:i,value:a,scope:"all"}),o[i]||(o[i]={}),o[i][t]||(o[i][t]=[]),o[i][t].push(a),r[i]&&r[i][t]&&r[i][t].forEach((function(e){e(a)}))},subscribe:function(e){var t,n=void 0===(t=e.name)?"":t,i=void 0===(t=e.callback)?function(){}:t,a=void 0===(e=e.scope)?"page":e;r[n]||(r[n]={}),r[n][a]||(r[n][a]=[]);var d=r[n][a].push(i)-1;return o[n]&&o[n][a]&&o[n][a].length&&o[n][a].forEach((function(e){i(e)})),{remove:function(){return r[n][a].splice(d,1)}}},unsubscribeToAll:function(e){Object.keys(r).forEach((function(t){r[t]&&r[t][e]&&delete r[t][e]})),Object.keys(o).forEach((function(t){o[t]&&o[t][e]&&delete o[t][e]}))}});function d(e,t,n,i,o,r){var a=1<arguments.length&&void 0!==t?t:0,d=2<arguments.length&&void 0!==n?n:0,l=3<arguments.length&&void 0!==i?i:0,s=4<arguments.length&&void 0!==o?o:0,u=!(5<arguments.length&&void 0!==r)||r;if(!e||1!==e.nodeType)return!1;t=(c=e.getBoundingClientRect()).top-a,n=c.left,i=c.bottom,o=c.right,r=0,e=0,a=window.innerHeight;var c=window.innerWidth;return u?r+l*s<=i&&e+d*s<=o&&t<=a-l*s&&n<=c-d*s:r<=t&&i<=a}function l(e,t,n){var i="".concat(e,"-").concat(t);try{performance.mark(i),performance.measure(i,n,i);var o=performance.getEntriesByName(i).find((function(e){return"measure"===e.entryType}));return o?Math.round(o.duration):0}catch(e){return 0}}function s(e){return-1!==document.cookie.indexOf(e)}function u(e){var t={PURR_AcceptableTrackers:0,PURR_AdConfiguration:5,PURR_DataSaleOptOutUI:2,PURR_DataProcessingConsentUI:3,PURR_AcceptableTrackers_v2:4,PURR_AdConfiguration_v2:5,PURR_DataProcessingPreferenceUI:6,PURR_DataSaleOptOutUI_v2:7,PURR_CaliforniaNoticesUI:8,PURR_EmailMarketingOptInUI:9,PURR_DeleteIPAddress:10,PURR_AdConfiguration_v3:11},n=function(e){return 2===(e=("; "+document.cookie).split("; "+e+"=")).length?e.pop().split(";").shift():null}(e),i={};return Object.keys(t).forEach((function(e){i[e]=function(e,t){return t=new RegExp("^.{"+t+"}(.)"),(null==(t=e.match(t))?void 0:t[1])||""}(n,t[e])})),Q.forEach((function(e){Object.keys(e.valueMapping).forEach((function(t){e.valueMapping[t]===i[e.name]&&(i[e.name]=t)}))})),i}function c(){var e;try{return function(){if("undefined"==typeof window)return!1;var e=-1!==(i=window.navigator.userAgent||window.navigator.vendor).indexOf("nyt_android"),t=-1!==i.indexOf("nytios"),n=-1!==i.indexOf("nyt_xwords_ios"),i=-1!==i.indexOf("Crosswords");return e||t||n||i}()?null!==(e=null===window||void 0===window?void 0:window.config)&&void 0!==e&&e.PurrDirectives?window.config.PurrDirectives:s("override-purr")?u("override-purr"):H({},X):s("nyt-purr")?u("nyt-purr"):H({},X)}catch(e){return console.warn("can’t get directives from cookie or config",e),H({},X)}}function p(){return function(e){return e=e||window.location.search,(e=new URLSearchParams(e))&&e.get("privacy-override")}()||c().PURR_AdConfiguration_v3||c().PURR_AdConfiguration_v2}var f="message",v="visibilitychange",g="mouseenter",m="mouseleave",h="readystatechange",b="unload",w="slotRequested",y="slotResponseReceived",A="slotRenderEnded",R="slotOnload",P="impressionViewable",O="responseStart",I="timeDefined",S="timeCalled",_="timeCallSent",E="timeReceived",U="timeRendered",T="timeLoaded",k="timeViewed",C="AdEmpty",D="AdDefined",j="AdCalled",L="AdRefreshed",M="AdRequestSent",z="AdResponse",x="AdRendered",V="AdLoaded",q="AdSlotReady",N="AdViewable",B="AdEnteredViewport",$="AdLeftViewport",J="AdMouseEnter",K="AdMouseLeave",F="AdsDisabled",G="GptError",W="pos",Z="request_time",H=function(){return(H=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},Q=[{name:"PURR_AcceptableTrackers",valueMapping:{controllers:"c",processors:"p"}},{name:"PURR_AdConfiguration",valueMapping:{full:"f",npa:"n","adluce-socrates":"s"}},{name:"PURR_DataSaleOptOutUI",valueMapping:{hide:"h",show:"s"}},{name:"PURR_DataProcessingConsentUI",valueMapping:{hide:"h",show:"s"}},{name:"PURR_AcceptableTrackers_v2",valueMapping:{controllers:"c",processors:"p",essentials:"e"}},{name:"PURR_AdConfiguration_v2",valueMapping:{full:"f",rdp:"r",npa:"n",adluce:"a","adluce-socrates":"s"}},{name:"PURR_DataProcessingPreferenceUI",valueMapping:{hide:"h","allow-opt-out":"o","allow-opt-in":"i","allow-opt-in-or-out":"a"}},{name:"PURR_DataSaleOptOutUI_v2",valueMapping:{hide:"h",show:"s","show-opted-out":"o"}},{name:"PURR_CaliforniaNoticesUI",valueMapping:{hide:"h",show:"s"}},{name:"PURR_EmailMarketingOptInUI",valueMapping:{checked:"c",unchecked:"u"}},{name:"PURR_DeleteIPAddress",valueMapping:{delete:"d",keep:"k"}},{name:"PURR_AdConfiguration_v3",valueMapping:{full:"f",rdp:"r",npa:"n",ltd:"l","adluce-socrates":"s"}}],X={PURR_DataSaleOptOutUI:"hide",PURR_DataSaleOptOutUI_v2:"hide",PURR_CaliforniaNoticesUI:"hide",PURR_DataProcessingConsentUI:"hide",PURR_DataProcessingPreferenceUI:"hide",PURR_AcceptableTrackers_v2:"controllers",PURR_AcceptableTrackers:"controllers",PURR_AdConfiguration_v2:"full",PURR_AdConfiguration:"full",PURR_EmailMarketingOptInUI:"checked",PURR_DeleteIPAddress:"delete",PURR_AdConfiguration_v3:"full"},Y="ltd",ee=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window;return e.googletag=e.googletag||{},e.googletag.cmd=e.googletag.cmd||[],e.googletag};function te(){var e,t,n,i=function(){window.googletag?ee().cmd.push((function(){ee()._loadStarted_||a.publish({name:C,value:{type:"AdBlockOn"}})})):a.publish({name:C,value:{type:G}})},o=p()===Y?"https://pagead2.googlesyndication.com/tag/js/gpt.js":"https://securepubads.g.doubleclick.net/tag/js/gpt.js";ee().apiReady?i():(e=o,t=i,n=function(){a.publish({name:C,value:{type:G}})},o=document.getElementsByTagName("head")[0],i=document.createElement("script"),t&&(i.onload=t),n&&(i.onerror=n),i.src=e,i.async=!0,o.appendChild(i))}var ne=function(t,n){a.publish({name:j,scope:t.id,value:e({id:t.id,position:t.position,slot:t.slot},S,n)})};function ie(e){ee().cmd.push((function(){var t=e.id,n=e.slot,i=l(t,S,O);ne(e,i),window.apstag&&window.apstag.setDisplayBids&&window.apstag.setDisplayBids(),n.setTargeting(Z,i.toString()),ee().display(t)}))}function oe(e,t){a.publish({name:L,scope:"all"}),ee().cmd.push((function(){e&&e.forEach((function(e){var t=e.getSlotElementId(),n=l(t,S,O);ne(t,e),e.setTargeting(Z,n.toString())})),e&&t?ee().pubads().refresh(e,t):e?ee().pubads().refresh(e):t?ee().pubads().refresh(null,t):ee().pubads().refresh()}))}function re(e,t){var n=e.displayed,i=e.slot;t.isRefresh&&n?(oe([i],t.changeCorrelator?null:{changeCorrelator:!1}),t.changeCorrelator=!1):(ie(e),e.displayed=!0)}var ae=function(e,t){return!!(e&&t&&t.unobserve&&"function"==typeof t.unobserve)&&(t.unobserve(e),!0)};function de(e,t,n,i){var o=1<arguments.length?t:void 0,r=2<arguments.length?n:void 0,d=3<arguments.length?i:void 0;if((e=0<arguments.length&&void 0!==e?e:{}).exclusive&&e.div){var l,s=e.div;switch(e.type){case"only-child":!function(e,t){t=1<arguments.length&&void 0!==t?t:{},(e=e&&e.empty||t.unrenderedAds||[]).length&&e.forEach((function(e){ae(e.AdSlotElement,e.observer),a.publish({name:C,value:{type:e.id},scope:e.id})})),t.unrenderedAds=[],t.stopAdCalls=!0}({empty:function(e,t){return t=1<arguments.length&&void 0!==t?t:{},Object.values(t).filter((function(t){return e!==t.id}))}(s,o)},d);break;case"family-plan":void 0!==(l=o[s]&&o[s].slot&&(o[s].slot.getResponseInformation()||{}).lineItemId)&&r({adv:l,excl:"family"});break;case"blank":a.publish({name:C,value:{type:s},scope:s})}return 1}}function le(e){return!!(e||(t=document.referrer||"",(e=/([a-zA-Z0-9_\-.]+)(@|%40)([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})/).test(t)||e.test(window.location.href))||"adluce-socrates"===p());var t}function se(e){return ee().pubads().getSlots().find((function(t){return t.getSlotElementId()===e}))}function ue(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:function(){};t=new IntersectionObserver((function(e,t){e=e[0],n(e,t)}),t);return e&&t.observe(e),t}function ce(e,t){a.publish({name:t,scope:e.id,value:{id:e.id,position:e.position,creativeId:e.creativeId,lineItemId:e.lineItemId}})}function pe(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};t.potentiallyViewable&&(null!==(e=t.viewabilityTimeout)&&void 0!==e||(t.viewabilityTimeout=setTimeout((function(){return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};delete e.viewabilityTimeout,delete e.potentiallyViewable,e.viewable=!0,ce(e,B)}(t)}),1e3)))}function fe(e,t){return ue(t,{root:null,rootMargin:"0px",threshold:be},(function(t){return i=e,void((n=t).target&&(t=242e3<=n.target.clientWidth*n.target.clientHeight?he:me,(t=n.intersectionRatio>=t)||(delete i.potentiallyViewable,clearTimeout(i.viewabilityTimeout),delete i.viewabilityTimeout),n.isIntersecting?!t||i.potentiallyViewable||i.viewable||(i.potentiallyViewable=!0,pe(i)):i.viewable&&(ce(i,$),delete i.viewable)));var n,i}))}function ve(e,t,n){return ue(e.AdSlotElement,{root:null,rootMargin:"".concat(t,"px"),threshold:0},(function(t,i){return o=i,r=e,i=n,void(t.isIntersecting&&(re(r,i),o.unobserve(r.AdSlotElement)));var o,r}))}var ge={init:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.adsDisabled,i=void 0===(i=e.adTargeting)?{}:i;return(t=t||le())||(ee().cmd.push((function(){!function(){switch(p()){case"rdp":ee().pubads().setPrivacySettings({restrictDataProcessing:!0});break;case"npa":ee().pubads().setRequestNonPersonalizedAds(1);break;case Y:ee().pubads().setPrivacySettings({limitedAds:!0})}}()})),i=n(n({},i),{},{purr:p()})),n(n({},e),{},{adTargeting:i,adsDisabled:t})}},me=.5,he=.3,be=[0,me,he];function we(e,t,n,i){e.displayed||(e.observer=ve(e,i,n),n.unrenderedAds.push(e)),e.viewabilityObserver=fe(e),t[e.id]=e}function ye(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};e.viewabilityTimeout&&(clearTimeout(e.viewabilityTimeout),delete e.viewabilityTimeout),e.viewable&&(delete e.viewable,e.potentiallyViewable=!0,ce(e,$))}function Ae(e){var t=(e.target.parentNode.id.match(/^google/)?e.target.parentNode:e.target).parentNode.id,n=(i=se(t)).getTargeting(W),i=(o=i.getResponseInformation()).sourceAgnosticCreativeId,o=o.sourceAgnosticLineItemId;a.publish({name:e.type===g?J:K,scope:t,value:{type:e.type===g?"hover_mouse_enter":"hover_mouse_leave",id:t,position:n,creativeId:i,lineItemId:o}})}function Re(){return console.warn("::warning:: this function is deprecated")}function Pe(e,t,n){return ee().defineSlot(e,t,n)}function Oe(e){var t=e.observer,n=e.viewabilityObserver,i=e.AdSlotElement;return null!=t&&t.unobserve(i),e.observer=null,delete e.potentiallyViewable,e.viewabilityObserver=(t=n,(n=null==i?void 0:i.querySelector("iframe"))&&(null!=t&&t.unobserve(n),i=m,n.removeEventListener(g,Ae),n.removeEventListener(i,Ae)),t),e}function Ie(e,t){var n=null==t?void 0:t.querySelector("iframe");return(e=Oe(e)).AdSlotElement=t,e.viewabilityObserver=fe(e,n),null!=n&&n.addEventListener(g,Ae),null!=n&&n.addEventListener(m,Ae),e}function Se(e){return e&&null!=e&&e.getSlotElementId&&null!=e&&e.getTargeting?{id:e.getSlotElementId(),position:e.getTargeting(W)[0]||""}:{}}function _e(e){var t=(o=Se(e.slot)).id,i=o.position,o=l(t,_,O);a.publish({name:M,value:n(n({},e),{},{id:t,position:i,timeCallSent:o}),scope:t})}function Ee(e){var t=(o=Se(e.slot)).id,i=o.position,o=l(t,E,"".concat(t,"-").concat(S));a.publish({name:z,value:n(n({},e),{},{id:t,position:i,timeReceived:o}),scope:t})}function Ue(e){var t=(r=Se(e.slot)).id,i=r.position,o=(d=e.slot.getResponseInformation()).sourceAgnosticCreativeId,r=d.sourceAgnosticLineItemId,d=l(t,k,"".concat(t,"-").concat(S));a.publish({name:N,value:n(n({},e),{},{id:t,position:i,creativeId:o,lineItemId:r,timeViewed:d}),scope:t})}function Te(e){var t=window.location.href;e=e.replace(/[[]]/g,"\\$&");return(t=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(t))&&t[2]?decodeURIComponent(t[2].replace(/\+/g,"")):""}function ke(t){var i=Te("ad-keywords"),o=n(n({},t),{},{vp:window.matchMedia("(min-width: 970px)").matches?"large":window.matchMedia("(min-width: 728px)").matches?"medium":"small",uap:(t=window.navigator.userAgent).match(/(nyt)[_\w\d-]*(ios)/i)?"ios":t.match(/(nyt)[_\w\d-]*(android)/i)?"android":"browser",aid:(t="nyt-a",(document&&document.cookie&&document.cookie.match&&(t=document.cookie.match(new RegExp("".concat(t,"=([^;]+)"))))?t[1]:"")||null)},i?e({},"adv",i):null);return ee().cmd.push((function(){var e,t,n=(e=o,t=ee().pubads().getTargetingKeys(),Object.keys(e).filter((function(e){return t.indexOf(e)<0})).reduce((function(t,n){return t[n]=e[n],t}),{}));Object.keys(n).forEach((function(e){ee().pubads().setTargeting(e,n[e])}))})),o}function Ce(e){return function(){Object.values(e()).forEach((function(e){e.viewable&&ce(e,$)}))}}function De(e){return function(){"visible"===document.visibilityState?Object.values(e()).forEach(pe):Object.values(e()).forEach(ye)}}var je={default:[[0,[0,0]]]},Le=[[0,[50,50]]];(function(){if(window.AdSlot4&&window.AdSlot4.init)return window.AdSlot4;var e={},t=window.AdSlot4||{};function o(){return s}t.events=a,t.getSlot=se,t.refreshAdsInView=oe,t.getAdsOnPage=function(){return e},t.getAdOnPage=function(t){return e[t]};var r=[ge],s={isRefresh:!1,changeCorrelator:!1,stopAdCalls:!1,unrenderedAds:[]},u=[],c=!0,p=!1;if(t.initializeAd=function(e,n){var i,o;if(!t.props)return t.events.subscribe({name:q,callback:function(){return t.initializeAd(e,n)}}),!1;var r,a,p=(b=t.props).adUnitPath,f=b.sizeMapping,v=b.hideTopAd,g=b.adsDisabled,m=n.id,h=n.position,b=n.sizeKey,w=n.lazyLoad,y=n.truePosition,A=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:je,n=Te("unfillAd");return"all"===n||e&&e===n?Le:e in t?t[e]:t.default}(b||h,f);return!("top"===h&&v||(g?(t.events.publish({name:C,value:{type:F}}),1):!m||!p||!A||null!=e&&null!==(i=e.classList)&&void 0!==i&&i.contains("placed-ad")||null!=e&&null!==(o=e.parentNode)&&void 0!==o&&null!==(a=o.classList)&&void 0!==a&&a.contains("placed-ad")||u.includes(m)?(!u.includes(m)||(r=t.getAdsOnPage())&&r[m]&&e!==r[m].AdSlotElement&&we(Ie(r[m],e),r,s,t.props.offset),1):s.stopAdCalls?(t.events.publish({name:C,value:{type:m},scope:m}),1):(a=u,(r=m)&&a.push(r),ee().cmd.push((function(){var n,i,o=(o=m,n=p,r=A,"undefined"!=typeof window&&window.document&&window.document.createElement&&window.self!==window.top?a=Pe(n,function(e,t){return(t=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:[]).filter((function(e){return!Number.isNaN(Number(e[0]))&&1<e.length})).sort((function(e,t){return t[0]-e[0]}))}(t).find((function(t){return t[0]<=e})))&&t[1]||[]}(window.outerWidth,r),o):(a=Pe(n,["fluid"],o),i=ee().sizeMapping(),[].concat(r).forEach((function(e){i.addSize([e[0],0],e[1])})),null!=a&&a.defineSizeMapping(i.build())),a),r=y||h;null!=o&&o.setTargeting("div",m),null!=o&&o.setTargeting(W,r),null!=o&&o.setCollapseEmptyDiv(!0),null!=o&&o.addService(ee().pubads());var a=Ie({id:m,slot:o,position:r,sizes:A,viewabilityObserver:null},e);t.events.publish({name:D,value:{id:m,pos:r,sizes:A,truePosition:y,timeDefined:l(m,I,O),slot:o},scope:m}),r=t.getAdsOnPage(),w&&!d(e,0,0,0,0,c)||(r[m]&&r[m].slot?oe([o]):ie(a),a.displayed=!0),we(a,r,s,t.props.offset)})),0)))},t.fillPlacements=function(e){return!!t.props&&!t.props.adsDisabled&&(function(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length?arguments[1]:void 0,n=2<arguments.length?arguments[2]:void 0,i=0;i<e.length;i++){var o=e[i],r=o.id,a=(c=o.dataset).position,d=c.sizeKey,l=void 0===(u=c.lazyLoad)?"true":u,s=c.slotId,u="false"!==l,c=o;l=a,a=s&&s!==r;(r||s)&&l&&(a&&!t||!a)&&(a&&(l=s,(a=document.createElement("div")).id=s,a.setAttribute("style","display: block; text-align: center; height: 100%"),c=a,o.appendChild(a)),n(c,{id:c.id,position:l,sizeKey:d,lazyLoad:u}),o.classList.add("placed-ad"))}}(document.querySelectorAll(".place-ad:not(.placed-ad)"),e,t.initializeAd),!0)},t.updateAdReq=function(e,i){t.props.adsDisabled||ee().cmd.push((function(){var o=i&&t.getAdOnPage(i);t.props.adTargeting=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length?arguments[2]:void 0,o={};return Object.keys(e).forEach((function(t){var n,r="".concat(e[t]);i?null!==(n=i.setTargeting)&&void 0!==n&&n.call(i,t,r):(o[t]=r,ee().pubads().setTargeting(t,r))})),n(n({},t),o)}(e,t.getAdReq(),o)}))},t.getAdReq=function(){return t.props&&t.props.adTargeting||{}},t.refreshAds=function(){var e;t.props.adsDisabled||(s.isRefresh=!0,s.changeCorrelator=!0,s.unrenderedAds=[],c=!1,u=[],e=t.getAdsOnPage(),Object.entries(e).forEach((function(n){var o=(r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,o=!1,r=void 0;try{for(var a,d=e[Symbol.iterator]();!(i=(a=d.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{i||null==d.return||d.return()}finally{if(o)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(n,2))[0],r=(n=r[1]).displayed;s.unrenderedAds.push(n),r&&(e[o]=Oe(n),ye(n),n.observer=ve(n,t.props.offset,s))})),setTimeout((function(){c=!0}),2e3))},t.removeAdPlacement=function(e){ee().cmd.push((function(){var t,n=se(e);ee().destroySlots([n]),t=e,t=(n=u).indexOf(t),n.splice(t,1)}))},t.init=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(t.isAdSlotReady())return!1;var i,d,s,u=e.plugins,c=void 0===(I=(E=(r=u||r).reduce((function(e,t){return t.init&&t.init(e)||e}),e)).adTargeting)?{}:I,g=void 0===(O=E.adUnitPath)?"":O,m=void 0===(_=E.offset)?400:_,O=(e=void 0!==(u=E.lockdownAds)&&u,void 0!==(I=E.hideTopAd)&&I),I=(u=void 0===(_=E.sizeMapping)?{}:_,E.haltDFP),_=E.adsDisabled,E=/^tragedy$/i.test(g);E=I||_||E;return t.props={adTargeting:c,adUnitPath:g,offset:m,sizeMapping:u,hideTopAd:O,adsDisabled:E},E?t.events.publish({name:C,value:{type:F}}):(ke(c),ee().cmd.push((function(){function e(){t.fillPlacements()}function i(){return"complete"===document.readyState}var o,r;ee().enableServices(),t.fillPlacements(!0),i()?e():document.addEventListener(h,(function t(){i()&&(document.removeEventListener(h,t),e())})),window.addEventListener(b,Ce),window.document.addEventListener(v,De),ee().pubads().addEventListener(w,_e),ee().pubads().addEventListener(y,Ee),ee().pubads().addEventListener(A,(o=t.getAdOnPage,function(e){var t,i=(t=Se(e.slot)).id,r=t.position,d=l(i,U,"".concat(i,"-").concat(S));(t=o(i))&&(t.creativeId=e.sourceAgnosticCreativeId,t.lineItemId=e.sourceAgnosticLineItemId),e.isEmpty?a.publish({name:C,value:n(n({},e),{},{type:i,id:i,position:r,timeRendered:d}),scope:i}):a.publish({name:x,value:n(n({},e),{},{id:i,position:r,timeRendered:d}),scope:i})})),ee().pubads().addEventListener(R,(r=t.getAdsOnPage,function(e){var t=(d=Se(e.slot)).id,i=d.position,o=r(),d=o[t];o[t]=Ie(d,d.AdSlotElement),d=l(t,T,"".concat(t,"-").concat(S)),a.publish({name:V,value:n(n({},e),{},{id:t,position:i,timeLoaded:d}),scope:t})})),ee().pubads().addEventListener(P,Ue)})),e?ee().cmd.push((function(){ee().pubads().setForceSafeFrame(!0)})):(i=t.getAdsOnPage,d=t.updateAdReq,s=o,window&&window.addEventListener&&window.addEventListener(f,(function(e){!function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return!(!e||!((null===(e=e.location)||void 0===e?void 0:e.origin)===t||null!==(e=t.match)&&void 0!==e&&e.call(t,/(safeframe|tpc)\.googlesyndication\.com$/)))}(window,e.origin)||de(e.data,i(),d,s())}),!1)),te()),p=!0,t.events.publish({name:q}),p},t.isAdSlotReady=function(){return p},t.cmd)for(;t.cmd.length;)t.cmd.shift()();t.cmd={length:0,push:function(e){e()}},window.AdSlot4=t,window.AdSlot={placeDynamicAds:t.fillPlacements,getSlot:t.getSlot,setTargeting:function(e,n){var i={};i[e]=n,t.updateAdReq(i)},setSlotTargeting:function(e,n,i){var o={};o[n]=i,t.updateAdReq(o,e.getSlotElementId())},displayAd:ie,removeAdPlacement:t.removeAdPlacement,dispatch:Re,destroyAdSlots:function(){ee().cmd.push((function(){ee().destroySlots()}))},checkAdsInViewport:function(){s.unrenderedAds=s.unrenderedAds.filter((function(e){var n=d(n=e.AdSlotElement,c?t.props.offset:0,0,0,0,c);return(e.potentiallyViewable=n)&&re(e,s),!n}))},refresh:t.refreshAds,AdSlotReady:!0,adTargeting:t.props&&t.props.adTargeting||{}}})()}()}},[[3,88]]]);
//# sourceMappingURL=adslot-bbfa1239919d24e34121.js.map
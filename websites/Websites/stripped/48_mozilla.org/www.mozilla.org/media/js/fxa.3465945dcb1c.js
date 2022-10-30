!function(){"use strict";var e={596:function(e,t,o){var r=o(624),n=o(10),i=new window._SearchParams;n.Z.init(i.params),r.Z.init()},624:function(e,t){var o={},r=Mozilla.Client,n=["https://accounts.firefox.com/","https://accounts.stage.mozaws.net/","https://accounts.firefox.com.cn/"];o.updateURL=function(e){var t=e.indexOf("?")>0?"&":"?";return e+(t+"context=fx_desktop_v3")},o.getHostName=function(e){var t=e.match(/^https?:\/\/(?:[^/?#]+)(?:[/?#]|$)/i);return t&&t[0]},o.interceptFxANavigation=function(e){e.preventDefault();for(var t=new URL(e.target.href).search,o=new window._SearchParams(t).params,r={},n=/^[\w/.%-]+$/,i=["flow_id","flow_begin_time","device_id","entrypoint","entrypoint_experiment","entrypoint_variation","utm_source","utm_campaign","utm_content","utm_term","utm_medium"],a=0;a<i.length;a++){var l=i[a];if(Object.prototype.hasOwnProperty.call(o,l)){var c=decodeURIComponent(o[l]);n.test(c)&&(r[l]=c)}}var p=r.entrypoint;return delete r.entrypoint,Mozilla.UITour.showFirefoxAccounts(r,p)},o.init=function(e){if(e=e||function(){},r._isFirefoxDesktop()){var t=parseFloat(r._getFirefoxVersion())>=80&&void 0!==Mozilla.UITour,i=document.querySelectorAll(".js-fxa-cta-link");t&&Mozilla.UITour.ping((function(){for(var t=0;t<i.length;t++){var r=i[t],a=o.getHostName(r.href);a&&-1===n.indexOf(a)||(r.href=o.updateURL(r.href),r.setAttribute("role","button"),r.oncontextmenu=function(e){e.preventDefault()},r.addEventListener("auxclick",o.interceptFxANavigation),r.addEventListener("click",o.interceptFxANavigation))}e()}))}},t.Z=o},10:function(e,t){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var r={},n=["https://accounts.firefox.com/","https://accounts.stage.mozaws.net/","https://monitor.firefox.com/","https://getpocket.com/","https://vpn.mozilla.org/","https://stage-vpn.guardian.nonprod.cloudops.mozgcp.net/","https://guardian-dev.herokuapp.com/"],i=["utm_source","utm_campaign","utm_content","utm_term","utm_medium"],a=["device_id","flow_id","flow_begin_time","entrypoint_experiment","entrypoint_variation"],l=i.concat(a,["source"]),c="fxa-product-referral-id";r.getHostName=function(e){var t=e.match(/^https?:\/\/(?:[^/?#]+)(?:[/?#]|$)/i);return t&&t[0]},r.hasUtmParams=function(e){if("object"!==o(e))return!1;for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&0===t.indexOf("utm_"))return!0;return!1},r.getFxALinkReferralData=function(e){var t;if(void 0!==Mozilla.Cookies&&Mozilla.Cookies.enabled()&&r.hasFxALinkReferralCookie()){var n=r.getFxALinkReferralCookie();if("string"==typeof n&&/^[\w/.%-]+$/.test(n)){var i="www.mozilla.org";-1!==n.indexOf("whatsnew")&&(i="www.mozilla.org-whatsnew"),-1!==n.indexOf("welcome")&&(i="www.mozilla.org-welcome"),t={entrypoint:i,utm_source:i,utm_medium:"referral",utm_campaign:n}}}return t&&e&&"object"===o(e)?Object.assign(e,t):t||null},r.hasFxALinkReferralCookie=function(){return Mozilla.Cookies.hasItem(c)},r.getFxALinkReferralCookie=function(){return Mozilla.Cookies.getItem(c)},r.setFxALinkReferralCookie=function(e){var t=void 0!==Mozilla.Cookies&&Mozilla.Cookies.enabled();if(e&&t&&!r.hasFxALinkReferralCookie()){var o=new Date;o.setTime(o.getTime()+36e5);var n=o.toUTCString();Mozilla.Cookies.setItem("fxa-product-referral-id",e,n,"/",void 0,!1,"lax")}},r.onFxALinkReferralClick=function(e){var t="_blank"===e.target.target||e.metaKey||e.ctrlKey,o=e.target.getAttribute("data-referral-id");t||e.preventDefault(),r.setFxALinkReferralCookie(o),t||(window.location.href=e.target.href)},r.bindFxALinkReferrals=function(){for(var e=document.querySelectorAll(".js-fxa-product-referral-link"),t=0;t<e.length;t++)e[t].addEventListener("click",r.onFxALinkReferralClick,!1)},r.getAttributionData=function(e){for(var t=/^[\w/.%-]+$/,o={},r=0;r<l.length;r++){var n=l[r];if(Object.prototype.hasOwnProperty.call(e,n))try{var i=decodeURIComponent(e[n]);t.test(i)&&(o[n]=i)}catch(e){}}if(Object.prototype.hasOwnProperty.call(o,"source")){if(-1!==o.source.indexOf("whatsnew")||-1!==o.source.indexOf("welcome")||-1!==o.source.indexOf("vpn-info"))return-1!==o.source.indexOf("vpn-info")?(o.utm_source="www.mozilla.org-vpn-info",o.entrypoint="www.mozilla.org-vpn-info"):-1!==o.source.indexOf("whatsnew")?(o.utm_source="www.mozilla.org-whatsnew",o.entrypoint="www.mozilla.org-whatsnew"):(o.utm_source="www.mozilla.org-welcome",o.entrypoint="www.mozilla.org-welcome"),o.utm_campaign=o.source,delete o.source,o;delete o.source}return Object.prototype.hasOwnProperty.call(o,"entrypoint_experiment")&&Object.prototype.hasOwnProperty.call(o,"entrypoint_variation")||(Object.prototype.hasOwnProperty.call(o,"device_id")&&delete o.device_id,Object.prototype.hasOwnProperty.call(o,"flow_id")&&delete o.flow_id,Object.prototype.hasOwnProperty.call(o,"flow_begin_time")&&delete o.flow_begin_time),Object.prototype.hasOwnProperty.call(o,"utm_source")&&Object.prototype.hasOwnProperty.call(o,"utm_campaign")||Object.prototype.hasOwnProperty.call(o,"entrypoint_experiment")&&Object.prototype.hasOwnProperty.call(o,"entrypoint_variation")?o:null},r.appendToDownloadURL=function(e,t){var o,r;if(e.indexOf("?")>0){if(r=window._SearchParams.queryStringToObject(e.split("?")[1]),Object.prototype.hasOwnProperty.call(t,"utm_source")&&Object.prototype.hasOwnProperty.call(t,"utm_campaign"))for(var n=0;n<i.length;n++){var l=i[n];Object.prototype.hasOwnProperty.call(r,l)&&delete r[l]}if(Object.prototype.hasOwnProperty.call(t,"entrypoint_experiment")&&Object.prototype.hasOwnProperty.call(t,"entrypoint_variation"))for(var c=0;c<a.length;c++){var p=a[c];Object.prototype.hasOwnProperty.call(r,p)&&delete r[p]}o=Object.assign(r,t)}else o=t;return e.split("?")[0]+"?"+window._SearchParams.objectToQueryString(o)},r.init=function(e){var t=r.getAttributionData(e),o=document.querySelectorAll(".js-fxa-cta-link, .js-vpn-cta-link");if("function"==typeof Object.assign&&(r.bindFxALinkReferrals(),r.hasUtmParams(t)||(t=r.getFxALinkReferralData(t)),t))for(var i=0;i<o.length;i++){var a=o[i].hasAttribute("href")?o[i].href:null;if(a){var l=r.getHostName(a);if(l&&-1!==n.indexOf(l)){var c=r.appendToDownloadURL(a,t);o[i].href=c}}}},t.Z=r}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o(624),o(10),o(596)}();
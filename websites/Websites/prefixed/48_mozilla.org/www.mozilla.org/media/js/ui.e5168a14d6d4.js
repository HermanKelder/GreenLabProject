!function(e){"use strict";var t,n,i={},o=!1,s={onMenuOpen:null,onMenuClose:null,onMenuButtonClose:null};i.open=function(e,t){t&&e.classList.add("mzp-is-animated"),e.classList.add("mzp-is-selected"),o=!0,e.querySelector(".c-menu-title").setAttribute("aria-expanded",!0),"function"==typeof s.onMenuOpen&&s.onMenuOpen(e)},i.close=function(){for(var e=document.querySelectorAll(".c-menu-category.mzp-is-selected"),t=0;t<e.length;t++)e[t].classList.remove("mzp-is-selected"),e[t].classList.remove("mzp-is-animated"),e[t].querySelector(".c-menu-title").setAttribute("aria-expanded",!1);return o=!1,"function"==typeof s.onMenuClose&&e.length>0&&s.onMenuClose(),e.length>0},i.onDocumentKeyUp=function(e){27===e.keyCode&&o&&i.close()},i.onCloseButtonClick=function(e){e.preventDefault(),"function"==typeof s.onMenuButtonClose&&s.onMenuButtonClose(),i.close()},i.toggle=function(e){e.classList.contains("mzp-is-selected")?(e.classList.remove("mzp-is-selected"),e.classList.remove("mzp-is-animated"),e.querySelector(".c-menu-title").setAttribute("aria-expanded",!1),"function"==typeof s.onMenuClose&&s.onMenuClose()):i.open(e)},i.onMouseEnter=function(e){clearTimeout(t),t=setTimeout((function(){var t=!i.close();i.open(e.target,t)}),150)},i.onMouseLeave=function(){clearTimeout(t),t=setTimeout((function(){i.close()}),150)},i.onFocusOut=function(){var e=this;setTimeout((function(){!e.contains(document.activeElement)&&e.classList.contains("mzp-is-selected")&&i.close()}),0)},i.onClickWide=function(e){e.preventDefault(),i.close(),i.open(e.target.parentNode)},i.onClickSmall=function(e){e.preventDefault(),i.toggle(e.target.parentNode)},i.isWideViewport=function(){return n.matches},i.handleState=function(){(n=matchMedia("(min-width: 768px)")).addListener((function(e){i.close(),e.matches?(i.unbindEventsSmall(),i.bindEventsWide()):(i.unbindEventsWide(),i.bindEventsSmall())})),i.isWideViewport()?i.bindEventsWide():i.bindEventsSmall()},i.bindEventsWide=function(){for(var e=document.querySelectorAll(".c-menu-category.mzp-js-expandable"),t=0;t<e.length;t++)e[t].addEventListener("mouseenter",i.onMouseEnter,!1),e[t].addEventListener("mouseleave",i.onMouseLeave,!1),e[t].addEventListener("focusout",i.onFocusOut,!1),e[t].querySelector(".c-menu-title").addEventListener("click",i.onClickWide,!1),e[t].querySelector(".c-menu-button-close").addEventListener("click",i.onCloseButtonClick,!1);document.addEventListener("keyup",i.onDocumentKeyUp,!1)},i.unbindEventsWide=function(){for(var e=document.querySelectorAll(".c-menu-category.mzp-js-expandable"),t=0;t<e.length;t++)e[t].removeEventListener("mouseenter",i.onMouseEnter,!1),e[t].removeEventListener("mouseleave",i.onMouseLeave,!1),e[t].removeEventListener("focusout",i.onFocusOut,!1),e[t].querySelector(".c-menu-title").removeEventListener("click",i.onClickWide,!1),e[t].querySelector(".c-menu-button-close").removeEventListener("click",i.onCloseButtonClick,!1);document.removeEventListener("keyup",i.onDocumentKeyUp,!1)},i.bindEventsSmall=function(){for(var e=document.querySelectorAll(".c-menu-category.mzp-js-expandable .c-menu-title"),t=0;t<e.length;t++)e[t].addEventListener("click",i.onClickSmall,!1)},i.unbindEventsSmall=function(){for(var e=document.querySelectorAll(".c-menu-category.mzp-js-expandable .c-menu-title"),t=0;t<e.length;t++)e[t].removeEventListener("click",i.onClickSmall,!1)},i.setAria=function(){for(var e=document.querySelectorAll(".c-menu-category.mzp-js-expandable .c-menu-title"),t=0;t<e.length;t++)e[t].setAttribute("aria-expanded",!1)},i.enhanceJS=function(){for(var e=document.querySelectorAll(".c-menu"),t=0;t<e.length;t++)e[t].classList.remove("mzp-is-basic"),e[t].classList.add("mzp-is-enhanced")},i.isSupported=function(){return void 0!==e.Supports&&e.Supports.matchMedia&&e.Supports.classList},i.init=function(e){if("object"==typeof e)for(var t in e)e.hasOwnProperty.call(t)&&(s[t]=e[t]);i.isSupported()&&(i.handleState(),i.setAria(),i.enhanceJS())},window.Mzp.Menu=i}(window.Mzp),function(e){"use strict";var t,n,i,o={},s={onNavOpen:null,onNavClose:null},a=!1,c=0,l=null,r=document.getElementsByTagName("html")[0];o.isLargeViewport=function(){return i.matches},o.supportsSticky=function(){return void 0!==e.Supports&&e.Supports.matchMedia&&e.Supports.classList&&e.Supports.requestAnimationFrame&&e.Supports.cssFeatureQueries&&CSS.supports("position","sticky")},o.onScroll=function(){a||(l=window.requestAnimationFrame(o.checkScrollPosition),a=!0)},o.createSticky=function(){r.classList.add("mzp-has-sticky-navigation"),l=window.requestAnimationFrame(o.checkScrollPosition),window.addEventListener("scroll",o.onScroll,!1)},o.destroySticky=function(){r.classList.remove("mzp-has-sticky-navigation"),t.classList.remove("mzp-is-scrolling"),t.classList.remove("mzp-is-hidden"),c=0,l&&window.cancelAnimationFrame(l),window.removeEventListener("scroll",o.onScroll,!1)},o.initSticky=function(){(i=matchMedia("(min-width: 768px) and (min-height: 600px)")).addListener((function(e){e.matches?o.createSticky():o.destroySticky()})),o.isLargeViewport()&&o.createSticky()},o.checkScrollPosition=function(){window.scrollY>0?t.classList.add("mzp-is-scrolling"):t.classList.remove("mzp-is-scrolling"),window.scrollY>c?window.scrollY>300&&(void 0!==e.Menu&&e.Menu.close(),t.classList.add("mzp-is-hidden")):t.classList.remove("mzp-is-hidden"),c=window.scrollY,a=!1},o.onClick=function(e){var t=e.target.parentNode.querySelector(".c-navigation-items");e.preventDefault(),e.target.classList.toggle("mzp-is-active"),t.classList.toggle("mzp-is-open");var n=!!t.classList.contains("mzp-is-open");t.setAttribute("aria-expanded",n),n?"function"==typeof s.onNavOpen&&s.onNavOpen(t):"function"==typeof s.onNavClose&&s.onNavClose(t)},o.setAria=function(){for(var e=0;e<n.length;e++)n[e].setAttribute("aria-expanded",!1)},o.bindEvents=function(){if((n=document.querySelectorAll(".c-navigation-items")).length>0){for(var e=document.querySelectorAll(".c-navigation-menu-button"),t=0;t<e.length;t++)e[t].addEventListener("click",o.onClick,!1);o.setAria()}},o.init=function(e){if("object"==typeof e)for(var n in e)e.hasOwnProperty.call(n)&&(s[n]=e[n]);o.bindEvents();var i=(t=document.querySelector(".c-navigation"))&&t.classList.contains("mzp-is-sticky")&&o.supportsSticky();i&&matchMedia("(prefers-reduced-motion)").matches?t.classList.remove("mzp-is-sticky"):i&&o.initSticky()},window.Mzp.Navigation=o}(window.Mzp),function(){"use strict";if("undefined"!=typeof Mzp&&void 0!==Mzp.Menu&&void 0!==Mzp.Navigation){var e=void 0!==window.matchMedia;!function(){if(void 0===Mozilla.Client)return!1;var e=document.querySelector(".c-navigation");e&&e.classList.add("nav-button-is-ready")}(),Mzp.Menu.init({onMenuOpen:function(){e&&window.matchMedia("(min-width: 768px)").matches}}),Mzp.Navigation.init()}}(),void 0===window.Mzp&&(window.Mzp={}),function(){"use strict";var e={switchPath:function(e,t){var n=e.pathname.slice(1).split("/"),i="/"+n[0]+"/";return!!/^(\/\w{2}-\w{2}\/|\/\w{2,3}\/)/.test(i)&&"/"+t+"/"+n.slice(1).join("/")+e.search},doRedirect:function(e){e&&(window.location.href=e)},init:function(t){for(var n=document.querySelectorAll(".mzp-js-language-switcher-select"),i=0;i<n.length;i++)n[i].setAttribute("data-previous-language",n[i].value),n[i].addEventListener("change",(function(n){var i=n.target.value,o=n.target.getAttribute("data-previous-language");"function"==typeof t&&t(o,i),e.doRedirect(e.switchPath(window.location,i))}),!1)}};window.Mzp.LangSwitcher=e}(),function(){"use strict";"undefined"!=typeof Mzp&&void 0!==Mzp.LangSwitcher&&Mzp.LangSwitcher.init((function(e,t){window.dataLayer.push({event:"change-language",languageSelected:t,previousLanguage:e}),void 0!==window.Mozilla.Glean&&window.Mozilla.Glean.pageEventPing({label:"Language Selected: "+t,type:"Change Language"})}))}(),void 0===window.Mzp&&(window.Mzp={}),function(e,t){"use strict";var n={},i=0;n.isSupported=function(){return void 0!==t.Supports&&void 0!==t.Utils&&t.Supports.classList},n.open=function(t,n){var i=e.querySelector("[aria-controls="+t+"]"),o=e.getElementById(t);i.setAttribute("aria-expanded",!0),o.setAttribute("aria-hidden",!1),o.classList.remove("is-closed"),"function"==typeof n.onDetailsOpen&&n.onDetailsOpen(o)},n.close=function(t,n){var i=e.querySelector("[aria-controls="+t+"]"),o=e.getElementById(t);i.setAttribute("aria-expanded",!1),o.setAttribute("aria-hidden",!0),o.classList.add("is-closed"),"function"==typeof n.onDetailsClose&&n.onDetailsClose(o)},n.toggle=function(t,i){"true"===e.getElementById(t).getAttribute("aria-hidden")?n.open(t,i):n.close(t,i)},n.handleControlActivation=function(e,t){var i=e.target.getAttribute("aria-controls");n.toggle(i,t)},n.initItem=function(o,s,a){var c,l,r=o,u=e.createElement("button"),d=r.parentNode;if(0===r.querySelectorAll("button").length){if(1===(l=t.Utils.nextUntil(r,s)).length)c=l[0];else{if(!(l.length>1))return;c=e.createElement("div"),l.forEach((function(e){c.appendChild(e)})),r.parentNode.insertBefore(c,r.nextSibling)}if(d.classList.add("is-details"),c.classList.add("mzp-js-details-wrapper"),!c.id){var p=s.replace(/[^a-zA-Z]+/g,"");c.id="expand-"+p+"-"+i,i+=1}c.setAttribute("aria-hidden",!0),c.classList.add("is-closed"),u.setAttribute("type","button"),u.setAttribute("aria-controls",c.id),u.setAttribute("aria-expanded",!1),u.addEventListener("click",(function(e){n.handleControlActivation(e,a)}),!1),Array.prototype.slice.call(r.childNodes).forEach((function(e){u.appendChild(e)})),r.appendChild(u),r.classList.add("is-summary")}},n.destroyItem=function(e){var t=e,n=t.parentNode,i=t.nextElementSibling,o=t.querySelector("button");0!==t.querySelectorAll("button").length&&(n.classList.remove("is-details"),i.removeAttribute("aria-hidden"),i.classList.remove("is-closed"),Array.prototype.slice.call(o.childNodes).forEach((function(e){t.appendChild(e)})),t.removeChild(o),t.classList.remove("is-summary"))},n.init=function(t,i){if(n.isSupported()){void 0===i&&(i={});for(var o=e.querySelectorAll(t),s=0;s<o.length;s++)n.initItem(o[s],t,i)}},n.destroy=function(t,i){for(var o=e.querySelectorAll(t,i),s=0;s<o.length;s++)n.destroyItem(o[s],t,i)},void 0!==t.Supports&&(t.Supports.details||n.init("summary")),n.init(".mzp-c-details > h2"),n.init(".mzp-c-details > h3"),n.init(".mzp-c-details > h4"),n.init(".mzp-c-details > h5"),n.init(".mzp-c-details > h6"),t.Details=n}(document,window.Mzp),function(){"use strict";if(void 0!==window.Mzp){var e=window.Mzp,t=".mzp-c-footer-sections .mzp-c-footer-heading";if(void 0!==e.Supports&&void 0!==e.Details&&e.Supports.matchMedia){var n=matchMedia("(max-width: 479px)");n.matches&&e.Details.init(t),n.addListener((function(n){n.matches?e.Details.init(t):e.Details.destroy(t)}))}}}(),function(){"use strict";if(void 0!==window.Mzp){var e=window.Mzp,t=".c-sub-navigation .c-sub-navigation-title";if(void 0!==e.Supports&&void 0!==e.Details&&e.Supports.matchMedia){var n=matchMedia("(max-width: 767px)");n.matches&&e.Details.init(t),n.addListener((function(n){n.matches?e.Details.init(t):e.Details.destroy(t)}))}}}(),function(){"use strict";void 0!==Mozilla.Utils&&Mozilla.Utils.onDocumentReady((function(){var e=Mozilla.Utils;if(e.initMobileDownloadLinks(),e.trackDownloadThanksButton(),void 0!==Mozilla.Client){var t=Mozilla.Client;t.isFirefoxDesktop&&t.getFirefoxDetails(e.maybeSwitchToChinaRepackImages)}})),window.addEventListener("load",(function(){document.getElementsByTagName("html")[0].classList.add("loaded")}),!1)}();
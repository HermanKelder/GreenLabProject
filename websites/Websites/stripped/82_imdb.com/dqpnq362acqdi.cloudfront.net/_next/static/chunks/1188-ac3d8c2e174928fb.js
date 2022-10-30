"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1188],{46962:function(e,n,r){r.d(n,{n:function(){return v},s:function(){return h}});var t=r(52322),o=(r(2784),r(72779)),a=r.n(o),i=r(45103),c=r(3411),u=r(91842),l=r(63331),d=r(30382);function s(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function f(){var e=s(["\n    fragment NewsItem on NewsEdge {\n        node {\n            id\n            articleTitle {\n                plainText\n            }\n            date\n            image {\n                caption {\n                    plainText\n                }\n                url\n                height\n                width\n            }\n            source {\n                homepage {\n                    label\n                }\n            }\n        }\n    }\n"]);return f=function(){return e},e}function p(){var e=s(["\n    align-items: flex-start;\n    color: inherit;\n    display: flex;\n    text-decoration-style: none;\n    text-decoration: none;\n\n    &:hover {\n        opacity: 0.8;\n    }\n\n    .poster {\n        flex-shrink: 0;\n    }\n\n    .content {\n        flex-grow: 1;\n        padding-left: ",";\n    }\n\n    .headline {\n        -webkit-box-orient: vertical;\n\n        ",";\n        margin: 0;\n        display: -webkit-box;\n        -webkit-line-clamp: 4;\n        overflow: hidden;\n    }\n\n    .metadata {\n        ",";\n        margin-top: ",";\n    }\n\n    .source {\n        margin-left: ",";\n    }\n"]);return p=function(){return e},e}var v=function(e){var n=e.headline,r=e.link,o=e.publicationDate,c=e.source,u=e.image,d=e.className,s=(u&&u.caption,(0,l.p)(new Date(o),{day:"numeric",month:"short"})),f=(null===u||void 0===u?void 0:u.maxHeight)&&(null===u||void 0===u?void 0:u.maxHeight)>100||(null===u||void 0===u?void 0:u.maxWidth)&&(null===u||void 0===u?void 0:u.maxWidth)>100?u:void 0,p=a()("news-item",d),v=(0,t.jsxs)(y,{className:p,href:r,"aria-label":n,"data-testid":"news-item",children:[(0,t.jsx)(i.PosterImage,{imageModel:f,size:"s",imageType:"none",className:"poster"}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("div",{className:"headline",children:n}),(0,t.jsxs)("div",{className:"metadata",children:[(0,t.jsx)("span",{className:"publicationDate",children:s}),(0,t.jsx)("span",{className:"source",children:c})]})]})]});return(0,t.jsx)(i.ShovelerItem,{span:4,children:v})},h=r.n(d)()(f()),y=c.default.a.withConfig({componentId:"sc-14ecacba-0"})(p(),u.spacing.m,(0,u.setTypographyType)("body"),(0,u.setTypographyType)("copyright"),u.spacing.xxs,u.spacing.xs)},79343:function(e,n,r){var t=r(52322),o=r(70314),a=(r(2784),r(3411)),i=r(45103),c=r(91842),u=r(21849);function l(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function d(){var e=l(["\n    display: block;\n    margin: 0 auto;\n"]);return d=function(){return e},e}function s(){var e=l(["\n    ","\n    padding-top: 5rem;\n    padding-bottom: 1.5rem;\n    text-align: center;\n"]);return s=function(){return e},e}var f="retry-error",p="retry-error-debug",v="retry";var h=(0,a.default)(i.SecondaryButton).withConfig({componentId:"sc-b53e9d51-0"})(d()),y=(0,a.default)(i.ErrorMessage).withConfig({componentId:"sc-b53e9d51-1"})(s(),(0,c.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color"));n.ZP=function(e){var n=e.name,r=e.error,a=e.errorMessage,c=e.onClickRetry,l=e.canRetry,d="Prod"===(0,o.default)().publicRuntimeConfig.stage,s=(0,u.N)({id:"error_common_sorryLoadingPage",defaultMessage:"Sorry, there was an error loading the page."}),m=(0,u.N)({id:"common_buttons_retry",defaultMessage:"Try again"});return(0,t.jsxs)("div",{"data-testid":f,children:[(0,t.jsx)(y,{children:null!==a&&void 0!==a?a:s}),l&&(0,t.jsx)(h,{"data-testid":v,onColor:"textPrimary",onClick:function(e){return c(e)},children:m}),!d&&(0,t.jsxs)("div",{"data-testid":p,children:[(0,t.jsx)(i.SectionTitle,{children:"Error:"}),(0,t.jsx)(y,{children:'"'.concat(n,'" failed to load. Reason: "').concat(null===r||void 0===r?void 0:r.message,'" Check console for errors.')})]})]})}},53021:function(e,n,r){r.d(n,{q:function(){return a}});var t=r(34806),o=r(78432),a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.qB.ACTION_ONLY,r=arguments.length>2?arguments[2]:void 0,a=(0,t.B)().context,i=a.pageType,c=a.subPageType,u=a.pageConst,l={type:i,subType:c,id:u};return function(){return(0,o.ar)(l,e,n,r)}}},97382:function(e,n,r){r.d(n,{F1:function(){return l},Oh:function(){return d}});var t=r(52322),o=r(2784),a=r(53744);function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return i(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=o.createContext({}),l=function(e){var n=e.children,r=c(o.useState(!1),2),a=r[0],i=r[1],l=function(e){p(e),i(e)};o.useEffect((function(){l(f())}),[]);var d={isPreferenceEnabled:a,setIsPreferenceEnabled:l};return(0,t.jsx)(u.Provider,{value:d,children:n})},d=function(){return o.useContext(u)},s="hero_video_autoplay_disabled",f=function(){return!(!0===(0,a.ID)(s))},p=function(e){e?(0,a.dZ)(s):(0,a._2)(s,!0)}},64935:function(e,n,r){r.d(n,{d:function(){return c}});var t=r(2784),o=r(15907),a=r(27018),i=r(65818),c=function(e,n,r){var c=(0,t.useState)(!1),u=c[0],l=c[1],d=(0,t.useState)(!1),s=d[0],f=d[1],p=(0,i.Vu)();(0,t.useEffect)((function(){e&&!u&&((0,a.ar)(p,"".concat(r,"-playerready")),l(!0)),n&&!s&&e&&((0,a.ar)(p,function(e){var n={UNSUPPORTED_ACTION:"".concat(e,"-unsupported"),NO_AD:"".concat(e,"-no-ad"),THIRD_PARTY_AD:"".concat(e,"-3p-ad"),FIRST_PARTY_NO_VIDEO:"".concat(e,"-1p-novid"),FIRST_PARTY_VIDEO_FIRED:"".concat(e,"-1p-vidfire")};if(!window.mediaOrchestrator)return n.NO_AD;var r=window.mediaOrchestrator.getEventsLogForEvent(o.MediaEvent.MEDIA_PLAYBACK_EVENT_NAME);if(0===r.length)return n.UNSUPPORTED_ACTION;switch(r[0].type){case o.AdVideoEventType.NO_AUTOPLAY_VIDEO_DETECTED_EVENT_TYPE:return n.NO_AD;case o.AdVideoEventType.THIRD_PARTY_AD_DETECTED_EVENT_TYPE:return n.THIRD_PARTY_AD;case o.AdVideoEventType.AUTOPLAY_VIDEO_MAYBE_PRESENT_EVENT_TYPE:var t=new Set(r.map((function(e){return e.type})));return t.has(o.AdVideoEventType.NO_AUTOPLAY_VIDEO_DETECTED_EVENT_TYPE)?n.FIRST_PARTY_NO_VIDEO:t.has(o.AdVideoEventType.PLAY)?n.FIRST_PARTY_VIDEO_FIRED:n.UNSUPPORTED_ACTION;default:return n.UNSUPPORTED_ACTION}}(r)),f(!0))}),[e,n])}},18854:function(e,n,r){var t=r(52322),o=(r(2784),r(70545)),a=r(88494),i=r(79343),c=r(2388),u=r(18520);function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return l(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.Z=function(e){var n=e.groupConfig,r=e.pageQueryData,l=e.hideErrors,s=e.hasIntersected,f=void 0===s||s,p=r.data,v=r.config,h=r.error,y=r.fetching,m=r.retry,g=r.shouldRenderError,T=r.allErrorsRetryable;return((0,c.h)({weblabID:u.lh.IMDB_HOME_LAZY_LOADING_501674,treatments:{T1:!0}})?y||!f:y)?(0,t.jsx)(o.ZP,{"data-testid":"entity-group-loader",height:"feature"}):l&&g?null:(0,t.jsxs)(t.Fragment,{children:[g&&(0,t.jsx)(i.ZP,{error:h,name:v.queryName,canRetry:T,onClickRetry:function(){return null===m||void 0===m?void 0:m()}}),!g&&Object.entries(n).map((function(e){var n=d(e,2),r=n[0],o=n[1];if(o.shouldRender&&p&&!1===o.shouldRender(p))return null;var i=o.component;return(0,t.jsx)(a.Z,{name:r,parent:"PageQueryEntity",children:(0,t.jsx)(i,{data:p,fetching:y,error:h})},r)}))]})}},23044:function(e,n,r){r.d(n,{n:function(){return o}});var t=r(52169),o=function(e,n){var r,o,a,i;if((null===(r=e.node)||void 0===r?void 0:r.date)&&(null===(o=e.node)||void 0===o?void 0:o.source)&&(null===(a=e.node)||void 0===a?void 0:a.articleTitle)){var c=e.node,u=c.id,l=c.articleTitle,d=c.date,s=c.image,f=c.source,p=u,v="/news/".concat(u,"/?ref_=").concat(n),h=(null===l||void 0===l?void 0:l.plainText)||"";return{newsId:p,headline:h,link:v,publicationDate:d,source:(null===(i=f.homepage)||void 0===i?void 0:i.label)||"",image:(0,t.G)(s,h)}}}}}]);
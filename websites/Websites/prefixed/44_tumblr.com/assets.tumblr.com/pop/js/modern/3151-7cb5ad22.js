"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[3151],{6930:(e,t,s)=>{s.d(t,{Z:()=>S});var n=s(34501),o=s(25190),r=s(32468),i=s(32089),a=s(64633),c=s(59215),l=s(80328),d=s(28396),h=s(78756),u=s(2629);const p=(0,c.X9)((e=>{var t;let{activePage:s,headerTheme:n,appContext:{configRef:c},pollerContext:{legacyInboxUnreadStatus:p,unseenPosts:g,notificationCount:m,privateGroupBlogUnreadPostCounts:x},messagingContext:{unreadMessages:k}}=e;const b=null==k?void 0:k.unreadMessagesCount,f=Object.values(x??{}).reduce(((e,t)=>e+Number(t)),0),C=(null==c?void 0:c.takeoverLogoUrl)??"",v=(0,l.Z)(a.yy.LoginRegisterHeader+(s?`_${s.name}`:"")),j={blogName:(0,r.Sr)(s)&&(null===(t=s.extraAttributes)||void 0===t?void 0:t.blogName)||void 0,unreadMessagesCount:b,registrationSource:v,privateGroupBlogUnreadPostCount:f,inboxStatus:p,logoUrl:C,notificationCount:m,headerTheme:n||i.Ov.Light};return(0,u.jsx)(o.ZP,{children:e=>{let{isMobile:t}=e;return t?(0,u.jsx)(h.Z,{...j}):(0,u.jsx)(d.Z,{...j,activePage:s,unseenPostCount:g})}})}),{appContext:!0,pollerContext:!0,messagingContext:!0});var g=s(6790),m=s(33118),x=s(57622),k=s(50209),b=s.n(k),f=s(95004),C=s(79615),v=s(77095),j=s(54382),D=s(58388),w=s(43523),M=s(78667);const T="s0qqG",P="WGFYZ",I="_h_yT",Z="https://www.google.com/chrome",N="https://www.mozilla.org/firefox",_="unsupported-browser-message-dismiss";class O extends f.Component{constructor(){super(...arguments),b()(this,"state",{isVisible:this.shouldShowMessage()}),b()(this,"onDismissClick",(()=>{const{setCookie:e}=this.props.appContext,t=new Date(Date.now()+6048e5);this.setState({isVisible:!1}),e(_,"1",{expires:t}),this.logViewEvent(w.J.UnsupportedBrowserMessageDismiss)}))}render(){const{isVisible:e}=this.state;if(!e)return null;const{_t:t}=this.props.appContext,s=this.getMessage();return(0,u.jsxs)("div",{className:T,children:[s,(0,u.jsx)(C.Z,{label:t("Dismiss"),className:P,onClick:this.onDismissClick,children:(0,u.jsx)(v.Z,{size:{width:12,height:12}})})]})}componentDidMount(){const{isVisible:e}=this.state;e&&this.logViewEvent(w.J.UnsupportedBrowserMessageView)}logViewEvent(e){const{logEvent:t,getBrowserInfo:s}=this.props.appContext,{userAgent:n}=s(),{ua:o}=n;t({eventName:e,eventDetails:{ua:o}})}shouldShowMessage(){const{getCookie:e}=this.props.appContext;if("1"===e(_))return!1;const{isSupported:t,isCrawler:s}=this.props.appContext.getBrowserInfo();return!t&&!s}getMessage(){const{getBrowserInfo:e}=this.props.appContext,{deviceType:t}=e();return t===D.ZP.Desktop?this.getDesktopMessage():this.getDefaultMessage()}getDesktopMessage(){return(0,u.jsx)("div",{className:I,children:(0,u.jsx)(j.ZP,{comment:"Placeholders here are link tags - links are to each browser's page",components:{chrome:(0,u.jsx)("a",{href:Z,target:"_blank",rel:"noopener",children:"Chrome"}),firefox:(0,u.jsx)("a",{href:N,target:"_blank",rel:"noopener",children:"Firefox"}),safari:(0,u.jsx)("a",{href:"https://support.apple.com/downloads/safari",target:"_blank",rel:"noopener",children:"Safari"}),edge:(0,u.jsx)("a",{href:"https://www.microsoft.com/windows/microsoft-edge",target:"_blank",rel:"noopener",children:"Edge"})},children:"You are using an unsupported browser and things might not work as intended. Please make sure you're using the latest version of [chrome/], [firefox/], [safari/], or [edge/]."})})}getDefaultMessage(){return(0,u.jsx)("div",{className:I,children:(0,u.jsx)(j.ZP,{comment:"Placeholders here are link tags - links are to each browser's page",components:{chrome:(0,u.jsx)("a",{href:Z,target:"_blank",rel:"noopener",children:"Chrome"}),firefox:(0,u.jsx)("a",{href:N,target:"_blank",rel:"noopener",children:"Firefox"})},children:"You are using an unsupported browser and things might not work as intended. Please make sure you're using the latest version of [chrome/] or [firefox/]."})})}}const A=(0,M.HJ)(O);var E=s(66498);const y="D5eCV",S=function(e){let{activePage:t,children:s,headerTheme:o,headerWrapperClassName:r,headerUseDefaultPalette:i=!1}=e;const{isLoggedIn:a}=(0,M.bp)(),c=(0,u.jsx)(p,{activePage:t,headerTheme:o}),l=r?(0,u.jsxs)("div",{className:r,children:[i&&(0,u.jsx)(m.Z,{chosenPalette:E.Z.trueBlue,scope:r.split(" ").map((e=>`.${e}`)).join("")}),c]}):c;return(0,u.jsx)("div",{className:y,children:(0,u.jsx)(n.Z,{children:(0,u.jsxs)(x.Z,{children:[!a&&(0,u.jsx)(g.ZP,{disable:g._b}),l,s,(0,u.jsx)(A,{})]})})})}},34501:(e,t,s)=>{s.d(t,{Z:()=>g});var n=s(50209),o=s.n(n),r=s(29774),i=s(95004),a=s(43523),c=s(59215),l=s(36696),d=s(55855),h=s(44856),u=s(2629);class p extends i.Component{constructor(){super(...arguments),o()(this,"getTimelineContext",(()=>this.timelineContext)),o()(this,"setTimelineContext",(e=>{this.timelineContext=e})),o()(this,"state",{isMediaDocked:!1,dockedTimelineObject:null,reparentableMediaManager:null,canAutoDock:!1,getTimelineContext:this.getTimelineContext}),o()(this,"idGen",new l.Z),o()(this,"getDockableContextValue",(0,r.Z)((e=>{let{isMediaDocked:t,dockedTimelineObject:s,reparentableMediaManager:n,canAutoDock:o}=e;return{isMediaDocked:t,dockedTimelineObject:s,reparentableMediaManager:n,canAutoDock:o,getTimelineContext:this.getTimelineContext,dock:this.dock,undock:this.undock,clearDockedInfo:this.clearDockedInfo,setDockedTimelineObject:this.setDockedTimelineObject,setTimelineContext:this.setTimelineContext,getId:this.getId}}))),o()(this,"dock",(e=>{let{dockedTimelineObject:t,reparentableMediaManager:s,isAutoDock:n,canAutoDock:o}=e;return this.setState((e=>{let{isMediaDocked:r,dockedTimelineObject:i,canAutoDock:c}=e;return this.logDockEvent(a.J.DockElement,t,n,o),r&&i&&this.logDockEvent(a.J.UndockElement,i,!0,c),{isMediaDocked:!0,dockedTimelineObject:t,reparentableMediaManager:s,canAutoDock:o}}))})),o()(this,"undock",(()=>this.setState((e=>{let{isMediaDocked:t,dockedTimelineObject:s,canAutoDock:n}=e;return t&&s&&this.logDockEvent(a.J.UndockElement,s,!1,n),{isMediaDocked:!1}})))),o()(this,"clearDockedInfo",(()=>this.setState({dockedTimelineObject:null,reparentableMediaManager:null,canAutoDock:!1}))),o()(this,"setDockedTimelineObject",(e=>this.setState({dockedTimelineObject:e}))),o()(this,"getId",(()=>this.idGen.next())),o()(this,"logDockEvent",((e,t,s,n)=>{const{appContext:{logEvent:o},adContext:{adPlacementConfiguration:r,hydraConfigInstanceId:i}}=this.props;o({eventName:e,eventDetails:{is_auto_dock_event:s,can_auto_dock:n,...t.placementId&&{placement_id:t.placementId},...(0,d.U)({adPlacementConfiguration:r,hydraConfigInstanceId:i,timelineObject:t})}})}))}render(){return(0,u.jsx)(h.Z.Provider,{value:this.getDockableContextValue(this.state),children:this.props.children})}}const g=(0,c.X9)(p,{appContext:!0,adContext:!0})},68144:(e,t,s)=>{s.d(t,{Cq:()=>l,UX:()=>c,jV:()=>i,nT:()=>a,sn:()=>r});var n=s(36343);const o=e=>(0,n.q)("caret-thin",{altIcon:"caret-thin-alt",style:{transform:`rotate(${e}deg)`,transformOrigin:"center"}}),r=(0,n.q)("caret-thin",{altIcon:"caret-thin-alt"}),i=o(270),a=o(0),c=o(90),l=o(180);[i,a,c,l].forEach((e=>e.defaultProps={size:{width:15,height:9},useAltIcon:!1}))},22183:(e,t,s)=>{s.d(t,{Z:()=>o});const n=(0,s(36343).q)("edit");n.defaultProps={size:{width:24,height:24}};const o=n},19299:(e,t,s)=>{s.d(t,{Z:()=>o});const n=(0,s(36343).q)("lock");n.defaultProps={size:{width:24,height:24}};const o=n},57622:(e,t,s)=>{s.d(t,{Z:()=>b});var n=s(50209),o=s.n(n),r=s(5754),i=s.n(r),a=s(95004),c=s(79153);const l=s.p+"src/assets/icons/tumblr-bot-de298e05.png";var d=s(98181),h=s(11476),u=s(93613),p=s(36696),g=s(78093);const m={toastHolder:"CkEXb",toast:"a0A37",in:"P8JEa",out:"aNHK7",error:"hAkP2",success:"LNdFd",tumblrbot:"tm7hO"};var x=s(2629);class k extends a.Component{constructor(){super(...arguments),o()(this,"state",{toasts:[]}),o()(this,"toastIdGen",new p.Z),o()(this,"toggleToast",((e,t,s,n)=>{const o=t||"notice",r=s??this.toastIdGen.next();this.setState((t=>{const{toasts:i}=t;return s&&i.find((e=>e.id===r))?t:{toasts:i.concat({text:e,id:r,type:o,className:n})}}),(()=>this.removeLastAddedToast(o)))})),o()(this,"removeLastAddedToast",(e=>{setTimeout((()=>{this.setState((e=>{const{toasts:t}=e,s=[...t];return s.shift(),{toasts:s}}))}),"error"===e?g.errorToastVisibleDurationInMs:g.toastVisibleDurationInMs)}))}renderIcon(e){const{renderIcon:t}=this.props;if(!t)return;const s={width:20,height:20};switch(e){case"error":return(0,x.jsx)(h.Z,{size:s});case"success":return(0,x.jsx)(d.Z,{size:s});case"tumblrbot":return(0,x.jsx)("img",{src:l,alt:"",width:50});default:return null}}render(){const{toastWrapperClass:e,toastClass:t}=this.props;return(0,x.jsxs)(u.g.Provider,{value:{toggleToast:this.toggleToast},children:[this.state.toasts.length>0?(0,c.createPortal)((0,x.jsx)("div",{className:i()(m.toastHolder,e),children:this.state.toasts.map((e=>{let{text:s,id:n,type:o,className:r}=e;return(0,x.jsxs)("div",{className:i()(m.toast,m[o],t,r),children:[this.renderIcon(o),s]},n)}))}),document.body):null,this.props.children]})}}o()(k,"defaultProps",{renderIcon:!0});const b=k},92587:(e,t,s)=>{s.d(t,{Z:()=>g});var n=s(5754),o=s.n(n),r=s(55351);const i="gPQR5",a="JR92v",c="lSyOz",l="Ajmg_",d="pTaNm",h="e1knl",u="FGfuE";var p=s(2629);const g=e=>{let{children:t,sidebar:s,maxMasonryColumns:n=4,mainContentIsMasonry:g,innerBorder:m,className:x}=e;return(0,p.jsxs)("div",{className:o()(i,x,{[a]:g&&2===n,[l]:g&&3===n,[d]:g&&4===n,[u]:m}),children:[(0,p.jsx)("div",{className:c,children:t}),(0,p.jsx)(r.Z,{children:(0,p.jsx)("div",{className:h,children:s})})]})}}}]);
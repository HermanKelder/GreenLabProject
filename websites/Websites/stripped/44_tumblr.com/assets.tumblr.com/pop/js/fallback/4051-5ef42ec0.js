"use strict";(self.webpackChunk_tumblr_redpop=self.webpackChunk_tumblr_redpop||[]).push([[4051],{64051:(e,t,s)=>{s.d(t,{Z:()=>j,c:()=>F});var r=s(54138),i=s.n(r),n=s(50209),o=s.n(n),a=s(29774),h=s(95004),l=s(63665),c=s(60023),u=s(18599),p=s(53739),g=s(58546),d=s(86033),f=s(5754),v=s.n(f),R=s(3732),P=s(96467);const m={pullToRefresh:"gxf2Y",refreshing:"bZWbL",wipe:"b4eLl",changeColor:"d8uWm",innerCircle:"sRM0W",outerCircle:"v2cZ4"};var x=s(2629),b=e=>{var t,s=e.isRefreshing,r=e.pullingProgress,i=void 0===r?0:r;if(!s){var n=Math.min(1,Math.max(i,0)),o=Math.pow(n,4);t={strokeDashoffset:P.pullToRefreshCircumferencePx*(1-o)}}return(0,x.jsx)(R.SL,{children:e=>{var r=e?e.linkColor:void 0;return(0,x.jsx)("div",{className:v()(m.pullToRefresh,s?m.refreshing:m.pulling),children:(0,x.jsx)("svg",{viewBox:"0 0 ".concat(P.pullToRefreshHeightPx," ").concat(P.pullToRefreshHeightPx),height:"".concat(P.pullToRefreshHeightPx,"px"),width:"".concat(P.pullToRefreshHeightPx,"px"),children:(0,x.jsx)("circle",{stroke:r,cx:P.pullToRefreshHeightPx/2,cy:P.pullToRefreshHeightPx/2,r:P.pullToRefreshHeightPx/2-P.pullToRefreshPaddingPx,style:t})})})}})};b.defaultProps={};const T=b;var S,C=s(94576);!function(e){e[e.PullingToRefresh=0]="PullingToRefresh",e[e.RefreshingResults=1]="RefreshingResults",e[e.RefreshedResults=2]="RefreshedResults"}(S||(S={}));class I extends h.Component{constructor(){super(...arguments),o()(this,"state",{refreshingState:S.PullingToRefresh,gestureStart:0,gestureDistance:0}),o()(this,"canPullToRefresh",(()=>(this.props.scrollContainer!==(0,p.Z)()?this.props.scrollContainer.scrollTop:C.ZP.getInfo().scrollY)<=0&&this.state.refreshingState!==S.RefreshingResults)),o()(this,"touchStart",(e=>{e.stopPropagation(),this.canPullToRefresh()&&this.setState({gestureStart:e.touches[0].screenY,gestureDistance:0,refreshingState:S.PullingToRefresh})})),o()(this,"touchMove",(e=>{if(e.stopPropagation(),!this.canPullToRefresh())return Promise.resolve();var t=(e.touches[0].screenY-this.state.gestureStart)/2,s=t>50?S.RefreshingResults:S.PullingToRefresh;return new Promise((e=>{this.state.refreshingState!==S.RefreshedResults&&s===S.RefreshingResults?this.setState({refreshingState:s,gestureDistance:t},(()=>{this.props.refresh().then((()=>this.setState({refreshingState:S.RefreshedResults},e)))})):this.setState({gestureDistance:t},e)}))})),o()(this,"touchEnd",(e=>{e.stopPropagation(),this.setState({gestureStart:0,gestureDistance:0})})),o()(this,"attachHandlers",(e=>{e&&(e.addEventListener("touchstart",this.touchStart),e.addEventListener("touchmove",this.touchMove),e.addEventListener("touchend",this.touchEnd))})),o()(this,"removeHandlers",(e=>{e&&(e.removeEventListener("touchstart",this.touchStart),e.removeEventListener("touchmove",this.touchMove),e.removeEventListener("touchend",this.touchEnd))}))}componentDidUpdate(e){var t=this.props.scrollContainer,s=e.scrollContainer;!t&&s&&this.attachHandlers(s),t&&!s&&this.removeHandlers(t),t&&s&&t!==s&&(this.removeHandlers(t),this.attachHandlers(s))}componentDidMount(){this.attachHandlers(this.props.scrollContainer)}componentWillUnmount(){this.removeHandlers(this.props.scrollContainer)}render(){var e;switch(this.state.refreshingState){case S.RefreshingResults:e={isRefreshing:!0};break;case S.PullingToRefresh:e={pullingProgress:this.state.gestureDistance/50};case S.RefreshedResults:}var t=0;switch(this.state.refreshingState){case S.PullingToRefresh:t=this.state.gestureDistance;break;case S.RefreshedResults:t=0;break;case S.RefreshingResults:t=50}return(0,x.jsx)("div",{style:{height:t,display:"flex",flexDirection:"column",overflow:"hidden"},children:(0,x.jsx)(T,i()({},e))})}}var F={direction:l.cU.Bottom,lockScrollOnObjectUpdate:!1,getNextLink:e=>{var t,s;return null==e||null===(t=e.response)||void 0===t||null===(s=t.links)||void 0===s?void 0:s.next}};class j extends h.Component{constructor(){var e;super(...arguments),e=this,o()(this,"state",(()=>{var e=this.props.getInitialPage,t=null==e?void 0:e(),s=null==t?void 0:t.objects,r=null==t?void 0:t.nextLink;return i()(i()({},this.getEmptyInitialState()),{},{hasFetchedInitialPage:!!s,objects:s||[],nextLink:r})})()),o()(this,"getObjectsToRender",(0,a.Z)(((e,t)=>(null==t?void 0:t.filter((t=>!(null!=e&&e(t)))))||[]))),o()(this,"scrollToTop",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto",s=e.getScrollableContainer();null!=s&&s.scrollTo&&s.scrollTo({behavior:t,top:0,left:0})})),o()(this,"scrollToBottom",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto",s=e.props.scrollContainer,r=e.getScrollableContainer();null!=r&&r.scrollTo&&r.scrollTo({behavior:t,top:((0,l.Re)(s)?s:document.body).scrollHeight,left:0})})),o()(this,"shouldRenderMainLoader",(()=>!this.state.hasFetchedInitialPage)),o()(this,"fetchNextPage",(function(){var t,s,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.state.nextLink;return e.canFetchNextPage(r)?(null===(t=(s=e.props).onFetchNextPage)||void 0===t||t.call(s),e.handleContentFetch({fetchPromise:e.getFetchNextPageRequest(r).fetch(),requestType:l.vO.Pagination,fetchingState:{loadingNextPage:!0},fetchedState:{loadingNextPage:!1},getObjectsFromResponse:e.addObjectsToExisting})):Promise.resolve()})),o()(this,"canFetchNextPage",(e=>{var t=this.state,s=t.loadingNextPage,r=t.refreshingPage,i=t.apiRequestFailed;return!(i&&Date.now()-i<2e3)&&(!s&&!r&&!!e)})),o()(this,"refresh",(()=>{var e=this.props,t=e.endpointApiRequest,s=e.direction;return this.state.refreshingPage?Promise.resolve():(s===l.cU.Bottom&&this.scrollToTop(),t?this.handleContentFetch({fetchPromise:t.fetch(),requestType:l.vO.Refresh,fetchingState:{refreshingPage:!0},fetchedState:{refreshingPage:!1,loadingNextPage:!1}}):Promise.resolve())})),o()(this,"endpointApiRequestAvailable",(e=>!!e)),o()(this,"fetchInitialPage",(()=>this.endpointApiRequestAvailable(this.props.endpointApiRequest)?this.handleContentFetch({fetchPromise:this.props.endpointApiRequest.fetch(),requestType:l.vO.Initial,fetchingState:{objects:[],loadingNextPage:!0},fetchedState:{hasFetchedInitialPage:!0,loadingNextPage:!1}}):Promise.resolve())),o()(this,"transformObjects",(e=>{var t=window.scrollY;this.setState((t=>({objects:e(t.objects)})),(()=>{this.props.lockScrollOnObjectUpdate&&window.scrollTo({top:t})}))})),o()(this,"cancelInProgressFetchIfNecessary",(()=>{this.fetchInProgress&&(this.fetchInProgress.cancel(),this.fetchInProgress=null)})),o()(this,"getScrollableContainer",(()=>this.props.scrollContainer||window))}componentDidMount(){return this.props.imperativeRefreshReference&&(this.props.imperativeRefreshReference.current=()=>this.refresh()),this.state.hasFetchedInitialPage?Promise.resolve():this.fetchInitialPage()}componentWillUnmount(){this.cancelInProgressFetchIfNecessary()}componentDidUpdate(e){this.didChangeEndpoint(e)&&(this.cancelInProgressFetchIfNecessary(),this.setState(this.getEmptyInitialState(),(()=>this.fetchInitialPage())))}render(){var e=this.props,t=e.initialLoader,s=e.loader,r=e.scrollContainer,i=void 0===r?(0,p.Z)():r,n=e.emptyView,o=e.errorView,a=e.pullToRefresh,h=e.debug,c=e.isObjectOmittedFromRender,u=e.direction,d=this.state,f=d.objects,v=d.apiRequestFailed,R=this.getObjectsToRender(c,f),P=this.props.children,m=u===l.cU.Top,b=this.shouldRenderMainLoader()?t||s:v?o:(0,g.y)(R)&&n;return(0,x.jsxs)(x.Fragment,{children:[a&&(0,x.jsx)(I,{refresh:this.refresh,scrollContainer:i,debug:h}),m&&b,null==P?void 0:P({objects:R,refresh:this.refresh,transformObjects:this.transformObjects}),!m&&b]})}getEmptyInitialState(){return{objects:[],hasFetchedInitialPage:!1,refreshingPage:!1,loadingNextPage:!1,apiRequestFailed:!1,nextLink:null}}didChangeEndpoint(e){var t=this.props.endpointApiRequest;return e.endpointApiRequest?!e.endpointApiRequest.isEqualTo(t):!!t}onPagination(e){var t,s;null===(t=(s=this.props).onPagination)||void 0===t||t.call(s,e)}getFetchNextPageRequest(e){return new c.x(this.props.appContext.apiFetch,null==e?void 0:e.href)}handleContentFetch(e){var t=e.fetchPromise,s=e.requestType,r=e.fetchingState,n=e.fetchedState,o=e.getObjectsFromResponse,a=void 0===o?this.props.getObjectsFromResponse:o;this.cancelInProgressFetchIfNecessary(),this.preHandleContentFetch(s);var h=this.props,c=h.getNextLink,g=h.scrollContainer,f=void 0===g?(0,p.Z)():g,v=h.direction,R=h.appContext.getBrowserInfo;return new Promise((e=>{this.setState(i()({},r),(()=>{this.fetchInProgress=(0,d.Z)(t),this.fetchInProgress.then((t=>{var r=(0,u.wQ)(R())&&v===l.cU.Top&&s!==l.vO.Initial&&!!f,o=r&&(0,l.Re)(f)&&f.getAttribute("style")||l.rF;r&&(0,l.Re)(f)&&f.setAttribute("style","".concat(o,"; overflow-y: hidden"));var h=a(t),p=null==c?void 0:c(t);this.onPagination({objects:h,nextLink:p,response:t,requestType:s}),this.setState(i()(i()({},n),{},{objects:h,nextLink:p}),(()=>{this.fetchInProgress=null,r&&(0,l.Re)(f)&&f.setAttribute("style",o),e()}))})).catch((t=>{var r=this.props.onPaginationError;this.setState(i()(i()({},n),{},{apiRequestFailed:Date.now()}),(()=>{r&&r({error:t,requestType:s}),e()}))}))}))}))}}o()(j,"defaultProps",F)},63665:(e,t,s)=>{s.d(t,{Re:()=>a,cU:()=>i,rF:()=>o,vO:()=>r});var r,i,n=s(53739);!function(e){e[e.Initial=0]="Initial",e[e.Pagination=1]="Pagination",e[e.Refresh=2]="Refresh"}(r||(r={})),function(e){e.Bottom="bottom",e.Top="top",e.Right="right"}(i||(i={}));var o="";function a(e){return!!e&&e!==(0,n.Z)()}},53739:(e,t,s)=>{s.d(t,{Z:()=>r});const r=()=>window}}]);
/**
     * news.cn
     * @version v1.0.1
     * @license MIT
     * @time Tue Jan 18 2022 17:04:32 GMT+0800 (中国标准时间)
     */!function o(n,a,l){function d(i,e){if(!a[i]){if(!n[i]){var t="function"==typeof require&&require;if(!e&&t)return t(i,!0);if(c)return c(i,!0);var r=new Error("Cannot find module '"+i+"'");throw r.code="MODULE_NOT_FOUND",r}var s=a[i]={exports:{}};n[i][0].call(s.exports,function(e){return d(n[i][1][e]||e)},s,s.exports,o,n,a,l)}return a[i].exports}for(var c="function"==typeof require&&require,e=0;e<l.length;e++)d(l[e]);return d}({1:[function(e,i,t){"use strict";function g(e,i,t){var r={swiperID:e.swiperID||".swiper-container",id:e.id,loop:e.loop||!1,autoplay:e.autoplay||0,effect:e.effect||"slide",slidesPerView:e.slidesPerView||1,slidesPerGroup:e.slidesPerGroup||1,spaceBetween:e.spaceBetween||0,onSlideChangeEnd:t,centeredSlides:e.centeredSlides||!1,onInit:function(e){}};"isIE"==XHOME.browser.browserVersion().browserType&&10==XHOME.browser.browserVersion().ieType&&(r.effect="slide"),"isIE"!=XHOME.browser.browserVersion().browserType||9!=XHOME.browser.browserVersion().ieType&&8!=XHOME.browser.browserVersion().ieType?(r.direction=e.direction||"horizontal",e.lazy&&(r.lazyLoading=!0,r.lazyLoadingInPrevNext=!0,r.lazyLoadingInPrevNextAmount=2),e.hasArrow&&(r.prevButton=e.id+" .swiper-button-prev",r.nextButton=e.id+" .swiper-button-next")):(r.mode=e.direction||"horizontal",e.lazy&&XHOME.lazy.loading(r.id)),e.hasPagination&&(r.pagination=e.id+" .swiper-pagination",r.paginationClickable=!0);var s=new Swiper(r.id+" "+r.swiperID,r);"isIE"!=XHOME.browser.browserVersion().browserType||9!=XHOME.browser.browserVersion().ieType&&8!=XHOME.browser.browserVersion().ieType||e.hasArrow&&($(e.id+" .swiper-button-prev").on("click",function(e){e.preventDefault(),s.swipePrev()}),$(e.id+" .swiper-button-next").on("click",function(e){e.preventDefault(),s.swipeNext()})),i&&i(s)}function O(e){$(e).on("click",".media-close",function(){XHOME.media.close(),x()})}function v(e){window.navigator.userAgent.toLocaleLowerCase().match(/(trident)\/([\d.]+)/)&&$(e).removeClass("hide")}function x(e){$(e).addClass("hide")}function M(){$("body").find(".btn-horn").removeClass("isPlaying"),XHOME.media.close()}function h(e){$(e).on("click",".btn-horn",function(){var e,i,t,r=$(this);if($(this).hasClass("isPlaying"))$(this).removeClass("isPlaying"),XHOME.media.close();else{M(),$(this).addClass("isPlaying");var s=$(this).attr("data-tit"),o=$(this).attr("data-url");-1<o.indexOf("_title_content.mp3")?(e=o,i=$(this),t=function(e){e&&n(s,o,r)},$.ajax({type:"post",url:"https://contentapi.news.cn/ossUrlExist/",data:{url:e},success:function(e){e?t&&t(!0):(alert("音频正在合成中，请稍后"),i.removeClass("isPlaying"),t&&t(!1))},error:function(){alert("音频正在合成中，请稍后"),i.removeClass("isPlaying"),t&&t(!1)}})):n(s,o,r)}})}function n(e,i,t){XHOME.media.begin({selector:"#audioBox",type:"mp3",hasControl:!0,isAutoPlay:!0,isLoop:!1,list:[{title:e,url:i}],callback:function(e){},playerEndCallback:function(e){"ended"==e&&t.removeClass("isPlaying")}})}"isIE"==XHOME.browser.browserVersion().browserType&&Number(XHOME.browser.browserVersion().ieType)<=9&&($("#ieTips").removeClass("hide"),$("#ieTipsClose").on("click",function(){$("#ieTips").addClass("hide")})),"isIE"!=XHOME.browser.browserVersion().browserType||9!=XHOME.browser.browserVersion().ieType&&8!=XHOME.browser.browserVersion().ieType||(XHOME.browser.removeCss("http://lib.xinhuanet.com/swiper/swiper3.4.2/swiper.min.css"),XHOME.browser.removeScript("http://lib.xinhuanet.com/swiper/swiper3.4.2/swiper.min.js")),"isIE"==XHOME.browser.browserVersion().browserType&&10==XHOME.browser.browserVersion().ieType&&$(".breath").removeClass("breath");var r=0,s=$("#report").find(".report-item").length;function w(){++r==s&&(r=0),$("#report").find(".report-item").eq(r).addClass("active").siblings().removeClass("active")}function m(){XHOME.lazy.loading("#focusNewsMediaBottom")}function b(){XHOME.lazy.loading("#main"),function(){for(var i=0;i<$("#depthFocus").find(".list-item").length;i++){var e=$("#depthFocus").find(".list-item").eq(i).find(".btn-horn").attr("data-url");""!=$.trim(e)&&$("#depthFocus").find(".list-item").eq(i).find(".btn-horn-box").removeClass("hide");var t=$("#depthFocus").find(".list-item").eq(i).find(".img").find("img").length;$("#depthFocus").find(".list-item").eq(i).attr("data-idx",i),0==t&&$("#depthFocus").find(".list-item").eq(i).addClass("item-style1"),1==t&&$("#depthFocus").find(".list-item").eq(i).addClass("item-style2"),3==t&&function(){$("#depthFocus").find(".list-item").eq(i).addClass("item-style3");var e=$("#depthFocus").find(".list-item").eq(i).find(".tit").html();$("#depthFocus").find(".list-item").eq(i).find(".tit").remove(),$("#depthFocus").find(".list-item").eq(i).prepend('<div class="tit">'+e+"</div>");var t=$("#depthFocus").find(".list-item").eq(i).find("a").attr("href"),r="";$("#depthFocus").find(".list-item").eq(i).find("img").each(function(e){var i=$(this).attr("data-src")||$(this).attr("src");r+='<a href="'+t+'" target="_blank" class="breath"><img src="'+i+'"></a>'}),$("#depthFocus").find(".list-item").eq(i).find(".img").html(r)}()}}(),h("#depthFocus"),function(){for(var e=0;e<$("#depthObserve").find(".list-item").length;e++){var i=$("#depthObserve").find(".list-item").eq(e).find("img").attr("src")||$("#depthObserve").find(".list-item").eq(e).find("img").attr("data-src");""!=$.trim(i)&&"undefined"!=i||$("#depthObserve").find(".list-item").eq(e).find(".img").remove()}}(),$("#videoList").on("click",".source",function(e){""==$.trim($(this).find("a").attr("href"))&&e.preventDefault()}),$("#depthObserve").on("click",".type",function(e){""==$.trim($(this).find("a").attr("href"))&&e.preventDefault()})}function E(){var n,a,l,d,c,f,p,u,h,w,m,b,e,i;XHOME.lazy.loading("#bottom"),n=[],a=[],l=[],d=0,$("#languagesScroll").find(".swiper-slide").each(function(e){var i=$(this).find(".tit").find("a").text(),t=$(this).attr("data-url"),r=$(this).find(".img").find("img").attr("src");""!=$.trim(t)&&(9!=XHOME.browser.browserVersion().ieType&&10!=XHOME.browser.browserVersion().ieType&&$(this).find(".img").find("a").removeAttr("href"),$(this).find(".tit").find(".btn").removeClass("hide"),-1<t.indexOf(".mp4")&&n.push({swiperIdx:e,title:i,url:t,poster:r}),(-1<t.indexOf(".m3u8")||-1<t.indexOf(".flv"))&&l.push({swiperIdx:e,title:i,url:t,poster:r}),(-1<t.indexOf(".html")||-1<t.indexOf(".htm"))&&a.push({swiperIdx:e,title:i,url:t,poster:r}))}),g({id:"#languagesScroll",autoplay:3e3,hasPagination:!0,hasArrow:!0,loop:!0,lazy:!0},function(o){$("#languagesScroll").hover(function(){o.stopAutoplay()},function(){o.startAutoplay()}),$("#languagesScroll").on("click",".img,.btn",function(){if("isIE"!=XHOME.browser.browserVersion().browserType||9!=XHOME.browser.browserVersion().ieType&&10!=XHOME.browser.browserVersion().ieType){M();var t=n,r="mp4",s=!1;(-1<$(this).parents(".swiper-slide").attr("data-url").indexOf(".html")||-1<$(this).parents(".swiper-slide").attr("data-url").indexOf(".htm"))&&(t=a,r="iframe"),(-1<$(this).parents(".swiper-slide").attr("data-url").indexOf(".m3u8")||-1<$(this).parents(".swiper-slide").attr("data-url").indexOf(".flv"))&&(t=l,r="mp4",s=!0),s&&(v("#languagesTips"),$("#languagesTips").find(".scroll-tips-close").on("click",function(){x("#languagesTips")})),t.filter(function(e,i){e.swiperIdx===o.realIndex&&(d=i,XHOME.media.begin({selector:"#languagesScroll",initIndex:d,type:r,list:t,isOnLive:s,callback:function(e){XHOME.scroll.monitorLoc({selector:e.selector,height:e.height,callback:function(e){var i=!0;"windowTop"===e.location&&"show"===e.status&&(i=!1),"windowTop"===e.location&&"hide"===e.status&&(i=!0),i?XHOME.media.setBoxSize({selector:e.selector}):XHOME.media.clearBoxSize()}})}}))})}})}),c=[],f=[],p=[],u=0,$("#languagesLeftPicList").find(".item").each(function(e){$(this).attr("data-idx",e);var i=$(this).find(".tit").find("a").text(),t=$(this).attr("data-url"),r=$(this).find(".img").find("img").attr("src");""!=$.trim(t)&&(9!=XHOME.browser.browserVersion().ieType&&10!=XHOME.browser.browserVersion().ieType&&$(this).find(".img").find("a").removeAttr("href"),$(this).find(".btn").removeClass("hide"),-1<t.indexOf(".mp4")&&c.push({swiperIdx:e,title:i,url:t,poster:r}),(-1<t.indexOf(".m3u8")||-1<t.indexOf(".flv"))&&p.push({swiperIdx:e,title:i,url:t,poster:r}),(-1<t.indexOf(".html")||-1<t.indexOf(".htm"))&&f.push({swiperIdx:e,title:i,url:t,poster:r}))}),$("#languagesLeftPicList").on("click",".img,.btn",function(e){if("isIE"!=XHOME.browser.browserVersion().browserType||9!=XHOME.browser.browserVersion().ieType&&10!=XHOME.browser.browserVersion().ieType){M();var t=c,r="mp4",s=!1;(-1<$(this).parents(".item").attr("data-url").indexOf(".html")||-1<$(this).parents(".item").attr("data-url").indexOf(".htm"))&&(t=f,r="iframe"),(-1<$(this).parents(".item").attr("data-url").indexOf(".m3u8")||-1<$(this).parents(".item").attr("data-url").indexOf(".flv"))&&(t=p,r="mp4",s=!0),s&&(v("#languagesTips"),$("#languagesTips").find(".scroll-tips-close").on("click",function(){x("#languagesTips")}));var o=parseInt($(this).parents(".item").attr("data-idx"));t.filter(function(e,i){e.swiperIdx===o&&(u=i,XHOME.media.begin({selector:"#languagesScroll",initIndex:u,type:r,list:t,isOnLive:s,callback:function(e){XHOME.scroll.monitorLoc({selector:e.selector,height:e.height,callback:function(e){var i=!0;"windowTop"===e.location&&"show"===e.status&&(i=!1),"windowTop"===e.location&&"hide"===e.status&&(i=!0),i?XHOME.media.setBoxSize({selector:e.selector}):XHOME.media.clearBoxSize()}})}}))})}}),h=[],w=[],m=[],b=0,$("#languagesRightPicList").find(".item").each(function(e){$(this).attr("data-idx",e);var i=$(this).find(".tit").find("a").text(),t=$(this).attr("data-url"),r=$(this).find(".img").find("img").attr("src");""!=$.trim(t)&&(9!=XHOME.browser.browserVersion().ieType&&10!=XHOME.browser.browserVersion().ieType&&$(this).find(".img").find("a").removeAttr("href"),$(this).find(".btn").removeClass("hide"),-1<t.indexOf(".mp4")&&h.push({swiperIdx:e,title:i,url:t,poster:r}),(-1<t.indexOf(".m3u8")||-1<t.indexOf(".flv"))&&m.push({swiperIdx:e,title:i,url:t,poster:r}),(-1<t.indexOf(".html")||-1<t.indexOf(".htm"))&&w.push({swiperIdx:e,title:i,url:t,poster:r}))}),$("#languagesRightPicList").on("click",".img,.btn",function(e){if("isIE"!=XHOME.browser.browserVersion().browserType||9!=XHOME.browser.browserVersion().ieType&&10!=XHOME.browser.browserVersion().ieType){M();var t=h,r="mp4",s=!1;(-1<$(this).parents(".item").attr("data-url").indexOf(".html")||-1<$(this).parents(".item").attr("data-url").indexOf(".htm"))&&(t=w,r="iframe"),(-1<$(this).parents(".item").attr("data-url").indexOf(".m3u8")||-1<$(this).parents(".item").attr("data-url").indexOf(".flv"))&&(t=m,r="mp4",s=!0),s&&(v("#languagesTips"),$("#languagesTips").find(".scroll-tips-close").on("click",function(){x("#languagesTips")}));var o=parseInt($(this).parents(".item").attr("data-idx"));t.filter(function(e,i){e.swiperIdx===o&&(b=i,XHOME.media.begin({selector:"#languagesScroll",initIndex:b,type:r,list:t,isOnLive:s,callback:function(e){XHOME.scroll.monitorLoc({selector:e.selector,height:e.height,callback:function(e){var i=!0;"windowTop"===e.location&&"show"===e.status&&(i=!1),"windowTop"===e.location&&"hide"===e.status&&(i=!0),i?XHOME.media.setBoxSize({selector:e.selector}):XHOME.media.clearBoxSize()}})}}))})}}),g({id:"#xiTime",autoplay:3e3,hasPagination:!0,loop:!0}),O("#languagesScroll"),$("#languagesIframe").attr("src",$("#languagesIframe").attr("data-src")),e=3466,(i=gsap.timeline({repeat:-1})).to("#xhWindowGovern",{x:-e/2,duration:75,ease:"none"}),$("#xhWindowGovern").on("mouseenter",function(){i.pause()}),$("#xhWindowGovern").on("mouseleave",function(){i.play()})}var y=!0,H=!0,X=!0;$(function(){var e,i,t,r,s,o,n,a,l,d,c,f,p,u;e=setInterval(w,2e3),$("#report").on("mouseenter",".report-item",function(){clearInterval(e)}),$("#report").on("mouseleave",".report-item",function(){e=setInterval(w,2e3)}),i=function(e){var i=$("#inputwd").val()||"";i&&(window.open("http://so.news.cn/#search/0/"+i+"/1/"),$("#inputwd").val(""))},$("#searchSubmit").on("click",i),$(".form").on("keydown",function(e){(e=e||window.event||event||arguments.callee.caller.arguments[0])&&13==e.keyCode&&i()}),$("#topNavSubMore").on("click",function(){$("#topNavSubOut").hasClass("show")?($("#topNavSubOut").removeClass("show"),$(this).html("+")):($("#topNavSubOut").addClass("show"),$(this).html("-"))}),function(){if(XHOME.browser.isMobile&&0<=window.location.href.indexOf("?f=pad"))return;XHOME.scroll.monitorLoc({selector:".top-nav",height:$(".top-nav").height(),callback:function(e){"windowTop"===e.location&&"hide"===e.status&&$(".fixedNav").removeClass("hide"),"windowTop"===e.location&&"show"===e.status&&$(".fixedNav").addClass("hide")}}),XHOME.scroll.monitorLoc({selector:".foot",height:$(".foot").height(),reference:"winBottom",callback:function(e){"windowBottom"===e.location&&"show"===e.status&&$(".fixedNav").addClass("hide")}})}(),t=$.trim($("#headline").attr("data-fontsize")),r=$.trim($("#headline").attr("data-fontcolor")),""!=t&&$("#headline").find("h1").css({"font-size":t+"px"}),""!=r&&($("#headline").find("h1").find("a").css({color:r}),$("#headline").find("p").find("a").css({color:r})),s=parseInt($.trim($(".scroll-articleNum").html())),o=parseInt($("#focusMediaScroll").find(".scroll-articles").length),n=[],a=[],l=[],d=0,s<o&&0!==s&&$("#focusMediaScroll").find(".scroll-articles").each(function(e){s<=e&&$(this).remove()}),$("#focusMediaScroll").find(".swiper-slide").each(function(e){var i=$(this).find(".tit").find("a").text(),t=$(this).attr("data-url"),r=$(this).find(".img").find("img").attr("src");""!=$.trim(t)&&(9!=XHOME.browser.browserVersion().ieType&&10!=XHOME.browser.browserVersion().ieType&&$(this).find(".img").find("a").removeAttr("href"),$(this).find(".tit").find(".btn").removeClass("hide"),-1<t.indexOf(".mp4")&&n.push({swiperIdx:e,title:i,url:t,poster:r}),(-1<t.indexOf(".m3u8")||-1<t.indexOf(".flv"))&&l.push({swiperIdx:e,title:i,url:t,poster:r}),(-1<t.indexOf(".html")||-1<t.indexOf(".htm"))&&a.push({swiperIdx:e,title:i,url:t,poster:r}))}),g({id:"#focusMediaScroll",effect:"fade",autoplay:3e3,hasPagination:!0,hasArrow:!0,loop:!0,lazy:!0},function(o){$("#focusMediaScroll").hover(function(){o.stopAutoplay()},function(){o.startAutoplay()}),$("#focusMediaScroll").on("click",".img,.btn",function(){if("isIE"!=XHOME.browser.browserVersion().browserType||9!=XHOME.browser.browserVersion().ieType&&10!=XHOME.browser.browserVersion().ieType){M();var t=n,r="mp4",s=!1;(-1<$(this).parents(".swiper-slide").attr("data-url").indexOf(".html")||-1<$(this).parents(".swiper-slide").attr("data-url").indexOf(".htm"))&&(t=a,r="iframe"),(-1<$(this).parents(".swiper-slide").attr("data-url").indexOf(".m3u8")||-1<$(this).parents(".swiper-slide").attr("data-url").indexOf(".flv"))&&(t=l,r="mp4",s=!0),t.filter(function(e,i){e.swiperIdx===o.realIndex&&(d=i,XHOME.media.begin({selector:"#focusMediaScroll",initIndex:d,type:r,list:t,isOnLive:s,callback:function(e){XHOME.scroll.monitorLoc({selector:e.selector,height:e.height,callback:function(e){var i=!0;"windowTop"===e.location&&"show"===e.status&&(i=!1),"windowTop"===e.location&&"hide"===e.status&&(i=!0),i?XHOME.media.setBoxSize({selector:e.selector}):XHOME.media.clearBoxSize()}})}}))})}})}),O("#focusMediaScroll"),$("#living").on("click",".img",function(){M();var e=$.trim($(this).parents(".live-ing").attr("data-url")),i=$(this).find("img").attr("src"),t=$(this).siblings(".tit").find("a").text(),r=!0;""!==e&&9!=XHOME.browser.browserVersion().ieType&&10!=XHOME.browser.browserVersion().ieType&&($(this).find("a").removeAttr("href"),0<=e.indexOf(".mp4")&&(r=!1),r&&(v("#scrollTips"),$("#scrollTips").find(".scroll-tips-close").on("click",function(){x("#scrollTips")})),XHOME.media.begin({selector:"#focusMediaScroll",type:"mp4",isOnLive:r,list:[{url:e,title:t,post:i}],callback:function(e){XHOME.scroll.monitorLoc({selector:"#focusMediaScroll",height:$("#focusMediaScroll").height(),callback:function(e){var i=!0;"windowTop"===e.location&&"show"===e.status&&(i=!1),"windowTop"===e.location&&"hide"===e.status&&(i=!0),i?XHOME.media.setBoxSize({selector:"#focusMediaScroll"}):XHOME.media.clearBoxSize()}})}}))}),c=[],f=[],p=[],u=0,$("#focusProducts").find(".item").each(function(e){var i=$(this).find(".tit").find("a").text(),t=$(this).attr("data-url"),r=$(this).find(".img").find("img").attr("src");""!=$.trim(t)&&(9!=XHOME.browser.browserVersion().ieType&&10!=XHOME.browser.browserVersion().ieType&&$(this).find(".img").find("a").removeAttr("href"),$(this).find(".btn").removeClass("hide"),-1<t.indexOf(".mp4")&&c.push({swiperIdx:e,title:i,url:t,poster:r}),(-1<t.indexOf(".m3u8")||-1<t.indexOf(".flv"))&&p.push({swiperIdx:e,title:i,url:t,poster:r}),(-1<t.indexOf(".html")||-1<t.indexOf(".htm"))&&f.push({swiperIdx:e,title:i,url:t,poster:r}))}),$("#focusProducts").on("click",".img,.btn",function(e){if("isIE"!=XHOME.browser.browserVersion().browserType||9!=XHOME.browser.browserVersion().ieType&&10!=XHOME.browser.browserVersion().ieType){M();var t=c,r="mp4",s=!1;(-1<$(this).parents(".item").attr("data-url").indexOf(".html")||-1<$(this).parents(".item").attr("data-url").indexOf(".htm"))&&(t=f,r="iframe"),(-1<$(this).parents(".item").attr("data-url").indexOf(".m3u8")||-1<$(this).parents(".item").attr("data-url").indexOf(".flv"))&&(t=p,r="mp4",s=!0);var o=parseInt($(this).parents(".item").attr("data-idx"));t.filter(function(e,i){e.swiperIdx===o&&(u=i,XHOME.media.begin({selector:"#focusMediaScroll",initIndex:u,type:r,list:t,isOnLive:s,callback:function(e){XHOME.scroll.monitorLoc({selector:e.selector,height:e.height,callback:function(e){var i=!0;"windowTop"===e.location&&"show"===e.status&&(i=!1),"windowTop"===e.location&&"hide"===e.status&&(i=!0),i?XHOME.media.setBoxSize({selector:e.selector}):XHOME.media.clearBoxSize()}})}}))})}}),$("#focusListNews").on("mouseenter","li",function(){$(this).addClass("active").siblings().removeClass("active")}),function(){for(var e=0;e<$("#focusListNews").find("li").length;e++){var i=$("#focusListNews").find("li").eq(e).find(".btn-horn").attr("data-url");""!=$.trim(i)&&$("#focusListNews").find("li").eq(e).find(".btn-horn-box").removeClass("hide")}}(),h("#focusListNews"),XHOME.scroll.monitorLoc({selector:"#focusNewsMediaBottom",height:$("#focusNewsMediaBottom").height(),reference:"winBottom",distants:50,callback:function(e){"windowBottom"===e.location&&"show"===e.status&&y&&(m(),y=!1)}}),XHOME.scroll.monitorLoc({selector:"#main",height:$("#main").height(),reference:"winBottom",distants:50,callback:function(e){"windowBottom"===e.location&&"show"===e.status&&H&&(b(),H=!1)}}),XHOME.scroll.monitorLoc({selector:"#bottom",height:$("#bottom").height(),reference:"winBottom",callback:function(e){"windowBottom"===e.location&&"show"===e.status&&X&&(E(),X=!1)}})}),window.onload=function(){$("#focusNewsMediaBottom").offset().top>=$(window).scrollTop()-400&&$("#focusNewsMediaBottom").offset().top<$(window).scrollTop()+$(window).height()&&y&&(m(),y=!1),$("#main").offset().top>=$(window).scrollTop()-1200&&$("#main").offset().top<$(window).scrollTop()+$(window).height()&&H&&(b(),H=!1),$("#bottom").offset().top>=$(window).scrollTop()-200&&$("#bottom").offset().top<$(window).scrollTop()+$(window).height()&&X&&(E(),X=!1)}},{}]},{},[1]);
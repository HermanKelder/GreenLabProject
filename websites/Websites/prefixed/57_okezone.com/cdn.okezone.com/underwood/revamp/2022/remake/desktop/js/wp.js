var swiper1=new Swiper('#swiper-menu',{slidesPerView:'auto',spaceBetween:20,navigation:{nextEl:'#swiper-menu .swiper-button-next',prevEl:'#swiper-menu .swiper-button-prev',},}),swiper2=new Swiper('#menu-exc',{slidesPerView:'auto',spaceBetween:20,navigation:{nextEl:'#menu-exc .swiper-button-next',prevEl:'#menu-exc .swiper-button-prev',},}),swiper3=new Swiper('#swiper-terpopuler',{slidesPerView:2,spaceBetween:9,preloadImages:false,lazy:true,navigation:{nextEl:'.swiper-terpopuler .swiper-button-next',prevEl:'.swiper-terpopuler .swiper-button-prev',},}),swiper4=new Swiper('#swiper-infografis',{slidesPerView:2.412,spaceBetween:9,preloadImages:false,lazy:true,navigation:{nextEl:'.swiper-infografis .swiper-button-next',prevEl:'.swiper-infografis .swiper-button-prev',},}),swiper5=new Swiper('#swiper-menu-sticky',{slidesPerView:'auto',spaceBetween:20,navigation:{nextEl:'#swiper-menu-sticky .swiper-button-next',prevEl:'#swiper-menu-sticky .swiper-button-prev',},}),swiper2=new Swiper('#menu-exc-sticky',{slidesPerView:'auto',spaceBetween:20,navigation:{nextEl:'#menu-exc-sticky .swiper-button-next',prevEl:'#menu-exc-sticky .swiper-button-prev',},});$(window).scroll(()=>{var windowTop=$(window).scrollTop();windowTop>=198?$('#topsticky').addClass('sticky'):$('#topsticky').removeClass('sticky');});$(".title-content").css("-webkit-box-orient","vertical");$(".desk-content").css("-webkit-box-orient","vertical");$(".jdl-right-headline").css("-webkit-box-orient","vertical");$(".main-headline-left .headline-desk").css("-webkit-box-orient","vertical");$(".main-headline-left .headline-title").css("-webkit-box-orient","vertical");$("#berita-pilihan .title-content-pilihan").css("-webkit-box-orient","vertical");$(".widget-pilihan-terpopuler .title-content-pilihan").css("-webkit-box-orient","vertical");$("#editor-choice .title-editor").css("-webkit-box-orient","vertical");$("#rekomendasi .title-rekomendasi").css("-webkit-box-orient","vertical");$(".widget-leftside .widget-content-title .title-widget").css("-webkit-box-orient","vertical");$(".widget-leftside .widget-content-title .title-widget").css("-webkit-box-orient","vertical");$(".container-swiper-content .artikel-title .title").css("-webkit-box-orient","vertical");$(document).on('click','#editor-choice .btn-more-side',function(){var contentWrap=$(this).prev();if($(this).text()=="More"){contentWrap.addClass("show").fadeIn();$(this).text("Less");}else{contentWrap.fadeOut().removeClass("show");$(this).text("More");}});$("#populer-sticky .title-tab").click(function(){$(".title-tab").toggleClass("active");$("#terpopuler-sticky").toggleClass("active");$("#pilihan-sticky").toggleClass("active");});$(document).ready(function(){!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);$(function(){$("img.lazy").lazyload({effect:"fadeIn",effectspeed:1000});$("img.left-lazy").lazyload({effect:"fadeIn"});$("img.right-lazy").lazyload({effect:"fadeIn"});});});(function(){var t,o;t=this.jQuery||window.jQuery,o=t(window),t.fn.stick_in_parent=function(i){var e,r,s,n,l,a,c,p,d,u,h,f,g;for(null==i&&(i={}),u=i.sticky_class,n=i.inner_scrolling,d=i.recalc_every,p=i.parent,a=i.offset_top,l=i.spacer,s=i.bottoming,null==a&&(a=0),null==p&&(p=void 0),null==n&&(n=!0),null==u&&(u="is_stuck"),e=t(document),null==s&&(s=!0),c=function(t){var o,i;return window.getComputedStyle?(t[0],o=window.getComputedStyle(t[0]),i=parseFloat(o.getPropertyValue("width"))+parseFloat(o.getPropertyValue("margin-left"))+parseFloat(o.getPropertyValue("margin-right")),"border-box"!==o.getPropertyValue("box-sizing")&&(i+=parseFloat(o.getPropertyValue("border-left-width"))+parseFloat(o.getPropertyValue("border-right-width"))+parseFloat(o.getPropertyValue("padding-left"))+parseFloat(o.getPropertyValue("padding-right"))),i):t.outerWidth(!0)},h=function(i,r,h,f,g,m,y,k){var w,v,_,b,x,T,$,P,V,F,C,z;if(!i.data("sticky_kit")){if(i.data("sticky_kit",!0),x=e.height(),$=i.parent(),null!=p&&($=$.closest(p)),!$.length)throw"failed to find stick parent";if(_=!1,w=!1,(C=null!=l?l&&i.closest(l):t("<div />"))&&C.css("position",i.css("position")),(P=function(){var t,o,s;if(!k)return x=e.height(),t=parseInt($.css("border-top-width"),10),o=parseInt($.css("padding-top"),10),r=parseInt($.css("padding-bottom"),10),h=$.offset().top+t+o,f=$.height(),_&&(_=!1,w=!1,null==l&&(i.insertAfter(C),C.detach()),i.css({position:"",top:"",width:"",bottom:""}).removeClass(u),s=!0),g=i.offset().top-(parseInt(i.css("margin-top"),10)||0)-a,m=i.outerHeight(!0),y=i.css("float"),C&&C.css({width:c(i),height:m,display:i.css("display"),"vertical-align":i.css("vertical-align"),float:y}),s?z():void 0})(),m!==f)return b=void 0,T=a,F=d,z=function(){var t,c,p,v,V,z;if(!k)return p=!1,null!=F&&(F-=1)<=0&&(F=d,P(),p=!0),p||e.height()===x||(P(),p=!0),v=o.scrollTop(),null!=b&&(c=v-b),b=v,_?(s&&(V=v+m+T>f+h,w&&!V&&(w=!1,i.css({position:"fixed",bottom:"",top:"51px"}).trigger("sticky_kit:unbottom"))),v<g&&(_=!1,T=a,null==l&&("left"!==y&&"right"!==y||i.insertAfter(C),C.detach()),t={position:"",width:"",top:""},i.css(t).removeClass(u).trigger("sticky_kit:unstick")),n&&(z=o.height(),m+a>z&&(w||(T-=c,T=Math.max(z-m,T),T=Math.min(a,T),_&&i.css({top:T+"px"}))))):v>g&&(_=!0,(t={position:"fixed",top:"51px"}).width="border-box"===i.css("box-sizing")?i.outerWidth()+"px":i.width()+"px",i.css(t).addClass(u),null==l&&(i.after(C),"left"!==y&&"right"!==y||C.append(i)),i.trigger("sticky_kit:stick")),_&&s&&(null==V&&(V=v+m+T>f+h),!w&&V)?(w=!0,"static"===$.css("position")&&$.css({position:"relative"}),i.css({position:"absolute",bottom:r,top:"auto"}).trigger("sticky_kit:bottom")):void 0},V=function(){return P(),z()},v=function(){if(k=!0,o.off("touchmove",z),o.off("scroll",z),o.off("resize",V),t(document.body).off("sticky_kit:recalc",V),i.off("sticky_kit:detach",v),i.removeData("sticky_kit"),i.css({position:"",bottom:"",top:"",width:""}),$.position("position",""),_)return null==l&&("left"!==y&&"right"!==y||i.insertAfter(C),C.remove()),i.removeClass(u)},o.on("touchmove",z),o.on("scroll",z),o.on("resize",V),t(document.body).on("sticky_kit:recalc",V),i.on("sticky_kit:detach",v),setTimeout(z,0)}},f=0,g=this.length;f<g;f++)r=this[f],h(t(r));return this}}).call(this),function(){var t;$(function(){return $("[data-sticky_column]").stick_in_parent({parent:"[data-sticky_parent]"})}),t=function(){var t;return(t=$("body,html")).stop(!0),0!==$(window).scrollTop()&&t.animate({scrollTop:0},"fast"),t},window.scroll_it=function(){var o;return o=$(document).height()-$(window).height(),t().animate({scrollTop:o},3*o).delay(100).animate({scrollTop:0},3*o)},window.scroll_it_wobble=function(){var o,i;return o=$(document).height()-$(window).height(),i=Math.floor(o/3),t().animate({scrollTop:2*i},3*o).delay(100).animate({scrollTop:i},3*o).delay(100).animate({scrollTop:o},3*o).delay(100).animate({scrollTop:0},3*o)},$(window).on("resize",function(t){return $(document.body).trigger("sticky_kit:recalc")})}.call(this);(function(b){b.jscroll={defaults:{debug:false,autoTrigger:true,autoTriggerUntil:false,loadingHtml:"<small>Loading...</small>",padding:0,nextSelector:"a:last",contentSelector:"",pagingSelector:"",callback:false}};var a=function(e,g){var o=e.data("jscroll"),n=(typeof g==="function")?{callback:g}:g,p=b.extend({},b.jscroll.defaults,n,o||{}),c=(e.css("overflow-y")==="visible"),l=e.find(p.nextSelector).first(),v=b(window),h=b("body"),q=c?v:e,m=b.trim(l.attr("href")+" "+p.contentSelector),k=function(){var x=b(p.loadingHtml).filter("img").attr("src");if(x){var w=new Image();w.src=x}},r=function(){if(!e.find(".jscroll-inner").length){e.contents().wrapAll('<div class="jscroll-inner" />')}},d=function(w){var x;if(p.pagingSelector){w.closest(p.pagingSelector).hide()}else{x=w.parent().not(".jscroll-inner,.jscroll-added").addClass("jscroll-next-parent").hide();if(!x.length){w.wrap('<div class="jscroll-next-parent" />').parent().hide()}}},j=function(){return q.unbind(".jscroll").removeData("jscroll").find(".jscroll-inner").children().unwrap().filter(".jscroll-added").children().unwrap()},i=function(){r();var D=e.find("div.jscroll-inner").first(),B=e.data("jscroll"),C=parseInt(e.css("borderTopWidth"),10),y=isNaN(C)?0:C,x=parseInt(e.css("paddingTop"),10)+y,A=c?q.scrollTop():e.offset().top,z=D.length?D.offset().top:0,w=Math.ceil(A-z+q.height()+x);if(!B.waiting&&w+p.padding>=D.outerHeight()){f("info","jScroll:",D.outerHeight()-w,"from bottom. Loading next request...");return u()}},s=function(w){w=w||e.data("jscroll");if(!w||!w.nextHref){f("warn","jScroll: nextSelector not found - destroying");j();return false}else{t();return true}},t=function(){var w=e.find(p.nextSelector).first();if(!w.length){return}if(p.autoTrigger&&(p.autoTriggerUntil===false||p.autoTriggerUntil>0)){d(w);if(h.height()<=v.height()){i()}q.unbind(".jscroll").bind("scroll.jscroll",function(){return i()});if(p.autoTriggerUntil>0){p.autoTriggerUntil--}}else{q.unbind(".jscroll");w.bind("click.jscroll",function(){d(w);u();return false})}},u=function(){var x=e.find("div.jscroll-inner").first(),w=e.data("jscroll");w.waiting=true;x.append('<div class="jscroll-added" />').children(".jscroll-added").last().html('<div class="jscroll-loading">'+p.loadingHtml+"</div>");return e.animate({scrollTop:x.outerHeight()},0,function(){x.find("div.jscroll-added").last().load(w.nextHref,function(A,z){if(z==="error"){return j()}var y=b(this).find(p.nextSelector).first();w.waiting=false;w.nextHref=y.attr("href")?b.trim(y.attr("href")+" "+p.contentSelector):false;b(".jscroll-next-parent",e).remove();s();if(p.callback){p.callback.call(this)}f("dir",w)})})},f=function(w){if(p.debug&&typeof console==="object"&&(typeof w==="object"||typeof console[w]==="function")){if(typeof w==="object"){var y=[];for(var x in w){if(typeof console[x]==="function"){y=(w[x].length)?w[x]:[w[x]];console[x].apply(console,y)}else{console.log.apply(console,y)}}}else{console[w].apply(console,Array.prototype.slice.call(arguments,1))}}};e.data("jscroll",b.extend({},o,{initialized:true,waiting:false,nextHref:m}));r();k();t();b.extend(e.jscroll,{destroy:j});return e};b.fn.jscroll=function(c){return this.each(function(){var f=b(this),e=f.data("jscroll"),d;if(e&&e.initialized){return}d=new a(f,c)})}})(jQuery);$('#area').jscroll({autoTrigger:false,loadingHtml:'<div class="loader"><img alt="" src="https://cdn.okezone.com/news/news_2015a/img/ajax-loader.gif" /></div>',nextSelector:'a.btn-lmorex:last',});
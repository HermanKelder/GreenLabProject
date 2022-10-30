$(document).ready(function() {
  "use strict";
  document.querySelectorAll("div.highlight .link-group > a").forEach(function(item) {
      // Read the Heading text of highlight component
      var jsllHeading = item.closest(".card-body");

      if (jsllHeading) {

          var heading = jsllHeading.querySelector("h1, h2, h3, h4, h5, h6");

          if(heading && heading.textContent) {
              // assign to data-bi-ehn attribute
              item.dataset.biEhn = heading.textContent.trim();

              // assign to data-bi-hn attribute
              item.dataset.biHn = heading.textContent.trim();
          }

          // Read the Component name and assign to data-bi-compname attribute
          var compName = jsllHeading.getAttribute("data-highlight-compname");
          if(compName) {
        item.dataset.biCompnm = jsllHeading.getAttribute("data-highlight-compname");
        } else {
        item.dataset.biCompnm = "Highlight";
        }
      }      
  });
});
!function(){"use strict";var t={n:function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,{a:i}),i},d:function(e,i){for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e=jQuery,i=t.n(e);i()((function(){var t;!function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".aem-Grid";e.forEach((function(e){var r=new MutationObserver((function(e){e.forEach((function(e){var r=i()(e.addedNodes).find(".f-play-trigger");if(r.length>0){if(n){var o=n(r.closest(a)).text().trim();r.attr("data-bi-hN",o),r.attr("data-bi-ehN",o)}r.attr("data-bi-cN","Video Launch"),r.attr("data-bi-ecN","Video Launch"),r.attr("data-bi-bhvr","240"),r.attr("data-bi-cT","Video"),r.attr("data-bi-pA","Body"),r.attr("data-bi-compNm",t)}})),r.disconnect()}));r.observe(e,{childList:!0,subtree:!0})}))}("Highlight",document.querySelectorAll(".highlight"),(function(t){return t.find(":header")}),".highlight"),(t=document.querySelectorAll(".highlight .video-modal.pause-onhide .embed-responsive.embed-responsive-16by9"))&&0!==t.length&&t.forEach((function(t){t.classList.add("mh-100");var e=new MutationObserver((function(t){t.forEach((function(t){t.addedNodes.forEach((function(t){var i=t;i.classList&&i.classList.contains("c-video-player")&&(i.classList.add("mh-100"),i.style.minWidth="auto",e.disconnect())}))}))}));e.observe(t,{childList:!0,subtree:!0})}))}))}();
(function (document) {
    "use strict";

    $(document).on("foundation-contentloaded", function (e) {
        toggleTemplate($(".cq-dialog-checkbox-bgvideo-value", e.target));
    });

    $(document).on("change", ".cq-dialog-checkbox-bgvideo-value", function (e) {
        toggleTemplate($(this));
    });

    function toggleTemplate(e) {     
        var bgVideoTab = $("coral-tab-label:contains(Background Video)").closest("coral-tab");
        var videoAsset = $(".mandatory-video-asset");
        var imageTab = $("coral-tab-label:contains(Image)").closest("coral-tab");
        var imageGroup = document.querySelector(".image-group-multifield");
        var bgVideoCheckbox = $(".cq-dialog-checkbox-bgvideo-value").attr('checked');

        if ((e[0] && e[0].checked) || (bgVideoCheckbox === 'checked')) {
            if (bgVideoTab){
                bgVideoTab.show();
                videoAsset.attr("data-cq-fileupload-required", "");
            }
            if (imageGroup){
                imageGroup.setAttribute("aria-required", "false");
            }
            if (imageTab){
                imageTab.hide();   
            }

            addListener();
        }
        else {
            if (bgVideoTab){
                bgVideoTab.hide();
                videoAsset.removeAttr("data-cq-fileupload-required");
            }
            if (imageGroup){
                imageGroup.setAttribute("aria-required", "true");
            }
            if (imageTab){
                imageTab.show();   
            }
        }
    }

    function addListener(){
        var addButtons = document.querySelectorAll('button[coral-multifield-add]');
        if (addButtons !== undefined){      
            addButtons.forEach(addButton => {
                addButton.addEventListener('click', e => {
                        toggleTemplate($(".cq-dialog-checkbox-bgvideo-value", e.target));  
               });
            });
        }  
    }

})(document);

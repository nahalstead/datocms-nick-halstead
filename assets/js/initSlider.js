import { lory } from 'lory.js';
import imagesLoaded from 'imagesloaded';

export default function() {
  const slider = document.querySelector('.slider');
  if (!slider) return;

  imagesLoaded(slider).on('always', () => {
    slider.classList.remove('is-loading');
    lory(slider, { infinite: 2, enableMouseEvents: true });
  });
}
export default function initSlider() {
( function( $ ) {
/* Flexslider ---------------------*/
    function flexSliderSetup() {
        if( ($).flexslider) {
            var slider = $('.flexslider');
            slider.flexslider({
                startAt             : i,
                useCSS              : false,
                slideshow           : false,
                animation           : 'fade',
                easing              : "easeOutQuad",
                video               : false,
                prevText            : 'prev',
                nextText            : 'next',
                touch               : true,
                controlNav          : false,
                animationLoop       : true,
                smoothHeight        : false,
                keyboard            : true,
                multipleKeyboard    : true,
                customDirectionNav: $('.navigation a'),

                start: function(slider) {
                    slider.removeClass('loading');
                    $('.preloader').hide();                 
                    $('.total-slides').text(slider.count);
                    $('.slides li .image-wrapper img').click(function(event){
                        event.preventDefault();
                        slider.flexAnimate(slider.getTarget("next"));
                    });
                    $('.grid-item').click(function() {
                        $('#slideshow').show();
                        var slideTo = $(this).attr('id'); //Grab rel value from link;
                        var slideToInt = parseInt(slideTo); //Make sure that this value is an integer;
                        if (slider.currentSlide != slideToInt) {
                            slider.flexAnimate(slideToInt-1); //move the slider to the correct slide (Unless the slider is also already showing the slide we want);
                            console.log('currentSlide');
                        }
                    });
                },                                     
                after: function(slider) {
                    $('.current-slide').text(slider.currentSlide+1);
                    
                }
            });
        }
    }



    // createSlideshow = function(e) {
    //     if ($(".assets_container").size()) {
    //         var t = 0;
    //         location.hash.match(/^#[0-9]+/) && (t = location.hash.slice(1) - 1);
    //         var i = parseInt(t || 0, 10),
    //             n = 600,
    //             a = 'fade',
    //             o = $(".flexslider img"),
    //             s = o.some(function(e) {
    //                 return "video" === e.type
    //             });
    //         $("#total").text($(".flexslider .asset").length), $("#current").text(i + 1), Gallery.$captionContent = $("#caption-content");
    //         var l = !1,
    //             r = $(e).flexslider({
    //                 controlNav: !1,
    //                 animation: a,
    //                 animationSpeed: n,
    //                 easing: "easeOutQuad",
    //                 startAt: i,
    //                 slideshow: !1,
    //                 animationLoop: !0,
    //                 keyboard: !1,
    //                 video: s,
    //                 start: function() {
    //                     Gallery.index_of_last_clicked = i, Gallery.set_url_index(i), $(".asset img, .asset .preview").on("click", function(e) {
    //                         var t = $(e.target);
    //                         if (!(t.hasClass("bg") || t.hasClass("button") || t.hasClass("dont-move") || t.hasClass("txt") || t.parents(".txt").length || t.parents(".title.only_text").length || t.hasClass("title"))) {
    //                             ($(".pagination .thumb_item.active").next().length ? $(".pagination .thumb_item.active").next() : $(".pagination .thumb_item:first")).find("a").trigger("click", [!1])
    //                         }
    //                     });
    //                     var e = $(".pagination"),
    //                         t = $(".gallery-navigation"),
    //                         a = t.find(".navigation"),
    //                         o = t.find(".title"),
    //                         s = !1;
    //                     $(".open-close-thumbs").on("click", function(t, i) {
    //                         t.preventDefault(), i = void 0 === i || i;
    //                         var l = parseInt(e.css("left"), 10),
    //                             r = $(".flexslider").position().top;
    //                         i && (0 !== l || e.is(":animated") ? e.is(":animated") || ($(".flexslider").stop(!0, !0).animate({
    //                             opacity: 0
    //                         }, n), e.css({
    //                             left: 0,
    //                             top: r
    //                         }).stop(!0, !0).animate({
    //                             opacity: 1
    //                         }, n), a.hide(), o.html(_4ORMAT_DATA.page.name).show(), $(this).removeClass("icon-grid").addClass("icon-close"), s = !s) : ($(".flexslider").stop(!0, !0).animate({
    //                             opacity: 1
    //                         }, n), e.stop(!0, !0).animate({
    //                             opacity: 0
    //                         }, n, function() {
    //                             e.css({
    //                                 left: "-100%",
    //                                 top: "-9000em"
    //                             })
    //                         }), o.hide(), a.show(), $(this).removeClass("icon-close").addClass("icon-grid"), s = !s), $("iframe").remove())
    //                     }), "Thumbnails" == _4ORMAT_DATA.theme.gallery_default && $(window).width() > 767 && (0 == i ? ($(".open-close-thumbs").trigger("click"), setTimeout(function() {
    //                         $("#assets").animate({
    //                             opacity: 1
    //                         }, n)
    //                     }, 200)) : $("#assets").animate({
    //                         opacity: 1
    //                     }, n)), $(".thumb_container").on("click", "a", function(e, t) {
    //                         e.preventDefault(), t = void 0 === t || t;
    //                         var i = $(this).parent(),
    //                             a = i.index();
    //                         Gallery.index_of_last_clicked = a, c && c.flexslider(a), $(".thumb_container .active").removeClass("active"), i.addClass("active"), setTimeout(function() {
    //                             $(".open-close-thumbs").trigger("click", [t])
    //                         }, n)
    //                     });
    //                     var l = {
    //                         next: function(e) {
    //                             if (e.preventDefault(), !$(".assets_container ").is(":animated")) {
    //                                 ($(".pagination .active").next().length ? $(".pagination .active").next() : $(".pagination .thumb_item").first()).find("a").trigger("click", [!1])
    //                             }
    //                         },
    //                         prev: function(e) {
    //                             if (e.preventDefault(), !$(".assets_container ").is(":animated")) {
    //                                 ($(".pagination .active").prev().length ? $(".pagination .active").prev() : $(".pagination .thumb_item").last()).find("a").trigger("click", [!1])
    //                             }
    //                         }
    //                     };
    //                     $(document).on("keydown", function(e) {
    //                         Gallery.animating || ("39" != e.which || s || l.next(e), "37" != e.which || s || l.prev(e), "27" == e.which && "1" == $(".pagination").css("opacity") && (e.preventDefault(), $(".open-close-thumbs").trigger("click")))
    //                     }), $(".next").on("click", l.next), $(".prev").on("click", l.prev), $(".thumb_container .thumb_item").eq(i).find("a").trigger("click", [!1]), $(".load_iframe").addClass("icon-video").parent().append('<div class="layer"></div>'), Gallery.$captionContent.html($(".flex-active-slide").find(".caption").html()).fadeIn(n), $(window).trigger("resize"), 1 == $(".asset").not(".clone").length && $(".assets_container .image span > img").css("cursor", "default"), $('img[nopin=""]').attr("nopin", "true"), $(".flex-active-slide").find("img").attr("nopin", "")
    //                 },
    //                 before: function(e) {
    //                     var t = Gallery,
    //                         i = $(e.slides[e.currentSlide]),
    //                         o = $(e.slides[e.animatingTo]);
    //                     i.addClass("js_slider_previous"), t.animating = !0, t.set_url_index(t.index_of_last_clicked), $("#current").text(e.animatingTo + 1), $("iframe").remove(), "slide" == a ? t.$captionContent.hide().html("") : t.$captionContent.stop().fadeOut(n, function() {
    //                         Gallery.animating && t.$captionContent.html("")
    //                     }), Gallery.setVideoDimension(o.get(0)), l = !1
    //                 },
    //                 after: function(e) {
    //                     if (!l) {
    //                         l = !0, $(".js_slider_previous").removeClass("js_slider_previous"), Gallery.animating = !1, Gallery.setSliderHeight(e), Gallery.setSliderCaptionMaxWidth(), Gallery.$captionContent.stop().html($(".flex-active-slide").find(".caption").html()).fadeIn(n), $('img[nopin=""]').attr("nopin", "true"), $(".flex-active-slide").find("img").attr("nopin", "");
    //                         var t = $(e.slides[e.currentSlide + 1]);
    //                         t.find(".lazyload").length && lazySizes.loader.unveil(t.find(".lazyload")[0])
    //                     }
    //                 }
    //             }),
    //             c = r.data("flexslider");
    //         return $(window).on("resize", function() {
    //             Gallery.setThumbPosition(), Gallery.setVideoDimension(), Gallery.setSliderHeight(c)
    //         }), Gallery.setSliderCaptionMaxWidth(), r
    //     }
    // }
    $( window )
    .load( flexSliderSetup );
    // .load ( createSlideshow );
})( jQuery );
}
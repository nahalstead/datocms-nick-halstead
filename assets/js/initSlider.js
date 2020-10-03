export default function initSlider() {
/* Flexslider ---------------------*/
    // function flexSliderSetup() {
    //     if ($(".assets_container").size()) {
    //         var t = 0;
    //         location.hash.match(/^#[0-9]+/) && (t = location.hash.slice(1) - 1);
    //         var i = parseInt(t || 0, 10),
    //             n = 600,
    //             s = o.some(function(e) {
    //                 return "video" === e.type;
    //             });
    //             if( ($).flexslider) {
    //                 var slider = $('.flexslider');
    //                 slider.flexslider({
    //                     animationSpeed      : n,
    //                     startAt             : i,
    //                     useCSS              : false,
    //                     slideshow           : false,
    //                     animation           : 'fade',
    //                     easing              : "easeOutQuad",
    //                     video               : false,
    //                     prevText            : 'prev',
    //                     nextText            : 'next',
    //                     touch               : true,
    //                     controlNav          : false,
    //                     animationLoop       : true,
    //                     smoothHeight        : false,
    //                     keyboard            : true,
    //                     multipleKeyboard    : true,
    //                     customDirectionNav: $('.navigation a')

    //                     start: function(slider) {
    //                         slider.removeClass('loading');
    //                         $('.preloader').hide();                 
    //                         $('.total-slides').text(slider.count);
    //                         $('.slides li .image-wrapper img').click(function(event){
    //                             event.preventDefault();
    //                             slider.flexAnimate(slider.getTarget("next"));
    //                         });
    //                         $('.grid-item').click(function() {
    //                             $('#slideshow').show();
    //                             var slideTo = $(this).attr('id'); //Grab rel value from link;
    //                             var slideToInt = parseInt(slideTo); //Make sure that this value is an integer;
    //                             if (slider.currentSlide != slideToInt) {
    //                                 slider.flexAnimate(slideToInt-1); //move the slider to the correct slide (Unless the slider is also already showing the slide we want);
    //                                 console.log('currentSlide');
    //                             }
    //                         });
    //                     },                                     
    //                     after: function(slider) {
    //                         $('.current-slide').text(slider.currentSlide+1);
                            
    //                     }
    //                 });
    //             }
    //         }
    //     }
    
    //     $( document ).ready(function() {
    //         flexSliderSetup();
    //     });

// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation           : "fade",
    animationSpeed      : 600,
    startAt             : 1,
    useCSS              : false,
    slideshow           : false,
    easing              : "easeOutQuad",
    video               : false,
    touch               : true,
    controlNav          : false,
    animationLoop       : true,
    smoothHeight        : false,
    keyboard            : true,
    multipleKeyboard    : true,

    start: function(slider) {
    var e = $(".pagination"),
    t = $(".gallery-navigation"),
    a = t.find(".navigation"),
    o = t.find(".title"),
    s = !1;
    $(".open-close-thumbs").on("click", function(t, i) {
                                t.preventDefault(), i = void 0 === i || i;
                                var l = parseInt(e.css("left"), 10),
                                    r = $(".flexslider").position().top;
                                i && (0 !== l || ($(".flexslider").stop(!0, !0).animate({
                                    opacity: 0
                                }, n), e.css({
                                    left: 0,
                                    top: r
                                }).stop(!0, !0).animate({
                                    opacity: 1
                                }, n), a.hide(), $(this).removeClass("icon-grid").addClass("icon-close"), s = !s) : ($(".flexslider").stop(!0, !0).animate({
                                    opacity: 1
                                }, n), e.stop(!0, !0).animate({
                                    opacity: 0
                                }, n, function() {
                                    e.css({
                                        left: "-100%",
                                        top: "-9000em"
                                    })
                                }), o.hide(), a.show(), $(this).removeClass("icon-close").addClass("icon-grid"), s = !s))
                            })
    $(document).on("keydown", function(e) {
        ("39" != e.which || s || l.next(e), "37" != e.which || s || l.prev(e), "27" == e.which && "1" == $(".pagination").css("opacity") && (e.preventDefault(), $(".open-close-thumbs").trigger("click")))
        }), $(".next").on("click", l.next), $(".prev").on("click", l.prev), $(".thumb_container .thumb_item").eq(i).find("a").trigger("click", [!1])
    }
  });
});
}

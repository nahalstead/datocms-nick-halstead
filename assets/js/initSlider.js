export default function initSlider() {

    $(window).load(function() {

        $('.flexslider').flexslider({
            animation: "fade",
            animationSpeed: 600,
            startAt: 1,
            slideshow: false,
            easing: "easeOutQuad",
            video: false,
            touch: true,
            controlNav: true,
            animationLoop: true,
            smoothHeight: false,
            keyboard: true,
            multipleKeyboard: true,
            customDirectionNav: $('.navigation a'),

            start: function(slider) {
                location.hash.match(/^#[0-9]+/) && (t = location.hash.slice(1) - 1);
                var e = $(".pagination"),
                    i = parseInt(t || 0, 10),
                    n = 400,
                    t = $(".gallery-navigation"),
                    a = t.find(".navigation"),
                    o = t.find(".title"),
                    s = !1;
                $(".open-close-thumbs").on("click", function(t, i) {
                    // t.preventDefault(), i = void 0 === i || i;
                    var l = parseInt(e.css("left"), 10),
                        r = $(".flexslider").position().top;
                    i && (0 !== l || ($(".flexslider").stop(!0, !0).animate({
                        opacity: 0
                    }, n), $(".pagination").css({
                        left: 0,
                        top: r
                    }).stop(!0, !0).animate({
                        opacity: 1
                    }, n), $(".navigation").hide(), $(this).removeClass("icon-grid").addClass("icon-close")), ($(".flexslider").stop(!0, !0).animate({
                        opacity: 1
                    }, n), e.stop(!0, !0).animate({
                        opacity: 0
                    }, n, function() {
                        $(".pagination").css({
                            left: "-100%",
                            top: "-9000em"
                        });
                    }), o.hide(), a.show(), $(this).removeClass("icon-close").addClass("icon-grid"), s = !s));
                });
                $(document).on("keydown", function(e) {
                    ("39" != e.which || s || l.next(e), "37" != e.which || s || l.prev(e), "27" == e.which && "1" == $(".pagination").css("opacity") && (e.preventDefault(), $(".open-close-thumbs").trigger("click")));
                }), $(".next").on("click", l.next), $(".prev").on("click", l.prev), $(".thumb_container .thumb_item").eq(i).find("a").trigger("click", [!1]);
            },
            after: function(e) {
                if (!l) {
                    l = !0, $(".js_slider_previous").removeClass("js_slider_previous");
                    var t = $(e.slides[e.currentSlide + 1]);
                    t.find(".lazyload").length && lazySizes.loader.unveil(t.find(".lazyload")[0]);
                }
            }
        });
    });
}
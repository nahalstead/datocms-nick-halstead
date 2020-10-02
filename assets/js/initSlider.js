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
    //                     customDirectionNav: $('.navigation a'),

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

    $( document ).ready(function() {
var Media = {
        LARGER_THAN_TABLET: "screen and (min-width: 768px)",
        SMALLER_THAN_TABLET: "screen and (max-width: 767px)"
    },
    Menu = {
        init: function() {
            var e = this;
            enquire.register(Media.LARGER_THAN_TABLET, {
                match: e.desktop.init,
                unmatch: e.desktop.destroy
            }), enquire.register(Media.SMALLER_THAN_TABLET, {
                match: e.mobile.init,
                unmatch: e.mobile.destroy
            })
        },
        desktop: {
            init: function() {
                var e = Menu.desktop;
                $(".menu-nav .active").not(".category_name").length && $(".menu-nav .active").closest(".category").find(".category_name").addClass("active"), $("body").removeClass("locked"), $(".category_name").on("click", e.onCategoryClick), $(window).on("resize", e.menuLinks), e.menuLinks(), $(".menu-nav .item .active").prev().addClass("active")
            },
            destroy: function() {
                var e = Menu.desktop;
                $(".category_name").off("click", e.onCategoryClick), $(window).off("resize", e.menuLinks)
            },
            onCategoryClick: function(e) {
                e.preventDefault(), $(".category_name").not($(this)).removeClass("active"), $(this).toggleClass("active")
            },
            menuLinks: function() {
                var e = (Menu.desktop, $(".menu-nav")),
                    t = $(".category_name");
                if ("left" === $(".menu-nav .top_level").css("float")) t.data("events") && (t.off("click").removeClass("active"), e.toggleClass("hor")), e.css("max-height", "none");
                else {
                    $(".category_name").data("events") || e.toggleClass("hor");
                    var i = $(".menu-logo").outerHeight(!0),
                        n = $(".menu-footer").outerHeight(!0),
                        a = i + n;
                    e.css("max-height", "calc(100% - " + a + "px)")
                }
            }
        },
        mobile: {
            SCROLL_THRESHOLD: 10,
            $menu: null,
            $panel: null,
            init: function() {
                var e = Menu.mobile,
                    t = e.$menu = $(".menu"),
                    i = (e.$panel = $(".mobile-menu-panel"), $("#wrapper")),
                    n = $(".mobile-menu-open-button"),
                    a = $(".mobile-menu-close-button");
                i.css("top", t.outerHeight() + "px"), a.css("top", n.position().top + "px"), n.on("click", e.open), a.on("click", e.close), $(window).on("scrolldelta", e.onScroll)
            },
            destroy: function() {
                var e = Menu.mobile,
                    t = ($(".mobile-menu-panel"), $(".mobile-menu-open-button")),
                    i = $(".mobile-menu-close-button");
                $("#wrapper").css("top", ""), t.off("click", e.open), i.off("click", e.close), $(window).off("scrolldelta", e.onScroll)
            },
            open: function(e) {
                var t = Menu.mobile;
                $(".mobile-menu-links");
                e && e.preventDefault(), $(".mobile-menu-links").on("touchmove", t.stopPropagation), $("body").on("touchmove", t.preventDefault), $("body").addClass("locked"), $(".mobile-menu").addClass("active"), $(".mobile-menu-overlay").on("click", t.close)
            },
            close: function(e) {
                var t = Menu.mobile;
                e && e.preventDefault(), $(".mobile-menu").removeClass("active"), $(".mobile-menu-overlay").off("click", t.close), $(".mobile-menu-links").off("touchmove", t.stopPropagation), $("body").off("touchmove", t.preventDefault), $("body").removeClass("locked")
            },
            onScroll: function(e) {
                var t = Menu.mobile,
                    i = e.scrollTopDelta;
                if (t.$panel.is(":visible")) return i > 1 && i >= t.SCROLL_THRESHOLD && e.scrollTop > 0 ? t.$menu.addClass("hidden") : i < 1 && i <= -1 * t.SCROLL_THRESHOLD && t.$menu.removeClass("hidden"), 0 === e.scrollTop ? t.$menu.removeClass("hidden") : void 0
            },
            preventDefault: function(e) {
                e.preventDefault()
            },
            stopPropagation: function(e) {
                e.stopPropagation()
            }
        }
    },
    Listing = {
        resize: function() {
            var e, t = $(".masonry, .grid"),
                i = ["two-columns", "three-columns", "four-columns", "five-columns"],
                n = i.join(" "),
                a = ["Large", "Medium", "Small", "Auto"],
                o = [0, 470, 650, 800],
                s = a.indexOf(_4ORMAT_DATA.theme.listing_thumbnail_size) + 1,
                l = t.width(),
                r = e;
            if (l > o[s]) e = s;
            else
                for (var c = 0; c < 3; c++)
                    if (l >= o[c] && l <= o[c + 1]) {
                        e = c;
                        break
                    }
            r != e && (t.removeClass(n), t.addClass(i[e]), r = e)
        },
        animationCascade: function() {
            "listing" == _4ORMAT_DATA.page.type && ($("._4ORMAT_content_wrapper").removeClass("content-loaded"), $(".page-asset").each(function(e) {
                var t = $(this);
                setTimeout(function() {
                    t.addClass("asset-loaded")
                }, 100 * e)
            }), $(".title-element").each(function() {
                $(this).addClass("asset-loaded")
            }))
        }
    },
    Constants = {
        SLIDE: "slide",
        FADE: "fade"
    },
    Gallery = {
        slider: undefined,
        last_clicked: undefined,
        index_of_last_clicked: 0,
        animating: !1,
        gallery_top_margin: $(".js_max_height_target").length > 0 ? $(".js_max_height_target").offset().top : null,
        $captionContent: null,
        animationOptions: {
            effect: {
                slide: Constants.SLIDE,
                fade: Constants.FADE
            },
            speed: {
                slow: 800,
                normal: 400,
                fast: 300
            }
        },
        init: function() {
            var e = this;
            enquire.register(Media.LARGER_THAN_TABLET, {
                match: e.desktop.init,
                unmatch: e.desktop.destroy,
                setup: e.desktop.setup,
                deferSetup: !0
            }), enquire.register(Media.SMALLER_THAN_TABLET, {
                match: e.mobile.init,
                unmatch: e.mobile.destroy,
                setup: e.mobile.setup,
                deferSetup: !0
            })
        },
        desktop: {
            setup: function() {},
            init: function() {
                var e = Gallery;
                e.slider = e.createSlideshow(".flexslider"), $(".asset.video.has_caption").each(function() {
                    $(this).css("margin-bottom", "0px")
                })
            },
            destroy: function() {
                var e = Gallery;
                e.slider && e.destroySlideshow(e.slider)
            }
        },
        mobile: {
            setup: function() {},
            init: function() {
                $(".asset .video").each(function(e, t) {
                    var i = $(t),
                        n = i.find(".load_iframe"),
                        a = $('<iframe width="100%" height="100%" frameborder="0"></iframe>');
                    a.attr("src", n.attr("href").replace(/&autoplay=1/g, "")), i.append(a);
                    var o = i.data("video-ratio"),
                        s = 1 / o * 100;
                    i.css("padding-top", s + "%")
                }), $(".asset.video.has_caption").each(function() {
                    var e = $(this),
                        t = $(this).find(".copy").outerHeight();
                    e.css("margin-bottom", t + "px")
                })
            },
            destroy: function() {
                $(".asset .video").each(function(e, t) {
                    var i = $(t);
                    i.find("iframe").remove(), i.css("padding-top", "")
                })
            }
        },
        createSlideshow: function(e) {
            if ($(".assets_container").size()) {
                var t = 0;
                location.hash.match(/^#[0-9]+/) && (t = location.hash.slice(1) - 1);
                var i = parseInt(t || 0, 10),
                    n = Gallery.getSpeed(),
                    a = Gallery.getEffect(),
                    o = _4ORMAT_DATA.page.assets,
                    s = o.some(function(e) {
                        return "video" === e.type
                    });
                $("#total").text($(".flexslider .asset").length), $("#current").text(i + 1), Gallery.$captionContent = $("#caption-content");
                var l = !1,
                    r = $(e).flexslider({
                        controlNav: !1,
                        animation: a,
                        animationSpeed: n,
                        easing: "easeOutQuad",
                        startAt: i,
                        slideshow: !1,
                        animationLoop: !0,
                        keyboard: !1,
                        video: s,
                        start: function() {
                            Gallery.index_of_last_clicked = i, Gallery.set_url_index(i), $(".asset img, .asset .preview").on("click", function(e) {
                                var t = $(e.target);
                                if (!(t.hasClass("bg") || t.hasClass("button") || t.hasClass("dont-move") || t.hasClass("txt") || t.parents(".txt").length || t.parents(".title.only_text").length || t.hasClass("title"))) {
                                    ($(".pagination .thumb_item.active").next().length ? $(".pagination .thumb_item.active").next() : $(".pagination .thumb_item:first")).find("a").trigger("click", [!1])
                                }
                            });
                            var e = $(".pagination"),
                                t = $(".gallery-navigation"),
                                a = t.find(".navigation"),
                                o = t.find(".title"),
                                s = !1;
                            $(".open-close-thumbs").on("click", function(t, i) {
                                t.preventDefault(), i = void 0 === i || i;
                                var l = parseInt(e.css("left"), 10),
                                    r = $(".flexslider").position().top;
                                i && (0 !== l || e.is(":animated") ? e.is(":animated") || ($(".flexslider").stop(!0, !0).animate({
                                    opacity: 0
                                }, n), e.css({
                                    left: 0,
                                    top: r
                                }).stop(!0, !0).animate({
                                    opacity: 1
                                }, n), a.hide(), o.html(_4ORMAT_DATA.page.name).show(), $(this).removeClass("icon-grid").addClass("icon-close"), s = !s) : ($(".flexslider").stop(!0, !0).animate({
                                    opacity: 1
                                }, n), e.stop(!0, !0).animate({
                                    opacity: 0
                                }, n, function() {
                                    e.css({
                                        left: "-100%",
                                        top: "-9000em"
                                    })
                                }), o.hide(), a.show(), $(this).removeClass("icon-close").addClass("icon-grid"), s = !s), $("iframe").remove())
                            }), "Thumbnails" == _4ORMAT_DATA.theme.gallery_default && $(window).width() > 767 && (0 == i ? ($(".open-close-thumbs").trigger("click"), setTimeout(function() {
                                $("body.gallery #assets").animate({
                                    opacity: 1
                                }, n)
                            }, 200)) : $("body.gallery #assets").animate({
                                opacity: 1
                            }, n)), $(".thumb_container").on("click", "a", function(e, t) {
                                e.preventDefault(), t = void 0 === t || t;
                                var i = $(this).parent(),
                                    a = i.index();
                                Gallery.index_of_last_clicked = a, c && c.flexslider(a), $(".thumb_container .active").removeClass("active"), i.addClass("active"), setTimeout(function() {
                                    $(".open-close-thumbs").trigger("click", [t])
                                }, n)
                            });
                            var l = {
                                next: function(e) {
                                    if (e.preventDefault(), !$(".assets_container ").is(":animated")) {
                                        ($(".pagination .active").next().length ? $(".pagination .active").next() : $(".pagination .thumb_item").first()).find("a").trigger("click", [!1])
                                    }
                                },
                                prev: function(e) {
                                    if (e.preventDefault(), !$(".assets_container ").is(":animated")) {
                                        ($(".pagination .active").prev().length ? $(".pagination .active").prev() : $(".pagination .thumb_item").last()).find("a").trigger("click", [!1])
                                    }
                                }
                            };
                            $(document).on("keydown", function(e) {
                                Gallery.animating || ("39" != e.which || s || l.next(e), "37" != e.which || s || l.prev(e), "27" == e.which && "1" == $(".pagination").css("opacity") && (e.preventDefault(), $(".open-close-thumbs").trigger("click")))
                            }), $(".next").on("click", l.next), $(".prev").on("click", l.prev), $(".thumb_container .thumb_item").eq(i).find("a").trigger("click", [!1]), $(".load_iframe").addClass("icon-video").parent().append('<div class="layer"></div>'), Gallery.$captionContent.html($(".flex-active-slide").find(".caption").html()).fadeIn(n), $(window).trigger("resize"), 1 == $(".asset").not(".clone").length && $(".assets_container .image span > img").css("cursor", "default"), $('img[nopin=""]').attr("nopin", "true"), $(".flex-active-slide").find("img").attr("nopin", "")
                        },
                        before: function(e) {
                            var t = Gallery,
                                i = $(e.slides[e.currentSlide]),
                                o = $(e.slides[e.animatingTo]);
                            i.addClass("js_slider_previous"), t.animating = !0, t.set_url_index(t.index_of_last_clicked), $("#current").text(e.animatingTo + 1), $("iframe").remove(), "slide" == a ? t.$captionContent.hide().html("") : t.$captionContent.stop().fadeOut(n, function() {
                                Gallery.animating && t.$captionContent.html("")
                            }), Gallery.setVideoDimension(o.get(0)), l = !1
                        },
                        after: function(e) {
                            if (!l) {
                                l = !0, $(".js_slider_previous").removeClass("js_slider_previous"), Gallery.animating = !1, Gallery.setSliderHeight(e), Gallery.setSliderCaptionMaxWidth(), Gallery.$captionContent.stop().html($(".flex-active-slide").find(".caption").html()).fadeIn(n), $('img[nopin=""]').attr("nopin", "true"), $(".flex-active-slide").find("img").attr("nopin", "");
                                var t = $(e.slides[e.currentSlide + 1]);
                                t.find(".lazyload").length && lazySizes.loader.unveil(t.find(".lazyload")[0])
                            }
                        }
                    }),
                    c = r.data("flexslider");
                return $(window).on("resize", function() {
                    Gallery.setThumbPosition(), Gallery.setVideoDimension(), Gallery.setSliderHeight(c)
                }), Gallery.setSliderCaptionMaxWidth(), r
            }
        },
        destroySlideshow: function(e) {
            var t = e.data("flexslider");
            $(".asset img, .asset .preview").off("click"), t.find(".clone").remove(), $(".flex-direction-nav").remove(), t.vars.animation !== Constants.FADE && t.container.unwrap(), t.slides.filter("active-slide").removeClass(t.vars.namespace + "active-slide"), t.removeAttr("style"), t.slides.removeAttr("style"), t.container.removeAttr("style"), t.stop(), t.removeData("flexslider")
        },
        set_url_index: function(e) {
            var t = "#" + (e + 1);
            location.hash != t && (location.hash = t)
        },
        maxItemHeight: function() {
            return $(window).width() > 840 ? $(window).height() - this.gallery_top_margin - 80 : $(window).height() - 50
        },
        getSpeed: function() {
            var e = _4ORMAT_DATA.theme.gallery_change_image_speed,
                t = Gallery.animationOptions.speed.normal;
            return Gallery.animationOptions.speed[e.toLowerCase()] || t
        },
        getEffect: function() {
            var e = _4ORMAT_DATA.theme.transition_effect,
                t = Gallery.animationOptions.speed.fade;
            return Gallery.animationOptions.effect[e.toLowerCase()] || t
        },
        setThumbPosition: function() {
            var e = Math.floor($(".pagination .thumb_item").width());
            $(".thumb_item, .video img", ".pagination").height(e), _4ORMAT_DATA.theme.thumbnails_shape || $(".thumb_item.image img, .thumb_item canvas", ".pagination").css("max-height", e)
        },
        setSliderHeight: function(e) {
            var t = $(".flexslider"),
                i = $(e.slides[e.currentSlide]),
                n = i.find("img");
            if (i.hasClass("text")) return void t.css("height", "");
            if (Gallery.getEffect() === Constants.SLIDE && n.length) {
                if (n.height() < 2) return;
                $(".flexslider").stop(!0, !0).css("height", n.height())
            }
        },
        setSliderCaptionMaxWidth: function() {
            var e = $(".flex-active-slide");
            if (!e.hasClass("txt")) {
                if (e.hasClass("video")) var t = e.find(".video"),
                    i = t.data("video-ratio"),
                    n = e.height() * i;
                else var t = e.find("img"),
                    i = t.data("ratio"),
                    n = e.height() / i;
                if (n < 1) return void Gallery.$captionContent.css("max-width", "");
                Gallery.$captionContent.css("max-width", n + "px")
            }
        },
        setVideoDimension: function(e) {
            var t = e ? $(e).find(".video span") : $(".asset.video.flex-active-slide span");
            if (0 === t.length) return !1;
            var i = Gallery.maxItemHeight(),
                n = Number(t.parent().attr("data-video-ratio"));
            $(Gallery.slider).width() / n > i && (t.addClass("portrait-ratio"), t.css({
                padding: 0,
                height: i,
                width: i * n
            }))
        }
    };
$(document).ready(function() {
    FastClick.attach(document.body), "gallery" === _4ORMAT_DATA.page.type && Gallery.init(), "listing" === _4ORMAT_DATA.page.type && (Listing.resize(), Listing.animationCascade()), Menu.init()
}), $(window).resize(function() {
    Listing.resize()
});
});
}

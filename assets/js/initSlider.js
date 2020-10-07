export default function initSlider() {

    $(window).load(function() {

        // initiate slider
        var main = function() {
            $('.asset').first().addClass('flex-active-slide');
            $('.thumb_item').first().addClass('active');
            $('.next').add('.flexslider .image img').click(function() {
                var currentSlide = $('.flexslider .flex-active-slide');
                var nextSlide = currentSlide.next();
                var currentThumb = $('.thumb_item.active');
                var nextThumb = currentThumb.next();

                if (nextSlide.length == 0) {
                    nextSlide = $('.asset').first();
                }

                if (nextThumb.length == 0) {
                    nextThumb = $('.thumb_item').first();
                }

                currentSlide.fadeOut(100).removeClass('flex-active-slide');
                nextSlide.fadeIn(100).addClass('flex-active-slide');

                currentThumb.removeClass('active');
                nextThumb.addClass('active');
            });
            $('.prev').click(function() {
                var currentSlide = $('.flexslider .flex-active-slide');
                var prevSlide = currentSlide.prev();
                var currentThumb = $('.thumb_item.active');
                var prevThumb = currentThumb.prev();

                if (prevSlide.length == 0) {
                    prevSlide = $('.asset').last();
                }

                if (prevThumb.length == 0) {
                    prevThumb = $('.thumb_item').last();
                }

                currentSlide.fadeOut(100).removeClass('flex-active-slide');
                prevSlide.fadeIn(100).addClass('flex-active-slide');

                currentThumb.removeClass('active');
                nextThumb.addClass('active');
            });

            // initiate thumbnail click function to find corresponding slide
            $('.thumb_item').click(function() {
                // toggle inactive all images in slideshow 
                $('.asset .image').toggleClass('inactive');

                // hide thumbnails
                $('.pagination').toggleClass('show');

                // show flexslider
                $('.flexslider').toggleClass('hide');

                $('.open-close-thumbs').toggleClass("fa-th");
                $('.open-close-thumbs').toggleClass("fa-times");

                //Define current slide
                var currentSlide = $('.flexslider .flex-active-slide');
                currentSlide.toggleClass('flex-active-slide');

                //Define current slide integer
                var currentSlideInt = $('.flexslider .flex-active-slide').data("id");

                //Grab data-id value from thumbnail;
                var slideTo = $(this).data("id")

                //Make sure that this value is an integer;
                var slideToInt = parseInt(slideTo);

                //Define "selected" slide to travel to
                var slideSelected = $('.image-' + slideToInt);

                //move flexslider to the correct slide
                slideSelected.fadeIn(100).toggleClass('flex-active-slide');
            })
        };

        // run flexslider
        $(document).ready(main);

        // Count slides and thumbnails and assign to data-id for each element
        $(document).ready(function() {
            var i = 0;
            $(".asset").each(function() {
                $(this).attr("data-id", +i);
                i++;
            });
        });
        $(document).ready(function() {
            var i = 0;
            $(".asset").each(function() {
                $(this).addClass(("image-") + (+i));
                i++;
            });
        });
        $(document).ready(function() {
            var i = 0;
            $(".thumb_item").each(function() {
                $(this).attr("data-id", +i);
                i++;
            });
        });

        // Thumbnail toggle function
        $(document).ready(function() {
            var count = $('.flexslider').children().length;
            var currentSlide = $('.flexslider .flex-active-slide');

            $('.open-close-thumbs').click(function() {
                $(this).toggleClass("fa-th");
                $(this).toggleClass("fa-times");
                $('.pagination').toggleClass('show');
                $('.flexslider').toggleClass('hide');
                $('.asset .image').toggleClass('inactive');
                currentSlide.toggleClass('flex-active-slide');
            })
        });

        // Set responsive image width & height function

        function getWidth() {
            var e = null;
            e = document.getElementsByTagName('img');
            var imageWidth = $('.flexslider > img').get(0).naturalWidth;
            var imageHeight = $('.flexslider > img').get(0).naturalHeight;
            var t = $('.flexslider > img').get(0).naturalHeight;
            var n = $('.flexslider > img').get(0).naturalWidth;
            var r = ($(window).height() - 20) / t;
            var i = $(window).width() / n;
            return r < i ? r / i * 100 + "%" : "100%";
        }

        $(document).ready(function() {
            $('.flexslider > img').css("max-width", getWidth())
            $('.flexslider > img').css({
                "display": "block"
            })
        });
        $(window).resize(function() {
            $(".flexslider > img").css("max-width", getWidth())
        });

    });
}
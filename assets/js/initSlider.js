export default function initSlider() {

    $(window).load(function() {

        // initiate slider
        var main = function() {
            $('.assets_container').first().addClass('flex-active-slide');
            $('.next').add('.flexslider .image-wrapper').click(function() {
                var currentSlide = $('.flexslider .flex-active-slide');
                var nextSlide = currentSlide.next();

                if (nextSlide.length == 0) {
                    nextSlide = $('.asset .image').first();
                }

                currentSlide.fadeOut(100).removeClass('flex-active-slide');
                nextSlide.fadeIn(100).addClass('flex-active-slide');
            });
            $('.prev').click(function() {
                var currentSlide = $('.flex-active-slide');
                var prevSlide = currentSlide.prev();

                if (prevSlide.length == 0) {
                    prevSlide = $('.asset .image').last();
                }

                currentSlide.fadeOut(100).removeClass('flex-active-slide');
                prevSlide.fadeIn(100).addClass('flex-active-slide');
            });

            // initiate thumbnail click function to find corresponding slide
            $('.pagination > img').click(function() {
                // toggle inactive all images in slideshow 
                $('.asset .image').toggleClass('inactive');

                // hide thumbnails
                $('.slideshow_thumbnails').toggleClass('hide').removeClass('show');

                // show flexslider
                $('.flexslider').toggleClass('show').removeClass('hide');

                //Define current slide
                var currentSlide = $('.flex-active-slide .image');
                currentSlide.toggleClass('flex-active-slide');

                //Define current slide integer
                var currentSlideInt = $('.flexslider .flex-active-slide').data("id");

                //Grab data-id value from thumbnail;
                var slideTo = $(this).data("id")

                //Make sure that this value is an integer;
                var slideToInt = parseInt(slideTo);

                //Define "selected" slide to travel to
                var slideSelected = $('.asset .image-' + slideToInt);

                //move flexslider to the correct slide
                slideSelected.fadeIn(100).toggleClass('flex-active-slide');
            })
        };

        // run flexslider
        $(document).ready(main);

        // Count slides and thumbnails and assign to data-id for each element
        $(document).ready(function() {
            var i = 0;
            $(".asset .image").each(function() {
                $(this).attr("data-id", +i);
                i++;
            });
        });
        $(document).ready(function() {
            var i = 0;
            $(".asset .image").each(function() {
                $(this).addClass(("image-") + (+i));
                i++;
            });
        });
        $(document).ready(function() {
            var i = 0;
            $(".pagination > img").each(function() {
                $(this).attr("data-id", +i);
                i++;
            });
        });

        // Thumbnail toggle function
        $(document).ready(function() {
            var count = $('.flexslider').children().length;
            var currentSlide = $('.flexslider .flex-active-slide');

            $('.open-close-thumbs').click(function() {
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
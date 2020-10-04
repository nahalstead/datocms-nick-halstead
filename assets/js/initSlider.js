export default function initSlider() {

    $(window).load(function() {

        // initiate slider
        var main = function() {
            $('.next').add('.flexslider img').click(function() {
                var currentSlide = $('.flexslider .active');
                var nextSlide = currentSlide.next();

                if (nextSlide.length == 0) {
                    nextSlide = $('.flexslider img').first();
                }

                currentSlide.fadeOut(100).removeClass('active');
                nextSlide.fadeIn(100).addClass('active');
            });
            $('.prev').click(function() {
                var currentSlide = $('.active');
                var prevSlide = currentSlide.prev();

                if (prevSlide.length == 0) {
                    prevSlide = $('.flexslider img').last();
                }

                currentSlide.fadeOut(100).removeClass('active');
                prevSlide.fadeIn(100).addClass('active');
            });

            // initiate thumbnail click function to find corresponding slide
            $('.slideshow_thumbnails > img').click(function() {
                // toggle inactive all images in slideshow 
                $('.flexslider img').toggleClass('inactive');

                // hide thumbnails
                $('.slideshow_thumbnails').toggleClass('hide').removeClass('show');

                // show flexslider
                $('.flexslider').toggleClass('show').removeClass('hide');

                //Define current slide
                var currentSlide = $('.flexslider .active');
                currentSlide.toggleClass('active');

                //Define current slide integer
                var currentSlideInt = $('.flexslider .active').data("id");

                //Grab data-id value from thumbnail;
                var slideTo = $(this).data("id")

                //Make sure that this value is an integer;
                var slideToInt = parseInt(slideTo);

                //Define "selected" slide to travel to
                var slideSelected = $('.flexslider .image-' + slideToInt);

                //move flexslider to the correct slide
                slideSelected.fadeIn(100).toggleClass('active');
            })
        };

        // run flexslider
        $(document).ready(main);

        // Count slides and thumbnails and assign to data-id for each element
        $(document).ready(function() {
            var i = 0;
            $(".flexslider img").each(function() {
                $(this).attr("data-id", +i);
                i++;
            });
        });
        $(document).ready(function() {
            var i = 0;
            $(".flexslider img").each(function() {
                $(this).addClass(("image-") + (+i));
                i++;
            });
        });
        $(document).ready(function() {
            var i = 0;
            $(".slideshow_thumbnails img").each(function() {
                $(this).attr("data-id", +i);
                i++;
            });
        });

        // Thumbnail toggle function
        $(document).ready(function() {
            var count = $('.flexslider').children().length;
            var currentSlide = $('.flexslider .active');

            $('.open-close-thumbs').click(function() {
                $('.thumb_container').toggleClass('show');
                $('.flexslider').toggleClass('hide');
                $('.flexslider img').toggleClass('inactive');
                currentSlide.toggleClass('active');
            })
        });

        // Set responsive image width & height function

        function getWidth() {
            var e = null;
            e = document.getElementsByTagName('img');
            var imageWidth = $('.flexslider img').get(0).naturalWidth;
            var imageHeight = $('.flexslider img').get(0).naturalHeight;
            var t = $('.flexslider img').get(0).naturalHeight;
            var n = $('.flexslider img').get(0).naturalWidth;
            var r = ($(window).height() - 20) / t;
            var i = $(window).width() / n;
            return r < i ? r / i * 100 + "%" : "100%";
        }

        $(document).ready(function() {
            $('.flexslider img').css("max-width", getWidth())
            $('.flexslider img').css({
                "display": "block"
            })
        });
        $(window).resize(function() {
            $(".flexslider img").css("max-width", getWidth())
        });

    });
}
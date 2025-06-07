$(document).ready(function(){
    var owl = $('.owl-carousel');

    owl.owlCarousel({
        items: 2,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        slideBy: 2,       // 每次滑動幾張
        responsive: {
            0: {
                items: 1,
                slideBy: 1,

            },
            768: {
                items: 2,
                slideBy: 2,

            }
        }
    });

    // 客製左右箭頭
    $('.owl-prev-btn').click(function() {
        owl.trigger('prev.owl.carousel');
    });
    $('.owl-next-btn').click(function() {
        owl.trigger('next.owl.carousel');
    });
});

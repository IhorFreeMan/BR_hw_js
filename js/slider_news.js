$('.news-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 1671,
            settings: {
                dots: true,
                arrows: false,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 1261,
            settings: {
                slidesToShow: 2,
                dots: true,
                arrows: false,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
                autoplaySpeed: 1000,
            }
        }
    ]
});

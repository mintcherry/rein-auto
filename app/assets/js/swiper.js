const instructorsThumbs = new Swiper('.inspectors__thumb-slider', {
    loop: true,
    slidesPerView: 'auto',
    watchSlidesProgress: true,
    clickable: true,
    spaceBetween: 15,
    slideToClickedSlide: true,

})

const instructorsSLide = new Swiper('.inspectors__content-slider', {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.inspectors__content-slider-nav',
        dynamicBullets: true,
        dynamicMainBullets: 5,
        clickable: true,
    },
    thumbs: {
        swiper: instructorsThumbs,
    },
    breakpoints: {
        1240: {
            loop: false,
            pagination: false,
        }

    }
});

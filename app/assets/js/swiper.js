const instructorsThumbs = new Swiper('.inspectors__thumb-slider', {
    loop: true,
    slidesPerView: 3.3,
    watchSlidesProgress: true,
    spaceBetween: 15,
    slideToClickedSlide: true,
})

const instructorsSLide = new Swiper('.inspectors__content-slider', {
    slidesPerView: 1,
    loop: true,
    slideToClickedSlide: true,
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

instructorsThumbs.on('slideChangeTransitionEnd', () => {
    instructorsSLide.slideTo(instructorsThumbs.realIndex)
})
instructorsThumbs.on('click', () => {
    instructorsThumbs.slideTo(instructorsThumbs.clickedIndex)
})
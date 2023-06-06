let controlsOption = document.querySelectorAll('.gallery__controls-option');
let slideOptions = document.querySelectorAll('.gallery__gallery-slide');
let sliders = document.querySelectorAll('.gallery-sliders');

const images = {
  first: [
    'assets/images/gallery/gallery-sec1-1.jpg',
    'assets/images/gallery/gallery-sec1-2.jpg',
    'assets/images/gallery/gallery-sec1-3.jpg',
    'assets/images/gallery/gallery-sec1-4.jpg',
  ],
  second: [
    'assets/images/gallery/gallery-sec2-1.jpg',
    'assets/images/gallery/gallery-sec2-2.jpg',
    'assets/images/gallery/gallery-sec2-3.jpg',
    'assets/images/gallery/gallery-sec2-4.jpg',
  ],
  third: [
    'assets/images/gallery/gallery-sec3-1.jpg',
    'assets/images/gallery/gallery-sec3-2.jpg',
    'assets/images/gallery/gallery-sec3-3.jpg',
    'assets/images/gallery/gallery-sec3-4.jpg',
  ],
};

let activeImages = [];

controlsOption.forEach((loopSection, index) => {
  loopSection.addEventListener('click', () => changeSection(loopSection, index));
})

function initActiveSection() {
  activeImages = images.first;
  controlsOption[0].classList.add('active');
  sliders[0].classList.add('active');

  // Устанавливаем картинки
  slideOptions[0]
      .querySelector('img')
      .setAttribute('src', activeImages[0]);
  slideOptions[1]
      .querySelector('img')
      .setAttribute('src', activeImages[1]);
  slideOptions[2]
      .querySelector('img')
      .setAttribute('src', activeImages[2]);
  slideOptions[3]
      .querySelector('img')
      .setAttribute('src', activeImages[3]);
}

function changeSection(section, index) {
  controlsOption.forEach(loopSection => {
    if (loopSection.classList.contains('active')) {
      loopSection.classList.remove('active');
    }
  });
  sliders.forEach(loopSlider => {
    if (loopSlider.classList.contains('active')) {
      loopSlider.classList.remove('active');
    }
  });

  section.classList.add('active');
  sliders[index].classList.add('active');
  activeImages = Object.values(images)[index];

  // Устанавливаем картинки
  slideOptions[0]
      .querySelector('img')
      .setAttribute('src', activeImages[0]);
  slideOptions[1]
      .querySelector('img')
      .setAttribute('src', activeImages[1]);
  slideOptions[2]
      .querySelector('img')
      .setAttribute('src', activeImages[2]);
  slideOptions[3]
      .querySelector('img')
      .setAttribute('src', activeImages[3]);
}

initActiveSection();


// sliders
const firstSlider = new Swiper('.gallery__slider_first', {
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.gallery__slider_first__slider-nav',
    clickable: true,
  },
});
const secondSlider = new Swiper('.gallery__slider_second', {
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.gallery__slider_second__slider-nav',
    clickable: true,
  },
});
const thirdSlider = new Swiper('.gallery__slider_third', {
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.gallery__slider_third__slider-nav',
    clickable: true,
  },
});
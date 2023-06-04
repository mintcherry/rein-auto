const inspectors = [
  {
    name: 'Черевко Александр Сергеевич',
    experience: '7 лет',
    description: 'Спокойный, терпеливый, адекватный, тактично корректирует ошибки и внимательно контролирует ученика в процессе вождения.',
    img: '../assets/images/inspectors/Черевко_Александр_Сергеевич.jpg',
  },
  {
    name: 'Науменко Иван Александрович',
    experience: '5 лет',
    description: 'Терпеливый, спокойный, ,коммуникабельный, придаёт уверенности ученикам.',
    img: '../assets/images/inspectors/Науменко_Иван_Александрович.jpg',
  },
  {
    name: 'Маруга Иван Юрьевич',
    experience: '8 лет',
    description: 'Позитивный, внимательный, приятный в общении, требовательный.',
    img: '../assets/images/inspectors/Маруга_Иван_Юрьевич.jpg',
  },
  {
    name: 'Медведчук Владимир Николаевич ОМР',
    experience: '16 лет',
    description: 'Профессионал своего дела, индивидуальный подход к каждому ученику.',
    img: '../assets/images/inspectors/Медведчук_Владимир_Николаевич_ОМР.jpg',
  },
  {
    name: 'Мустафаев Мемет Рефатович',
    experience: '7 лет',
    description: 'Пунктуальный,сдержанный. Объясняет терпеливо и доходчиво, ошибки разбираются сразу и очень подробно. Занятия проходят в легкой и не принужденной обстановке.',
    img: '../assets/images/inspectors/Мустафаев_Мемет_Рефатович.jpg',
  },
  {
    name: 'Аметов Решат Талятович',
    experience: '13 лет',
    description: 'Спокойный, комуникабельный, трудолюбивый, отзывчивый , настойчивый.',
    img: '../assets/images/inspectors/Аметов_Решат_Талятович.jpg',
  },
  {
    name: 'Музыченко Александр Васильевич',
    experience: '3 года',
    description: 'Спокойный, комуникабельный, трудолюбивый, отзывчивый , настойчивый.',
    img: '../assets/images/inspectors/Музыченко_Александр_Васильевич.jpg',
  },
  {
    name: 'Балакирев Максим Викторович',
    experience: '3 года',
    description: 'Живая, энергичная, яркая, ответственная,внимательная. Умеет поддержать и найти подход к ученикам.',
    img: '../assets/images/inspectors/Балакирев_Максим_Викторович.jpg',
  },
  {
    name: 'Аблямитов Мемет Серверович',
    experience: '13 лет',
    description: 'Общительный , энергичный, точная и быстрая реакция,отзывчивость и внимательность к ученикам.',
    img: '../assets/images/inspectors/Аблямитов_Мемет_Серверович.jpg',
  },
  {
    name: 'Шаповалов Дмитрий Семенович',
    experience: '8 лет',
    description: 'Коммуникабельный, с чувством юмора, отзывчивый.',
    img: '../assets/images/inspectors/Шаповалов_Дмитрий_Семенович.jpg',
  },
  {
    name: 'Копейко Андрей Николаевич',
    experience: '8 лет',
    description: 'Энергичный, коммуникабельный, безупречное знание Правил Дорожного Движения.',
    img: '../assets/images/inspectors/Копейко_Андрей_Николаевич.jpg',
  },
  {
    name: 'Емельянов Александр Викторович',
    experience: '9 лет',
    description: 'Открытый, внимательный,использует понятные термины и иллюстрирует ситуации яркими и запоминающимися случаями из жизни.',
    img: '../assets/images/inspectors/Емельянов_Александр_Викторович.jpg',
  },
  {
    name: 'Негодяев Юрий Алексеевич',
    experience: '9 лет',
    description: 'Коммуникабельный, открытый, с чувством юмора, во всем видит положительные аспекты.',
    img: '../assets/images/inspectors/Негодяев_Юрий_Алексеевич.jpg',
  },
  {
    name: 'Сейдаметов Энвер Асим-Сабриевич ВС',
    experience: '15 лет',
    description: 'Сдержанный, терпимый, уравновешенный, быстрая скорость реакции, большой стаж вождения в разных климатических зонах.',
    img: '../assets/images/inspectors/Сейдаметов_Энвер_Асим-Сабриевич_ВС.jpg',
  },
];

let name = document.querySelector('.inspectors__name');
let mainImage = document.querySelector('.inspectors__image img');
let about = document.querySelector('.inspectors__description-text');
let experience = document.querySelector('.inspectors__experience__value');

const swiper = new Swiper('.inspectors__slider', {
  loop: true,
  slidesPerView: 4,
  slideClickable: true,
});

inspectors.forEach((inspector, index) => {
  const slide = document.createElement('div');
  const image = document.createElement('img');

  slide.classList.add('swiper-slide');
  slide.classList.add('inspectors__slider-slide');

  image.src = inspector.img;

  slide.setAttribute('data-slide-index', index);

  slide.appendChild(image);
  swiper.appendSlide(slide);
});

swiper.update();


swiper.on('click', () => {
  const clickedSlide = event.target.closest('.swiper-slide');

  if (clickedSlide) {
    const slideIndex = clickedSlide.getAttribute('data-slide-index');

    swiper.slideTo(slideIndex);

    name.innerHTML = inspectors[slideIndex].name;
    about.innerHTML = inspectors[slideIndex].description;
    experience.innerHTML = inspectors[slideIndex].experience;
    mainImage.setAttribute('src', inspectors[slideIndex].img);
  }
});

function initFirstSlide() {
  name.innerHTML = inspectors[0].name;
  about.innerHTML = inspectors[0].description;
  experience.innerHTML = inspectors[0].experience;
  mainImage.setAttribute('src', inspectors[0].img);
}

initFirstSlide();

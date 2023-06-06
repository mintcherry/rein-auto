// const html = document.querySelector('html');
//
// class Header {
//   constructor(header, offset = 0, burger, burgerMenu) {
//     this.element = header;
//     this.basePosition = header.offsetTop + offset;
//     this.burger = burger;
//     this.burgerMenu = burgerMenu;
//     this.initialPoin = 0;
//   }
//
//   Init() {
//     html.addEventListener('scroll', (e) => {
//       if (e.wheelDeltaY < 0 && !html.classList.contains('lock-scroll')) {
//         this.OnScrollDown();
//       } else {
//         if (window.pageYOffset > this.basePosition) {
//           this.OnScrollTop();
//         } else {
//           this.DefaultPosition();
//         }
//       }
//     });
//
//     html.addEventListener('touchstart', (e) => {
//       this.initialPoint = e.changedTouches[0];
//     }, false);
//
//     html.addEventListener('touchend', (e) => {
//       this.finalPoint = e.changedTouches[0];
//       if (this.finalPoint.pageY < this.initialPoint.pageY) {
//         this.OnScrollDown();
//       } else {
//         if (window.pageYOffset > this.basePosition) {
//           this.OnScrollTop();
//         } else {
//           this.DefaultPosition();
//         }
//       }
//     })
//   }
//
//   OnScrollDown() {
//     this.element.classList.add('sticky');
//     this.element.classList.remove('visible');
//     if (this.burger != null && this.burgerMenu != null) {
//       this.burger.classList.remove('active');
//       this.burgerMenu.classList.remove('active');
//     }
//
//   }
//
//   OnScrollTop() {
//     this.element.classList.add('sticky');
//     this.element.classList.add('visible');
//   }
//
//   DefaultPosition() {
//     this.element.classList.remove('sticky');
//     this.element.classList.remove('visible');
//   }
//
//   ToggleBurgerActivity() {
//     this.burger.classList.toggle('active');
//     this.burgerMenu.classList.toggle('active');
//   }
// }
//
//
// const header = new Header(document.querySelector('.header'), 0, document.querySelector('.header__burger'), document.querySelector('.header__navigation'));
//
// header.Init();
//
// header.burger.addEventListener('click', () => header.ToggleBurgerActivity())

const html = document.querySelector('html');
const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__navigation');

class Header {
  constructor(header, offset = 0, burger, burgerMenu) {
    this.element = header;
    this.basePosition = header.offsetTop + offset;
    this.burger = burger;
    this.burgerMenu = burgerMenu;
    this.initialPoint = 0;
    this.lastScrollY = 0;
  }

  Init() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > this.lastScrollY && window.scrollY > this.basePosition && !html.classList.contains('lock-scroll')) {
        this.OnScrollDown();
      } else {
        this.OnScrollUp();
      }
      this.lastScrollY = window.scrollY;
    });

    html.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      if (touch.pageY > this.initialPoint) {
        this.OnScrollDown();
      } else {
        this.OnScrollUp();
      }
      this.initialPoint = touch.pageY;
    });

  }

  OnScrollDown() {
    this.element.classList.add('sticky');
    this.element.classList.remove('visible');
    if (this.burger != null && this.burgerMenu != null) {
      this.burger.classList.remove('active');
      this.burgerMenu.classList.remove('active');
    }
  }

  OnScrollUp() {
    this.element.classList.add('sticky');
    this.element.classList.add('visible');
  }

  DefaultPosition() {
    this.element.classList.remove('sticky');
    this.element.classList.remove('visible');
  }

  ToggleBurgerActivity() {
    this.burger.classList.toggle('active');
    this.burgerMenu.classList.toggle('active');
  }
}

const headerInstance = new Header(header, 0, burger, burgerMenu);
headerInstance.Init();

burger.addEventListener('click', () => headerInstance.ToggleBurgerActivity());
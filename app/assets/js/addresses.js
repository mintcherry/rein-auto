const addresses = [
  {
    title: 'пр. Победы, 39',
    coords: [44.960854, 34.117808],
    description: 'перекресток пр. Победы и ул. Лермонтова',
    group: '05.04.2023 г.',
    stopPosition: 'кинотеатр «Звезда»',
    minibuses: {
      tooltip: `от площади Куйбышева <br> <span>3 минуты</span>`,
      values: ['2', '10', '48', '51', '69', '82', '83', '86'],
    },
    trolleybus: {
      tooltip: `от Центрального рынка <br> <span>13 минут</span>`,
      values: ['4а', '7', '10', '17к'],
    },
    buses: {
      tooltip: `от площади Московской <br> <span>7 минут</span>`,
      values: ['3', '7', '8', '14', '30', '70', '78', '81', '88', '508-23'],
    },
  },
  {
    title: 'бул. Ленина 1',
    coords: [44.958966, 34.089295],
    description: 'перекресток б. Ленина и ул. Павленко',
    group: '05.04.2023 г.',
    stopPosition: 'Медицинский институт',
    minibuses: {
      tooltip: `от ЖД-вокзала <br> <span>5 минут</span>`,
      values: ['21', '25', '52', '57', '60', '61', '65', '82', '94'],
    },
    trolleybus: {
      tooltip: `от парка имени Гагарина <br> <span>10 минут</span>`,
      values: ['5', '6', '9'],
    },
    buses: {
      tooltip: `от ЖД-вокзала <br> <span>5 минут</span>`,
      values: ['4', '12б', '49', '50', '62', '67', '81', '89', '91', '98', '99', '104'],
    },
  },
  {
    title: 'пр. А. Вернадского, 151',
    coords: [44.933774, 34.134732],
    description: 'перекресток пр А. Вернадского и ул. Мира',
    group: '05.04.2023 г.',
    stopPosition: 'Университет',
    minibuses: {
      tooltip: `от Автовокзала <br> <span>5 минут</span>`,
      values: ['41', '54', '60', '65', '85'],
    },
    trolleybus: {
      tooltip: `от микрорайона Марьино <br> <span>7 минут</span>`,
      values: ['41', '54', '60', '65', '85'],
    },
    buses: {
      tooltip: `от площади Куйбышева <br> <span>11 минут</span>`,
      values: ['49', '88', '96', '386-23', '503-08'],
    },
  },
  {
    title: 'ул. Генерала Васильева, 27-Г',
    coords: [44.940901, 34.074626],
    description: 'перекресток ул. Генерала Васильева и пер. Элеваторный',
    group: '05.04.2023 г.',
    stopPosition: 'Симферопольский шиномонтажный завод',
    minibuses: {
      tooltip: `от мкр. Маршала Жукова <br> <span>5 минут</span>`,
      values: ['15', '21', '41', '48', '94'],
    },
    trolleybus: {
      tooltip: `от Центрального рынка <br> <span>13 минут</span>`,
      values: ['-'],
    },
    buses: {
      tooltip: `от села Перово <br> <span>8 минут</span>`,
      values: ['1', '3', '92'],
    },
  },
  {
    title: 'ул. Севастопольская, 32',
    coords: [44.941832, 34.096455],
    description: 'перекресток ул. Севастопольской и ул. Козлова',
    group: '05.04.2023 г.',
    stopPosition: 'Центральный рынок',
    minibuses: {
      tooltip: `от парк Шевченко <br> <span>4 минуты</span>`,
      values: ['54', '57', '69', '83', '86'],
    },
    trolleybus: {
      tooltip: `от Центрального рынка <br> <span>2 минуты</span>`,
      values: ['4', '5', '7', '9', '10', '15'],
    },
    buses: {
      tooltip: `от площади Ленина <br> <span>8 минут</span>`,
      values: ['4', '62', '70', '89', '91', '96', '99'],
    },
  },
  {
    title: 'ул. Маршала Василевского, 2а',
    coords: [44.938827, 34.062076],
    description: 'перекресток ул. Героев Сталинграда и ул. Маршала Василевского',
    group: '05.04.2023 г.',
    stopPosition: 'Героев Сталинграда',
    minibuses: {
      tooltip: `от мкр. Маршала Жукова <br> <span>5 минут</span>`,
      values: ['15', '21', '41', '48', '94', '127', '148', '157'],
    },
    trolleybus: {
      tooltip: `от Центрального рынка <br> <span>13 минут</span>`,
      values: ['15'],
    },
    buses: {
      tooltip: `от села Перово <br> <span>8 минут</span>`,
      values: ['1', '3', '5', '309-23', '310-23', '331-13', '397-23', '482-23'],
    },
  },
  {
    title: 'ул. Киевская, 133',
    coords: [44.973130, 34.098817],
    description: 'район Москольцо',
    group: '05.04.2023 г.',
    stopPosition: 'Московская площадь',
    minibuses: {
      tooltip: `от Ж/Д Вокзала <br> <span>7 минут</span>`,
      values: ['52', '61'],
    },
    trolleybus: {
      tooltip: `от Ашана <br> <span>6 минут</span>`,
      values: ['5', '17', '17к'],
    },
    buses: {
      tooltip: `от Куйбышевского рынка <br> <span>8 минут</span>`,
      values: ['6', '13а', '62', '77', '100'],
    },
  },
];

const group = document.querySelector('#group');
const buses = document.querySelector('#buses');
const busesDesc = document.querySelector('#busesDesc');
const minibuses = document.querySelector('#minibuses');
const trolleybus = document.querySelector('#trolleybus');
const stopStation = document.querySelector('#stopStation');
const minibusesDesc = document.querySelector('#minibusesDesc');
const trolleybusDesc = document.querySelector('#trolleybusDesc');

const addressLink = document.querySelector('#addressLink');

let activeAddress = null;

function initAddressList() {
  let list = document.querySelector('.addresses__list');

  addresses.forEach((address, index) => {
    let listItem = document.createElement('div');
    let listItemTitle = document.createElement('div');
    let listItemDescription = document.createElement('div');

    listItem.setAttribute('class', 'addresses__list-item');
    listItemTitle.setAttribute('class', 'addresses__list-item__title');
    listItemDescription.setAttribute('class', 'addresses__list-item__description');

    listItem.appendChild(listItemTitle);
    listItem.appendChild(listItemDescription);

    listItemTitle.innerHTML = addresses[index].title;
    listItemDescription.innerHTML = addresses[index].description;

    listItem.addEventListener('click', () => selectAddress(listItem, index));

    list.appendChild(listItem);
  });
}

function selectAddress(elem, index) {
  let list = document.querySelectorAll('.addresses__list-item');

  // убераем активный адрес перед установкой нового
  list.forEach(loopAddress => {
    loopAddress.classList.remove('active');
  });

  activeAddress = addresses[index];
  elem.classList.add('active');

  addressLink.setAttribute(
      'href',
      `https://yandex.ru/maps/?ll=${activeAddress.coords[1]},${activeAddress.coords[0]}&pt=${activeAddress.coords[1]},${activeAddress.coords[0]}&z=17`
  );

  initAddressDescription();
  updateMap();
}

function initActiveAddress() {
  let list = document.querySelectorAll('.addresses__list-item');

  activeAddress = addresses[0];
  list[0].classList.add('active');

  addressLink.setAttribute(
      'href',
      `https://yandex.ru/maps/?ll=${activeAddress.coords[1]},${activeAddress.coords[0]}&pt=${activeAddress.coords[1]},${activeAddress.coords[0]}&z=17`
  );

  initAddressDescription();
}

function initAddressDescription() {
  // выводим инфу в нужные места в DOM
  stopStation.innerHTML     = activeAddress.stopPosition;
  minibuses.innerHTML       = activeAddress.minibuses.values;
  minibusesDesc.innerHTML   = activeAddress.minibuses.tooltip;
  trolleybus.innerHTML      = activeAddress.trolleybus.values;
  trolleybusDesc.innerHTML  = activeAddress.trolleybus.tooltip;
  buses.innerHTML           = activeAddress.buses.values;
  busesDesc.innerHTML       = activeAddress.buses.tooltip;
  group.innerHTML           = activeAddress.group;
}

initAddressList();
initActiveAddress();


// карта
ymaps.ready(init);

var myMap;

function init() {
  myMap = new ymaps.Map("address-map", {
    center: activeAddress.coords,
    zoom: 17,
    controls: [],
  });

  var placemark = new ymaps.Placemark(activeAddress.coords, {
    hintContent: activeAddress.name,
    balloonContent: activeAddress.description,
  });

  myMap.geoObjects.add(placemark);
}

function updateMap() {
  myMap.setCenter(activeAddress.coords);
  myMap.geoObjects.get(0).geometry.setCoordinates(activeAddress.coords);
}
let tariffs = [
  {
    id: 'A',
    prepayment: {
      active: true,
      value: 2000,
    },
    deduction: {
      active: true,
      value: 0,
    },
    friend: {
      active: false,
      value: 1000,
    },
    sale: {
      active: true,
      value: 2000,
    },
    defaultPrice: 13000,
    totalPrice: 9000,
  },
  {
    id: 'B',
    prepayment: {
      active: true,
      value: 2000,
    },
    deduction: {
      active: true,
      value: 0,
    },
    friend: {
      active: true,
      value: 1000,
    },
    sale: {
      active: true,
      value: 2000,
    },
    defaultPrice: 29900,
    totalPrice: 24900,
  },
  {
    id: 'C',
    prepayment: {
      active: true,
      value: 2000,
    },
    deduction: {
      active: true,
      value: 0,
    },
    friend: {
      active: true,
      value: 1000,
    },
    sale: {
      active: true,
      value: 2000,
    },
    defaultPrice: 19000,
    totalPrice: 14000,
  },
];

let ATariff = document.getElementById('ATotalPrice');
let BTariff = document.getElementById('BTotalPrice');
let CTariff = document.getElementById('CTotalPrice');

function changeATariffOptions(prop, value) {
  if (prop === 'A-sale') {
    tariffs[0].sale.active = value;

    value
        ? tariffs[0].totalPrice -= tariffs[0].sale.value
        : tariffs[0].totalPrice += tariffs[0].sale.value;
  }
  if (prop === 'A-friend') {
    tariffs[0].friend.active = value;

    value
        ? tariffs[0].totalPrice -= tariffs[0].friend.value
        : tariffs[0].totalPrice += tariffs[0].friend.value;
  }

  if (prop === 'A-deduction') {
    tariffs[0].deduction.active = value;

    value
        ? tariffs[0].totalPrice -= tariffs[0].deduction.value
        : tariffs[0].totalPrice += tariffs[0].deduction.value;
  }
  if (prop === 'A-prepayment') {
    tariffs[0].prepayment.active = value;

    value
        ? tariffs[0].totalPrice -= tariffs[0].prepayment.value
        : tariffs[0].totalPrice += tariffs[0].prepayment.value;
  }

  ATariff.innerHTML = tariffs[0].totalPrice + ' ₽';
}
function changeBTariffOptions(prop, value) {
  if (prop === 'B-sale') {
    tariffs[1].sale.active = value;

    value
        ? tariffs[1].totalPrice -= tariffs[1].sale.value
        : tariffs[1].totalPrice += tariffs[1].sale.value;
  }
  if (prop === 'B-friend') {
    tariffs[1].friend.active = value;

    value
        ? tariffs[1].totalPrice -= tariffs[1].friend.value
        : tariffs[1].totalPrice += tariffs[1].friend.value;
  }

  if (prop === 'B-deduction') {
    tariffs[1].deduction.active = value;

    value
        ? tariffs[1].totalPrice -= tariffs[1].deduction.value
        : tariffs[1].totalPrice += tariffs[1].deduction.value;
  }
  if (prop === 'B-prepayment') {
    tariffs[1].prepayment.active = value;

    value
        ? tariffs[1].totalPrice -= tariffs[1].prepayment.value
        : tariffs[1].totalPrice += tariffs[1].prepayment.value;
  }

  BTariff.innerHTML = tariffs[1].totalPrice + ' ₽';
}
function changeCTariffOptions(prop, value) {
  if (prop === 'C-sale') {
    tariffs[2].sale.active = value;

    value
        ? tariffs[2].totalPrice -= tariffs[2].sale.value
        : tariffs[2].totalPrice += tariffs[2].sale.value;
  }
  if (prop === 'C-friend') {
    tariffs[2].friend.active = value;

    value
        ? tariffs[2].totalPrice -= tariffs[2].friend.value
        : tariffs[2].totalPrice += tariffs[2].friend.value;
  }

  if (prop === 'C-deduction') {
    tariffs[2].deduction.active = value;

    value
        ? tariffs[2].totalPrice -= tariffs[2].deduction.value
        : tariffs[2].totalPrice += tariffs[2].deduction.value;
  }
  if (prop === 'C-prepayment') {
    tariffs[2].prepayment.active = value;

    value
        ? tariffs[2].totalPrice -= tariffs[2].prepayment.value
        : tariffs[2].totalPrice += tariffs[2].prepayment.value;
  }

  CTariff.innerHTML = tariffs[2].totalPrice + ' ₽';
}

ATariff.innerHTML = tariffs[0].totalPrice + ' ₽';
BTariff.innerHTML = tariffs[1].totalPrice + ' ₽';
CTariff.innerHTML = tariffs[2].totalPrice + ' ₽';


const tariffTabs = document.querySelectorAll('.js-tariff-tab');


function changeTab(clickedTab){
  let tariffNum = clickedTab.dataset.tariff;

  document.querySelector('.js-tariff-tab.active').classList.remove('active');
  document.querySelector('.js-tariff-option.active').classList.remove('active');
  clickedTab.classList.add('active');
  document.querySelector('.js-tariff-option[data-tariff="' + tariffNum + '"]').classList.add('active');
}

if(window.innerWidth < 1240){
  tariffTabs.forEach(loopTab => {
    loopTab.addEventListener('click', () => changeTab(loopTab));
  })
}
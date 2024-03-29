class Select{
    constructor(select){
        this.element = select;
    }
    Handler(){
        this.options = this.element.querySelectorAll('li');
        this.currentOptionEl = this.element.querySelector('.js-select-current');
        this.hideInput = this.element.querySelector('.js-select--hidden');

        if(this.element.classList.contains('active')){

            this.element.classList.remove('active');

        } else {

            this.element.classList.add('active');

            this.options.forEach(option => {
                option.addEventListener('click', () => this.OptionsHandler(option));
            });

            this.CloseSelect(this);

        }
    }
    OptionsHandler(option){
        let value = option.dataset.value;

        this.hideInput.value = value;
        this.currentOptionEl.innerHTML = value;
        this.currentOptionEl.classList.remove('placeholder');
        this.options.forEach(option => {
            option.removeEventListener('click', this.OptionsHandler);
        })
    }
    CloseSelect(select){
        function outsideClickListener(event) {
            if (!select.element.contains(event.target)) {
                select.element.classList.remove('active')
                document.removeEventListener('click', outsideClickListener);
            }
        }
        document.addEventListener('click', (event) => outsideClickListener(event))
    }
}
class Popup {
    constructor(el){
        this.element = el;
    }
    ShowPopup( html = null){
        this.element.classList.add('loading');
        if(html != null)
            html.classList.add('lock-scroll');
        setTimeout(() => {
            this.element.classList.add('active');
        }, 50);
        document.addEventListener('click', (e) => this.ClosePopup(e));
    }
    ClosePopup(e, html = null ){
        if (e.target.classList.contains("popup") || e.target.classList.contains("close-button") || e.target.classList.contains("close-button__line")) {
            this.element.classList.remove('active');
            if(html != null)
                html.classList.remove('lock-scroll');
            setTimeout(() => {
                this.element.classList.remove('loading');
            }, 400)
            document.removeEventListener('click', this.ClosePopup);
        }
    }
}

let selects = document.querySelectorAll('.select-element');

selects.forEach(loopSelect => {
    let select = new Select(loopSelect);

    select.element.addEventListener('click', () => select.Handler());
})

let discountPopupEl = document.querySelector('.discount-popup');
let categoryPopupEl = document.querySelector('.category-popup');
let messagePopupEl = document.querySelector('.message-popup')
let showPopupButtons = document.querySelectorAll('.js-show-popup');
let textAreas = document.querySelectorAll('.popup__form-textarea');
let forms = document.querySelectorAll('form');
const discountPopup = new Popup(discountPopupEl);
const categoryPopup = new Popup(categoryPopupEl);
const messagePopup = new Popup(messagePopupEl);

showPopupButtons.forEach(loopButton => {
   loopButton.addEventListener('click', () => {
       let dataPopup = loopButton.dataset.popup;

       if(dataPopup === 'discount'){
           discountPopupEl.querySelector('.popup__subtitle').innerHTML = loopButton.dataset.text;
           discountPopup.ShowPopup();
           return;
       }
       if(dataPopup === 'category'){
           categoryPopup.element.querySelector('.js-set-title').innerHTML = loopButton.dataset.catageory;
           if (loopButton.dataset.catageory === 'Категория A + A1'){
               categoryPopup.element.classList.remove('show-options')
               categoryPopup.element.querySelector('.js-set-price').innerHTML = document.getElementById('ATotalPrice').innerHTML;
           }
           if (loopButton.dataset.catageory === 'Категория B + B1'){
               categoryPopup.element.classList.add('show-options')
               categoryPopup.element.querySelector('.js-set-price').innerHTML = document.getElementById('BTotalPrice').innerHTML;
           }
           if (loopButton.dataset.catageory === 'Категория C + C1'){
               categoryPopup.element.classList.remove('show-options')
               categoryPopup.element.querySelector('.js-set-price').innerHTML = document.getElementById('CTotalPrice').innerHTML;
           }
           categoryPopup.ShowPopup();
           return;
       }
       if(dataPopup === 'message'){
           messagePopup.ShowPopup();
           return;
       }
   })
})

function updateInputLengthCounter(area, textareaInput){
    let counter = area.querySelector('.current-count');

    counter.innerHTML = textareaInput.value.length;
}
if(textAreas != null){
    textAreas.forEach(area => {
        let textareaInput= area.querySelector('.popup__form-input-textarea');
        textareaInput.addEventListener('input', () => updateInputLengthCounter(area, textareaInput))
    })
}

forms.forEach(loopForm => {
    loopForm.addEventListener('submit', (e) => {
        e.preventDefault();

        loopForm.innerHTML = '<p class="popup__form-success-title">Спасибо за обращение!</p>\n' +
            '<p class="popup__form-success-text">Мы свяжемся с вами\n' +
            ' в удобное для вас время!</p>'
    })
})
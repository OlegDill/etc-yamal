$(document).ready(function () {
  const slider = $("#slider").owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 0,
    touchDrag: true,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
  });
});

// class Popup {
//   constructor(popup) {
//     this._popup = popup;
//   }

//   open() {
//     this._popup.classList.add('popup_opened');
//     document.querySelector('.body').classList.toggle('body_overflow');
//     document.addEventListener('keydown', this._handleEscOrOverlayClick);
//   }

//   close() {
//     document.querySelector('.popup_opened').classList.remove('popup_opened');
//     document.querySelector('.body').classList.toggle('body_overflow');
//     document.removeEventListener('keydown', this._handleEscOrOverlayClick);
//   }

//   _handleEscOrOverlayClick = (event) => {
//     if (event.key === 'Escape' || event.target === event.currentTarget) {
//       this.close();
//     }
//   }

//   setEventListeners() {
//     this._popup.addEventListener('mousedown', this._handleEscOrOverlayClick);
//     document.querySelector('.popup__close').addEventListener('click', this.close);
//     // document.querySelector('.services__box').addEventListener('click', this.open);
//   }
// }

let elements = document.querySelectorAll('.services__card');
let aboutList = document.querySelectorAll('.about__caption-list');
let about = document.querySelector('.about__button');
let templateAbout = document.querySelector('.template__about');
let templateMoreOne = document.querySelector('.template__more-one');
let templateMoreTwo = document.querySelector('.template__more-two');
let templateMoreThree = document.querySelector('.template__more-three');
let templateMoreFourth = document.querySelector('.template__more-fourth');
let templateMoreFifth = document.querySelector('.template__more-fifth');
let templateMoreSixth = document.querySelector('.template__more-sixth');
let buttonCall = document.querySelector('.advantage__consultation-button');

buttonCall.addEventListener('click', open);

elements.forEach((item) => {
  item.addEventListener('click', open);
});

aboutList.forEach((item) => {
  item.addEventListener('click', open);
});

about.addEventListener('click', open);

handleEscOrOverlayClick = (event) => {
  if (event.key === 'Escape' || event.target === event.currentTarget) {
    close();
  }
}

function close() {
  document.querySelector('.popup_opened').classList.remove('popup_opened');
  document.querySelector('.body').classList.toggle('body_overflow');
  document.removeEventListener('keydown', handleEscOrOverlayClick);
  document.querySelector('.popup-more__list').classList.remove('popup-more__list-about');
  document.querySelector('.popup-more__form').innerHTML = '';
}

function open(evt) {
  document.querySelector('.body').classList.toggle('body_overflow');
  document.addEventListener('keydown', handleEscOrOverlayClick);
  if (evt.currentTarget.classList.value === 'advantage__consultation-button') {
    document.querySelector('.popup-call').addEventListener('click', handleEscOrOverlayClick);
    document.querySelector('.popup-call').classList.add('popup_opened');
    document.querySelector('.popup__close').addEventListener('click', close);
  } else {
    document.querySelector('.popup-more').classList.add('popup_opened');
    document.querySelector('.popup-more').addEventListener('click', handleEscOrOverlayClick);
    if (evt.currentTarget.classList.value === 'services__card services__card_one') {
      document.querySelector('.popup-more__form').appendChild(templateMoreOne.content.cloneNode(true));
    } else if (evt.currentTarget.classList.value === 'services__card services__card_two') {
      document.querySelector('.popup-more__form').appendChild(templateMoreTwo.content.cloneNode(true));
    } else if (evt.currentTarget.classList.value === 'services__card services__card_three') {
      document.querySelector('.popup-more__form').appendChild(templateMoreThree.content.cloneNode(true));
    } else if (evt.currentTarget.classList.value === 'services__card services__card_fourth') {
      document.querySelector('.popup-more__form').appendChild(templateMoreFourth.content.cloneNode(true));
    } else if (evt.currentTarget.classList.value === 'services__card services__card_fifth') {
      document.querySelector('.popup-more__form').appendChild(templateMoreFifth.content.cloneNode(true));
    } else if (evt.currentTarget.classList.value === 'services__card services__card_sixth') {
      document.querySelector('.popup-more__form').appendChild(templateMoreSixth.content.cloneNode(true));
    } else if (evt.currentTarget.classList.value === 'about__button' || 'about__caption-list') {
      document.querySelector('.popup-more__form').appendChild(templateAbout.content.cloneNode(true));
      document.querySelector('.popup-more__list').classList.add('popup-more__list-about');
    }
    document.querySelector('.popup__close').addEventListener('click', close);
  }
}
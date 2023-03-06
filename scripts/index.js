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





let elements = document.querySelectorAll('.services__link');
let about = document.querySelector('.about__button');

elements.forEach((item) => {
  item.addEventListener('click', open);
});

about.addEventListener('click', open);

handleEscOrOverlayClick = (event) => {
  console.log('handleEscOrOverlayClick');
  if (event.key === 'Escape' || event.target === event.currentTarget) {
    close();
  }
}

function close() {
  document.querySelector('.popup_opened').classList.remove('popup_opened');
  document.querySelector('.body').classList.toggle('body_overflow');
  document.removeEventListener('keydown', handleEscOrOverlayClick);
  document.querySelector('.popup-more__list').classList.remove('popup-more__list-about');
  document.querySelector('.popup-more__item').classList.remove('popup-more__item-about');
}

function open(evt) {
  document.querySelector('.body').classList.toggle('body_overflow');
  document.addEventListener('keydown', handleEscOrOverlayClick);
  document.querySelector('.popup').classList.add('popup_opened');
  document.querySelector('.popup__close').addEventListener('click', close);
  if (evt.currentTarget.classList.value === 'services__link services__link_one') {
    document.querySelector('.popup-more__caption').textContent = "Системы пожарной сигнализации";
    document.querySelector('.popup-more__list').innerHTML = '<li class="popup-more__item">монтажные и пусконаладочные работы, техническое обслуживание и ремонт систем пожаротушения, оповещения людей о пожаре;</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">монтаж и техническое обслуживание систем дымоудаления (противодымной вентиляции);</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">монтаж и техническое обслуживание противопожарных дверей, люков, окон и других видов заполнений проемов в противопожарных преградах;</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">монтаж и техническое обслуживание фотолюминесцентных систем и их элементов;</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">техническое обслуживание с проведением испытаний систем наружного и внутреннего противопожарного водоснабжения;</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">проведение эксплуатационных испытаний ограждений кровли и наружных пожарных лестниц;</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">монтаж противопожарных дверей и окон;</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">разработка и изготвление планов эвакуации людей при пожаре;</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">разработка проектной и рабочей документации систем противопожарной защиты (системы водяного, газового, порошкового и аэрозольного пожаротушения, системы пожарной сигнализации и оповещения людей о пожаре, системы противопожарного водопровода).</li>';
    // document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item"></li>';
  } else if (evt.currentTarget.classList.value === 'services__link services__link_two') {
    document.querySelector('.popup-more__caption').textContent = "Проектирование";
    document.querySelector('.popup-more__list').innerHTML = '<li class="popup-more__item">проектирование систем пожаротушения, пожарной сигнализации и оповещения людей о пожаре;</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">проектирование систем видеонаблюдения и контроля доступа (СКУД);</li>';
  } else if (evt.currentTarget.classList.value === 'services__link services__link_three') {
    document.querySelector('.popup-more__caption').textContent = "Пожарный аудит, расчеты";
    document.querySelector('.popup-more__list').innerHTML = '<li class="popup-more__item">проведение независимой оценки пожарного риска (аудит пожарной безопасности) в соответствии с Постановлением Правительства №304 от 7 апреля 2009г.;</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">проведение расчетов по оценке пожарного риска в соответствии с Приказами МЧС России №382 от 30 июня 2009г. и №404 от 10 июня 2009г.;</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">разработка и регистрация деклараций пожарной безопасности;</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">разработка и согласование специальных технический условий (СТУ) на проектирование (в соответствии с Приказом Минстроя от 15 апреля 2016г. №248/пр и Приказом МЧС от 28 ноября 2011г. № 710);</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">разработка 9-го раздела проектной документации «Мероприятия по обеспечению пожарной безопасности» (в соответствии с Постановлением Правительства от 16 февраля 2008 года №87);</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">разработка и согласование планов тушения пожаров;</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">разработка и согласование ведомственных стандартов, правил пожарной безопасности и других нормативных документов;</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">изготовление паспортов антитеррористической защищенности (паспортов безопасности);</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">анализ предписаний Государственного пожарного надзора и помощь в их выполнении.</li>';
  } else if (evt.currentTarget.classList.value === 'services__link services__link_fourth') {
    document.querySelector('.popup-more__caption').textContent = "Системы охранной сигнализации";
    document.querySelector('.popup-more__list').innerHTML = '<li class="popup-more__item">проектирование, монтаж и техническое обслуживание систем охранной сигнализации;</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">монтаж и техническое обслуживание антикражного (противокражного) оборудования для объектов торговли;</li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">изготовление паспортов антитеррористической защищенности (паспортов безопасности);</li>';
  } else if (evt.currentTarget.classList.value === 'services__link services__link_fifth') {
    document.querySelector('.popup-more__caption').textContent = "Системы контроля и управления доступом";
    document.querySelector('.popup-more__list').innerHTML = '<li class="popup-more__item">проектирование, монтаж и техническое обслуживание систем видеонаблюдения и контроля доступа (СКУД);</li>';
  } else if (evt.currentTarget.classList.value === 'services__link services__link_sixth') {
    document.querySelector('.popup-more__caption').textContent = "Системы видеонаблюдения";
    document.querySelector('.popup-more__list').innerHTML = '<li class="popup-more__item">монтажные и пусконаладочные работы, техническое обслуживание и ремонт систем видеонаблюдения;</li>';
  } else if (evt.currentTarget.classList.value === 'about__button') {
    document.querySelector('.popup-more__caption').textContent = "О нас";
    document.querySelector('.popup-more__list').innerHTML = '<li class="popup-more__item">Обеспечим безопасность на вашем предприятии – закажите монтаж и дальнейшее техническое обслуживание систем пожаротушения, контроля доступа, видеонаблюдения, оповещения людей о пожаре. Предоставим и установим все необходимое оборудование, наша компания ООО «ИТК «ЯМАЛ» находится в г. Новый Уренгой, осуществляет свою деятельность в городах Ямало-Ненецкого и Ханты-Мансийского автономных округов. Имеются все необходимые лицензии и допуски к СРО в области проектирования (№ СРО-П-161-09092010) и СРО в сфере строительства (№ СРО-С-073-20112009). </li>';
    document.querySelector('.popup-more__list').innerHTML += '<li class="popup-more__item">Предлагаем заказать услуги в области обеспечения пожарной безопасности в Новом Уренгое и других городах ЯНАО. На все виды работ имеются соответствующие лицензии МЧС России, допуск к СРО, сертификат системы качества ISO9001-2015. В штате нашей компании работают опытные специалисты с высшим пожарным и техническим образованием.</li>';
    document.querySelector('.popup-more__list').classList.add('popup-more__list-about');
    document.querySelector('.popup-more__item').classList.add('popup-more__item-about');
  }
}
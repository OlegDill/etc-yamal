function scrollToAnchor(selector) {
  const destination = $(selector);
  $('html,body').animate({
    scrollTop: destination.offset().top
  }, 'slow');
}

$('.header__item-link_services').click(() => {
  scrollToAnchor('.services');
})

$('.header__item-link_about').click(() => {
  scrollToAnchor('.about');
})

$('.header__item-link_clients').click(() => {
  scrollToAnchor('.clients');
})

$('.header__item-link_reviews').click(() => {
  scrollToAnchor('.reviews');
})

$('.header__item-link_contacts').click(() => {
  scrollToAnchor('.contacts');
})

$('.advantage__button-contact').click(() => {
  scrollToAnchor('.contacts');
})
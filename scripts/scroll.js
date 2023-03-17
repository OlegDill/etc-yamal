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
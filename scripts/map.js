// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: new google.maps.LatLng(-33.91722, 151.23064),
//     zoom: 16,
//   });

//   const iconBase =
//     "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
//   const icons = {
//     info: {
//       icon: iconBase + "info-i_maps.png",
//     }
//   };
//   const features = [
//     {
//       position: new google.maps.LatLng(-33.91721, 151.2263),
//       type: "info",
//     }
//   ];

//   // Create markers.
//   for (let i = 0; i < features.length; i++) {
//     const marker = new google.maps.Marker({
//       position: features[i].position,
//       icon: icons[features[i].type].icon,
//       map: map,
//     });
//   }
// }

// window.initMap = initMap;







var myPlacemark = new ymaps.Placemark([55.76, 37.56], {}, {
  iconLayout: 'default#image',
  iconImageHref: '../images/logo.png',
  iconImageSize: [30, 42],
  iconImageOffset: [-3, -42]
});
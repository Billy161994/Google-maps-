$(document).ready(function() {

  $("a.btn").click(function(event) {
    event.preventDefault();
    $(".jumbotron").toggle('pulsate',1400); // jQuery UI effect 'pulsate'
    $('h1').text('Whatup!');
  });

  $('.jumbotron').hide().delay(1000).fadeIn(1400);

  // jQuery UI Widgets

  $( "#tabs" ).tabs();
  $( "#accordion" ).accordion();

});






function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 18.507024, lng: 73.849575}
  });

  var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 18.507024, lng: 73.849575},
    map: map,
    icon: image
  });
}

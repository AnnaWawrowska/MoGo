function initMap() {
   var uluru = {lat: 40.919, lng: 9.471};
   var map = new google.maps.Map(document.getElementById('google-map'), {
     zoom: 6,
     center: uluru
   });
   $( ".map__overlay" ).on( "click", function( ) {
       $('.map__container').addClass("map__open");
       $('.map__overlay').hide();
       setTimeout(function() {
         google.maps.event.trigger(map, "resize");
       }, 300);

   });
   $(".map").dblclick(function() {
       $('.map__container').removeClass('map__open');
       $('.map__overlay').show();

   });
 }

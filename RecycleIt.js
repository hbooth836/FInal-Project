
function initialize(event) {
        center = { lat: 37.7833 , lng: -122.4167}
        var mapOptions = {
          center: center,
          zoom: 10
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

      }
      google.maps.event.addDomListener(window, 'load', initialize);
var markers = [
  ['Texas Port Recycling', 28.784996,-96.973633],
  ['Rodgers Recycling Center', 28.784606,-97.045676],
  ['Crossroads Recycling Center', 28.768472,-96.979606]
];

function initializeMaps() {
  var myLatlng =  new google.maps.LatLng(28.784996,-96.973633);
  var mapOptions = {
    zoom: 11,
    center: myLatlng
  };
  
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var infowindow = new google.maps.InfoWindow(), marker, i;
    for (i = 0; i < markers.length; i++) {
     console.log(markers[i][1], markers[i][2])
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(markers[i][1], markers[i][2]),
            map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(markers[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}


google.maps.event.addDomListener(window, 'load', initializeMaps);



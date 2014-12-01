
function initialize() {
  var myLatlng = new google.maps.LatLng(29.721286,-95.267392);
  var mapOptions = {
    zoom: 10,
    center: myLatlng
  };
  
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
 
  var contentString = '<div id="content">'+
      '<div id="bodyContent">'+
      '<p><b>Texas Port Recycling</b>' +
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString

       });

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      
     
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

}

google.maps.event.addDomListener(window, 'load', initialize);

     
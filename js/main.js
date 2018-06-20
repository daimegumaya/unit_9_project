//$('h1').html('Hello from js!');
// initialize map
function initMap() {
  //get users location by using 
//navigator.geolocation.getCurrentPosition(function(position) {
  // create an object userLocation to store lat and lng data as object literal
  //var userLocation = {
    //lat: position.coords.latitude,
    //lng: position.coords.longitude
  //};
  //console.log(userLocation);
  // Instantiate the google.maps.Map constructor with arguments map element,and options objects and assign it to a variable map
  var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 40.8054491, lng: -73.9654415},
  zoom: 10,
  scrollwheel: false
});
  // use marker constructor to add marker to map
  var marker = new google.maps.Marker({
  position: userLocation,
  map: map,
  title: 'User Location'
  });
                                    
});
}

initMap();
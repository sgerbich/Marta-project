var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: parseFloat(busLocations[0].LATITUDE), lng: parseFloat(busLocations[0].LONGITUDE) },
        zoom: 15,
        scrollwheel: false
    });
	
    for (i=0; i<busLocations.length; i++){
        const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Bus Location</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Buslocations</b>"+
    "</div>" +
    "</div>";
        const infowindow = new google.maps.InfoWindow({
            content: contentString
          });
        var marker = new google.maps.Marker({
            position: { lat: parseFloat(busLocations[i].LATITUDE), lng: parseFloat(busLocations[i].LONGITUDE) },
            map: map,
        
        });
        marker.addListener("click", () => {
            infowindow.open(map, marker);
          });
    }
}


  
 
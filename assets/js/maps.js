function initMap(){
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var lables = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [
        {lat: 52.637132, lng: -9.494283}
        
    ];

    var markers = locations.map(function(location,i) {
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
        });
    });
    var markerClusterer = MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}
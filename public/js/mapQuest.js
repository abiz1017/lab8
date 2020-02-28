function initMap() {
	L.mapquest.key = '5gjgHte9lENdAyGpnVid7GjTvGfGQTXA';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {
  center: [37.7749, -122.4194],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});

L.marker([32.48, -117.236]).addTo(map);
}
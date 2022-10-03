
// Version of maps with a loop and an array

let USCoordinates = [39.2316, -98.1478]  // [lattitude, longitude]
let zoomLevel = 4    // set zoom; 9 is large city size  (1-20)
let map = L.map('bridge-map').setView(USCoordinates, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// an array with the needed info in objects

bridges = [
    {"bridgeName": "Verrazano-Narrows Bridge", "SpanLength": 1298.4, "coordinates": [40.6068, -74.0447] },
    {"bridgeName": "Golden Gate Bridge", "SpanLength": 1280.2, "coordinates": [38.8201, -122.4783]},
    {"bridgeName": "Mackinac Bridge", "SpanLength": 1158.0, "coordinates": [45.8218, -84.7259]},
    {"bridgeName": "George Washington Bridge", "SpanLength": 1067.0, "coordinates": [40.8519, -73.9527]},
    {"bridgeName": "Tacoma Narrows Bridge", "SpanLength": 853.44, "coordinates": [47.2691, -122.5516]}
]

// loop thru bridges; add a marker and marker text
bridges.forEach(function(bridge) {
    let markerText = bridge.bridgeName + ', span length: ' + bridge.SpanLength + ' m'
    L.marker(bridge.coordinates)
        .bindPopup(markerText)
        .addTo(map)
})


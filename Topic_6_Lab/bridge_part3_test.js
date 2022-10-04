//
// // Set map info:  coordinates and zoom
// let USCoordinates = [39.2316, -98.1478]  // [lattitude, longitude]
// let zoomLevel = 4    // set zoom; 9 is large city size  (1-20)
// let map = L.map('bridge-map').setView(USCoordinates, zoomLevel)
//
// // tiles from OpenStreetMap
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// an array with the needed info in objects
bridges = [
    {"name": "Verrazano-Narrows Bridge", "span": 1298.4, "location": [40.6068, -74.0447] },
    {"name": "Golden Gate Bridge", "span": 1280.2, "location": [38.8201, -122.4783]},
    {"name": "Mackinac Bridge", "span": 1158.0, "location": [45.8218, -84.7259]},
    {"name": "George Washington Bridge", "span": 1067.0, "location": [40.8519, -73.9527]},
    {"name": "Tacoma Narrows Bridge", "span": 853.44, "location": [47.2691, -122.5516]}
]

// // loop thru bridges; add a marker and marker text
// bridges.forEach(function(bridge) {
//     let markerText = bridge.name + ', span length: ' + bridge.span + ' m'
//     L.marker(bridge.location)
//         .bindPopup(markerText)
//         .addTo(map)
// })

// add chart; start with canvas steps
// let canvas = document.querySelector('#bridges-chart')
// let context = canvas.getContext('2d')

// make a chart object: arguments: context, properties
let listOfBridgeNames = []
let listOfBridgeSpans = []

bridges.forEach(function (bridge) {
    bridgeName = bridge.name  // get bridge name
    bridgeSpan = bridge.span
    listOfBridgeNames.push(bridgeName)  // list of bridge names
    listOfBridgeSpans.push(bridgeSpan)
})
console.log(listOfBridgeNames)
console.log(listOfBridgeSpans)

// bridges.forEach(function(bridge) {
//     let chart = new Chart(context, {
//         type: 'bar',
//         data: {
//             labels: bridge.name,
//             datasets: [ {
//                 label: 'Bridge Span',
//                 data: bridge.span
//             }]
//         }
//     })
// })



// let chart = new Chart(context, {
//     type: 'bar',
//     data: {
//
//     }

// })



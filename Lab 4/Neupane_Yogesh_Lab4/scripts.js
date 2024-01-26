const iss_api = "https://api.wheretheiss.at/v1/satellites/25544";
let map, marker;

async function getISSCoordinates() {
    const response = await fetch(iss_api);
    const data = await response.json();

    const locationCoordinates = [data.latitude, data.longitude];
    
    if (!map) {
        map = L.map('map').setView(locationCoordinates, 4);
        const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        marker = L.marker(locationCoordinates, { draggable: true }).addTo(map);
    }

    marker.setLatLng(locationCoordinates).update();

    document.getElementById("lat").textContent = data.latitude;
    document.getElementById("long").textContent = data.longitude;

    console.log(data.latitude);
    console.log(data.longitude);
}

setInterval(getISSCoordinates, 1000);

getISSCoordinates();

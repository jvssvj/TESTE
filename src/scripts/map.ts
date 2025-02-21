declare const L: any;
let mapInstance: any = null;

export function map(lat: number, lng: number, region: string, country: string) {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
        console.error('Elemento com id "map" não encontrado.');
        return;
    }

    if (mapInstance !== null) {
        mapInstance.remove();
    }

    mapInstance = L.map('map', {
        center: [lat, lng],
        zoom: 13,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        dragging: false,
        zoomControl: true,
        touchZoom: false,
        keyboard: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(mapInstance);

    const customIcon = L.icon({
        iconUrl: './src/images/icon-location.svg',
        iconSize: [42, 42],
        iconAnchor: [16, 52],
        popupAnchor: [5, -40]
    });

    L.marker([lat, lng], { icon: customIcon }).addTo(mapInstance)
        .bindPopup(`${region}, ${country}`)
        .openPopup();
}

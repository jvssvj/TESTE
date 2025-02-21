let mapInstance = null;
export function leaflet(lat, lng, region, country) {
    // Verifica se o elemento do mapa existe
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
        console.error('Elemento com id "map" não encontrado.');
        return;
    }
    // Se já houver um mapa, remove antes de criar um novo
    if (mapInstance !== null) {
        mapInstance.remove();
    }
    // Cria um novo mapa
    mapInstance = L.map('map', {
        center: [lat, lng],
        zoom: 13,
        minZoom: 13,
        maxZoom: 13,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        dragging: false,
        zoomControl: false,
        touchZoom: false,
        keyboard: false
    });
    // Adiciona o tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(mapInstance);
    // Define o ícone personalizado
    const customIcon = L.icon({
        iconUrl: '/src/images/icon-location.svg', // Verifique se o caminho está correto
        iconSize: [42, 42],
        iconAnchor: [16, 52],
        popupAnchor: [5, -40]
    });
    // Adiciona o marcador com o ícone personalizado
    L.marker([lat, lng], { icon: customIcon }).addTo(mapInstance)
        .bindPopup(`${region}, ${country}`)
        .openPopup();
}

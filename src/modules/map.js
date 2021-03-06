import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// stupid hack so that leaflet's images work after going through webpack
import marker from '/dist/images/marker-icon.png';
import marker2x from '/dist/images/marker-icon-2x.png';
import markerShadow from '/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: marker2x,
    iconUrl: marker,
    shadowUrl: markerShadow
});

const renderMap = () => {
  const maxZoom = 22;

  let markerLR = L.marker([9.772931007075039, 118.74813998552096]);

  let myMap = L.map("map", {
    zoomDelta: 1,
    zoomSnap: 1,
  }).setView(markerLR.getLatLng(), 13);

  markerLR.addTo(myMap);
  markerLR.bindPopup(`<b>Le Restaurant</b>`).openPopup();

  L.control.scale().addTo(myMap);

  let googleStreets = L.tileLayer(
      "https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      {
        maxZoom: maxZoom,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }
    ),
    googleHybrid = L.tileLayer(
      "https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
      {
        maxZoom: maxZoom,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }
    ),
    googleTerrain = L.tileLayer(
      "https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
      {
        maxZoom: maxZoom,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }
    ),
    googleSat = L.tileLayer(
      "https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      {
        maxZoom: maxZoom,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }
    );

  const baseMaps = {
    Satellite: googleSat,
    Streets: googleStreets,
    Hybrid: googleHybrid,
    Terrain: googleTerrain,
  };

  googleStreets.addTo(myMap);

  L.control.layers(baseMaps).addTo(myMap);

	return myMap;
};

export default renderMap;

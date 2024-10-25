mapboxgl.accessToken = "YOUR_ACCESS_TOKEN";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [0, 0],
  zoom: 2,
});

const marker = new mapboxgl.Marker().setLngLat([0, 0]).addTo(map);

const homeLink = document.getElementById("home-link");
const lineupLink = document.getElementById("lineup-link");
const ticketsLink = document.getElementById("tickets-link");
const galleryLink = document.getElementById("gallery-link");
const homeSection = document.getElementById("home");
const lineupSection = document.getElementById("lineup");
const ticketsSection = document.getElementById("tickets");
const gallerySection = document.getElementById("gallery");

// Dummy artist data
const artists = [
  { name: "Artist One", genre: "Rock" },
  { name: "Artist Two", genre: "Pop" },
  { name: "Artist Three", genre: "EDM" },
];

function displayArtists() {
  const artistList = document.getElementById("artist-list");
  artistList.innerHTML = "";
  artists.forEach((artist) => {
    const artistLi = document.createElement("li");
    artistLi.textContent = `${artist.name} - ${artist.genre}`;
    artistList.appendChild(artistLi);
  });
}

homeLink.addEventListener("click", () => {
  homeSection.classList.remove("hidden");
  lineupSection.classList.add("hidden");
  ticketsSection.classList.add("hidden");
  gallerySection.classList.add("hidden");
});

lineupLink.addEventListener("click", () => {
  homeSection.classList.add("hidden");
  lineupSection.classList.remove("hidden");
  ticketsSection.classList.add("hidden");
  gallerySection.classList.add("hidden");
  displayArtists();
});

ticketsLink.addEventListener("click", () => {
  homeSection.classList.add("hidden");
  lineupSection.classList.add("hidden");
  ticketsSection.classList.remove("hidden");
  gallerySection.classList.add("hidden");
});

galleryLink.addEventListener("click", () => {
  homeSection.classList.add("hidden");
  lineupSection.classList.add("hidden");
  ticketsSection.classList.add("hidden");
  gallerySection.classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", displayArtists);

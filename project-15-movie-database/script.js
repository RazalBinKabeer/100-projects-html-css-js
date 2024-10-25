document.getElementById("search-button").addEventListener("click", function () {
  const query = document.getElementById("search").value;
  const apiKey = "YOUR_API_KEY";
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;
      const moviesContainer = document.getElementById("movies");
      moviesContainer.innerHTML = "";

      movies.forEach((movie) => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");
        movieElement.innerHTML = `
                  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                  <h2>${movie.title}</h2>
                  <p>${movie.overview}</p>
              `;
        moviesContainer.appendChild(movieElement);
      });
    })
    .catch((error) => console.error("Error fetching movie data:", error));
});

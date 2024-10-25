async function searchRecipes() {
  const query = document.getElementById("search-input").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (!query) {
    alert("Please enter a search term.");
    return;
  }

  const apiUrl = `https://api.edamam.com/search?q=${query}&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.hits.length === 0) {
      resultsDiv.innerHTML = "<p>No recipes found.</p>";
      return;
    }

    data.hits.forEach((hit) => {
      const recipe = hit.recipe;
      const recipeItem = document.createElement("div");
      recipeItem.className = "result-item";
      recipeItem.innerHTML = `
        <h2>${recipe.label}</h2>
        <p><strong>Ingredients:</strong> ${recipe.ingredientLines.join(
          ", "
        )}</p>
        <a href="${recipe.url}" target="_blank">View Recipe</a>
      `;
      resultsDiv.appendChild(recipeItem);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    resultsDiv.innerHTML =
      "<p>Error fetching recipes. Please try again later.</p>";
  }
}

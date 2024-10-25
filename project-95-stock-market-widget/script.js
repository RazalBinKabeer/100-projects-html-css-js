async function getStockPrice() {
  const stockSymbol = document
    .getElementById("stock-input")
    .value.toUpperCase();
  const stockInfoDiv = document.getElementById("stock-info");
  stockInfoDiv.innerHTML = "";

  if (!stockSymbol) {
    alert("Please enter a stock symbol.");
    return;
  }

  const apiUrl = `https://api.twelvedata.com/time_series?symbol=${stockSymbol}&interval=1day&apikey=YOUR_API_KEY`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.values && data.values.length > 0) {
      const latestData = data.values[0];
      stockInfoDiv.innerHTML = `
        <h3>${stockSymbol} - Latest Price</h3>
        <p>Price: $${latestData.close}</p>
        <p>Date: ${latestData.datetime}</p>
      `;
    } else {
      stockInfoDiv.innerHTML = `<p>No data found for ${stockSymbol}.</p>`;
    }
  } catch (error) {
    console.error("Error fetching stock data:", error);
    stockInfoDiv.innerHTML =
      "<p>Error fetching stock price. Please try again later.</p>";
  }
}

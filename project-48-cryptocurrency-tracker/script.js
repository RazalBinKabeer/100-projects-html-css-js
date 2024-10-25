document.getElementById("get-crypto").addEventListener("click", function () {
  const symbol = document.getElementById("crypto-symbol").value.toUpperCase();
  const apiKey = "YOUR_API_KEY";
  const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const cryptoResult = document.getElementById("crypto-result");
      if (data[symbol.toLowerCase()]) {
        cryptoResult.innerHTML = `
                  <h2>${symbol}</h2>
                  <p>Price: $${data[symbol.toLowerCase()].usd}</p>
              `;
      } else {
        cryptoResult.innerHTML = `<p>Cryptocurrency not found.</p>`;
      }
    })
    .catch((error) =>
      console.error("Error fetching cryptocurrency data:", error)
    );
});

document
  .getElementById("conversion-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;

    fetchConversionRate(amount, fromCurrency, toCurrency);
  });

function fetchConversionRate(amount, fromCurrency, toCurrency) {
  const apiKey = "your_api_key_here";
  const url = `https://api.coinbase.com/v2/exchange-rates?currency=${fromCurrency}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const rate = data.data.rates[toCurrency];
      const result = amount * rate;
      displayResult(result, toCurrency);
    })
    .catch((error) => console.error("Error fetching conversion rate:", error));
}

function displayResult(result, currency) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Converted Amount: ${result.toFixed(
    2
  )} ${currency}`;
}

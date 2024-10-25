let selectedCar = { type: "", pricePerDay: 0 };

function selectCar(type, price) {
  selectedCar.type = type;
  selectedCar.pricePerDay = price;
  document.getElementById("car-type").value = type;
  document.getElementById("total-price").value = ""; // Clear total price on new selection
}

function calculateTotal() {
  const rentalDays = parseInt(document.getElementById("rental-days").value);
  if (rentalDays && selectedCar.pricePerDay) {
    const totalPrice = rentalDays * selectedCar.pricePerDay;
    document.getElementById("total-price").value = `$${totalPrice}`;
  } else {
    alert("Please select a car and enter the number of days.");
  }
}

document
  .getElementById("rental-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (selectedCar.type && document.getElementById("total-price").value) {
      alert(`Your ${selectedCar.type} rental has been booked!`);
    } else {
      alert(
        "Please select a car and calculate the total price before booking."
      );
    }
  });

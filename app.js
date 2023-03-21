const button = document.getElementById("add-to-cart");
const quantityInput = document.getElementById("quantity");

button.addEventListener("click", function () {
  // Ändere Hintergrundfarbe und Text des Buttons
  button.style.backgroundColor = "green";
  button.textContent = "Artikel wurde hinzugefügt";

  // Ändere die Farbe des Eingabefelds und des Werts
  quantityInput.style.borderColor = "green";
  quantityInput.style.color = "green";

  // Setze den Button und das Eingabefeld nach einer Sekunde zurück
  setTimeout(function () {
    button.style.backgroundColor = "";
    button.textContent = "In den Warenkorb";
    quantityInput.style.borderColor = "";
    quantityInput.style.color = "";
  }, 1000);
});

const decreaseButton = document.getElementById("decrease-quantity");
const increaseButton = document.getElementById("increase-quantity");

decreaseButton.addEventListener("click", function () {
  // Verringere die Anzahl der Artikel um eins
  let quantity = parseInt(quantityInput.value);
  if (quantity > 1) {
    quantity--;
    quantityInput.value = quantity;
  }
});

increaseButton.addEventListener("click", function () {
  // Erhöhe die Anzahl der Artikel um eins
  let quantity = parseInt(quantityInput.value);
  quantity++;
  quantityInput.value = quantity;
});

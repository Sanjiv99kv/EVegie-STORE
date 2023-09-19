//------------------- index page---------------------

//---------------------- cart option
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
}
//---------------------- cart option end

// ------------------------add to cart
var alertButtons = document.getElementsByClassName("alertButton");
for (var i = 0; i < alertButtons.length; i++) {
  alertButtons[i].addEventListener("click", function() {
    alert("Item added to cart Successfully");
  });
}


// ------------------------add to cart end

// ---------------changing item

const subjectSelect = document.getElementById('subjects');
const priceDisplay = document.getElementById('price');

const subjectPrices = {
  1: 120,
  2: 600,
  3: 60,
  4: 30
};

subjectSelect.addEventListener('change', updatePrice);

function updatePrice() {
  const selectedSubject = subjectSelect.value;
  const selectedPrice = subjectPrices[selectedSubject];
  priceDisplay.textContent = `RS. ${selectedPrice}`;
}

// Initialize price based on the default selected subject
updatePrice();




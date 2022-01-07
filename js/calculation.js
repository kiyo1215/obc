'use strict';

// function keisan() {
  
//   let cast_drink = document.form1.drink.selectedIndex * 1000;
//   document.form1.field1.value = cast_drink;
// }

let drinkPrice = document.getElementById('cast-drink-total');
let chekiPrice = document.getElementById('cheki-total');
let priceBtn = document.getElementById('priceBtn');
let allPrice = document.getElementById('allPrice');
let allPriceText = 0;
priceBtn.addEventListener('click', function () {
  allPriceText = drinkPrice + chekiPrice;
  allPrice.textContent = allPriceText
});
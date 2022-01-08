'use strict';

function calc(
  castDrinkQuantity,
  cheki_quantity,
  food_quantity,
  come_hour,
  come_minute,
  go_hour,
  go_minute,
  first,
  outher_p,
  outher_m,
  champagneA,
  champagneB,
  champagneC,
  champagneD,
  champagneE,
){
  const price1 = document.getElementById('field1').value =
    Math.round(castDrinkQuantity * 1000);
  
  const price2 = document.getElementById('feild2').value =
    Math.round(cheki_quantity * 1000);
  
  const price3 = document.getElementById('feild3').value =
    Math.round(food_quantity * 1000);
  
  const time1 = Math.round((go_hour - come_hour) * 60);
  const time2 = Math.round(go_minute - come_minute);
  const time3 = document.getElementById('extension_q').value =
    Math.ceil((time1 + time2 - first) / 20);
  const price4 = document.getElementById('extension_p').value =
    Math.round(time3 * 1000);
  const price5 = document.getElementById('outher_p').value =
    Math.round(outher_p * 1);
  const price6 = document.getElementById('outher_m').value = 
    Math.round(outher_m * 1);
  
  const price7 = document.getElementById('feild4').value = 
    Math.round(champagneA * 5000);
  const price8 = document.getElementById('feild5').value = 
    Math.round(champagneB * 10000);
  const price9 = document.getElementById('feild6').value = 
    Math.round(champagneC * 15000);
  const price10 = document.getElementById('feild7').value = 
    Math.round(champagneD * 20000);
  const price11 = document.getElementById('feild8').value = 
    Math.round(champagneE * 25000);
  
    if (first === '60') {
      const time4 = document.getElementById('all_p').value =
      Math.round(price1 + price2 + price3 + price4 + price5 - price6 + price7 + price8 + price9 + price10 + price11 + 1000);
  } else if(first === '90') {
    const time4 = document.getElementById('all_p').value =
    Math.round(price1 + price2 + price3 + price4 + price5 - price6 + price7 + price8 + price9 + price10 + price11 + 2000);
  };
    
};

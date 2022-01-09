'use strict';

function calc(
  castDrinkQuantity,
  cheki_quantity,
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
  champagneF,
  champagneG,
  champagneH,
  champagneI,
  extension_q,
  extension_p
){
  const time1 = Math.round((go_hour - come_hour) * 60);
  const time2 = Math.round(go_minute - come_minute);
  
  if (first === '60' || first === '60-2'){
    const time3 = document.getElementById('extension_q').value =
      Math.ceil((time1 + time2 - 60) / 20);
  } else if (first === '90') {
    const time3 = document.getElementById('extension_q').value =
      Math.ceil((time1 + time2 - 90) / 20);
  };

    const price1 = document.getElementById('field1').value =
    Math.round(castDrinkQuantity * 1200);
  
  const price2 = document.getElementById('feild2').value =
  Math.round(cheki_quantity * 1400);
  
  const price4 = document.getElementById('extension_p').value =
    Math.round(extension_q * 1000);
  
  const price5 = document.getElementById('outher_p').value =
    Math.round(outher_p * 1);
  const price6 = document.getElementById('outher_m').value = 
    Math.round(outher_m * 1);
  
  const price7 = document.getElementById('feild4').value = 
    Math.round(champagneA * 7000);
  const price8 = document.getElementById('feild5').value = 
    Math.round(champagneB * 7000);
  const price9 = document.getElementById('feild6').value = 
    Math.round(champagneC * 10000);
  const price10 = document.getElementById('feild7').value = 
    Math.round(champagneD * 23000);
  const price11 = document.getElementById('feild8').value = 
    Math.round(champagneE * 29000);
  const price12 = document.getElementById('feild9').value = 
    Math.round(champagneF * 35000);
  const price13 = document.getElementById('feild10').value = 
    Math.round(champagneG * 57000);
  const price14 = document.getElementById('feild11').value = 
    Math.round(champagneH * 92000);
  const price15 = document.getElementById('feild12').value = 
    Math.round(champagneI * 138000);
  
  
    if (first === '60') {
      const time4 = document.getElementById('all_p').value =
        Math.round(price1 + price2 + price4 + price5 - price6 + price7 + price8 + price9 + price10
          + price11 + price12 + price13 + price14 + price15 + 2500);
  } else if(first === '90') {
    const time4 = document.getElementById('all_p').value =
      Math.round(price1 + price2 + price4 + price5 - price6 + price7 + price8 + price9 + price10 + price11 + price12 + price13 + price14 + price15 + 3500);
    } else if (first === '60-2') {
       const time4 = document.getElementById('all_p').value =
        Math.round(price1 + price2 + price4 + price5 - price6 + price7 + price8 + price9 + price10
          + price11 + price12 + price13 + price14 + price15 + 3000);
  }
};

'use strict';

function calc(
  castDrinkQuantity,
  cheki_quantity,
  come_hour,
  come_minute,
  go_hour,
  go_minute,
  gender,
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
  drink_300,
  drink_700,
  drink_800,
  drink_900,
  drink_1000,
  drink_1200,
  drink_1500,
  drink_1800,
  drink_2100,
  drink_2400,
  drink_2800,
  buttle_8000,
  buttle_8900,
  buttle_12000,
  buttle_25000,
  buttle_27000,
  buttle_28000,
  buttle_29000,
  nudle,
  egg_rice,
  takoyaki,
  edamame,
  nuts,
  karaage,
  snack,
  appetiizers,
  karaoke,
  live,
  live_add,
  cheki_add
){
  const time1 = Math.round((go_hour - come_hour) * 60);
  const time2 = Math.round(go_minute - come_minute);
  const time3 = document.getElementById('field1').value = Math.ceil((time1 + time2 - 40) / 20);

  if (gender === 'men') {
    var charge = document.getElementById('field2').value =
    Math.round(time3 * 900);
  }
  if (gender === 'women') {
    var charge = document.getElementById('field2').value =
    Math.round(time3 * 600);
  }
  
  // ショット
  const drink1 = document.getElementById('field3').value =
    Math.round(drink_300 * 300);
  const drink2 = document.getElementById('field4').value =
  Math.round(drink_700 * 700);
  const drink3 = document.getElementById('field5').value =
  Math.round(drink_800 * 800);
  const drink4 = document.getElementById('field6').value =
  Math.round(drink_900 * 900);
  const drink5 = document.getElementById('field7').value =
  Math.round(drink_1000 * 1000);
  const drink6 = document.getElementById('field8').value =
  Math.round(drink_1200 * 1200);
  const drink7 = document.getElementById('field9').value =
  Math.round(drink_1500 * 1500);
  const drink8 = document.getElementById('field10').value =
  Math.round(drink_1800 * 1800);
  const drink9 = document.getElementById('field11').value =
  Math.round(drink_2100 * 2100);
  const drink10 = document.getElementById('field12').value =
  Math.round(drink_2400 * 2400);
  const drink11 = document.getElementById('field13').value =
  Math.round(drink_2800 * 2800);
  
  // ボトル
  const buttle1 = document.getElementById('field14').value =
    Math.round(buttle_8000 * 8000);
  const buttle2 = document.getElementById('field15').value =
    Math.round(buttle_8900 * 8900);
  const buttle3 = document.getElementById('field16').value =
    Math.round(buttle_12000 * 12000);
  const buttle4 = document.getElementById('field17').value =
    Math.round(buttle_25000 * 25000);
  const buttle5 = document.getElementById('field18').value =
    Math.round(buttle_27000 * 27000);
  const buttle6 = document.getElementById('field19').value =
    Math.round(buttle_28000 * 28000);
  const buttle7 = document.getElementById('field20').value =
    Math.round(buttle_29000 * 29000);
  
  // フード
  const food1 = Math.round(nudle * 1000);
  const food2 = Math.round(egg_rice * 1800);
  const food3 = Math.round(takoyaki * 1800);
  const food4 = Math.round(edamame * 600);
  const food5 = Math.round(nuts * 600);
  const food6 = Math.round(karaage * 700);
  const food7 = Math.round(snack * 900);
  const food8 = Math.round(appetiizers * 700);
  const food_price = document.getElementById('field34').value = Math.round(food1 + food2 + food3 + food4 + food5 + food6 + food7 + food8);

  // 乙女の乾杯ドリンク
  const price1 = document.getElementById('field21').value = Math.round(castDrinkQuantity * 1200);
  // カラオケ
  const price2 = document.getElementById('field22').value = Math.round(karaoke * 400);
  // 乙女ライブ
  const price3 = Math.round(live * 1200);
  const price4 = Math.round(live_add * 500);
  const price5 = document.getElementById('field23').value = Math.round(price3 + price4);
  // 乙女チェキ
  const price6 = Math.round(cheki_quantity * 1400);
  const price7 = Math.round(cheki_add * 500);
  const price8 = document.getElementById('field24').value = Math.round(price6 + price7);
  
  //　シャンパン
  const price9 = document.getElementById('field25').value = 
    Math.round(champagneA * 7000);
  const price10 = document.getElementById('field26').value = 
    Math.round(champagneB * 7000);
  const price11 = document.getElementById('field27').value = 
    Math.round(champagneC * 10000);
  const price12 = document.getElementById('field28').value = 
    Math.round(champagneD * 23000);
  const price13 = document.getElementById('field29').value = 
    Math.round(champagneE * 29000);
  const price14 = document.getElementById('field30').value = 
    Math.round(champagneF * 35000);
  const price15 = document.getElementById('field31').value = 
    Math.round(champagneG * 57000);
  const price16 = document.getElementById('field32').value = 
    Math.round(champagneH * 92000);
  const price17 = document.getElementById('field33').value = 
    Math.round(champagneI * 138000);
  
  const price18 = document.getElementById('outher_p').value =
    Math.round(outher_p * 1);
  const price19 = document.getElementById('outher_m').value = 
    Math.round(outher_m * 1);
  
  const all_price = price1 + price2 + price4 + price5 + price6 + price7 + price8 + price9 + price10 + price11 + price12 + price13 + price14 + price15 + price16 + price17 + price18 - price19 + charge + drink1 + drink2 + drink3 + drink4 + drink5 + drink6 + drink7 + drink8 + drink9 + drink10 + drink11 + buttle1 + buttle2 + buttle3 + buttle4 + buttle5 + buttle6 + buttle7 + food_price;

  const time4 = document.getElementById('all_p').value =
      Math.round(all_price + 2300);
};

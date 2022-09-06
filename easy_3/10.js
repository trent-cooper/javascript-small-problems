function century(date) {
  let period = Math.ceil(date / 100);
  let periodEnd = String(period).slice(-2);

  if (periodEnd >= 10 && periodEnd <= 20) {
    console.log(period + 'th');
  } else if (periodEnd[periodEnd.length - 1] === '1') {
    console.log(period + 'st');
  } else if (periodEnd[periodEnd.length - 1] === '2') {
    console.log(period + 'nd');
  } else if (periodEnd[periodEnd.length - 1] === '3') {
    console.log(period + 'rd');
  } else {
    console.log(period + 'th');
  }

}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
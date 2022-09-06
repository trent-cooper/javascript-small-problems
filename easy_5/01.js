function dms(angle) {
  let degrees = Math.floor(angle);
  let floating = 60 * (angle % 1);
  let minutes = Math.floor(floating);
  let seconds = Math.floor(60 * (floating % 1));

  console.log(`${degrees}°${padNum(minutes)}'${padNum(seconds)}"`);
}

function padNum(num) {
  if (String(num).length < 2) {
    return '0' + num;
  }
  return num;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
function showTime () {
  let time = new Date ();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let ampm = "AM"

  // CONVERT TO MILITARY TIME
  if (hr == 0) {
    hr = 12;
  }

  if (hr > 12) {
    hr = hr - 12;
    ampm = "PM"
  }
  //

  // ADD ZERO IN FRONT SINGLE DIGIT
  function pad(num) {
    if (num < 10) {
      return '0' + num
    } else {
      return '' + num
    }
  }
  // SAME AS ABOVE:  
  //function pad()
  // pad(num) = (num < 10) ? "0" + num : "" + num; //

    // THEN PASS PAD IN HR, MIN, SEC:
    hr = pad(hr)
    min = pad(min) 
    sec = pad(sec)

  // OTHER WAY TO ADD THE ZERO IN FRONT OF SINGLE DIGIT
  // hr = (hr < 10) ? "0" + hr : "" + hr;
  // min = (min < 10) ? "0" + min : "" + min;
  // sec = (sec < 10) ? "0" + sec : "" + sec;

  const displayedTime = hr + ":" + min + ":" + sec + " " + ampm;
  document.getElementById("clock").innerText = displayedTime;
}

showTime();
setInterval(showTime, 1000);
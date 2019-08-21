function showTime () {
  let time = new Date ();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  // CONVERT TO MILITARY TIME
  if (hr == 0) {
    hr = 12;
  }

  if (hr > 12) {
    hr = hr - 12;
  }
 
  function pad(num){
   return (num < 10) ? "0" + num : "" + num;
  } 
    hr = pad(hr)
    min = pad(min) 
    sec = pad(sec)

  const displayedTime = "#" + Number(hr).toString(16) + Number(min).toString(16) + Number(sec).toString(16);
  document.getElementById("hex").innerText = displayedTime;
  document.body.style.backgroundColor = displayedTime;
}

showTime();
setInterval(showTime, 500);


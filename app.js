// when the window is loaded this function will run
window.onload = function () {
  // defining variables that will be used when using stopwatch
  let seconds = 00;
  let tenths = 00;
  let minutes = 00;

  // dom variables
  const addMinutes = document.getElementById('minutes');
  const addTenths = document.getElementById('tenths');
  const addSeconds = document.getElementById('seconds');
  const buttonStart = document.getElementById('btnStart');
  const buttonPause = document.getElementById('btnPause');
  const buttonReset = document.getElementById('btnReset');
  let timer;

  // when buttonStart is clicked
  buttonStart.onclick = () => {
    clearInterval(timer);
    // we set timer to call startTimer with interval of 1ms
    timer = setInterval(startTimer, 10);
  };

  // when buttonPause is clicked
  buttonPause.onclick = () => {
    // when pause is clicked will clear the setInterval function
    clearInterval(timer);
  };

  // when buttonReset is clicked
  buttonReset.onclick = () => {
    /* clears interval of timer
    sets seconds back to 00 and tenths */
    clearInterval(timer);
    // sets all variables to default values
    seconds = 00;
    tenths = 00;
    minutes = 00;
    addMinutes.innerHTML = '0' + minutes;
    addSeconds.innerHTML = '0' + seconds;
    addTenths.innerHTML = '0' + tenths;
  };
  /*  when startTimer is called it will increase 
  tenths and follow the corresponding if else statements */
  function startTimer() {
    tenths++;
    // if tenths is less than or equal to nine will add
    if (tenths <= 9) {
      addTenths.innerHTML = '0' + tenths;
    }
    if (tenths > 9) {
      addTenths.innerHTML = tenths;
    }
    /* Once the tenths reaches 99 it will
    switch over to seconds and will continue */
    if (tenths > 99) {
      // seconds will begin to increment
      seconds++;
      addSeconds.innerHTML = '0' + seconds;
      tenths = 0;
      addTenths.innerHTML = '0' + tenths;
    }
    // seconds reaches nine it will switch over to the first value of seconds
    if (seconds > 9) {
      addSeconds.innerHTML = seconds;
    }
    // once seconds reaches sixty it will switch over to minutes
    if (seconds >= 60) {
      minutes++;
      addMinutes.innerHTML = '0' + minutes;
      seconds = 0;
      addSeconds.innerHTML = '0' + seconds;
    }
  }
};

'use strict';

/* 
  Time until start
  Phil Aylesworth
  placed in the public domain
  2020-03-24
*/

var end, interval;
var endTimeEl = document.getElementById('endTime');
var timerEl = document.getElementById('timer');
var timeOfDayEl = document.getElementById('clock');
var now = new Date();

/* function for setInterval timer */
function tick() {
  now = new Date();
  displayClock();
  displayTimer();
}

/* display the current time */
function displayClock() {
  var time = now.toTimeString().replace(/:[^:]*$/, '');
  timeOfDayEl.textContent = time;
}

/* Set the end time when changed */
function setEndTime() {
  var year, month, d, h, m, n;

  year = now.getFullYear();
  month = now.getMonth();
  d = now.getDate();
  h = now.getHours() + 1;

  n = endTimeEl.textContent.split(':');
  h = isNaN(n[0]) ? h : n[0];
  m = isNaN(n[1]) ? 0 : n[1];
  end = new Date(year, month, d, h, m, 0, 0);

  window.clearInterval(interval);
  interval = window.setInterval(tick, 1000);
}
endTimeEl.addEventListener('blur', setEndTime);

/* format seconds into minutes or min:sec */
function formatMinSec(secs) {
  secs = secs + 60;
  let h, m;
  h = Math.floor(secs / 3600).toString();
  m = Math.floor((secs % 3600) / 60).toString();
  if (h > 0) {
    return h + '<span>h</span> ' + m.padStart(2, '0') + '<span>m</span>';
  } else {
    // m += +m + 1;
    return m + '<span>m</span>';
  }
}

/* Display the remaining time */
function displayTimer() {
  var left = Math.floor((end.getTime() - now.getTime()) / 1000);
  if (left < 0) {
    timerEl.textContent = 'Ready';
  } else {
    timerEl.innerHTML = formatMinSec(left);
  }
}

/* Set a default end time onLoad.
 * It will default to the end time for a 2 hour test. */
function defaultEndTime() {
  var h, m;
  h = now.getHours() + 1;
  m = 0;
  now.setHours(h);
  now.setMinutes(m);
  endTimeEl.textContent = now.toTimeString().replace(/:[^:]*$/, '');
}

/* Event Listener for hiding the footer */
var footer = document.querySelector('footer');
footer.addEventListener('click', function() {
  event.stopPropagation();
  footer.classList.toggle('hide');
});

/* Prevent hiding the footer when the end time is clicked */
endTimeEl.addEventListener('click', function(event) {
  event.stopPropagation();
});

/* Set the end time when Enter key is pressed */
endTimeEl.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    setEndTime();
    endTimeEl.blur();
  }
});

// Event listener to set NoSleep and hide cursor
const noSleep = new NoSleep();
document.body.addEventListener('click', function enableNoSleep(event) {
  document.removeEventListener('click', enableNoSleep, false);
  noSleep.enable();
  document.body.style.cursor = 'none';
  document.querySelector('aside').style.display = 'none';
});

/* Get things started */
defaultEndTime();
setEndTime();
tick();

/* Show the help panel */
document.querySelector('#info').addEventListener('click', function(event) {
  event.stopPropagation();
  document.querySelector('aside').style.display = 'block';
});

/* Hide the help panel */
document.querySelector('aside').addEventListener('click', function(event) {
  event.stopPropagation();
  document.querySelector('aside').style.display = 'none';
});

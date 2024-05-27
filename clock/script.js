"use strict";
/*
  Display a clock on an old iPad 1
  Written in old JS on purpose for Safari 5
*/

var dayElement = document.querySelector("#day span");
var timeElement = document.querySelector("#time span");
var dateElement = document.querySelector("#date span");
var prefs = document.querySelector("#prefs");
var timePrefsElement = document.querySelector("#timeprefs");
var datePrefsElement = document.querySelector("#dateprefs");
var screenPrefsElement = document.querySelector("#screenprefs");
var dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// state variables
var timeChange = 0;
var daylightChange = "night";
var screenWidth = 0;
var long = -83.0;
var lat = 42.3;
var alt = 0;

// config variables
var screenMode = localStorage.getItem("screenMode") || "auto";
var timeMode = +(localStorage.getItem("timeMode") || 0);
var dateMode = localStorage.getItem("dateMode") || "show";

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    alt = position.coords.altitude;
  });
}

function getTime() {
  var timeObject = {};
  var currentTime = new Date();
  var minute = currentTime.getMinutes();
  if (minute === timeChange) return null;
  timeChange = minute;

  var seconds = currentTime.getSeconds();
  var day = currentTime.getDay();
  var month = currentTime.getMonth();
  var date = currentTime.getDate();
  var h = currentTime.getHours();

  timeObject.day = dateMode === "show" ? dayNames[day] : " ";
  timeObject.date = dateMode === "show" ? monthNames[month] + " " + date : " ";

  if (+timeMode) {
    // Format time to nearest minutes
    var m = Math.round((minute + seconds / 60) / timeMode) * timeMode;
    if (m > 59) {
      m = 0;
      h = h + 1;
    }
  } else {
    var m = minute;
  }

  m = ("0" + m).slice(-2);
  h = h % 12;
  if (h === 0) {
    h = 12;
  }

  timeObject.time = h + ":" + m;
  return timeObject;
}

function checkDaylight() {
  var currentTime = new Date();
  var times = SunCalc.getTimes(currentTime, lat, long);
  var sunrise = times.sunrise;
  var sunset = times.sunset;
  switch (screenMode) {
    case "dark":
      document.body.className = "night";
      break;
    case "light":
      document.body.className = "day";
      break;
    case "auto":
      document.body.className =
        currentTime > sunrise && currentTime < sunset ? "day" : "night";
      break;
  }
}

function displayTime() {
  checkRotation();
  var time = getTime();
  if (!time) return;
  checkDaylight();
  dayElement.textContent = time.day;
  dateElement.textContent = time.date;
  timeElement.textContent = time.time;
}

function checkRotation() {
  // This is a hack but the orientation API doesn't seem to work on iOS 5
  var w = window.innerWidth;
  if (screenWidth === w) return;
  screenWidth = w;
  fitWidth(dayElement, 0.4);
  fitWidth(dateElement, 0.4);
  fitWidth(timeElement, 0.8);
}

function fitWidth(el, size) {
  // This is a hack but the orientation API doesn't seem to work on iOS 5
  el.style.fontSize = "1em";
  var w = window.innerWidth;
  var elWidth = el.offsetWidth;
  var h = window.innerHeight;
  var ratio = w / h;
  var fontSize = Math.round((w / elWidth) * size) + "em";
  if (ratio > 1.5) {
    fontSize = Math.round((h / elWidth) * size * 1.3) + "em";
  }
  el.style.fontSize = fontSize;
}

displayTime();

// Start the clock! Check every second
setInterval(displayTime, 1000);

// Set preferences
screenPrefsElement.addEventListener("change", function (event) {
  timeChange = 99;
  screenMode = screenPrefsElement.value;
  localStorage.setItem("screenMode", screenMode);
});

timePrefsElement.parentElement.addEventListener("change", function (event) {
  timeChange = 99;
  timeMode = timePrefsElement.value;
  localStorage.setItem("timeMode", timeMode);
});

datePrefsElement.addEventListener("change", function (event) {
  timeChange = 99;
  dateMode = datePrefsElement.value;
  localStorage.setItem("dateMode", dateMode);
});

timeElement.addEventListener("click", function () {
  prefs.classList.toggle("hide");
  screenPrefsElement.value = screenMode;
  timePrefsElement.value = timeMode;
  datePrefsElement.value = dateMode;
});

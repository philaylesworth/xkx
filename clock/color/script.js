'use strict';
/*
  Display sun times for today
  Written in old JS on purpose for Safari 5
*/

var table = document.querySelector('tbody');

// state variables
var long = -83.0;
var lat = 42.3;
var alt = 0;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    alt = position.coords.altitude;
  });
}

function getTime() {
  var currentTime = new Date();
  var sunTimes = SunCalc.getTimes(currentTime, lat, long, alt);
  sunTimes.current = new Date();
}

function getName() {
  var currentTime = new Date();
  var sunTimes = SunCalc.getTimes(currentTime, lat, long, alt);

  if (currentTime > sunTimes.night) return 'night';
  if (currentTime > sunTimes.dusk) return 'dusk';
  if (currentTime > sunTimes.sunset) return 'twilight';
  if (currentTime > sunTimes.sunsetStart) return 'sunset';
  if (currentTime > sunTimes.goldenHour) return 'goldenHour';
  if (currentTime > sunTimes.goldenHourEnd) return 'day';
  if (currentTime > sunTimes.sunriseEnd) return 'goldenHour';
  if (currentTime > sunTimes.sunrise) return 'sunrise';
  if (currentTime > sunTimes.nightEnd) return 'twilight';
  if (currentTime > sunTimes.dawn) return 'dawn';
}

function displayTimes(times) {
  function getTime(date) {
    var d = date.toString().slice(16, 24);
    if (d[0] === '0') {
      d = date.toString().slice(17, 24);
    }
    return d;
  }
  var currentTime = new Date();
  var sunTimes = SunCalc.getTimes(currentTime, lat, long, alt);
  // console.log(currentTime.toString().slice(16,24));
  table.innerHTML = `
    <tr>
      <td colspan="2">${getTime(currentTime).slice(0, -3)}</td>
    </tr>
    <tr>
      <td>dawn</td>
      <td>${getTime(sunTimes.dawn)}</td>
    </tr>
    <tr>
      <td>interval black to white</td>
      <td>${(sunTimes.goldenHourEnd - sunTimes.dawn) / 160}</td>
    </tr>
    <tr>
      <td>goldenHourEnd</td>
      <td>${getTime(sunTimes.goldenHourEnd)}</td>
    </tr>
    <tr>
      <td>goldenHour</td>
      <td>${getTime(sunTimes.goldenHour)}</td>
    </tr>
    <tr>
      <td>dusk</td>
      <td>${getTime(sunTimes.dusk)}</td>
    </tr>
    <tr>
      <td>Now</td>
      <td>${getName()}</td>
    </tr>
  `;
}

displayTimes();

// Start the clock! Check every second
setInterval(displayTimes, 1000);

/*
sunrise (top edge of the sun appears on the horizon)
sunriseEnd (bottom edge of the sun touches the horizon)
goldenHourEnd (soft light, best time for photography) ends
solarNoon (sun is in the highest position)
goldenHour evening golden hour starts
sunsetStart (bottom edge of the sun touches the horizon)
sunset (sun disappears below the horizon, evening civil twilight starts)
dusk (evening nautical twilight starts)
nauticalDusk 	nautical dusk (evening astronomical twilight starts)
night 	night starts (dark enough for astronomical observations)
nadir 	nadir (darkest moment of the night, sun is in the lowest position)
nightEnd 	night ends (morning astronomical twilight starts)
nauticalDawn 	nautical dawn (morning nautical twilight starts)
dawn 	dawn (morning nautical twilight ends, morning civil twilight starts)
*/

function startSunrise(t1, t2) {
  var IntervalTime = (t2 - t1) / 160;
  var hue = 0,
    sat = 100,
    light = 0;

  var interval = setInterval(function () {
    if (light >= 100 && hue >= 60) {
      clearInterval(interval);
    } else if (light === 50 && hue < 60) {
      hue += 1;
    } else if (light < 100 && hue === 60) {
      light += 1;
    } else {
      light += 1;
    }

    var color = 'hsl(' + hue + ',' + sat + '%,' + light + '%)';
    document.body.style.backgroundColor = color;
    console.log(color);
  }, IntervalTime);
}

var currentTime = new Date();
var sunTimes = SunCalc.getTimes(currentTime, lat, long, alt);
startSunrise(sunTimes.dawn, sunTimes.goldenHourEnd);

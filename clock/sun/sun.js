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

function getName() {
  var currentTime = new Date();
  var sunTimes = SunCalc.getTimes(currentTime, lat, long, alt);
  /*
  nadir 	nadir (darkest moment of the night, sun is in the lowest position)
  nightEnd 	night ends (morning astronomical twilight starts)
  nauticalDawn 	nautical dawn (morning nautical twilight starts)
  dawn 	dawn (morning nautical twilight ends, morning civil twilight starts)
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
  */

  if (currentTime > sunTimes.night) return 'night';
  if (currentTime > sunTimes.nauticalDusk) return 'nauticalDusk';
  if (currentTime > sunTimes.dusk) return 'dusk';
  if (currentTime > sunTimes.sunset) return 'twilight';
  if (currentTime > sunTimes.sunsetStart) return 'sunset';
  if (currentTime > sunTimes.goldenHour) return 'goldenHour';
  if (currentTime > sunTimes.solarNoon) return 'solarNoon';
  if (currentTime > sunTimes.goldenHourEnd) return 'goldenHourEnd';
  if (currentTime > sunTimes.sunriseEnd) return 'sunriseEnd';
  if (currentTime > sunTimes.sunrise) return 'sunrise';
  if (currentTime > sunTimes.dawn) return 'dawn';
  if (currentTime > sunTimes.nauticalDawn) return 'nauticalDawn';
  if (currentTime > sunTimes.nightEnd) return 'nightEnd';
  if (currentTime > sunTimes.nadir) return 'nadir';
  return 'night';
}

function displayTimes(times) {
  function formatTime(date) {
    var d = date.toString().slice(16, 24);
    if (d[0] === '0') {
      d = date.toString().slice(17, 24);
    }
    return d;
  }
  var timeObject = {};
  var currentTime = new Date();
  var sunTimes = SunCalc.getTimes(currentTime, lat, long, alt);
  // console.log(currentTime.toString().slice(16,24));
  table.innerHTML = `
    <tr>
      <td colspan="2">${formatTime(currentTime).slice(0, -3)}</td>
    </tr>
    <tr class="nadir">
      <td>Solar Midnight <span>(darkest moment of the night, sun is in the lowest position)</span></td>
      <td>${formatTime(sunTimes.nadir)}</td>
    </tr>
    <tr class="nightEnd">
      <td>Astronomical Dawn<span>(astronomical twilight starts)</span></td>
      <td>${formatTime(sunTimes.nightEnd)}</td>
    </tr>
    <tr class="nauticalDawn">
      <td>Nautical Dawn<span>(nautical twilight starts)</span></td>
      <td>${formatTime(sunTimes.nauticalDawn)}</td>
    </tr>
    <tr class="dawn">
      <td>Civil Dawn<span>(civil twilight starts, golden hour starts)</span></td>
      <td>${formatTime(sunTimes.dawn)}</td>
    </tr>
    <tr class="sunrise">
      <td>Sunrise<span>(top edge of the sun appears on the horizon)</span></td>
      <td>${formatTime(sunTimes.sunrise)}</td>
    </tr>
    <tr class="sunriseEnd">
      <td>Sunrise ends<span>(bottom edge of the sun touches the horizon)</span></td>
      <td>${formatTime(sunTimes.sunriseEnd)}</td>
    </tr>
    <tr class="goldenHourEnd">
      <td>Golden Hour ends<span>(soft light, best time for photography)</span></td>
      <td>${formatTime(sunTimes.goldenHourEnd)}</td>
    </tr>
    <tr class="solarNoon">
      <td>Solar Noon<span>(sun is in the highest position)</span></td>
      <td>${formatTime(sunTimes.solarNoon)}</td>
    </tr>
    <tr class="goldenHour">
      <td>Golden Hour start<span>(soft light, best time for photography)</span></td>
      <td>${formatTime(sunTimes.goldenHour)}</td>
    </tr>
    <tr class="sunsetStart">
      <td>Sunset Start <span>(bottom edge of the sun touches the horizon)</span></td>
      <td>${formatTime(sunTimes.sunsetStart)}</td>
    </tr>
    <tr class="sunset">
      <td>Sunset, Civil Dusk<span>(sun disappears below the horizon, golden hour ends, civil twilight starts)</span></td>
      <td>${formatTime(sunTimes.sunset)}</td>
    </tr>
    <tr class="dusk">
      <td>Nautical Dusk<span>(evening nautical twilight starts)</span></td>
      <td>${formatTime(sunTimes.dusk)}</td>
    </tr>
    <tr class="nauticalDusk">
      <td>Nautical Dusk<span>(evening astronomical twilight starts)</span></td>
      <td>${formatTime(sunTimes.nauticalDusk)}</td>
    </tr>
    <tr class="night">
      <td>Astronomical Dusk<span>(night starts, dark enough for astronomical observations)</span></td>
      <td>${formatTime(sunTimes.night)}</td>
    </tr>
  `;
  console.log(getName());
  document.querySelector(`tr.${getName()}`).style.borderBottom =
    '2px solid red';
}

displayTimes();

// Start the clock! Check every second
setInterval(displayTimes, 1000);

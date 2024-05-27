'use strict';
// Display time for locale timezone
// Phil Aylesworth
// placed in the public domain
// 2021-01-24

// Format #d2021-02-01T08:00Z
// First letter is type code
// The rest is a valid date format

let date;
let message;
let mesCode;
let dateOptions = {
  weekday: 'long',
  year: undefined,
  month: 'long',
  day: 'numeric',
};
let timeOptions = {
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'short',
};
const hash = location.hash;
if (hash.length > 2) {
  mesCode = hash[1].toLowerCase();

  if (mesCode.match(/[0-9]/)) {
    date = hash.slice(1);
  } else {
    date = hash.slice(2);
  }
}
const dateOb = new Date(date);
if (dateOb.toLocaleDateString('local', dateOptions) !== 'Invalid Date') {
  const dateString = `${dateOb.toLocaleDateString('local', dateOptions)}<br>
${dateOb.toLocaleTimeString('local', timeOptions)}`;

  switch (mesCode) {
    case 'm':
      message = 'Meeting Starts:';
      break;
    case 'c':
      message = 'Class Starts:';
      break;
    case 'd':
      message = 'Due Date:';
      break;
    default:
      message = 'Date:';
      break;
  }

  document.querySelector('#message').textContent = message;
  document.querySelector('#date').innerHTML = dateString;
} else {
  document.querySelector('#message').textContent = `Invalid format. 
  Add a meeting and date in the format: 
  #d2021-02-01T08:00-0500 where d is the 
  meeting code and the rest is a valid date string.`;
}

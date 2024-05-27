'use strict';
let options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'short',
};
document.querySelectorAll('time').forEach(function local(el) {
  const datetime = el.getAttribute('datetime');
  const due = new Date(datetime);
  if (due.getHours() - +datetime.slice(11, 13)) {
    el.textContent += ` (${due.toLocaleString('local', options)})`;
  }
});

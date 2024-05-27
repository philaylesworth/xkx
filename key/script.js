/* iOS hide the nav bar */
if (
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPad/i)
) {
  /* iOS hides Safari address bar */
  window.addEventListener('load', function () {
    setTimeout(function () {
      window.scrollTo(0, 1);
    }, 1000);
  });
}

document.querySelector('body').addEventListener('click', function (event) {
  let key;
  if ((event.target.tagName = 'SPAN')) {
    key = event.target.parentElement.id;
  }
  if ((event.target.tagName = 'DIV')) {
    key = key || event.target.id;
  }
  console.log(event.target);

  switch (key) {
    case 'title':
      fetch(
        'https://trigger.keyboardmaestro.com/t/B963C66D-BC27-4743-87A7-05481E1B9F4E/EA3E7A2C-E9C2-4D4E-A411-486633202CB2?TriggerValue'
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
      break;
    case 'start':
      fetch(
        'https://trigger.keyboardmaestro.com/t/B963C66D-BC27-4743-87A7-05481E1B9F4E/197D3428-02E1-4EC1-82BA-F5EF21B9D2F0?TriggerValue'
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
      break;
    case 'sandbox':
      fetch(
        'https://trigger.keyboardmaestro.com/t/B963C66D-BC27-4743-87A7-05481E1B9F4E/24DAF0A7-CA13-444A-BFD2-6DCB17C87F9A?TriggerValue'
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
      break;
    case 'mute':
      fetch(
        'https://trigger.keyboardmaestro.com/t/B963C66D-BC27-4743-87A7-05481E1B9F4E/A02652E0-C0B7-4D57-BBC7-E77297CE8DB1?TriggerValue'
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
      break;
    case 'other':
      break;
    case 'teams':
      fetch(
        'https://trigger.keyboardmaestro.com/t/B963C66D-BC27-4743-87A7-05481E1B9F4E/55B2C30E-77CD-4021-8EE3-73FC82A9E454?TriggerValue'
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
      break;
    default:
      break;
  }
});

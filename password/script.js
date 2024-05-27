'use strict';
const set = 'abcdefghijklmnopqrstuvwxyz';
const numChar = 4;
const callNames = [
  'Alfa',
  'Bravo',
  'Charlie',
  'Delta',
  'Echo',
  'Foxtrot',
  'Golf',
  'Hotel',
  'India',
  'Juliett',
  'Kilo',
  'Lima',
  'Mike',
  'November',
  'Oscar',
  'Papa',
  'Quebec',
  'Romeo',
  'Sierra',
  'Tango',
  'Uniform',
  'Victor',
  'Whisky',
  'X-ray',
  'Yankee',
  'Zulu'
];
const footer = document.querySelector('footer');
const footerP = document.querySelector('footer p');
const passEl = document.querySelector('p');
let password = '';
let call = '';

while (password.length < numChar) {
  let random = Math.floor(Math.random() * set.length);
  password += set[random];
  call += callNames[random] + ' ';
}
passEl.textContent = password;
footerP.textContent = call;

passEl.addEventListener('keyup', function() {
  const pass = passEl.textContent;
  console.log('pass', pass);
  let pos;
  call = '';
  for (let i = 0; i < pass.length; i++) {
    pos = set.indexOf(pass[i]);
    if (pos >= 0) {
      call += callNames[pos] + ' ';
    }
  }
  footerP.textContent = call;
});

footer.addEventListener('click', function() {
  footer.classList.toggle('hide');
});

// Event listener to set NoSleep and hide cursor
const noSleep = new NoSleep();
document.body.addEventListener('click', function enableNoSleep(event) {
  document.removeEventListener('click', enableNoSleep, false);
  noSleep.enable();
  document.body.style.cursor = 'none';
});

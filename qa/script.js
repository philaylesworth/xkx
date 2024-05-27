'use strict';

// add objects for each title
const titles = {
  q: {
    text: 'Q & A',
    size: '20vw',
  },
  m: {
    text: 'Live Meeting',
    size: '12vw',
  },
  x: {
    text: 'Exercise',
    size: '16vw',
  },
  1: {
    text: 'Exercise 1',
    size: '12vw',
  },
  2: {
    text: 'Exercise 2',
    size: '12vw',
  },
  3: {
    text: 'Exercise 3',
    size: '12vw',
  },
  4: {
    text: 'Exercise 4',
    size: '12vw',
  },
  l: {
    text: 'Lecture',
    size: '16vw',
  },
};


function setEvent(key) {
  const title = titles[key];
  if (!title) return;
  const p = document.querySelector('p');
  p.textContent = title.text;
  p.style.fontSize = title.size;
}

// press the key to put in the tilte
addEventListener('keypress', event => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  const key = event.key.toLowerCase();
  setEvent(key);
});

setEvent('l');
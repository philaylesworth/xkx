'use strict';

const board = document.querySelector('section');
const rowPegs = 30;
const colPegs = 25;
let pegColor = 'w';

for (let i = 0; i < colPegs; i++) {
  // console.log(rowPegs + (i % 2));
  const row = document.createElement('div');
  for (let j = 0; j < rowPegs + (i % 2); j++) {
    const peg = document.createElement('span');
    // peg.textContent = j + 1;
    row.appendChild(peg);
  }
  board.appendChild(row);
}

board.addEventListener('click', (event) => {
  if (event.target.tagName !== 'SPAN') return;
  console.log('Alt', event.altKey);
  // Hold Alt/Option to clear peg
  if (event.altKey) {
    event.target.className = '';
    return;
  }
  // If peg already there, change the color
  if (event.target.className) {
    changePegColor(event.target.className);
  }
  event.target.className = pegColor;
});

board.addEventListener('mouseout', (event) => {
  if (event.target.tagName !== 'SPAN') return;
  console.log('Mouse buttons', event.buttons);
  if (event.buttons === 1) {
    pegColor = event.target.className;
  }
});

board.addEventListener('mouseover', (event) => {
  if (event.target.tagName !== 'SPAN') return;
  console.log('Mouse buttons', event.buttons);
  if (event.buttons === 1) {
    if (event.altKey) {
      event.target.className = '';
    } else {
      event.target.className = pegColor;
    }
  }
});

board.addEventListener('dblclick', (event) => {
  if (event.target.tagName !== 'SPAN') return;
  // reset the color change from the click events
  changePegColor(-2);
  event.target.className = '';
});

window.addEventListener('keypress', (event) => {
  if (event.key !== ' ') return;
  document.querySelector('section').classList.toggle('black');
});

/********************************************************************
 * Change the peg color
 * If color is a number it will increment the color by that amount
 * If color is a letter it will go to the next color in the series
 ********************************************************************/
function changePegColor(color) {
  let current;
  let newIndex;
  // new colours
  const colors = ['w', 'y', 'p', 'g', 'b', 'o'];
  // old colours
  // const colors = ['w', 'y', 'p', 'g', 'b', 'o','r','p'];
  // it is a color letter
  if (isNaN(color)) {
    newIndex = colors.indexOf(color) + 1;
    // it is a number
  } else {
    color %= colors.length;
    current = colors.indexOf(pegColor);
    newIndex = current + color;
  }
  // fix if out of range
  if (newIndex < 0) {
    newIndex += colors.length;
  } else if (newIndex >= colors.length) {
    newIndex -= colors.length;
  }
  // console.log(colors[newIndex]);
  pegColor = colors[newIndex];
}

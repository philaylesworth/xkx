import { stateGet, stateToggle } from './state.js';

const field = document.querySelector('tbody');

const settings = {
  rows: 20,
  cols: 20,
  bombs: 40
};

const fieldSet = [];

const counter = document.getElementById('counter');
let countDown = settings.bombs;

const getCell = function(r, c) {
  return fieldSet[r * settings.rows + c];
};

const setCell = function(r, c, el) {
  fieldSet[r * settings.rows + c] = el;
};

const checkWin = function() {
  const remaining =
    fieldSet.length - document.querySelectorAll('td.open').length;
  return !(remaining - settings.bombs);
};

const getRC = function(el) {
  const r = +el.parentElement.dataset.row;
  const c = +el.dataset.col;
  return { r, c };
};

/*
 * Run a function on each cells cell surounding `el`
 * in the function `this` will be the neighbouring element.
 * If the function returns a number then the sum of those numbers will be returned
 */
const neighbours = function(el, f) {
  let total = 0;
  const { r, c } = getRC(el);
  if (r - 1 >= 0 && c - 1 >= 0) {
    total += f.bind(getCell(r - 1, c - 1))(r, c);
  }
  if (r - 1 >= 0) {
    total += f.bind(getCell(r - 1, c))(r, c);
  }
  if (r - 1 >= 0 && c + 1 < settings.cols) {
    total += f.bind(getCell(r - 1, c + 1))(r, c);
  }
  if (c - 1 >= 0) {
    total += f.bind(getCell(r, c - 1))(r, c);
  }
  if (c + 1 < settings.cols) {
    total += f.bind(getCell(r, c + 1))(r, c);
  }
  if (r + 1 < settings.rows && c - 1 >= 0) {
    total += f.bind(getCell(r + 1, c - 1))(r, c);
  }
  if (r + 1 < settings.rows) {
    total += f.bind(getCell(r + 1, c))(r, c);
  }
  if (r + 1 < settings.rows && c + 1 < settings.cols) {
    total += f.bind(getCell(r + 1, c + 1))(r, c);
  }
  return total;
};

const bombCount = function(el) {
  return neighbours(el, function() {
    return this.classList.contains('bomb') ? 1 : 0;
  });
};

const buildField = function(field) {
  counter.textContent = countDown;
  field.textContent = '';
  for (let i = 0; i < settings.rows; i++) {
    let row = document.createElement('tr');
    row.dataset.row = i;
    field.appendChild(row);
    for (let j = 0; j < settings.cols; j++) {
      let cell = document.createElement('td');
      cell.innerHTML = '<div></div>';
      cell.dataset.col = j;
      row.appendChild(cell);
      setCell(i, j, cell);
    }
  }
  field.addEventListener('click', clickHandler);
};

const setMines = function() {
  let count = settings.bombs;
  while (count) {
    const r = Math.floor(Math.random() * settings.rows);
    const c = Math.floor(Math.random() * settings.cols);
    const cell = getCell(r, c);
    if (!cell.classList.contains('open') && !cell.classList.contains('bomb')) {
      cell.classList.add('bomb');
      cell.innerHTML = '<div></div>💣';
      count--;
    }
  }
};

const showCount = function(el) {
  let b = bombCount(el);
  if (b) {
    el.textContent = b;
    el.classList.add('open');
  } else {
    const { r, c } = getRC(el);
    clearAround(r, c);
  }
};

const clearAround = function(r, c) {
  const el = this || getCell(r, c);
  if (el.classList.contains('open')) return;

  let b = bombCount(el);

  console.log(r, c, b);

  el.classList.add('open');
  if (b) {
    el.textContent = b;
    return;
  } else {
    el.textContent = '';
    neighbours(el, clearAround);
  }
};

const clickHandler = function(event) {
  // .shiftKey .ctrlKey .altKey .metaKey
  let el = event.target;
  if (event.target.parentElement.tagName === 'TD') {
    el = event.target.parentElement;
  }
  event.preventDefault();
  if (el.classList.contains('open')) return;

  if (event.shiftKey && !event.altKey) {
    // clear the text selection
    window.getSelection().removeAllRanges();
    let state = stateToggle(el, 'flag');
    counter.textContent = state === '' ? ++countDown : --countDown;
  } else if (event.altKey && !event.shiftKey) {
    stateToggle(el, 'maybe');
  } else if (!event.shiftKey && !event.altKey) {
    if (stateGet(el)) {
      return;
    }

    if (el.classList.contains('bomb')) {
      //TODO end game
      el.classList.add('open');
      el.classList.add('bang');
      // and add it to the tbody
      el.parentElement.parentElement.classList.add('bang');
    } else {
      showCount(el);
    }
  }
};

buildField(field);
setMines();

/*
 * Keep the state of a cell. This state is exclusive, meaning only one state can apply to a cell.
 * An uncleared cell can have a state of:
 *  - '' meaning an unmarked cell
 *  - 'flag' : a flag has been placed on the cell
 *  - 'maybe' : a question mark has been placed on the cell
 * '' is the default state
 */

const states = ['', 'flag', 'maybe'];

export const stateSet = function(el, s) {
  if (states.includes(s)) {
    el.dataset.state = s;
    if (s === '') delete el.dataset.state;
  }
  return s;
};

export const stateGet = function(el) {
  return el.dataset.state ? el.dataset.state : '';
};

export const stateToggle = function(el, s) {
  let currentState = stateGet(el);
  if (s === currentState) {
    return stateSet(el, '');
  } else {
    return stateSet(el, s);
  }
};

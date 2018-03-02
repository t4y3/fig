import { h, app } from "hyperapp"
import FigApp from './FigApp'

import { KEY_EVENTS } from './common/constant';
import Mousetrap from 'mousetrap';

// Init Store
import state from './state';

// Setting Actions
import actions from './actions';

Mousetrap.bind(KEY_EVENTS.TOGGLE_INFO, () => {
  main.toggleInfo();
});

Mousetrap.bind(KEY_EVENTS.TOGGLE_TREE, () => {
  main.toggleTree();
});

// move focused tag
Mousetrap.bind(KEY_EVENTS.MOVE_DOWN, (e) => {
  e.preventDefault();
  main.moveFocusedTag('down');
});
Mousetrap.bind(KEY_EVENTS.MOVE_UP, (e) => {
  e.preventDefault();
  main.moveFocusedTag('up');
});
Mousetrap.bind(KEY_EVENTS.MOVE_LEFT, (e) => {
  e.preventDefault();
  main.openTreeAccordion(false);
});
Mousetrap.bind(KEY_EVENTS.MOVE_RIGHT, (e) => {
  e.preventDefault();
  main.openTreeAccordion(true);
});

// Root view
const view = (state, actions) => (
  <FigApp state={ state } actions={ actions } />
)

// Entry(browser)
let main;
window.addEventListener('DOMContentLoaded', () => {
  main = app(state, actions, view, document.body);
  fetch('http://localhost:8081', {
    mode: 'cros'
  }).then((response) => {
    return response.json();
  }).then((data) => {
    main.initState(data);
  });
});

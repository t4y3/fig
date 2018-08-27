// fetch polyfill
import 'whatwg-fetch';

import { h, app } from 'hyperapp';
import Mousetrap from 'mousetrap';
import FigApp from './FigApp';

import { KEY_EVENTS } from './common/constant';

// Init Store
import state from './state';

// Setting Actions
import actions from './actions';

let main;

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
const view = (_state, _actions) => <FigApp state={_state} actions={_actions} />;

// Entry(browser)
window.addEventListener('DOMContentLoaded', () => {
  main = app(state, actions, view, document.body);
  fetch('fig.config.json')
    .then(response => response.json())
    .then((data) => {
      main.initState(data);
    });
});

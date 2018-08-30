// fetch polyfill
import 'whatwg-fetch';

import { h, app } from 'hyperapp';
import { routerAction } from './router';
// import Mousetrap from 'mousetrap';
import FigApp from './components/FigApp';

// Init Store
import state from './state';

// Setting Actions
import actions from './actions';

let main;

// Root view
const view = (_state, _actions) => <FigApp state={_state} actions={_actions} />;

// Entry(browser)
window.addEventListener('DOMContentLoaded', () => {
  main = app(state, actions, view, document.body);
  fetch('fig.config.json')
    .then(response => response.json())
    .then((data) => {
      main.initState(data);
      routerAction.setAction(main);
    });
});

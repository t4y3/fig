import { h, app } from "hyperapp"
import FigTree from './FigTree'
import FigHeader from './FigHeader'
import FigInfo from './FigInfo'
import FigView from './FigView'

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
Mousetrap.bind(KEY_EVENTS.MOVE_DOWN, () => {
  main.moveFocusedTag('down');
});
Mousetrap.bind(KEY_EVENTS.MOVE_UP, () => {
  main.moveFocusedTag('up');
});

// Root view
const view = (state, actions) => (
  <div className="fig-app">
    <div className="app-inner">
      <div className={`app-left ${ state.isTree ? '': 'hide' }`}>
        <FigTree
          figures={ state.figures }
          pindex={ state.parentIndex }
          cindex={ state.childrenIndex }
          action={ actions }
        />
      </div>
      <div className="app-right">
        <FigHeader
          figures={ state.figures }
          pindex={ state.parentIndex }
          cindex={ state.childrenIndex }
        />
        <div className="app-right-top">
          <FigView
            show={ !state.isInfo }
            figures={ state.figures }
            pindex={ state.parentIndex }
            cindex={ state.childrenIndex }
            bundle={ state.bundle }
          />
          <FigInfo
            show={ state.isInfo }
            figures={ state.figures }
            pindex={ state.parentIndex }
            cindex={ state.childrenIndex }
          />
        </div>
      </div>
    </div>
  </div>
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

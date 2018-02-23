import './scss/style.scss';
import './scss/iframe.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './tags2/reducers'
let store = createStore(App);

import FigApp from './tags2/FigApp';

ReactDOM.render(
  <Provider store={store}>
    <FigApp />
  </Provider>,
  document.getElementById('root')
);

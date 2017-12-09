import './index.ejs';
import './scss/style.scss';
import './scss/iframe.scss';

// ライブラリ
import riot from 'riot';
import riotx from 'riotx';

// store
import store from './stores';
riotx.add(store);

// Components
import './tags';

let observer = riot.observable();
riot.mixin({ observer })

window.addEventListener('DOMContentLoaded', () => {
  riot.mount('*');
});

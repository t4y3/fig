import './scss/style.scss';
import './scss/iframe.scss';

// ライブラリ
import riot from 'riot';
import riotx from 'riotx';

// store
import store from './stores';
riotx.add(store);
riotx.get().commit('initState', FIG_CONFIG.figures);

// Components
import './tags';

let observer = riot.observable();
riot.mixin({ observer })

window.addEventListener('DOMContentLoaded', () => {
  riot.mount('*');
});

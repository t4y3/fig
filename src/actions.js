import store from 'store';
import { STORAGE_KEY } from './common/constant';

const actions = {
  /**
   * Init
   */
  initState: (data) => (state) => {
    let storage = store.get(STORAGE_KEY);
    let bundle = data.bundle;
    let isTree = state.isTree;
    let isInfo = state.isInfo;
    let pi = state.pi;
    let ci = state.ci;
    let figuresOpen = [];
    for (let i = 0; i < data.figures.length; i++) {
      figuresOpen[i] = true;
    }
    let title = data.title || state.title;

    if (storage) {
      isTree = storage.isTree;
      isInfo = storage.isInfo;
      if (figuresOpen.length == data.figures.length && storage.figuresOpen) {
        figuresOpen = storage.figuresOpen;
      }
      if (data.figures[storage.pi] && data.figures[storage.pi].list[storage.ci]) {
        pi = storage.pi;
        ci = storage.ci;
      }
    }

    // get params
    let params = location.search.substring(1).split('&');
    let paramsKv = {};
    for (let i = 0; params[i]; i++) {
      let kv = params[i].split('=');
      paramsKv[kv[0]] = kv[1];
    }
    if (paramsKv['pi'] && paramsKv['ci']) {
      if (data.figures[paramsKv['pi']] && data.figures[paramsKv['pi']].list[paramsKv['ci']]) {
        pi = paramsKv['pi'];
        ci = paramsKv['ci'];
      }
    }

    // Set Storage
    let newState = Object.assign({}, state, {
      bundle,
      headHtml: data.headHtml,
      isTree,
      isInfo,
      pi,
      ci,
      figures: data.figures,
      figuresOpen,
      title
    });
    store.set(STORAGE_KEY, newState);
    return newState;
  },

  /**
   * Change Tree Active
   */
  changeTree: (index) => (state) => {
    // Set Storage
    let newState = Object.assign({}, state, {
      pi: index[0],
      ci: index[1],
    });
    store.set(STORAGE_KEY, newState);

    // set params
    window.history.pushState({}, null, `?pi=${ index[0] }&ci=${ index[1] }`);
    return newState;
  },

  /**
   * Toggle Tree Display
   */
  toggleTree: () => state => {
    // Set Storage
    let newState = Object.assign({}, state, {
      isTree: !state.isTree,
      isInfo: state.isInfo,
    });
    store.set(STORAGE_KEY, newState);
    return newState;
  },

  /**
   * Toggle Accordion
   */
  toggleTreeAccordion: (pi) => state => {
    let figuresOpen = state.figuresOpen;
    figuresOpen[pi] = !figuresOpen[pi];
    // Set Storage
    let newState = Object.assign({}, state, {
      figuresOpen
    });
    store.set(STORAGE_KEY, newState);
    return newState;
  },

  /**
   * Toggle Info Display
   */
  toggleInfo: () => state => {
    // Set Storage
    let newState = Object.assign({}, state, {
      isTree: state.isTree,
      isInfo: !state.isInfo,
    });
    store.set(STORAGE_KEY, newState);
    return newState;
  },

  /**
   * Move Foucused Components
   */
  moveFocusedTag: (dir) => state => {

    let nextpi = state.pi;
    let nextci = dir === 'up' ? state.ci - 1 : state.ci + 1;

    if (nextci < 0) {
      if (state.pi - 1 < 0) {
        nextpi = state.pi;
        nextci = state.ci;
      } else {
        nextpi = nextpi - 1;
        nextci = state.figures[state.pi - 1].list.length - 1;
      }
    } else if (nextci > state.figures[state.pi].list.length - 1) {
      if (state.pi + 1 > state.figures.length - 1) {
        nextpi = state.pi;
        nextci = state.ci
      } else {
        nextpi = nextpi + 1;
        nextci = 0;
      }
    }

    // Set Storage
    let newState = Object.assign({}, state, {
      pi: nextpi,
      ci: nextci,
    });
    store.set(STORAGE_KEY, newState);

    // set params
    window.history.pushState({}, null, `?pi=${ nextpi }&ci=${ nextci }`);
    return newState;
  },

  /**
   * Open Accordion
   */
  openTreeAccordion: (flag) => state => {
    let figuresOpen = state.figuresOpen;
    figuresOpen[state.pi] = flag;
    // Set Storage
    let newState = Object.assign({}, state, {
      figuresOpen
    });
    store.set(STORAGE_KEY, newState);
    return newState;
  }
};

export default actions;

import riotx from 'riotx';
import store from 'store';
import { ACTIONS, GETTERS } from '../common/constant';
const STORAGE_KEY = 'fig-state';

let appStore = new riotx.Store({
  state: {
    ui: {
      isTree: true,
      isInfo: false
    },
    parentIndex: 0,
    childrenIndex: 0,
    figures: [],
  },
  actions: {
    [ACTIONS.UPDATE_ALL]: (context, data) => {
      context.commit('all', data);
    },
    [ACTIONS.UPDATE_ACTIVE_TAG]: (context, parent, children) => {
      context.commit('activeTag', parseInt(parent, 10), parseInt(children, 10));
    }
  },
  mutations: {
    initState: (context, figures) => {
      let data = store.get(STORAGE_KEY);
      if (data) {
        context.state.ui = data.ui;
        if (figures[parseInt(data.parentIndex, 10)] && figures[parseInt(data.parentIndex, 10)].list[parseInt(data.childrenIndex, 10)]) {
          context.state.parentIndex = parseInt(data.parentIndex, 10);
          context.state.childrenIndex = parseInt(data.childrenIndex, 10);
        } else {
          context.state.parentIndex = 0;
          context.state.childrenIndex = 0;
        }

        context.state.figures = figures;
      } else {
        context.state.ui = { isTree: true, isInfo: false };
        context.state.parentIndex = 0;
        context.state.childrenIndex = 0;
        context.state.figures = figures;
      }
      store.set(STORAGE_KEY, context.state);
      return [ACTIONS.INITIALIZED_STATE];
    },
    all: (context, data) => {
      context.state.parentIndex = parseInt(data.parentIndex, 10);
      context.state.childrenIndex = parseInt(data.childrenIndex, 10);
      context.state.figures = data.figures;
      store.set(STORAGE_KEY, context.state);
      return [ACTIONS.UPDATED_ALL];
    },
    updateUi: (context, data) => {
      context.state.ui = data;
      store.set(STORAGE_KEY, context.state);
      return [ACTIONS.UPDATED_ACTIVE_TAG];
    },
    activeTag: (context, parent, children) => {
      context.state.parentIndex = parent;
      context.state.childrenIndex = children;
      store.set(STORAGE_KEY, context.state);
      return [ACTIONS.UPDATED_ACTIVE_TAG];
    },
  },
  getters: {
    [GETTERS.PARENT_INDEX]: context => {
      return context.state.parentIndex;
    },
    [GETTERS.CHILDREN_INDEX]: context => {
      return context.state.childrenIndex;
    },
    [GETTERS.TAG_TITLE]: context => {
      return context.state.figures[context.state.parentIndex].name;
    },
    [GETTERS.TAG_SUBTITLE]: context => {
      return context.state.figures[context.state.parentIndex].list[context.state.childrenIndex].name;
    },
    [GETTERS.FIGURES]: context => {
      return context.state.figures;
    },
    [GETTERS.FIGURE]: context => {
      return context.state.figures[context.state.parentIndex].list[context.state.childrenIndex];
    },
    [GETTERS.UI_STATE]: context => {
      return context.state.ui;
    }
  }
});

export default appStore;

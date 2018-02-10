import riotx from 'riotx';
import { ACTIONS, GETTERS } from '../common/constant';

let store = new riotx.Store({
  state: {
    parentIndex: 0,
    childrenIndex: 0,
    figures: [],
  },
  actions: {
    [ACTIONS.UPDATE_ALL]: (context, data) => {
      context.commit('all', data);
    },
    [ACTIONS.UPDATE_ACTIVE_TAG]: (context, parent, children) => {
      context.commit('activeTag', parent, children);
    }
  },
  mutations: {
    all: (context, data) => {
      context.state.parentIndex = data.parentIndex;
      context.state.childrenIndex = data.childrenIndex;
      context.state.figures = data.figures;
      return [ACTIONS.UPDATED_ALL];
    },
    activeTag: (context, parent, children) => {
      context.state.parentIndex = parent;
      context.state.childrenIndex = children;
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
    }
  }
});

export default store;

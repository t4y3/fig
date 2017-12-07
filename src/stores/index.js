import riotx from 'riotx';
import { ACTIONS, GETTERS } from '../common/constant';

let store = new riotx.Store({
  // name: 'appleMusic',
  state: {
    tags: [],
    activeTag: '',
    bundleSrc: '',
    colors: [],
    codes: {},
  },
  actions: {
    [ACTIONS.UPDATE_ALL]: (context, data) => {
      context.commit('all', data);
    },
    [ACTIONS.UPDATE_ACTIVE_TAG]: (context, tag) => {
      context.commit('activeTag', tag);
    }
  },
  mutations: {
    all: (context, data) => {
      context.state.tags = data.tags;
      context.state.activeTag = data.activeTag;
      context.state.bundleSrc = data.bundleSrc;
      context.state.colors = data.colors;
      context.state.codes = data.codes;
      return [ACTIONS.UPDATED_ALL];
    },
    activeTag: (context, tag) => {
      context.state.activeTag = tag;
      return [ACTIONS.UPDATED_ACTIVE_TAG];
    },
  },
  getters: {
    [GETTERS.ALL]: context => {
      return context.state;
    },
    [GETTERS.TAGS]: context => {
      return context.state.tags;
    },
    [GETTERS.ACTIVE_TAG]: context => {
      return context.state.activeTag;
    },
    [GETTERS.BUNDLE_SRC]: context => {
      return context.state.bundleSrc;
    },
    [GETTERS.COLORS]: context => {
      return context.state.colors;
    },
    [GETTERS.CODES]: context => {
      return context.state.codes;
    }
  }
});

export default store;

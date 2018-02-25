import store from 'store';
import { STORAGE_KEY } from './common/constant';

const actions = {
  initState: (data) => (state) => {
    let storage = store.get(STORAGE_KEY);
    let bundle = data.bundle;
    let isTree = state.isTree;
    let isInfo = state.isInfo;
    let parentIndex = state.parentIndex;
    let childrenIndex = state.childrenIndex;

    if (storage) {
      isTree = storage.isTree;
      isInfo = storage.isInfo;
      if (data.figures[storage.parentIndex] && data.figures[storage.parentIndex].list[storage.childrenIndex]) {
        parentIndex = storage.parentIndex;
        childrenIndex = storage.childrenIndex;
      } else {
        parentIndex = 0;
        childrenIndex = 0;
      }
    }

    // Set Storage
    let s = Object.assign({}, state);
    store.set(STORAGE_KEY, Object.assign(s, {
      bundle,
      isTree,
      isInfo,
      parentIndex,
      childrenIndex,
      figures: data.figures
    }));
    return {
      bundle,
      isTree,
      isInfo,
      parentIndex,
      childrenIndex,
      figures: data.figures
    }
  },
  changeTree: (index) => (state) => {
    // Set Storage
    let s = Object.assign({}, state);
    store.set(STORAGE_KEY, Object.assign(s, {
      parentIndex: index[0],
      childrenIndex: index[1],
    }));
    return {
      parentIndex: index[0],
      childrenIndex: index[1]
    }
  },
  toggleTree: () => state => {
    // Set Storage
    let s = Object.assign({}, state);
    store.set(STORAGE_KEY, Object.assign(s, {
      isTree: !state.isTree,
      isInfo: state.isInfo,
    }));
    return {
      isTree: !state.isTree,
      isInfo: state.isInfo,
    }
  },
  toggleInfo: () => state => {
    // Set Storage
    let s = Object.assign({}, state);
    store.set(STORAGE_KEY, Object.assign(s, {
      isTree: state.isTree,
      isInfo: !state.isInfo,
    }));
    return {
      isTree: state.isTree,
      isInfo: !state.isInfo,
    }
  },
  moveFocusedTag: (dir) => state => {

    let nextParentIndex = state.parentIndex;
    let nextChildrenIndex = dir === 'up' ? state.childrenIndex - 1 : state.childrenIndex + 1;

    if (nextChildrenIndex < 0) {
      if (state.parentIndex - 1 < 0) {
        nextParentIndex = state.parentIndex;
        nextChildrenIndex = state.childrenIndex;
      } else {
        nextParentIndex = nextParentIndex - 1;
        nextChildrenIndex = state.figures[state.parentIndex - 1].list.length - 1;
      }
    } else if (nextChildrenIndex > state.figures[state.parentIndex].list.length - 1) {
      if (state.parentIndex + 1 > state.figures.length - 1) {
        nextParentIndex = state.parentIndex;
        nextChildrenIndex = state.childrenIndex
      } else {
        nextParentIndex = nextParentIndex + 1;
        nextChildrenIndex = 0;
      }
    }

    // Set Storage
    let s = Object.assign({}, state);
    store.set(STORAGE_KEY, Object.assign(s, {
      parentIndex: nextParentIndex,
      childrenIndex: nextChildrenIndex,
    }));

    return {
      parentIndex: nextParentIndex,
      childrenIndex: nextChildrenIndex,
    }
  }
};

export default actions;

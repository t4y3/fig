import store from 'store';
import { STORAGE_KEY } from './common/constant';

// Init Store
let state = {
  isTree: true,
  isInfo: false,
  parentIndex: 0,
  childrenIndex: 0,
  figures: [],
};

let figures = FIG_CONFIG.figures;
let storage = store.get(STORAGE_KEY);

if (storage) {
  state.isTree = storage.isTree;
  state.isInfo = storage.isInfo;
  if (figures[storage.parentIndex] && figures[storage.parentIndex].list[storage.childrenIndex]) {
    state.parentIndex = storage.parentIndex;
    state.childrenIndex = storage.childrenIndex;
  } else {
    state.parentIndex = 0;
    state.childrenIndex = 0;
  }
  state.figures = figures;
}

store.set(STORAGE_KEY, state);

export default state;

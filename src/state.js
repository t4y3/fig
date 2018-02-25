import store from 'store';
import { STORAGE_KEY } from './common/constant';

// Init Store
let state = {
  bundle: '',
  isTree: true,
  isInfo: false,
  parentIndex: 0,
  childrenIndex: 0,
  figures: [],
};

export default state;

import store from 'store';
import { STORAGE_KEY } from './common/constant';

// Init Store
let state = {
  bundle: '',
  headHtml: '',
  isTree: true,
  isInfo: false,
  pi: 0,  // parentIndex
  ci: 0,  // childrenIndex
  figures: [],
  figuresOpen: [],
};

export default state;

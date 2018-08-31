import Esr from 'esr';
import constant from './common/constant';

// create an instance.
const router = new Esr(Esr.HASH);

class RouterAction {
  setAction(action) {
    this.action = action;
  }
}

export const routerAction = new RouterAction();

router.on('/', () => {
  routerAction.action.changePage({
    page: constant.page.index,
    component: '',
    componentType: '',
  });
});

router.on('/:component', (route) => {
  routerAction.action.changePage({
    page: constant.page.detail,
    component: route.params.component,
    componentType: '',
  });
});

router.on('/:component/:type', (route) => {
  routerAction.action.changePage({
    page: constant.page.detail,
    component: route.params.component,
    componentType: route.params.type,
  });
});

router.on('/:component/:type/full', (route) => {
  routerAction.action.changePage({
    page: constant.page.full,
    component: route.params.component,
    componentType: route.params.type,
  });
});

// start listening for the url to change.
router.start();

export default router;

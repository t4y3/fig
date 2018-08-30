import Esr from 'esr';

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
    page: 'index',
    component: '',
    componentType: '',
  });
});

router.on('/:component', (route) => {
  routerAction.action.changePage({
    page: 'detail',
    component: route.params.component,
    componentType: '',
  });
});

router.on('/:component/:type', (route) => {
  routerAction.action.changePage({
    page: 'detail',
    component: route.params.component,
    componentType: route.params.type,
  });
});

// start listening for the url to change.
router.start();

export default router;

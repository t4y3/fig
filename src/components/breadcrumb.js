import { h } from 'hyperapp';
import router from '../router';

const navigateTo = (path) => {
  router.navigateTo(path);
};

const Breadcrumb = ({ state }) => (
  <div className="siimple-breadcrumb">
    <div className="siimple-breadcrumb-item" onclick={navigateTo.bind(this, '/')}>
      Home
    </div>
    <div className="siimple-breadcrumb-item" onclick={navigateTo.bind(this, `/${state.component}`)}>
      {state.component}
    </div>
    {state.componentType !== '' ? (
      <div
        className="siimple-breadcrumb-item"
        onclick={navigateTo.bind(this, `/${state.component}/${state.componentType}`)}
      >
        {state.componentType}
      </div>
    ) : null}
  </div>
);

export default Breadcrumb;

import { h } from 'hyperapp';
import router from '../router';

const navigateTo = (path) => {
  router.navigateTo(path);
};

const Breadcrumb = ({ component = '', componentType = '' }) => (
  <div className="siimple-breadcrumb">
    <div className="siimple-breadcrumb-item" onclick={navigateTo.bind(this, '/')}>
      Home
    </div>
    <div className="siimple-breadcrumb-item" onclick={navigateTo.bind(this, `/${component}`)}>
      {component}
    </div>
    {componentType ? (
      <div
        className="siimple-breadcrumb-item"
        onclick={navigateTo.bind(this, `/${component}/${componentType}`)}
      >
        {componentType}
      </div>
    ) : null}
  </div>
);

export default Breadcrumb;

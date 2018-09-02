import { h } from 'hyperapp';
import router from '../router';
import Iframe from './Iframe';

const clickHandlerFullScreen = (component, componentType) => {
  router.navigateTo(`/${component}/${componentType}/full`);
};

const View = ({
  data, bundle, headHtml, component, componentType,
}) => (
  <div className="fig-view">
    <Iframe data={data} bundle={bundle} headHtml={headHtml} />
    <div
      className="fig-view-icon bg-example siimple--bg-light"
      onclick={clickHandlerFullScreen.bind(this, component, componentType)}
    >
      <i className="material-icons icon-link">fullscreen</i>
    </div>
  </div>
);

export default View;

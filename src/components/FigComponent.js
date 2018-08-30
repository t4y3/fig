import { h } from 'hyperapp';
import router from '../router';
import FigCode from './FigCode';
import FigView from './FigView';
import FigOpts from './FigOpts';

const FigComponent = ({ state, figure }) => (
  <div id={`__anchor-${figure.name}`} className="fig-component">
    <p
      className="head siimple-h1 siimple--display-flex"
      onclick={() => router.navigateTo(`/${figure.name}`)}
    >
      {figure.name}
      <i className="material-icons icon-link">link</i>
    </p>
    {figure.list.map((data) => {
      if (state.componentType !== '' && state.componentType !== data.name) {
        return null;
      }
      return (
        <div className="type">
          <p
            id={`__anchor-${figure.name}-${data.name}`}
            className="headSub siimple-h5 siimple--display-flex"
            onclick={() => router.navigateTo(`/${figure.name}/${data.name}`)}
          >
            {data.name}
            <i className="material-icons icon-link">link</i>
          </p>
          <FigView state={state} data={data} />
          <FigCode template={data.template} />
          <FigOpts data={data} />
        </div>
      );
    })}
  </div>
);

export default FigComponent;

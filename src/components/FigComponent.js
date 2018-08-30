import { h } from 'hyperapp';
import router from '../router';
import FigCode from './FigCode';
import FigView from './FigView';
import FigOpts from './FigOpts';

const FigComponent = ({ state, figure, index }) => (
  <div id={`__anchor_${index}`} className="fig-component">
    <p
      className="head siimple-h1 siimple--display-flex"
      onclick={() => router.navigateTo(`/${figure.name}`)}
    >
      {figure.name}
      <i className="material-icons icon-link">link</i>
    </p>
    {figure.list.map((data, j) => {
      if (state.indexOfType !== -1 && state.indexOfType !== j) {
        return null;
      }
      return (
        <div className="type">
          <p
            id={`__anchor_${index}_${j}`}
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

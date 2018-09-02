import { h } from 'hyperapp';
import router from '../router';
import Code from './Code';
import View from './View';
import Opts from './Opts';

const Component = ({ state, figure, index }) => (
  <div id={`__anchor_${index}`} className="fig-component">
    <p
      className="head siimple-h1 siimple--display-flex"
      onclick={() => router.navigateTo(`/${figure.name}`)}
    >
      {figure.name}
      <i className="material-icons icon-link fig-component-icon">link</i>
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
            <i className="material-icons icon-link fig-component-icon">link</i>
          </p>
          <View
            data={data}
            bundle={state.bundle}
            headHtml={state.headHtml}
            component={figure.name}
            componentType={data.name}
          />
          <Code template={data.template} />
          <Opts opts={data._opts} />
        </div>
      );
    })}
  </div>
);

export default Component;

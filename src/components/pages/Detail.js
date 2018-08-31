import { h } from 'hyperapp';
import Component from '../Component';
import Breadcrumb from '../Breadcrumb';

const Detail = ({ state }) => {
  let figure = null;
  let component = '';
  let componentType = '';
  if (state.indexOfComponent !== -1) {
    figure = state.figures[state.indexOfComponent];
    component = figure.name;
    if (state.indexOfType !== -1) {
      componentType = figure.list[state.indexOfType].name;
    }
  }
  return (
    <div className="fig-detail">
      <Breadcrumb component={component} componentType={componentType} />
      {figure ? <Component state={state} figure={figure} index={state.indexOfComponent} /> : null}
    </div>
  );
};

export default Detail;

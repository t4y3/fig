import { h } from 'hyperapp';
import Component from '../Component';
import Breadcrumb from '../Breadcrumb';

const FigDetail = ({ state }) => (
  <div className="fig-detail">
    <Breadcrumb state={state} />
    {state.figures.map((figure, i) => {
      const isShow = i === state.indexOfComponent;
      return isShow ? <Component state={state} figure={figure} index={i} /> : null;
    })}
  </div>
);

export default FigDetail;

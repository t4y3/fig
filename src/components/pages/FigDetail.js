import { h } from 'hyperapp';
import FigComponent from '../FigComponent';
import Breadcrumb from '../breadcrumb';

const FigDetail = ({ state }) => (
  <div className="fig-detail">
    <Breadcrumb state={state} />
    {state.figures.map((figure) => {
      const isShow = figure.name === state.component;
      return isShow ? <FigComponent state={state} figure={figure} /> : null;
    })}
  </div>
);

export default FigDetail;

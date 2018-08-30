import { h } from 'hyperapp';
import FigComponent from '../FigComponent';
import Breadcrumb from '../breadcrumb';

const FigDetail = ({ state }) => (
  <div className="fig-detail">
    <Breadcrumb state={state} />
    {state.figures.map((figure, i) => {
      const isShow = i === state.indexOfComponent;
      return isShow ? <FigComponent state={state} figure={figure} index={i} /> : null;
    })}
  </div>
);

export default FigDetail;

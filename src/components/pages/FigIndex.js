import { h } from 'hyperapp';
import FigComponent from '../FigComponent';

const FigIndex = ({ state }) => (
  <div className="fig-index">
    {state.figures.map((figure, i) => (
      <FigComponent state={state} figure={figure} index={i} />
    ))}
  </div>
);

export default FigIndex;

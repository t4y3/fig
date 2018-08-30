import { h } from 'hyperapp';
import FigComponent from '../FigComponent';

const FigIndex = ({ state }) => (
  <div className="fig-index">
    {state.figures.map(figure => (
      <FigComponent state={state} figure={figure} />
    ))}
  </div>
);

export default FigIndex;

import { h } from 'hyperapp';
import Component from '../Component';

const Index = ({ state }) => (
  <div className="fig-index">
    {state.figures.map((figure, i) => (
      <Component state={state} figure={figure} index={i} />
    ))}
  </div>
);

export default Index;

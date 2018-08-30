import { h } from 'hyperapp';
import View from '../View';

const Full = ({ state }) => {
  const data = state.figures[state.indexOfComponent].list[state.indexOfType];
  return <View state={state} data={data} />;
};

export default Full;

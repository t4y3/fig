import { h } from 'hyperapp';
import Iframe from '../Iframe';

const Full = ({ state }) => {
  const data = state.figures[state.indexOfComponent].list[state.indexOfType];
  return <Iframe data={data} bundle={state.bundle} headHtml={state.headHtml} />;
};

export default Full;

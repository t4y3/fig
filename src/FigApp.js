import { h } from 'hyperapp';
import FigTree from './FigTree';
import FigHeader from './FigHeader';
import FigInfo from './FigInfo';
import FigView from './FigView';

const FigApp = ({ state, actions }) => (
  <div className="fig-app">
    <div className="app-inner">
      <div className={`app-left ${state.isTree ? '' : 'hide'}`}>
        <FigTree state={state} action={actions} />
      </div>
      <div className="app-right">
        <FigHeader state={state} />
        <div className="app-right-top">
          <FigView state={state} />
          <FigInfo state={state} action={actions} />
        </div>
      </div>
    </div>
  </div>
);

export default FigApp;

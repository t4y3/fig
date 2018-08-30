import { h } from 'hyperapp';
import FigTree from './FigTree';
import FigIndex from './pages/FigIndex';
import FigDetail from './pages/FigDetail';

const FigApp = ({ state, actions }) => (
  <div className="fig-app">
    <div className="app-inner">
      <div className={`app-left ${state.isTree ? '' : 'hide'}`}>
        <FigTree state={state} action={actions} />
      </div>
      <div className="app-right">
        {state.page === 'index' ? <FigIndex state={state} action={actions} /> : null}
        {state.page === 'detail' ? <FigDetail state={state} action={actions} /> : null}
      </div>
    </div>
  </div>
);

export default FigApp;

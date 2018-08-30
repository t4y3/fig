import { h } from 'hyperapp';
import Tree from './Tree';
import Index from './pages/Index';
import Detail from './pages/Detail';

const App = ({ state, actions }) => (
  <div className="fig-app">
    <div className="app-inner">
      <div className={`app-left ${state.isTree ? '' : 'hide'}`}>
        <Tree state={state} action={actions} />
      </div>
      <div className="app-right">
        {state.page === 'index' ? <Index state={state} action={actions} /> : null}
        {state.page === 'detail' ? <Detail state={state} action={actions} /> : null}
      </div>
    </div>
  </div>
);

export default App;

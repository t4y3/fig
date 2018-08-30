import { h } from 'hyperapp';
import Tree from './Tree';
import Index from './pages/Index';
import Detail from './pages/Detail';
import Full from './pages/Full';

const App = ({ state, actions }) => {
  if (state.page !== 'full') {
    return (
      <div className="fig-app">
        <div className="app-inner">
          <div className={`app-left ${state.isTree ? '' : 'hide'}`}>
            <Tree state={state} action={actions} />
          </div>
          <div className="app-right">
            {state.page === 'index' ? <Index state={state} action={actions} /> : null}
            {state.page === 'detail' ? <Detail state={state} action={actions} /> : null}
            {state.page === 'full' ? <Full state={state} action={actions} /> : null}
          </div>
        </div>
      </div>
    );
  }

  return <Full state={state} action={actions} />;
};

export default App;

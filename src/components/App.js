import { h } from 'hyperapp';
import Tree from './Tree';
import Index from './pages/Index';
import Detail from './pages/Detail';
import Full from './pages/Full';
import constant from '../common/constant';

const App = ({ state, actions }) => {
  if (state.page === constant.page.full) {
    return <Full state={state} />;
  }

  return (
    <div className="fig-app">
      <div className="app-inner">
        <div className="app-left">
          <Tree state={state} action={actions} />
        </div>
        <div className="app-right">
          {state.page === constant.page.index ? <Index state={state} /> : null}
          {state.page === constant.page.detail ? <Detail state={state} /> : null}
        </div>
      </div>
    </div>
  );
};

export default App;

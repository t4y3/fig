import { h } from 'hyperapp';
import { renderToString } from 'hyperapp-render';
import Opts from './Opts';

test('Opts.js to match snapshot', () => {
  const opts = {
    a: 1,
    b: 'test',
    c: true,
    d: {
      a: 1,
      b: 'test'
    },
    e: [1, 2, 3]
  };
  const view = renderToString(<Opts opts={opts} />);
  expect(view).toMatchSnapshot();
});

import { h } from 'hyperapp';
import { renderToString } from 'hyperapp-render';
import hljs from 'highlight.js';
import Code from './Code';

global.hljs = hljs;

test('Code.js to match snapshot', () => {
  const view = renderToString(<Code template="<p>test</p>" />);
  expect(view).toMatchSnapshot();
});

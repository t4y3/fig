import { h } from 'hyperapp';

const FigCode = ({ template }) => (
  <div className="fig-code">
    <div className="siimple-h5">Source</div>
    <pre className="siimple-pre">
      <code className="html" innerHTML={hljs.highlight('html', template).value} />
    </pre>
  </div>
);

export default FigCode;

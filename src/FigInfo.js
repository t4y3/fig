import { h } from 'hyperapp';

/**
 * format opts value
 */
const format = (e, data) => {
  const djt = new DomJsonTree(data, e);
  djt.rendar();
};

let startX = 0;
let infoWidth = 600;
let startWidth = 0;
/**
 * Drag Start
 */
const onDragstart = (e) => {
  startX = e.clientX;
  startWidth = infoWidth;
};

/**
 * Drag
 */
const onDrag = (e) => {
  e.preventDefault();
  const w = startWidth + (startX - e.clientX);
  if (e.clientX === 0 || w <= 300) {
    return;
  }
  infoWidth = w;
  const dom = document.getElementById('fig-info');
  dom.style.flexBasis = `${w}px`;
  dom.style.maxWidth = `${w}px`;
};

const FigInfo = ({ state, action }) => (
  <div id="fig-info" className={`fig-info ${state.isInfo ? '' : 'hide'}`}>
    <div className="info-inner">
      <div className="info-title">
        {state.figures[state.pi].name} - {state.figures[state.pi].list[state.ci].name}
      </div>
      <div className="code-inner">
        <p>Source</p>
        <pre>
          <code
            className="html"
            innerHTML={
              hljs.highlight('html', state.figures[state.pi].list[state.ci].template).value
            }
          />
        </pre>
      </div>
      <div className="opts-inner">
        <p>Opts</p>
        <div className="table-inner">
          <table>
            <thead>
              <tr>
                <th width="85%">Value</th>
              </tr>
            </thead>
            {state.figures.map((figure, pi) => figure.list.map((data, ci) => (
                <tbody className={`${state.pi === pi && state.ci === ci ? '' : 'hide'}`}>
                  {Object.keys(data._opts).map(key => (
                    <tr>
                      <td width="85%">
                        <div
                          oncreate={(e) => {
                            format(e, data._opts[key], key);
                          }}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
            )))}
          </table>
        </div>
      </div>
    </div>
    <div className="sidebar-gutter" />
    <div
      className="sidebar-gutter--dummy"
      draggable="true"
      ondragstart={(e) => {
        onDragstart(e, state, action);
      }}
      ondrag={(e) => {
        onDrag(e, state, action);
      }}
    />
  </div>
);

export default FigInfo;

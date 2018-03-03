import { h, app } from "hyperapp";

/**
 * format opts value
 */
const format = (e, data, key) => {
  let view = new JSONView(key, data);
  view.expand(true);
  e.innerHTML = '';
  e.appendChild(view.dom);
};


let startX = 0;
let infoWidth = 0;

/**
 * Drag Start
 */
const onDragstart = (e, state, action) => {
  startX = e.clientX;
  infoWidth = state.infoWidth;
};

/**
 * Drag
 */
const onDrag = (e, state, action) => {
  e.preventDefault();
  let w = infoWidth + (startX - e.clientX);
  if (e.clientX === 0 || w <= 300) {
    return;
  }
  action.updateInfoWidth(w);
}

const FigInfo = ({ state, action }) => (
  <div id="fig-info" className={`fig-info ${ state.isInfo ? '': 'hide' }`} style={ { flexBasis: state.infoWidth + 'px', maxWidth: state.infoWidth + 'px' } }>
    <div className="info-inner">
      <div className="info-title">{ state.figures[state.pi].name } - { state.figures[state.pi].list[state.ci].name }</div>
      <div className="code-inner">
        <p>Source</p>
        <pre>
          <code className="html" innerHTML={ hljs.highlight('html', state.figures[state.pi].list[state.ci].template).value }>
          </code>
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
            {state.figures.map((figure, pi) => {
              return figure.list.map((data, ci) => {
                return (
                  <tbody className={`${ state.pi == pi && state.ci == ci ? '': 'hide'}`}>
                    {Object.keys(data._opts).map(function(key) {
                      return (
                        <tr>
                          <td width="85%">
                            <div oncreate={ (e) => { format(e, data._opts[key], key) } }></div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                )
              })
            })}
          </table>
        </div>
      </div>
    </div>
    <div className="sidebar-gutter"></div>
    <div
      className="sidebar-gutter--dummy"
      draggable="true"
      ondragstart={ (e) => { onDragstart(e, state, action) } }
      ondrag={ (e) => { onDrag(e, state, action) } }
    ></div>
  </div>
)

export default FigInfo;

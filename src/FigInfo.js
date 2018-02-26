import { h, app } from "hyperapp"

const FigInfo = ({ state }) => (
  <div className={`fig-info ${ state.isInfo ? '': 'hide' }`}>
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
        <p>opts</p>
        <table>
          <thead>
            <tr>
              <th width="15%">Name</th>
              <th width="15%">Type</th>
              <th width="70%">Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(state.figures[state.pi].list[state.ci]._opts).map(function(key) {
              return (
                <tr>
                  <td width="15%">{ key }</td>
                  <td width="15%">{ typeof key }</td>
                  <td width="70%">
                    <pre>
                      <code className="json" innerHTML={ hljs.highlight('json', JSON.stringify(state.figures[state.pi].list[state.ci]._opts[key], null, '  ')).value }>
                      </code>
                    </pre>
                  </td>
                </tr>
              )
            })}
            </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default FigInfo;

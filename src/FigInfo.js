import { h, app } from "hyperapp"

const FigInfo = ({ show, figures, pindex, cindex }) => (
  <div className={`fig-info ${ show ? '': 'hide' }`}>
    <div className="info-inner">
      <div className="info-title">{ figures[pindex].name } - { figures[pindex].list[cindex].name }</div>
      <div className="code-inner">
        <p>Source</p>
        <pre>
          <code className="html" innerHTML={ hljs.highlight('html', figures[pindex].list[cindex].template).value }>
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
            {Object.keys(figures[pindex].list[cindex]._opts).map(function(key) {
              return (
                <tr>
                  <td width="15%">{ key }</td>
                  <td width="15%">{ typeof key }</td>
                  <td width="70%">
                    <pre>
                      <code className="json" innerHTML={ hljs.highlight('json', JSON.stringify(figures[pindex].list[cindex]._opts[key], null, '  ')).value }>
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

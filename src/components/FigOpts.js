import { h } from 'hyperapp';

/**
 * format opts value
 */
const format = (e, data) => {
  const djt = new DomJsonTree(data, e);
  djt.render();
};

const FigOpts = ({ data }) => {
  const isEmpty = !Object.keys(data._opts).length;
  if (isEmpty) {
    return null;
  }
  return (
    <div className="fig-opts">
      <div className="siimple-h6">Opts</div>
      <div className="siimple-table siimple-table--border">
        <div className="siimple-table-header">
          <div className="siimple-table-row">
            <div className="siimple-table-cell siimple--width-25">Opts Name</div>
            <div className="siimple-table-cell siimple--width-75">Value</div>
          </div>
        </div>
        <div className="siimple-table-body">
          {Object.keys(data._opts).map(key => (
            <div className="siimple-table-row">
              <div className="siimple-table-cell siimple--width-25">{key}</div>
              <div
                className="siimple-table-cell siimple--width-75"
                oncreate={(e) => {
                  format(e, data._opts[key], key);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FigOpts;

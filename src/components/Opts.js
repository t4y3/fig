import { h } from 'hyperapp';

/**
 * format opts value
 */
const format = (e, data, key) => {
  const djt = new DomJsonTree(
    {
      [key]: data,
    },
    e,
    {
      colors: {
        key: '#008080',
        type: '#546778',
        typeNumber: '#000080',
        typeString: '#dd1144',
        typeBoolean: '#000080',
      },
    },
  );
  djt.render();
};

const Opts = ({ opts = {} }) => {
  const isEmpty = !Object.keys(opts).length;
  if (isEmpty) {
    return null;
  }
  return (
    <div className="fig-opts">
      <div className="siimple-h6">Opts</div>
      <div className="siimple-table siimple-table--border">
        <div className="siimple-table-header">
          <div className="siimple-table-row">
            <div className="siimple-table-cell">Value</div>
          </div>
        </div>
        <div className="siimple-table-body">
          {Object.keys(opts).map((key) => (
            <div className="siimple-table-row">
              <div
                className="siimple-table-cell"
                oncreate={(e) => {
                  format(e, opts[key], key);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Opts;

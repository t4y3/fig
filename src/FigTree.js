import { h, app } from "hyperapp"

const FigTree = ({ figures, pindex, cindex, action }) => (
  <div className="fig-tree">
    <div className="title">Fig</div>
    <ul className="list">
      {figures.map((figure, pi) => {
        return (
          <li className="list__item">
            <p className="tag-title">{ figure.name }
              {/*<i className="material-icons">keyboard_arrow_right</i>*/}
              {/*<i className="material-icons">keyboard_arrow_down</i>*/}
            </p>
            <div className="tag-list">
              {figure.list.map((data, ci) => {
                return (
                  <p
                    className={`tag-list__item ${ pi == pindex && ci == cindex ? 'tag-list__item--active' : '' }`}
                    onclick={ () =>{ action.changeTree([pi, ci]) } }
                    >
                    { data.name }
                  </p>
                )
              })}
            </div>
          </li>
        )
      })}
    </ul>
  </div>
)

export default FigTree;

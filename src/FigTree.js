import { h } from 'hyperapp';

const FigTree = ({ state, action }) => (
  <div className="fig-tree">
    <div className="title">{state.title}</div>
    <ul className="list">
      {state.figures.map((figure, pi) => (
        <li className="list__item">
          <p
            className={`tag-title ${pi === state.pi ? 'tag-title--active' : ''}`}
            onclick={() => {
              action.toggleTreeAccordion(pi);
            }}
          >
            {figure.name}
            <i className={`material-icons ${state.figuresOpen[pi] ? 'hide' : ''}`}>
              keyboard_arrow_right
            </i>
            <i className={`material-icons ${state.figuresOpen[pi] ? '' : 'hide'}`}>
              keyboard_arrow_down
            </i>
          </p>
          <div className={`tag-list ${state.figuresOpen[pi] ? '' : 'hide'}`}>
            {figure.list.map((data, ci) => (
              <p
                className={`tag-list__item ${
                  pi === state.pi && ci === state.ci ? 'tag-list__item--active' : ''
                }`}
                onclick={() => {
                  action.changeTree([pi, ci]);
                }}
              >
                {data.name}
              </p>
            ))}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default FigTree;

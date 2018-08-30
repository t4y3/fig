import { h } from 'hyperapp';

const clickHandler = (e) => {
  e.preventDefault();
  const { hash } = e.target;
  const wrapper = document.querySelector('.app-right');
  const target = document.querySelector(hash);
  const targetOffset = target.offsetTop;
  wrapper.scrollTo(0, targetOffset);
};

const FigTree = ({ state }) => (
  <div className="fig-tree">
    <div className="title siimple-h4">{state.title}</div>
    <div className="search siimple-form">
      <input type="text" className="siimple-input siimple-input--fluid" placeholder="Button" />
    </div>
    <div className="list">
      {state.figures.map(figure => (
        <div>
          <a
            href={`#__anchor-${figure.name}`}
            onclick={clickHandler}
            className="siimple-menu-group"
          >
            {figure.name}
          </a>
          {figure.list.map((data) => {
            const isSelected = figure.name === state.component && data.name === state.componentType;
            return (
              <a
                href={`#__anchor-${figure.name}-${data.name}`}
                onclick={clickHandler}
                className={`siimple-menu-item ${isSelected ? 'siimple-menu-item--selected' : ''}`}
              >
                {data.name}
              </a>
            );
          })}
        </div>
      ))}
    </div>
  </div>
);

export default FigTree;

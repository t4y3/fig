import { h } from 'hyperapp';

const clickHandler = (e) => {
  e.preventDefault();
  const { hash } = e.target;
  const wrapper = document.querySelector('.app-right');
  const target = document.querySelector(hash);
  const targetOffset = target.offsetTop;
  wrapper.scrollTo(0, targetOffset);
};

const Tree = ({ state }) => (
  <div className="fig-tree">
    <div className="title siimple-h4">{state.title}</div>
    {/*
    <div className="search siimple-form">
      <input type="text" className="siimple-input siimple-input--fluid" placeholder="Filter" />
    </div>
    */}
    <div className="list">
      {state.figures.map((figure, i) => {
        if (state.indexOfComponent !== -1 && state.indexOfComponent !== i) {
          return null;
        }

        return (
          <div key={i}>
            <a href={`#__anchor_${i}`} onclick={clickHandler} className="siimple-menu-group">
              {figure.name}
            </a>
            {figure.list.map((data, j) => {
              if (state.indexOfType !== -1 && state.indexOfType !== j) {
                return null;
              }
              // const isSelected = i === state.indexOfComponent && j === state.indexOfType;
              return (
                <a
                  key={`${i}_${j}`}
                  href={`#__anchor_${i}_${j}`}
                  onclick={clickHandler}
                  className="siimple-menu-item"
                >
                  {data.name}
                </a>
              );
            })}
          </div>
        );
      })}
    </div>
  </div>
);

export default Tree;

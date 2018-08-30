const actions = {
  /**
   * Init
   */
  initState: data => (state) => {
    const { bundle } = data;
    const title = data.title || state.title;

    // Set Storage
    const newState = Object.assign({}, state, {
      bundle,
      headHtml: data.headHtml,
      figures: data.figures,
      title,
    });
    return newState;
  },

  /**
   * Change Page
   */
  changePage: data => (state) => {
    const s = data;

    let indexOfComponent = -1;
    let indexOfType = -1;
    for (let i = 0; i < state.figures.length; i += 1) {
      const figure = state.figures[i];
      if (figure.name === data.component) {
        indexOfComponent = i;
      }
      for (let j = 0; j < figure.list.length; j += 1) {
        if (figure.list[j].name === data.componentType) {
          indexOfType = j;
        }
      }
    }

    s.indexOfComponent = indexOfComponent;
    s.indexOfType = indexOfType;

    if (data.page === 'index') {
      s.isTree = true;
    } else {
      s.isTree = false;
    }
    // Set Storage
    const newState = Object.assign({}, state, s);
    return newState;
  },
};

export default actions;

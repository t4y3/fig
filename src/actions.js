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

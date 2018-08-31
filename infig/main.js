class Figures extends Array {
  add(key, fn, _opts = {}) {
    this.push({
      name: key,
      template: fn(),
      _opts,
    });
    return this;
  }
}

class InFig {
  constructor() {
    this.figures = [];
  }

  set(name) {
    const list = new Figures();
    this.figures.push({
      name,
      list,
    });
    return list;
  }

  getFigures() {
    return this.figures;
  }

  reset() {
    this.figures = [];
  }
}

module.exports = new InFig();

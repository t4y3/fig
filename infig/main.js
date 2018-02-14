class Figures extends Array {
  add(key, fn, _opts={}) {
    this.push({
      name: key,
      template: fn(),
      _opts: _opts
    })
    return this;
  }
}

class InFig {
  constructor() {
    this.figures = [];
  }

  set(name) {
    let list = new Figures();
    this.figures.push({
      name: name,
      list: list
    })
    return list;
  }

  getFigures() {
    return this.figures;
  }
}

module.exports = new InFig();

import { h, app } from "hyperapp"

const loadedCallback = (e) => {
  let iframeDocument = e.target.contentDocument || e.target.contentWindow.document;
  let link = document.createElement('link');
  link.href = 'css/iframe.css';
  link.type = 'text/css';
  link.rel = 'stylesheet';
  iframeDocument.querySelector('head').appendChild(link);
  iframeDocument.addEventListener('click', () => {
    window.focus();
  });
}

const getSrcTemplate = (state, pi, ci) => {
  let item = state.figures[pi].list[ci];
  let tag = item.template;

  let optsNames = item.template.match(/{(.*?)}/g);
  if (optsNames) {
    optsNames = optsNames.map((str) => {
      let name = str.match(/{ (.*?) }/);
      return name[1];
    });

    for (let k = 0; k < optsNames.length; k++) {
      if (item._opts[optsNames[k]]) {
        let regexp = new RegExp('({ )' + optsNames[k] + '( })');
        let opts = JSON.stringify(item._opts[optsNames[k]]).replace(/"/g, `'`);
        tag = tag.replace(regexp, `$1${ opts }$2`);
      }
    }
  }

  let js = `<scr${'i'}pt type="text/javascript" src="${ state.bundle }"></scr${'i'}pt>`;
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        ${ state.headHtml }
        ${ js }
      </head>
      <body>
        <div class="fig-inner fig-inner--center">
        ${ tag }
        </div>
      </body>
    </html>`;
};

const FigView = ({ state }) => (
  <div className={`fig-view ${ state.isInfo ? 'hide': '' }`}>
    <div className="view-inner">
    {state.figures.map((figure, pi) => {
      return figure.list.map((data, ci) => {
        return (
          <iframe
            width="100%"
            sandbox="allow-scripts allow-same-origin"
            className={`view-frame ${ state.pi == pi && state.ci == ci ? '': 'hide'}`}
            srcdoc={ getSrcTemplate(state, pi, ci) }
            onload={ (e) => { loadedCallback(e) } }>
          </iframe>
        )
      })
    })}

    </div>
  </div>
)

export default FigView

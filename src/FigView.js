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

const getSrcTemplate = (figures, pi, ci) => {
  let item = figures[pi].list[ci];
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
  let js = `<scr${'i'}pt type="text/javascript" src="_bundle.js"></scr${'i'}pt>`;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        ${ HEAD_HTML.html }
        ${ js }
      </head>
      <body>
        <div class="fig-inner fig-inner--center">
        ${ tag }
        </div>
      </body>
    </html>`;
};

const FigView = ({ show, figures, pindex, cindex }) => (
  <div className={`fig-view ${ show ? '': 'hide' }`}>
    <div className="view-inner">
    {figures.map((figure, pi) => {
      return figure.list.map((data, ci) => {
        return (
          <iframe
            width="100%"
            sandbox="allow-scripts allow-same-origin"
            className={`view-frame ${ pindex == pi && cindex == ci ? '': 'hide'}`}
            srcdoc={ getSrcTemplate(figures, pi, ci) }
            onload={ (e) => { loadedCallback(e) } }>
          </iframe>
        )
      })
    })}

    </div>
  </div>
)

export default FigView

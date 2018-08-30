import { h } from 'hyperapp';
import router from '../router';

const loadedCallback = (e) => {
  const iframeDocument = e.target.contentDocument || e.target.contentWindow.document;
  // const link = document.createElement('link');
  // link.href = 'css/iframe.css';
  // link.type = 'text/css';
  // link.rel = 'stylesheet';
  // iframeDocument.querySelector('head').appendChild(link);
  const windowHeith = iframeDocument.querySelector('body').clientHeight;
  e.target.style.height = `${windowHeith}px`;
  // iframeDocument.addEventListener('click', () => {
  //   window.focus();
  // });
};

const getSrcTemplate = (state, data) => {
  const item = data;
  let tag = item.template;

  let optsNames = item.template.match(/{(.*?)}/g);
  if (optsNames) {
    optsNames = optsNames.map((str) => {
      const name = str.match(/{ (.*?) }/);
      return name[1];
    });

    for (let k = 0; k < optsNames.length; k += 1) {
      if (item._opts[optsNames[k]]) {
        const regexp = new RegExp(`({ )${optsNames[k]}( })`);
        const opts = JSON.stringify(item._opts[optsNames[k]]).replace(/"/g, "'");
        tag = tag.replace(regexp, `$1${opts}$2`);
      }
    }
  }
  const style = 'height: auto; margin: 0;';
  const js = `<scr${'i'}pt type="text/javascript" src="${state.bundle}"></scr${'i'}pt>`;
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        ${state.headHtml}
        ${js}
      </head>
      <body style="${style}">${tag}</body>
    </html>`;
};

const clickHandlerFullScreen = (state, index, typeindex) => {
  const figure = state.figures[index];
  const data = figure.list[typeindex];
  router.navigateTo(`/${figure.name}/${data.name}/full`);
};

const View = ({
  state, data, index, typeindex,
}) => {
  if (state.page !== 'full') {
    return (
      <div className="fig-view">
        <iframe
          width="100%"
          sandbox="allow-scripts allow-same-origin"
          srcdoc={getSrcTemplate(state, data)}
          onload={(e) => {
            loadedCallback(e);
          }}
        />
        <div
          className="fig-view-icon bg-example siimple--bg-light"
          onclick={clickHandlerFullScreen.bind(this, state, index, typeindex)}
        >
          <i className="material-icons icon-link">fullscreen</i>
        </div>
      </div>
    );
  }

  return (
    <iframe
      width="100%"
      sandbox="allow-scripts allow-same-origin"
      srcdoc={getSrcTemplate(state, data)}
      onload={(e) => {
        loadedCallback(e);
      }}
    />
  );
};

export default View;

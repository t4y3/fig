import { h } from 'hyperapp';
import constant from '../common/constant';

const loadedCallback = (e, state) => {
  const iframeDocument = e.target.contentDocument || e.target.contentWindow.document;
  const windowHeith = iframeDocument.querySelector('body').clientHeight;
  if (state.page === constant.page.full) {
    e.target.style.height = '100%';
  } else {
    // const link = document.createElement('link');
    // link.href = 'css/iframe.css';
    // link.type = 'text/css';
    // link.rel = 'stylesheet';
    // iframeDocument.querySelector('head').appendChild(link);
    e.target.style.height = `${windowHeith}px`;
    // iframeDocument.addEventListener('click', () => {
    //   window.focus();
    // });
  }
};

const getSrcTemplate = (data, bundle, headHtml) => {
  let tag = data.template;

  let optsNames = data.template.match(/{(.*?)}/g);
  if (optsNames) {
    optsNames = optsNames.map((str) => {
      const name = str.match(/{ (.*?) }/);
      return name[1];
    });

    for (let k = 0; k < optsNames.length; k += 1) {
      if (data._opts[optsNames[k]]) {
        const regexp = new RegExp(`({ )${optsNames[k]}( })`);
        const opts = JSON.stringify(data._opts[optsNames[k]]).replace(/"/g, "'");
        tag = tag.replace(regexp, `$1${opts}$2`);
      }
    }
  }
  const style = 'height: auto; margin: 0;';
  const js = `<scr${'i'}pt type="text/javascript" src="${bundle}"></scr${'i'}pt>`;
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        ${headHtml}
        ${js}
      </head>
      <body style="${style}">${tag}</body>
    </html>`;
};

const Iframe = ({ data, bundle, headHtml }) => state => (
  <iframe
    width="100%"
    sandbox="allow-scripts allow-same-origin"
    srcdoc={getSrcTemplate(data, bundle, headHtml)}
    onload={(e) => {
      loadedCallback(e, state);
    }}
  />
);

export default Iframe;

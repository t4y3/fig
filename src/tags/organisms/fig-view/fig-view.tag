fig-view
  .view-inner(ref="view-inner")
    virtual(each="{ tag, i in allTags }")
      virtual(each="{ item, j in tag.list }")
        iframe.view-frame(
          data-parent="{ i }"
          ref="{ i }_{ j }"
          width="100%"
          sandbox="allow-scripts allow-same-origin"
          srcdoc="{ srcTemplates[i][j] }"
          show="{ i == parentIndex && j == childrenIndex }"
          onload="{ loadedCallback }"
          onclick="{ clickHander }")

  style(type="scss").
    :scope {
      display: block;
      height: 100%;
    }

    .view-inner {
      height: 100%;
      background: #fff;
      position: relative;
      border: 1px solid #c1c1c1;
    }

    .view-frame {
      height: 100%;
    }

  script.
    import { ACTIONS, GETTERS, KEY_EVENTS } from '../../../common/constant';
    import Mousetrap from 'mousetrap';
    let store = this.riotx.get();

    this.on('before-mount', () => {
      // Update active tag
      this.riotxChange(store, ACTIONS.UPDATED_ACTIVE_TAG, (state, store) => {
        this.parentIndex = store.getter(GETTERS.PARENT_INDEX);
        this.childrenIndex = store.getter(GETTERS.CHILDREN_INDEX);
        this.update();
      });

      this.allTags = store.getter(GETTERS.FIGURES);
      this.parentIndex = store.getter(GETTERS.PARENT_INDEX);
      this.childrenIndex = store.getter(GETTERS.CHILDREN_INDEX);
      this.bgIndex = 0;
      this.srcTemplates = [];

      window._opts = {};
      for (let i = 0; i < this.allTags.length; i++) {
        this.srcTemplates[i] =[];
        for (let j = 0; j < this.allTags[i].list.length; j++) {
          window._opts[`${ i }_${ j }`] = this.allTags[i].list[j]._opts;
          this.srcTemplates[i][j] = getSrcTemplate(i, j);
        }
      }
    });

    /**
     * Get srcdoc
     * @param {string} tag Tag name
     * @return
     *
     */
    const getSrcTemplate = (i, j) => {
      let tag = this.allTags[i].list[j].template.replace(/_opts\./g, `window.parent._opts['${ i }_${ j }'].`);

      return `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            ${ HEAD_HTML.html }
          </head>
          <body>
            <div class="fig-inner fig-inner--center">
            ${ tag }
            </div>
          </body>
        </html>`;
    };

    /**
     * Callback at loaded
     * @param  {Object} e Event object
     * @return
     */
    this.loadedCallback = (e) => {
      let iframe = this.refs[`${ e.target.dataset.parent }_${ e.item.j }`];
      let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

      let link = document.createElement('link');
      link.href = 'css/iframe.css';
      link.type = 'text/css';
      link.rel = 'stylesheet';
      iframeDocument.querySelector('head').appendChild(link);
      iframeDocument.addEventListener('click', () => {
        window.focus();
      });
    };

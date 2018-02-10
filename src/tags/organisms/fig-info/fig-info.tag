fig-info
  .info-inner
    .info-title { tagTitle } - { tagSubTitle }
    .code-inner
      p Source
      pre
        code.html(ref="template")
    .opts-inner
      p opts
      table
        thead
          tr
            th(width="15%") Name
            th(width="15%") Type
            th(width="70%") Value
        tbody
          tr(each="{ item , i in figure._opts }")
            td(width="15%") { i }
            td(width="15%") { typeof item }
            td(width="70%")
              pre
                code.json(ref="opts-{ i }") { getOptsCode(i, item) }

  style(type="scss").
    :scope {
      display: block;
      height: 100%;
      background: #fff;
      border: 1px solid #c1c1c1;
    }

    .info-title {
      padding: 8px 0;
      font-size: 2.4rem;
      border-bottom: 1px solid #eee;
    }

    .info-inner {
      width: 80%;
      margin: 10% auto;
      background: #fff;
    }

    .code-inner {
      width: 100%;
      margin: 20px auto;
      font-size: 1.4rem;

      p {
        padding: 8px 0;
        margin-bottom: 16px;
        font-size: 2rem;
        border-bottom: 1px solid #eee;
      }
    }

    .opts-inner {
      width: 100%;
      margin: 20px auto;
      font-size: 1.4rem;

      p {
        padding: 8px 0;
        margin-bottom: 16px;
        font-size: 2rem;
        border-bottom: 1px solid #eee;
      }

      table {
        width: 100%;
        font-size: 18px;

        th, td {
          padding: 8px;
          border: 1px solid #c1c1c1;
        }
      }
    }

  script.
    import { ACTIONS, GETTERS } from '../../../common/constant';
    import hljs from 'highlight.js';
    let store = this.riotx.get();

    this.on('before-mount', () => {
      // Update active tag
      this.riotxChange(store, ACTIONS.UPDATED_ACTIVE_TAG, (state, store) => {
        this.tagTitle = store.getter(GETTERS.TAG_TITLE);
        this.tagSubTitle = store.getter(GETTERS.TAG_SUBTITLE);
        this.figure = store.getter(GETTERS.FIGURE);
        this.refs['template'].innerHTML = hljs.highlight('html', this.figure.template).value;
        this.update();
      });

      this.tagTitle = store.getter(GETTERS.TAG_TITLE);
      this.tagSubTitle = store.getter(GETTERS.TAG_SUBTITLE);
      this.figure = store.getter(GETTERS.FIGURE);
    });

    this.on('mount', () => {
      hljs.initHighlighting();
      this.refs['template'].innerHTML = hljs.highlight('html', this.figure.template).value;
      this.update();
    });

    this.getOptsCode = (i, item) => {
      this.refs[`opts-${ i }`].innerHTML = hljs.highlight('json', JSON.stringify(item, null, '  ')).value;
    };

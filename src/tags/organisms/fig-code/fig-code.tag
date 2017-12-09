fig-code
  .title
    i.material-icons.md-18 code
    span.title__text CODE
  .inner
    pre(each="{ item, i in codes }" hide="{ hilighted && i != activeTag }")
      code.html(ref="code-{ i }")

  style(type="scss").
    :scope {
      display: flex;
      flex-direction: column;
      height: 100%;
      border: 1px solid #c1c1c1;
    }

    .title {
      display: flex;
      align-items: center;
      padding: 10px;
      background-color: #fff;
      border-bottom: 1px solid #c1c1c1;

      i {
        font-size: 1.6rem;
      }

      .title__text {
        margin-left: 5px;
        font-size: 1.6rem;
      }
    }

    .inner {
      overflow: scroll;
      background-color: #fff;
    }

    pre {
      font-size: 1.4rem;
    }

    code {
      background-color: #fff !important;
    }

  script.
    import { ACTIONS, GETTERS } from '../../../common/constant';
    import hljs from 'highlight.js';
    let store = this.riotx.get();

    this.on('before-mount', () => {
      // Update active tag
      this.riotxChange(store, ACTIONS.UPDATED_ACTIVE_TAG, (state, store) => {
        this.activeTag = store.getter(GETTERS.ACTIVE_TAG);
        this.update();
      });

      this.codes = store.getter(GETTERS.CODES);
      this.activeTag = store.getter(GETTERS.ACTIVE_TAG);
      this.hilighted = false;
    });

    this.on('mount', () => {
      Object.keys(this.codes).forEach((k) => {
        this.refs[`code-${ k }`].innerHTML = this.codes[k];
      });

      hljs.initHighlighting();
      this.hilighted = true;
      this.update();
    });

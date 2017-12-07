fig-view
  .view-inner(ref="view-inner")
    ul.bg-color(if="{ bgColors.length }")
      li.bg-color__item(each="{ item, i in bgColors }" style="background-color: { item }" onclick="{ changeBgColor }")
    virtual(each="{ item, i in allTags }")
      iframe.view-frame(
        ref="{ item }"
        width="100%"
        sandbox="allow-scripts allow-same-origin"
        srcdoc="<script type=\"text/javascript\" src=\"{ bundleSrc }\"></script><{ item }></{ item }>"
        show="{ item == activeTag }"
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

    .bg-color {
      display: flex;
      padding: 8px;
      position: absolute;
      top: 0;
      right: 0;
      background-color: rgba(255, 255, 255, .8);
      box-shadow: 0 0 12px 0 #c1c1c1;
      border-radius: 0 0 0 2px;

      .bg-color__item {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        border: 1px solid #c1c1c1;
        border-radius: 2px;
        cursor: pointer;

        &:last-child {
          margin-right: 0;
        }
      }
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
        this.activeTag = store.getter(GETTERS.ACTIVE_TAG);
        this.update();
      });

      this.allTags = store.getter(GETTERS.TAGS);
      this.bgColors = store.getter(GETTERS.COLORS);
      this.activeTag = store.getter(GETTERS.ACTIVE_TAG);
      this.bundleSrc = store.getter(GETTERS.BUNDLE_SRC);
      this.bgIndex = 0;

      // change backgroundColor
      if (this.bgColors.length) {
        Mousetrap.bind(KEY_EVENTS.CHANGE_BG_COLOR, () => {
          this.bgIndex = (this.bgIndex + 1) % this.bgColors.length;
          this.refs['view-inner'].style.backgroundColor = this.bgColors[this.bgIndex];
        });
      }
    });

    /**
     * Change background-color
     * @param  {Object} e Event object
     * @return
     */
    this.changeBgColor = (e) => {
      this.bgIndex = e.item.i;
      this.refs['view-inner'].style.backgroundColor = this.bgColors[e.item.i];
    };

    /**
     * Callback at loaded
     * @param  {Object} e Event object
     * @return
     */
    this.loadedCallback = (e) => {
      let iframe = this.refs[e.item.item];
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

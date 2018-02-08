fig-app
  .app-inner
    .app-left(show="{ isShowTree }")
      fig-tree
    .app-right
      fig-header
      .app-right-top
        fig-view

  style(type="scss").
    :scope {
      display: block;
      width: 100%;
      height: 100%;
      background-color: #f8f8f8;
    }

    .app-inner {
      display: flex;
      height: calc(100% - 5rem);
      height: 100%;

      .app-left {
        flex: 0 0 250px;
        min-width: 250px;
        border-right: 1px solid #c1c1c1;
        position: relative;
      }

      .app-right {
        flex: 1;
        display: flex;
        flex-direction: column;

        .app-right-top {
          flex: 1;
          padding: 16px;
        }

        .app-right-bottom {
          flex: 0;
          max-height: 50%;
          padding: 0 16px 16px;
        }
      }
    }

  script.
    import { KEY_EVENTS } from '../../../common/constant';
    import queryString from 'query-string';
    import Mousetrap from 'mousetrap';

    this.on('before-mount', () => {
      this.isShowTree = true;
      this.isShowCodes = true;

      // toggle tree
      Mousetrap.bind(KEY_EVENTS.TOGGLE_TREE, () => {
        this.isShowTree = !this.isShowTree;
        this.update();
      });
    });

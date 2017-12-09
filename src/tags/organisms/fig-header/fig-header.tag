fig-header
  i.material-icons.md-18 pageview
  span.header-text { activeTag }

  style(type="scss").
    :scope {
      display: flex;
      align-items: center;
      padding: 0 16px;
      border-bottom: 1px solid #c1c1c1;
      background-color: rgba(216, 27, 96 ,1);
      box-shadow: 0 0 16px 0 #c1c1c1;
      color: #fff;
    }

    i {
      font-size: 3rem;
      line-height: 5rem;
      margin-right: 8px;
    }

    .header-text {
      font-size: 3rem;
      line-height: 5rem;
    }

  script.
    import { ACTIONS, GETTERS } from '../../../common/constant';
    let store = this.riotx.get();

    this.on('before-mount', () => {
      // Update active tag
      this.riotxChange(store, ACTIONS.UPDATED_ACTIVE_TAG, (state, store) => {
        this.activeTag = store.getter(GETTERS.ACTIVE_TAG);
        this.update();
      });

      this.activeTag = store.getter(GETTERS.ACTIVE_TAG);
    });

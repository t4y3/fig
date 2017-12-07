fig-tree
  .title Fig
  form.search-form
    i.material-icons.md-18 search
    input.search-input(type="text" placeholder="my-app.tag" onkeyup="{ changeHandler }")
  ul.list
    li.list__item(
      each="{ item, i in displayTags }"
      onclick="{ clickHander }"
      class="{ list__item--active: item == activeTag }")
      p.list__item-text { item }

  style(type="scss").
    :scope {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: #fff;
    }

    .title {
      padding: 0 16px;
      margin-bottom: 16px;
      color: rgba(216, 27, 96 ,1);
      font-size: 3rem;
      font-weight: bold;
      line-height: 5rem;
      border-bottom: 1px solid #c1c1c1;
    }

    .search-form {
      display: flex;
      align-items: center;
      /*width: 100%;*/
      padding: 5px;
      margin: 0 16px 16px;
      background-color: #fff;
      box-shadow: 0 0 12px 0 #c1c1c1;

      i {
        margin-right: 5px;
        font-size: 1.8rem;
      }

      .search-input {
        flex: 1;
        font-size: 1.6rem;
        border: none;
        outline: none;
      }
    }

    .list {
      flex: 1;
      overflow: scroll;
    }

    .list__item {
      padding-left: 4px;
      font-size: 1.6rem;
      cursor: pointer;
      position: relative;

      &--active:after {
        content: "";
        display: block;
        width: 4px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(216, 27, 96 ,1);
      }

      &:hover {
        .list__item-text {
           background-color: rgba(216, 27, 96 ,1);
           color: #fff;
        }
      }

      .list__item-text {
         padding: 8px 8px;
         margin-left: 10px;
      }
    }

  script.
    import { ACTIONS, GETTERS, KEY_EVENTS } from '../../../common/constant';
    import Mousetrap from 'mousetrap';
    let store = this.riotx.get();

    this.on('before-mount', () => {
      // Update active tag
      this.riotxChange(store, ACTIONS.UPDATED_ACTIVE_TAG, (state, store) => {
        this.activeTag = store.getter(GETTERS.ACTIVE_TAG);
        location.hash = `#tag=${ this.activeTag }`;
        this.update();
      });

      this.allTags = store.getter(GETTERS.TAGS);
      this.displayTags = this.allTags;
      this.activeTag = store.getter(GETTERS.ACTIVE_TAG);

      // move focused tag
      Mousetrap.bind(KEY_EVENTS.MOVE_DOWN, () => {
        this.moveFocusedTag('down');
      });
      Mousetrap.bind(KEY_EVENTS.MOVE_UP, () => {
        this.moveFocusedTag('up');
      });
    });

    /**
     * Update actigve tag
     * @param  {Object} e Event object
     * @return
     */
    this.clickHander = (e) => {
      store.action(ACTIONS.UPDATE_ACTIVE_TAG, e.item.item);
    };

    /**
     * Update display tag
     * @param  {Object} e Event object
     * @return
     */
    this.changeHandler = (e) => {
      // TODO: 最適化
      let inActiveTag = false;
      let text = e.target.value;
      this.displayTags = [];
      for (let i = 0, len = this.allTags.length; i < len; i++) {
        if (this.allTags[i].indexOf(text) != -1) {
          this.displayTags.push(this.allTags[i]);
          if (this.allTags[i] == this.activeTag) {
            inActiveTag = true;
          }
        }
      }

      if (!inActiveTag) {
        this.displayTags.unshift(this.activeTag);
      }
    };

    /**
     * Move the focused tag
     * @param  {string} e Event object
     * @return
     */
    this.moveFocusedTag = (dir) => {
      let index = this.displayTags.indexOf(this.activeTag);
      let nextIndex = dir == 'up' ? index - 1 : index + 1;
      if (nextIndex < 0 || nextIndex >= this.displayTags.length) {
        return;
      }
      store.action(ACTIONS.UPDATE_ACTIVE_TAG, this.displayTags[nextIndex]);
    };

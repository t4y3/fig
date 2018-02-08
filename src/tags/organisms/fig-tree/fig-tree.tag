fig-tree
  .title Fig
  ul.list
    li.list__item(each="{ tag, i in displayTags }")
      p.tag-title(onclick="{ toggleAccordion }")
        | { tag.name }
        i.material-icons(if="{ !openFlags[i] }") keyboard_arrow_right
        i.material-icons(if="{ openFlags[i] }") keyboard_arrow_down
      .tag-list(show="{ openFlags[i] }")
          p.tag-list__item(
            data-parent="{ i }"
            each="{ item, j in tag.list }"
            onclick="{ clickHander }"
            class="{ tag-list__item--active: (j == childrenIndex && i == parentIndex) }")
            | { item.name }

  style(type="scss").
    :scope {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: #fff;
      user-select: none;
    }

    .title {
      padding: 0 16px;
      margin-bottom: 16px;
      color: #10263d;
      font-size: 3rem;
      font-weight: bold;
      line-height: 4rem;
      border-bottom: 1px solid #c1c1c1;
    }

    .list {
      flex: 1;
      overflow: scroll;
    }

    .list__item {
      cursor: pointer;
      position: relative;
      color: #10263d;

      .tag-title {
        display: flex;
        align-items: center;
        padding: 8px 8px;
        /* margin-left: 10px; */
        position: relative;
        font-size: 1.6rem;

        i {
          margin-left: auto;
          font-size: 18px;
        }
      }

      .tag-list {
        .tag-list__item {
          padding: 8px 8px;
          margin-left: 8px;
          position: relative;
          font-size: 1.4rem;

          &:hover {
             background-color: #10263d;
             color: #fff;
          }

          &--active:after {
            content: "";
            display: block;
            width: 4px;
            height: 100%;
            position: absolute;
            top: 0;
            left: -8px;
            background-color: #10263d;
          }
        }
      }
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

      this.parentIndex = store.getter(GETTERS.PARENT_INDEX);
      this.childrenIndex = store.getter(GETTERS.CHILDREN_INDEX);
      this.allTags = store.getter(GETTERS.FIGURES);
      this.displayTags = this.allTags;
      this.openFlags = {};
      for (let i = 0; i < this.displayTags.length; i++) {
        this.openFlags[i] = true;
      }

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
      store.action(ACTIONS.UPDATE_ACTIVE_TAG, e.target.dataset.parent, e.item.j);
    };

    /**
     * Toggle Accordion Flags
     * @param  {Object} e Event object
     * @return
     */
    this.toggleAccordion = (e) => {
      this.openFlags[e.item.i] = !this.openFlags[e.item.i];
    }

    /**
     * Move the focused tag
     * @param  {string} e Event object
     * @return
     */
    this.moveFocusedTag = (dir) => {
      let nextParentIndex = this.parentIndex;
      let nextChildrenIndex = dir === 'up' ? this.childrenIndex - 1 : this.childrenIndex + 1;

      if (nextChildrenIndex < 0) {
        if (this.parentIndex - 1 < 0) {
          return;
        }

        nextParentIndex = nextParentIndex - 1;
        nextChildrenIndex = this.displayTags[this.parentIndex - 1].list.length - 1;
      } else if (nextChildrenIndex > this.displayTags[this.parentIndex].list.length - 1) {
        if (this.parentIndex + 1 > this.displayTags.length - 1) {
          return;
        }

        nextParentIndex = nextParentIndex + 1;
        nextChildrenIndex = 0;
      }

      store.action(ACTIONS.UPDATE_ACTIVE_TAG, nextParentIndex, nextChildrenIndex);
      return;
    };

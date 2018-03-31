import { h, app } from "hyperapp"

const openDialog = () => {
  let dialog = document.getElementById('modal-shortcuts');
  dialog.showModal();
};

const closeDialog = () => {
  let dialog = document.getElementById('modal-shortcuts');
  dialog.close();
};

const FigHeader = ({ state }) => (
  <div className="fig-header">
    <i className="material-icons md-18">pageview</i>
    <span className="header-text">{ state.figures[state.pi].name } - { state.figures[state.pi].list[state.ci].name }</span>
    <div className="header-logo">
      <i className="header-logo__keybord material-icons" onclick={ openDialog }>keyboard</i>
    </div>
    <dialog id="modal-shortcuts" className="modal-shortcuts" onclick={ closeDialog }>
      <p className="modal-shortcuts__title">Keyboard Shortcuts</p>
      <p className="modal-shortcuts__item"><span>⌘ ⇧ ←</span>Toggle Tree View</p>
      <p className="modal-shortcuts__item"><span>⌘ ⇧ →</span>Toggle Info View</p>
      <p className="modal-shortcuts__item"><span>↑ or ↓</span>Change View Custom Tag</p>
      <p className="modal-shortcuts__item"><span>← or →</span>Toggle Accordion</p>
    </dialog>
  </div>
)

export default FigHeader;

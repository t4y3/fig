import { h, app } from "hyperapp"

const FigHeader = ({ figures, pindex, cindex }) => (
  <div className="fig-header">
    <i class="material-icons md-18">pageview</i>
    <span class="header-text">{ figures[pindex].name } - { figures[pindex].list[cindex].name }</span>
  </div>
)

export default FigHeader;

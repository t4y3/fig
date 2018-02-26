import { h, app } from "hyperapp"

const FigHeader = ({ state }) => (
  <div className="fig-header">
    <i class="material-icons md-18">pageview</i>
    <span class="header-text">{ state.figures[state.pi].name } - { state.figures[state.pi].list[state.ci].name }</span>
  </div>
)

export default FigHeader;

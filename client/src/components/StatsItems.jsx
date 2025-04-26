
import Wrapper from "../assets/wrappers/StatItem"

// eslint-disable-next-line react/prop-types
function StatsItems({count,title,icon,bcg,color}) {
  return (
    <Wrapper color={color} bcg={bcg}>
        <header>
            <span className="count">{count}</span>
            <span className="icon">{icon}</span>
        </header>
        <h5 className="title">{title}</h5>
    </Wrapper>
  )
}

export default StatsItems

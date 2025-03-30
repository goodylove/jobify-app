import { NavLink } from 'react-router-dom'
import links from '../utils/link'
import { UseDashboardContext } from '../pages/DashboardLayout'

// eslint-disable-next-line
function Navlinks({isBigSidebar}) {
      const {toggleNavBar} =  UseDashboardContext()
    
  return (
  <div className="nav-links">
          {links.map((link,index)=>{
            const {text,icon,path} = link
            return (
              <NavLink to={path} key={index} className="nav-link" end onClick={ isBigSidebar ? null :toggleNavBar}>
                <span className="icon">{icon}</span>
                {text}
              </NavLink>
            )
          })}
        </div>
  )
}

export default Navlinks

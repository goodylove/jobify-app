
import { FaTimes } from "react-icons/fa"
import  Wrapper from "../assets/wrappers/SmallSidebar"
import { UseDashboardContext } from "../pages/DashboardLayout"
import Logo from "./Logo"

import Navlinks from "./Navlinks"



function SmallSideBar() {
  const {showNavBar,toggleNavBar} =  UseDashboardContext()
  return (
    <Wrapper>
     <div className={ showNavBar ? "sidebar-container show-sidebar": "sidebar-container"}>

      <div className="content">
        <button className="close-btn" onClick={toggleNavBar}>
          <FaTimes/>
        </button>
        <header>
          <Logo/>
        </header>
        <Navlinks/>
        
      </div>
      
       </div>
    </Wrapper>
  )
}

export default SmallSideBar

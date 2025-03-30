import  Wrapper from "../assets/wrappers/BigSidebar"
import { UseDashboardContext } from "../pages/DashboardLayout"
import Logo from "./Logo"
import Navlinks from "./Navlinks"

function BigSideBar() {
    const {showNavBar} =  UseDashboardContext()
  
  return (
    <Wrapper>
      <div className={ showNavBar ? "sidebar-container  ": "sidebar-container show-sidebar"}>
        <div className="content">
          <header>
            <Logo/>
          </header>
          <Navlinks isBigSidebar/>
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSideBar

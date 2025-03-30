import { FaAlignLeft } from "react-icons/fa";

import Wrapper from "../assets/wrappers/Navbar";
import LogoutContainer from "./LogoutContainer";
import Logo from "./Logo";
import { UseDashboardContext } from "../pages/DashboardLayout";
import ThemeToggle from "./ThemeToggle";

function NavBar() {
  const { toggleNavBar } = UseDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleNavBar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">Dashboard</h4>
        </div>
        <div>
          <div className="btn-container">
            <ThemeToggle/>
            <LogoutContainer />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default NavBar;

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";


import Wrapper from "../assets/wrappers/ThemeToggle";
import { UseDashboardContext } from "../pages/DashboardLayout";

function ThemeToggle() {
    const {toggleDark,toggleDarkMode,}=UseDashboardContext()
  return (
    <Wrapper className='toggle-icon' onClick={toggleDarkMode}>
        {toggleDark ? <BsFillSunFill/> : <BsFillMoonFill/>}
      
    </Wrapper>
  )
}

export default ThemeToggle

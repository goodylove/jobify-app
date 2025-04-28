import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
import { UseDashboardContext } from "../pages/DashboardLayout";


const LogoutContainer = () => {
    const {handleLogoutUser,user }= UseDashboardContext()
    const [showLogout,setShowLogout] = useState(false)

   
  return (
    <Wrapper>
        <button type="button" className="btn logout-btn" >
          {user?.avatar ? <img src={user?.avatar} className="img" alt='avatar'/> :  <FaUserCircle /> }
           
            <span>{user?.name || "Goody"}</span>
            <FaCaretDown onClick={()=>setShowLogout(!showLogout)} />

        </button>
        <div className={showLogout ? "dropdown show-dropdown" : "dropdown"} >

        <button type="button" className="dropdown-btn" 
       onClick={handleLogoutUser} >logout</button>
        </div>
      
    </Wrapper>
  )
}

export default LogoutContainer

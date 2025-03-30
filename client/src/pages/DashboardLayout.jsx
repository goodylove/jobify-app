import { Outlet } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard"
import { BigSidebar, NavBar, SmallSidebar } from "../components"
import { createContext,useState,useContext } from "react"

const DashboardContext = createContext()

function checkDefaultTheme(){
  const toggleDark =  localStorage.getItem("darkTheme")=== 'true'
  document.body.classList.toggle("dark-theme",toggleDark)
  return toggleDark

}

function DashboardLayout() {
  const [showNavBar, setShowNavBar] = useState(false)
  const [toggleDark, setToggleDark] = useState(checkDefaultTheme)
  const [user, setUser] = useState({name: 'user'})


  const toggleNavBar =()=>{
    setShowNavBar(!showNavBar)
    setUser(null)
  }

  const toggleDarkMode = ()=>{
   const newDarkTheme = !toggleDark
    setToggleDark(newDarkTheme)
    document.body.classList.toggle("dark-theme",newDarkTheme)
    localStorage.setItem("darkTheme",newDarkTheme)
    setUser(null)
  }

function handleLogoutUser (){
    console.log("logout")
  }


  return (
    <DashboardContext.Provider value={{user,showNavBar,toggleNavBar,toggleDark,toggleDarkMode,setToggleDark,handleLogoutUser}}>
    <Wrapper>
      <main className="dashboard">

        <SmallSidebar/>
        <BigSidebar/>
        <div>
          <NavBar/>
          <div className="dashboard-page">

         <Outlet/>
          </div>
        </div>
      </main>
    </Wrapper>
    </DashboardContext.Provider>
  )
}


export const UseDashboardContext = ()=>{
  const context =  useContext(DashboardContext)
  if(context === undefined){
    console.log(" dashboard context is undefined")
    return 
  } 
  return context
}

export default DashboardLayout

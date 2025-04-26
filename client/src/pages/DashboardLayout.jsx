import { Outlet, redirect, useLoaderData ,useNavigate} from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard"
import { BigSidebar, NavBar, SmallSidebar } from "../components"
import { createContext,useState,useContext } from "react"
import customFetch from "../utils/customFetch"
import { toast } from "react-toastify"


export const loader = async()=>{
  try {
    const {data} = await customFetch.get('/users/current-user')
    return data
    
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    return redirect('/')
  }

}
const DashboardContext = createContext()

function checkDefaultTheme(){
  const toggleDark =  localStorage.getItem("darkTheme")=== 'true'
  document.body.classList.toggle("dark-theme",toggleDark)
  return toggleDark

}

function DashboardLayout() {
  const {user} = useLoaderData()
  const navigate = useNavigate()

  const [showNavBar, setShowNavBar] = useState(false)
  const [toggleDark, setToggleDark] = useState(checkDefaultTheme)
  // const [user, setUser] = useState({name: 'user'})


  const toggleNavBar =()=>{
    setShowNavBar(!showNavBar)
    // setUser(null)
  }

  const toggleDarkMode = ()=>{
   const newDarkTheme = !toggleDark
    setToggleDark(newDarkTheme)
    document.body.classList.toggle("dark-theme",newDarkTheme)
    localStorage.setItem("darkTheme",newDarkTheme)
    // setUser(null)
  }

 async function handleLogoutUser (){
  navigate("/")
  await customFetch.get('/auth/logout')
  toast.success('Successfully Logout')
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

         <Outlet context={{user}}/>
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

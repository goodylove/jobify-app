import { createBrowserRouter } from "react-router-dom";
import { AddJob, Admin, Alljobs, DashboardLayout, EditJob, Error, HomeLayout, Landing, Login, Profile, Register, Stats } from "../pages";
import  {action as registerAction }  from "../pages/Register"
import  {action as loginAction }  from "../pages/Login"
import {loader as dashboardLoader} from "../pages/DashboardLayout"
import {action as addJobAction } from "../pages/AddJob"
import {loader as allJobsLoader} from "../pages/Alljobs"
import {loader as editJobLoader} from "../pages/EditJob"
import {loader as adminLoader} from "../pages/Admin"
import {action as editJobAction} from "../pages/EditJob"
import {action as deleteJobAction} from "../pages/DeleteJob"

export const router = createBrowserRouter([
  { path: "/",
    errorElement:<Error/>,
    element: <HomeLayout />,

    children:[
       { index:true, element: <Landing /> },
       { path: "register",
         element: <Register />,

        action:registerAction
        },
       { path: "login",
        action:loginAction,
         element: <Login /> },
       { path: "dashboard", loader:dashboardLoader, element: <DashboardLayout />,
        children:[
          { index: true, element: <AddJob />,action:addJobAction },
          { path:"stats", element: <Stats /> },
          { path:"all-jobs", element: <Alljobs />, loader:allJobsLoader },
          { path:"profile", element: <Profile /> },
          { path:"admin", element: <Admin /> ,loader:adminLoader},
          { path:"edit-job/:id", element: <EditJob />, loader:editJobLoader,action:editJobAction },
          { path:"delete-job/:id", action:deleteJobAction },

          // Add more routes here as needed for the dashboard
        ]
        },
     ]
    
    },

     
  // { path: "/register", element: <Register /> },
  // { path: "/login", element: <Login /> },
]);

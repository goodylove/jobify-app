import { createBrowserRouter } from "react-router-dom";
import { AddJob, Admin, DashboardLayout, Error, HomeLayout, Landing, Login, Profile, Register, Stats } from "../pages";
import AllJobs from "../pages/Alljobs";
import  registerAction    from "../utils/fromsActions"

export const router = createBrowserRouter([
  { path: "/",
    errorElement:<Error/>,
    element: <HomeLayout />,

    children:[
       { index:true, element: <Landing /> },
       { path: "register", element: <Register />,

        action:registerAction
        },
       { path: "login", element: <Login /> },
       { path: "dashboard", element: <DashboardLayout />,
        children:[
          { index: true, element: <AddJob /> },
          { path:"stats", element: <Stats /> },
          { path:"all-jobs", element: <AllJobs /> },
          { path:"profile", element: <Profile /> },
          { path:"Admin ", element: <Admin /> },

          // Add more routes here as needed for the dashboard
        ]
        },
     ]
    
    },

     
  // { path: "/register", element: <Register /> },
  // { path: "/login", element: <Login /> },
]);

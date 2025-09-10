import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LeftNavbar from "./conponents/LeftNavbar"
import Home from "./conponents/Home"
import Search from "./conponents/Search"
import Explore from "./conponents/Explore"
import Reels from "./conponents/Reels"
import Messages from "./conponents/Messages"
import Notifications from "./conponents/Notifications"
import Create from "./conponents/Create"
import Profile from "./conponents/Profile"


function App() {
  const router=createBrowserRouter([
{
  path:"/",
  element: <div><LeftNavbar><Home/></LeftNavbar></div>
},
{
  path:"/Search",
  element: <div><LeftNavbar><Search></Search><Home/></LeftNavbar></div>
},

{
  path:"/Explore",
  element: <div><LeftNavbar><Explore/></LeftNavbar></div>
},
{
  path:"/Reels",
  element: <div><LeftNavbar><Reels/></LeftNavbar></div>
},
{
  path:"/Messages",
  element: <div><LeftNavbar><Messages/></LeftNavbar></div>

},
{
  path:"/Notifications",
  element: <div><LeftNavbar><Notifications/></LeftNavbar></div>
},
{
  path:"/Create",
  element: <div><LeftNavbar><Create/></LeftNavbar></div>
},
{
  path:"/Profile",
  element: <div><LeftNavbar><Profile/></LeftNavbar></div>
},

  ])



  return (
    <div>
  
   <RouterProvider router={router} />

   
   </div>
   
  )
}

export default App
import { navItems } from "@/assets/data"
import { Link } from "react-router-dom"



function DownNavBar() {
  return (
    <div>

        <div className="flex justify-between px-2 py-1 md:hidden fixed bottom-0.5 bg-white w-full">
{navItems.map((item, index) => (
    

        <Link to={item.href} key={index} className=" px-2 py-1 gap-2  hover:bg-neutral-300 rounded ">
        
            <item.icon/>
        
        </Link> 
        ))} 
        </div>
    </div>
  )
}

export default DownNavBar
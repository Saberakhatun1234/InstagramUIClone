import { navItems } from "@/assets/data"
import { ComponentIcon, MenuIcon } from "lucide-react"
import { Link } from "react-router-dom"
type children={
  children:React.ReactNode;
}

function LeftNavbar({children}:children) {


  return (
    <div>
    <div className="relative gap-5 hidden  md:block">
<div className="min-h-screen flex flex-col justify-between shadow-2xl border-r pr-4 pl-2 fixed top-0">
<div className="px-12 py-2 font-insta text-3xl font-bold ">Instagram</div>
<div>
      {
        navItems.map((item, index) => (
            <Link to={item.href} key={index} className="flex px-4 py-2 gap-2  hover:bg-neutral-300 rounded ">
                <item.icon/>
                {
                    item.label
                }
            </Link>
        ))
      }
      </div>
      <div className="space-y-4 mb-2 py-2">
        <p className="flex px-4"><MenuIcon/>More</p>
        <p className="flex px-4"><ComponentIcon/>Also from Meta</p>
      </div>
      </div>
    </div>
    <main className="min-h-screen ">
  <div  className="md:w-1/2 w-full px-4 mx-auto  py-3">
    {children}
  </div>
</main>

    </div>
  )
}

export default LeftNavbar
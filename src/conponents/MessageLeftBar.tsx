import { ChevronDown, SearchIcon, SquarePen } from "lucide-react"

function MessageLeftBar() {
  return (
    <div className="max-w-[350px] mx-auto  min-h-screen ">
        <hr className="fixed"/>
        <hr />
        
        <div className="">
            <span className="flex justify-between">
            <p className="flex gap-2 justify-center items-center"><span className="font-extrabold font-noti">User_Name_1092</span><ChevronDown size={14}/>
</p> <SquarePen className=""/></span>
            <div className="relative">
                <label htmlFor=""><SearchIcon className="absolute inset-y-2 left-4 text-neutral-400 size-4 text-center"/></label>
            <input type="text" placeholder="Search" className="bg-slate-100 rounded px-10 py-0.5" /> 
            </div>
        </div>
    </div>
  )
}

export default MessageLeftBar
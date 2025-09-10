import { userStories } from "@/assets/data"
import {  HeartIcon, SearchIcon } from "lucide-react"

function Stories() {
  return (

    <div>
      <div className="flex justify-between px-4 py-2 md:hidden">
        <span className="text-3xl font-insta  ">Instagram</span>
        <div className="relative flex items-center gap-2">
          
          <label htmlFor=""> <SearchIcon className="absolute inset-y-3 left-4 text-neutral-400 size-5 "/></label>
          <input type="text" placeholder="Search" className="bg-slate-100 rounded px-8 py-2" />  
        <HeartIcon />
        </div>

      </div>
    <div className="relative">
      <div className="flex overflow-x-scroll 
                      [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] 
                      gap-4 scroll-smooth px-2">

                        
        {userStories.map((user, index) => (
          <div key={index} className="flex flex-col items-center ">
            {/* Gradient wrapper */}
            <div className="p-[3px] rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-400">
              <img
                src={user.img}
                alt={user.username}
                className=" rounded-full  object-cover border-2 border-white"
              />
            </div>
            <span className="text-xs mt-1 truncate w-16 text-center ">
              {user.username}
            </span>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Stories

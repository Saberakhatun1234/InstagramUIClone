import { userStories } from "@/assets/data"

function MessageMessage() {
  return (
    <div><div className="relative">
        <div></div>
          <div className="flex flex-col overflow-x-scroll gap-4 scroll-smooth px-2
                          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            
            {userStories.map((user, index) => (
              <div key={index} className="flex  items-center min-w-[72px] relative">
    
                {/* User Image */}
                <div className="relative p-[2px] rounded-full bg-white">
                  <img
                    src={user.img}
                    alt={user.username}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white"
                  />
    
                 
                </div>
    
                {/* Username */}
                <div>
                <span className="text-xs mt-2 truncate w-16 text-center block">
                  {user.username}
                </span>
                <span className="block text-xs mt-2 truncate w-full text-center text-neutral-500">user:last messages .1d</span>
                </div>
              </div>
            ))}
          </div>
        </div></div>
  )
}

export default MessageMessage
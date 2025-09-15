import { userStories } from "@/assets/data";

function MessageUser() {
  return (
    
    <div className="relative">
      <div className="flex overflow-x-scroll gap-4 scroll-smooth px-2
                      [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        
        {userStories.map((user, index) => (
          <div key={index} className="flex flex-col items-center min-w-[72px] relative">

            {/* User Image */}
            <div className="relative p-[2px] rounded-full bg-white">
              <img
                src={user.img}
                alt={user.username}
                className="w-14 h-14 rounded-full object-cover border-2 border-white"
              />

              {/* Note positioned over the top edge of the image */}
              <span className="absolute top-1 left-1/2 -translate-x-10/12 -translate-y-1/2 text-[10px]  bg-white rounded-full px-2 py-1 tetx-nutral-500">
                note..
              </span>
            </div>

            {/* Username */}
            <span className="text-xs mt-2 truncate w-16 text-center text-neutral-500">
              {user.username}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-between px-4 py-2">
        <p className="text-xs font-extrabold">Message</p>
        <p className="text-xs text-neutral-400">Request</p>
      </div>
    </div>
    
  );
}

export default MessageUser;

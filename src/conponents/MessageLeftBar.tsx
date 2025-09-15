import { ChevronDown, SearchIcon, SquarePen } from "lucide-react";

import MessageUser from "./MessageUser";


function MessageLeftBar() {
  return (
    <div className="relative">
      <div className=" ">
      {/* Header: Username + Icon */}
        <div className="flex justify-between items-center mb-4 ">
          <p className="flex items-center gap-2 font-extrabold font-noti text-lg">
            User_Name_1092
            <ChevronDown size={20} />
          </p>
          <SquarePen size={20} />
        </div>

        {/* Search Input */}
        <div className="relative mb-4">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-slate-100 rounded-full px-10 py-2 focus:outline-none"
          />
        </div>
       <MessageUser/>
   
         </div>
      </div>
   
    
  );
}

export default MessageLeftBar;

import { notification} from "@/assets/data"
import DownNavBar from "./DownNavBar"
import { MessageCircle } from "lucide-react"

function Notifications() {
  return (
    <div>

      <div className="min-h-screen text-center justify-center flex flex-col gap-2 ">
      <p className="text-3xl font-noti font-bold text-center border-b-2  py-3">Notifications</p>
        <div className="flex items-center gap-8 border-b-2">
      <div className="relative  py-3"><img src="https://placehold.co/40x40" alt="" className="rounded-full shadow" />
          <img src="https://placehold.co/40x40" alt=""  className="rounded-full absolute top-4 left-4 shadow-xl"/>
      
      </div>
      <div>
        <p className="font-bold text-sm">Follow requests</p>
        <p className="text-sm text-slate-500">user_name_11+2 others</p>
      </div>
      </div>
<div className="px-4 py-2">
  <p className="text-sm font-bold text-left">This Week</p>
{
  notification.map((user,index)=>(
    <div key={index} >
      <div className="flex items-center gap-2">
        <img src={user.img} alt={user.username} className="rounded-full  object-cover border-2 border-white" />
        <p className="text-sm "><span className="font-bold">{user.username}</span> <span className="font-thin">{user.action} </span> <span className="font-thin text-slate-500">{user.time}</span> </p>
      </div>

    </div>
  ))
}
</div>
</div>
<div className="flex  justify-between bg-white w-60 px-2 py-1 rounded-3xl   fixed bottom-4 right-4 shadow-lg">
  <div className="flex items-center gap-2 px-4 py-2">
  <MessageCircle/>
  <p>Messages</p>
  </div>
  <img src="https://placehold.co/40x40" alt="" className="rounded-full" />
</div>

 <DownNavBar/>
    </div>
  )
}

export default Notifications
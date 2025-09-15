import DownNavBar from "./DownNavBar"
import MessageLeftBar from "./MessageLeftBar"
import MessageMessage from "./MessageMessage"

function Messages() {
  return (
    <div className="relative">
    <div className="max-w-[350px] mx-auto bg-gray-300 min-h-screen " >
       {/* Left fixed border */}
      <div className="fixed top-0 left-[calc(50%-175px)] w-[2px] h-full bg-gray-100 z-50" />
      {/* Right fixed border */}
      <div className="fixed top-0 left-[calc(50%+175px)] w-[2px] h-full bg-gray-100 z-50 " />
      <div className="bg-white px-4 py-4 min-h-screen  ">
      <div className="">
      <MessageLeftBar/>
      </div>
      <div>
        <MessageMessage/>
        {/* Placeholder for Messages */}
        <div>
          <p className="text-center text-gray-500 mt-10">No messages yet</p>
        </div>
      </div>
      </div>
   </div>

<DownNavBar/>
    </div>
  )
}

export default Messages
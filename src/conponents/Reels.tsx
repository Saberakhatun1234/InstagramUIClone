
import { MessageCircle } from "lucide-react"
import DownNavBar from "./DownNavBar"
import { videoItems } from "@/assets/data"
function Reels() {
  return (
    <div>
     
      {videoItems.map((item, index) => (
        <div className="min-h-screen max-w-[251px] mx-auto">
        <div className="md:w-1/2 w-full px-4 mx-auto  py-3 flex gap-2" key={index}>
        <iframe  src={videoItems[index].video} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-2xl w-[250px] h-screen mx-auto md:w-[250px] md:h-[450]" ></iframe>
     <div className="flex flex-col justify-end gap-4  pb-4">
      <p><item.likebtn/><span>Like</span></p>
       <p><item.messagebtn/> <span>Like</span></p>
        <p><item.sendbtn/></p>
        <p><item.bookbtn/></p>
        <p><item.ellipsisbtn/></p>
        <p><item.userbtn/></p>
     </div>
     </div>
     </div>
      ))}
    
      <div className="hidden md:block">
      <div className="flex  justify-between bg-white w-60 px-2 py-1 rounded-3xl   fixed bottom-4 right-4 shadow-lg  ">
  <div className="flex items-center gap-2 px-4 py-2">
  <MessageCircle/>
  <p>Messages</p>
  </div>
  <img src="https://placehold.co/40x40" alt="" className="rounded-full" />
</div>
</div>
      
       <DownNavBar/>
    </div>
  )
}

export default Reels
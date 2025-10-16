import { Badge, Bookmark, Grid3X3,  MessageCircle,  SquareUser, TvMinimal ,} from "lucide-react"
import { userStories } from "@/assets/data"
import DownNavBar from "./DownNavBar"



function Profile() {
  const userPost=[
    {
      img:"https://placehold.co/300x400"
    },
    {
      img:"https://placehold.co/300x400"
    },
    {
      img:"https://placehold.co/300x400"
    },  
    {
      img:"https://placehold.co/300x400"
    },
      {
      img:"https://placehold.co/300x400"
    },
    {
      img:"https://placehold.co/300x400"
    },
    {
      img:"https://placehold.co/300x400"
    },  
    {
      img:"https://placehold.co/300x400"
    },
  ]
  return (
    <div className="pt-5 w-full">
      <div className="flex gap-10">
        <div className="relative">
        <img src="https://placehold.co/200x200" alt="userimg"  className="rounded-full object-cover"/></div>
        <div>
        <div className="flex gap-5 justify-center items-center">
          <h1 className="font-lato text-sm">_user_name_</h1>
          <p className="font-lato text-xs font-bold bg-gray-100 px-2 py-1 rounded">Edit profile</p>
          <p className="font-lato text-xs font-bold bg-gray-100 px-2 py-1 rounded">View archive</p>
          <Badge className="w-4 " />
          </div>
          <div className="flex gap-10 pt-5 text-xs">
          <p><span className="font-bold">165</span> <span className="text-neutral-500">posts</span></p>
          <p><span className="font-bold">168</span> <span className="text-neutral-500">followers</span></p>
          <p><span className="font-bold">66</span> <span className="text-neutral-500">following</span></p>
        </div>
        <div className="sm:hidden md:block mt-3">
          <h6 className=" text-xs font-bold">User Full Name</h6>
          <p className="text-xs">This is my bio . Lorem, ipsum dolor sit amet consectetur adipisicing elit. .</p>
          <div className="font-bold text-xs">www.userwebsite.com</div>
          <div className=" font-bold text-xs">Followed by user1, user2 and 10 others</div>
        </div>
        </div>
      </div>
      <div className="mt-10 mb-5">
       <div className="relative">
             <div className="flex overflow-x-scroll 
                             [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] 
                             gap-4 scroll-smooth px-2">
       
                               
               {userStories.map((user, index) => (
                 <div key={index} className="flex flex-col items-center ">
                   {/* Gradient wrapper */}
                   <div className="p-[1px] rounded-full border-3 border-gray-300">
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

               <div>
                <div className="grid grid-cols-4 justify-around">
                  <Grid3X3 className="inline-block w-8 ml-2"/>
                  <TvMinimal className="inline-block w-8 ml-2"/>
                  <Bookmark className="inline-block w-8 ml-2"/>
                  <SquareUser className="inline-block w-8 ml-2"/>
                </div>
                <div className="grid grid-cols-3 gap-1 ">
                 {userPost.map((post,index)=>(
                  <img key={index} src={post.img} alt="postimg" className=" object-cover"/>
                 ))}
                </div>
               </div>
               <div className="flex  justify-between bg-white w-60 px-2 py-1 rounded-3xl   fixed bottom-4 right-4 shadow-lg">
  <div className="flex items-center gap-2 px-4 py-2">
  <MessageCircle/>
  <p>Messages</p>
  
  <img src="https://placehold.co/40x40" alt="" className="rounded-full" />
</div>

 <DownNavBar/>
    </div>
    </div>
 
  )
}

export default Profile
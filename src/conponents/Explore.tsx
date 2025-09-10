import { explorePart } from "@/assets/data";
import DownNavBar from "./DownNavBar";
import { MessageCircle } from "lucide-react";

function Explore() {
  return (
    <div>
     
    <div className="grid grid-cols-3  gap-2">
      {explorePart.map((reels, idx0) => {
        const i1 = idx0 + 1; // convert to 1-based index
        const isTall = i1 % 10 === 3 || i1 % 10 === 6; // 3,6,13,16,23,26,...

        return (
          <div key={i1} className={isTall ? "row-span-2" : ""}>
            <img
              src={reels.img}
              alt={`Explore item ${i1}`}
              className="w-full h-full object-cover rounded"
            />
          </div>
        );
      })}
   
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
    </div>
  );
}

export default Explore;

import { notification } from "@/assets/data";
import { XIcon } from "lucide-react";
import { useState } from "react";

function Search() {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div className="fixed top-0 left-0 shadow min-h-screen bg-white border-l ml-12 border-gray-200 overflow-y-auto w-80 z-50">
      <div className="p-4">
        <div className="mb-4">
          <p className="text-2xl font-semibold">Search</p>
        </div>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full border bg-slate-100 px-4 py-1 rounded focus:outline-none"
          />
          <button type="button" title="Close" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 bg-gray-300 rounded-full p-1">
            <XIcon size={10} />
          </button>
        </div>

        <hr className="text-gray-300 w-full mt-4" />

        <div className="flex flex-col">
          {notification.map((user, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <img
                  src={user.img}
                  alt={user.username}
                  className="rounded-full object-cover border-2 border-white w-10 h-10"
                />
                <p className="text-sm">{user.username}</p>
              </div>

              <button type="button" title="Close" className=" rounded-full p-1">
                <XIcon size={10} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;

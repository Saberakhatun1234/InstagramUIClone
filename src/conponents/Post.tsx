import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { img } from "@/assets/data";
import { HeartIcon, MessageCircleIcon } from "lucide-react";
import { useState } from "react";

function Post() {
  // Store likes and "isLiked" state for each post
  const [likes, setLikes] = useState(img.map(post => post.userlike || 0));
  const [liked, setLiked] = useState(img.map(() => false));

  const handleLike = (index: number) => {
    setLikes((prevLikes) =>
      prevLikes.map((like, i) =>
        i === index ? (liked[index] ? like - 1 : like + 1) : like
      )
    );

    setLiked((prevLiked) =>
      prevLiked.map((isLiked, i) => (i === index ? !isLiked : isLiked))
    );
  };

  return (
    <div className="mt-10 px-4">
      <div className="grid grid-cols-1 gap-4">
        {img.map((post, index) => (
          <Card key={index}>
            {/* Header */}
            <CardHeader className="flex items-center gap-2">
              <img
                src={post.img}
                alt="profile"
                className="rounded-full object-cover p-[2px] bg-gradient-to-bl from-pink-500 to-yellow-500"
              />
              <p className="font-medium">{post.username}</p>
            </CardHeader>

            {/* Post Image */}
            <CardContent>
              <img
                src={post.postimg}
                alt="post"
                className="rounded-lg w-full object-cover"
              />
            </CardContent>

            {/* Footer (Likes + Comments) */}
            <CardFooter>
              <div className="flex gap-1  ">
                <button
                  onClick={() => handleLike(index)}
                  className={`flex flex-col items-center gap-1 transition ${
                    liked[index] ? "text-red-500" : "text-gray-600"
                  }`}
                >
                  <HeartIcon
                    fill={liked[index] ? "red" : "none"}
                    stroke={liked[index] ? "red" : "currentColor"}
                  />
                  {likes[index]}
                </button>
                
                  <MessageCircleIcon />
              
              </div>
            </CardFooter>

            {/* Caption */}
            <div className="px-5 text-sm">
              <span className="font-semibold">{post.username} </span>
              {post.usercaption}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Post;

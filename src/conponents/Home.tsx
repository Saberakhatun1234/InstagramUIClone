import Stories from "./Stories"
import Post from "./Post"
import DownNavBar from "./DownNavBar"

function Home() {
  return (
    <div >
        <div>
            <Stories/>
            <Post/>
            <DownNavBar/>
        </div>


    </div>
  )
}

export default Home
import { useEffect,useState } from "react"
import PostCard from "../PostCard"
import axios from "axios";

export default function PostCardList() {
    const [postList,setPostList] = useState([]);

    useEffect(()=>{
        axios.get('https://dummyapi.io/data/v1/post', {
            headers: {
                'app-id': import.meta.env.VITE_APP_ID
            }
        })
        .then((res) => setPostList(res.data.data))
    },[]);

    return (
        (postList.length === 0)
          ? "loading posts ..."
          : postList.map((post) => (
              <PostCard
                key={post.id}
                authorFirstName={post.owner.firstName.substring(0, 1)}
                image={post.image}
                content={post.text}
              />
            ))
      );
}

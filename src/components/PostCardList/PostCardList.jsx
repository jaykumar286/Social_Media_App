import { useEffect,useContext } from "react"
import PostCard from "../PostCard"
import axios from "axios";
import PostsContext from "../../providers/PostsContext";

export default function PostCardList() {
    const {postList,setPostList} = useContext(PostsContext);

    useEffect(()=>{
        axios.get('https://dummyapi.io/data/v1/post', {
            headers: {
                'app-id': import.meta.env.VITE_APP_ID
            }
        })
        .then((res) => setPostList(res.data.data))
    },[postList]);

    return (
        (postList.length === 0)
          ? "loading posts ..."
          : postList.map((post) => (
              <PostCard
                key={post.id}
                authorFirstName={post.owner.firstName}
                image={post.image}
                content={post.text}
              />
            ))
      );
}

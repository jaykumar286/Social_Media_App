import NavBar from "./NavBar/NavBar"
import MainContainer from "./MainContainer/MainContainer"
import Input from "./Input/Input"
import PostsContext from "../providers/PostsContext"
import { useState } from "react"

export default function SocialApp() {
  const [postList,setPostList] = useState([]);
  return (
    <div>
      <PostsContext.Provider value={{postList,setPostList}}>
        <NavBar/>
        <Input/>
        <MainContainer/>
      </PostsContext.Provider>
    </div>
  )
}

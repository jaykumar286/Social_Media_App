import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState,useContext } from 'react';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';
import PostsContext from "../../providers/PostsContext";

export default function Input() {
    const [text,setText] = useState("");
    const [imageURL,setImageURL] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const {postList,setPostList} = useContext(PostsContext);

    function handleSubmit(){
        setIsLoading(true)

        if(text=="" || imageURL==""){
            setIsLoading(false);
            return;
        }

        axios.post('https://dummyapi.io/data/v1/post/create', {
            owner: "60d0fe4f5311236168a109ca",
            text: text,
            image: imageURL,
            likes:0,
            publishDate: new Date()
        },
        {
            headers: {
                'app-id': import.meta.env.VITE_APP_ID
            }
        })
        .then((res) => {
            setIsLoading(false);
            setText("");
            setImageURL("");
            setPostList([res.data,...postList])
        })
    };

    return (
        <Box
        sx={{mt:'1rem'}}
    >
        <TextField sx={{mb:'1rem'}} fullWidth label="Your next Post" id="fullWidth" value={text} onChange={(e)=>setText(e.target.value)} />
        <TextField sx={{mb:'1rem'}}fullWidth label="Image for your post" id="fullWidth" value={imageURL} onChange={(e)=>setImageURL(e.target.value)}/>
        {
            isLoading?<LoadingButton loading variant="outlined">Submit</LoadingButton>: <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        }
    </Box>
    )
}

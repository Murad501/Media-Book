import React, { useEffect, useState } from 'react';
import PostStyle from '../../Components/PostStyle/PostStyle';

const Media = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            {
                posts.map((post, index)=><PostStyle key={index} post={post}></PostStyle>)
            }
        </div>
    );
};

export default Media;
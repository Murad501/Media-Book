import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import PostStyle from "../../../Components/PostStyle/PostStyle";
import { LoadingContext } from "../../../Context/LoadingContext";

const TopPost = () => {
  const {setIsLoading} = useContext(LoadingContext)
  const { data: posts = [], isFetching } = useQuery({
    queryKey: ["top-post"],
    queryFn: () =>
      fetch(`https://server-media-book.vercel.app/top-post`).then((res) => res.json()),
  });
  if(isFetching){
    setIsLoading(true)
  }
  if(!isFetching){
    setIsLoading(false)
  }
  return (
    <div>
      {posts.map((post) => (
        <PostStyle key={post._id} post={post}></PostStyle>
      ))}
    </div>
  );
};

export default TopPost;

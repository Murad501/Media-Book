import React from "react";
import { useQuery } from "@tanstack/react-query";
import PostStyle from "../../../Components/PostStyle/PostStyle";

const TopPost = () => {
  const { data: posts = [] } = useQuery({
    queryKey: ["top-post"],
    queryFn: () =>
      fetch(`http://localhost:5000/top-post`).then((res) => res.json()),
  });
  return (
    <div>
      {posts.map((post) => (
        <PostStyle key={post._id} post={post}></PostStyle>
      ))}
    </div>
  );
};

export default TopPost;

import React from "react";
import Post from "./Post/Post";
import TopPost from "./TopPost/TopPost";

const Home = () => {
  return (
    <div className="grid grid-cols-12 max-w-[1440px] mx-auto pxj-5">
      <div className="col-span-3">
        <h1>left side</h1>
      </div>
      <div className="col-span-6">
        <Post></Post>
        <TopPost></TopPost>
      </div>
      <div className="col-span-3">
        <h1>right side</h1>
      </div>
    </div>
  );
};

export default Home;

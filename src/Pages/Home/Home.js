import React from "react";
import Post from "./Post/Post";
import TopPost from "./TopPost/TopPost";

const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 max-w-[1440px] px-5 mx-auto">
      <div className="lg:col-span-3">
        <h1>left side</h1>
      </div>
      <div className="lg:col-span-6">
        <Post></Post>
        <TopPost></TopPost>
      </div>
      <div className="lg:col-span-3">
        <h1>right side</h1>
      </div>
    </div>
  );
};

export default Home;

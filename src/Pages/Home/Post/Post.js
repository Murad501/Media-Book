import React, { useState } from "react";
import ImageUpload from "./ImageUpload/ImageUpload";

const Post = () => {
  const [addPost, setAddPost] = useState(false);

  return (
    <div className="py-5 px-5 mt-10 shadow-md">
      <div
        className={`flex gap-1 items-center justify-center  ${
          addPost && "border-b"
        }`}
      >
        <label className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt="" />
          </div>
        </label>
        {!addPost && (
          <div
            onFocus={() => setAddPost(true)}
            className="form-control w-full"
          >
            <input
              type="text"
              placeholder="What's new, Murad?"
              className="input input-bordered border-primary placeholder-primary focus:outline-none w-full rounded-full py-2 h-auto"
            />
          </div>
        )}
        {addPost && (
          <div className="w-full">
            <div className="form-control w-full">
              <textarea
                placeholder="What's new, Murad?"
                className="textarea placeholder-primary m-1 text-justify focus:outline-none w-full py-2 h-auto"
              />
            </div>
          </div>
        )}
      </div>
      {addPost && (
        <>
          <ImageUpload></ImageUpload>
          <div className="flex gap-2 items-start justify-end my-3">
            <button
              onClick={() => setAddPost(false)}
              className="bg-white border border-primary text-primary px-3 py-[2px] rounded-sm hover:bg-primary hover:text-white transition-all duration-500"
            >
              Cancel
            </button>
            <button className="bg-primary border border-primary text-white px-3 py-[2px] rounded-sm hover:bg-white hover:text-primary transition-all duration-500">
              Post Update
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Post;

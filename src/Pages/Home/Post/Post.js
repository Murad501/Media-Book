import { format } from "date-fns";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaRadiation } from "react-icons/fa";
import { authContext } from "../../../Context/UserContext";
import ImageUpload from "./ImageUpload/ImageUpload";

const Post = () => {
  const [loading, setLoading] = useState(false);
  const [addPost, setAddPost] = useState(false);
  const [imgFile, setImgFile] = useState(null);
  const { user } = useContext(authContext);
  const imgbbApi = process.env.REACT_APP_ImgbbKey;

  const handlePost = (event) => {
    event.preventDefault();

    const addDate = new Date();
    const postDate = format(addDate, "PP");
    const description = event.target.description.value;
    setLoading(true);
    const post = {
      description,
      authorName: user.displayName,
      authorEmail: user.email,
      authorImage: user.photoURL,
      postTime: postDate,
      like: [],
      comments: [],
    };

    if (imgFile) {
      const image = imgFile.file;
      const formData = new FormData();
      formData.append("image", image);
      fetch(`https://api.imgbb.com/1/upload?key=${imgbbApi}`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.data.url) {
            post.photo = result.data.url;

            fetch("https://server-media-book.vercel.app/posts", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(post),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged) {
                  setAddPost(false);
                  setImgFile(null);
                  toast.success("Post Successfully Updated");
                  event.target.reset();
                  setLoading(false);
                }
              });
          }
        });
    } else {
      fetch("https://server-media-book.vercel.app/posts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(post),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setAddPost(false);
            setImgFile(null);
            toast.success("Post Successfully Updated");
            event.target.reset();
            setLoading(false);
          }
        });
    }
  };

  return (
    <>
      {user && (
        <div>
          {loading ? (
            <div className="mt-5 h-40 w-full flex justify-center items-center border">
              <button
                type="button"
                className="bg-indigo-500 flex items-center justify-center mx-auto my-5 text-white px-4 py-2 rounded-sm cursor-wait"
                disabled
              >
                <FaRadiation className="animate-spin h-5 w-5 mr-3"></FaRadiation>
                Posting...
              </button>
            </div>
          ) : (
            <form onSubmit={handlePost} className="py-5 px-5 mt-5 shadow-md">
              <div
                className={`flex gap-1 items-center justify-center  ${
                  addPost && "border-b"
                }`}
              >
                <label className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt="" />
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
                        name="description"
                        placeholder="What's new, Murad?"
                        className="textarea placeholder-primary m-1 text-justify focus:outline-none w-full py-2 h-auto"
                      />
                    </div>
                  </div>
                )}
              </div>
              {addPost && (
                <>
                  <ImageUpload setImgFile={setImgFile}></ImageUpload>
                  <div className="flex gap-2 items-start justify-end my-3">
                    <button
                      onClick={() => setAddPost(false)}
                      className="bg-white border border-primary text-primary px-3 py-[2px] rounded-sm hover:bg-primary hover:text-white transition-all duration-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-primary border border-primary text-white px-3 py-[2px] rounded-sm hover:bg-white hover:text-primary transition-all duration-500"
                    >
                      Post Update
                    </button>
                  </div>
                </>
              )}
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default Post;

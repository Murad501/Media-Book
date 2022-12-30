import { format } from "date-fns";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaHeart, FaRegComment, FaRegHeart, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/UserContext";

const PostStyle = ({ post }) => {
  const {
    photo,
    description,
    authorName,
    authorImage,
    postTime,
    _id,
    like,
    comments,
  } = post;

  const { user } = useContext(authContext);
  const [isLike, setIsLike] = useState(false);
  const [totalLike, setTotalLike] = useState(like);
  const [isTypingComment, setIsTypingComment] = useState(false);

  const handleLike = () => {
    setIsLike(!isLike);
    if (totalLike.includes(user?.email)) {
      const currentLike = totalLike.filter((lk) => lk !== user?.email);
      setTotalLike(currentLike);

      fetch(`https://server-media-book.vercel.app/likes?id=${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ totalLike: currentLike }),
      })
        .then((res) => res.json())
        .then(() => {
          toast.success(`You unlike ${authorName}'s Post`);
        });
    } else {
      const currentLike = [...totalLike, user?.email];
      setTotalLike(currentLike);

      fetch(`https://server-media-book.vercel.app/likes?id=${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ totalLike: currentLike }),
      })
        .then((res) => res.json())
        .then(() => {
          toast.success(`You liked ${authorName}'s Post`);
        });
    }
  };

  const handleAddComment = (event) => {
    event.preventDefault();
    const addDate = new Date();
    const commentTime = format(addDate, "PP");
    const description = event.target.description.value;
    setIsTypingComment(false);
    const comment = {
      postId: _id,
      description,
      commentAuthor: user.displayName,
      authorProfile: user.photoURL,
      commentTime,
    };

    fetch(`https://server-media-book.vercel.app/comments?id=${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then(() => {});
  };

  const handleCommentLike = () => {};

  return (
    <div className="p-5 shadow-md mt-5">
      <div className="flex items-center gap-2">
        <label className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={authorImage} alt="" />
          </div>
        </label>
        <div>
          <div className="flex items-center gap-1">
            <h4 className="text-[16px]">{authorName}</h4>
            <p className="text-sm">posted an update</p>
          </div>
          <p className="text-xs">{postTime}</p>
        </div>
      </div>
      <div className="md:mx-14 my-2">
        <div className="text-sm text-gray-500 mb-2">
          {description.length > 100 ? (
            <p>
              {description.slice(0, 100)}{" "}
              <Link className="text-primary font-semibold">see more...</Link>
            </p>
          ) : (
            <p>{description}</p>
          )}
        </div>
        <img className="max-h-96 rounded-xl mx-auto" src={photo} alt="" />
      </div>
      {/* like, comment, share */}
      <div className="border-y py-5 mt-5 md:mx-14 text-gray-500 flex items-center justify-around">
        <div
          onClick={handleLike}
          className={`flex items-center gap-2 cursor-pointer ${
            totalLike.includes(user?.email) && "text-blue-400 font-semibold"
          }`}
        >
          <span>
            {totalLike.includes(user?.email) ? (
              <FaHeart></FaHeart>
            ) : (
              <FaRegHeart></FaRegHeart>
            )}
          </span>
          <p className="hidden sm:block">{totalLike.includes(user?.email) ? "Liked" : "Like"}</p>
          {totalLike.length ? <p>{totalLike.length}</p> : ""}
        </div>
        <div
          onClick={() => setIsTypingComment(true)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <p className="hidden sm:block">Comment</p>
          <span>
            <FaRegComment></FaRegComment>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p className="hidden sm:block">Share</p>
          <span>
            <FaShare></FaShare>
          </span>
        </div>
      </div>
      {comments.length ? (
        <div>
          <p className="text-sm my-2 md:mx-14 font-semibold">Comments...</p>
        </div>
      ) : (
        ""
      )}
      {/* comment */}
      {isTypingComment && (
        <div className="md:mx-14 mb-5 mt-2">
          <form onSubmit={handleAddComment} className="w-full">
            <div className="form-control w-full">
              <textarea
                name="description"
                placeholder="Write a comment . . ."
                className="textarea textarea-bordered rounded-sm  focus:border-primary placeholder-primary m-1 text-justify focus:outline-none w-full py-2 h-auto"
              />
            </div>
            <div className="flex gap-2 items-start justify-end my-3">
              <button
                onClick={() => setIsTypingComment(false)}
                className="bg-white border border-primary text-primary px-3 py-[2px] rounded-sm hover:bg-primary hover:text-white transition-all duration-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-primary border border-primary text-white px-3 py-[2px] rounded-sm hover:bg-white hover:text-primary transition-all duration-500"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      )}

      {comments.length
        ? comments.map((comment, index) => (
            <>
              <div key={index} className="md:mx-14 mb-5 mt-2">
                <div className="border hover:shadow p-4">
                  <div className="flex gap-3">
                    <label className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                        <img src={comment.authorProfile} alt="" />
                      </div>
                    </label>
                    <div className="flex items-center gap-1">
                      <h4 className="text-[16px]">{comment.commentAuthor}</h4>
                    </div>
                  </div>
                  <div>
                    {comment.description.length > 100 ? (
                      <p className="text-sm text-gray-500 sm:ml-14 mb-2">
                        {comment.description.slice(0, 100)}{" "}
                        <Link className="text-primary font-semibold">
                          see more...
                        </Link>
                      </p>
                    ) : (
                      <p>{comment.description}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-5 m-2 text-gray-500 text-xs">
                  <div
                    onClick={handleCommentLike}
                    className="flex items-center gap-2"
                  >
                    <span>
                      <FaRegHeart></FaRegHeart>
                    </span>
                    <p>Like</p>
                  </div>
                  <p className="text-xs">{comment.commentTime}</p>
                </div>
              </div>
            </>
          ))
        : ""}
    </div>
  );
};

export default PostStyle;

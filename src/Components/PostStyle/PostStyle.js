import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import {
  FaHeart,
  FaRegComment,
  FaRegHeart,
  FaReply,
  FaShare,
} from "react-icons/fa";
import { authContext } from "../../Context/UserContext";

const PostStyle = ({ post }) => {
  const { photo, description, authorName, authorImage, postTime, _id, like } =
    post;
  const { user } = useContext(authContext);
  const [isLike, setIsLike] = useState(false);
  const [totalLike, setTotalLike] = useState(like);

  const handleLike = () => {
    setIsLike(!isLike);
    if (totalLike.includes(user?.email)) {
      console.log("hello from includes");
      const currentLike = totalLike.filter((lk) => lk !== user?.email);
      setTotalLike(currentLike);
      console.log("current like", currentLike);

      fetch(`http://localhost:5000/posts?id=${_id}`, {
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

      fetch(`http://localhost:5000/posts?id=${_id}`, {
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

    // console.log(totalLike);
    // fetch(`http://localhost:5000/post/id=${_id}`, {
    //   // method: "PATCH",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify( {totalLike: totalLike} ),
    // })
    // fetch(`http://localhost:5000/posts?id=${_id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({ totalLike: totalLike }),
    // })
    //   .then((res) => res.json())
    //   .then(() => {
    //     toast.success("Like Updated successfully");
    //   });
  };

  return (
    <div className="p-5 shadow-md mt-10">
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
        <p className="text-sm text-gray-500 mb-2">
          {description}
          <span className="text-primary font-semibold"> see more...</span>
        </p>
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
          <p>{totalLike.includes(user?.email) ? "Liked" : "Like"}</p>
          {totalLike.length ? <p>{totalLike.length}</p> : ""}
        </div>
        <div className="flex items-center gap-2">
          <p>Comment</p>
          <span>
            <FaRegComment></FaRegComment>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <p>Share</p>
          <span>
            <FaShare></FaShare>
          </span>
        </div>
      </div>
      <div>
        <p className="text-sm my-2 md:mx-14 font-semibold">Comments...</p>
      </div>
      {/* comment */}
      <div className="md:mx-14 mb-5 mt-2">
        <div className="border hover:shadow p-4">
          <div className="flex gap-3">
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={authorImage} alt="" />
              </div>
            </label>
            <div className="flex items-center gap-1">
              <h4 className="text-[16px]">Murad5501</h4>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 sm:ml-14 mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum, nam tenetur sed animi mollitia repellendus laboriosam
              placeat necessitatibus qui nobis omnis illo{" "}
              <span className="text-primary font-semibold">see more...</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 m-2 text-gray-500 text-xs">
          <div className="flex items-center gap-2">
            <span>
              <FaRegHeart></FaRegHeart>
            </span>
            <p>Like</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <FaReply></FaReply>
            </span>
            <p>Reply</p>
          </div>
          <p className="text-xs">2 days ago</p>
        </div>
      </div>
      <div className="md:mx-14 mb-5 mt-2">
        <div className="border hover:shadow p-4">
          <div className="flex gap-3">
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={authorImage} alt="" />
              </div>
            </label>
            <div className="flex items-center gap-1">
              <h4 className="text-[16px]">Murad5501</h4>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 sm:ml-14 mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum, nam tenetur sed animi mollitia repellendus laboriosam
              placeat necessitatibus qui nobis omnis illo{" "}
              <span className="text-primary font-semibold">see more...</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 m-2 text-gray-500 text-xs">
          <div className="flex items-center gap-2">
            <span>
              <FaRegHeart></FaRegHeart>
            </span>
            <p>Like</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <FaReply></FaReply>
            </span>
            <p>Reply</p>
          </div>
          <p className="text-xs">2 days ago</p>
        </div>
      </div>
      <div className="md:mx-14 mb-5 mt-2">
        <div className="border hover:shadow p-4">
          <div className="flex gap-3">
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={authorImage} alt="" />
              </div>
            </label>
            <div className="flex items-center gap-1">
              <h4 className="text-[16px]">Murad5501</h4>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 sm:ml-14 mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum, nam tenetur sed animi mollitia repellendus laboriosam
              placeat necessitatibus qui nobis omnis illo{" "}
              <span className="text-primary font-semibold">see more...</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 m-2 text-gray-500 text-xs">
          <div className="flex items-center gap-2">
            <span>
              <FaRegHeart></FaRegHeart>
            </span>
            <p>Like</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <FaReply></FaReply>
            </span>
            <p>Reply</p>
          </div>
          <p className="text-xs">2 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default PostStyle;

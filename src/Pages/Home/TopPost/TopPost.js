import React from "react";
import { FaRegComment, FaRegHeart, FaReply, FaShare } from "react-icons/fa";
import imgOne from "../../../Assets/imgOne.png";
import imgTwo from "../../../Assets/imgTwo.jpg";
import imgThree from "../../../Assets/imgThree.jpg";

const TopPost = () => {
  return (
    <div>
      <div className="p-5 shadow-md mt-10">
        <div className="flex items-center gap-2">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </label>
          <div>
            <div className="flex items-center gap-1">
              <h4 className="text-[16px]">Murad5501</h4>
              <p className="text-sm">posted an update</p>
            </div>
            <p className="text-xs">2 days ago</p>
          </div>
        </div>
        <div className="mx-14 my-2">
          <p className="text-sm text-gray-500 mb-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, nam tenetur sed animi mollitia repellendus laboriosam
            placeat necessitatibus qui nobis omnis illo{" "}
            <span className="text-primary font-semibold">see more...</span>
          </p>
          <img className="max-h-96 rounded-xl mx-auto" src={imgOne} alt="" />
        </div>
        {/* like, comment, share */}
        <div className="border-y py-5 mt-5 mx-14 text-gray-500 flex items-center justify-around">
          <div className="flex items-center gap-2">
            <span>
              <FaRegHeart></FaRegHeart>
            </span>
            <p>Like</p>
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
        {/* comment */}
        <div className="mx-14 mb-5 mt-2">
          <div className="border hover:shadow p-4">
            <div className="flex gap-3">
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="" />
                </div>
              </label>
              <div className="flex items-center gap-1">
                <h4 className="text-[16px]">Murad5501</h4>
                <p className="text-sm">commented</p>
                <p className="text-xs">2 days ago</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 ml-14 mb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum, nam tenetur sed animi mollitia repellendus
                laboriosam placeat necessitatibus qui nobis omnis illo{" "}
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
          </div>
        </div>
        <div className="mx-14 mb-5">
          <div className="border hover:shadow p-4">
            <div className="flex gap-3">
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="" />
                </div>
              </label>
              <div className="flex items-center gap-1">
                <h4 className="text-[16px]">Murad5501</h4>
                <p className="text-sm">commented</p>
                <p className="text-xs">2 days ago</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 ml-14 mb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum, nam tenetur sed animi mollitia repellendus
                laboriosam placeat necessitatibus qui nobis omnis illo{" "}
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
          </div>
        </div>
        <div className="mx-14 mb-5">
          <div className="border hover:shadow p-4">
            <div className="flex gap-3">
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="" />
                </div>
              </label>
              <div className="flex items-center gap-1">
                <h4 className="text-[16px]">Murad5501</h4>
                <p className="text-sm">commented</p>
                <p className="text-xs">2 days ago</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 ml-14 mb-2">nice</p>
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
          </div>
        </div>
      </div>
      <div className="p-5 shadow-md mt-10">
        <div className="flex items-center gap-2">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </label>
          <div>
            <div className="flex items-center gap-1">
              <h4 className="text-[16px]">Murad5501</h4>
              <p className="text-sm">posted an update</p>
            </div>
            <p className="text-xs">2 days ago</p>
          </div>
        </div>
        <div className="mx-14 my-2">
          <p className="text-sm text-gray-500 mb-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, nam tenetur sed animi mollitia repellendus laboriosam
            placeat necessitatibus qui nobis omnis illo{" "}
            <span className="text-primary font-semibold">see more...</span>
          </p>
          <img className="max-h-96 rounded-xl mx-auto" src={imgTwo} alt="" />
        </div>
        {/* like, comment, share */}
        <div className="border-y py-5 mt-5 mx-14 text-gray-500 flex items-center justify-around">
          <div className="flex items-center gap-2">
            <span>
              <FaRegHeart></FaRegHeart>
            </span>
            <p>Like</p>
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
        {/* comment */}
        <div className="mx-14 mb-5 mt-2">
          <div className="border hover:shadow p-4">
            <div className="flex gap-3">
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="" />
                </div>
              </label>
              <div className="flex items-center gap-1">
                <h4 className="text-[16px]">Murad5501</h4>
                <p className="text-sm">commented</p>
                <p className="text-xs">2 days ago</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 ml-14 mb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum, nam tenetur sed animi mollitia repellendus
                laboriosam placeat necessitatibus qui nobis omnis illo{" "}
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
          </div>
        </div>
        <div className="mx-14 mb-5">
          <div className="border hover:shadow p-4">
            <div className="flex gap-3">
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="" />
                </div>
              </label>
              <div className="flex items-center gap-1">
                <h4 className="text-[16px]">Murad5501</h4>
                <p className="text-sm">commented</p>
                <p className="text-xs">2 days ago</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 ml-14 mb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum, nam tenetur sed animi mollitia repellendus
                laboriosam placeat necessitatibus qui nobis omnis illo{" "}
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
          </div>
        </div>
        <div className="mx-14 mb-5">
          <div className="border hover:shadow p-4">
            <div className="flex gap-3">
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="" />
                </div>
              </label>
              <div className="flex items-center gap-1">
                <h4 className="text-[16px]">Murad5501</h4>
                <p className="text-sm">commented</p>
                <p className="text-xs">2 days ago</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 ml-14 mb-2">nice</p>
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
          </div>
        </div>
      </div>
      <div className="p-5 shadow-md mt-10">
        <div className="flex items-center gap-2">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="" />
            </div>
          </label>
          <div>
            <div className="flex items-center gap-1">
              <h4 className="text-[16px]">Murad5501</h4>
              <p className="text-sm">posted an update</p>
            </div>
            <p className="text-xs">2 days ago</p>
          </div>
        </div>
        <div className="mx-14 my-2">
          <p className="text-sm text-gray-500 mb-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, nam tenetur sed animi mollitia repellendus laboriosam
            placeat necessitatibus qui nobis omnis illo{" "}
            <span className="text-primary font-semibold">see more...</span>
          </p>
          <img className="max-h-96 rounded-xl mx-auto" src={imgThree} alt="" />
        </div>
        {/* like, comment, share */}
        <div className="border-y py-5 mt-5 mx-14 text-gray-500 flex items-center justify-around">
          <div className="flex items-center gap-2">
            <span>
              <FaRegHeart></FaRegHeart>
            </span>
            <p>Like</p>
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
        {/* comment */}
        <div className="mx-14 mb-5 mt-2">
          <div className="border hover:shadow p-4">
            <div className="flex gap-3">
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="" />
                </div>
              </label>
              <div className="flex items-center gap-1">
                <h4 className="text-[16px]">Murad5501</h4>
                <p className="text-sm">commented</p>
                <p className="text-xs">2 days ago</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 ml-14 mb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum, nam tenetur sed animi mollitia repellendus
                laboriosam placeat necessitatibus qui nobis omnis illo{" "}
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
          </div>
        </div>
        <div className="mx-14 mb-5">
          <div className="border hover:shadow p-4">
            <div className="flex gap-3">
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="" />
                </div>
              </label>
              <div className="flex items-center gap-1">
                <h4 className="text-[16px]">Murad5501</h4>
                <p className="text-sm">commented</p>
                <p className="text-xs">2 days ago</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 ml-14 mb-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum, nam tenetur sed animi mollitia repellendus
                laboriosam placeat necessitatibus qui nobis omnis illo{" "}
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
          </div>
        </div>
        <div className="mx-14 mb-5">
          <div className="border hover:shadow p-4">
            <div className="flex gap-3">
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="" />
                </div>
              </label>
              <div className="flex items-center gap-1">
                <h4 className="text-[16px]">Murad5501</h4>
                <p className="text-sm">commented</p>
                <p className="text-xs">2 days ago</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 ml-14 mb-2">nice</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPost;

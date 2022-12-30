import React from "react";

const ActivePeople = () => {
  return (
    <div className="flex items-center gap-3 my-5">
      <div className="avatar online">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/192/192/people" alt="" />
        </div>
      </div>
      <h2 className="text-lg">John Doe</h2>
    </div>
  );
};

export default ActivePeople;

import React from "react";
import ActivePeople from "../ActivePeople/ActivePeople";

const ActivePeopleCharts = () => {
  const peoples = [1, 1, 1, 1, 1, 1, 1];

  return (
    <div>
      <div className="card flex-shrink-0 w-full max-w-md mx-auto shadow-md rounded-sm my-5 py-5 px-2">
        <div>
          <h3 className="text-center text-xl font-semibold">Active People</h3>
          {peoples.map((people, index) => (
            <ActivePeople key={index}></ActivePeople>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivePeopleCharts;

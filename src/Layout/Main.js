import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-1 lg:grid-cols-12 max-w-[1440px] px-5 mx-auto">
        <div className="lg:col-span-3">
          <h1>left side</h1>
        </div>
        <div className="lg:col-span-6">
          <Outlet></Outlet>
        </div>
        <div className="lg:col-span-3">
          <h1>right side</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import ActivePeopleCharts from "../Components/ActivePeopleCharts/ActivePeopleCharts";
import Header from "../Components/Header/Header";
import LoginForm from "../Components/LoginForm/LoginForm";
import { authContext } from "../Context/UserContext";

const Main = () => {
  const { user } = useContext(authContext);
  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        <Header></Header>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-3 max-w-[1440px] px-5 mx-auto pb-5">
        <div className="lg:col-span-8">
          <Outlet></Outlet>
        </div>
        <div className="hidden relative lg:block lg:col-span-4 ml-2">
          <div className="sticky top-20">
          {user ? (
            <ActivePeopleCharts></ActivePeopleCharts>
          ) : (
            <LoginForm></LoginForm>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

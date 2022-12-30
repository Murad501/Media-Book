import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaComment,
  FaInfoCircle,
  FaRegImages,
} from "react-icons/fa";
import { authContext } from "../../Context/UserContext";

const Header = () => {
  const { user, Logout } = useContext(authContext);

  const handleLogOut = () => {
    Logout()
      .then(() => {})
      .catch(() => {});
  };

  console.log(user)

  const menu = (
    <ul className="flex items-center justify-evenly gap-4 md:gap-8 font-semibold">
      <li>
        <Link to="/media" className="flex items-center gap-2" title="Media">
          <span className="text-2xl sm:text-lg md:text-2xl lg:text-lg">
            <FaRegImages></FaRegImages>
          </span>
          <span className="hidden sm:block md:hidden lg:block">Media</span>
        </Link>
      </li>
      <li>
        <Link to="/message" className="flex items-center gap-2" title="Message">
          <span className="text-2xl sm:text-lg md:text-2xl lg:text-lg">
            <FaComment></FaComment>
          </span>
          <span className="hidden sm:block md:hidden lg:block">Message</span>
        </Link>
      </li>
      <li>
        <Link to="/about" className="flex items-center gap-2" title="About">
          <span className="text-2xl sm:text-lg md:text-2xl lg:text-lg">
            <FaInfoCircle></FaInfoCircle>
          </span>
          <span className="hidden sm:block md:hidden lg:block">About</span>
        </Link>
      </li>
      {!user && (
        <li>
          <Link to="/signin" title="Login">
            <p>Login</p>
          </Link>
        </li>
      )}
    </ul>
  );

  return (
    <div className="bg-primary">
      <div className="navbar gap-10 bg-primary max-w-[1440px] mx-auto text-white">
        <div className="flex-1">
          <Link
            to="/"
            className="text-3xl font-bold flex items-center gap-2 mr-5"
          >
            Media{" "}
            <span>
              <FaBookOpen></FaBookOpen>
            </span>
          </Link>
          <div className="form-control sm:w-5/6 lg:w-4/6 hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered border-primary placeholder-primary focus:outline-none w-full rounded-md py-2 h-auto"
            />
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="flex gap-8">
            <div className="hidden md:flex">{menu}</div>
            {user && (
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt="" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content rounded-sm w-52 bg-primary text-white"
                >
                  <li>
                    <Link className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link>Settings</Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden py-3 border-b bg-white text-primary">
        {menu}
      </div>
    </div>
  );
};

export default Header;

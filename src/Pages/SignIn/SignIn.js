import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/UserContext";

const SignIn = () => {
  const {loginUser} = useContext(authContext)
  const handleLoginUser = (event) => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    loginUser(email, password)
    .then(result => {
      toast.success('user login successfully')
      event.target.reset()
    })
    .catch(err => console.error(err))
  }
  return (
    <div>
      <div className="card flex-shrink-0 w-full max-w-md mx-auto border border-primary rounded-sm my-20 py-5">
        <div className="">
          <div className="text-3xl font-bold flex items-center justify-center">
            <span>
              <FaBookOpen></FaBookOpen>
            </span>
          </div>
          <h3 className="text-center text-xl font-semibold mt-2">Welcome</h3>
          <p className="text-center mt-5">Join millions of people online</p>
        </div>
        <form onSubmit={handleLoginUser} className="card-body px-5 pt-5 pb-0">
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered border-primary placeholder-primary rounded-sm"
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered border-primary placeholder-primary rounded-sm"
            />
            <div className="form-control flex-row my-2">
              <label className="label cursor-pointer gap-1">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary w-4 h-4 rounded-none"
                />
                <span className="text-primary text-sm">Remember me</span>
              </label>
              <label className="ml-auto">
                <Link to="/" className="text-xs ml-auto">
                  Forgot password?
                </Link>
              </label>
            </div>
          </div>
          <div className="form-control">
            <button type="submit" className="bg-primary text-white py-3 rounded-sm mb-2">
              Login in your account
            </button>
          </div>
          <p className="text-center">
            New here?{" "}
            <Link className="font-semibold" to="/signup">
              Sing Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

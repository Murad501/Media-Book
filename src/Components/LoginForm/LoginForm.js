import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/UserContext";

const LoginForm = () => {
  const { loginUser, googleLogin } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleLoginUser = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    loginUser(email, password)
      .then(() => {
        toast.success("user login successfully");
        event.target.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const userData = {
          userName: user.displayName,
          email: user.email,
          imgURL: user.photoURL,
        };
        fetch(`http://localhost:5000/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("user login successfully");
              navigate(from, { replace: true });
            }
          });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="card flex-shrink-0 w-full max-w-md mx-auto shadow-md rounded-sm my-5 py-5">
        <div>
          <h3 className="text-center text-xl font-semibold mt-2">
            Please Login
          </h3>
        </div>
        <form onSubmit={handleLoginUser} className="card-body px-1 pt-5 pb-0">
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
            <button
              type="submit"
              className="bg-primary text-white py-3 rounded-sm mb-2"
            >
              Login in your account
            </button>
          </div>
          <div className="divider before:bg-primary after:bg-primary my-0">
            OR
          </div>
          <button
            onClick={handleGoogleLogin}
            className="bg-primary text-white py-3 rounded-sm mb-2 flex items-center justify-center gap-2"
          >
            <FaGoogle></FaGoogle> Continue with Google
          </button>
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

export default LoginForm;

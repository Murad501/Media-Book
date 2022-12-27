import { updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/UserContext";

const SignUp = () => {
  const { createUser } = useContext(authContext);
  const handleLoginUser = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value

    createUser(email, password)
      .then((result) => {
        const user = result.user
        updateProfile(user, {
            displayName: name, 
          }).then(() => {
            toast.success('user create successfully')
            event.target.reset()
          }).catch((error) => {
            console.error(error)
          });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="py-20">
      <div className="card flex-shrink-0 w-full max-w-md mx-auto border border-primary rounded-sm py-5">
        <div>
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
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered border-primary placeholder-primary rounded-sm"
            />
          </div>
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
          </div>
          <div className="form-control">
            <input
              type="text"
              name="university"
              placeholder="university"
              className="input input-bordered border-primary placeholder-primary rounded-sm"
            />
          </div>
          <div className="form-control">
            <textarea
              name="address"
              placeholder="address"
              className="textarea textarea-primary focus:outline-none placeholder-primary rounded-sm"
            />
          </div>
          <div className="form-control">
            <label className="label cursor-pointer gap-1 justify-start">
              <input
                type="checkbox"
                className="checkbox checkbox-primary w-4 h-4 rounded-none"
              />
              <span className="text-primary text-sm">Remember me</span>
            </label>
          </div>
          <div className="form-control">
            <button
              type="submit"
              className="bg-primary text-white py-3 rounded-sm mb-2"
            >
              Signup in your account
            </button>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link className="font-semibold" to="/signin">
              Sing In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

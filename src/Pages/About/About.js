import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { LoadingContext } from "../../Context/LoadingContext";
import { authContext } from "../../Context/UserContext";

const About = () => {
  const { user } = useContext(authContext);
  const [isEditing, setIsEditing] = useState(false);
  const { setIsLoading } = useContext(LoadingContext);

  const { data: details = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch(`http://localhost:5000/user?email=${user?.email}`).then((res) =>
        res.json()
      ),
  });

  const handleEditProfile = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target;
    const name = form.name.value;

    const address = form.address.value;
    const university = form.university.value;

    const updateInfo = {
      userName: name,
      email: details.email,
      address,
      university,
      imgURL: details.imgURL,
    };

    fetch(`http://localhost:5000/user?id=${details?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          toast.success("Profile updated successfully");
          setIsLoading(false);
          setIsEditing(false);
          refetch();
        }
      });
  };

  return (
    <>
      {user?.email && (
        <div>
          {isEditing ? (
            <div className="w-full mx-auto  rounded-sm py-5 mt-5 shadow-md">
              <div className="avatar flex justify-center my-5">
                <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex justify-center">
                  <img src={details?.imgURL} alt="" />
                </div>
              </div>
              <div>
                <form
                  onSubmit={handleEditProfile}
                  className=" max-w-md mx-auto"
                >
                  <div className="form-control my-3 w-full">
                    <input
                      defaultValue={details.userName}
                      type="text"
                      name="name"
                      placeholder="name"
                      className="input input-bordered border-primary placeholder-primary rounded-sm"
                      required
                    />
                  </div>
                  <div className="form-control my-3 w-full">
                    <input
                      defaultValue={details.email}
                      readOnly
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered border-primary placeholder-primary rounded-sm"
                      required
                    />
                  </div>
                  <div className="form-control my-3 w-full">
                    <input
                      defaultValue={details.university}
                      type="text"
                      name="university"
                      placeholder="university"
                      className="input input-bordered border-primary placeholder-primary rounded-sm"
                      required
                    />
                  </div>
                  <div className="form-control my-3 w-full">
                    <textarea
                      defaultValue={details.address}
                      name="address"
                      placeholder="address"
                      className="textarea textarea-primary focus:outline-none placeholder-primary rounded-sm"
                      required
                    />
                  </div>
                  <div className="form-control flex-row justify-end items-center my-3 gap-2">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="bg-white border border-primary text-primary px-3 py-[2px] rounded-sm hover:bg-primary hover:text-white transition-all duration-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-primary border border-primary text-white px-3 py-[2px] rounded-sm hover:bg-white hover:text-primary transition-all duration-500"
                    >
                      Post Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="mt-5 shadow-md pt-2 pb-10 pl-5 relative">
              <div>
                <div className="avatar">
                  <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex justify-center">
                    <img src={details?.imgURL} alt="" />
                  </div>
                </div>
                <div className="mt-5">
                  <div>
                    <p>Name</p>
                    <h1 className="font-bold text-2xl">{details?.userName}</h1>
                  </div>
                  <div className="mt-2">
                    <p>Email</p>
                    <h1 className=" font-bold text-2xl">{details?.email}</h1>
                  </div>
                  {details?.university && (
                    <div className="mt-2">
                      <p>University</p>
                      <h1 className="font-bold text-2xl">
                        {details?.university}
                      </h1>
                    </div>
                  )}
                  {details?.address && (
                    <div className="mt-2">
                      <p>Address</p>
                      <h1 className=" font-bold text-2xl">
                        {details?.address}
                      </h1>
                    </div>
                  )}
                </div>
              </div>
              <span
                onClick={() => setIsEditing(true)}
                title="Edit Profile"
                className="absolute cursor-pointer text-lg top-1 right-1"
              >
                <FaEdit></FaEdit>
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default About;

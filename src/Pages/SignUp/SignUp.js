import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FaBookOpen, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Context/UserContext";
import ImageUploading from "react-images-uploading";
import { LoadingContext } from "../../Context/LoadingContext";

const SignUp = () => {
  const { setIsLoading } = useContext(LoadingContext);
  const navigate = useNavigate();
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";

  const { createUser } = useContext(authContext);

  const [imgFile, setImgFile] = useState(null);

  const [images, setImages] = React.useState([]);
  const maxNumber = 1;

  const onChange = (imageList) => {
    setImages(imageList);
  };

  const imgbbApi = process.env.REACT_APP_ImgbbKey;

  const handleLoginUser = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const university = event.target.university.value;
    const address = event.target.address.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const image = imgFile.file;
        const formData = new FormData();
        formData.append("image", image);
        fetch(`https://api.imgbb.com/1/upload?key=${imgbbApi}`, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((result) => {
            updateProfile(user, {
              displayName: name,
              photoURL: result.data.url,
            })
              .then(() => {
                const userData = {
                  userName: user.displayName,
                  email,
                  university,
                  address,
                  imgURL: user.photoURL,
                };
                fetch(`https://server-media-book.vercel.app/users`, {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(userData),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.acknowledged) {
                      toast.success("user create successfully");
                      event.target.reset();
                      setIsLoading(false);
                      navigate(from, { replace: true });
                    }
                  });
              })
              .catch((error) => {
                console.error(error);
                setIsLoading(false);
              });
          });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="relative">
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
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered border-primary placeholder-primary rounded-sm"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered border-primary placeholder-primary rounded-sm"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="university"
                placeholder="university"
                className="input input-bordered border-primary placeholder-primary rounded-sm"
                required
              />
            </div>
            <div className="form-control">
              <textarea
                name="address"
                placeholder="address"
                className="textarea textarea-primary focus:outline-none placeholder-primary rounded-sm"
                required
              />
            </div>
            <div className="form-control">
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  dragProps,
                }) => (
                  
                  <div
                    onClick={onImageUpload}
                    className="upload__image-wrapper border min-h-[100px] relative flex justify-center items-center mt-2 p-2 cursor-pointer"
                    {...dragProps}
                  >
                    {imageList.length ? (
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          onImageRemoveAll();
                        }}
                        className="w-8 h-8 rounded-full text-white flex justify-center items-center bg-primary absolute top-1 right-1"
                      >
                        <FaTimes></FaTimes>
                      </button>
                    ) : (
                      ""
                    )}
                    <p>{!imageList.length && "Upload Profile Picture"}</p>

                    {imageList.length === 1 &&
                      imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          {setImgFile(image)}
                          <img
                            className="w-full"
                            src={image["data_url"]}
                            alt=""
                          />
                        </div>
                      ))}
                  </div>
                )}
              </ImageUploading>
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
    </div>
  );
};

export default SignUp;

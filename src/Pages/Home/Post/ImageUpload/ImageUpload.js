import React from "react";
import { FaTimes } from "react-icons/fa";
import ImageUploading from "react-images-uploading";

const ImageUpload = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({ imageList, onImageUpload, onImageRemoveAll, dragProps }) => (
          // write your building UI
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
            <p>{!imageList.length && "Click or Drop Image here"}</p>

            {imageList.length === 1 &&
              imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img className="w-60" src={image["data_url"]} alt="" />
                </div>
              ))}
            {imageList.length > 1 &&
              imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img className="w-60" src={image["data_url"]} alt="" />
                </div>
              ))}
          </div>
        )}
      </ImageUploading>
      
    </div>
  );
};

export default ImageUpload;

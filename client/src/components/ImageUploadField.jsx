import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Loading from "./Loading";

const ImageUploadField = ({ imageLoading, handleUploadImage }) => {
  return (
    <label
      htmlFor="productImage"
      className="bg-blue-50 h-24 border rounded flex justify-center items-center cursor-pointer"
    >
      <div className="text-center flex justify-center items-center flex-col">
        {imageLoading ? (
          <Loading />
        ) : (
          <>
            <FaCloudUploadAlt size={35} />
            <p>Upload Image</p>
          </>
        )}
      </div>
      <input
        disabled={imageLoading}
        type="file"
        id="productImage"
        className="hidden"
        accept="image/*"
        onChange={handleUploadImage}
      />
    </label>
  );
};

export default ImageUploadField;

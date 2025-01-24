import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const ViewImage = ({ url, close }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      close();
    }, 500);
  };

  return (
    <div
      className={`fixed inset-0 bg-neutral-900 bg-opacity-70 flex justify-center items-center z-50 p-4 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`w-full max-w-md max-h-[80vh] p-4 bg-white transform transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
      >
        <button onClick={handleClose} className="w-fit ml-auto block">
          <IoClose size={25} />
        </button>
        <img
          src={url}
          alt="full screen"
          className="w-full h-full object-scale-down"
        />
      </div>
    </div>
  );
};

export default ViewImage;

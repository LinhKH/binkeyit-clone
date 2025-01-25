import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const CofirmBox = ({
  title = "Permanent Delete",
  message = "Are you sure want to delete permanent ?",
  cancel,
  confirm,
  close,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      close();
    }, 500); // Match the duration of the transition
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-neutral-800 bg-opacity-70 p-4 flex justify-center items-center transition-opacity duration-500 ${
        isVisible ? "opacity-200" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white w-full max-w-md p-4 rounded transform transition-transform duration-300 ${
          isVisible ? "scale-200" : "scale-95"
        }`}
      >
        <div className="flex justify-between items-center gap-3">
          <h1 className="font-semibold">{title}</h1>
          <button onClick={handleClose}>
            <IoClose size={25} />
          </button>
        </div>
        <p className="my-4">{message}</p>
        <div className="w-fit ml-auto flex items-center gap-3">
          <button
            onClick={handleClose}
            className="px-4 py-1 border rounded border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={confirm}
            className="px-4 py-1 border rounded border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CofirmBox;

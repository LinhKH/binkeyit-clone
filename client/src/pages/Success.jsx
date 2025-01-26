import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Success = () => {
  const location = useLocation();
  const { width, height } = useWindowSize();

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 relative">
      <Confetti width={width} height={height} />
      <div className="m-2 w-full max-w-md bg-white p-6 py-8 rounded-lg shadow-lg flex flex-col justify-center items-center gap-5">
        <FaCheckCircle size={50} className="text-green-600" />
        <p className="text-green-800 font-bold text-xl text-center">
          {Boolean(location?.state?.text) ? location?.state?.text : "Payment"}{" "}
          Successfully
        </p>
        <Link
          to="/"
          className="border border-green-900 text-green-900 hover:bg-green-900 hover:text-white transition-all px-6 py-2 rounded-full"
        >
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default Success;

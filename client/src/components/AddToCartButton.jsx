import React, { useState } from "react";
import Loading from "./Loading";

const AddToCartButton = () => {
  const [loading, setLoading] = useState(false);
  const handleADDTocart = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <div>
      <button onClick={handleADDTocart} className="bg-green-600 hover:bg-green-700 text-white px-2 lg:px-4 py-1 rounded">
        {loading ? <Loading /> : "Add"}
      </button>
    </div>
  );
};

export default AddToCartButton;

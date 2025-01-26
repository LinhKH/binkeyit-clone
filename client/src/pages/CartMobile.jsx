import React, { useState } from "react";
import DisplayCartItem from "../components/DisplayCartItem";

const CartMobile = () => {
  const [openCartSection, setOpenCartSection] = useState(true);

  return (
    openCartSection && (
      <DisplayCartItem close={() => setOpenCartSection(false)} />
    )
  );
};

export default CartMobile;

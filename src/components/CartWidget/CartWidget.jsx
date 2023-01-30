import React from "react";
import { IconBadge } from "./CartWidget.elements";

import { BsFillCartFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <>
      <BsFillCartFill />
      <IconBadge>3</IconBadge>
    </>
  );
};

export default CartWidget;

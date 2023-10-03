import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Top = styled.div`
  display
`;

const Cart = () => {
  return (
    <div>
      <div>
        <h6>
          CART (<span>3</span>)
        </h6>
        <Link to="!#">Remove All</Link>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Cart;

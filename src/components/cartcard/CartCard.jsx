import React from "react";
import { Link } from "react-router-dom";
import CartProductCard from "../cartproductcard/CartProductCard";
import styled from "styled-components";
import Button from "../button/Button";

import ReactDOM from "react-dom";
import { useCart } from "../../context/cartContext";

const StyledCartCard = styled.div`
  position: absolute;
  z-index: 2000;
  top: 130px;
  right: 165px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 8px;
  background: #fff;
  width: 377px;
  /* height: 488px; */
  gap: 32px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  text-decoration-line: underline;
  opacity: 0.5;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Total = styled.p`
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
`;

const Title = styled.h6`
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
`;

const CartCard = ({ Open }) => {
  const { cart } = useCart();
  // if (!open) return null;
  return ReactDOM.createPortal(
    <StyledCartCard>
      <Container>
        <Top>
          <Title>
            CART (<span>{cart.length}</span>)
          </Title>
          <StyledLink to="!#">Remove All</StyledLink>
        </Top>
        <Center>
          {cart.map((item) => {
            return <CartProductCard item={item} key={item.id} />;
          })}
          {/* <CartProductCard cart={cart} /> */}
        </Center>
        <Bottom>
          <Total>TOTAL</Total>
          <Title>$ 5,396</Title>
        </Bottom>
        <Button>checkout</Button>
      </Container>
    </StyledCartCard>,
    document.getElementById("portal-root")
  );
};

export default CartCard;

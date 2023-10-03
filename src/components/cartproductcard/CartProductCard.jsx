import React from "react";
import styled from "styled-components";
import headphoneImg from "../../image/headphone3.png";

const CartProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 16px;
  /* margin-bottom: 24px; */
`;

const ImageBg = styled.div`
  border-radius: 8px;
  background: #f1f1f1;
  padding: 12px;
  align-self: center;
`;

const Image = styled.img`
  width: auto;
  height: 40px;
  flex-shrink: 0;
`;

// const ProductGp = styled.span`
//   display: flex;
//   align-items: center;
//   gap: 114px;
// `;

const ProductName = styled.p`
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
`;

const ProductPrice = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 700;
  line-height: 25px;
  opacity: 0.5;
`;

// const StyledButtons = styled.div`
//   display: flex;
//   gap: 16px;
// `;

const Count = styled.div`
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 12px;
  gap: 12px;
`;

const AddButton = styled.span`
  text-align: center;
  font-family: Manrope;
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.25;
  width: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const NumberButton = styled.span`
  width: 16px;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const CartProductCard = () => {
  return (
    <div>
      <CartProduct>
        <Container>
          <ImageBg>
            <Image src={headphoneImg} />
          </ImageBg>
          <div>
            {/* <ProductGp>
              <ProductName>XX99 MK II</ProductName>
            </ProductGp> */}
            <ProductName>XX99 MK II</ProductName>
            <ProductPrice>$2999</ProductPrice>
          </div>
        </Container>

        <Count>
          <AddButton>-</AddButton>
          <NumberButton>1</NumberButton>
          <AddButton>+</AddButton>
        </Count>
      </CartProduct>
    </div>
  );
};

export default CartProductCard;

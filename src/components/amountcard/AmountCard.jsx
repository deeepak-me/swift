import React from "react";

import headphoneImg from "../../image/headphone3.png";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center; 
  /* justify-content: space-between; */
  gap: 16px;
  margin-bottom: 24px;
`;

const ImageBg = styled.div`
  border-radius: 8px;
  background: #f1f1f1;
  padding: 12px;
`;

const Image = styled.img`
  width: auto;
  height: 40px;
  flex-shrink: 0;
`;
const ProductGp = styled.span`
    display: flex;
    align-items: center;
    gap: 114px;
`
const ProductName = styled.p`
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 166.667% */
`;

const ProductPrice = styled.p`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 178.571% */
  opacity: 0.5;
`;

const ProductCount = styled.p`
  color: #000;
  /* text-align: right; */
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 166.667% */
  opacity: 0.5;
`;

const AmountCard = () => {
  return (
    <Container>
      <ImageBg>
        <Image src={headphoneImg} />
      </ImageBg>
      <div>
        <ProductGp>
          <ProductName>XX99 MK II</ProductName>
          <ProductCount>x1</ProductCount>
        </ProductGp>
        <ProductPrice>$2999</ProductPrice>
      </div>
    </Container>
  );
};

export default AmountCard;

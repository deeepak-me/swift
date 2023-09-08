"use client";

import React, { useState } from "react";
import { styled } from "styled-components";

import productImg from "../../image/headphone1.png";
import speaker from "../../image/speaker3.png";
import headphone from "../../image/headphone2.png";
import Button from "../button/Button";

const SuggestionCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-left: 165px;
  padding-right: 165px; */
  gap: 30px;
  margin-top: 200px;
  margin-bottom: 168px;
`;

const Container = styled.div`
  width: 350px;
`;
const ImgWrapper = styled.div`
  height: 318px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h5`
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.714px;
  text-transform: uppercase;
  /* margin-top: 40px; */
  margin-bottom: 32px;
`;

const SuggestionCard = () => {
  const [products, setProducts] = useState([
    { title: "XX99 MARK I", id: 1, image: productImg },
    { title: "XX59", id: 2, image: headphone },
    { title: "ZX9 SPEAKER", id: 3, image: speaker },
  ]);

  return (
    <SuggestionCards>
      {products.map((product) => (
        <Container>
          <div key={product.id}>
            <ImgWrapper>
              <img src={product.image} />
            </ImgWrapper>
            <InfoContainer>
              <Info>
                <Title>{product.title}</Title>
                <Button>See product</Button>
              </Info>
            </InfoContainer>
          </div>
        </Container>
      ))}
    </SuggestionCards>
  );
};

export default SuggestionCard;

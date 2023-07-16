"use client";

import React from "react";
import Image from "next/image";

import productImg from "public/speaker2.png";
import Button from "../button/Button";

import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`;

const Bg = styled.div`
  /* background-image: url(${productImg}); */
  width: 1110px;
  height: 320px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
`;
const Title = styled.h4`
  color: #000;
  font-size: 28px;
  /* font-family: Manrope; */
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const Info = styled.div`
  display: inline-flex;
  padding-right: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  margin-left:95px;
`;

const LongProductCard = () => {
  return (
    <Container>
      <Bg>
        {/* <Image src={productImg} /> */}
        <Info>
          <Title>ZX7 SPEAKER</Title>
          <Button variant="bordered">See Product</Button>
        </Info>
      </Bg>
    </Container>
  );
};

export default LongProductCard;

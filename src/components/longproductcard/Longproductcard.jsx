"use client";

import React from "react";
import Image from "next/image";

import productImg from "public/speaker2.png";
import Button from "../button/Button";


import { styled } from "styled-components";

const Bg = styled.div`
  background-image: ;
`;
const Title = styled.h4`
  color: #000;
  font-size: 28px;
  font-family: Manrope;
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
`;

const LongProductCard = () => {
  return (
    <Bg>
      {/* <Image src={productImg} /> */}
      <Info>
        <Title>ZX7 SPEAKER</Title>
        <Button bordered>See Product</Button>
      </Info>
    </Bg>
  );
};

export default LongProductCard;

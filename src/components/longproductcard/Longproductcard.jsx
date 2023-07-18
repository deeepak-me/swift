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
  position: relative;
  /* position:absolute; */
  /* padding-right: 165px;
  padding-left: 165px; */
`;

const Bg = styled.div`
  /* background-image: url(${productImg}); */
  /* width: 1110px;
  height: 320px; */
  flex-shrink: 0;
  border-radius: 8px;
  /* background: #f1f1f1; */
  display: flex;
  align-items: center;
`;

const Img = styled(Image)`
  border-radius: 8px;
  object-fit:cover;
`
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
  margin-left: 95px;
  /* position: relative; */
  position: absolute;
  /* left:-970px; */
`;

const LongProductCard = () => {
  return (
    <Container>
      <Bg>
        <Img src={productImg} />
        {/* <Image
          alt="ProductImg"
          src={productImg}
          placeholder="blur"
          quality={100}
          fill
          // sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        /> */}
        <Info>
          <Title>ZX7 SPEAKER</Title>
          <Button variant="bordered">See Product</Button>
        </Info>
      </Bg>
    </Container>
  );
};

export default LongProductCard;

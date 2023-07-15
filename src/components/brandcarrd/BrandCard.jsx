"use client";

import React from "react";
import Image from "next/image";
import { styled, css } from "styled-components";

import person from "public/person.png";

const Info = styled.div`
  /* width: 1110px; */
  width:auto;
  height: 588px;
  flex-shrink: 0;
  border-radius: 8px;
  /* background: #f1f1f1; */
  /* background: #FAFAFA; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`;

const Content = styled.div`
  width: 445px;
  height: 295px;
  flex-shrink: 0;
  margin-right: 125px;
`;

const Title = styled.h2`
  color: #000;
  font-size: 40px;
  /* font-family: Manrope; */
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 1.429px;
  text-transform: uppercase;
  margin-bottom: 32px;
`;

const Orange = styled.span`
  color: #d87d4a;
`;

const Para = styled.p`
  color: #000;
  font-size: 15px;
  /* font-family: Manrope; */
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
`;

const Item = styled.div`
  width: 540px;
  height: 588px;
  flex-shrink: 0;
  border-radius: 8px;
  /* background: #f1f1f1; */
  /* background: red; */
`;

const Img = styled(Image)`
  border-radius: 8px;
`;

const BrandCard = () => {
  return (
    <Info>
      <Content>
        <Title>
          Bringing you the <Orange>best</Orange> audio gear
        </Title>
        <Para>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Para>
      </Content>
      <Item>
        <Img src={person} width={540} height={588} />
      </Item>
    </Info>
  );
};

export default BrandCard;

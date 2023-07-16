"use client";

import React from "react";
import Button from "../button/Button";
import { styled } from "styled-components";

const Card = styled.div`
  width: 540px;
  height: 320px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
`;

const Info = styled.div`
    margin-left: 95px;
`;

const Title = styled.h4`
  color: #000;
  font-size: 28px;
  /* font-family: Manrope; */
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 32px;
`;

const SimpleCard = () => {
  return (
    <Card>
      <Info>
        <Title>YX1 EARPHONES</Title>
        <Button variant="bordered">See Product</Button>
      </Info>
    </Card>
  );
};

export default SimpleCard;

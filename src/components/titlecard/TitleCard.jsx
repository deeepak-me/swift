"use client";

import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  background: #000;
  padding-top: 195px;
  padding-bottom: 97px;
  /* padding-left: 578px;
  padding-right: 578px; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 160px;
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-family: Manrope;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px; /* 110% */
  letter-spacing: 1.429px;
  text-transform: uppercase;
`;

const TitleCard = ({title}) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default TitleCard;

import React from "react";
import AmountCard from "../amountcard/AmountCard";
import { styled } from "styled-components";
import Button from "../button/Button";

const Title = styled.h6`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.286px;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const Segment = styled.span`
    display: flex;
    align-content: center;
    justify-content: space-between;
`

const AmntDiv = styled.p`
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px; /* 166.667% */
  opacity: 0.5;
`;

const CheckOutBtn = styled(Button)`
    padding-left: 56px;
    padding-right: 56px;
`

const SummaryCard = () => {
  return (
    <div>
      <Title>Summary</Title>
      <AmountCard />
      <AmountCard />
      <AmountCard />
      <div>
        <Segment>
          <AmntDiv>TOTAL</AmntDiv>
          <Title>$5986</Title>
        </Segment>
        <Segment>
          <AmntDiv>SHIPPING</AmntDiv>
          <Title>$5986</Title>
        </Segment>
        <Segment>
          <AmntDiv>VAT (INCLUDED)</AmntDiv>
          <Title>$5986</Title>
        </Segment>
        <Segment>
          <AmntDiv>GRAND TOTAL</AmntDiv>
          <Title>$5986</Title>
        </Segment>
      </div>
      <CheckOutBtn>CONTINUE & PAY</CheckOutBtn>
    </div>
  );
};

export default SummaryCard;

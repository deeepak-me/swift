import React from "react";

import ConfirmImg from "../../image/confirm.svg";
import AmountCard from "../amountcard/AmountCard";
import { styled } from "styled-components";

const ConfirmCard = styled.div`
  width: 540px;
  height: 581px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 33px;
`;

const Title = styled.h3`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 112.5% */
  letter-spacing: 1.143px;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  color: #000;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px; /* 166.667% */
  opacity: 0.5;
`;

const Content = styled.div`
  border-radius: 8px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 24px; */
  gap: 24px;
`;

const Underline = styled.div`
  width: 198px;
  height: 1px;
  opacity: 0.08;
  background: #000;
`;

const Number = styled.p`
  color: #000;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.214px;
  opacity: 0.5;
`;

const Total = styled.div`
  border-radius: 0px 8px 8px 0px;
  background: #000;
  padding: 42px 65px 42px 32px;
  color: #fff;
  font-family: Manrope;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
`;

const GrandTotal = styled.p`
  opacity: 0.5;
`;

const Rate = styled.h6`
  font-size: 18px;
  font-weight: 700;
`;
const ConfirmationCard = () => {
  return (
    <div>
      <ConfirmCard>
        <img src={ConfirmImg} />
        <Title>THANK YOU FOR YOUR ORDER</Title>
        <Subtitle>You will receive an email confirmation shortly.</Subtitle>
        <Content>
          <div>
            <AmountCard />
            <Underline></Underline>
            <Number>and 2 other item(s)</Number>
          </div>
          <Total>
            <GrandTotal>GRAND TOTAL</GrandTotal>
            <Rate>$5987</Rate>
          </Total>
        </Content>
      </ConfirmCard>
    </div>
  );
};

export default ConfirmationCard;
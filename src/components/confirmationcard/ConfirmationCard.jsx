import React, { useEffect } from "react";

import ConfirmImg from "../../image/confirm.svg";
import AmountCard from "../amountcard/AmountCard";
import { styled } from "styled-components";
import Button from "../button/Button";

const Container = styled.div`
  width: 100vw;
  /* height: 100%; */
  position: absolute;
  /* top: 0px; */
  top: 99px;
  left: 0px;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 2000;
  height: 110%;

  padding-bottom: 32px;
`;

const ConfirmCard = styled.div`
  width: 540px;
  height: 581px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  padding: 48px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
  gap: 33px;
  /* margin-top: 100px; */
`;

const Title = styled.h3`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  /* line-height: 36px; 112.5% */
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
  /* align-items: center; */
  justify-content: space-between;
  /* padding: 24px; */
  gap: 24px;
`;

const Segment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 33px;
`;

const FirstSeg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 24px 0px 24px 24px;
`;

const Underline = styled.div`
  /* width: 198px; */
  height: 1px;
  opacity: 0.08;
  background: #000;
`;

const Number = styled.p`
  color: #000;
  font-family: Manrope;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.214px;
  opacity: 0.5;
  text-align: center;
`;

const Total = styled.div`
  border-radius: 0px 8px 8px 0px;
  background: #000;
  padding: 42px 65px 42px 32px;
  color: #fff;
  /* font-family: Manrope; */
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

// const StyledAmountCard = styled(AmountCard)`
//   margin-bottom: 100px;
// `;

const ConfirmationCard = () => {
  useEffect(() => {
    const rootEl = document.querySelector("#app");

    if (!rootEl) {
      return;
    }

    rootEl.style = "height: 125vh; overflow: hidden;";

    return () => {
      rootEl.style = "";
    };
  }, []);

  return (
    <Container>
      <ConfirmCard>
        <Segment>
          <img src={ConfirmImg} />
          <Title>
            THANK YOU <br />
            FOR YOUR ORDER
          </Title>
          <Subtitle>You will receive an email confirmation shortly.</Subtitle>
        </Segment>

        <Content>
          <FirstSeg>
            <AmountCard />
            <Underline></Underline>
            <Number>and 2 other item(s)</Number>
          </FirstSeg>
          <Total>
            <GrandTotal>GRAND TOTAL</GrandTotal>
            <Rate> $5987 </Rate>
          </Total>
        </Content>
        <Button>BACK TO HOME</Button>
        {/* <Content>
          <FirstSeg>
            <AmountCard />
            <Underline></Underline>
            <Number>and 2 other item(s)</Number>
          </FirstSeg>
          <Total>
            <GrandTotal>GRAND TOTAL</GrandTotal>
            <Rate>$5987</Rate>
          </Total>
        </Content> */}
      </ConfirmCard>
    </Container>
  );
};

export default ConfirmationCard;

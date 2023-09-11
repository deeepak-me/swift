import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 160px;
`;

const Title = styled.h3`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 112.5% */
  letter-spacing: 1.143px;
  text-transform: uppercase;
  margin-bottom: 42px;
`;

const Segment = styled.div`
  margin-bottom: 58px;
`;

const SubTitle = styled.div`
  color: #d87d4a;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 192.308% */
  letter-spacing: 0.929px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const FirstSeg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;
const Heading = styled.p`
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.214px;
  margin-bottom: 9px;
`;
const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  background: #fff;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 24px;
  /* padding-right: ; */
  width: 309px;
  /* height: 56px; */
  flex-shrink: 0;
  margin-bottom: 24px;
  opacity: 0.6;
`;
const CheckOutCard = () => {
  return (
    <Container>
      <div>
        <Title>CHECKOUT</Title>
        <Segment>
          <SubTitle>Billing Details</SubTitle>
          <FirstSeg>
            <div>
              <Heading>Name</Heading>
              <Input type="text" placeholder="Deepak Krishnan" />
            </div>
            <div>
              <Heading>Email Address</Heading>
              <Input type="email" placeholder="deepak.krishnan.e@gmail.com" />
            </div>
          </FirstSeg>
          <div>
            <Heading>Phone Number</Heading>
            <Input type="text" placeholder="+91 9876543210" />
          </div>
        </Segment>

        <Segment>
          <SubTitle>shipping info</SubTitle>
          <div>
            <Heading>Address</Heading>
            <Input type="text" placeholder="1137 Williams Avenue" />
          </div>
          <FirstSeg>
            <div>
              <Heading>ZIP Code</Heading>
              <Input type="text" placeholder="100001" />
            </div>
            <div>
              <Heading>city</Heading>
              <Input type="text" placeholder="Kozhikode" />
            </div>
          </FirstSeg>
          <div>
            <Heading>Country</Heading>
            <Input type="text" placeholder="India" />
          </div>
        </Segment>
        <Segment>
          <SubTitle>payment details</SubTitle>
        </Segment>
      </div>
    </Container>
  );
};

export default CheckOutCard;

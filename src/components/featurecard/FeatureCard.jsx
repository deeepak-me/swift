import React from "react";

import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-bottom: 160px;
`;
const Info = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* gap: 125px; */
`;

const FeatureBox = styled.div`
  width: 57%;
  margin-right: 125px;
`;
const Title = styled.h3`
  color: #000;
  font-family: Manrope;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 112.5% */
  letter-spacing: 1.143px;
  text-transform: uppercase;
`;

const Para = styled.p`
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
`;

const BoxItems = styled.div`
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
`;

const Ul = styled.ul`
  padding-left: 0;
`;

const Li = styled.li`
  list-style: none;
  margin-bottom: 8px;
`;

const Count = styled.span`
  color: #d87d4a;
  font-weight: 700;
  margin-right: 24px;
`;

const ItemName = styled.span`
  color: #000;
  opacity: 0.5;
`;

const FeatureCard = () => {
  return (
    <Container>
      <Info>
        <FeatureBox>
          <Title>FEATURES</Title>
          <Para>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat. The advanced Active Noise Cancellation
            with built-in equalizer allow you to experience your audio world on
            your terms. It lets you enjoy your audio in peace, but quickly
            interact with your surroundings when you need to. Combined with
            Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the
            XX99 Mark II headphones gives you superior sound, cutting-edge
            technology, and a modern design aesthetic.
          </Para>
        </FeatureBox>
        <div>
          <Title>in the box</Title>
          <div>
            <BoxItems>
              <Ul>
                <Li>
                  <Count>1X</Count>
                  <ItemName>Headphone Unit</ItemName>
                </Li>
                <Li>
                  <Count>2X</Count>
                  <ItemName>Replacement Earcups</ItemName>
                </Li>
                <Li>
                  <Count>1X</Count>
                  <ItemName>User Manual</ItemName>
                </Li>
                <Li>
                  <Count>1X</Count>
                  <ItemName>3.5mm 5m Audio Cable</ItemName>
                </Li>
                <Li>
                  <Count>1X</Count>
                  <ItemName>Travel Bag</ItemName>
                </Li>
              </Ul>
            </BoxItems>
          </div>
        </div>
      </Info>
    </Container>
  );
};

export default FeatureCard;

import React, { useState } from "react";

import headphoneImg from "../../image/headphone3.png";
import Button from "../button/Button";

import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 160px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 124.5px;
  overflow: hidden;

  ${(props) =>
    props.isEven ? "flex-direction:row;" : "flex-direction:row-reverse;"}
`;

const Item = styled.div`
  width: 540px;
  height: 560px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f1f1f1;
  /* padding-top: 66px;
  padding-bottom: 108px;
  padding-left: 95px;
  padding-right: 95px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  width: 445.5px;
  height: 407px;
  flex-shrink: 0;
`;

const Intro = styled.h5`
  color: #d87d4a;
  /* font-family: Manrope; */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 10px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
const Title = styled.h2`
  color: #000;
  /* font-family: Manrope; */
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px; /* 110% */
  letter-spacing: 1.429px;
  text-transform: uppercase;
  margin-bottom: 32px;
`;
const Para = styled.p`
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px; /* 166.667% */
  margin-bottom: 32px;
  opacity: 0.5;
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 16px;
`;

const ProductDetailsCard = ({ blog }) => {
  return (
    <Container>
      <Content key={blog.index} isEven={blog.index % 2 === 1}>
        <Item>
          <img src={blog.image} />
        </Item>
        <Info>
          <Intro>{blog.tag}</Intro>
          <Title>{blog.title}</Title>
          <Para>{blog.about}</Para>
          <StyledButtons>
            <Button>SEE PRODUCT</Button>
          </StyledButtons>
        </Info>
      </Content>
      {/* {blogs.map((blog) => (
        <Content>
          <Item>
            <img src={blog.image} />
          </Item>
          <Info>
            <Intro>NEW PRODUCT</Intro>
            <Title>{blog.title}</Title>
            <Para>{blog.about}</Para>
            <StyledButtons>
              <Button>SEE PRODUCT</Button>
            </StyledButtons>
          </Info>
        </Content>
      ))} */}
    </Container>

    // <Container>
    //   <Content>
    //     <Item>
    //       <img src={headphoneImg} />
    //     </Item>
    //     <Info>
    //       <Intro>NEW PRODUCT</Intro>
    //       <Title>XX99 Mark I Headphones</Title>
    //       <Para>
    //         The new XX99 Mark II headphones is the pinnacle of pristine audio.
    //         It redefines your premium headphone experience by reproducing the
    //         balanced depth and precision of studio-quality sound.
    //       </Para>
    //       <Price>$ 2,999</Price>
    //       <StyledButtons>
    //         <Count>
    //           <AddButton>-</AddButton>
    //           <NumberButton>1</NumberButton>
    //           <AddButton>+</AddButton>
    //         </Count>
    //         <Button>ADD TO CART</Button>
    //       </StyledButtons>
    //     </Info>
    //   </Content>
    // </Container>
  );
};

export default ProductDetailsCard;

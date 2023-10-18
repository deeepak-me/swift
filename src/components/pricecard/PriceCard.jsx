import React, { useEffect, useState } from "react";

import headphoneImg from "../../image/headphone3.png";
import Button from "../button/Button";

import { styled } from "styled-components";
import Counter from "../../utils/Counter";
import { useCart } from "../../context/cartContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 160px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 124.5px;
  overflow: hidden;
  width: 100%;
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
  font-family: Manrope;
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
  font-family: Manrope;
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
const Price = styled.h6`
  color: #000;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.286px;
  text-transform: uppercase;
  margin-bottom: 47px;
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 16px;
`;

const Count = styled.div`
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 16px;
  gap: 21px;
`;

const AddButton = styled.span`
  /* color: #000; */
  text-align: center;
  /* font-family: Manrope; */
  font-size: 13px;
  /* font-style: normal; */
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.25;
  width: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    /* background: #e2e2e2; */
    /* color: red; */
  }
`;

const NumberButton = styled.span`
  width: 16px;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const PriceCard = ({ product }) => {
  // const [counter, setCounter] = useState(0);

  // const handleClick1 = () => {
  //   setCounter(counter + 1);
  // };

  // const handleClick2 = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1);
  //   }
  // };
  const { id, category } = useParams();
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  async function fetchProduct(id) {
    try {
      const product = await axios.get(`http://localhost:8000/products/${id}`);

      setProducts(product.data);
      // console.log(product.data);
    } catch (err) {
      console.error(err);
    }
  }

  // const handleAddToCart = (product) => {
  //   // Add the selected product to the cart.
  //   setCart([...cart, product]);
  // };

  const { state, addToCart } = useCart();
  // console.log(state);

  const { handleClick1, handleClick2, counter } = Counter();

  return (
    <Container>
      <Content>
        <Item>
          <img src={product.image} />
        </Item>
        <Info>
          <Intro>{product.tag}</Intro>
          <Title>{product.title}</Title>
          <Para>{product.about}</Para>
          <Price> {product.price}</Price>
          <StyledButtons>
            <Count>
              <AddButton onClick={() => handleClick2()}>-</AddButton>
              <NumberButton>{counter}</NumberButton>
              <AddButton onClick={() => handleClick1()}>+</AddButton>
            </Count>
            <Button onClick={() => addToCart(product)}>ADD TO CART</Button>
          </StyledButtons>
        </Info>
      </Content>
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

export default PriceCard;

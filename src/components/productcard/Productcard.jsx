"use client";

import React, { useState } from "react";
// import Image from "next/image";

// import styles from "./productcard.module.css";
import productImg from "../../image/headphone1.png";
import speaker from "../../image/speaker3.png";
import earBuds from "../../image/earbuds.png";
import arrowImg from "../../image/arrow.svg";
import Button from "../button/Button";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-left: 165px;
  padding-right: 165px; */
  gap: 30px;
  margin-top: 200px;
  margin-bottom: 168px;
`;

const Info = styled.div`
  background: #f1f1f1;
  color: #000000;
  border-radius: 8px;
  height: 204px;
  width: 350px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding-left: 108.5px; */
  /* padding-right: 108.5px; */
  /* padding-bottom: 30px; */
`;
const CardDesc = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  top: -50px;
`;
const Item = styled.div`
  /* height: 160px; */
  /* width: 122.9473648071289px; */
  border-radius: 0px;
  margin-bottom: 36px;
`;
const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 15px;
`;
const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
const Subtitle = styled.div`
  font-size: 13px;
  /* font-family: Manrope; */
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  /* opacity: 0.5; */
  margin-right: 14px;
  /* margin-top: 6px; */
`;

const Image = styled.img`
  width: 5px;
  height: 10px;
`;

const ProductCard = () => {
  const [products, setProducts] = useState([
    { title: "headphones", subtitle: "SHOP", id: 1,image:productImg, },
    { title: "speaker", subtitle: "SHOP", id: 2,image:speaker, },
    { title: "earphone", subtitle: "SHOP", id: 3,image:earBuds },
  ]);

  return (
    <Container>
      <ProductCards>
        {products.map((product) => (
          <Info key={product.id}>
            <CardDesc>
              <Item>
                <img src={product.image} />
              </Item>

              <Title>{product.title}</Title>
              <Button color="secondary">
                <StyledButton>
                  <Subtitle>{product.subtitle}</Subtitle>
                  <Image src={arrowImg} />
                </StyledButton>
              </Button>
            </CardDesc>
          </Info>
        ))}
      </ProductCards>
    </Container>

    // <div className={styles.info}>
    // <div className={styles.container}>
    //   {products.map((product) => (
    //     <div className={styles.info} key={product.id}>
    //       <div className={styles.cardDesc} >
    //         <div className={styles.item}>
    //           <Image src={productImg} className={styles.img} />
    //         </div>

    //         <h2 className={styles.title}>{product.title}</h2>
    //         <Button color="secondary">
    //           <div className={styles.button}>
    //             <div className={styles.subtitle}>{product.subtitle}</div>
    //             <Image src="/arrow.svg" width={5} height={10} />
    //           </div>
    //         </Button>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    // {/* <div className={styles.cardDesc}>
    //   <div className={styles.item}>
    //     <Image src={productImg} className={styles.img} />
    //   </div>

    //   <h2 className={styles.title}>headphones</h2>
    //   <Button color="secondary">
    //     <div className={styles.button}>
    //       <div className={styles.subtitle}>SHOP</div>
    //       <Image src="/arrow.svg" width={5} height={10} />
    //     </div>
    //   </Button>
    // </div> */}
    // {/* </div> */}
  );
};

export default ProductCard;

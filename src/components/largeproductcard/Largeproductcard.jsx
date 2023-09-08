import React from "react";
// import Image from "next/image";

// import styles from "./largeproductcard.module.css";
import speaker from "../../image/speaker.png";
import Button from "../button/Button";
import { styled } from "styled-components";

const Container = styled.div`
  /* padding-left: 165px;
  padding-right: 165px; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
  font-family: Manrope;
`;

const Info = styled.div`
  /* width: 1110px;
  height: 560px; */
  flex-shrink: 0;
  border-radius: 8px;
  background: #d87d4a;
  
`
const CardDesc= styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* top: 96px; */
  top:29px;
  margin-left: 117px;
  /* padding-top: 96px; */
  padding-top:67px;
`

const Item = styled.div`
   width: 410.234px;
  height: 493px;
  flex-shrink: 0;
  margin-right: 138px;
`
const CardInfo = styled.div`
  margin-right: 95px;
  position: relative;
  top: -68px;
  width: 349px;
  height: 303px;
  flex-shrink: 0;
`
const Title = styled.h1`
  color: #fff;
  font-size: 56px;
  /* font-family: Manrope; */
  font-weight: 700;
  line-height: 58px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 24px;
`
const Para = styled.p`
  display: flex;
  /* width: 349px; */
  flex-direction: column;
  flex-shrink: 0;
  color: #fff;
  font-size: 15px;
  /* font-family: Manrope; */
  font-weight: 500;
  line-height: 25px;
  opacity: 0.75;
  margin-bottom: 40px;
`


const LargeProductCard = () => {
  return (
    <Container>
      <Info>
        <CardDesc>
          <Item>
            {/* <Image src={speaker} className={styles.img} /> */}
            <img src={speaker}  />
          </Item>
          <CardInfo>
            <Title>
              ZX9 <br /> SPEAKER
            </Title>
            <Para>
              Upgrade to premium speakers that are <br /> phenomenally built to
              deliver truly remarkable <br /> sound.
            </Para>
            <Button color="primary">See Product</Button>
          </CardInfo>
        </CardDesc>
      </Info>
    </Container>

    // <div className={styles.info}>
    //   <div className={styles.cardDesc}>
    //     <div className={styles.item}>
    //       <Image src={speaker} className={styles.img} />
    //     </div>
    //     <div className={styles.cardInfo}>
    //       <h1 className={styles.title}>ZX9 <br /> SPEAKER</h1>
    //       <p className={styles.para}>
    //         Upgrade to premium speakers that are <br /> phenomenally built to deliver
    //         truly remarkable <br /> sound.
    //       </p>
    //       <Button color="primary">See Product</Button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LargeProductCard;

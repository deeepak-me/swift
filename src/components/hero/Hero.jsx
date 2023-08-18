// import Image from "next/image";
// import styles from "./hero.module.css";
import heroImg from "../../image/Bitmap.png";
import Button from "../button/Button";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 46.5px;
  background-color: #141414;
  color: #fff;
  padding-left: 165px;
  padding-right: 121px;
`;
const Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Intro = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
  opacity: 0.5;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 58px;
  letter-spacing: 2px;
`;
const Desc = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  mix-blend-mode: normal;
  opacity: 0.75;
`;
const ImageWrap = styled.div`
  position: relative;
  /* top: -100px; */
  /* flex: 1; */
  display: flex;
  /* flex-direction: column;
  gap: 24px; */
`;
const Image = styled.img`
  width: 708.8px;
  /* height: 886px; */
  height: auto;
  object-fit: contain;
  /* position:relative ; */
  top: 0;
  left: 609.6px;
`;

export function Hero() {
  return (
    <Container>
      <Item>
        <Intro>NEW PRODUCT</Intro>
        <Title>XX99 Mark II Headphones</Title>
        <Desc>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Desc>
        <Button>See Product</Button>
      </Item>
      <ImageWrap>
        <Image src={heroImg} />
      </ImageWrap>
    </Container>
    // <div className={styles.container}>
    //   <div className={styles.item}>
    //     <h3 className={styles.intro}>NEW PRODUCT</h3>
    //     <h1 className={styles.title}>XX99 Mark II Headphones</h1>
    //     <p className={styles.desc}>
    //       Experience natural, lifelike audio and exceptional build quality made
    //       for the passionate music enthusiast.
    //     </p>
    //     {/* <Button className={styles.button}>See Product</Button> */}
    //     <Button>See Product</Button>
    //   </div>
    //   <div className={styles.item}>
    //     <Image src={heroImg} className={styles.img} />
    //   </div>
    // </div>
  );
}

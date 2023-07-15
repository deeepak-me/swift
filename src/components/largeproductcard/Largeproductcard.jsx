import React from "react";
import Image from "next/image";

import styles from "./largeproductcard.module.css";
import speaker from "public/speaker.png";
import Button from "../button/Button";
import { styled } from "styled-components";

const Container = styled.div`
  /* padding-left: 165px;
  padding-right: 165px; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
`;

const LargeProductCard = () => {
  return (
    <Container>
      <div className={styles.info}>
        <div className={styles.cardDesc}>
          <div className={styles.item}>
            <Image src={speaker} className={styles.img} />
          </div>
          <div className={styles.cardInfo}>
            <h1 className={styles.title}>
              ZX9 <br /> SPEAKER
            </h1>
            <p className={styles.para}>
              Upgrade to premium speakers that are <br /> phenomenally built to
              deliver truly remarkable <br /> sound.
            </p>
            <Button color="primary">See Product</Button>
          </div>
        </div>
      </div>
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

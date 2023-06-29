import React from "react";
import Image from "next/image";

import styles from "./productcard.module.css";
import productImg from "public/headphone1.png";
import Button from "../button/Button";

const ProductCard = () => {
  return (
    <div className={styles.info}>
      <div className={styles.cardDesc}>
        <div className={styles.item}>
          <Image src={productImg} className={styles.img} />
        </div>

        <h2 className={styles.title}>headphones</h2>
        <Button secondary>
          <div className={styles.button}>
            <div className={styles.subtitle}>SHOP</div>
            <Image src="/arrow.svg" width={5} height={10} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

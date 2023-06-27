import React from "react";
import Image from "next/image";

import styles from "./productcard.module.css";
import productImg from "public/headphone1.png";

const ProductCard = () => {
  return (
    <div className={styles.info}>
      <div className={styles.cardDesc}>
        <div className={styles.item}>
          <Image src={productImg} className={styles.img} />
        </div>

        <h2 className={styles.title}>headphones</h2>
        <span className={styles.button}>
          <h3 className={styles.subtitle}>SHOP</h3>
          <Image src="/arrow.svg" width={5} height={10} />
        </span>
      </div>
    </div>
  );
};

export default ProductCard;

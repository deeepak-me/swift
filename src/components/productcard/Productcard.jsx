import React, { useState } from "react";
import Image from "next/image";

import styles from "./productcard.module.css";
import productImg from "public/headphone1.png";
import Button from "../button/Button";

const ProductCard = () => {

  const [products, setProducts] = useState([
    {title:"headphones", subtitle:"SHOP",id:1},
    {title:"speaker", subtitle:"SHOP",id:2},
    {title:"earphone", subtitle:"SHOP",id:3},
  ])

  return (
    // <div className={styles.info}>
      <div className={styles.container}>
        {products.map((product) => (
          <div className={styles.info} key={product.id}>
            <div className={styles.cardDesc} >
              <div className={styles.item}>
                <Image src={productImg} className={styles.img} />
              </div>

              <h2 className={styles.title}>{product.title}</h2>
              <Button color="secondary">
                <div className={styles.button}>
                  <div className={styles.subtitle}>{product.subtitle}</div>
                  <Image src="/arrow.svg" width={5} height={10} />
                </div>
              </Button>
            </div>
          </div>
        ))}
      </div>

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

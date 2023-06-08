import Image from "next/image";
import styles from "./hero.module.css";
import heroImg from "public/Bitmap.png";

export function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h3 className={styles.intro}>NEW PRODUCT</h3>
        <h1 className={styles.title}>XX99 Mark II Headphones</h1>
        <p className={styles.desc}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className={styles.button}>See Product</button>
      </div>
      <div className={styles.item}>
        <Image src={heroImg} className={styles.img} />
      </div>
    </div>
  );
}

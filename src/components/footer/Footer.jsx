import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from'./footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link href='/' className={styles.logo}><Image src="/audiophile2.svg" width={143} height={25} /></Link>
        <div>
            <ul className={styles.links}>
                <Link href='/' className={styles.link}><li>HOME</li></Link>
                <Link href='/headphones' className={styles.link}><li>HEADPHONES</li></Link>
                <Link href='/blog' className={styles.link}><li>SPEAKERS</li></Link>
                <Link href='/contact' className={styles.link}><li>EARPHONES</li></Link>
            </ul>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.item}>
          <p className={styles.desc}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
          <div className={styles.rights}>Copyright 2021. All Rights Reserved</div>
        </div>
        <div className={styles.icons}>
          <Image src="/facebook.svg" width={24} height={24} />
          <Image src="/twitter.svg" width={24} height={24} />
          <Image src="/instagram.svg" width={24} height={24} />
        </div>
      </div>
    </div>
  )
}

export default Footer
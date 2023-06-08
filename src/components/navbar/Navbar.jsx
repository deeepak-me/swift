import Link from 'next/link'
import React from 'react'

import styles from'./navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href='/' className={styles.logo}><Image src="/audiophile2.svg" width={143} height={25} /></Link>
        <div>
            <ul className={styles.links}>
                <Link href='/' className={styles.link}><li>HOME</li></Link>
                <Link href='/headphones' className={styles.link}><li>HEADPHONES</li></Link>
                <Link href='/blog' className={styles.link}><li>SPEAKERS</li></Link>
                <Link href='/contact' className={styles.link}><li>EARPHONES</li></Link>
            </ul>
        </div>
        <Link href='' className={styles.cart}>
            <Image src="/cart.svg" width={23.33} height={20} />
        </Link>
    </div>
  )
}

export default Navbar
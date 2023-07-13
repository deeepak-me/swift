"use client";

import Link from "next/link";
import React from "react";

// import styles from "./navbar.module.css";
import Image from "next/image";
import { styled } from "styled-components";

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #141414;
  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 1000;
  /* background: transparent; */
  padding-left: 165px;
  padding-right: 165px;
`;
const StyledLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 34px;
  list-style-type: none;
`;
// const Img = styled(Image)`
// `

const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 13px;
`;
const Navbar = () => {
  return (
    <Container>
      <StyledLink href='/'>
        <Image src="/audiophile2.svg" width={143} height={25} />
      </StyledLink>
      <div>
        <StyledLinks>
            <StyledLink href='/' ><li>HOME</li></StyledLink>
            <StyledLink href='/headphones'><li>HEADPHONES</li></StyledLink>
            <StyledLink href='/blog' ><li>SPEAKERS</li></StyledLink>
            <StyledLink href='/contact' ><li>EARPHONES</li></StyledLink>
        </StyledLinks>
      </div>
      <StyledLink href=''>
        <Image src="/cart.svg" width={23.33} height={20} /> 
      </StyledLink>
    </Container>

    // <div className={styles.container}>
    //     <Link href='/' className={styles.logo}><Image src="/audiophile2.svg" width={143} height={25} /></Link>
    //     <div>
    //         <ul className={styles.links}>
    //             <Link href='/' className={styles.link}><li>HOME</li></Link>
    //             <Link href='/headphones' className={styles.link}><li>HEADPHONES</li></Link>
    //             <Link href='/blog' className={styles.link}><li>SPEAKERS</li></Link>
    //             <Link href='/contact' className={styles.link}><li>EARPHONES</li></Link>
    //         </ul>
    //     </div>
    //     <Link href='' className={styles.cart}>
    //         <Image src="/cart.svg" width={23.33} height={20} />
    //     </Link>
    // </div>
  );
};

export default Navbar;

"use client";

import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// import styles from "./footer.module.css";
import audiophile from "../../image/audiophile2.svg";
import facebook from "../../image/facebook.svg";
import twitter from "../../image/twitter.svg";
import instagram from "../../image/instagram.svg";

import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #141414;
  color: #fff;
  padding-right: 165px;
  padding-left: 165px;
  padding-top: 75px;
  padding-bottom: 48px;
  /* height:365px; */
`;
const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 34px;
  list-style-type: none;
`;

const LinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 34px;
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 13px;
  color: #fff;
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 192.308% */
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: #d87d4a;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
`;

const Item = styled.div`
  margin-right: 466px;
`;

const Desc = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  opacity: 0.5;
  /* width: 540px;
  height: 100%; */
`;
const Rights = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  opacity: 0.5;
  margin-top: 56px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <Container>
      <StyledFooter>
        <StyledLink to="/">
          <img src={audiophile} width={143} height={25} />
        </StyledLink>

        <div>
          <LinksList>
            <StyledLink to="/">
              <li>HOME</li>
            </StyledLink>
            <StyledLink to="/headphones">
              <li>HEADPHONES</li>
            </StyledLink>
            <StyledLink to="/blog">
              <li>SPEAKERS</li>
            </StyledLink>
            <StyledLink to="/contact">
              <li>EARPHONES</li>
            </StyledLink>
          </LinksList>
        </div>
      </StyledFooter>

      <Info>
        <Item>
          <Desc>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </Desc>
          <Rights>Copyright 2021. All Rights Reserved</Rights>
        </Item>
        <Icons>
          <img src={facebook} width={24} height={24} />
          <img src={twitter} width={24} height={24} />
          <img src={instagram} width={24} height={24} />
        </Icons>
      </Info>
    </Container>

    // <div className={styles.container}>
    //   <div className={styles.links}>
    //     <Link href='/' className={styles.logo}><Image src="/audiophile2.svg" width={143} height={25} /></Link>
    //     <div>
    //         <ul className={styles.links}>
    //             <Link href='/' className={styles.link}><li>HOME</li></Link>
    //             <Link href='/headphones' className={styles.link}><li>HEADPHONES</li></Link>
    //             <Link href='/blog' className={styles.link}><li>SPEAKERS</li></Link>
    //             <Link href='/contact' className={styles.link}><li>EARPHONES</li></Link>
    //         </ul>
    //     </div>
    //   </div>
    //   <div className={styles.info}>
    //     <div className={styles.item}>
    //       <p className={styles.desc}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
    //       <div className={styles.rights}>Copyright 2021. All Rights Reserved</div>
    //     </div>
    //     <div className={styles.icons}>
    //       <Image src="/facebook.svg" width={24} height={24} />
    //       <Image src="/twitter.svg" width={24} height={24} />
    //       <Image src="/instagram.svg" width={24} height={24} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;

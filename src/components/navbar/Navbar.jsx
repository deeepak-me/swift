// "use client";

// import React from "react";
// import { styled } from "styled-components";
// import { Link } from "react-router-dom";

// import audiophile from "../../image/audiophile2.svg";
// import cart from "../../image/cart.svg";

// const Container = styled.div`
//   padding-top: 34px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   width: 100%;
// `;
// const StyledNavbar = styled.div`
//   height: 65px;
//   width: 77%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
//   background-color: #141414;
//   color: #ffffff;
//   border-bottom: 1px solid rgba(255, 255, 255, 0.2);
//   position: relative;
//   z-index: 1000;
//   /* background: transparent; */
//   /* padding-left: 165px;
//    padding-right: 165px; */
// `;

// const Navbar = () => {
//   return (
//     <Container>
//       <StyledNavbar>
//         <Link to="/">
//           <img src={audiophile} />
//         </Link>
//       </StyledNavbar>
//     </Container>
//   );
// };

// export default Navbar;

"use client";

// import Link from "next/link";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import styles from "./navbar.module.css";
// import Image from "next/image";
import { styled, css } from "styled-components";

import audiophile from "../../image/audiophile2.svg";
import cart from "../../image/cart.svg";
import CartCard from "../cartcard/CartCard";

const Container = styled.div`
  padding-top: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;

  /* background-color: #000;
  z-index: 1000; */
  ${(props) =>
    props.color === "primary" &&
    css`
      background: #000;
      /* color: #fff; */
    `}
`;

const StyledNavbar = styled.div`
  height: 65px;
  width: 77%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #141414;
  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 1000;
  background: transparent;
  /* padding-left: 165px;
  padding-right: 165px; */
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
  color: #fff;
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: #d87d4a;
  }
`;
const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  const toggleCart = () => {
    setOpen(!open);
  };

  return (
    <Container {...props}>
      <StyledNavbar>
        <StyledLink to="/swift">
          <img src={audiophile} width={143} height={25} />
        </StyledLink>
        <div>
          <StyledLinks>
            <StyledLink to="/swift">
              <li>HOME</li>
            </StyledLink>
            <StyledLink to="/swift/headphones">
              <li>HEADPHONES</li>
            </StyledLink>
            <StyledLink to="/swift/speakers">
              <li>SPEAKERS</li>
            </StyledLink>
            <StyledLink to="/swift/earphones">
              <li>EARPHONES</li>
            </StyledLink>
          </StyledLinks>
        </div>
        {/* <StyledLink to="" onClick={() => setOpen(true)}>
          <img src={cart} width={23.33} height={20} />
        </StyledLink>
      </StyledNavbar>
      {open && <CartCard onClose={() => setOpen(false)} />} */}
        <StyledLink to="" onClick={toggleCart}>
          <img src={cart} width={23.33} height={20} />
        </StyledLink>
      </StyledNavbar>
      {open && <CartCard />}
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

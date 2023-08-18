import React from "react";

import { styled } from "styled-components";

import Navbar from '../../components/navbar/Navbar'
import { Hero } from "../../components/hero/Hero";
import LargeProductCard from "../../components/largeproductcard/Largeproductcard";
import LongProductCard from "../../components/longproductcard/Longproductcard";
import BrandCard from "../../components/brandcarrd/BrandCard";
import SimpleCard from "../../components/simplecard/Simplecard";
import Imagecard from "../../components/imagecard/Imagecard";
import ProductCard  from '../../components/productcard/Productcard';
import Footer from "../../components/footer/Footer";

const StyledHero = styled.div`
  /* background-color: #141414; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 200px;

  /* margin-left: 165px; */
`;

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductCard />
      <LargeProductCard />
      <LongProductCard />
      <StyledHero>
        <SimpleCard />
        <Imagecard />
      </StyledHero>
      <BrandCard />
      <Footer />
      {/* Home */}
    </div>
  );
};

export default Home;

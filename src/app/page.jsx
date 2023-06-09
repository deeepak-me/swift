"use client";

import BrandCard from "@/components/brandcarrd/BrandCard";
import { Hero } from "@/components/hero/Hero";
import ImageCard from "@/components/imagecard/Imagecard";
import LargeProductCard from "@/components/largeproductcard/Largeproductcard";
import LongProductCard from "@/components/longproductcard/Longproductcard";
import ProductCard from "@/components/productcard/Productcard";
import SimpleCard from "@/components/simplecard/Simplecard";
import { StyleSheetManager, styled } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

// const StyledHero = styled.div`
//   background-color: #141414;
// `;
const StyledHero = styled(SimpleCard)`
  background-color: #141414;
  margin-left: 165px;
`
export default function Home() {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <div>
        {/* <StyledHero /> */}
          <Hero />
        {/* </StyledHero> */}
        <ProductCard />
        <LargeProductCard />
        <LongProductCard />
        <ImageCard />
        <StyledHero />
        {/* <SimpleCard /> */}
        <BrandCard />
      </div>
    </StyleSheetManager>
  );
}

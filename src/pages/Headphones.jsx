import React, { useState } from "react";

import headphoneImg from "../image/headphone3.png";

import TitleCard from "../components/titlecard/TitleCard";
import SuggestionCard from "../components/suggestioncard/SuggestionCard";
import ProductCard from "../components/productcard/Productcard";
import BrandCard from "../components/brandcarrd/BrandCard";
import PriceCard from "../components/pricecard/PriceCard";
import FeatureCard from "../components/featurecard/FeatureCard";
import Cart from "../components/cart/Cart";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Headphones = () => {
  const [blogs, setBlogs] = useState([
    {
      image: headphoneImg,
      title: "XX99 Mark I Headphones",
      about:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio.It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      price: "$ 2,999",
    },
    // {
    //   image: headphoneImg,
    //   title: "XX59 Headphones",
    //   about:
    //     "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    //   price: "$ 2,999",
    // },
  ]);

  return (
    <div>
      <Navbar />
      <TitleCard />
      <Cart />
      <PriceCard blogs={blogs} />
      {/* <PriceCard blogs={blogs}/> */}
      <FeatureCard />
      <SuggestionCard />
      <ProductCard />
      <BrandCard />
      <Footer />
    </div>
  );
};

export default Headphones;

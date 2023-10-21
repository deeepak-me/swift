import React, { useEffect, useState } from "react";

import headphoneImgOne from "../image/headphone3.png";
import headphoneImgTwo from "../image/headphone5.png";
import headphoneImgThree from "../image/headphone4.png";

import TitleCard from "../components/titlecard/TitleCard";
import SuggestionCard from "../components/suggestioncard/SuggestionCard";
import ProductCard from "../components/productcard/Productcard";
import BrandCard from "../components/brandcarrd/BrandCard";
import PriceCard from "../components/pricecard/PriceCard";
import FeatureCard from "../components/featurecard/FeatureCard";
// import Cart from "../components/cart/Cart";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ProductDetailsCard from "../components/productdetailscard/ProductDetailsCard";
import ProductList from "../list/productlist/ProductList";
import axios from "axios";

const Headphones = () => {
  // const [blogs, setBlogs] = useState([
  //   {
  //     image: headphoneImgOne,
  //     title: "XX99 Mark I Headphones",
  //     about:
  //       "The new XX99 Mark II headphones is the pinnacle of pristine audio.It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  //     price: "$ 2,999",
  //     index: 1,
  //   },
  //   {
  //     image: headphoneImgTwo,
  //     title: "XX59 Headphones",
  //     about:
  //       "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
  //     price: "$ 2,999",
  //     index: 2,
  //   },
  //   {
  //     image: headphoneImgThree,
  //     title: "XX59 Headphones",
  //     about:
  //       "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
  //     price: "$ 2,999",
  //     index: 3,
  //   },
  // ]);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/products?categories=headphones")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <Navbar />
      <TitleCard title="HEADPHONES" />
      <ProductList blogs={blogs} />
      {/* <ProductDetailsCard blogs={blogs}  /> */}
      {/* <Cart />
      <PriceCard blogs={blogs} /> */}
      {/* <PriceCard blogs={blogs}/> */}
      {/* <FeatureCard />
      <SuggestionCard /> */}
      {/* <FeatureCard blogs={blogs} /> */}
      <ProductCard />
      <BrandCard />
      <Footer />
    </div>
  );
};

export default Headphones;

import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import TitleCard from "../components/titlecard/TitleCard";
import Footer from "../components/footer/Footer";
import BrandCard from "../components/brandcarrd/BrandCard";
import ProductCard from "../components/productcard/Productcard";

import speakerImgOne from "../image/speaker4.png";
import speakerImgtwo from "../image/speaker5.png";
import ProductList from "../list/productlist/ProductList";

function Speakers() {
  const [blogs, setBlogs] = useState([
    {
      image: speakerImgOne,
      title: "ZX9 SPEAKER",
      about:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      price: "$ 2,999",
    },
    {
      image: speakerImgtwo,
      title: "ZX7 SPEAKER",
      about:
        "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      price: "$ 2,999",
    },
  ]);
  return (
    <div>
      <Navbar />
      <TitleCard title="SPEAKERS" />
      <ProductList blogs={blogs} />
      <ProductCard />
      <BrandCard />
      <Footer />
    </div>
  );
}

export default Speakers;

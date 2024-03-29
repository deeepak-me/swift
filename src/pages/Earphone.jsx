import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import TitleCard from "../components/titlecard/TitleCard";
import Footer from "../components/footer/Footer";
import BrandCard from "../components/brandcarrd/BrandCard";
import ProductCard from "../components/productcard/Productcard";
import ProductList from "../list/productlist/ProductList";

import headphoneImg from "../image/earbuds2.png";
import ImageGroupCard from "../components/imagegroupcard/ImageGroupCard";
import CheckOutCard from "../components/checkoutcard/CheckOutCard";
import SummaryCard from "../components/summarycard/SummaryCard";
import ConfirmationCard from "../components/confirmationcard/ConfirmationCard";
import PriceCard from "../components/pricecard/PriceCard";
import CartCard from "../components/cartcard/CartCard";
import axios from "axios";

const Earphone = () => {
  // const [blogs, setBlogs] = useState([
  //   {
  //     image: headphoneImg,
  //     title: "YX1 WIRELESS EARPHONES",
  //     about:
  //       "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
  //     price: "$ 2,999",
  //     index: 1,
  //   },
  // ]);

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(" http://localhost:8000/products?categories=earphones")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Navbar />
      <TitleCard title="EARPHONES" />
      <ProductList blogs={blogs} />
      <ProductCard />
      <BrandCard />
      {/* <ImageGroupCard />
      <CheckOutCard />
      <SummaryCard  />
      <ConfirmationCard /> */}
      {/* <PriceCard /> */}
      {/* <CartCard /> */}
      <Footer />
    </div>
  );
};

export default Earphone;

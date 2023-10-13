import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import FeatureCard from "../components/featurecard/FeatureCard";
import ImageGroupCard from "../components/imagegroupcard/ImageGroupCard";
import LongProductCard from "../components/longproductcard/Longproductcard";
import SuggestionCard from "../components/suggestioncard/SuggestionCard";
import ProductCard from "../components/productcard/Productcard";
import BrandCard from "../components/brandcarrd/BrandCard";
import PriceCard from "../components/pricecard/PriceCard";
import headphoneImgOne from "../image/headphone3.png";
import axios from "axios";

const Contents = styled.div`
  padding-top: 145px;
  padding-left: 120px;
  padding-right: 120px;
  align-items: start;
`;

const StyledLink = styled(Link)`
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
  /* margin-bottom: 32px; */
  text-decoration: none;

  &:hover {
    color: #d87d4a;
    opacity: 1;
  }
`;

const Layout = styled.div`
  /* display: flex;
  justify-content: center;
  gap: 30px; */
  margin-top: 32px;
`;

const ProductPage = () => {
  // const [blogs, setBlogs] = useState([
  //   {
  //     image: headphoneImgOne,
  //     title: "XX99 Mark I Headphones",
  //     about:
  //       "The new XX99 Mark II headphones is the pinnacle of pristine audio.It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  //     price: "$ 2,999",
  //   },
  // ]);

  const { id, category } = useParams();
  const [blogs, setBlogs] = useState(null);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    // Add the selected product to the cart.
    setCart([...cart, product]);
  };

  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, [id]);

  async function fetchProduct(id) {
    try {
      const product = await axios.get(`http://localhost:8000/products/${id}`);

      setBlogs(product.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <Navbar color="primary" />
      {blogs && (
        <Contents>
          <StyledLink to="#!">Go Back</StyledLink>
          <Layout>
            <PriceCard product={blogs} />
            <FeatureCard product={blogs} />
            <ImageGroupCard />
            <div>you may also like</div>
            <SuggestionCard />
            <ProductCard />
            <BrandCard />
          </Layout>
        </Contents>
      )}
      <Footer />
    </div>
  );
};

export default ProductPage;

import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CheckOutCard from "../components/checkoutcard/CheckOutCard";
import SummaryCard from "../components/summarycard/SummaryCard";
import ConfirmationCard from "../components/confirmationcard/ConfirmationCard";
import styled from "styled-components";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";

const StyledCheckOut = styled.div`
  background: #f1f1f1;
`;

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
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 32px;
`;

const Checkout = ({ onClick }) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledCheckOut>
      <Navbar color="primary" />

      <Contents>
        <StyledLink to="#!">Go Back</StyledLink>
        <Layout>
          <CheckOutCard />
          <SummaryCard onClick={() => setOpen(true)} />
        </Layout>
        {open && <ConfirmationCard onClose={() => setOpen(false)} />}
      </Contents>
      <Footer />
    </StyledCheckOut>
  );
};

export default Checkout;

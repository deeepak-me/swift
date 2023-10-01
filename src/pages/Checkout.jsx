import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CheckOutCard from "../components/checkoutcard/CheckOutCard";
import SummaryCard from "../components/summarycard/SummaryCard";
import styled from "styled-components";

const StyledCheckOut = styled.div`
  background: #f1f1f1;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const Checkout = () => {
  return (
    <StyledCheckOut>
      {/* <Navbar color="primary" /> */}

      <Content>
        <CheckOutCard />
        <SummaryCard />
      </Content>
      <Footer />
    </StyledCheckOut>
  );
};

export default Checkout;

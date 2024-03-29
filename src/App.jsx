import React from "react";
import Home from "./pages/Home/Home";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import { Route, Routes } from "react-router-dom";

import Headphones from "./pages/Headphones";
import Earphone from "./pages/Earphone";
import Speakers from "./pages/Speakers";
import Checkout from "./pages/Checkout";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <div id="app">
        {/* <Home /> */}
        {/* <Headphones /> */}
        <Routes>
          <Route path="/swift">
            <Route index element={<Home />} />
            <Route path="headphones" element={<Headphones />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="earphones" element={<Earphone />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path=":category/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </div>
    </StyleSheetManager>
  );
};

export default App;

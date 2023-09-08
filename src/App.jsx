import React from "react";
import Home from "./pages/Home/Home";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import { Route, Routes } from "react-router-dom";

import Headphones from "./pages/Headphones";
import Earphone from "./pages/Earphone";
import Speakers from "./pages/Speakers";

const App = () => {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <div>
        {/* <Home /> */}
        {/* <Headphones /> */}
        <Routes>
          <Route path="/swift">
            <Route index element={<Home />} />
            <Route path="headphones" element={<Headphones />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="earphones" element={<Earphone />} />
          </Route>
        </Routes>
      </div>
    </StyleSheetManager>
  );
};

export default App;

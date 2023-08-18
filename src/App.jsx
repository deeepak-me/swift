import React from "react";
import Home from "./pages/Home/Home";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import Headphones from "./pages/Headphones";

import { Route,Routes } from "react-router-dom";

const App = () => {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <div>
        {/* <Home /> */}
        {/* <Headphones /> */}
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/Headphones" element={<Headphones  />} />

        </Routes>
      </div>
    </StyleSheetManager>
  );
};

export default App;

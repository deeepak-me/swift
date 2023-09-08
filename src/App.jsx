import React from "react";
import Home from "./pages/Home/Home";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import { Route,Routes } from "react-router-dom";

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
          <Route path="/" element={<Home  />} />
          <Route path="/Headphones" element={<Headphones  />} />
          <Route path="/Speakers" element={<Speakers  />} />
          <Route path="/Earphones" element={<Earphone  />} />
        </Routes>
      </div>
    </StyleSheetManager>
  );
};

export default App;

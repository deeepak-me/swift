"use client";

// import Image from "next/image";
import React from "react";

import earPhone from "../../image/earphone.png";
import { styled } from "styled-components";

const Card = styled.div`
  /* background: url({earPhone}), lightgray 0px 0px / 100% 100% no-repeat; */
  width: 540px;
  height: 320px;
  flex-shrink: 0;
  object-fit: contain;
`;
const Img = styled.img`
  border-radius: 8px;
  object-fit: contain;
  background: #f1f1f1;
`;

const Imagecard = () => {
  return (
    <Card>
      <Img src={earPhone} />
    </Card>
  );
};

export default Imagecard;

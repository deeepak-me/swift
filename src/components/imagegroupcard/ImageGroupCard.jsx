import React from "react";
import { styled } from "styled-components";

import headphoneImgTwo from "../../image/Bitmap1.png";
import headphoneImgThree from "../../image/Bitmap2.png";
import headphoneImgOne from "../../image/Bitmap3.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 160px;
`;

const ImageSet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;
const ImageSetOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
`;
const ImageOne = styled.img`
  width: 445px;
  height: 280px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f1f1f1;
`;

const ImageTwo = styled.img`
  width: 635px;
  height: 592px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f1f1f1;
`;

const ImageGroupCard = () => {
  return (
    <Container>
      <ImageSet>
        <ImageSetOne>
          <ImageOne src={headphoneImgOne} />
          <ImageOne src={headphoneImgTwo} />
        </ImageSetOne>
        <ImageTwo src={headphoneImgThree} />
      </ImageSet>
    </Container>
  );
};

export default ImageGroupCard;

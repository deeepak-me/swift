import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #cfcfcf;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RadialButtonContainer = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  /* border: 2px solid #ccc; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;

  ${(props) =>
    props.selected &&
    `
    background-color: #D87D4A;; 
    border-color: #D87D4A;; 
    color: #fff; 
  `}
`;

function RadialButton() {
  const [selected, setSelected] = useState(false);

  const toggleSelection = () => {
    setSelected(!selected);
  };

  return (
    <Container>
      <RadialButtonContainer selected={selected} onClick={toggleSelection}>
        {/* Radial Button */}
      </RadialButtonContainer>
    </Container>
  );
}

export default RadialButton;

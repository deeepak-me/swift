"use client";

import React, { useState } from "react";

import { styled, css } from "styled-components";

const StyledButton = styled.button`
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  background-color: #d87d4a;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 15px 30px;
  /* width: 160px; */
  text-transform: uppercase;

  &:hover {
    opacity: 0.9;
    background: #fbaf85;
    /* color: red; */
  }

  ${(props) =>
    props.color === "primary" &&
    css`
      background: #000;
      color: #fff;

      &:hover {
        opacity: 0.9;
        background: #fff;
        color: #000;
      }
    `}

  ${(props) =>
    props.color === "secondary" &&
    css`
      display: flex;
      justify-content: center;
      border: none;
      background: none;
      text-align: center;
      color: #000;
      opacity: 0.5;

      &:hover {
        background: none;
        color: #d87d4a;
      }
    `}
    ${(props) =>
    props.variant === "bordered" &&
    css`
      background: transparent;
      border: 1px solid #000;
      color: #000;

      &:hover {
        background-color: #000;
        color: #fff;
      }
    `}
`;

const Button = ({ children, ...rest }) => {
  function getStyles(props) {
    let classes = [];

    if (props.color === "red") {
      classes.push("red-btn");
    }

    return classes.join(" ");
  }

  return (
    <StyledButton {...rest} className={getStyles(rest)}>
      {children}
    </StyledButton>
  );
};

export default Button;

import React from "react";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import Flex from "../Flex/Flex";

const StyledButtons = styled.button`
  height: 60px;
  width: 150px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 6px;
  font-size: 1.25rem;
  margin: 1rem 1rem 1rem;
`;

const StyledNavBar = styled.nav``;
export default function Buttons() {
  return (
    <StyledNavBar>
      <Link to="test-1">
        <StyledButtons> test-1</StyledButtons>
      </Link>
      <Link to="test-2">
        <StyledButtons> test-2</StyledButtons>
      </Link>
      <Link to="test-3">
        <StyledButtons> test-3</StyledButtons>
      </Link>
      <Link to="/">
        <StyledButtons>home</StyledButtons>
      </Link>
    </StyledNavBar>
  );
}

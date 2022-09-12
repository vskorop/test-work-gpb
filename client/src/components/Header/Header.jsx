import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h3`
  border-radius: 3px;
  max-width: 800px;
  min-width: 400px;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #c9c9c9;
  height: 30px;
`;

export default function Header(props) {
  return <StyledHeader {...props} />;
}

import React from "react";
import styled from "styled-components";

const StyledItems = styled.div`
  font-size: 16px;
  height: 38px;
  border-bottom: 0.3px solid #c5c5c5;
  padding: 6px 12px;
  display: table-row;
  background: transparent;
  text-align: center;
  text-decoration: none;
`;

export default function Items(props) {
  return <StyledItems {...props} />;
}

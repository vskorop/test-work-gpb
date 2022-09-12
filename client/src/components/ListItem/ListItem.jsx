/* eslint-disable react/destructuring-assignment */
import React from "react";
import styled from "styled-components";

const StyledList = styled.div`
  display: flex;
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
`;

export default function ListItem(props) {
  const listArray = props.props;
  return (
    <StyledList {...props}>
      <ul>
        {listArray.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </StyledList>
  );
}

import React from "react";
import styled from "styled-components";
import Flex from "../Flex/Flex";

const WindowError = styled.div`
  text-align: center;
  heigth: 70px;
  width: 300px;
  border: 1px solid black;
  border-bottom: none;
  background-color: #de6254;
  border-radius: 5px 5px 0px 0px;
`;
const StyledButtonError = styled.button`
  heigth: 70px;
  width: 300px;
  border: 1px solid black;
  background-color: grey;
  border-top: none;
  opacity: 0.5l;
  border-radius: 0% 0% 5px 5px;
`;

export default function ErrorPage({ params }) {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <Flex direction="column">
      <WindowError>Error</WindowError>
      <StyledButtonError onClick={reloadPage}>
        Повторить Запрос
      </StyledButtonError>
    </Flex>
  );
}

import React from "react";
import styled from "styled-components";
import Flex from "../Flex/Flex";
import ListItem from "../ListItem/ListItem";

const StyledCard = styled.div`
  min-height: 300px;
  min-width: 150px;
  max-width: 350px;
  border: 1px solid ${(props) => props.color || "grey"};
  border-radius: 5px;
  margin: 1rem 1rem 1rem;
`;
const arr = [
  {
    header: "Заголовок 1",
    options: ["элемент списка 1", "элемент списка 2", "элемент списка 3"],
    text: "какой-то текст 1 текст какой-то 1 какой-то",
  },
  {
    header: "Заголовок 2",
    options: ["элемент списка 2", "элемент списка 2", "элемент списка 3"],
    text: "какой-то текст 1 текст какой-то 1 какой-то",
  },
  {
    header: "Заголовок 3",
    options: ["элемент списка 2", "элемент списка 2", "элемент списка 3"],
    text: "какой-то текст 1 текст какой-то 1 какой-то",
  },
];
export default function Test_1(...props) {
  return arr.map((elem, index) => (
    <StyledCard key={index} {...props}>
      <Flex direction="column" padding="1rem 1rem 0">
        {elem.header}
        <ListItem margin="1rem 1rem 1rem" props={elem.options} />
        {elem.text}
      </Flex>
    </StyledCard>
  ));
}

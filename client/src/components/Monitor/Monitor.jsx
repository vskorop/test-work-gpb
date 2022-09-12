import React from "react";
import styled from "styled-components";
import { DISPLAY_MODE_DAY, DISPLAY_MODE_MONTH } from "../heplers/consts";

const DivWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  color: #dcdddd;
  padding: 16px;
  position: relative;
`;

const TextWrapper = styled("span")`
  font-size: 32px;
`;

const TitleWrapper = styled(TextWrapper)`
  font-weight: bold;
  margin-right: 8px;
  margin-left: 8px;
`;

const ButtonsWrapper = styled("div")`
  display: flex;
  align-items: center;
`;

const ButtonsCenterWrapper = styled(ButtonsWrapper)`
  position: absolute;
  top: 50%;
  right: 50%;
`;

const ButtonWrapper = styled("button")`
  border: unset;
  border: 1px solid grey;
  height: 30px;
  width: 50px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Monitor({
  today,
  prevHandler,
  todayHandler,
  nextHandler,
  setDisplayMode,
  displayMode,
}) {
  return (
    <DivWrapper>
      <div>
        {displayMode === DISPLAY_MODE_DAY ? (
          <TextWrapper>{today.format("DD")}</TextWrapper>
        ) : null}
        <TitleWrapper>{today.format("MMMM")}</TitleWrapper>
        <TextWrapper>{today.format("YYYY")}</TextWrapper>
      </div>
      <ButtonsCenterWrapper>
        <ButtonWrapper
          unPressed={displayMode === DISPLAY_MODE_MONTH}
          onClick={() => setDisplayMode(DISPLAY_MODE_MONTH)}
        >
          Month
        </ButtonWrapper>
        <ButtonWrapper
          unPressed={displayMode === DISPLAY_MODE_DAY}
          onClick={() => setDisplayMode(DISPLAY_MODE_DAY)}
        >
          Day
        </ButtonWrapper>
      </ButtonsCenterWrapper>
      <ButtonsWrapper>
        <ButtonWrapper onClick={prevHandler}> &lt; </ButtonWrapper>
        <ButtonWrapper onClick={todayHandler}>Today</ButtonWrapper>
        <ButtonWrapper onClick={nextHandler}> &gt; </ButtonWrapper>
      </ButtonsWrapper>
    </DivWrapper>
  );
}

export default Monitor;

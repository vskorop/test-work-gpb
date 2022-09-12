import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MonthDaysList from "../MonthDaysList/MonthDaysList";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: black;
  border-top: 0.5px solid grey;
`;

function CalendarGrid({
  startDay,
  today,
  totalDays,
  events,
  openFormHandler,
  setDisplayMode,
}) {
  return (
    <>
      <GridWrapper isHeader />
      <GridWrapper>
        <MonthDaysList
          totalDays={totalDays}
          openFormHandler={openFormHandler}
          events={events}
          startDay={startDay}
          today={today}
          setDisplayMode={setDisplayMode}
        />
      </GridWrapper>
    </>
  );
}

export default CalendarGrid;

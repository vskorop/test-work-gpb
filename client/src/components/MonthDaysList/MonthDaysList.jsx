/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { isDayContainCurrentEvent } from "../heplers/index";
import CalendarCell from "../CalendarCell/CalendarCell";

const MonthDaysList = ({
  startDay,
  totalDays,
  events,
  openFormHandler,
  today,
  setDisplayMode,
}) => {
  const dispatch = useDispatch();
  const dateEvents = useSelector((store) => store.dateEvents);
  const day = startDay.clone().subtract(1, "day");
  const daysMap = [...Array(totalDays)].map(() => day.add(1, "day").clone());
  return daysMap.map((dayItem) => (
    <CalendarCell
      key={dayItem}
      today={today}
      events={dateEvents?.filter((event) =>
        isDayContainCurrentEvent(event, dayItem)
      )}
      openFormHandler={openFormHandler}
      dayItem={dayItem}
      setDisplayMode={setDisplayMode}
    />
  ));
};
export default MonthDaysList;

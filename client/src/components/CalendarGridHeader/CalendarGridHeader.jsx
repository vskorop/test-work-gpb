import React from "react";
import moment from "moment";
import { CellWrapper } from "../StyledComponents/StyledComponents";

function CalendarGridHeader() {
  return (
    <>
      {[...Array(7)].map((_, i) => (
        <CellWrapper isHeader isSelectedMonth key={i}>
          {moment()
            .day(i + 1)
            .format("ddd")}
        </CellWrapper>
      ))}
    </>
  );
}
export default CalendarGridHeader;

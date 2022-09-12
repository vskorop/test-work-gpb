/* eslint-disable react/jsx-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/button-has-type */
import React from "react";
import styled from "styled-components";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { isDayContainCurrentEvent } from "../heplers/index";
import {
  ButtonsWrapper,
  ButtonWrapper,
  EventBody,
  EventItemWrapper,
  EventTitle,
} from "../StyledComponents/StyledComponents";
import { ITEMS_PER_DAY } from "../heplers/consts";

const DayShowWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  border-top: 1px solid #464648; ;
`;

const EventsListWrapper = styled.div`
  background-color: white;
  color: #dddddd;
  flex-grow: 1;
`;

const EventFormWrapper = styled.div`
  background-color: white;
  color: #dddddd;
  width: 300px;
  position: relative;
  border-left: 1px solid #464648; ;
`;
const NoEventMsg = styled.div`
  color: #565759;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

const ScaleWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 4px;
`;

const ScaleCellWrapper = styled.div`
  flex-grow: 1;
  position: relative;
  border-bottom: 1px solid #464648;
  margin-left: 32px;
`;

const ScaleCellTimeWrapper = styled.div`
  position: absolute;
  left: -26px;
  top: -6px;
  font-size: 8px;
`;

const ScaleCellEventWrapper = styled("div")`
  min-height: 16px;
`;

const EventItemButton = styled(EventItemWrapper)`
  min-width: 50px;
  margin-left: 4px;
`;

function DayShowComponent({
  events,
  today,
  selectedEvent,
  changeEventHandler,
  cancelButtonHandler,
  eventHandler,
  method,
  removeEventHandler,
  openFormHandler,
}) {
  const dateEvents = useSelector((store) => store.dateEvents);
  const eventList = dateEvents.filter((event) =>
    isDayContainCurrentEvent(event, today)
  );

  const cells = [...new Array(ITEMS_PER_DAY)].map((_, i) => {
    const temp = [];
    eventList.forEach((event) => {
      if (+moment.unix(+event.date).format("H") === i) {
        temp.push(event);
      }
    });
    return temp;
  });
  return (
    <DayShowWrapper>
      <EventsListWrapper>
        <ScaleWrapper>
          {cells.map((eventsList, i) => (
            <ScaleCellWrapper>
              <ScaleCellTimeWrapper>
                {i ? (
                  <>
                    {`${i}`.padStart(2, "0")}
                    :00
                  </>
                ) : null}
              </ScaleCellTimeWrapper>
              <ScaleCellEventWrapper>
                {eventsList.map((event) => (
                  <EventItemButton
                    onClick={() => openFormHandler("Update", event)}
                  >
                    {event.title}
                  </EventItemButton>
                ))}
              </ScaleCellEventWrapper>
            </ScaleCellWrapper>
          ))}
        </ScaleWrapper>
      </EventsListWrapper>
      <EventFormWrapper>
        {selectedEvent ? (
          <div>
            <EventTitle
              value={selectedEvent.title}
              onChange={(e) => changeEventHandler(e.target.value, "title")}
              placeholder="Title"
            />
            <EventBody
              type="date"
              id="start"
              name="trip-start"
              value={`${today.format("YYYY-MM-DD")}`}
              // value={selectedEvent.description}
              onChange={(e) =>
                changeEventHandler(e.target.value, "description")
              }
              placeholder="Description"
            />

            <ButtonsWrapper>
              <ButtonWrapper onClick={cancelButtonHandler}>
                Cancel
              </ButtonWrapper>
              <ButtonWrapper onClick={eventHandler}>{method}</ButtonWrapper>
              {method === "Update" ? (
                <ButtonWrapper danger onClick={removeEventHandler}>
                  Remove
                </ButtonWrapper>
              ) : null}
            </ButtonsWrapper>
          </div>
        ) : (
          <>
            <div>
              <button onClick={() => openFormHandler("Create", null, today)}>
                Create new event
              </button>
            </div>
            <NoEventMsg>No event selected</NoEventMsg>
          </>
        )}
      </EventFormWrapper>
    </DayShowWrapper>
  );
}
export default DayShowComponent;

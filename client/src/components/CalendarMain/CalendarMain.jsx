/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Monitor from "../Monitor/Monitor";
import CalendarGrid from "../CalendarGrid/CalendarGrid";
import { DISPLAY_MODE_DAY, DISPLAY_MODE_MONTH } from "../heplers/consts";
import DayShowComponent from "../DayShowComponent/DayShowComponent";
import {
  ButtonsWrapper,
  ButtonWrapper,
  EventBody,
  EventTitle,
  ShadowWrapper,
  FormPositionWrapper,
  FormWrapper,
} from "../StyledComponents/StyledComponents";
import {
  addEventThunk,
  addeventThunk,
  deleteEventThunk,
  getTodayThunk,
  updateEventThunk,
} from "../../redux/actions/eventsAction";

const notify = () => toast("Here is your toast.");
const totalDays = 42;
const defaultEvent = {
  title: "",
  description: "",
  date: moment().format("X"),
};
function CalendarMain() {
  const [displayMode, setDisplayMode] = useState(DISPLAY_MODE_MONTH);
  moment.updateLocale("en", { week: { dow: 1 } });
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");
  const prevHandler = () =>
    setToday((prev) => prev.clone().subtract(1, displayMode));
  const todayHandler = () => setToday(moment());
  const nextHandler = () =>
    setToday((prev) => prev.clone().add(1, displayMode));

  const [method, setMethod] = useState(null);
  const [isShowForm, setShowForm] = useState(false);
  const [event, setEvent] = useState(null);

  const dateEvents = useSelector((store) => store.dateEvents);
  const [events, setEvents] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("dateEvents")) || [
        {
          title: "Title",
          description: "Description",
          date: "1662066000",
        },
      ]
  );
  useEffect(() => {
    window.localStorage.setItem("dateEvents", JSON.stringify(dateEvents));
  }, [dateEvents]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodayThunk(events));
  }, []);

  const openFormHandler = (methodName, eventForUpdate, dayItem) => {
    setEvent(eventForUpdate || { ...defaultEvent, date: dayItem.format("X") });
    setMethod(methodName);
  };

  const openModalFormHandler = (methodName, eventForUpdate, dayItem) => {
    setShowForm(true);
    openFormHandler(methodName, eventForUpdate, dayItem);
  };

  const cancelButtonHandler = () => {
    setShowForm(false);
    setEvent(null);
  };

  const changeEventHandler = (text, field) => {
    setEvent((prevState) => ({
      ...prevState,
      [field]: text,
    }));
    console.log(text, field);
  };

  const eventHandler = () => {
    if (method === "Update") {
      dispatch(updateEventThunk(event));
    } else {
      dispatch(addEventThunk(event));
    }
    cancelButtonHandler();
  };

  const removeEventHandler = () => {
    dispatch(deleteEventThunk(event));
    cancelButtonHandler();
  };
  return (
    <>
      {/* <button onClick={notify}>Make me a toast</button>
      <Toaster />  for notficatios */}
      {isShowForm ? (
        <FormPositionWrapper onClick={cancelButtonHandler}>
          <FormWrapper onClick={(e) => e.stopPropagation()}>
            <EventTitle
              value={event.title}
              onChange={(e) => changeEventHandler(e.target.value, "title")}
              placeholder="Title"
            />
            <EventBody
              value={event.description}
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
          </FormWrapper>
        </FormPositionWrapper>
      ) : null}
      <ShadowWrapper>
        <Monitor
          today={today}
          prevHandler={prevHandler}
          todayHandler={todayHandler}
          nextHandler={nextHandler}
          setDisplayMode={setDisplayMode}
          displayMode={displayMode}
        />
        {displayMode === DISPLAY_MODE_MONTH ? (
          <CalendarGrid
            startDay={startDay}
            today={today}
            totalDays={totalDays}
            events={events}
            openFormHandler={openModalFormHandler}
            setDisplayMode={setDisplayMode}
          />
        ) : null}
        {displayMode === DISPLAY_MODE_DAY ? (
          <DayShowComponent
            events={events}
            today={today}
            selectedEvent={event}
            setEvent={setEvent}
            changeEventHandler={changeEventHandler}
            cancelButtonHandler={cancelButtonHandler}
            eventHandler={eventHandler}
            method={method}
            removeEventHandler={removeEventHandler}
            openFormHandler={openFormHandler}
          />
        ) : null}
      </ShadowWrapper>
    </>
  );
}

export default CalendarMain;

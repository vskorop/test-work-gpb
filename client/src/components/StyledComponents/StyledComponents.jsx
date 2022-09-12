import styled from "styled-components";

export const CellWrapper = styled.div`
  min-height: ${(props) => (props.isHeader ? 30 : 100)}px;
  min-width: 100px;
  background-color: ${(props) => (props.isWeekday ? "grey" : "white")};
`;

export const EventListWrapper = styled("ul")`
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const ShadowWrapper = styled("div")`
  min-width: 850px;
  height: 665px;
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const EventListItemWrapper = styled("li")`
  padding-left: 2px;
  padding-right: 2px;
  margin-bottom: 2px;
  display: flex;
`;

export const EventItemWrapper = styled("button")`
  position: relative;
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 314px;
  color: black;
  cursor: pointer;
  margin: 0;
  padding: 0;
  text-align: left;
  background-color: pink;
  border: 2px solid pink;
  border-radius: 2px;
`;

export const EventTitle = styled("input")`
  padding: 8px 14px;
  font-size: 0.85rem;
  width: 100%;
  border: unset;
  border: unset;
  background-color: transparent;
  color: black;
  outline: unset;
  border-bottom: 1px solid #464648;
`;

export const EventBody = styled("textarea")`
  padding: 8px 14px;
  font-size: 0.85rem;
  width: 100%;
  border: unset;
  background-color: transparent;
  color: black;
  outline: unset;
  border-bottom: 1px solid #464648;
  resize: none;
  height: 60px;
`;

export const ButtonsWrapper = styled("div")`
  padding: 8px 14px;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonWrapper = styled("button")`
  color: ${(props) => (props.danger ? "#f00" : "#27282A")};
  border: 1px solid ${(props) => (props.danger ? "#f00" : "#27282A")};
  border-radius: 2px;
  cursor: pointer;
  margin-right: 2px;
`;

export const FormPositionWrapper = styled("div")`
  position: absolute;
  z-index: 100;
  background-color: transparent;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled(ShadowWrapper)`
  width: 320px;
  min-width: 320px;
  height: 132px;
  background-color: white;
`;
export const DayWrapper = styled.div`
  height: 31px;
  width: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  cursor: pointer;
`;

export const CurrentDay = styled("div")`
  height: 100%;
  width: 100%;
  background: red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShowDayWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
`;

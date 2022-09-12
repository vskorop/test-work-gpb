import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Routes, Route
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';

import Card from './components/Card/Card';
import Flex from './components/Flex/Flex';
import Buttons from './components/Buttons/Buttons';
import ServiceList from './components/ServiceList/ServiceList';
import ServiceItem from './components/ServiceItem/ServiceItem';
import { getServicesThunk } from "./redux/actions/getAllServices";
import CalendarMain from './components/CalendarMain/CalendarMain';
import { getTodayThunk } from './redux/actions/eventsAction';

const AppWrapper = styled.div`
width:100%;
min-height: 100vh;
padding: 2rem;
`;
const totalDays = 42;
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServicesThunk());
    // dispatch(getTodayThunk());
  }, []);
  const serviceList = useSelector((store) => store.serviceList.items);
  return (
    <AppWrapper>

      <Flex justify="center">
        <Buttons />
      </Flex>

      <Flex justify="center">

        <Routes>
          <Route
            path="/test-1"
            element={<Card color="red" />}
          />
          <Route
            path="/test-2"
            element={<ServiceList />}
          />
          <Route
            path="/:id/details"
            element={<ServiceItem services={serviceList} />}
          />
          <Route
            path="/test-3"
            element={<CalendarMain />}
          />
        </Routes>

      </Flex>

    </AppWrapper>

  );
}

export default App;

/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Flex from "../Flex/Flex";
import Header from "../Header/Header";
import Items from "../Items/Items";
import Loader from "../Loader/Loader";

export default function ServiceList() {
  const serviceList = useSelector((store) => store.serviceList.items);
  const newError = useSelector((store) => store.serviceList.error);

  const mapItems = serviceList?.map((elem) => (
    <Items key={elem.id}>
      <Link to={`/${elem.id}/details`}>{elem.name}</Link>
    </Items>
  ));

  const condition = serviceList.length > 0 ? <Header>name</Header> : <Loader />;

  const mainInfo =
    serviceList.length > 0 ? (
      <>
        {condition}
        {mapItems}
      </>
    ) : (
      <Loader />
    );

  const errorCondition = newError ? <ErrorPage /> : mainInfo;

  return (
    <Flex direction="column">
      {errorCondition}
    </Flex>
  );
}

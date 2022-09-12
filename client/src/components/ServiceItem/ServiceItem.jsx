/* eslint-disable react/destructuring-assignment */
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ErrorPage from "../ErrorPage/ErrorPage";
import Flex from "../Flex/Flex";
import Header from "../Header/Header";
import Items from "../Items/Items";
import Loader from "../Loader/Loader";

export default function ServiceItem(services) {
  const params = useParams();
  const serviceItem = services?.services.filter(
    (elem) => elem.id === params.id
  )[0];

  const newError = useSelector((store) => store.serviceList.error);

  const condition = serviceItem ? <Header>info</Header> : <Loader />;

  const errorCondition = newError ? (
    <ErrorPage />
  ) : (
    <>
      {condition}
      <Items>{serviceItem?.name}</Items>
      <Items>{serviceItem?.id}</Items>
      <Items>{serviceItem?.price}</Items>
    </>
  );
  return <Flex direction="column">{errorCondition}</Flex>;
}

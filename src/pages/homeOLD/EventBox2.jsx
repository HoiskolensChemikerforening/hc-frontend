import React from "react";
import "../../index.css";
import styled from "styled-components";
import { H1, P } from "../../components/Text";
import { Col } from "../../components/FlexLayout";
import { EventListing } from "./EventListing";

const EventBox2 = () => (
    <Col flex={3}>
        <H1 bold>Kommende datoer</H1>
        <EventListing link={"#"} />
        <EventListing link={"#"} />
        <EventListing link={"#"} />
        <EventListing link={"#"} />
        <EventListing link={"#"} />
    </Col>
);

export { EventBox2 };
import React from "react";
import "../../index.css";
import styled from "styled-components";
import News1 from "../../images/hc.jpg";
import { H1 } from "../../components/Text";
import { NewsListing } from "./NewsListing";
import { Col, Row } from "../../components/FlexLayout";

const NewsBox = () => (
    <Col flex={7}>
        <Row>
            <NewsListing src={News1} />
            <NewsListing src={News1} />
        </Row>
        <Row>
            <NewsListing src={News1} />
            <NewsListing src={News1} />
        </Row>
    </Col>
);

export { NewsBox };
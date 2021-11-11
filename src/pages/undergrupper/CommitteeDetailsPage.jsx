import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../components/Layout";
import { H1 } from "../../components/Text";

export const CommitteeDetailsPage = () => (
    <Column>
        <H1>Webkom</H1>
        <Row>
            <img src="~/Pictures/IMG_3914_02.jpg/"></img>
        </Row>
    </Column>
);


const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


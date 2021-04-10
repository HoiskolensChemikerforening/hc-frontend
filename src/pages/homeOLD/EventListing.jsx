import React from "react";
import "../../index.css";
import styled from "styled-components";
import { P, Link } from "../../components/Text";
import { Row } from "../../components/FlexLayout";

const EventListing = ({ link }) => (
    <Link href={link}>
            <Row justify="flex-start" margin={"20px 0"}>
                <DateBox>
                    <Date>12.5</Date>
                </DateBox>
                <EventName>
                    Shottelista
                </EventName>
            </Row>
    </Link>
);

const DateBox = styled.div`
    background: var(--primary);
    border-radius: 5px;
    padding: 5px;
    width: 42px;
    height: 17px;
    text-align: center;
`;

const Date = styled(P)`
    font-size: 12px;
    font-weight: bold;
`;

const EventName = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
`;

export { EventListing };
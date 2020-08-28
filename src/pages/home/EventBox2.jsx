import React from "react";
import "../../index.css";
import styled from "styled-components";
import { H1, P } from "../../components/Text";

const EventBox2 = () => (
    <Wrapper>
        <H1 bold>Kommende datoer</H1>
        <EventListing href="#">
            <DateBox>
                <Date>5.8</Date>
            </DateBox>
            <EventName>StoorpHaest</EventName>
        </EventListing>
        <EventListing href="#">
            <DateBox>
                <Date>10.8</Date>
            </DateBox>
            <EventName>pHnockepHaest</EventName>
        </EventListing>
        <EventListing href="#">
            <DateBox>
                <Date>12.8</Date>
            </DateBox>  
            <EventName>Shottelista</EventName>
        </EventListing>
        <EventListing href="#">
            <DateBox>
                <Date>15.10</Date>
            </DateBox>
            <EventName>Bedriftspresentasjon med Sintef</EventName>
        </EventListing>
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const EventListing = styled.a`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    text-decoration: none;
`;

const DateBox = styled.div`
    background: var(--primary);
    border-radius: 5px;
    padding: 5px;
    width: 42px;
    height: 20px;
    text-align: center;
`;

const Date = styled(P)`
    font-size: 14px;
    font-weight: bold;
`;

const EventName = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
`;

export { EventBox2 };
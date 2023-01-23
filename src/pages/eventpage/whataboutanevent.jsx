import React from "react"
import { useLocation, useParams } from "react-router";
import { H1, P } from "../../components/Text";
import { Col, Row } from "../../components/Layout";
import styled from "styled-components";



export const EventDetailPage = (props) => {
    const {event} = useParams();

    let location = useLocation();
    
    return (
        <>
        <Col>
            <H1>
                {location.state.event.title}
            </H1>
            <Row>
                <img src={location.state.event.image} width="75%" height="auto"></img>
                <Col>
                    <P> Hvor: {location.state.event.location} </P>
                </Col>
            </Row>
        </Col>
        </>
    )
}

const Rw = styled.div`
    display: flex;
    flex-direction: row;
`;
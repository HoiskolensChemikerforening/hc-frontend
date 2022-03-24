import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "../../components/Layout";
import { H1 } from "../../components/Text";
import { useLocation } from "react-router-dom";

export default function CommitteeDetailsPage(props) {
    const { committee } = useParams();

    let location = useLocation();

    return (
    <>
    <Container>
        <Column>
            <H1>{ location.state.committee.title }</H1>
            <Rw>
                <img width="500px" src={location.state.committee.image} ></img>
                <Column>
                    <div>Medlemmer</div>
                    <div>Navn</div>
                    <div>Navn</div>
                </Column>
            </Rw>
        </Column>
    </Container>
    </>
    );
}


const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Rw = styled.div`
    display: flex;
    flex-direction: row; 
`;

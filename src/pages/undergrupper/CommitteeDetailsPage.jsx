import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "../../components/Layout";
import { H1 } from "../../components/Text";
import { useLocation } from "react-router-dom";
import { CommitteeMemberList } from "../../components/CommitteeMembersList";

function CommitteeDetailsPage(props) {
    const { committee } = useParams();

    let location = useLocation();

    return (
    <>
    <Container>
        <Column>
            <H1>{ location.state.committee.title }</H1>
            <Rw>
                <Col xs="12" sm="12" md="8" lg="8">
                    <ImageContainer>
                        <img width="100%" height="auto" /*The width should be dynamic*/ src={location.state.committee.image} ></img>
                    </ImageContainer>
                </Col>
                <Col xs="12" sm="12" md="3" lg="3">
                <CommitteeMemberList> </CommitteeMemberList>
                </Col>
            </Rw>
        </Column>
        <p>Lorem Ipsum etc. Here there should be a mapping fetching the description of the chosen committee, and displaying the text. It should also be styled so it does not look horrendous. It should at no point be wider than the combined image and position card.</p>
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
    flex-wrap: wrap;
`;

const ImageContainer = styled.div`
    width: 100%;
    min-width: 400px;
`;

export {
    CommitteeDetailsPage,
    Column
}
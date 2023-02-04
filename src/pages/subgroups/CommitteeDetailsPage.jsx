import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "../../components/Layout";
import { H1 } from "../../components/Text";
import { useLocation } from "react-router-dom";
import { CommitteeMemberList } from "../../components/CommitteeMembersList";
import parse from "react-html-parser";

function CommitteeDetailsPage (props) {
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
                        <img width="100%" height="auto" src={location.state.committee.image} ></img>
                    </ImageContainer>
                </Col>
                <Col xs="12" sm="12" md="3" lg="3">
                <CommitteeMemberList key={committee.id} committee={location.state.committee}> </CommitteeMemberList>
                </Col>
            </Rw>
            <Description>
                <p>{parse(location.state.committee.description)} </p>
            </Description>
        </Column>
            
        
    </Container>
    </>
    );
};


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

const Description = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
`;

const ImageContainer = styled.div`
    width: 100%;
    min-width: 400px;
`;

export {
    CommitteeDetailsPage,
    Column
}
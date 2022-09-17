import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Row, Col } from "./Layout";
import { useHistory } from "react-router-dom";
import { H2 } from "../components/Text";
import { Column } from "../pages/undergrupper/CommitteeDetailsPage"



export const CommitteeMemberList = (props) => ( 
    /* The positioncards should be initiated with a mapping over all the positions of the committee,
    with the committee and position passed as props to the card*/
    <PositionColumn>
        <PositionCard></PositionCard>
        <PositionCard></PositionCard>
    </PositionColumn>
)

const PositionCard = (props) => (
    /* The position title should be replaced by the passed position title prop,
    and the member list should be initiated with a mapping of all the position members*/
    <Column>
        <H2> Position Title </H2>
        <PositionMemberList></PositionMemberList>
    </Column>
)

const PositionMemberList = (props) => (
    <MemberColumn>
        <div>Name</div>
        <div>Name</div>
        <div>Name</div>
    </MemberColumn>
)

const MemberColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
`;

const PositionColumn = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 50px;
    margin-right: 50px;
    padding: 10px 10px 10px 10px;
    background-color: var(--primary);
    border-radius: 10px;
    justify-content: space-around;
`;
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Row, Col } from "../Layout";
import { useHistory } from "react-router-dom";
import { H2 } from "../Text";
import { Column } from "../../pages/subgroups/CommitteeDetailsPage"



export const CommitteeMemberList = (props) => { 


    useEffect(() => {
        fetchPositions();
      }, []);
    
    const [positions, setPositions] = useState([]);
    const history = useHistory();

    /* This fetches all positions, no matter the committee, which could be impractical. 
    Can be remitted by making a new view in the back-end project, which takes an committee as argument, 
    and returns all positions of the given committee. */
    const fetchPositions = async () => {
        /*Fetching all positions*/
        const apidata = await fetch("http://localhost:8000/verv/api/position");
        /*Parsing the data recieved*/
        const allitems = await apidata.json();

        /*Filtering out only the positions of the current committee*/
        const filtereddata = await allitems.filter(item => {
            return item.committee === props.committee.id;
        })

        console.log(filtereddata);
        /*Setting the positions to be the relevant positions*/
        setPositions(filtereddata);
        };

    return (
    /* The position cards should be initiated with a mapping over all the positions of the committee,
    with the committee and position passed as props to the card*/
    <PositionColumn>
        {positions.map((position) => (
          <PositionCard key={position.id} position={position} history={history}></PositionCard>
        ))}
    </PositionColumn>
    )
};

const PositionCard = (props) => (
    /* The position title should be replaced by the passed position title prop,
    and the member list should be initiated with a mapping of all the position members*/
    <Column>
        <H2> {props.position.title} </H2>
        <PositionMemberList users={props.position.users}></PositionMemberList>
    </Column>
)

const PositionMemberList = (props) => (
    <MemberColumn>
        {props.users.map((user) => (
            <div> {user.full_name}</div>
        ))}
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
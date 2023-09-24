import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "../../components/Layout";
import { H1 } from "../../components/Text";
import { useLocation } from "react-router-dom";
import { CommitteeMemberList } from "../../components/CommitteeMembersList";
import parse from "react-html-parser";

function CommitteeDetailsPage (props) {
    
    
    const { committee } = useParams();
    
    useEffect(() => {
        console.log("useEffect");
        fetchCommittees();
        
    }, []);
    
    console.log('comSlug:', committee);
    
    const [committees, setCommittees] = useState();
    const [committee_object, setCommittee_object] = useState([]);
    
    
    const fetchCommittees = async () => {
        const data = await fetch("http://localhost:8000/undergrupper/api/");
        const items = await data.json();
        console.log("items:",items);
        
        
        setCommittee_object(matchCommittee(items));
        
    };
    
    const matchCommittee = (items) => {
        
        for (let comIndex in items) {
            let com = items[comIndex]
            console.log("com", com)
            if (com.slug == committee) {
                console.log("commatch", com);
                return com
            }
        }
    }
    
    
    
    
    console.log("com-obj:", committee_object);
    console.log("comitteeess", committees)
    
    
    return (
        <>
    <Container>
        <Column>
            <H1>{ committee_object.title }</H1>
            <Rw>
                <Col xs="12" sm="12" md="8" lg="8">
                    <ImageContainer>
                        <img width="100%" height="100%" 
                        src={committee_object.image}
                        style={{borderRadius: 5 + 'px'}}
                        ></img> 
                    </ImageContainer>
                </Col>
                <Col xs="12" sm="12" md="3" lg="4">
                    <CommitteeMemberList key={committee.id} committee={committee_object}> </CommitteeMemberList>
                </Col>
            </Rw>
            <Description>
                <p>{parse(committee_object.description)} </p>
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
    height: 100%
    min-width: 400px;

    //shape:
    border-radius: 5px;
    


    // color:
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

`;

export {
    CommitteeDetailsPage,
    Column
}
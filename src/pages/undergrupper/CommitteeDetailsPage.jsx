import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../components/Layout";
import { H1 } from "../../components/Text";


export const CommitteeDetailsPage = () => (
    <>
    <Container>
        <Column>
            <H1>Webkom</H1>
            <Rw>
                <img width="500px" src="i"></img>
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


const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Rw = styled.div`
    display: flex;
    flex-direction: row;
    
`;

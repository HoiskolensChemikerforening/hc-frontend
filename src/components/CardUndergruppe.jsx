import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Row, Col } from "./Layout";
import { CommitteePage } from "../pages/undergrupper/Undergrupper";
import { useHistory } from "react-router-dom";

const Subgroup = (props) => (
    <Col xs="12" sm="6" md="6" lg="4">
        <StyledWrapper onClick={()=> {console.log("Bip bop"); props.history.push(`/undergrupper/${props.committee.title}`)}} style={{cursor:'pointer'}}>
          <div style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${props.committee.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "end",
          }}>
            <Center_Wrapper>
              {props.committee.title}
            </Center_Wrapper>
          </div>
        </StyledWrapper>
      </Col>
)

const Center_Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color:#737373a6;
    height: 20%;
    font-size: 25px;
`;

const Wrapper = styled.div`
    display: flex;
    width: 90%;
    height: 100%;
    justify-content:space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
`;

const StyledWrapper = styled.div`
    position: relative;
    padding-bottom: 56.35%;
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 125%;
    margin: 10px;
    display: flex;
`;

export {Subgroup}

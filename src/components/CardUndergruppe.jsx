import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Row, Col } from "./Layout";
import { CommitteePage } from "../pages/undergrupper/Undergrupper";
import { useHistory } from "react-router-dom";

const Subgroup = (props) => (
    <Col xs="12" sm="6" md="6" lg="4">
        <StyledWrapper onClick={()=> {console.log("Bip bop"); props.history.push(`/undergrupper/${props.committee.title}`)}} style={{cursor:'pointer'}}>

          <BackgroundWrapper committee = {props.committee} >
          <Center_Wrapper>
            {props.committee.title}
          </Center_Wrapper>
          </BackgroundWrapper>

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
  padding-bottom: 60%;
  //padding-right: 100%;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 125%;
  margin: 10px;
  display: flex;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.committee.image});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  align-items: end;
`;


export {Subgroup}

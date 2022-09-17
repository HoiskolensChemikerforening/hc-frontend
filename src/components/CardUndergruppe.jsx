import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Row, Col } from "./Layout";
import { CommitteePage } from "../pages/undergrupper/Undergrupper";
import { useHistory } from "react-router-dom";


export const Subgroup = (props) => (
    <Col xs="12" sm="6" md="6" lg="4">
        <StyledWrapper onClick={
          ()=> 
            {
              props.history.push(
                {
                  pathname:`/undergrupper/${props.committee.title}`,
                  state: {committee: props.committee}
                }
              );
            }
          } 
          style={ {cursor:'pointer'} }>

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
  background-color:#ADADADBF; //#737373a6;
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
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 125%;
  margin: 10px;
  display: flex;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${props => props.committee.image});
  background-size: cover; \\This streches the background image instead of setting the proportions of the box to match the proportions of the image. Will hopefully get back to this
  background-repeat: no-repeat;
  display: flex;
  align-items: end;
`;


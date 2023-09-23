import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Row, Col } from "./Layout";
import { CommitteePage } from "../pages/subgroups/SubGroups";
import { useHistory } from "react-router-dom";


export const Subgroup = (props) => (
  <Col xs="12" sm="6" md="6" lg="4">
      {console.log("props:", props)}
        <StyledWrapper onClick={
          ()=> 
            {
              props.history.push(
                {
                  pathname: props.committee.absolute_url,
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
  // Position
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // Shape
  width: 100%;
  height: 20%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  // Color & text
  font-size: 25px;
  background-color:#ADADADBF; //#737373a6;
`;

const Wrapper = styled.div`
  // Position
  display: flex;
  justify-content:space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  
  // Shape
  width: 90%;
  height: 100%;
  


`;

const StyledWrapper = styled.div`
  // Position
  position: relative;
  padding-bottom: 60%;
  
  // Shape
  border-radius: 10px;
  margin: 10px;
  display: flex;

  // Color and text
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 125%;
  
`;

const BackgroundWrapper = styled.div`
  // Position
  position: absolute;
  display: flex;
  align-items: end;

  // Shape
  height: 100%;
  width: 100%;
  border-radius: 10px;

  // Color and Text
  background-image: url(${props => props.committee.image});
  background-size: cover; \\This streches the background image instead of setting the proportions of the box to match the proportions of the image. Will hopefully get back to this
  background-repeat: no-repeat;
  box-shadow: rgba(0, 0, 0, 0.36) 1px 1px 5px -1px //, rgba(0, 0, 0, 0.06) 0px 1px 2px px;
`;


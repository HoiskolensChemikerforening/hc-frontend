import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Row, Col } from "./Layout";

const Subgroup = () => (
    <Col xs="12" sm="6" md="6" lg="4">
        <a href="/undergrupper/phaestkom">
          <StyledWrapper>
            <div style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundImage: `url("https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Jungle-Image-Download.jpg")`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat"
            }}>
              <Center_Wrapper style={{
                "background-color":"#737373a6"
              }}>
                pHaestkom
              </Center_Wrapper>
            </div>
          </StyledWrapper>
        </a>
      </Col>
)

const Center_Wrapper = styled.div`
    display: flex;
    //justify-content: center;
    flex-direction: column-reverse;
    align-items: center;
    //flex-direction: row;
    //margin: 10px 0 0 0;
    //width: 100%;
    height: 30%;
    //padding-bottom: 10px;
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
    //background-color: black;
    font-weight: bold;
    font-size: 125%;
    margin: 10px;
    //padding: 10px;

`;

export {Subgroup}

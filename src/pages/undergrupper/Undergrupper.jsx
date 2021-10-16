import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Row, Col } from "../../components/Layout";
import { H1 } from "../../components/Text";

const Undergrupper = () => (
  <Container>
    <Row>
      <H1>Komiteer og Undergrupper</H1>
    </Row>
    <Row>
      <Col xs="12" sm="6" md="6" lg="4">
        <a href="/undergupper/webkom">
          <StyledWrapper>
            <div style={{
              position: "absolute",width: "100%",
              height: "100%",
              backgroundImage: `url("https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Jungle-Image-Download.jpg")`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat"
            }}>
            Webkom
            </div>
          </StyledWrapper>
        </a>
      </Col>
    </Row>

  </Container>
)

const Center_Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px 0 0 0;
    width: 100%;
    height: 85vh;
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
    width: 100%;
    padding-bottom: 56.35%;
    text-decoration: none;
    color: black;
    //background-color: black;
    font-weight: bold;
    font-size: 125%;
    //margin: 1% 1% 1% 1%;
    //padding: 1% 1% 1% 1%;
`;

export { Undergrupper };
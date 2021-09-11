import React from "react";
import styled from "styled-components";
import ImageSrc from "../../images/hc.jpg";
import { NewsList } from "../news/NewsList";
import {Row, Col, Container} from "../../components/Layout";
import { Widgets } from "../widgets/Widgets";
//import { EventBox2 } from "./EventBox2";
//import { NewsBox } from "./NewsBox";
//import { Container, Row, Col } from "../../components/FlexLayout";


const HomePage = () => (
  <>
    <Container>
      <Row>
          <Col md="3">
            <EventContainer>
              <h1>Events</h1>
            </EventContainer>
          </Col>
          <Col sm="12" md="6">
              <NewsList/>
          </Col>
          <Col md="3">
            <Widgets/>
          </Col>
      </Row>
    </Container>
  </>
);

export { HomePage };

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    //align-items: center;
    align-content: center;
    @media (min-width: 768px){
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: nowrap;
        align-items: flex-start;        // or stretch
    }
`;

const EventContainer = styled.div`
    // Temporary
    display:flex;
    min-width: 200px;
    max-width: 100%;
    margin-left: 5px;
    justify-content: center;
`;

const NewsContainer = styled.div`
    display:flex;
    min-width: 100px;
    max-width: 100%;
    justify-content: center;
    margin-top: 10px;
`;

const WidgetContainer = styled.div`
    display: none;
    @media (min-width: 768px){
        display:flex;
        flex-direction: row;
        width: 200px;
    }
`;
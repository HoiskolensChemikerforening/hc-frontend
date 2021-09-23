import React from "react";
import styled from "styled-components";
import ImageSrc from "../../images/hc.jpg";
import { NewsList } from "../news/NewsList";
import {Row, Col, Container} from "../../components/Layout";
import { EventHomepage } from "../events/EventHomepage";
//import { EventBox2 } from "./EventBox2";
//import { NewsBox } from "./NewsBox";
//import { Container, Row, Col } from "../../components/FlexLayout";


const HomePage = () => (
  <>
    <Row>
        <Col md="3">
        <Container>
          <EventHomepage/>
        </Container>
        </Col>
        <Col sm="12" md="6">
        <Container>
          <NewsList/>
        </Container>
        </Col>
        <Col md="3">
        <Container>
          Widgets
        </Container>
        </Col>
    </Row>
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
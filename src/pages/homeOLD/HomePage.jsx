import React from "react";
import styled from "styled-components";
import ImageSrc from "../../images/hc.jpg";
import { NavBar } from "./Navbar";
import { EventBox2 } from "./EventBox2";
import { NewsBox } from "./NewsBox";
import { Container, Row, Col } from "../../components/FlexLayout";


const HomePage = () => (
  <>
    <NavBar />
    <Container>
      <Row>
        <NewsBox />
        <EventBox2 />
      </Row>
    </Container>
  </>
);

export { HomePage };

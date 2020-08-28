import React from "react";
import styled from "styled-components";
import ImageSrc from "../../images/hc.jpg";
import { NavBar } from "./Navbar";
import { EventBox2 } from "./EventBox2";
import { NewsBox } from "./NewsBox";
import { Container, Row as R, Col } from "../../components/FlexLayout";

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

const Image = styled.img`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Row = styled(R)`
  align-items: flex-start;
`;

export { HomePage };

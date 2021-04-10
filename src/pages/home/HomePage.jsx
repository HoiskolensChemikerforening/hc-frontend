import React from "react";
import styled from "styled-components";
import ImageSrc from "../../images/hc.jpg";
import { NewsList } from "../news/NewsList";
//import { EventBox2 } from "./EventBox2";
//import { NewsBox } from "./NewsBox";
//import { Container, Row, Col } from "../../components/FlexLayout";


const HomePage = () => (
  <>
    <HomeContainer>
      <EventContainer>
          <h1>Events</h1>
      </EventContainer>
      <NewsContainer>
          <NewsList/>
      </NewsContainer>
      <WidgetContainer>
          <h1>Widgets</h1>
      </WidgetContainer>
    </HomeContainer>
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
        align-items: flex-start;        // or stretch
    }
`;

const EventContainer = styled.div`
    // Temporary
    display:flex;
    min-width: 200px;
    max-width: 100%;
    justify-content: center;
`;

const NewsContainer = styled.div`
    display:flex;
    min-width: 100px;
    max-width: 100%;
    justify-content: center;
`;

const WidgetContainer = styled.div`
    display: none;
    @media (min-width: 768px){
        display:flex;
        flex-direction: row;
        width: 200px;
    }
`;
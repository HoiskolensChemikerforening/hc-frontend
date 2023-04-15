import React from "react";
import { NewsList } from "../news/NewsList";
import {Row, Col, Container} from "../../components/Layout";
import { EventHomepage } from "./EventHomepage";
import { Widgets } from "./Widgets";
import {useMatchMedia } from "../../hooks/useMatchMedia";



export const HomePage = () => {
  const isDesktopResolution = useMatchMedia('(min-width:992px)', true)
  const isTabletResolution = useMatchMedia('(min-width:768px)', true)
  return(
  <>
    <Container>
      <Row>
      {isTabletResolution && 
          <Col sm="4" md="3">
            <EventHomepage/> 
          </Col>
      }
          <Col sm="8" md="6" >
              <NewsList/>
          </Col>
          {isDesktopResolution && 
          (<Col md="3">
            <Widgets/>
          </Col>
          )}
      </Row>
    </Container>
  </>
)};
//style={{marginLeft: "10px", marginRight:"10px"}}
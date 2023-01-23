import React from "react";
import { Col } from "../Layout";
import { StyledWrapper, BackgroundWrapper, Center_Wrapper } from "../Subgroups/CardSubGroups";
import { H1, P } from "../Text";


export const EventCard = (props) => {
    return (
    <>
        <Col xs="12" sm="6" md="6" lg="4">
        <StyledWrapper onClick={ () => {
              props.history.push( {
                  pathname:`/events/${props.event.id}`,
                  state: {event: props.event}
                } ); } } 
          style={ {cursor:'pointer'} }>
            <Col>
              <img src={props.event.image} alt='Congratz, u failed to load a fucking image.' 
                width="100%" height="auto" >
              </img>
              <H1> {props.event.title} </H1>
              <P> {props.event.description} </P>
            </Col>
        </StyledWrapper>
      </Col>
    </>
    )
}







import React from "react";
import { Col } from "../Layout";
import { StyledWrapper } from "../Subgroups/CardSubGroups";


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

            hei
        </StyledWrapper>
      </Col>
    </>
    )
}







import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { P } from "../../components/Text";


export const EventHomepage = () => {
    
    useEffect(() => {
        fetchEvents();
      }, []);
    
      const [events, setEvents] = useState();
    
      const fetchEvents = async () => {
        const data = await fetch("http://localhost:8000/arrangementer/api/social");
        const items = await data.json();
        console.log(items)
        setEvents(items);
      };
  
    return (
        <div>
        {events && events.map((event) => (
             <EventBox>
                <DateBox>
                    <P>
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                    </P>
                </DateBox>
                <P bold>{event.title}</P>
                <ProgressBar value={event.attendees.length} max={event.sluts} color="var(--yellow-30)"></ProgressBar>
            </EventBox>
        )) }
        </div>
    )
  };
       

const EventBox = styled.div`
    border-style: solid;
    border-width: 1px;
    border-color: var(--gray-50);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 5px 0px 0px 0px;
`;

const DateBox = styled.div`
    height: 40px;
    width: 60px;
    margin: 4px;
    background-color: var(--yellow-30)
`;

const ProgressCont = styled.div`
  progress[value] {
      width: ${props => props.width};
      appearance: none;

    ::-webkit-progress-bar {
        height: 10px;
        border-radius: 20px;
        background-color: #eee;
    }

    ::-webkit-progress-value {
        height: 10px;
        border-radius: 20px;
        background-color: ${props => props.color}
    }
  }
`;

const ProgressBar = props => {
    const { value, max, color, width } = props;
    return (
        <ProgressCont color={color} width={width}>
            <progress value={value} max={max} />
            <span>{value}/{max}</span>
        </ProgressCont>
    );
};
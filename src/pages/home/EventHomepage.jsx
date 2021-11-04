import React, { useEffect, useState } from "react";
import styled, {css} from 'styled-components';
import { P } from "../../components/Text";
import { useHistory } from "react-router-dom";


export const EventHomepage = () => {
    
    useEffect(() => {
        fetchEvents();
      }, []);
    
      const [events, setEvents] = useState();
      const history = useHistory();
    
      const fetchEvents = async () => {
        const data = await fetch("http://localhost:8000/arrangementer/api/social");
        const items = await data.json();
        const itemsDisplayed = items.slice(0,5);
        setEvents(itemsDisplayed);
      };
  
    return (
        <div>
        {events && events.map((event) => (
             <EventBox key={event.id} onClick={() => {history.push(`/arrangementer/${event.id}`)}}>
                <DateBox>
                    <P bold small style={{marginBottom: "0", color: "var(--gray-70)"}}>
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                    </P>
                </DateBox>
                <P bold style={{marginBottom: "7px",}}>{event.title}</P>
                <ProgressBar value={event.attendees.length} max={event.sluts} color="var(--yellow-30)"></ProgressBar>
            </EventBox>
        )) }
        </div>
    )
  };
       

const EventBox = styled.div`
    cursor: pointer;
    border-style: solid;
    border-width: 1px;
    border-color: var(--gray-50);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 5px 0px 0px 0px;
    padding: 5px 0px 7px 5px;
    border-radius: 5px;
`;

const DateBox = styled.div`
    height: 35px;
    width: 85px;
    margin-bottom: 10px;
    background-color: var(--yellow-30);
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const ProgressCont = styled.div`
  progress[value] {
      width: ${props => props.width};
      appearance: none;

    ::-webkit-progress-bar {
        height: 10px;
        border-radius: 20px;
        background-color: #eee;
        margin-bottom: 4px;
    }

    ::-webkit-progress-value {
        height: 10px;
        border-radius: 20px;
        background-color: ${props => props.color};
    }
  }
`;

const ProgressBar = props => {
    const { value, max, color, width } = props;
    return (
        <ProgressCont color={color} width={width}>
            <progress value={value} max={max} />
            <NumberCount black>{value}</NumberCount>
            <NumberCount gray>/{max}</NumberCount>
        </ProgressCont>
    );
};

const NumberCount = styled.span`
    font-weight: 600;
    ${props => props.black && css`
    color: black;
    padding-left: 5px;
  `}
    ${props => props.gray && css`
    color: var(--gray-60);
  `}
`;
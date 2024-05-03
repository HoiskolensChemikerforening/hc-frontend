import React, { useEffect, useState } from "react";
import styled, {css} from 'styled-components';
import { P } from "../../components/Text";
import { useHistory } from "react-router-dom";
import axios from 'axios';


export const EventHomepage = () => {
      
      const [dispEvents, setDispEvents] = useState();
      const [socialEvents, setSocialEvents] = useState();
      const [corporateEvents, setCorporateEvents] = useState();
      const [socialBold, setSocialBold] = useState(true);
      const history = useHistory();

      useEffect(() => {
        let isMounted = true;
          fetchEvents().then((events) => {
            if (isMounted) {
            setDispEvents(events.social);
            setSocialEvents(events.social);
            setCorporateEvents(events.corporate);
            }});
          return () => {isMounted = false};
        }, []);
    
      const fetchEvents = async () => {

        let socialData;
        let bedpresData;

        await axios.get("http://localhost:8000/arrangementer/api/sosial/kommende/")
        .then(response => {
          socialData = response.data;
          //const socialData = itemsSocial.slice(0,4);
        })
        .then(axios.get("http://localhost:8000/arrangementer/api/karriere/kommende/")
        .then(response => {
          bedpresData = response.data;
          //const bedpresData = itemsSocial.slice(0,4);
        }))
        return {social: socialData, corporate: bedpresData}
      };

  const switchEvent = value => {
    if (value === "Social" && dispEvents===corporateEvents){
      setDispEvents(socialEvents);
      setSocialBold(true);
    }
    if (value === "Corporate" && dispEvents===socialEvents){
      setDispEvents(corporateEvents);
      setSocialBold(false);
    }
  };
  
    return (
        <EventContainer>
          <div style={{postition: "fixed"}}>
          <EventType>
            <Title value="Corporate" onClick={() => switchEvent("Social")}
              style={  socialBold ? { fontWeight: 'bold' } : { fontWeight: 'normal' } }
            >Sosialt</Title>
            <Title style={{cursor: "default"}}> </Title>
            <Title value="Corporate" onClick={() => switchEvent("Corporate")}
            style={  !socialBold ? { fontWeight: 'bold' } : { fontWeight: 'normal' } }
            >Bedrift</Title>
          </EventType>
          {dispEvents && dispEvents.map((event) => (
             <EventBox key={event.id} onClick={() => {history.push(`/arrangementer/${event.id}`)}}>
                <DateBox>
                    <P bold small style={{marginBottom: "0", color: "var(--gray-70)"}}>
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                    </P>
                </DateBox>
                <PTitle>{event.title}</PTitle>
                <ProgressBar value={event.attendees.length} max={event.sluts} color="var(--yellow-30)"></ProgressBar>
            </EventBox>
        )) }
        </div>
        </EventContainer>
    )
  };
       
const widthProgress = 180;
const EventContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: ${widthProgress}px;
  height: 80%;
  padding-right: 10px;
  margin-top: 10px;
  
  @media (min-width: 1100px){
        display: flex;
        padding-left: 30px;
    }

    /*@media (min-width: 1100px; max-width:){
        display: flex;
        padding-left: 50px;
    }*/
`;

const EventType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin:0;
`;

const Title = styled.p`
  cursor: pointer;
  margin: 0;
  size: medium;
`;
const EventBox = styled.div`
    cursor: pointer;
    border-style: solid;
    border-width: 1px;
    border-color: var(--gray-50);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 5px 0px 15px 0px;
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
  display:flex;
  align-items: baseline;
  max-width: ${widthProgress}px;


  progress[value] {
      width: ${widthProgress-65}px;
      appearance: none;
      padding-top:5px;

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
    
    // Atendees or open event.
    const progress = (
        <ProgressCont color={color} width={width} >
            <progress value={value} max={max} width={width}/>
            <NumberCount black>{value}</NumberCount>
            <NumberCount gray>/{max}</NumberCount>
        </ProgressCont>);
    const open = (<P italic style={{marginBottom:"0px"}} > Åpent for alle!</P>)
    return ( 
      (max !== 0) ? progress : open
          
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

const PTitle = styled.div`
  margin-bottom: 7px;
  max-width: 100%;
  overflow: hidden; 
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;
  line-height: 1.6;
  font-weight: 800;
`;
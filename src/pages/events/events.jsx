import React, { useEffect, useState, useContext } from "react";
import styled, {css} from "styled-components";
import { Button } from "../../components/Button"; 
import { Col } from "../../components/Layout";
import { H1, P} from "../../components/Text";
import { Link, useHistory } from "react-router-dom";
import { fetchList, checkPermission } from "../../utils/requests";
import AuthContext from "../../context/AuthContext";

const coming = 1
const mine = 2
const previous = 3
const social = 1
const corporate = 2

export const EventPage = () => {
    const [dispEvents, setDispEvents] = useState();
    const [socialEvents, setSocialEvents] = useState();
    const [corporateEvents, setCorporateEvents] = useState();
    const [eventTypeBold, seteventTypeBold] = useState(social);
    const [eventFilterBold, seteventFilterBold] = useState(coming);
    const [canAddSocial, setCanAddSocial] = useState(false);
    const [canAddCorporate, setCanAddCorporate] = useState(false);
    const history = useHistory();
    let {user} = useContext(AuthContext);

    useEffect(() => {
      fetchList("arrangementer/api/social/kommende/", setDispEvents);
      console.log(dispEvents);
      checkPermission("events.add_social", user, setCanAddSocial);
      checkPermission("events.add_corporate", user, setCanAddCorporate);
        }, [user]);

  const switchEvent = eventType => {
    seteventTypeBold(eventType);
    if (eventType === social ){
      setDispEvents(socialEvents);
    }
    else if (eventType === corporate ){
      setDispEvents(corporateEvents);
    }
  };

  const switchFilter = filter_id => {
    seteventFilterBold(filter_id)
    if (eventTypeBold === social){
      if (filter_id === coming){
        fetchList("arrangementer/api/social/kommende/", setDispEvents)
        console.log("Kommende sosiale eventer")
      }
      else if (filter_id === mine){
        fetchList("arrangementer/api/social/mine/", setDispEvents)
        console.log("Mine sosiale eventer")
      }
      else if (filter_id === previous){
        fetchList("arrangementer/api/social/", setDispEvents)
        console.log("Alle sosiale eventer")
      }
    }
    else if (eventTypeBold === corporate){
      if (filter_id === coming){
        fetchList("arrangementer/api/bedpres/kommende/", setDispEvents)
        console.log("Kommende bedrift eventer")
      }
      else if (filter_id === mine){
        fetchList("arrangementer/api/bedpres/mine/", setDispEvents)
        console.log("Mine bedrift eventer")
      }
      else if (filter_id === previous){
        fetchList("arrangementer/api/bedpres/", setDispEvents)
        console.log("Alle bedrift eventer")
      }
    }
  };

  const addEvent= () =>{
    alert("La til event");
  };
  
    return (
        <>
        <EventContainer>
          <EventType>
            <EventTypeDevider>
              <Devider>
              <Title  onClick={() => switchEvent(social)}
                style={ eventTypeBold === social ? { fontWeight: 'bold', textDecoration: 'underline', textDecorationThickness: '3px', textDecorationColor: 'var(--yellow-30' } : { fontWeight: 'normal' } }
              >Sosialt</Title> </Devider>
              <Devider>
              <Title  onClick={() => switchEvent(corporate)}
              style={ eventTypeBold === corporate ? { fontWeight: 'bold', textDecoration: 'underline', textDecorationThickness: '3px', textDecorationColor: 'var(--yellow-30'  } : { fontWeight: 'normal' } }
              >Bedrift</Title></Devider>
              <Devider>
                
                {eventTypeBold === 'social' ? (
                  {canAddSocial ?
                    <Title value="Event" onClick={()=> addEvent()} style={{fontWeight: 'bold'}}
                    >+</Title>:null}
                ) : null}
                {canAddCorporate && eventTypeBold === 'corporate' ? (
                  <AddButtonContainer to="/bedpres/opprett">
                    <Title value="Event" onClick={() => addEvent()} style={{ fontWeight: 'bold' }}>+</Title>
                  </AddButtonContainer>
                ) : null}
              </Devider>
              </EventTypeDevider>
              <EventFilterDevider>
              <Devider>
              <Title  onClick={() => switchFilter(coming)}
              style={ eventFilterBold === coming ? { fontWeight: 'bold', textDecoration: 'underline', textDecorationThickness: '3px', textDecorationColor: 'var(--yellow-30'  } : { fontWeight: 'normal' } }
              >Kommende</Title></Devider>
              <Devider>
              <Title  onClick={() => switchFilter(mine)}
              style={ eventFilterBold === mine ? { fontWeight: 'bold', textDecoration: 'underline', textDecorationThickness: '3px', textDecorationColor: 'var(--yellow-30'  } : { fontWeight: 'normal' } }
              >Mine</Title></Devider>
              <Devider>
              <Title  onClick={() => switchFilter(previous)}
              style={ eventFilterBold === previous ? { fontWeight: 'bold', textDecoration: 'underline', textDecorationThickness: '3px', textDecorationColor: 'var(--yellow-30'  } : { fontWeight: 'normal' } }
              >Tidligere</Title> </Devider>
            </EventFilterDevider>
          </EventType>
          <EventList>
          {dispEvents && dispEvents.map((event) => (
             <EventBox key={event.id} onClick={() => {history.push(`/arrangementer/${event.id}`)}}>
              <ImageCont>
               <Image src={event.image}/>
              </ImageCont>
             <DateBox>
                 <P bold small style={{marginBottom: "0", color: "var(--gray-70)"}}>
                     <span>{new Date(event.date).toLocaleDateString()}</span>
                 </P>
             </DateBox>
             <PTitle>{event.title}</PTitle>
             <ProgressBar value={event.attendees.length} max={event.sluts} color="var(--yellow-30)"></ProgressBar>
         </EventBox>
          )) }
          </EventList>
        </EventContainer>
      </>
  )
};

const widthProgress = 180;

const Image = styled.img`
  width: 100%;
`;

const ImageCont = styled.div`
  min-height: 200px;
  max-height: 200px;
  float: left;
  margin-right: 5px;
  overflow: hidden;
  border-radius: 5px;
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 60%;
  padding-right: 10px;
  margin-top: 10px;
`;
const EventType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  width: auto;

  @media (max-width: 530px){
    flex-direction: row;
    padding: 30px;
    align-items: center;
  }
`;

const Title = styled.p`
  cursor: pointer;
  margin: 0;
  size: large;
  font-size: 20px;
`;

const EventTypeDevider = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;

  @media (max-width: 530px){
    flex-direction: column;
    justify-content: space-between;
    height: auto;
  }

`;

const EventFilterDevider = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10%;

  @media (max-width: 530px){
    flex-direction: column;
    padding-left: 10px;
    justify_content: space-between;
    height: auto;
  }

`;

const Devider = styled.div`
  padding: 5%;
`;

const EventBox = styled.div`
    cursor: pointer;
    border-style: solid;
    border-width: 1px;
    border-color: var(--gray-50);
    display: flex;
    flex-direction: column;
    margin: 5px 10px 15px 10px;
    padding: 5px 0px 7px 5px;
    border-radius: 5px;
    width: 300px;

`;

const EventList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;

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

const AddButtonContainer = styled(Link)`
  text-decoration: none; 
  color: black; 
`;
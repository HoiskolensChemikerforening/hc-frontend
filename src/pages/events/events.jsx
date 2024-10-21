import React, { useEffect, useState, useContext, useRef } from "react";
import styled, {css} from "styled-components";
import { P, SubTitle } from "../../components/Text";
import { Button } from "../../components/Button";
import { Link, useHistory } from "react-router-dom";
import { fetchList, checkPermission, fetchPaginationObject } from "../../utils/requests";
import AuthContext from "../../context/AuthContext";

const coming = 1
const mine = 2
const previous = 3
const social = 1
const corporate = 2
const PageSize = 12 //Sets number of objects for pagination

const Pagination = ({ paginatonProperties, currentPage, onPageChange }) => {
  const total_pages = Math.ceil(paginatonProperties.total/paginatonProperties.page_size)

  const handlePageClick = (newPage) => {
    if (newPage >= 1 && newPage <= total_pages) {
      onPageChange(newPage);
      window.scrollTo(0, 0); // Scroll up to top when button is clicked
    }
  };

  return (
    <PageBut>
      <DevideButAndText>
        <Button primary type="button" onClick={() => handlePageClick(currentPage - 1)}>Forrige</Button>
        <Button primary type="button" onClick={() => handlePageClick(currentPage + 1)}>Neste</Button>
      </DevideButAndText>
      <DevideButAndText>
        <P>Side {currentPage} av {total_pages}</P>
      </DevideButAndText>
    </PageBut>
  );
};

export const EventPage = () => {
    const [dispEvents, setDispEvents] = useState([]);
    const [paginatonProperties,setPaginatonProperties] = useState({});
    const [canAddSocial, setCanAddSocial] = useState(false);
    const [canAddCorporate, setCanAddCorporate] = useState(false);
    const history = useHistory();
    let {user} = useContext(AuthContext);
    const currentEventTypeRef = useRef(social);
    const currentEventFilterRef = useRef(coming);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page) => {
      setCurrentPage(page);
      fetchData(currentEventTypeRef.current, currentEventFilterRef.current, page);
    };



    useEffect(() => {
      switchFilter(currentEventTypeRef.current, currentEventFilterRef.current); // have set current to social and coming, could add so updates on current page and not back to social and coming
      console.log(dispEvents);
      checkPermission("events.add_social", user, setCanAddSocial);
      checkPermission("events.add_corporate", user, setCanAddCorporate);
        }, [user]);

    const fetchData = (eventType, filterType, currentPage =1) => {
       let endpoint = "";

      if (eventType === social) {
        if (filterType === coming) {
          endpoint = "arrangementer/api/sosial/kommende/";
          console.log("Kommende sosiale eventer")
        } else if (filterType === mine) {
          endpoint = "arrangementer/api/sosial/mine/";
          console.log("Mine sosiale eventer")
        } else if (filterType === previous) {
          endpoint = "arrangementer/api/sosial/tidligere/";
          console.log("Tidligere sosiale eventer")
        }
      } else if (eventType === corporate) {
        if (filterType === coming) {
          endpoint = "arrangementer/api/karriere/kommende/";
          console.log("Kommende bedrift eventer")
        } else if (filterType === mine) {
          endpoint = "arrangementer/api/karriere/mine/";
          console.log("Mine bedrift eventer")
        } else if (filterType === previous) {
          endpoint = "arrangementer/api/karriere/tidligere/";
          console.log("Tidligere bedrift eventer")
        }
      }
      endpoint += `?page=${currentPage}&page_size=${PageSize}`;

      fetchPaginationObject(endpoint, setDispEvents, setPaginatonProperties);
      
    };

  const switchFilter = (eventType, filterType) => {
    currentEventTypeRef.current = eventType;
    currentEventFilterRef.current = filterType;
    fetchData(eventType, filterType, currentPage);
  };
  
    return (
        <>
        <EventContainer>
          <EventType>
            <EventTypeDevider>
              <Devider>
              <SubTitle  onClick={() => switchFilter(social, currentEventFilterRef.current)}
                boldUnderlined={currentEventTypeRef.current === social}
              >Sosialt</SubTitle> </Devider>
              <Devider>
              <Title  onClick={() => switchFilter(corporate, currentEventFilterRef.current)}
              style={ currentEventTypeRef.current === corporate ? { fontWeight: 'bold', textDecoration: 'underline', textDecorationThickness: '3px', textDecorationColor: 'var(--yellow-30'  } : { fontWeight: 'normal' } }
              >Bedrift</Title> </Devider>
              <Devider>
              {currentEventTypeRef.current === social && canAddSocial ? (
                <AddButtonContainer to="arrangement/sosialt/opprett">
                  <Title value="Event" style={{ fontWeight: 'bold' }}>+</Title>
                </AddButtonContainer>
              ) : null}
                {currentEventTypeRef.current === corporate && canAddCorporate ? (
                  <AddButtonContainer to="arrangement/karriere/opprett">
                    <Title value="Event" style={{ fontWeight: 'bold' }}>+</Title>
                  </AddButtonContainer>
                ) : null}
              </Devider>
              </EventTypeDevider>
              <EventFilterDevider>
              <Devider>
              <Title  onClick={() => switchFilter(currentEventTypeRef.current, coming)}
              style={ currentEventFilterRef.current === coming ? { fontWeight: 'bold', textDecoration: 'underline', textDecorationThickness: '3px', textDecorationColor: 'var(--yellow-30'  } : { fontWeight: 'normal' } }
              >Kommende</Title></Devider>
              <Devider>
              <Title  onClick={() => switchFilter(currentEventTypeRef.current, mine)}
              style={ currentEventFilterRef.current === mine ? { fontWeight: 'bold', textDecoration: 'underline', textDecorationThickness: '3px', textDecorationColor: 'var(--yellow-30'  } : { fontWeight: 'normal' } }
              >Mine</Title></Devider>
              <Devider>
              <Title  onClick={() => switchFilter(currentEventTypeRef.current, previous)}
              style={ currentEventFilterRef.current === previous ? { fontWeight: 'bold', textDecoration: 'underline', textDecorationThickness: '3px', textDecorationColor: 'var(--yellow-30'  } : { fontWeight: 'normal' } }
              >Tidligere</Title> </Devider>
            </EventFilterDevider>
          </EventType>
          <EventList>
          {dispEvents.map((event) => (
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
             <ProgressBar value={event.confirmed_attendees.length} max={event.sluts} color="var(--yellow-30)"></ProgressBar>
         </EventBox>
          )) }
          </EventList>
            {paginatonProperties.total > paginatonProperties.page_size && (
              <Pagination
                paginatonProperties={paginatonProperties}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            )}
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
  justify-content: center;
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

const PageBut = styled.div`
  display: flex;
  flex-direction: column;
`;

const DevideButAndText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 10px;
`;
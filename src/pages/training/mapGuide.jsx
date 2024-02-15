// Velkommen til en guide i bruk av map-funksjonen

import styled from "styled-components";
import React, { useEffect, useState, useContext } from "react";
import { PageContainer, Container, Row, Col } from "../../components/Layout";
import { P, TitleContainer, Title, H1} from '../../components/Text'; 
import { fetchDetail, fetchList} from "../../utils/requests";
import AuthContext from "../../context/AuthContext";
import { RoundedSubGroup, SimpleSubGroup, ReadableSubGroup } from "../../components/MapTraining";
import { useHistory } from 'react-router-dom';

export const MapDemo = () => {
    const [committees, setCommittees] = useState([]); // usestate [] default value
    const history = useHistory();


    useEffect(() => {
      // Her må noe endres for å få tak i undergruppene:
      // (Hint: typisk form for api på hc-siden er "sluttenAvURLPåGammelSide/api")
      fetchList("url", setCommittees);
      console.log(committees);
    }, []);
    

    function handleClick () {
      history.push("/clicked")
    };


    return (
      <PageContainer>
        <TitleContainer>
        <Title>Introduksjon til map</Title>
        </TitleContainer>
        <StyledP>Velkommen til en liten tutorial på å fetching og mapping av elementer.
          I webdesign brukes map når man har gjenstander i en liste, og man vil lage et element (html-objekt) for hvert objekt i listen.
          Eksempler kan være personer i klassekatalogen eller gjenstander i HC-shoppen. I denne oppgaven
          skal vi bruke undergrupper, så pass på at du har opprettet minst 4 undergrupper i den lokale databasen din. 
          Det er også viktig å være logget inn for at fetching skal fungere. 

        </StyledP>
        <StyledP >
          <Col>
          <p>Filene du trenger å endre:</p>
          <ul>
            <li>mapGuide</li>
            <li>MapTraining (src/components)</li>
          </ul>
          </Col> 
        </StyledP>

        <H1>Oppgave 1: Fiks fetch statement:</H1>
        <StyledP>Fiks fetch-statement i useEffect slik at komiteene importeres og lagres i "committees".
          Når det fungerer som det skal vil undergruppene vises i oppgave 2.
        </StyledP>
        
        <Spacer></Spacer>

        <H1>Oppgave 2: Simpel layout av komiteer:</H1>
        <StyledP>Den er ikke så fin, men den fungerer. Gjør den litt finere
          med å få tittel og tekst i midten av figuren, og bytt til en 
          finere farge (gult er kult ;^) ). 
        </StyledP>
          
          <Row>
          {/* her vil map-funksjonen lage et "SimpleSubGroup"-element for
           hver "committee" i committees */}
          {committees.map((committee) => 
            (<SimpleSubGroup key={committee.id} committee={committee}></SimpleSubGroup>
            ))}
          </Row>

        <Spacer></Spacer>

        <H1>Oppgave 3: Pyntet layout av komiteer:</H1>
        <StyledP>Start med å fikse map-statement slik at den lager "RoundedSubGroup". 
          Her har vi en simpel layout, men den kan bli finere. 
          Lag avrundede hjørner på boksene og fyll inn kode slik at 
          bakgrunnen blir bildet til undergruppen.
        </StyledP>
          <Row>
          {committees.map((committee) => 
            /* Her må noe endres: */
            (<div key={committee.id} committee={committee}></div>
            ))}
          </Row>

        <Spacer></Spacer>
        
        <H1>Oppgave 4: Lesbar layout av komiteer:</H1>
        <StyledP>
          Map komiteene med "ReadableSubGroup" som element.
          Nå begynner det å se ut som noe, men det er veldig vanskelig å lese teksten.
          Bruk tekst-skygge for å gjøre teksten mer leselig uavhengig av bakgrunn. Når det er gjort kan du legge til skygge rundt boksene, 
          med ekstra tyngde nede til høyre. 
        </StyledP>
          <Row>
            {/* Map komiteene med "ReadableSubGroup" som element her */}
          </Row>

          <H1>Oppgave 5: link til annen side</H1>
          <StyledP>
          Nå som siden ser bra ut kan du få elementene til å 
          sende brukeren til siden med url "/clicked"
        </StyledP>

          
      </PageContainer>
      )
}


const StyledP = styled(P)`
 display: flex;
 max-width: 600px;
`

const MapWrapper = styled.div`
  display: flex;
  width = 100%;
  flex-direction: row;
`

const WrapContainer = styled(Container)`
  display: flex;
  flex-direction: row
`

const Spacer = styled.div`
  min-height: 200px
`


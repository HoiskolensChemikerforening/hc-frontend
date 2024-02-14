// Velkommen til en guide i bruk av map-funksjonen

import styled from "styled-components";
import React, { useEffect, useState, useContext } from "react";
import { PageContainer, Container, Row } from "../../components/Layout";
import { P, TitleContainer, Title, H1} from '../../components/Text'; 
import { fetchDetail, fetchList} from "../../utils/requests";
import AuthContext from "../../context/AuthContext";
import { RoundedSubGroup, SimpleSubGroup, ReadableSubGroup } from "../../components/MapTraining";
import { useHistory } from 'react-router-dom';

export const MapDemo = () => {
    const [committees, setCommittees] = useState([]); // usestate [] default value
    const history = useHistory();


    useEffect(() => {
      fetchList("undergrupper/api/", setCommittees);
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

     
        <H1>Oppgave 1: Simpel layout av komiteer:</H1>
        <StyledP>Den er ikke så fin, men den fungerer. Gjør den litt finere
          med å få tittel og tekst i midten av figuren, og bytt til en 
          finere farge (gult er kult ;^) ).
        </StyledP>
          
          <Row>
          {committees.map((committee) => 
            (<SimpleSubGroup key={committee.id} committee={committee}></SimpleSubGroup>
            ))}
          </Row>

        <Spacer></Spacer>

        <H1>Oppgave 2: Pyntet layout av komiteer:</H1>
        <StyledP>Her har vi en simpel layout, men den kan bli finere. 
          Lag avrundede hjørner på boksene og fyll inn kode slik at 
          bakgrunnen blir bildet til undergruppen.
        </StyledP>
          <Row>
          {committees.map((committee) => 
            (<RoundedSubGroup key={committee.id} committee={committee}></RoundedSubGroup>
            ))}
          </Row>

        <Spacer></Spacer>
        
        <H1>Oppgave 3: Lesbar layout av komiteer:</H1>
        <StyledP>
          Nå begynner det å se ut som noe, men det er veldig vanskelig å lese teksten.
          Bruk skygge for å gjøre teksten mer leselig uavhengig av bakgrunn. Når det er gjort kan du legge til skygge rundt boksene, 
          med ekstra tyngde nede til høyre. 
        </StyledP>
          <Row>
          {committees.map((committee) => 
            (<ReadableSubGroup key={committee.id} committee={committee} onClick={() => handleClick()}></ReadableSubGroup>
            ))}
          </Row>

          <H1>Oppgave 4: link til annen side</H1>
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


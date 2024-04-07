import React from "react";
import styled from 'styled-components';
import { P, H1, H2, TitleContainer, Title, Link} from "../../components/Text";
import { Button } from "../../components/Button";



export const Teknostart = () => {

  
    return (
        <>
        <OuterWrapper>
          <TitleContainer><Title>Teknostart</Title></TitleContainer>
            <ContentBox>
              <InfoText>
                <P>I løpet av første uken arrangeres Teknostart for alle førsteklassingene på sivilingeniørlinjene ved NTNU. Dette er et 
                introduksjonskurs hvor man får et innblikk i den studieretningen man har valgt og et minikurs i gruppearbeid. </P> 
            
                <P>Teknostart er delt inn i flere deler hvor hovedarbeidet består av et prosjektarbeid i grupper. </P>
            
                <P>Mer informasjon om Teknostart finner du på: <Link href="https://www.ntnu.no/studier/teknostart">Teknostart/ntnu</Link></P>

              </InfoText>
              <Wraparound>
                <Linkbox>
                    <H2>Nyttige lenker</H2>
                    <Link href="https://wiki.math.ntnu.no/oppfrisk/2023/start">Oppfriskningskurs i matte</Link>
                    <Link href="https://wiki.math.ntnu.no/oppfrisk/2023/start">Oppfriskningskurs i kjemi</Link>
                  </Linkbox>
              </Wraparound>
            </ContentBox>

        </OuterWrapper>
        
        </>
    )
  };

const InfoText = styled.div`
  text-align: left;
  margin: 0 5% 0 5%;
  width: 50%;
`;

const OuterWrapper = styled.div`
  background-color: var(--gray-10);
  min-height: 100vh;
`;

const ContentBox = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 0 4% 0 4%;
  padding: 2% 5% ;
  display: flex;
`;

const Linkbox = styled.div`
  display: flex; 
  flex-direction: column;
  border: 10px;
  text-align: center; 
  padding: 4%;
`;

const Wraparound = styled.div`
  background-color: white;
  border-radius: 10px;
  border-style: solid;
  border-color: var(--primary);
`;
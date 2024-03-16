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
            
                <P>Mer informasjon om Teknostart finner du på: <Link> https://www.ntnu.no/studier/teknostart </Link> </P>

                <img type="image/jpg" src="hc-frontend/static/hc.jpg" alt="teknostart image"/>
              </InfoText>
            </ContentBox>
          

        </OuterWrapper>
        
        </>
    )
  };

const InfoText = styled.div`
  text-align: center;
  margin: 0 20% 0 20%;
`;

const OuterWrapper = styled.div`
  background-color: var(--gray-10);
  min-height: 100vh;
`;

const ContentBox = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 0 2% 0 2%;
  padding: 2% 5% ;
`;
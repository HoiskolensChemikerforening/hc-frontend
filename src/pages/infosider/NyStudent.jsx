import React, { useState } from "react";
import styled from "styled-components";
import { P, Title, H1, H2, Link, TitleContainer} from "../../components/Text";
import { PageContainer } from "../../components/Layout";
import { TextField } from "../../components/Form";
/*import { Button} from "../../components/Button"; */




export const NyStudent = () => {
    return(
    <PageContainer> 
        <TitleContainer> 
            <Title>  
                Velkommen til Høiskolens Chemikerforening 
            </Title>
        </TitleContainer>
        <P>
        Gratulerer med opptak til Industriell kjemi og bioteknologi!
        </P>

        <P>
        På disse sidene kan dere finne litt diverse informasjon som kan gjøre de første ukene som ny student litt lettere.
        </P>

        <ButtonContainer>
            {//This should be edited to in a absolute position on homepage
            // or only visible when hovered
            }
            <Link to="/nyheter/ny">
              <Button>Praktisk info</Button>
            </Link>
            <Link to="/kontoret">
              <Button>Kontaktinfo</Button>
            </Link>
            </ButtonContainer>

        <TitleContainer> 
            <Title>  
                Fadderperioden
            </Title>
        </TitleContainer>

        
        <P>
        De to første ukene av studietiden er det på dagtid Teknostart som gjelder, mens linjeforeningen og fadderne tar over på kvelden. 
        Det er lagt opp til to innholdsrike uker der dere blir kjent med byen og studentlivet, og rett og slett bare har det gøy!
        </P>
        <P>
        Det er viktig å delta på arrangementene i fadderukene, siden fadderopplegget er selve grunnlaget for et godt klassemiljø. 
        Dere vil bli delt inn i mindre faddergrupper den første dagen, bestående av ca. 10-13 andre førsteklassinger. 
        Du vil da få anledning til å ha en gruppe du kan bli bedre kjent og ha god kontakt med, før gruppene etter hvert blir blandet slik at man har mulighet til å bli kjent med resten av førsteklassingene.
        </P>
        <P>
        Det skjer noe hver dag i fadderperioden, så dette er to uker du ikke vil gå glipp av! Av arrangementer i fadderperioden kan det nevnes 
        bli-kjent-kvelder,  byvandring med ulike konkurranser, Chemieshow, samt fester med andre linjeforeninger, så det er bare å glede seg!
        </P>

    </PageContainer>

    )
};

const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
`;

const Button = styled.button`
  margin: 15px 30px 30px;
  padding: 2em 2em;
  width: 250px;
  

  font-weight: bold;
  font-size: 16px;
  color: rgb(0, 0, 0, 0.5);

  background: transparent;
  border: 2px cursor: pointer;
  border-radius: 1px;

  cursor: pointer;
    &:hover {
      background-color: #e3d262;
      border-color: #e3d262;
    }

color: #000;
background: var(--primary);
border: 3px var(--primary) solid;
hover: #FFF;
`;
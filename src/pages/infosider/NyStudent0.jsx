

/*import React, { useState } from "react"; */


import React from "react";
import styled from "styled-components";
import { P, Title, TitleContainer} from "../../components/Text";
import { BodyContainer } from "../../components/Layout";
/*import { PageContainer } from "../../components/Layout"; */
/*import { TextField } from "../../components/Form"; */

import { Button} from "../../components/Button"; 
import { ButtonContainer } from "../../components/Container";
import fadderuka from "./fadderuka.jpg";
import { Link, useHistory } from "react-router-dom";





export const NyStudent = () => {
    return(
    <BodyContainer> 
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


        <TableOfContent >
                <Link to="/">
                    <Button primary>Praktisk info</Button>
                </Link> 
            <ButtonContainer>
                <Link to="../kontaktinfo">
                    <Button primary>Kontaktinfo</Button>
                </Link>
            </ButtonContainer>
        </TableOfContent>


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
        <P>
        Her er linken til facebookgrupper for fadderperioden 2025! Bli med i gruppa for å få informasjon om ......
        </P>

        <Images> 
            <Photo src={fadderuka} alt="fadderuka" /> 
        </Images> 

    </BodyContainer>

    )};

    const TableOfContent = styled.div`
    width: auto;
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-around;
    @media (min-width: 947px){
      flex-direction: row;
    }
  `;
    
  const Images = styled.div`
  display: flex; // ??
  flex-direction: row; // ??
  justify-content: center; // ??
  align-items: center; // ??
  gap: 50px; // ??
`;

const Photo = styled.img`
  max-width: 50%; // ??
  height: auto; // ??
`;


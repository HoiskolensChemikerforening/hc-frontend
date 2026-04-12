import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Layout";
import { H1 } from "../../components/Text";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonContainer } from "../../components/Form";
// Importing components from a separate component library
import { PageContainer } from "../../components/Layout";
import { P, TitleContainer, Title } from '../../components/Text'; 
 
// Importing images to be used in this component
import indkomfoto from './indkomfoto.jpg';

export const Indkom_infoside = () => {
    return (
        <PageContainer> {/* Using a PageContainer for gathering all content in a unified layout */} 
                <TitleContainer> {/* Container for the title */} 
                    <Title> {/* Container for the title text */} 
                        Industrikomiteen 
                    </Title>
        </TitleContainer>
        <ContentContainer> {/* Container for the content of the page */}
            <P> {/* Paragraph text component for the content */}
                Industrikomitéen er Høiskolens Chemikerforenings kontakt med industrien, spesielt rettet mot kjemi- og bioteknologiske bedrifter. Komiteen vår er inndelt i tre undergrupper: infogruppen, motivasjonsgruppen og bedriftsgruppen. Formålet med vår virksomhet er å opprettholde god kontakt mellom kjemistudenter og relevante bedrifter. Dette gjør vi gjennom å arrangere bedriftspresentasjoner og intervjuer, samt formidle informasjon mellom bedrifter og studenter. Vi arrangerer også motivasjonsforedrag rettet mot de yngre klassetrinnene. Alt i alt ønsker vi å gi eldre studenter en god mulighet til å komme fort ut i arbeid og de yngre studentene innblikk i hva de kan benytte utdannelsen sin til. Komiteen har også en sentral rolle i gjennomføringen og forberedelsene til Kjemidagen som arrangeres årlig ved NTNU, for mer informasjon om denne karrieredagen: 
                <a href="https://www.kjemidagen.no/"> www.kjemidagen.no</a>.
            </P>
        </ContentContainer>
        <Images> {/* Container for the images */}
                                    <Photo src={indkomfoto} alt="Indkomfoto" /> {/* a single imported photo with alternative text */}
                </Images>
        </PageContainer>
    )
};


// Styled-component for the content container - try to change one value at a time to see what each of them does
const ContentContainer = styled.div`
    display: flex; // to enable flexbox layout, more flexible and easier to align
    flex-direction: column; // Sorts the elements vertically
    padding: 20px; // Adding space around content for spacing
    text-align: center; // Text aligned in the center of box
    margin: 10px; // Spacing outside of container for sepearation from other elements
`;

// Styled-component for the image container - try to change one value at a time to see what each of them does
const Images = styled.div`
    display: flex; // Easier layout for images, more flexible and easier to align
    flex-direction: row; // Images of coffe etc gets sorted horizontally
    justify-content: center; // centers images horisontally
    align-items: center; // center images vertically
    gap: 50px; // spacing between images
`;

// Styled-component for each image - try to change one value at a time to see what each of them does
const Photo = styled.img`
    max-width: 500px; // image max width of 500px
    height: auto; // height of image adjusts to width to maintain original ratio
`;
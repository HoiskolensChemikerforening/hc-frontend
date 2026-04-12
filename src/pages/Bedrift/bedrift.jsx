import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../components/Layout";
import { H1 } from "../../components/Text";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonContainer } from "../../components/Form";
// Importing components from a separate component library
import { PageContainer } from "../../components/Layout";
import { P, TitleContainer, Title } from '../../components/Text'; 
 
// Importing images to be used in this component
import indkomfoto from './indkomfoto.jpg';

export const Bedrift = () => {
    return (
        <PageContainer> {/* Using a PageContainer for gathering all content in a unified layout */} 
                <TitleContainer> {/* Container for the title */} 
                    <Title> {/* Container for the title text */} 
                        Bedriftssiden yayyyyy 
                    </Title>
        </TitleContainer>
        <ButtonContainer>
            <Link to="/jobbutlysninger">
              <Button>Jobbutlysninger</Button>
            </Link>
            <Link to="/arrangementer">
              <Button>Arrangementer</Button>
            </Link>
            <Link to="/Intervjuer">
              <Button>Intervjuer</Button>
            </Link>
            <Link to="/Diplomundersøkelsen">
              <Button>Diplomundersøkelsen</Button>
            </Link>
        </ButtonContainer>
        <ContentContainer> {/* Container for the content of the page */}
            <P> {/* Paragraph text component for the content */}
                Denne siden administreres av Industrikomiteen – Høiskolens Chemikerforenings kontakt med industrien. Her finner du en full oversikt over Industrikomiteens arrangementer, relevante jobbutlysninger, intervjuer med kjemikere og informasjon fra diplomundersøkelsen.
            </P>
            <P>
                Sidene er enda i oppstartsfasen og Industrikomiteen er på saken med å lage innhold. Vi gleder oss masse til å dele spennende informasjon med dere.
            </P>
            <P>
                Ønsker du å vite mer om Industrikomiteen, eller har du innspill til innhold på denne siden? Ta gjerne kontakt med oss i Industrikomiteen på knappen nedenfor!
            </P>
            <ButtonContainer>
            <Link to="/indkom_infoside">
              <Button>Les mer her!</Button>
            </Link>
            </ButtonContainer>
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
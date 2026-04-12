import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../components/Layout";
import { H1 } from "../../components/Text";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
// Importing components from a separate component library
import { PageContainer, ButtonContainer } from "../../components/Layout";
import { P } from '../../components/Text'; 
import { Title } from '../../components/Title';

export const Arrangementer = () => {
    return (
        <PageContainer> {/* Using a PageContainer for gathering all content in a unified layout */} 
                    <Title constwide> {/* Container for the title text */} 
                        Utforsk våre arrangemen
                    </Title>
                    <P>
                        Her finner du en oversikt over alle arrangementene som Industrikomiteen arrangerer. Vi har et variert utvalg av arrangementer, inkludert bedriftspresentasjoner, intervjuer med kjemikere og motivasjonsforedrag. Arrangementene våre er åpne for alle studenter, og vi oppfordrer spesielt de yngre klassetrinnene til å delta på motivasjonsforedragene våre. Hold deg oppdatert på denne siden for å få informasjon om kommende arrangementer og hvordan du kan delta!
                    </P>
        <Title undertitle> {/* Container for the subtitle text */}
            Våre arrangementer
        </Title>
        <ContentContainer> {/* Container for the content of the page */}
            <ButtonContainer>
            <Link to="/nytt-arrangement">
              <Button informationbox >Nytt arrangement</Button>
            </Link>
            <Link to="/ny-bedriftspresentasjon">
              <Button informationbox>Ny bedriftspresentasjon</Button>
            </Link>
            </ButtonContainer>

            <ButtonContainer>
            <Link to="/nytt-arrangement">
              <Button informationbox >Nytt arrangement</Button>
            </Link>
            <Link to="/ny-bedriftspresentasjon">
              <Button informationbox>Ny bedriftspresentasjon</Button>
            </Link>
            </ButtonContainer>

            <ButtonContainer>
            <Link to="/nytt-arrangement">
              <Button informationbox >Nytt arrangement</Button>
            </Link>
            <Link to="/ny-bedriftspresentasjon">
              <Button informationbox>Ny bedriftspresentasjon</Button>
            </Link>
            </ButtonContainer>
        </ContentContainer> 
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
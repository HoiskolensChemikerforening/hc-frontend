// Importing necessary React and styled-components for styling
import React from "react";
import styled from 'styled-components';
// Importing layout and text components from a separate component library
import { PageContainer } from "../../components/Layout";
import { P, TitleContainer, Title } from '../../components/Text'; 
// Importing images to be used in this component
import coffeeMug from './coffee_mug.png';
import coffeeMachine from './coffee_machine.png';
import waffleHeart from './waffle_heart.png';

// Declaring the AddComments component
export const AddComments = () => {
    return (
        <PageContainer> {/* Using a PageContainer for consistent page layout and styling */} 
            <TitleContainer> {/* Container for the title of the page */} 
                <Title> {/* Title text for the page */} 
                    Kontoret 
                </Title>
            </TitleContainer>

            {/* Container for the main content of the page */}
            <ContentContainer>
                {/* Paragraphs (P) for text content */}
                <P>
                HC har et eget kontor ved inngangen til Realfagsbygget mellom kjemiblokkene. Kontoret har en stor sofagruppe hvor man kan 
                slå av en prat med andre Chemikere, spise lunsj eller bare slappe av.
                </P>
                <P>
                Det er mulig å kjøpe Dahls pils eller brus, kjøpe en kanne kaffe for 10 kr av “Kaffefondet”, og alt 
                salg av HC-effekter, medlemskap og fagkompendier skjer på HC-kontoret.
                </P>
                <P>
                Den ukentlige vaffeldagen med salg av vafler med tilhørende kaffe og saft avholdes også på kontoret.
                </P>
                <P>
                Kontoret kommer til å være mye åpent i fadderperioden, slik at det er bare å komme innom hvis du lurer på noe eller vil 
                slappe av litt.
                </P>
                <P>
                HC-kontoret er et naturlig møtepunkt og tilholdssted for oss på Chemie, og vi håper at også dere nye i førsteklasse vil 
                komme til å føle samme tilhørigheten til kontoret.
                </P>
                <Images> {/* Container for the images to make styling easier */}
                    <Photo src={coffeeMug} alt="Coffee Mug" /> {/* a single imported photo with alternative text */}
                    <Photo src={waffleHeart} alt="Waffle Heart" />
                    <Photo src={coffeeMachine} alt="Coffee Machine" />
                </Images>
            </ContentContainer>
        </PageContainer>
    )
};

// Styled-component for the content container - try to change one value at a time to see what each of them does
const ContentContainer = styled.div`
    display: flex; // Uses Flexbox for layout, making it easier to align and distribute space among items
    flex-direction: column; // Items are stacked vertically
    padding: 20px; // Space inside the container around the content
    text-align: center; // Centers the text inside the container
    margin: 10px; // Space outside the container
`;

// Styled-component for the image container - try to change one value at a time to see what each of them does
const Images = styled.div`
    display: flex; // Uses Flexbox for layout
    flex-direction: row; // Aligns children (images) in a horizontal row
    justify-content: center; // Centers children horizontally in the container
    align-items: center; // Centers children vertically in the container
    gap: 50px; // Adds space between the images
`;

// Styled-component for each image - try to change one value at a time to see what each of them does
const Photo = styled.img`
    max-width: 200px; // Maximum width for each image
    height: auto; // Height is set automatically to maintain the aspect ratio
`;
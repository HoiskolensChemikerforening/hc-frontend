// Importing necessary React and styled-components for ??
import React from "react";
import styled from 'styled-components';
// Importing ?? from a separate component library
import { PageContainer } from "../../components/Layout";
import { P, TitleContainer, Title } from '../../components/Text'; 
// Importing ?? to be used in this component
import coffeeMug from './coffee_mug.png';
import coffeeMachine from './coffee_machine.png';
import waffleHeart from './waffle_heart.png';

// Declaring the AddComments component
export const AddComments = () => {
    return (
        <PageContainer> {/* Using a PageContainer for ?? */} 
            <TitleContainer> {/* Container for ?? */} 
                <Title> {/* Container for ?? */} 
                    Kontoret 
                </Title>
            </TitleContainer>

            {/* Container for the ?? of the page */}
            <ContentContainer>
                {/* Paragraphs (P) for ?? */}
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
                <Images> {/* Container for ?? */}
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
    display: flex; // ??
    flex-direction: column; // ??
    padding: 20px; // ??
    text-align: center; // ??
    margin: 10px; // ??
`;

// Styled-component for the image container - try to change one value at a time to see what each of them does
const Images = styled.div`
    display: flex; // ??
    flex-direction: row; // ??
    justify-content: center; // ??
    align-items: center; // ??
    gap: 50px; // ??
`;

// Styled-component for each image - try to change one value at a time to see what each of them does
const Photo = styled.img`
    max-width: 200px; // ??
    height: auto; // ??
`;
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { PageContainer } from "../../components/Layout";
import { P, TitleContainer, Title } from '../../components/Text'; 
import coffeeMug from './coffee_mug.png';
import coffeeMachine from './coffee_machine.png';
import waffleHeart from './waffle_heart.png';

export const AddComments = () => {
    return (
        <PageContainer> 
            <TitleContainer> 
                <Title>
                    Kontoret 
                </Title>
            </TitleContainer>

            <ContentContainer>
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
                <Images>
                    <Photo src={coffeeMug} alt="Coffee Mug" />
                    <Photo src={waffleHeart} alt="Waffle Heart" />
                    <Photo src={coffeeMachine} alt="Coffee Machine" />
                </Images>
            </ContentContainer>
        </PageContainer>
    )
};

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
    margin: 10px;
`;

const Images = styled.div`
    display: flex;
    flex-direction: row; // Align items in a horizontal row
    justify-content: center; // Center items horizontally
    align-items: center; // Center items vertically
    gap: 50px; // Add some space between the images
`;

const Photo = styled.img`
    max-width: 200px;  // Sets the maximum width of the image
    height: auto;     // Maintains the aspect ratio of the image
`;
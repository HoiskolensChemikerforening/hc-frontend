import React, { useEffect } from "react";
import styled from 'styled-components';
import { PageContainer } from "../../components/Layout";
import { P, H1, TitleContainer, Title } from '../../components/Text';
import StickyNotes from "./stickyNotes";

export const HundreSPM = () => {

    const texts = [
        'Text 1',
        'Text 2',
        'Text 3',
        'Text 4',
        'Text 5',
        'Text 6',
        'Text 7',
        'Text 8',
        'Text 9',
        'Text 10',
      ];

    return (
        <MainContainer>
            <TitleContainer>
                <Title>🥂 Lyst til å drikke? 🍻</Title>
            </TitleContainer>

            <PageContainer>
                <H1>Prøv 100 spørsmål - HC edition</H1>
                <StickyNotes texts={texts} />
            </PageContainer>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
`;
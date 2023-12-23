import React, { useEffect } from "react";
import styled from 'styled-components';
import { PageContainer } from "../../components/Layout";
import { P, H1, TitleContainer, Title } from '../../components/Text';

export const HundreSPM = () => {

    return (
        <MainContainer>
            <TitleContainer>
                <Title>🥂 Lyst til å drikke? 🍻</Title>
            </TitleContainer>

            <PageContainer>
                <H1>Prøv 100 spørsmål - HC edition</H1>
                <P>
                    To be continued :D
                </P>
            </PageContainer>
        </MainContainer>
    );
};

// Styled components for added visual appeal
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
`;
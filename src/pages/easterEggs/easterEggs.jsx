import React, { useEffect } from "react";
import styled from 'styled-components';
import { PageContainer } from "../../components/Layout";
import { P, H1, TitleContainer, Title } from '../../components/Text';
import easterEgg from './easterEgg.png'; // must use a symlink to module from project´s node modules to use img from static. Dont know how
import EmojiRain from './easterEggRain';

// Styled components for added visual appeal
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
`;

const EggImage = styled.img`
    width: 200px;
    height: auto;
    margin-bottom: 20px;
`;

export const EasterEggs = () => {

    return (
        <MainContainer>
            <TitleContainer>
                <Title>🥚 Velkommen til HC's Easter Eggs! 🐰</Title>
            </TitleContainer>

            <EmojiRain /> 
            <PageContainer>
                <H1>Klar for et spennende eventyr?</H1>
                <P>
                    Velkommen til vår påskeegg-side! Her gjemmer det seg overraskelser i form av hemmelige lenker til morsomme sider på nettstedet vårt. Kan du finne alle de skjulte URL-ene som fører til spennende eventyr?
                </P>
                <EggImage src={easterEgg} alt="Easter Egg" />
                <P>
                    Disse "eggene" er ikke bare for påsken - de venter på at du oppdager dem når som helst du utforsker nettsiden vår! Det kan være alt fra skjulte historier til morsomme interaktive aktiviteter.
                </P>
            </PageContainer>
        </MainContainer>
    )
};

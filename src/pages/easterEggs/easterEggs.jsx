import React, { useEffect } from "react";
import styled from 'styled-components';
import { PageContainer } from "../../components/Layout";
import { P, H1, TitleContainer, Title } from '../../components/Text';
import easterEgg from './easterEgg.png'; // must use a symlink to module from project´s node modules to use img from static. Dont know how
import EmojiRain from './emojiRain';

export const EasterEggs = () => {

    return (
        <FullPageContainer>
            <BackgroundDecoration/>
            <EmojiRain /> 
        <MainContainer>
            <TitleContainer>
                <Title>🥚 Velkommen til HC's Easter Eggs! 🐰</Title>
            </TitleContainer>

            <PageContainer>
                <H1>Hvilke sider gjemmer seg på nettsiden vår?</H1>
                <P>
                    Velkommen til vår påskeegg-side! Her gjemmer det seg overraskelser i form av hemmelige lenker til morsomme sider på nettstedet vårt. 
                    Kan du finne alle de skjulte URL-ene som fører til morsomme og ikke fullt så morsomme sider?
                </P>
                <EggImage src={easterEgg} alt="Easter Egg" />
                <P>
                    Disse "eggene" er ikke bare for påsken - de venter på at du oppdager dem når som helst du utforsker nettsiden vår! 
                </P>
            </PageContainer>
        </MainContainer>
        </FullPageContainer>
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

const EggImage = styled.img`
    width: 200px;
    height: auto;
    margin-bottom: 20px;
`;

const FullPageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const BackgroundDecoration = styled.div`
    z-index: -1;
    background: #FFFEC4;
    opacity: 0.8;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
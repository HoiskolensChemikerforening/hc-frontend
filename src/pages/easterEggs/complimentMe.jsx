import React, { useState } from 'react';
import styled from 'styled-components';
import { P, Title as baseTitle, TitleContainer } from '../../components/Text';
import { Button as baseButton } from '../../components/Button';

export const ComplimentMe = () => {

    const [compliment, setCompliment] = useState("Trykk på knappen for å få et kompliment!");

    const compliments = [
        "Du er fantastisk!",
        "Du er den beste!",
        "Du er en smart kjeks!",
        "Jeg liker stilen din.",
        "Du har den beste latteren.",
        "Jeg setter pris på deg.",
        "Du er den mest perfekte du som finnes.",
        "Ditt perspektiv er forfriskende.",
        "Du er en fantastisk venn.",
        "Du lyser opp rommet.",
        "Du har en utrolig energi!",
        "Ditt smil er smittsomt.",
        "Du gjør en forskjell.",
        "Du har en flott fantasi.",
        "Din kreativitet er inspirerende.",
        "Du er utrolig talentfull.",
        "Din innsats er imponerende.",
        "Du er en naturlig leder.",
        "Du har et godt hjerte.",
        "Din entusiasme er smittende."
    ];

    const generateCompliment = () => {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        setCompliment(compliments[randomIndex]);
    };

    return (
        <MainContainer>
            <BackgroundDecoration/>
            <TitleContainer>
                <Title>💗 Random kompliment generator 💗</Title>
            </TitleContainer>
            <ComplimentContainer>
                <P>{compliment}</P>
                <Button primary type="button" onClick={generateCompliment}>Gi meg et kompliment!</Button>
            </ComplimentContainer>
        </MainContainer>
    );
};

const ComplimentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    min-height: 80vh; /* Viewport Height */
`;

const Button = styled(baseButton)`
    background: pink;
    border-color: pink;
    &:hover {
        border-color: black;
      }
`;

const Title = styled(baseTitle)`
    background-color: pink;
`;

const BackgroundDecoration = styled.div`
    z-index: -1;
    background: linear-gradient(to bottom, #DB7093, #FFA500);
    opacity: 0.8;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;
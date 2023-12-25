import React, { useState } from 'react';
import styled from 'styled-components';

export const Magic8Ball = () => {
    const answers = [
        "Det er sikkert",
        "Det er blitt bestemt slik",
        "Uten tvil",
        "Ja - helt sikkert",
        "Du kan ta utgangspunkt i det",
        "Slik jeg ser det; ja",
        "Mest sannsynlig",
        "Det høres bra ut",
        "Ja",
        "Tegngene tyder på ja",
        "Nei",
        "Spør igjen senere",
        "Dette bør du ikke vite svaret på",
        "Stjernene tyder på nei",
        "Stjernene tyder på ja",
        "Ikke ta utgangspunkt i det",
        "Svaret mitt er nei",
        "Mine kilder sier nei",
        "Det virke rikke lurt",
        "Veldig usikkert"
    ];

    const [answer, setAnswer] = useState('Still et spørsmål til kulen');

    const giveAnswer = () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        setAnswer(answers[randomIndex]);
    };

    return (
        <Container>
            <Title>Spørr den magiske 8-Ball-kulen</Title>
            <EightBall onClick={giveAnswer}>
                <Answer>{answer}</Answer>
            </EightBall>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    min-height: 90vh;
    background-color: #282c34;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const EightBall = styled.div`
    width: 250px;
    height: 250px;
    background-color: black;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Answer = styled.p`
    width: 150px;
    height: 150px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: black;
    font-size: 16px;
    padding: 10px;
`;


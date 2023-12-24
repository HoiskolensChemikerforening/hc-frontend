import React, { useEffect } from "react";
import styled from 'styled-components';
import { PageContainer } from "../../components/Layout";
import { P, H1, TitleContainer, Title } from '../../components/Text';
import Flashcard from "./cards";

export const HundreSPM = () => {

    const texts = [
        '1. Hvem ser ut som de har vært i milla? \n 2. Hvem har kokt flest øvinger? \n 3. Hvem har stalket klasselisten på HC-siden mest? \n 4. Hvem har finest lepper? Sett de til bruk og drikk opp glasset \n 5. Hvem kunne blitt kasta ut av et HC arrangement? \n 6. Hvem har vært på en strippeklubb? Gratulerer, du liker ikke å være alene så velg en drikkevenn og skål! \n 7. Hvem er mest sannynlig til å drepe noen ved et uhell? \n 8. Hvem har stjålet noe fra kontoret? \n 9. Hvem har best musikksmak? \n 10. Hvem lukter best?',
        '11. Hvem har shava og er forbredt på alt? \n 12. Hvem er mest fornøyd med eget utseende? \n 13. Hvem er mest sannsynlig til å bli arrestert? \n 14. Hvem er mest sannsynlig til å bli en politibetjent? Ta en skål med din første arrest! \n 15. Hvem har størst sjans på noen i styret? \n 16. Hvem her kunne brukt noe annet enn en kondom som en kondom? \n 17. Velg en i rommet, you have been lamboed! Velg en partner å ta lambo med! \n 18. Hvem er mest sannsynlig til å bli rommets neste Svein Sunde? \n 19. Hvem er den dyreste vennen i rommet? \n 20. Hvem kunne mest sannsynlig solgt bilder av føttene sine for penger? Her tjener man godt, ta en slurk med den dyreste vennen din som velger antallet slurker!',
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
                <Flashcard cards={texts} />
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
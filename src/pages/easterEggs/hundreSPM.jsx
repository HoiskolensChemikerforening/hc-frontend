import React from "react";
import styled from 'styled-components';
import { PageContainer } from "../../components/Layout";
import { H1, Title as baseTitle, TitleContainer } from '../../components/Text';
import Flashcard from "./cards";

export const HundreSPM = () => {

    const frontTexts = [
        '1. Hvem ser ut som de har vært i milla? \n 2. Hvem har kokt flest øvinger? \n 3. Hvem har stalket klasselisten på HC-siden mest? \n 4. Hvem har finest lepper? Sett de til bruk og drikk opp glasset \n 5. Hvem kunne blitt kasta ut av et HC arrangement? \n 6. Hvem har vært på en strippeklubb? Gratulerer, du liker ikke å være alene så velg en drikkevenn og skål! \n 7. Hvem er mest sannynlig til å drepe noen ved et uhell? \n 8. Hvem har stjålet noe fra kontoret? \n 9. Hvem har best musikksmak? \n 10. Hvem lukter best?',
        '11. Hvem har shava og er forbredt på alt? \n 12. Hvem er mest fornøyd med eget utseende? \n 13. Hvem er mest sannsynlig til å bli arrestert? \n 14. Hvem er mest sannsynlig til å bli en politibetjent? Ta en skål med din første arrest! \n 15. Hvem har størst sjans på noen i styret? \n 16. Hvem her kunne brukt noe annet enn en kondom som en kondom? \n 17. Velg en i rommet, you have been lamboed! Velg en partner å ta lambo med! \n 18. Hvem er mest sannsynlig til å bli rommets neste Svein Sunde? \n 19. Hvem er den dyreste vennen i rommet? \n 20. Hvem kunne mest sannsynlig solgt bilder av føttene sine for penger? Her tjener man godt, ta en slurk med den dyreste vennen din som velger antallet slurker!',
        '21. Hvem i rommet er mest sannsynlig til å bli en mobber?  \n 22. Hvem er mest sannsynlig til å etablere en ny kjemisk vitenskapelig lov? \n 23. Hvem er mest melodramatisk i rommet? \n 24. Hvem i rommet er høyest? Skål med den faktisk høyeste, dersom dette er deg selv blir det bonski! \n 25. Hvem burde ta seg en tørkeperiode? \n Hvem kjenner du best? La vedkommende gjette din favorittfarge, dersom det er riktig tar du 3 slurker, hvis ikke tar hen 3 slurker. \n 27. Hvem er lettest å bli kjent med?  \n 28. Hvem er mest sannsynlig til å spise når de kjeder seg? 29. Hvem er mest generøs? Del ut fritt antall slurker rundt rommet, og ta like mange selv. \n 30. Hvem hadde kunne tatt 4 pils og 1 pizza? Bevis det ved å ta 4 slurker.',
        '31. Hvem er i rommet kommer mest sannsynlig til å bli tatt for juks? \n 32. Hvem lager best pokerface når man tar en shot? Velg en, og hen drikker. Etter deles ut vann og shots og sjekk pokerfacen til alle! \n 33. Hvem er mest sannsynlig til å få en sykdom oppkalt etter seg? Alle som har hatt korona eller testa negativt eller vært i karantene, skåler! \n 34. Hvem er mest sannsynlig til å bli lei av partneren sin kun etter to uker? \n 35. Kast boksen til en du vil bli bedre kjent med, skål dere to! \n 36. Velg en, you’ve been iced! Velg en partner å gå ned på et kne med og ta en smirnoff med! \n 37. Hvem er lettest å bryte isen med? Skål med duoen som ble icea! \n 38. Hvem har ligget med flest? Fy, skam deg selv og ta like mange slurker som bodycounten din!? \n 39. Hvem er mest kjent i byen dere er i? \n 40. Hvem av jentene er en av gutta? Den utvalgte skåler med alle guttene i rommet!',
        '41. Hvem tar seg mest på ansiktet? Neste som tar seg på ansiktet skåler med den utvalgte! \n 42. Kast boksen til den mest lengst tørkeperiode! \n 43. Hvem har finest smil og lyser opp rommet? Alle skåler for sola vår! \n 44. Hvem ser muligheter der andre ser hindringer? \n 45. Hvem i rommet har høyest toleranse? Gratulerer, ta deg like mange ekstra slurker som 1/3 av alderen din ;) \n 46. Kast til den som har drukket minst! \n 47. Hvem kommer på lab til å utløse en HMS-katastrofe? \n 48. Hvem gir mest til veldedighet? Så hyggelig, du kan få lov til å gi bort like mange slurker som antall mennesker i rommet. \n 49. Hvem i rommet kommer til å fullføre kjemi? \n 50. Hvem slutter på studiet først? Kontraster, skål med hverandre!',
        '51. Hvem har mest FOMO (fear of missing out)? \n 52. Hvem er sterkest? Ta en håndbak kamp med din nærmeste rival, vinneren deler ut 5 slurker og taperen tar 3! \n 53. Hvem er best til å holde pusten lengst? \n 54. Pekelek, drikk antall sluker som fingre pekt på deg. \n 55. Hvem har brukt mest penger i kantina? \n 56. Hvem er mest sannsynlig til å delta på alle fadder og blot sine 28 arrangementer? \n 57. Hvem er flinkest til å styrte? Velg en og ta med en ukjent! Velg de to beste, og sjekk! Taperen drikker. \n 58. Hvem er mest manipulerende? \n 59. Hvem er den beste løgneren? Ta en skål med den manipulerende! \n 60. Kast til den du tror har flest av det motsatte kjønn på topplisten på snapchat, og drikk like mange som du har på topplista av det motsatte kjønn!',
        '61. Hvem har mest sannsynlig drukket i over 48 timer i strekk? Drikk 2 slurker for de to dagene. \n 62. Velg en, si de ti første grunnstoffene. Drikk like mange slurker som de du tok feil, og del ut like mange som du tok riktig. \n 63. Hvem i rommet har mest dratiltryne? \n 64. Hvem blir mest drita i kveld? Drikk dobbelt så mange slurker som fingre du fikk ;) \n 65. Hvem blir best foreldre? \n 66. Hvem i rommet har du lyst til å bli foreldre med? Skål dere to! \n 67. Kast til en som ikke kunne blitt blodgiver! \n 68. Hvem rundt bordet tror dere har flest parkeringsbøter? \n 69. Hvem er mest bortskjemt i vennegjengen? \n 70. Hvem vil mest sannsynlig få en bedre karakter basert på deres overtalesesevne, og ikke deres kunnskap?',
        '71. Hvem er flinkest på skolen? Ta like mange slurker som fag du har bestått på NTNU! \n 71. (Gi boksen videre med et kyss) - korona \n 73. Hvem har best minne? Lukk øynene og nevn alle navnene til de som er tilstede. Lykkes du deler du ut tilsvarende antall slurker som deltakere, ellers drikker du fire slurker. \n 74. Hvem er den mest vågale? Velg en til å ta en ukjent shot, klarer hen å tømme den, skåler alle for han! Hvis ikke, drikker han 4 straffeslurker. \n 75. Hvem mista dommen først? Kasteren gjetter alder, dersom riktig tar hen 3 slurker, feil så tar kasteren 3 slurker! \n 76. Hvem er flinkest på flip the cup? Velg de to flinkeste, og den dårligste til å flippe to kopper må drikke like mange ganger som hen feilet! \n 77. Hvem har et eller flere barn rundt om i verden? \n 78. Utfordring: Deltakerne skal etter tur gjette nasjonaliteter du har ligget med, de som gjetter riktig kan dele ut 2 slurker, dersom ingen gjetter riktig kan du selv dele ut 4 slurker! \n 79. Hvem er mest edru? Dette må ordnes! Drikk 2 slurker hver gang du møter blikket til noen andre, dette varer de neste 5 spørsmålene! \n 80. Hvem har flest blonde øyeblikk? Utfordring: dere skal etter tur stille vedkommende et tilsynelatende lett spørsmål, for hver feil svar må hen drikke en slurk.',
        '81. Hvem tar alltid en for laget? \n 82. Hvem i rommet har blitt kastet til minst? Ta igjen de andre med tre store slurker! \n 83. Hvem her har den mest skitne nettleserhistorien? \n 84. Hvem her har du et lite øye for? Skål med hverandre ;) \n 85. Hvem kunne hatt en liggeliste på notater? Fy, skam deg selv og ta like mange slurker som bodycounten din! \n 86. Hvem her har brukt falsk legitimasjon flest ganger? \n 87. Hvem får du vakrest barn sammen med? Ta en skål dere to! \n 88. Hvem er mest sannsynlig til å ha rare fobier? Fortell og drikk din særing! \n 89. Kast til den som hadde nektet å gi bort en nyre til en syk venn! \n 90. Hvem i rommet er mest sannsynlig å bli forelsket i sin beste venn?',
        '91. Hvem her vil mest sannsynlig kunne komme seg unna med drap? \n 92. Hvem i rommet kunne ha prøvd seg på en trekant? Den utvalgte velger sine to, og dere tre tar en skål! \n 93. Hvem er best til å kysse? Skål med trekanten, er du en del av trekanten drikker du for alle 3, altså 3 slurker! \n 94. Hvem er blotets neste ØL beerpong vinneren på HC? Ta seks slurker, like mange kopper som i beerpong ;) \n 95. Hvem er mest uskyldig? \n 96. Hvem fikk vaksinen først? Alle fullvaksinerte tar 2 slurker og alle med en dose tar 1 slurk! \n 97. Hvem i rommet har mest sannsynlig hatt kongle? \n 98. Hvem er mest sannsynlig til å ta en shot antibac i løpet av kvelden? \n 99. Hvem i rommet har best humor, få sidemannen din til å smile på 30 sek og du kan dele ut 10 slurker, mislykker du så tar du 5 \n 100. Hvem har vært festen høydepunkt! Velg din nærmeste til å ta bonski med!',
      ];

    const backTexts = [
        'Skål for 10!',
        'Skål for 20!',
        'Skål for 30!',
        'Skål for 40!',
        'Skål for 50!',
        'Skål for 60!',
        'Skål for 70!',
        'Skål for 80!',
        'Skål for 90!',
        'Skål for 100!',
    ];

    return (
        <MainContainer>
            <BackgroundDecoration/>
            <TitleContainer>
                <Title>🥂 Lyst til å drikke? 🍻</Title>
            </TitleContainer>

            <PageContainer>
                <H1>Prøv 100 spørsmål - HC edition</H1>
                <Flashcard frontCards={frontTexts} backCards={backTexts} />
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

const BackgroundDecoration = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #FFD966, #FFA500);
    opacity: 0.8;
    z-index: -1;
`;

const Title = styled(baseTitle)`
    background-color: #FFA500;
`;
import React, { useState } from "react";
import styled from "styled-components";
import { P, Title, TitleContainer } from "../../components/Text"; 
import { BodyContainerLeft } from "../../components/Layout";
import { Button } from "../../components/Button";

export const Praktiskinfo = () => {
  const [selected, setSelected] = useState("praktiskinfo");

  // Tekstinnhold for de ulike seksjonene
  const content = {
    praktiskinfo: (
      <>
        <TitleContainer>
          <Title>Praktisk info</Title>
        </TitleContainer>
        <P>Velkommen til Høiskolens Chemikerforening</P>
        <P>Du har uten tvil tatt et godt valg, og vi er mer enn klare for å ta deg imot på immatrikuleringsdagen. 
          Du har sikkert mange spørsmål, og vi skal prøve å besvare dem. 
          Mye av informasjonen vil du få i løpet av dine første dager, men det er noe det er greit å være obs på.</P>
      </>
    ),
    studielån: (
      <>
        <TitleContainer>
          <Title>Søk om studielån</Title>
        </TitleContainer>
        <P>Det kan til tider være lang behandlingstid hos Lånekassen, og det er derfor lurt å være tidlig ute hvis du trenger pengene raskt.
        Husk å søke før fristen går ut! Registrer deg på <a href="https://www.lanekassen.no" target="_blank" rel="noopener noreferrer">
        Lånekassen</a> og følg anvisningene. 
        Selv om du ikke skulle trenge pengene er det likevel mulig å ta opp fullt lån og høste renter av det man ikke bruker. 
        Lånet er rentefritt så lenge du studerer og er sannsynlig det billigste lånet du noen gang kommer til å få. 
        Etter at du har søkt om studielån må du betale semesteravgift for at Lånekassen skal sende deg pengene.</P>
      </>
    ), 
    semesteravgift: (
      <>
        <TitleContainer>
          <Title>Betale semesteravgift</Title>
        </TitleContainer>
        <P>Semesteravgiften er nødvendig for at man skal kunne fungere som student ved NTNU. Når betalingen er registrert begynner Lånekassen å betale ut studielån (dersom du har søkt om det) 
            Det er derfor lurt å betale semesteravgiften i god tid før studiestart. </P>
        <P>Slik betaler du: <br/>
            Logg deg inn på <a href="https://fsweb.no/studentweb/" target="_blank" rel="noopener noreferrer"> Studentweb</a>. 
            I margen øverst velger du "Mer og Betaling".</P>
        <P>Andre ting som må gjøres på Studentweb:<br/>
        Når du først er inne på Studentweb er det er par andre ting som også må gjøres som ny student.</P>
        <P>1. Bekreft utdanningsplanen din. <br/>
        3. Hvis du ønsker å ta andre fag enn de som er obligatoriske i vår utdanningsplan, kan du melde deg opp i disse. (Aktive emner)</P>
      </>
    ),
      forkurs: (
      <>
        <TitleContainer>
          <Title>Forkurs i matte og kjemi</Title>
        </TitleContainer>
        <P>Hver høst arrangerer NTNU oppfriskningskurs i både matematikk og kjemi. Disse kursene holdes parallelt i uka før semesteret starter.</P>
        <P>Forkurs i matte: <br/>
            Mattekurset er ment som en oppfriskning av den viktigste matematikken du lærte på videregående. 
            Hvis det er en stund siden du integrerte sist eller du føler deriveringen er litt rusten, kan det være greit å være med på dette kurset. 
            Den gjør at overgangen fra friår, militærtjeneste eller sommerferie blir litt enklere. Selv om du ikke skulle trenge kurset rent faglig er det en fin måte å komme inn i skolemodus på.</P>
        <P>Forkurs i kjemi: <br/>
            Forkurset i kjemi er i hovedsak ment for dem som ikke har hatt kjemi på videregående. Selv om det ikke kreves kjemi for å komme inn på linjen vår er det likevel kjekt å ha litt bakgrunnskunnskaper før man begynner på kjemien i førsteklasse. 
            Hvis du tok kjemi på VGS og følte det gikk greit har du et godt grunnlag for kjemifaget som holdes første semester.</P>
        <P>Mer informasjon om kursene finner du på: <a href="https://www.ntnu.no/student/studiestart"target="_blank" rel="noopener noreferrer"> Studiestart - NTNU </a></P>
      </>
    ),
      fag: (
      <>
        <TitleContainer>
          <Title>Fag og bøker</Title>
        </TitleContainer>
        <P>I første semester skal du ha følgende fag:<br/>
            - Matematikk 1 <br/>
            - Generell Kjemi <br/>
            - Informasjonsteknologi Grunnkurs <br/>
            - Ex.Phil</P>
        <P>Klikk på fagene for å få mer informasjon.</P>
        <P>akademika.no har oppdatert pensumlistene sine for mange av fagene, så det er mulig å være tidlig ute. 
            Men det er heller ikke noe problem å vente med å kjøpe bøker til studiestart, og det gjør de fleste.</P>
        <P>Hvis man vil spare noen kroner (og det vil man jo ofte som student) kan det være kjekt å kjøpe brukt. 
            Mange eldre studenter selger sine gamle bøker billig. Spør en fadder, søk på kjøp-og-salg grupper på Facebook, eller se på nettsider som iBok.no. 
            HCs Kjøp og Salg side på Facebook er en fin plass å begynne. 
            Hvis du vil kjøpe nytt kan du se på Akademika eller på nettbokhandlere som adlibris.no.</P>
      </>
    ),
      timeplan: (
      <>
        <TitleContainer>
          <Title>Timeplan</Title>
        </TitleContainer>
        <P>NTNU har et eget timeplan system hvor timeplanen din blir generert, men mange vil nok snu seg til den uoffisielle tjenesten <a href = "https://ntnu.1024.no"  target = "_blank" rel = "noopener noreferrer"> ntnu.1024.no</a> hvor man kan sette opp sine egne timeplaner etter hvilke fag man tar det aktuelle semesteret. 
            Timeplanene hentes fra NTNUs egne sider og er nøyaktige, men det anbefales likevel å sjekke steder for eksamen selv.</P>
        <P>Vær klar over at timeplanen for Teknostart ikke ligger her, så du har ikke helt fri de to første ukene selv om det ser slik ut. 
            Mer informasjon om Teknostart og timeplanen for de to første ukene finner du her.</P>
        <P>Hvis du ønsker å sette opp din egen timeplan, kan du gjøre følgende: <br/>
            1. Gå inn på <a href = "https://ntnu.1024.no"  target = "_blank" rel = "noopener noreferrer"> ntnu.1024.no</a> <br/>
            2. Finn et passende navn på timeplanen din og trykk «Start» <br/>
            3. Legg inn de emnene du ønsker <br/>
            4. Velg parallell «MTKMB» på alle emnene</P>
        <P>Helt til slutt, en ellers svært nyttig nettside og app er <a href = "https://instabart.no/" target = "_blank" rel = "noopener noreferrer">Instabart</a> som anbefales å sjekke ut da den inneholder noen veldig nyttige linker. 
            På siden Kom i gang finner du også mye god info.</P>
      </>
    ),
      adgangskort: (
      <>
        <TitleContainer>
          <Title>Adgangskort</Title>
        </TitleContainer>
        <P>Adgangskortet gir tilgang til blandt annet datasaler, printere, utlån på biblioteket og bygningene på Gløshaugen utenom åpningstidene. 
            Som student kommer man derfor ikke så langt uten dette.</P>
        <P>I løpet av de første ukene er det veldig mange som skal innom for å hente dette, noe som gjør at det blir en del kø. Det kan derfor være lurt å møte opp på litt rare tider for å unngå den værste køen. 
            Hvis man ikke orker å stå i kø for å fikse seg adgangskort er det mulig å vente noen dager til ting roer seg litt. 
            Mer informasjon finner du på<a href = "https://innsida.ntnu.no/studentkort" target = "_blank" rel = "noopener noreferrer"> innsida.ntnu.no/studentkort</a>.</P>
        <P>Under fadderperioden er det mye som skjer og man er aldri alene, så man har alltids en fadder med kort i nærheten hvis det skulle være noe.</P>
      </>
    ),
      epost: (
      <>
        <TitleContainer>
          <Title>Tilgang til student e-posten din</Title>
        </TitleContainer>
        <P>Veldig mye av informasjonen som kommer til deg som student får du på e-post. Når du begynner å studere ved NTNU får du en ny e-postadresse på formen dittbrukernavn@stud.ntnu.no. 
            Det er denne e-postadressen som fakultet og institutt benytter seg av, og det er derfor fint å aktivere denne så fort som mulig.</P>
        <P>Generell informasjon om oppretting av brukerkonto finner du <a href = "https://innsida.ntnu.no/wiki/-/wiki/Norsk/opprette+brukerkonto" target = "_blank" rel = "noopener noreferrer"> her.</a></P>
        <P>Den e-postadressen du får tildelt genereres automatisk ut fra navnet ditt. Dette vil også være brukernavnet ditt som du skal bruke når du logger på NTNU sine internsider: <a href="http://innsida.ntnu.no" target = "_blank" rel = "noopener noreferrer">innsida.ntnu.no</a></P>
        <P>Videresende e-post fra Webmail: <br/>
        Man finner ganske raskt ut at grensesnittet i Webmail ikke er det beste. Hvis man har en e-postkonto man bruker fra før (f.eks. Gmail) er det mulig å videresende Webmailen til denne. 
        Dette gjør at du kan fortsette å bruke din gamle e-postkonto og samtidig få med deg all informasjonen som vi sender til deg.</P>
        <P>Slik videresender du e-posten:<br/>
            1. Logg inn på <a href="https://webmail.stud.ntnu.no/" target = "_blank" rel = "noopener noreferrer">webmail.stud.ntnu.no</a> <br/>
            2. Finn knappen «Filter» øverst på siden og trykk på denne <br/>
            3. Velg «Videresend» <br/>
            4. Skriv inn din andre e-postadresse <br/>
            5. Hvis du vil beholde en kopi av e-postene i Webmail krysser du av for det.</P>
        <P>Hvis du ønsker å sende mail med stud.ntnu.no-adressen din som avsender fra for eksempel en e-postklient, ligger det en fin guide til oppsett på NTNUs hjemmesider. 
            Det er verdt å fikse dette med det samme, så slipper du å tenke mer på det.</P>
      </>
    ),
  };
  /* I linkene brukes target blank for å åpne en ny nettleser med siden.  
  rel="noopener noreferrer var et forslag fra chat for å styrke sikkerhet og personvern*/

  return (
    <PageLayout>
      {/* Sidebar */}
      <Sidebar>
        <SidebarTitle>Praktisk info</SidebarTitle>
        <SidebarList>
          <SidebarItem>
            <Button onClick={() => setSelected("praktiskinfo")} primary>
              Praktisk info
            </Button>
          </SidebarItem>
          <SidebarItem>
            <Button onClick={() => setSelected("studielån")} primary>
              Søk om studielån
            </Button>
          </SidebarItem>
          <SidebarItem>
            <Button onClick={() => setSelected("semesteravgift")} primary>
              Betale semesteravgift
            </Button>
          </SidebarItem>
          <SidebarItem>
            <Button onClick={() => setSelected("forkurs")} primary>
              Forkurs i matte og kjemi
            </Button>
          </SidebarItem>
          <SidebarItem>
            <Button onClick={() => setSelected("fag")} primary>
              Fag og bøker
            </Button>
          </SidebarItem>
          <SidebarItem>
            <Button onClick={() => setSelected("timeplan")} primary>
              Timeplan
            </Button>
          </SidebarItem>
          <SidebarItem>
            <Button onClick={() => setSelected("adgangskort")} primary>
              Adgangskort
            </Button>
          </SidebarItem>
          <SidebarItem>
            <Button onClick={() => setSelected("epost")} primary>
              Tilgang til student e-posten din
            </Button>
          </SidebarItem>
        </SidebarList>
      </Sidebar>

      {/* Innhold */}
      <BodyContainerLeft>{content[selected]}</BodyContainerLeft>
    </PageLayout>
  );
};

/* ---------- Styled Components ---------- */

const PageLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;


const Sidebar = styled.aside`
  flex: 0 0 250px; /* Låser bredden i flex-layouten: flex-grow:0; flex-shrink:0; flex-basis:500px */
  width: 250px;
  background-color: #ffd700; /* gul */
  padding: 20px;
`;

const SidebarTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarItem = styled.li`
  margin-bottom: 15px;
  button {
    width: 100%;
    text-align: left;
  }
`;

export default Praktiskinfo;
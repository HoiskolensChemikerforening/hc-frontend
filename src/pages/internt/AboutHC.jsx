import React from "react";
import styled from 'styled-components';
import { P, H1, H2, TitleContainer, Title } from "../../components/Text";
import { Button } from "../../components/Button";



export const AboutHC = () => {


  const Scroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
    return (
        <>
        <BodyContainer>
        <TitleContainer>
            <Title>Om Høiskolens Chemikerforening</Title>
        </TitleContainer>

        <H2 id="HvaErHC">Innholdsfortegnelse</H2>

        <TableOfContent >
          <Button primary type="button" onClick={() => Scroll("HvaErHC")}>Hva er HC?</Button>
          <Button primary type="button" onClick={() => Scroll("Arrangementer")}>Årlige arrangementer</Button>
          <Button primary type="button" onClick={() => Scroll("HCKontor")}>HC-kontoret</Button>
          <Button primary type="button" onClick={() => Scroll("HCOppbygning")}>HC´s oppbygning</Button>
        </TableOfContent>

        <P >
            Høiskolens Chemikerforening (HC) er linjeforeningen for studiet industriell kjemi og bioteknologi. 
            HC er en av de største bidragsyterne til det gode miljøet som er mellom studentene på linja vår. 
            Høiskolens Chemikerforening ble grunnlagt 8. mars 1915, og er derfor en av de eldste linjeforeningene i landet. 
            Med sin lange historie følger det med mange spennende tradisjoner og morsomme arrangementer, selv om HC også hele 
            tiden er i utvikling.
        </P>
        <P>
            Høiskolens Chemikerforening har som mål å gi alle studenter ved industriell kjemi og bioteknologi et sosialt 
            tilbud ved siden av studiene. Innenfor HC er det derfor et bredt spekter av undergrupper og sosiale grupper, som 
            inkluderer alt fra orkester, kor og internteater, til vinklubb, ølbrygging og et eget fotballag, Chemie FK, som 
            spiller i studentligaen i byen, for å nevne noen. I tillegg blir det arrangert en rekke fester, quizer og andre 
            morsomme arrangementer.
        </P>
        <P id="Arrangementer">
            Selv om Høiskolens Chemikerforening hovedsaklig jobber for sosiale tiltak ved siden av studiene, hjelper HC også til 
            med å arrangere hjelpeforelesninger i fag i forbindelse med eksamen, salg av kompendier i utvalgte fag, samt å ha en 
            god dialog og et godt samarbeid med NTNU.
        </P>

        <Content>
          <img src={"logo.png"} alt={"HC logo"} style={{width:150, height:150, borderRadius:150/2}}/>
          <H1 style={{marginTop:"50px"}}>Årlige arrangementer</H1>
          <img src={"logo.png"} alt={"HC logo"} style={{width:150, height:150, borderRadius:150/2}}/>
        </Content>
        <H2>pHnockepHaest</H2>
        <P>
        pHnockepHaesten er immatrikuleringsballet til Høiskolens Chemikerforening. pHnockepHaesten er en tradisjonsrik fest som 
        holdes i Storsalen på Samfundet. Dresskode er studentergalla – altså det fineste man har i skapet. Kvelden byr på sang, 
        dans og en flott middag. Dette ballet er de nye 1. klassingenes velkomst inn i HC, og 5. klassingenes hyllest for årene i HC. 
        pHnockephaest er det pHaestkomtitéen som arrangerer. 
        </P>

        <H2>HoestpHaest</H2>
        <P>
        HoestpHaesten er en årlig fest på Studenterhytta i bymarka som arrangeres på høsten av pHaestkomitéen. HoestpHaesten begynner 
        med bålvors i skogen ved Studenterhytta. Busser blir satt opp for å frakte feststemte Chemikere til Studenterhytta, der det 
        blir servert  middag og god drikke. Etter maten gjøres spisesalen om til dansegulv, og HCs egne DJer og lyd- og lysteknikere 
        sørger for topp stemning til langt på natt. I tillegg til et supert utvalg av øl og vin i baren, har Studenterhytta også 
        fasiliteter som badstu, stamp og soveplasser, så det er ingen grunn til å dra tidlig hjem. For de som velger å overnatte, 
        venter en god frokost og oppsatte busser hjem dagen derpå. Det blir også satt opp busser ned fra Studenterhytta på natten, 
        for de som ikke ønsker å sove over.
        </P>

        <H2>Fjelltur</H2>
        <P>
        I løpet av året arrangerer sportskomitéen fjellturer og toppturer til et av fjellområdene i nærheten av Trondheim. De varierer 
        mellom å bruke hyttene til turistforeningen, å sove i lavo eller ta kortere dagsturer. Uansett er det veldig trivelig dra bort 
        fra Gløshaugen en helg for å komme seg ut i naturen. På turene er du velkommen uansett hvilken form du er i og hva slags erfaring
        du har med toppturer fra før av.
        </P>

        <H2>Kjemidagen</H2>
        <P>
        Kjemidagen er en bedriftsdag som arrangeres av Industrikomitéen til HC og Timini (linjeforeningen for nanoteknologi). Et 
        titalls bedrifter inviteres til Gløshaugen for å markedsføre seg for oss studenter. Dette er en kjempegod mulighet til å få 
        et innblikk i hvilke bedrifter som er aktuelle for oss etter endt studie. Det er også muligheter for å snakke med bedrifter 
        angående sommerjobb. I tillegg kan man bli invitert med på bankett senere på kvelden sammen med bedriftene om man er heldig. 
        </P>

        <H2>Adventskonsert</H2>
        <P>
        Når det nærmer seg advent og eksamenstid, arrangerer HC´s en egen Adventskonsert for å gi Chemikerne en pause i studiene og 
        å synge julen inn. Innslagene kommer fra de ulike undergruppene i HC, deriblant koret vårt “Laborachorium” og orkesteret vårt 
        “TapHel og Toddy”,  i tillegg til andre som ønsker å opptre. HC´s egne lyd- og lysteknikere (Audiochromatene) ordner med det 
        tekniske rundt konserten. Det blir også servert pepperkaker og gløgg. Dette er en fin avkobling før eksamenslesinga setter inn.
        </P>

        <H2>Vinterblotet</H2>
        <P>
        Høiskolens Chemikerforening ble stiftet 8. mars 1915, og i forbindelse med dette setter HC hvert år av en uke i mars til 
        feiring. Denne uken kalles Vinterblotet, og den syv dager lange feiringen er noe av det morsomste som skjer i løpet av året i 
        linjeforeningen! Arrangementer i løpet av Vinterblotet som er verdt å merke seg, er drikkelek-festen Ølympiaden, en egenoppsatt 
        musikal (kalt Chemikalen) med epHterpHaest etter siste forestilling, en ny HyttepHaest på Studenterhytta tilsvarende 
        HoestpHaesten, drikke-skirennet Gaukrenn etterfulgt av en fest kalt Avrusning, et storslått gallaball kalt StoorpHaest ettefulgt 
        av en epHterpHaest som varer frem til nachspiel-frokost kalt pSillis, samt mye mye mer! Vinterblotet samler Chemikere fra alle 
        klassetrinn, uteksaminerte Chemikere, professorer ved NTNU, eksterne styremedlemmer, utenlandske kjemistudenter fra 
        vennskaps-linjeforeninger fra Sverige og Finland og andre venner av HC til en eneste stor feiring, og gjør denne festuken til 
        en opplevelse du ikke kan gå glipp av!
        </P>

        <H2>Chemie Grand Prix</H2>
        <P>
        Chemie Grand Prix arrangeres på våren og er et arrangement der kjemistudenter opptrer med et egenkomponert show fullt av glitter, 
        glam og fiaskoer. Hvert klassetrinn har et eget bidrag, i tillegg til at en del undergrupper og andre gjesteinnslag pleier å 
        delta. Chemie Grand Prix pleier å være i et auditorium på skolen som blir gjort om til et festlokale pyntet med glitter og glam, 
        og er svært populært blant Chemikere og andre studerende på Gløshaugen. Arrangementet foregår slik som det tradisjonelle 
        Melodi Grand Prix, med poeng fra ulike land, for deretter å kåre kveldens vinner av CGP, samt kveldens fiasko-show. Etter CGP 
        fortsetter festen på et leid lokale eller ute på byen til langt på natt.
        </P>

        <P id="HCKontor">
        Dette var kun en liten oversikt over hva som skjer i HC i løpet av året. I tillegg er mange små arrangementer som varierer litt 
        fra år til år, og mye annet som ikke fikk plass her. Det finnes store og små arrangementer for alle og enhver, enten du elsker å 
        danse til solen står opp, eller du foretrekker mer rolige kvelder med perling og stikking. Spør fadderne dine eller andre 
        Chemikere om hva de synes om de ulike arrangementene – de har helt sikkert mye å fortelle! I HC finnes det et arrangement for alle, 
        og du er velkommen som du er.
        </P>

        <Content>
          <img src={"logo.png"} alt={"HC logo"} style={{width:150, height:150, borderRadius:150/2}}/>
          <H1 style={{marginTop:"50px"}}>HC-kontoret</H1>
          <img src={"logo.png"} alt={"HC logo"} style={{width:150, height:150, borderRadius:150/2}}/>
        </Content>
        
        <P>
        HC har et eget kontor ved inngangen til Realfagsbygget mellom kjemiblokkene. Kontoret har to små sofagrupper, hvor man kan slå 
        av en prat med andre Chemikere, spise lunsj eller bare slappe av. Det er i tillegg mulig å få tilgang til et felles kjøkken for 
        hele naturvitenskap-gangen (kalt NV-gangen) der man kan varme lunsjen sin eller steke toast.
        </P>
        <P>
        På kontoret finnes det en egen kiosk driftet av Omsorgskomitéen der du finner alt fra snacks og mat til tamponger om du skulle 
        trenge det. Det er mulig å kjøpe Dahls pils eller brus fra “Ølfondet” på kontoret, kjøpe en kanne kaffe for å dele med andre 
        tørste Chemikere av “Kaffefondet”. I tillegg er det salg av HC-effekter, medlemsskap og fagkompendier på HC-kontoret. 
        </P>
        <P>
        Den ukentlige vaffeldagen med salg av vaffler avholdes også på kontoret. Hver uke steker 2 frivillige Chemikere vaffler til resten 
        av medlemsmassen, og som takk for jobben blir de invitert til englepHaest arrangert av Kjellerstyret det påfølgende semesteret. 
        </P>
        <P>
        Kontoret kommer til å være mye åpent i fadderperioden, slik at det er bare å komme innom hvis du lurer på noe eller vil slappe 
        av litt. Å sitte på kontoret er også en gyllen mulighet til å bli kjent med eldre Chemikere.
        </P>
        <P id="HCOppbygning">
        HC-kontoret er et naturlig møtepunkt og tilholdsted for oss på Chemie, og vi håper at også dere nye i førsteklasse vil komme 
        til å føle samme tilhørigheten til kontoret. Kart til kontoret.
        </P>

        <Content>
          <img src={"logo.png"} alt={"HC logo"} style={{width:150, height:150, borderRadius:150/2}}/>
          <H1 style={{marginTop:"50px"}}>HCs oppbygning</H1>
          <img src={"logo.png"} alt={"HC logo"} style={{width:150, height:150, borderRadius:150/2}}/>
        </Content>

        <P>
        Høiskolens Chemikerforening har mange engasjerte studenter som driver foreningen på daglig basis. Foreningens styre består av 
        8 studenter som i helhet har ansvar for daglig drift og administrative oppgaver. Representasjon utad på Gløshaugen er også 
        viktig. Styret har mye kontakt med andre linjeforeninger i tillegg til Fakultet for Naturvitenskap og Teknologi og instituttene 
        som er underlagt fakultetet.
        </P>
        <P>
        Lederen av foreningen kalles pHormand/pHorquinde og nestlederen kalles for VicepHormand/pHorquinde. Secretausen er foreningens 
        sekretær og Kasserer er økonomiansvarlig. I tillegg til disse sitter også KjellersjaepH, IndustrisjaepH, pHaestsjaepH og WebsjaepH 
        i Styret.
        </P>
        <P>
        I tillegg har HC flere undergrupper med ulike ansvarsområder:
        </P>
        <P>
        <span style={{ fontWeight: 'bold'}}>Industrikomiteen</span> arrangerer bedriftspresentasjoner <br />
        <span style={{ fontWeight: 'bold'}}>pHaestkomiteen</span> arrangerer de største festene som f.eks. pHnockepHaest, HoestpHaest 
        og StoorpHaest <br />
        <span style={{ fontWeight: 'bold'}}>Kjellerstyret</span> drifter HCs studentpub på Moholt med diverse arrangementer. I tillegg 
        holder de åpen kjellerbar på noen av arrangementene våre <br />
        <span style={{ fontWeight: 'bold'}}>Sugepumpen</span> gir ut foreningens studentavis <br />
        <span style={{ fontWeight: 'bold'}}>Sportskomiteen</span> arrangerer sportslige arrangementer som f.eks. fjelltur, skitur 
        og diverse turneringer <br />
        <span style={{ fontWeight: 'bold'}}>Jubileumskomiteen</span> har ansvar for 100-års-jubileet som ble feiret mars 2015, tillegg 
        til 110-års-jubileet som skal holdes i 2025 <br />
        <span style={{ fontWeight: 'bold'}}>Fadderkomiteen</span> har ansvar for fadderperioden <br />
        <span style={{ fontWeight: 'bold'}}>Utenrikskomiteen</span> arrangerer utenlandsturer deriblant den årlige turen til Åre i 
        Sverige i januar, i tillegg til Finlandsturen i november til Baalveckan og Sverigeturen i mars/april til Berzelii der vi besøker 
        våre vennskapslinjeforeninger <br />
        <span style={{ fontWeight: 'bold'}}>Audiochromatene</span> drifter foreningens lyd- og lysutstyr <br />
        <span style={{ fontWeight: 'bold'}}>Arrangementskomiteen</span> har ansvar for diverse arrangementer som Adventslunsj, 
        Ølympiade, pSillis og 17.mai-frokost <br />
        <span style={{ fontWeight: 'bold'}}>Arkivarene</span> har ansvar for foreningens arkiv <br />
        <span style={{ fontWeight: 'bold'}}>Webkom</span> drifter blant annet HC sine nettsider og e-postlister <br />
        <span style={{ fontWeight: 'bold'}}>Wettrekomiteen</span> arrangerer den årlige WettrepHaesten på Kvilhaugen gård der det 
        blant annet deles ut stipend til studenter <br />
        </P>
        <P>
        Komitéene som står for sang og underholdning er <span style={{ fontWeight: 'bold'}}>CHIT</span>,  
        <span style={{ fontWeight: 'bold'}}> TapHel og Toddy</span> og <span style={{ fontWeight: 'bold'}}>Laborachorium</span>. 
        Undergruppen <span style={{ fontWeight: 'bold'}}>Pyrogruppa</span> sørger blant annet for klasse IV fyrverkeri og flammeblåsing. 
        Herrefotballaget <span style={{ fontWeight: 'bold'}}>Chemie FK</span> spiller i Trondheims studentliga. 
        <span style={{ fontWeight: 'bold'}}> Cornu Aureum</span> er foreningens ridderskap, og består av personer som har lagt inn en 
        spesielt stor innsats for HC. Det finnes enda flere undergrupper enn nevnt her, så det er bare å sjekke oversikten over 
        undergrupper for å finne de gruppene som passer for deg.
        </P>
        
        </BodyContainer>
        </>
    )
  };

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -5px;
  width: auto;
  height: auto;
  margin-left: 5%;
  margin-right: 5%;
  text-align: center;
`;

const TableOfContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (min-width: 947px){
    flex-direction: row;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: space-evenly;
  vertical-align: center;
`;
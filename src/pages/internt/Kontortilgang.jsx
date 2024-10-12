import React, { useState } from "react";
import styled from "styled-components";
import { H1, H2, P, Link, WideTitle } from "../../components/Text";
import { PageContainer } from "../../components/Layout";
import { TextField } from "../../components/Form";
import { Button, ButtonContainer } from "../../components/Button";

export const Kontortilgang = () => {
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = () => {
    let isUsernameValid = true;
    let isCheckboxValid = true;

    setSuccessMessage("");

    if (!username) {
      isUsernameValid = false;
    }
    if (!document.getElementById("id_approval").checked) {
      isCheckboxValid = false;
    }
  
    if (!isUsernameValid && !isCheckboxValid) {
      setErrorMessage("Please enter your username and accept the terms and conditions.");
    } else if (!isUsernameValid) {
      setErrorMessage("Please enter your username.");
    } else if (!isCheckboxValid) {
      setErrorMessage("Please accept the terms and conditions.");
    } else {
      console.log("Form submitted with username:", username);
      setSuccessMessage(`Form submitted with username: ${username}`);
      setErrorMessage("");
      setUsername("");
      document.getElementById("id_approval").checked = false;
    }
  };

  return (
    <OuterWrapper>
      <PageContainer>
        <WideTitle>Kontortilgang</WideTitle>
        <ContentBox>
          <H1>Her kan du søke om tilgang på kontoret med studentkortet ditt.</H1>
          <P>
            For at tilgang skal kunne bli invilget er det viktig at
            studentbrukernavnet du oppgir samsvarer med ditt faktiske
            studentbrukernavn fra NTNU.
          </P>
          <H2>Studentbrukernavn:</H2>
        
          <TextField
          placeholder="Brukernavn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}

          <br/>
          <br/>
          <br/>

          <div style={{ float: "left", marginRight: "3px" }}>
              <label>
                <input id="id_approval" name="approval" type="checkbox" />
                <span htmlFor="id_approval">Jeg godkjenner</span>
              </label>
          </div>

          <TermsLinkContainer>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowModal(true);
              }}
            >
              Vilkår og Betingelser
            </Link>
          </TermsLinkContainer>
          <br/>
          <ButtonContainer left>
          <Button primary type="button" onClick={handleSubmit}>
            SEND SØKNAD
          </Button>
          </ButtonContainer>          
          
        </ContentBox>
      </PageContainer>

      <ModalWrapper show={showModal}>
          <H2>Kontrakt for tilgang til HC-kontoret</H2>
          <P>
            <u>Vilkår for tilgang til HC-kontoret</u>
            <br />
            Tilgang til HC-kontoret skal være et gode som tilfaller aktive
            medlemmer av Høiskolens Chemikerforening. Det stilles følgende
            krav til vedkommende:
          </P>
            <ol>
          <li>Alle medlemmer av Høiskolens Chemikerforening har rett til å søke på tilgang til Kontoret.</li>
          <li>Kjøkkenutstyr (vaffeljern, mikrobølgeovn, toastjern, vannkoker etc.) skal kun benyttes på kjøkkenet, aldri på Kontoret. </li>
          <li>Alle medlemmer som har tilgang til Kontoret har et kollektivt ansvar for å holde Kontoret rent og ryddig. Dette innebærer å rydde etter seg selv, samt å sørge for at andre gjør det samme. </li>
          <li>Ved bruk av kopper, bestikk o.l. fra Kontoret skal dette vaskes og legges tilbake samme dag som det ble brukt. </li>
          <li>Bruk av Kontoret på nattestid skal skje i henhold til NTNUs regler. Ved aktiviteter som krever rydding eller vasking skal dette gjennomføres samme kveld eller påfølgende skoledag. Se forøvrig også punkt 6. </li>
          <li>Hvis man er sistemann som forlater Kontoret skal døren låses. </li>
          <li>Ved aktivitet på Kontoret utenom vanlig arbeidstid (kl. 18:00 – 08:00), vil vedkommende som sist låste seg inn på Kontoret stå som økonomisk ansvarlig for eventuelle skader/tap av verdier. </li>
          <li>Drikking av alkohol på Kontoret skal kun skje til de tider som blir bestemt av Styret og godkjent av NTNUs adgangskontroll. Ved konsumering av alkohol skal døren til Kontoret holdes lukket. </li>
          <li>Akademisk arbeid skal ikke gjøres på Kontoret. </li>
          <li>Nøkler til HCs lagerrom skal kun brukes til komitéarbeid. </li>
      </ol>
            <P>
              Ved å godkjenne bekrefter man at man har lest og godtar de vilkår
              som er beskrevet i kontrakten og vil med dette få tilgang til
              HC-kontoret. Styret har mulighet til å oppheve kontrakten hvis kravene over ikke er tilfredsstilt.
      </P>
      <Button
        href="#!"
        onClick={(e) => {
          e.preventDefault();
          setShowModal(false);
        }}
      >
        Lukk
      </Button>
  </ModalWrapper>
  <ModalOverlay show={showModal} onClick={() => setShowModal(false)} />
</OuterWrapper>
)};

const OuterWrapper = styled.div`
  background-color: var(--gray-10);
  min-height: 100vh;
`;

const ContentBox = styled.div`
  background-color: white;
  width: 90%;
  border-radius: 10px;
  padding: 0 20px;
`;

const TermsLinkContainer = styled.div`
  font-size: 15px;
  padding-top: 1.2px;
`;

const ModalWrapper = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1003;
  background-color: white;
  width: 80%;
  max-height: 80%;
  overflow-y: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalOverlay = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 1002;
  opacity: 0.5;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ErrorMessage = styled.p`
  color: red;
  position: absolute;
`;

const SuccessMessage = styled(ErrorMessage)`
  color: green;
`;
import React, { useState } from "react";
import styled from "styled-components";
import { P, Title, TitleContainer } from "../../components/Text";
/*import { PageContainer } from "../../components/Layout"; */
import { BodyContainer } from "../../components/Layout";
/*import { TextField } from "../../components/Form"; */
import { Button } from "../../components/Button"; 
/*import { ButtonContainer } from "../../components/Container"; */
import fadderuka from "./fadderuka.jpg";
import silent from "./Silentdisco.jpg";
import byvandring from "./byvandring.jpg";
import { Link } from "react-router-dom";

export const NyStudent = () => {
  const images = [
    { src: fadderuka, alt: "Fadderuka" },
    { src: silent, alt: "Silent" },
    { src: byvandring, alt: "byvandring" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <BodyContainer>
      <TitleContainer>
        <Title>Velkommen til Høiskolens Chemikerforening</Title>
      </TitleContainer>
      <P>Gratulerer med opptak til Industriell kjemi og bioteknologi!</P>
      <P>
        På disse sidene kan dere finne litt diverse informasjon som kan gjøre
        de første ukene som ny student litt lettere.
      </P>

      <TableOfContent>
        <Link to="/">
          <Button primary>Praktisk info</Button>
        </Link>
        <ButtonContainer>
          <Link to="../kontaktinfo">
            <Button primary>Kontaktinfo</Button>
          </Link>
        </ButtonContainer>
      </TableOfContent>

      <TitleContainer>
        <Title>Fadderperioden</Title>
      </TitleContainer>

      <P>
        De to første ukene av studietiden er det på dagtid Teknostart som
        gjelder, mens linjeforeningen og fadderne tar over på kvelden. Det er
        lagt opp til to innholdsrike uker der dere blir kjent med byen og
        studentlivet, og rett og slett bare har det gøy!
      </P>
      <P>
        Det er viktig å delta på arrangementene i fadderukene, siden
        fadderopplegget er selve grunnlaget for et godt klassemiljø. Dere vil
        bli delt inn i mindre faddergrupper den første dagen, bestående av ca.
        10-13 andre førsteklassinger.
      </P>
      <P>
        Det skjer noe hver dag i fadderperioden, så dette er to uker du ikke
        vil gå glipp av! Av arrangementer i fadderperioden kan det nevnes
        bli-kjent-kvelder, byvandring med ulike konkurranser, Chemieshow, samt
        fester med andre linjeforeninger, så det er bare å glede seg!
      </P>
      <P>
        Her er linken til facebookgrupper for fadderperioden 2025! Bli med i
        gruppa for å få informasjon om ...
      </P>

      <SlideshowContainer>
        <ArrowButton className="left" onClick={handlePrev}>
            &#8249;
        </ArrowButton>
        <Photo src={images[currentIndex].src} alt={images[currentIndex].alt} />
        <ArrowButton className="right" onClick={handleNext}>
            &#8250;
        </ArrowButton>
        <Dots>
            {images.map((_, index) => (
            <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
            ></span>
            ))}
        </Dots>
      </SlideshowContainer>
    </BodyContainer>
  );
};

const TableOfContent = styled.div`
  width: auto;
  display: flex;
  gap: 7px;
  flex-direction: column;
  justify-content: space-around;
  @media (min-width: 947px) {
    flex-direction: row;
  }
`;

const SlideshowContainer = styled.div`
  position: relative;
  width: 50%;
  margin: 20px auto;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  .dot {
    height: 10px;
    width: 10px;
    margin: 0 5px;
    background-color: gray;
    border-radius: 50%;
    cursor: pointer;
  }

  .dot.active {
    background-color: black;
  }
`;

const ButtonContainer = styled.div`
  margin: 10px;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;


export default NyStudent;

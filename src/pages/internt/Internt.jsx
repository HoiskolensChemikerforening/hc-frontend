import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../components/Layout";
import { H1 } from "../../components/Text";
import { Link, useHistory } from "react-router-dom";


export const Internside = () => {
  return(
    <>
          <ButtonContainer>
            {//This should be edited to in a absolute position on homepage
            // or only visible when hovered
            }
            <Link to="/nyheter/ny">
              <Button>Bilder</Button>
            </Link>
            <Link to="/undergrupper">
              <Button>Kontoret</Button>
            </Link>
            <Link to="/nyheter/ny">
              <Button>Klassekatalog</Button>
            </Link>
            </ButtonContainer>
        <ButtonContainer>
            <Link to="/nyheter/ny">
                <Button>Sladreboks</Button>
            </Link>
            <Link to="/nyheter/ny">
                <Button>Søknad om midler</Button>
            </Link>
            <Link to="/nyheter/ny">
                <Button>Kontortilgang</Button>
            </Link>
        </ButtonContainer>
        <ButtonContainer>
            <Link to="/nyheter/ny">
                <Button>Undergrupper</Button>
            </Link>
            <Link to="/nyheter/ny">
                <Button>Valg</Button>
            </Link>
            <Link to="/nyheter/ny">
                <Button>Wiki</Button>
            </Link>
        </ButtonContainer>
    </>
  )
};

const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
`;

const Button = styled.button`
  margin: 15px 30px 30px;
  padding: 2em 2em;
  width: 250px;
  

  font-weight: bold;
  font-size: 16px;
  color: rgb(0, 0, 0, 0.5);

  background: transparent;
  border: 2px transparent;
  border-radius: 1px;

  cursor: pointer;

color: #000;
background: var(--primary);
border: 3px var(--primary) solid;
hover: #FFF;
`;

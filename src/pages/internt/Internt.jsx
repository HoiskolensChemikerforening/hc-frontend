import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Internt = () => (
  <Center_Wrapper>
    <Wrapper>
        <StyledLink to="/bilder"> Bilder </StyledLink>
        <StyledLink to="/kontoret"> Kontoret </StyledLink>
        <StyledLink to="/klassekatalog"> Klassekatalog </StyledLink>
        <StyledLink to="/sladreboks"> Sladreboks </StyledLink>
        <StyledLink to="/søknad_om_midler"> Søknad om midler </StyledLink>
        <StyledLink to="/kontortilgang"> Kontortilgang </StyledLink>
        <StyledLink to="/undergrupper"> Undergrupper </StyledLink>
        <StyledLink to="/valg"> Valg </StyledLink>
        <StyledLink to="/wiki"> Wiki </StyledLink>
    </Wrapper>
  </Center_Wrapper>
)

const Center_Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0 0 0;
  width: 100%;
  height: 85vh;
}
`;


const Wrapper = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  justify-content:space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8e469;
    color: black;
    font-weight: bold;
    font-size: 125%;
    margin: 1% 1% 1% 1%;
    padding: 1% 1% 1% 1%;
    width: 29%;
    height: 20%;
    min-width: 180px;
    @media only screen and (max-width: 435px) {
      width: 70%;
      min-width: 150px;
    }
`;

export { Internt };
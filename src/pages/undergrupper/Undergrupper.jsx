import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Undergrupper = () => (
  <Center_Wrapper>
    <H1>Komiteer og Undergrupper</H1>
    <Wrapper>
      <StyledLink to="/undergrupper/webkom"> 
        <img src="https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Jungle-Image-Download.jpg" width="100%" height="auto"></img> 
        Webkom
      </StyledLink>
      <StyledLink to="/undergrupper/webkom">Webkom</StyledLink>
      <StyledLink to="/undergrupper/webkom">Webkom</StyledLink>
      <StyledLink to="/undergrupper/webkom">Webkom</StyledLink>
      <StyledLink to="/undergrupper/webkom">Webkom</StyledLink>
      <StyledLink to="/undergrupper/webkom">Webkom</StyledLink>
      <StyledLink to="/undergrupper/webkom">Webkom</StyledLink>
      <StyledLink to="/undergrupper/webkom">Webkom</StyledLink>
      <StyledLink to="/undergrupper/webkom">Webkom</StyledLink>
    </Wrapper>
  </Center_Wrapper>
)

const Center_Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 10px 0 0 0;
    width: 100%;
    height: 85vh;
`;

const Wrapper = styled.div`
    display: flex;
    width: 90%;
    height: 100%;
    justify-content:space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
`;

const H1 = styled.h1`
    color: black;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export { Undergrupper };
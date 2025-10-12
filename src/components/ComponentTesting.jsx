import React from "react";
import { Row, Col, ButtonContainer } from "./Layout";
import { Button } from "./Button";
import { Title } from "./Title";
import { P, TextContainer, P2 } from "./Textnew";
import styled, { css } from 'styled-components';
import { ImageContainer, ImageContainer2, ImageContainer3, ImageContainer4, ImageContainer5 } from "./Image";


export const Komponenter = () => {
    return (
        <PageContainer gray>
        <Title>Vanlig testoverskrift</Title>
        <Title wide>Bred testoverskrift</Title>
        <ContentBox>
        <ButtonContainer>
        <Button>Button</Button>
        <Button primary>Button</Button>
        <Button secondary>Button</Button>
        <Button cancel>Button</Button>
        <Button navigation>Button</Button>
        <Button internt>Button</Button>
        </ButtonContainer>
        
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P>

        </ContentBox>
        </PageContainer>
    )
}

const ContentBox = styled.div`
  background-color: white;
  width: 90%;
  border-radius: 10px;
  padding: 0 20px;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  @media only screen and (min-width: 768px) {
    margin: 0 2%;
  }

  ${props => props.gray && css`
    background-color: var(--gray-10);
    min-height: 100vh;
  `}
`;

/* Har ikke kommet så langt å teste noen av Image Containers eller lignende */
/* Får kke PageContainer til å "strekke" seg helt ut til kantene i topp og venstre */
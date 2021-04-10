import React from "react";
import "../../index.css";
import styled from "styled-components";
import { H2, H3, P } from "../../components/Text";

const EventBox = () => (
  <Wrapper>
    <Title>
      <TitleText light>Kommende</TitleText>
      <TitleText bold>Datoer</TitleText>
    </Title>
    <List>
      <ListItem href="#">
        <ListTitle>Stoorphaest</ListTitle>
        <ListDate>Lørdag 11. mars</ListDate>
      </ListItem>
      <ListItem href="#">
        <ListTitle>Hyttephaest</ListTitle>
        <ListDate>Lørdag 11. mars</ListDate>
      </ListItem>
      <ListItem href="#">
        <ListTitle>Bedriftspresentasjon med Telenor</ListTitle>
        <ListDate>Lørdag 11. mars</ListDate>
      </ListItem>
      <ListItem href="#">
        <ListTitle>Adventskalender</ListTitle>
        <ListDate>Lørdag 11. mars</ListDate>
      </ListItem>
      <ListItem href="#">
        <ListTitle>Bedriftspresentasjon med Telenor</ListTitle>
        <ListDate>Lørdag 11. mars</ListDate>
      </ListItem>
      <ListItem href="#">
        <ListTitle>Bedriftspresentasjon med Telenor</ListTitle>
        <ListDate>Lørdag 11. mars</ListDate>
      </ListItem>
    </List>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 25vw;
  margin: 0 0 0 50px;
  flex-direction: column;
  @media only screen and (max-width: 992px) {
    margin: 50px 0 0 0;
    max-width: 100%;
  }
`;

const Title = styled.div`
  position: relative;
  top: 0;
  left: 0;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 20px;
  display: inline-flex;
  background-color: white;
  width: 0;
`;

const TitleText = styled(H2)`
  margin: 0;
  background-color: white;
  padding-right: 10px;
`;

const List = styled.div`
  border: 2px solid var(--primary);
  margin: -28px 0;
  padding: 40px 40px 20px 40px;
  display: flex;
  min-height: 20vh;
  justify-content: center;
  flex-direction: column;
`;

const ListItem = styled.a`
  display: inline-flex;
  margin-top: 10px;
  flex-direction: column;
  text-decoration: none;
  &:visited {
    color: var(--gray-90);
  }
`;

const ListTitle = styled.div`
  display: inline-flex;
  font-size: 1.125rem;
  font-weight: bold;
`;

const ListDate = styled(P)`
  display: inline-flex;
`;

export { EventBox };

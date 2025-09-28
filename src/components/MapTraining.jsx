import React from "react";
import styled from "styled-components";
import { Col } from "./Layout";


export const SimpleSubGroup = (props) => (
<Col xs="12" sm="6" md="6" lg="4">
  <SimpleWrapper>
    <TitleWrapper>{props.committee.title}</TitleWrapper>
    <ContentWrapper>{props.committee.one_liner}</ContentWrapper>
  </SimpleWrapper>
</Col>
)

export const RoundedSubGroup = (props) => (
  <Col xs="12" sm="6" md="6" lg="4">
  <RoundedImageWrapper committee = {props.committee} >
    <TitleWrapper>{props.committee.title}</TitleWrapper>
    <ContentWrapper>{props.committee.one_liner}</ContentWrapper>
  </RoundedImageWrapper>
</Col>
)

export const ReadableSubGroup = (props) => (
  <Col xs="12" sm="6" md="6" lg="4">
  <ShadowWrapper committee = {props.committee} onClick={props.onClick}>
    <ReadableTitleWrapper>{props.committee.title}</ReadableTitleWrapper>
    <ReadableContentWrapper>{props.committee.one_liner}</ReadableContentWrapper>
  </ShadowWrapper>
</Col>
)

const TitleWrapper = styled.h2`
  display: flex;
  width: 80%;
  justify-content: center;  
`

const ContentWrapper = styled.p`
  display: flex;
  width: 80%;
  justify-content: center;
`

/* Oppgave 1: */
const SimpleWrapper = styled.div`
  
  width: 100%;
  min-height: 100px;
  /* Her må noe fikses: */
  background-color: #a0ab27;
  /* Bruk flexbox for å sentrere elementene: */
  display: flex;
`

/* Oppgave 2: */
const RoundedImageWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 200px;
  background-color: var(--primary);
  justify-content: center;
  flex-wrap: wrap;
  /* Din kode her: */
  
`


/* Oppgave 3: */
const ShadowWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 200px;
  background-color: var(--primary);
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 25px;
  background-image: url(${props => props.committee.image});
  background-size: cover;
  background-repeat: no-repeat;
  /* Din kode her: */
  
`


const ReadableTitleWrapper = styled.h2`
  display: flex;
  width: 100%;
  justify-content: center;  
  align-items: center;
  /* Din kode her */
  
  `
  
  const ReadableContentWrapper = styled.p`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  /* Din kode her */
  
`


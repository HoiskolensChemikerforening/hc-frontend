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
  display: flex;
  width: 100%;
  min-height: 100px;
  /* background-color: #fd43e8; */
  background-color: var(--primary);
  /* Din kode her: */
  justify-content: center;
  flex-wrap: wrap;
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
  border-radius: 25px;
  background-image: url(${props => props.committee.image});
  background-size: cover;
  background-repeat: no-repeat;
`


/* Oppgave 3: */
const ShadowWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 200px;
  background-color: var(--primary);
  justify-content: center;
  flex-wrap: wrap;
  /* Din kode her: */
  border-radius: 25px;
  background-image: url(${props => props.committee.image});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 1px 1px 5px black;
`


const ReadableTitleWrapper = styled.h2`
  display: flex;
  width: 100%;
  justify-content: center;  
  align-items: center;
  color: white;
  text-shadow: 0 0 2px black;
  
  `
  
  const ReadableContentWrapper = styled.p`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 0 0 2px black;
  
`


import React from "react";
import styled from "styled-components";
import { PageContainer, Row, Col } from "./Layout";
import { Button, ButtonContainer } from "./Button";
import { Title } from "./Title";

export const Komponenter = () => {
    return (
        <PageContainer gray>
        <Title>Testoverskrift</Title>
        <Title wide>Testoverskrift</Title>
        <ContentBox>
        <ButtonContainer>
        <Button>Button</Button>
        <Button primary>Button</Button>
        <Button secondary>Button</Button>
        <Button cancel>Button</Button>
        <Button navigation>Button</Button>
        <Button internt>Button</Button>
        </ButtonContainer>
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
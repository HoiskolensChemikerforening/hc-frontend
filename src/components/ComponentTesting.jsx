import React from "react";
import styled from "styled-components";
import { PageContainer, Row, Col } from "./Layout";
import { Button, ButtonContainer } from "./Button";
import { Title } from "./Title";

export const Komponenter = () => {
    return (
        <PageContainer>
        <Title>Testoverskrift</Title>
        <Title wide>Testoverskrift</Title>
        <ButtonContainer>
        <Button>Button</Button>
        <Button primary>Button</Button>
        <Button secondary>Button</Button>
        <Button cancel>Button</Button>
        <Button navigation>Button</Button>
        <Button internt>Button</Button>
        </ButtonContainer>
        </PageContainer>
    )
}

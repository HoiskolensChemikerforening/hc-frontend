import React from "react";
import styled from "styled-components";
import { PageContainer, Row, Col } from "./Layout";
import { Button, ButtonContainer } from "./Button";
import {Title1, Title2, Title3, Title4, Title5, Title6, TitleContainer, TitleWrapper, WideTitle, PTitle} from "./Title";

export const Komponenter = () => {
    return (
        <PageContainer>
        <WideTitle>
        <PTitle>Testoverskrift</PTitle>
        </WideTitle>
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

/*export const Komponenter = () => {
    return (
        <WideTitle>
        <PTitle>Testoverskrift</PTitle>
        </WideTitle>
    )
}*/

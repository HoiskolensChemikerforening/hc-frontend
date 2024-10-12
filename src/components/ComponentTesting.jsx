import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "./Layout";
import { Button, ButtonContainer } from "./Button";

export const Komponenter = () => {
    return (
        <ButtonContainer>
        <Button>Button</Button>
        <Button primary>Button</Button>
        <Button secondary>Button</Button>
        <Button cancel>Button</Button>
        <Button navigation>Button</Button>
        <Button internt>Button</Button>
        </ButtonContainer>
    )
}
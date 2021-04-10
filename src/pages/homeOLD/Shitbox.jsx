import React from "react";
import "../../index.css";
import styled from "styled-components";
import { H1 } from "../../components/Text";

const Shitbox = () => (
    <Wrapper>
        <H1 bold>Sladreboksen</H1>
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
    margin: 0 20px 20px 0;
    flex-direction: column;
`;

export { Shitbox };
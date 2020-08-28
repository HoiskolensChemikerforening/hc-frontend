import React from "react";
import "../../index.css";
import styled from "styled-components";
import { H1 } from "../../components/Text";
import { NewsListing } from "./NewsListing";

const NewsBox = () => (
    <Wrapper>
        <H1 bold>Nyheter</H1>
        <NewsListing />
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export { NewsBox };
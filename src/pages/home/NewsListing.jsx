import React from "react";
import "../../index.css";
import styled from "styled-components";
import { H1, P } from "../../components/Text";

const NewsListing = () => (
    <Wrapper>
        <Image />
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Image = styled.img``;

export { NewsListing };
import React, { useState } from "react";
import styled from "styled-components";
import { H1, H2, P, Link, WideTitle } from "../../components/Text";
import { PageContainer } from "../../components/Layout";
import { TextField, DropDown, Option} from "../../components/Form";
import { Button } from "../../components/Button";

export const Klassekatalog = () => {
    return(
        <OuterWrapper>
            <PageContainer>
            <WideTitle>Klassekatalog</WideTitle>
            <ContentBox>
            <DropDown>
                <Option>Alle</Option>
                <Option>Første</Option>
                <Option>Andre</Option>
                <Option>Tredje</Option>
                <Option>Fjerde</Option>
                <Option>Femte</Option>
                <Option>Ferdig</Option>
            </DropDown>
            <TextField placeholder="Stalk en spesifik person"/>
            <Catalogue>

            </Catalogue>
            </ContentBox>
            </PageContainer>
            </OuterWrapper>
    )
}

const OuterWrapper = styled.div`
  background-color: var(--gray-10);
  min-height: 100vh;
`;

const ContentBox = styled.div`
  background-color: white;
  width: 90%;
  border-radius: 10px;
  padding: 0 20px;
`;

const Catalogue = styled.div`
  display: flex;
  align-self: center;
  margin: 20px 0px;
  width: 30%;
`;
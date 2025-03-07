import React, { useState } from "react";
import styled from "styled-components";
import { H1, H2, P, Link } from "../../components/Text";
import { Title } from "../../components/Title";
import { PageContainer, ContentContainer } from "../../components/Layout";
import { TextField, DropDown, Option} from "../../components/Form";
import { Button } from "../../components/Button";

export const Klassekatalog = () => {
    return(
            <PageContainer gray>
            <Title wide>Klassekatalog</Title>
            <ContentContainer white>
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
            </ContentContainer>
            </PageContainer>
    )
}


const Catalogue = styled.div`
  display: flex;
  align-self: center;
  margin: 20px 0px;
  width: 30%;
`;
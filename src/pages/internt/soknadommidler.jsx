import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import styled from "styled-components";
import { TextArea, TextField } from "../../components/Form";
import { H1, H3, P} from "../../components/Text";
import { Title } from "../../components/Title";
import { PageContainer, ContentContainer, FormContainer } from "../../components/Layout";



export const SoknadMidler = () => {

    return (
        <PageContainer gray>
            <Title wide> Søknad om midler</Title>
            <ContentContainer white>
                <H3>Alle medlemmer av Høiskolens Chemikerforening kan søke om økonomisk støtte til 
                å gjennomføre aktiviteter eller andre tiltak som gagner en betydelig andel av medlemsmassen. 
                Det kan ikke søkes om penger til innkjøp av alkohol. Styret bedømmer samlet hver enkelt søknad, 
                og et flertall bestemmer om den godkjennes eller forkastes. 
                Søknader må sendes inn tre dager i forveien dersom den skal godkjennes.
                </H3>

            <form>
                
                <FormContainer border>
                <FormContainer row spacebetween>
                    <TextField placeholder="Søker på vegne av"/>
                    <P>Prisklasse:</P> 
                    <FormContainer row>
                    <input type='radio' id='Under 500 kr' name='price_class' value='Under 500 kr'/>
                    <label for='Under 500 kr'>Under 500 kr</label>
                    </FormContainer>
                    <FormContainer row>
                    <input type='radio' id='Over 500 kr' name='price_class' value='Over 500 kr'/>
                    <label for='Over 500 kr'>Over 500 kr</label>
                    </FormContainer> 
                </FormContainer>
                
                <P>Beskrivelse av formål:</P>
                <TextArea width="auto" placeholder="Hva søkes det støtte til? Dato, hvor skal det være, for hvem? Hvor mye støtte ønskes?"/>   
                </FormContainer>
                <Button primary type='submit'>Send inn</Button>
                
            </form>
            </ContentContainer>
        </PageContainer>
    )
};

const NewApplicationFundsText = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
    width: 70%;
    flex-direction: column;
`; 
const PriceClassBox = styled.div` 
`;

//<DropDown>
//<Option>Under 500 kr</Option>
//<Option>Over 500 kr</Option>
//</DropDown>
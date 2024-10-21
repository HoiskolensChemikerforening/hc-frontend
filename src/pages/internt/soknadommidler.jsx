import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import styled from "styled-components";
import { TextArea, TextField } from "../../components/Form";
import { H1, H3, P} from "../../components/Text";
import { Title } from "../../components/Title";



export const SoknadMidler = () => {

    return (
        <Page>
            <Title wide> Søknad om midler</Title>
            <NewApplicationFundsText>
                <P>
                <H3>Alle medlemmer av Høiskolens Chemikerforening kan søke om økonomisk støtte til 
                å gjennomføre aktiviteter eller andre tiltak som gagner en betydelig andel av medlemsmassen. 
                Det kan ikke søkes om penger til innkjøp av alkohol. Styret bedømmer samlet hver enkelt søknad, 
                og et flertall bestemmer om den godkjennes eller forkastes. 
                Søknader må sendes inn tre dager i forveien dersom den skal godkjennes.
                </H3>
                </P>
            </NewApplicationFundsText>

            <form>
                
                <FormContainer>
                <FormContainer1>
                    <img src=""/>
                    <TextField placeholder="Søker på vegne av"/>
                    <P>Prisklasse</P> 
                    <input type='radio' id='Under 500 kr' name='price_class' value='Under 500 kr'/>
                    <label for='Under 500 kr'>Under 500 kr</label><br/>
                    <input type='radio' id='Over 500 kr' name='price_class' value='Over 500 kr'/>
                    <label for='Over 500 kr'>Over 500 kr</label>
                </FormContainer1>
                
                <P>Beskrivelse av formål</P>
                <TextArea width="auto" placeholder="Hva søkes det støtte til? Dato, hvor skal det være, for hvem? Hvor mye støtte ønskes?"/>   
                </FormContainer>
                <Button primary type='submit'>Send inn</Button>
                
            </form>
        
        </Page>
    )
};

const Page = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--gray-20);
    margin: 50px;
    padding: 20px;
    border-radius: 10px;
`;
const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
    padding: 20px;
    background-color: white;
    border-color: var( --gray-60);
    border-width: 0.5px;
    border-style: solid;
    border-radius: 10px; 
    flex-direction: column;
    width: 70%;
`; 
const FormContainer1 = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-evenly;
`;
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
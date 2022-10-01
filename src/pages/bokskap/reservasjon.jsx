import React from "react";
import styled from "styled-components";
import ImageSrc from "../../images/hc.jpg";
import { NewsList } from "../news/NewsList";
import {Row, Col, Container} from "../../components/Layout";
import { H1, H3, P } from "../../components/Text";
import { FormHelperText } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";


export const Reservasjon = () => {
    return(
    <>
    
    <Box>
        <Row>
        <H1 style={{textAlign: "center"}}> Reservasjon av bokskap </H1>
        </Row>
    </Box>

    <Container>
        <P> Vennligst gjør følgende når du registrerer et bokskap:
            <ol type="1">
                <li> Gå til U2 under Kjemivrimle og lokaliser et skap som står ledig </li>
                <li> Dobbeltsjekk at dette skapet også står ledig på nettsiden </li>
                <li> Fyll ut alle punktene i skjemaet under </li>
                <li> Bruk en gyldig NTNU-epostadresse. Det er viktig at den er på formen brukernavn@stud.ntnu.no </li>
                <li> Trykk på bekreftelseslenken som blir sendt til den oppgitte adressen </li>
                <li> Gratulerer med nytt bokskap! </li>
            </ol>
        </P>
    </Container>


    </>

    );
}

const Box = styled.div`
    background: #f7e469;
    width: 280px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 5px 100px 5px 100px;
    margin-bottom: 50px;
    margin-top: 50px;
`
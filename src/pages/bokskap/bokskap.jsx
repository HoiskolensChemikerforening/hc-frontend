import React from "react";
import styled from "styled-components";
import ImageSrc from "../../images/hc.jpg";
import { NewsList } from "../news/NewsList";
import {Row, Col, Container} from "../../components/Layout";
import { H1, H3, P } from "../../components/Text";
import { FormHelperText } from "@material-ui/core";


export const Bokskap = () => {
    return(
    <>
    
    <Box>
        <Row>
        <H1 > Velkommen til bokskapsystemet! </H1>
        </Row>
    </Box>

    <Container>
        <P> Klikk på et av det x antall ledige bokskapene for å reservere et bokskap. Skapene er lokalisert her, i U2 under Kjemivrimle i Realfagsbygget. Klikk her for å se hvilke skap som er dine.</P>
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
    padding: 5px 100px 5px 150px;
    margin-bottom: 50px;
    margin-top: 50px;
`

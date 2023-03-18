import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../components/Layout";
import { H1 } from "../../components/Text";
import { Link, useHistory } from "react-router-dom";


export const Kontaktinfo = () => (
    <>
        <Box>
            <Row>
                <H1 style={{textAlign: "center"}}> Kontaktinformasjon </H1>
            </Row>
        </Box>
        <GreyBox>
            styret@hc.ntnu.no
            <GreyerBox>
                Organisasjonsnummer
            </GreyerBox>
        </GreyBox>
    </>
);

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

const GreyBox = styled.div`
    display: flex;
    background-color: #ededed;
    width: 200px;
    height: 500px;
    padding: 5px 5px 5px 5px;
    margin-left: 500px;
`

const GreyerBox = styled.div`
    display: flex;
    background-color: #d4d4d4;
    width: 150px;
    height: 200px;
    padding: 5px 5px 5px 5px;
    margin-left: 200px;
`
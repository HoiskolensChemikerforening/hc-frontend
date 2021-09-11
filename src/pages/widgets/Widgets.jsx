import React, { useEffect, useState } from "react";
import styled, { css } from 'styled-components';
import { Link, useHistory } from "react-router-dom";
import { H3, P } from "../../components/Text";
import { Button } from "../../components/Button.js";
import parse from "react-html-parser";
import moment from 'moment';
import { FiCoffee } from "react-icons/fi";
import { RiArchiveDrawerLine, RiHandCoinLine, RiDoorOpenFill } from "react-icons/ri";
import { BiReceipt } from "react-icons/bi";
import { Container, Col, Row } from "../../components/Layout";

export const Widgets = () => {
  
  
    return (
        <>
            <StaticContainer>
                <WidgetContainer>
                    <CompContainer><FiCoffee/></CompContainer>
                </WidgetContainer> 
                <WidgetContainer to="/bokskap">
                    <CompContainer><RiArchiveDrawerLine/></CompContainer>
                    <TextContainer>
                        <P>Bokskap</P>
                    </TextContainer>
                </WidgetContainer>
                <WidgetContainer to="/midler">
                    <CompContainer><RiHandCoinLine/></CompContainer>
                    <TextContainer>
                        <P>Midler</P>
                    </TextContainer>
                </WidgetContainer>
                <WidgetContainer to="/kontortilgang/søk">
                    <CompContainer><RiDoorOpenFill/></CompContainer>
                    <TextContainer>
                        <P>Kontortilgang</P>
                    </TextContainer>
                </WidgetContainer>
            </StaticContainer>
        </>
    )
  };


const WidgetContainer = styled(Link)`
    width: 100%;
    height: 80px;
    background-color: var(--yellow-30);
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: black;
    text-decoration: none;
    align-items: center;
`;

const CompContainer = styled.div`
    font-size: 35px;
    width: 30%;
    display: flex;
    justify-content: center;
`;

const TextContainer = styled.div`
    width: 70%;
`;

const StaticContainer = styled.div`
    position: fixed;
    width: 200px;
`;
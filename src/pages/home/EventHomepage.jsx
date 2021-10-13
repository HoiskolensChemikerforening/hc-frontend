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
import Img from "../../images/trondheim.jpg";

export const EventHomepage = () => {
  
  
    return (
        <>
            <EventBox>
                <DateBox></DateBox>
                <P bold>Arrangement</P>
            </EventBox>
        </>
    )
  };

const EventBox = styled.div`
    width: 200px;
    height: 70px;
    border-style: solid;
    border-width: 1px;
    border-color: var(--gray-50);
    display: flex;
    flex-direction: row;
`;

const DateBox = styled.div`
    height: 40px;
    width: 60px;
    margin: 4px;
    background-color: var(--yellow-30)
`;
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "../../components/Layout";
import { H1 } from "../../components/Text";
import { Link, useHistory } from "react-router-dom";
import {Button, ButtonContainer} from "../../components/Button"


export const Internside = () => (
    <>
        <ButtonContainer space>
        {//This should be edited to in a absolute position on homepage
            // or only visible when hovered
            }
            <Link to="/nyheter/ny">
              <Button primary big>Bilder</Button>
            </Link>
            <Link to="/kontoret">
              <Button primary big>Kontoret</Button>
            </Link>
            <Link to="/klassekatalog">
              <Button primary big>Klassekatalog</Button>
            </Link>
        </ButtonContainer>
        <ButtonContainer space>
            <Link to="/nyheter/ny">
                <Button primary big>Sladreboks</Button>
            </Link>
            <Link to="/midler">
                <Button primary big>Søknad om midler</Button>
            </Link>
            <Link to="/kontortilgang">
                <Button primary big>Kontortilgang</Button>
            </Link>
        </ButtonContainer>
        <ButtonContainer space>
            <Link to="/undergrupper">
                <Button primary big>Undergrupper</Button>
            </Link>
            <Link to="/nyheter/ny">
                <Button primary big>Valg</Button>
            </Link>
            <Link to="/nyheter/ny">
                <Button primary big>Wiki</Button>
            </Link>
        </ButtonContainer>
        <ButtonContainer space>
            <Link to="/kontaktinfo">
                <Button primary big>Kontaktinfo</Button>
            </Link>
            <Link to="/om-hc">
                <Button primary big>Info om HC</Button>
            </Link>
            <Link to="/nyheter/ny">
                <Button primary big>Utvekslingsside</Button>
            </Link>
        </ButtonContainer>
    </>
);

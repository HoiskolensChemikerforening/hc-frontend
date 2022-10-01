import React from "react";
import styled from "styled-components";
import ImageSrc from "../../images/hc.jpg";
import { NewsList } from "../news/NewsList";
import {Row, Col, Container} from "../../components/Layout";
import { H1, H3, P } from "../../components/Text";
import { FormHelperText } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";


export const Bokskap = () => {
    return(
    <>
    
    <html>
    <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
    </head>

    <Box>
        <Row>
        <H1 style={{textAlign: "center"}}> Velkommen til bokskapsystemet! </H1>
        </Row>
    </Box>

    <Container>
        <P> Klikk på et av det x antall ledige bokskapene for å reservere et bokskap. Skapene er lokalisert her, i U2 under Kjemivrimle i Realfagsbygget. Klikk her for å se hvilke skap som er dine.</P>
    </Container>

    <ButtonContainer>
            {//This should be edited to in a absolute position on homepage
            // or only visible when hovered
            }
            <Link to="/reservasjon">
            <Button>
                <LockContainer>
                79 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
              <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                81 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            </ButtonContainer>
        <ButtonContainer>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
        </ButtonContainer>
        <ButtonContainer>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
        </ButtonContainer>
        <ButtonContainer>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
        </ButtonContainer>
        <ButtonContainer>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
        </ButtonContainer>
        <div>ㅤ</div>
        <div>ㅤ</div>
        <div>ㅤ</div>
        <ButtonContainer>
            {//This should be edited to in a absolute position on homepage
            // or only visible when hovered
            }

            <Link to="/reservasjon">
              <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
              <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            </ButtonContainer>
        <ButtonContainer>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
        </ButtonContainer>
        <ButtonContainer>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
        </ButtonContainer>
        <ButtonContainer>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
        </ButtonContainer>
        <ButtonContainer>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
            <Link to="/reservasjon">
            <Button>
              <LockContainer>
                80 <i class="material-icons" >lock_open</i>
                </LockContainer>
            </Button>
            </Link>
        </ButtonContainer>
        <div>ㅤ</div>
        <div>ㅤ</div>
        <div>ㅤ</div>
        <Container>
            1 2 3 4     Neste
        </Container>
        <div>ㅤ</div>
        <div>ㅤ</div>
        <div>ㅤ</div>

        </html>
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

const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    `;

const Button = styled.button`
  margin: 5px 60px -6px;
  padding: 0.4em 2em;
  width: 250px;
  font-size: 16px;
  color: 'grey';
  justify-content: center;
  

  background: transparent;
  border: 2px transparent;
  border-radius: 1px;

  cursor: pointer;

    color: #000;
    background-color: #F7F7F7;
    border: 1px #B1B1B1 solid;
    hover: #FFFF
    &:hover {
        cursor: pointer;
        background-color: #F1F1F1;
    }
`;

const LockContainer = styled.div`
    justify-content: right;
    position: right;
`;
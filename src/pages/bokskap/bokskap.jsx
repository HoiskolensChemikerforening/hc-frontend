import React from "react";
import styled from "styled-components";
import { NewsList } from "../news/NewsList";
import {Row, Col, Container} from "../../components/Layout";
import { H1, H3, P } from "../../components/Text";
import { FormHelperText } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { Pagination } from '@mui/material';
import { MemoryRouter, Route} from 'react-router';


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
        <P style={{textAlign: "center"}}> Klikk på et av det x antall ledige bokskapene for å reservere et bokskap. Bokskapene er lokalisert <Link to="https://use.mazemap.com/#v=1&zlevel=-2&center=10.405022,63.415656&zoom=19.3&sharepoitype=poi&sharepoi=1000287262&campusid=1" style={{ textDecoration: 'none', color:'#e3d262' }}>her</Link>, i U2 under Kjemivrimle i Realfagsbygget.</P>
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
        <Link style={{ textDecoration: 'none' }} to="/glemtbokskap">
          <YellowBox>
            Glemt bokskapnummer
          </YellowBox >
        </Link>

        
        <div>ㅤ</div>
        <div>ㅤ</div>
        <div>ㅤ</div>
        <ForgottenContainer><Pagination count={10} shape="rounded" /></ForgottenContainer>

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
    &:hover {
      background-color: #F1F1F1;
    }

`;

const LockContainer = styled.div`
    justify-content: center;
    position: right;
    margin: 5px 5px;
`;

const YellowBox = styled.button`
    display: flex;
    justify-content: center;
    background-color: #f7e469;
    font-size: 16px;
    height: 50px;
    width: 250px;
    cursor: pointer;
    &:hover {
      background-color: #e3d262;
    }
    margin-left: 240px;
    margin-top: 45px;
    line-height: 44px;
    border: 1px transparent solid;

`

const GreyBox = styled.button`
    display: flex;
    justify-content: space-evenly;
    cursor: pointer;
    background-color: #F7F7F7;
    border: 10px #F7F7F7;
    font-size: 16px;
    &:hover {
      background-color: #F1F1F1;
    }
    margin: 2px;
`

const RowContainer = styled.div`
    display: flex;
    height: 20px;
    width: 342px;
    left: 300px;
    top: 918px;
    background: #FFFFFF;
    margin: 5px 60px -6px;
`

const ForgottenContainer = styled.div`
    display: flex;
    margin: -100px 563px -6px;
`
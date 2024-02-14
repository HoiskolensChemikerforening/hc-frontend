import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';
import React, { useEffect, useState, useContext } from "react";
import { PageContainer, Container, Row, Col } from "../../components/Layout";
import { P, TitleContainer, Title, H1} from '../../components/Text'; 
import { Button } from '../../components/Button';
import { BiUndo } from "react-icons/bi";



export const Clicked = () => {
    
    useEffect(() => {
      window.scrollTo(0,0)
    })
    
    return (
        <PageContainer>
          <Background>
            <AbsH1>Congrats, you have successfully completed the tutorial
            <Button as={Link} to="/mapDemo"><BiUndo size={30}/></Button>
            </AbsH1>

            <RotaryRow>
        

              <RotaryContainer>

                <RotaryBlock bTime={"2s"}>Yay!</RotaryBlock>
                <RotaryBlock bTime={"4s"}>EPIC!</RotaryBlock>
                <RotaryBlock bTime={"6s"}>WOW!</RotaryBlock>
                <RotaryBlock bTime={"8s"}>You rule!</RotaryBlock>

              </RotaryContainer>
              <RotaryContainer>
                <RotaryBlock bTime={"1s"}>texas instruments</RotaryBlock>
                <RotaryBlock bTime={"3s"}>CSS GOD!</RotaryBlock>
                <RotaryBlock bTime={"5"}>:^)</RotaryBlock>
                <RotaryBlock bTime={"7s"}>Weird flex(box)!</RotaryBlock>
              </RotaryContainer>
        
            </RotaryRow>
        
          </Background>
            

        </PageContainer> 
    )
}


const spin = keyframes`
0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const reverseSpin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
`


const blink = keyframes`
  14% {background-color: red;}
  28% {background-color: orange;}
  42% {background-color: yellow;}
  56% {background-color: green;}
  70% {background-color: blue;}
  84% {background-color: indigo;}
  98% {background-color: violet;}
  100% {background-color: red;}
`

const textblink = keyframes`
  0% 100% {color: white}
  50% {color: aquamarine}
`

const gradientFlow = keyframes`
0.0% {background-image: linear-gradient(to bottom right,  #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC);}
10.0% {background-image: linear-gradient(to bottom right,  #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC);}
20.0% {background-image: linear-gradient(to bottom right,  #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0);}
30.0% {background-image: linear-gradient(to bottom right,  #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1);}
40.0% {background-image: linear-gradient(to bottom right,  #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff);}
50.0% {background-image: linear-gradient(to bottom right,  #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1);}
60.0% {background-image: linear-gradient(to bottom right,  #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0);}
70.0% {background-image: linear-gradient(to bottom right,  #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC);}
80.0% {background-image: linear-gradient(to bottom right,  #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC);}
90.0% {background-image: linear-gradient(to bottom right,  #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf);}
100.0% {background-image: linear-gradient(to bottom right,  #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC, #ffabaf, #F1B6BC, #E2C4CC, #CBD6E0, #BAE5F1, #abf1ff, #BAE5F1, #CBD6E0, #E2C4CC, #F1B6BC);}
`

const AbsH1 = styled(H1)`
  position: relative;
  top: 40%;
  left: 40%;
  max-width: 300px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${textblink} 4s linear infinite;
`

const Background = styled.div`
min-width: 100%
min-heigth: 100%
padding: 10% 0px 1000px 0px;
background-image: linear-gradient(to bottom right, #ffabaf, #00ff00, #ffabaf, #abf1ff, #ffabaf, #abf1ff);
animation: ${gradientFlow} 2s infinite;
  `
const RotaryContainer = styled.div`
  width: 60%
  heigth: 60%
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: space-around;
  gap: 100px;
  row-gap: 150px;
  animation: ${reverseSpin} 6s linear infinite;
  
`
  const RotaryRow = styled.div`
  width: 100%
  heigth: 30%
  position: relative:
  top: 45%;
  left: 45%;
  display: flex;
  
  align-items: center;

  animation: ${reverseSpin} 6s linear infinite;
  
`
  
  
const RotaryBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${spin} 2s linear infinite, ${blink} ${props => props.bTime} linear infinite;
  background-color: #ff0000;
  color: white;
  width: 100px;
  min-width: 33%;
  height: 30px;
  `
  
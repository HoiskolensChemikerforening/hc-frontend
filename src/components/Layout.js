import React from 'react';
import styled, { css } from 'styled-components';
import '../index.css';

const Navbar = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 8px 0;
  margin-bottom: 30px;
`;

const DarkPage = styled.div`
  background-color: #171717;
  color: #ffffff;
  padding-bottom: 60px;
`;


/* Fundamentals */
const Container = styled.div`
  margin: 0 5%;

  @media only screen and (min-width: 768px) {
    margin: 0 10%;
  }
`;

const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

// Help function for Column
function getWidthString(span) {
  if (!span) return;

  let width = span / 12 * 100;
  return `width: ${width}%;`;
};

const Column = styled.div`
  float: left;
  ${({ xs }) => xs ? getWidthString(xs) : "width; 100%"};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)};
  }
  
  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
`;

/* Separators */
const HRule = styled.div`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid rgba(0,0,0,0.5);
  margin: 30px 0 30px 0;

  ${props => props.white && css`
    border-top: 1px solid rgba(255,255,255,0.7);
    color: #000000;
  `}

  ${props => props.dramatic && css`
    margin: 60px 0 30px 0;
  `}
`;

/* Other */
const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const CenterText = styled.div`
  text-align: center;
`;

export {
  Navbar,
  DarkPage,

  Container,
  Row,
  Column,

  HRule,
  Center,
  CenterText
};
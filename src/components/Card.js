import React from 'react';
import styled, { css } from 'styled-components';
import '../index.css';

const Card = styled.div`
  margin-right: 10px;
  margin-bottom: 20px;
  padding: 20px 10px;
  background-color: #efefef;
  color: #000000;

  ${props => props.white && css`
    background-color: #ffffff;
    color: #000000;
  `}

  ${props => props.lightgray && css`
    background-color: #efefef;
    color: #000000;
  `}

  ${props => props.darkgray && css`
    background-color: #212121;
    color: #ffffff;
  `}

  ${props => props.black && css`
    background-color: #000000;
    color: #ffffff;
  `}
`;

export {
  Card
};
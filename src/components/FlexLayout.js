import React from "react";
import styled, { css } from "styled-components";
import "../index.css";

/* Fundamentals */
const Container = styled.div`
  margin: 0 10%;
  display: flex;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${props => props.justify || "space-between"};
  margin: ${props => props.margin || "2% 0"};
`;

const Col = styled.div`
  flex-basis: 100%;
  margin: ${props => props.margin || "0 2%"};
  @media only screen and (min-width: 992px) {
    flex:  ${props => props.flex || 1};;
  }
`;

export { Container, Row, Col };

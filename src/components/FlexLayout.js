import React from "react";
import styled, { css } from "styled-components";
import "../index.css";

/* Fundamentals */
const Container = styled.div`
  margin: 5% 10%;
  display: flex;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  display: flex;
  margin: 0 10%;
  flex-direction: column;
`;

export { Container, Row, Col };

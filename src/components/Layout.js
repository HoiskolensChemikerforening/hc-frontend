import styled from 'styled-components';
import '../index.css';

/* Fundamentals */
const Container = styled.div`
  margin: 0 10%;

  @media only screen and (min-width: 768px) {
    margin: 0 2%;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -5px;
  width: 100%;
  height: 100%;
`;

const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
  width: 100%;
`;

// Help function for Column
function getWidthString(span) {
  if (!span) return;

  let width = (span / 12 * 100) -2;
  return `width: ${width}%;`;
};

const Col = styled.div`
  float: left;
  padding: 1%;
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


const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -5px;
  width: auto;
  height: auto;
  margin-left: 5%;
  margin-right: 5%;
  text-align: center;
`;


const BodyContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* <- viktig */
  margin-top: -5px;
  width: auto;
  height: auto;
  margin-left: 5%;
  margin-right: 5%;
  text-align: left; /* <- passer på at tekst inni p også blir venstrejustert */
`;



/* Separators */


/* Other */


export {
  Container,
  PageContainer,
  Row,
  Col,
  BodyContainer,
  BodyContainerLeft
};
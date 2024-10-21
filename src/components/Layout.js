import styled, { css } from 'styled-components';
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

  @media only screen and (min-width: 768px) {
    margin: 0 2%;
  }

  ${props => props.gray && css`
    background-color: var(--gray-10);
    min-height: 100vh;
  `}
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

/* Separators */


/* Other */


export {
  Container,
  PageContainer,
  Row,
  Col
};
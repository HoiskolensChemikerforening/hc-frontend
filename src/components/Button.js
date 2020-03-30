import styled, { css } from "styled-components";
import "../index.css";

const Button = styled.button`
  margin: 10px 0;
  padding: 8px 24px;

  font-weight: bold;
  font-size: 1rem;
  color: rgb(0, 0, 0, 0.5);

  background: transparent;
  border: 2px transparent;
  border-radius: 5px;

  cursor: pointer;

  ${props =>
    props.primary &&
    css`
      color: ${props => (props.yellow ? "var(--gray-90)" : "var(--gray-00)")};
      background: ${props =>
        props.yellow ? "var(--primary)" : "var(--gray-90)"};
      border: 2px
        ${props => (props.yellow ? "var(--primary)" : "var(--gray-90)")} solid;
    `}
  ${props =>
    props.secondary &&
    css`
      color: ${props => (props.yellow ? "var(--primary)" : "var(--gray-90)")};
      border: 2px
        ${props => (props.yellow ? "var(--primary)" : "var(--gray-90)")} solid;
    `}
`;

export { Button };

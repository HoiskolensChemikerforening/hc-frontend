import styled, { css } from 'styled-components';
import '../index.css';

const Button = styled.button`
  margin: 10px 0;
  padding: 0.5em 1.5em;

  font-weight: bold;
  font-size: 16px;
  color: rgb(0, 0, 0, 0.5);

  background: transparent;
  border: 2px transparent;
  border-radius: 1px;

  cursor: pointer;

  ${props => props.primary && css`
    color: #000;
    background: var(--primary);
    border: 2px var(--primary) solid;
  `}
  ${props => props.secondary && css`
    border: 2px #212121 solid;
    color: rgb(0, 0, 0, 0.7);
  `}
`;

export {
  Button
};
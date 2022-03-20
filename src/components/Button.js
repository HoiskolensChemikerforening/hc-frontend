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
  border-radius: 10px;
  // Shadow #36 by tailwind
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  cursor: pointer;


  ${props => props.primary && css`
    color: #000;
    background: var(--primary);
    border: 2px var(--primary) solid;
    &:hover {
      border-color: var(--yellow-30);
      filter:  brightness(105%);
    }
  `}
  ${props => props.secondary && css`
    border: 2px #212121 solid;
    color: rgb(0, 0, 0, 0.7);
  `}
  ${props => props.navigation && css`
    border: 2px #212121 solid;
    color: rgb(0, 0, 0, 0.7);
    width: 100px;
    height: 50px;
  `}

`;

export {
  Button
};
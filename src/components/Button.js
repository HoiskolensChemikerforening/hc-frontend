import styled, { css } from 'styled-components';
import '../index.css';

//ulike knapper 
// fra hc-frontend/src/components/Buttons.js
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
    color: var(--black);
    background: var(--primary);
    border: 2px var(--primary) solid;
    &:hover {
      border-color: var(--primary);
      filter:  brightness(105%);
    }
  `}
  ${props => props.secondary && css`
    color: var(--white);
    background: var(--secondary);
    border: 2px var(--secondary) solid;
    &:hover {
      border-color: var(--secondary);
      filter:  brightness(105%);
    }
  `}
    ${props => props.cancel && css`
    color: var(--white);
    background: var(--cancel);
    border: 2px var(--cancel) solid;
    &:hover {
      border-color: var(--cancel);
      filter:  brightness(105%);
    }
    `}
  ${props => props.navigation && css`
    border: 2px #212121 solid;
    color: rgb(0, 0, 0, 0.7);
    width: 100px;
    height: 50px;
  `}

    ${props => props.big && css`
        margin: 15px 30px 30px;
        padding: 2em 2em;
        width: 250px;
        `}
`;


//hc-frontend/src/pages/home/Kontortilgang.jsx
const ButtonWrapper = styled.div`
  width: 100%;
  text-align: left;
`;

//hc-frontend/src/pages/internt/internt.jsx
const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;

    ${props => props.center && css`
        justify-content: center;
      `}
    ${props => props.space && css`
        justify-content: space-evenly;
      `}
`;

//hc-frontend/src/pages/events/events.jsx
/*const AddButtonContainer = styled(Link)`
  text-decoration: none; 
  color: black; 
`;*/

export {
    Button,
    ButtonContainer
  };
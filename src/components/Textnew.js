import styled, { css } from 'styled-components';
import { P as baseP , H1} from "./Text";
import '../index.css';

//hc-frontend/src/components/Text.js

const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;
  line-height: 1.6;
  

  ${props => props.small && css`
    font-size: 14px;
  `}

  ${props => props.big && css`
    font-size: 18px;
  `}
  ${props => props.bold && css`
    font-weight: 800;
  `}
  ${props => props.italic && css`
    font-weight: 400;
    font-style: italic;
  `}
  ${props => props.cursor&& css`
    cursor: pointer;
    &:hover {
      font-weight: 600;
    } 
  `}
`;


//hc-frontend/src/pages/home/Widgets.jsx

const TextContainer = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 70%;
    margin: 0px;

    font-size: 16px;
    font-weight: 510;
    color: var(--gray-90);
    cursor: default;
`;

//hc-frontend/src/pages/internt/kontaktinfo.jsx

const P2 = styled(baseP)`
 margin: 0; // Removes default margin
 line-height: 1.5; // Match line height with Link
 vertical-align: middle; // Aligns text vertically in the middle
 text-align: center; // Center-align the text
`;

//hc-frontend/src/pages/events/events.jsx på branch page/eventpage, ikke merget inn her enda
const SubTitle = styled.p`
  cursor: pointer;
  margin: 0;
  font-size: 20px;

  ${(props) => props.boldUnderlined && css`
    font-weight: bold;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-decoration-color: var(--yellow-30);
  `}
`;

export {
    P,
    TextContainer,  
    P2,
    SubTitle
  };
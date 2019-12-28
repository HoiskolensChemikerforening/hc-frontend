import styled, { css } from 'styled-components';
import '../index.css';

const LogoText = styled.h1`
  font-weight: bold;
  font-size: 18px;

  :hover {
    color: #ffd900;
    transition: 0.07s;
  }
`

const SectionHeader = styled.h2`
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;

  margin-top: 0px;
  margin-bottom: 30px;
  padding-top: 50px;
  padding-bottom: 0px;

  ${props => props.yellow && css`
    color: #ffd900;
  `}
`;

const Header = styled.h3`
  font-weight: bold;
  font-size: 24px;

  margin-top: 0;
  margin-bottom: 12px;


  ${props => props.dramatic && css`
    font-size: 34px;

    margin-bottom: 15px;
    padding-top: 30px;
  `}
`;

const Lead = styled.p`
  font-size: 20px;

  margin-top: 0px;
  margin-bottom: 10px;

  ${props => props.bold && css`
    font-weight: bold;
  `}

  ${props => props.dramatic && css`
    margin-bottom: 30px;
  `}
`;

const Long = styled.p`
  font-size: 18px;

  margin-top: 0px;
  margin-bottom: 30px;

  ${props => props.bold && css`
    font-weight: bold;
  `}
`

const Detail = styled.p`
  font-size: 14px;
  margin-top: 0px;

  ${props => props.dramatic && css`
    margin-bottom: 30px;
  `}

  ${props => props.bold && css`
  font-weight: bold;
  `}
`

const Code = styled.p`
  font-family: "IBM Plex Mono";
  background-color: #eeeeee;
  
  padding: 10px;
  margin-bottom: 30px;
`

export {
  LogoText,
  SectionHeader,
  Header,

  Lead,
  Long,

  Detail,
  Code
};
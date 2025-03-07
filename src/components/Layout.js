import styled, { css } from 'styled-components';
import '../index.css';
import { Link } from '../components/Text';


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
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    padding
    
    : 0 2%;
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
const ContentContainer = styled.div`
    width: 90%;
    border-radius: 10px;
    padding: 0 20px;

  ${props => props.white && css`
    background-color: white;
  `}

  ${props => props.gray && css`
    background-color: var(--gray-10);
  `}
`;

const ModalContainer = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1003;
  background-color: white;
  width: 80%;
  max-height: 80%;
  overflow-y: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;

    ${props => props.center && css`
        justify-content: center;
      `}
    ${props => props.space && css`
        justify-content: space-evenly;
      `}
    ${props => props.left && css`
        text-align: left;
      `}
`;
/* Other */



//hc-frontend/src/components/Form.js
const NewArticleContainer = styled.div`
  margin: 10px 200px;
`; 

const FormContainer1 = styled.div`
  display: flex;
  padding: 10px 15px;
  flex-direction: column;
  justify-content: space-between;
  min-height: 500px;
  max-height: 1000px;
`;  


const ImageContainer = styled.div `
    display: flex;
    align-self: center;
    margin: 20px 0px;
    width: 30%;
`; 

//hc-frontend/src/components/navigation/DropdownMenu.jsx
const DropdownBox1 = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    margin: 0; 
    background-color: var(--yellow-30);

    display: ${props => (props.open ? `flex` : `none`)};
    flex-direction: column;
    height: 100%;
    width: 100%; 
    
    @media (min-width: 786px) {
        align-self: center;
    }
`;

const WrapperPages1 = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;  
    margin-top: 2%;
`;

//hc-frontend/src/components/navigation/NavBar.jsx
const NavContainer = styled.div`
    position: sticky;
    position: -webkit-sticky;
    z-index: 1;
    top: 0px;
    background-color: var(--white);
`;

//hc-frontend/src/components/navigation/UserBox.jsx
const MenuBox = styled.div`
    font-size: 40px;
    &:hover {
        cursor: pointer;
    }
`;

//hc-frontend/src/pages/events/events.jsx


const DateBox1 = styled.div`
    height: 35px;
    width: 85px;
    margin-bottom: 10px;
    background-color: var(--yellow-30);
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


const NumberCount = styled.span`
    font-weight: 600;
    ${props => props.black && css`
    color: black;
    padding-left: 5px;
  `}
    ${props => props.gray && css`
    color: var(--gray-60);
  `}
`;

const AddButtonContainer = styled(Link)`
  text-decoration: none; 
  color: black; 
`;




//hc-frontend/src/pages/homeOLD/EventListing.jsx
const DateBox3 = styled.div`
    background: var(--primary);
    border-radius: 5px;
    padding: 5px;
    width: 42px;
    height: 17px;
    text-align: center;
`;

//hc-frontend/src/pages/internt/soknadommidler.jsx
const FormContainer2 = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
    padding: 20px;
    background-color: white;
    border-color: var( --gray-60);
    border-width: 0.5px;
    border-style: solid;
    border-radius: 10px; 
    flex-direction: column;
    width: 70%;
`; 
const FormContainer3 = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-evenly;
`;

const BackgroundContainer = styled.div`
    display: flex;
    background-color: var(--primary);
    font-size: 40px;
    width: 50%;
    justify-content: center;
    border-radius: 10px;
    padding: 10px;
    margin: 30px;
`;
const PriceClassBox = styled.div` 
`;

//hc-frontend/src/components/CardSubGroups.jsx
const Center_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color:#ADADADBF; //#737373a6;
  height: 20%;
  font-size: 25px;
`;

const Wrapper1 = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  justify-content:space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledWrapper = styled.div`
  position: relative;
  padding-bottom: 60%;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 125%;
  margin: 10px;
  display: flex;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${props => props.committee.image});
  background-size: cover; \\This streches the background image instead of setting the proportions of the box to match the proportions of the image. Will hopefully get back to this
  background-repeat: no-repeat;
  display: flex;
  align-items: end;
`;

//hc-frontend/src/components/MapTraining.jsx
const TitleWrapper = styled.h2`
  display: flex;
  width: 80%;
  justify-content: center;  
`

const ContentWrapper = styled.p`
  display: flex;
  width: 80%;
  justify-content: center;
`

/* Oppgave 1: */
const SimpleWrapper = styled.div`
  
  width: 100%;
  min-height: 100px;
  /* Her må noe fikses: */
  background-color: #a0ab27;
  /* Bruk flexbox for å sentrere elementene: */
  display: flex;
`

/* Oppgave 2: */
const RoundedImageWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 200px;
  background-color: var(--primary);
  justify-content: center;
  flex-wrap: wrap;
  /* Din kode her: */
  
`


/* Oppgave 3: */
const ShadowWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 200px;
  background-color: var(--primary);
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 25px;
  background-image: url(${props => props.committee.image});
  background-size: cover;
  background-repeat: no-repeat;
  /* Din kode her: */
  
`


const ReadableTitleWrapper = styled.h2`
  display: flex;
  width: 100%;
  justify-content: center;  
  align-items: center;
  /* Din kode her */
  
  `
  
  const ReadableContentWrapper = styled.p`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  /* Din kode her */
  
`//hc-frontend/src/components/navigation/DropdownMenu.jsx
const DropdownBox2 = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    margin: 0; 
    background-color: var(--yellow-30);

    display: ${props => (props.open ? `flex` : `none`)};
    flex-direction: column;
    height: 100%;
    width: 100%; 
    
    @media (min-width: 786px) {
        align-self: center;
    }
`;

const WrapperPages2 = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;  
    margin-top: 2%;
`;

//hc-frontend/src/pages/homeOLD/EventBox.jsx
const Wrapper2 = styled.div`
  display: flex;
  width: 100%;
  max-width: 25vw;
  margin: 0 0 0 50px;
  flex-direction: column;
  @media only screen and (max-width: 992px) {
    margin: 50px 0 0 0;
    max-width: 100%;
  }
`;

//hc-frontend/src/pages/homeOLD/NavArea.jsx
const Wrapper3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: none;
  ${props =>
    props.open &&
    css`
      display: flex;
      flex-direction: row;
    `}
  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

const TopWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  margin: 50px 0;
  justify-content: space-between;
  z-index: 2;
  @media only screen and (max-width: 992px) {
    margin: 20px 0;
    height: 60px;
  }
`;

const IconWrapper1 = styled(Link)`
  align-self: end;
  margin: 0 10%;
  height: 25px;
  padding:12.5px 15px;
  position: relative;
  right: -15px;
  text-decoration: none;
  &:visited {
    color: var(--gray-90);
  }
  @media only screen and (max-width: 992px) {
    padding: 15px;
    align-self: center;
  }
`;

const LogoWrapper1 = styled(Link)`
  margin: 0 10%;
`;

const ItemWrapper = styled.div`
  margin: 0 10%;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;

//hc-frontend/src/pages/homeOLD
const BorderWrap = styled.div`
  display: flex;
  width: 75vw;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid var(--primary);
  @media only screen and (max-width: 992px) {
    width: 90vw;
    height: 60px;
  }
`;

const IconWrapper2 = styled(Link)`
  align-self: end;
  height: 25px;
  padding: 12.5px 15px;
  position: relative;
  right: -15px;
  margin-right: 10%;
  text-decoration: none;
  &:hover {
    background-color: var(--primary);
  }

  @media only screen and (max-width: 992px) {
    padding: 15px;
    align-self: center;
  }
`;

const LogoWrapper2 = styled(Link)`
  margin-left: 10%;
`;

//hc-frontend/src/components/FlexLayout.js
const Container1 = styled.div`
  margin: 0 10%;
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: center;
`;

//hc-frontend/src/pages/homeOLD/Shitbox.jsx
const Wrapper4 = styled.div`
    display: flex;
    margin: 0 20px 20px 0;
    flex-direction: column;
`;

export {
  Container,
  PageContainer,
  ContentContainer,
  ModalContainer,
  ButtonContainer,
  Row,
  Col
};
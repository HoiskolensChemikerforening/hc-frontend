import styled, { css } from 'styled-components';
import '../index.css';

//hc-frontend/src/components/MapTraining.jsx
const TitleWrapper = styled.h2`
  display: flex;
  width: 80%;
  justify-content: center;  
`
const ReadableTitleWrapper = styled.h2`
  display: flex;
  width: 100%;
  justify-content: center;  
  align-items: center;
  /* Din kode her */;
  `

//hc-frontend/src/components/Text.js
const TitleContainer = styled.div`
  display: flex;
  justify-content: center; 
`;

const Title1 = styled.div`
  background-color: var(--primary);
  width: auto;
  height: auto;
  font-size: 42px;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  margin:20px;
`;

const WideTitle = styled(Title1)`
  padding: 10px 10%;

  @media (max-width: 530px){
    width 100%
  }
`;
//hc-frontend/src/pages/events/events.jsx
const Title2 = styled.p`
  cursor: pointer;
  margin: 0;
  size: large;
  font-size: 20px;
`;

const PTitle = styled.div`
  margin-bottom: 7px;
  max-width: 100%;
  overflow: hidden; 
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;
  line-height: 1.6;
  font-weight: 800;
`;

//hc-frontend/src/pages/home/EventHomepage.jsx
const Title3 = styled.p`
  cursor: pointer;
  margin: 0;
  size: medium;
`;


//hc-frontend/src/pages/homeOLD/EventBox.jsx
const Title4 = styled.div`
  position: relative;
  top: 0;
  left: 0;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 20px;
  display: inline-flex;
  background-color: white;
  width: 0;
`;

const TitleText = styled(Title4)`
  margin: 0;
  background-color: white;
  padding-right: 10px;
`;

const ListTitle = styled.div`
  display: inline-flex;
  font-size: 1.125rem;
  font-weight: bold;
`;

//hc-frontend/src/pages/homeOLD/NewsListing.jsx
const Title5 = styled.div`
    font-weight: bold;
    font-size: 18px;
    padding: 5px 0;
`;

const TitleLine = styled.div`
    height: 5px;
    background-color: var(--primary);
    width: 30px;
    margin-bottom: 5px;
`;

//denne var stygg 
const Title6 = styled.h1`
  background-color: #f8e469ff;
  text-align: center;
  padding: 5px 15px 5px 15px;
`

export {
    TitleContainer,
    Title1, 
    Title2,
    Title3, 
    Title4, 
    Title5, 
    Title6, 
    TitleWrapper, 
    WideTitle, 
    PTitle

  };

  //liker Title1 best sammen med Titlecontainer, likte ikke 

  //virker som Title2 og Title3 hører mer til subtitle 

  //textwrapper gjortde teksten bold (ganske firkanta) og boksen rundt var ikke midstilt 

  //Widetitle kan fungere flott på mobil, kan også være med å fylle ut siden på Pc, men den hadde litt mye mellomrom (margin) over
  //over og under. Mulig løsning om den endres litt 

  //PTitle er også en overskrift, bare mindre i størrelse pga hvor den er plassert. Kan lage en basic Title og heller lage en liten versjon


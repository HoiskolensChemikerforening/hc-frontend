import styled, { css } from 'styled-components';
//hc-frontend/src/cmponents/Form.

const ImageFieldLabel = styled.label`
  border: solid 1px var(--gray-50);
  border-radius: 4px;
  background-color: var(--gray-10);
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;
  width: ${ props => props.width || "200px" };
`;

const ImageField = styled.input.attrs({ type: "file", accept: "image/*" })``;

const ImageContainer = styled.div `
    display: flex;
    align-self: center;
    margin: 20px 0px;
    width: 30%;
`; 

const ImagePreview = styled.img `
    width: 100%;
`; 


//hc-frontend/src/pages/events/events.jsx

const Image = styled.img`
  width: 100%;
`;

const ImageCont = styled.div`
  min-height: 200px;
  max-height: 200px;
  float: left;
  margin-right: 5px;
  overflow: hidden;
  border-radius: 5px;
`;

//hc-frontend/src/compnents/navigation/UserBox.jsx

const UserImage = styled.img `
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 10px;
    display: none;
    &:hover{
        cursor: pointer;
    }
    @media (min-width: 1024px){
        display: flex;
    }
`;

//hc-frontend/src/pages/homeOLD/NewsListing.jsx

const ImageContainer2 = styled.div`
    overflow: auto;
    position: relative;
    height: ${props => props.children[0].height || "auto"};
`;

const Image2 = styled.img`
    width: 100%;
    height: auto;
`;

//hc-frontend/src/pages/internt/kontoret.jsx

const Images = styled.div`
    display: flex; // ??
    flex-direction: row; // ??
    justify-content: center; // ??
    align-items: center; // ??
    gap: 50px; // ??
`;

const Photo = styled.img`
    max-width: 200px; // ??
    height: auto; // ??
`;

//hc-frontend/src/pages/news/NewsDetail.jsx

const ImageContainer3 = styled.div`
  padding: 0 0px;
  margin-top: -5px;
  width: 100%;
  @media (min-width: 500px){
    height:100%;
    width: 70%;
    }
  @media (min-width: 700px) {
    height:100%;
    width: 60%;
  }
  @media (min-width: 850px) {
    height:100%;
    width: 55%;
    margin-bottom: -20px;
  }
  @media (min-width: 900px) {
    height:100%;
    width: 50%;
    margin-bottom: -20px;
  }
`;

const ArticleImage = styled.div`
  width: 100%;
  padding-bottom: 67%;
  background: url(${props => props.img});
  background-size: cover;
`;

const AuthorImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: url(${props => props.img});
  background-size: cover;
  margin-right: 6px;
  border: 3px var(--primary) solid;
`;

//hc-frontend/src/pages/news/NewsList.jsx

const ImageContainer4 = styled.div`
    width: 100%;
    padding-bottom: 67%;
    background: url(${props => props.img});
    background-size: cover;
    border-radius: 5px;
`;

//hc-frontend/src/pages/subgroups/CommitteeDetailsPage.jsx

const ImageContainer5= styled.div`
    width: 100%;
    min-width: 400px;
`;

export {
    ImageContainer,
    ImageContainer2,
    ImageContainer3,
    ImageContainer4,
    ImageContainer5
  };
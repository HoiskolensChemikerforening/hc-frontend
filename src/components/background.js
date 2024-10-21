//bakgrunn

//hc-frontend/src/index.css

body {
    margin: 0;
    background: var(--white);
    color: var(--gray-90);
    font-weight: 400;
    font-size: 1rem;
    font-family: "Inter", "Roboto", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  //hc-frontend/src/components/CardSubGroups.jsx

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

//hc-frontend/src/pages/internt/soknadommidler.jsx

const Page = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--gray-20);
    margin: 50px;
    padding: 20px;
    border-radius: 10px;
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

//hc-frontend/src/pages/internt/Kontortilgang.jsx
const OuterWrapper = styled.div`
  background-color: var(--gray-10);
  min-height: 100vh;
`;


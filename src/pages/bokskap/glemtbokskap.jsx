import React, { useState} from "react";
import styled from "styled-components";
import {Row, Col, Container} from "../../components/Layout";
import { H1, H3, P } from "../../components/Text";

export const Glemtbokskap = () => {
    return(
    <>


    <Box>
        <Row>
        <H1 style={{textAlign: "center"}}> Glemt bokskapnummer </H1>
        </Row>
    </Box>

    <Infobox>
        Dersom du har glemt nummeret på bokskapet ditt, kan du skrive inn eposten din under for å få tilsendt en påminnelses-epost:
    </Infobox>
    <Formbox>
        <div className="App">
        <header className="App-header">
            <div className="py-6">
            <ContactForm />
            </div>
        </header>
        </div> 
    </Formbox>

    </>

    );
}

const FORM_ENDPOINT = "https://public.herotofu.com/v1/EXAMPLE_FORM_ID";


const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    };
  
    if (submitted) {
      return (
        <>
          <div>Du vil snart få tilsendt en påminnelses-epost!</div>
        </>
      );
    }
  
    return (
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    );
  };
  
  export default ContactForm;

const Box = styled.div`
    background: #f7e469;
    width: 280px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 5px 100px 5px 100px;
    margin-bottom: 50px;
    margin-top: 50px;
`
const Infobox = styled.div`
    display:flex;
    justify-content: center;
    height: 60px;
    width: 520px;
    background-color: #F7F7F7;
    margin-left: 460px;
    padding: 10px 10px 10px 10px;
`;

const Formbox = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  width: 520px;
  background-color: #F7F7F7;
  margin-left: 460px;
  padding: 10px 10px 10px 10px;
`
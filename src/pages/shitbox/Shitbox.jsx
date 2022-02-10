import React, { useState, useRef } from "react";
import axios from 'axios';

import { Container } from "../../components/Layout";
import { H2, H3, P } from "../../components/Text";


const ShitboxForm = () => {
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState(null);

    const onFinish = (event) => {
        event.preventDefault();
        let author = 1;

        let formData = new FormData();
        formData.append("content", content);
        formData.append("image", imageFile);
        formData.append("author", author);

        let url = "http://localhost:8000/sladreboks/api/"

        axios.post(
            url, formData
            ).then(res => {
                console.log(res.data);
                alert("Success!");
              })
              .catch(err => {
                console.log(err);
                alert("Failure!")
              })
    }

    return (
        <form onSubmit={onFinish}>
        <p>
          <input type="text" placeholder='Content' id='content' required
                  onChange={e => setContent(e.target.value)}/>
        </p>
        <p>
        <input type="file" onChange={e => setImageFile(e.target.files[0])}/>
        </p>
        <input type="submit"/>
      </form>
    );
    };

const Shitbox = () => {
    return (
        <Container>
          <H2>Velkommen til sladreboksen!</H2>
          <H3>Send oss no gøy, a!</H3>
          <br/><br/>
          <P>Sitter du på noen gullkorn, eller har du noe sladder om dine medstudenter? 
            Send det inn her, så havner det kanskje i neste utgave av Sugepumpa. 
            Send gjerne inn bilder til Sugepumpen på snap også! 
            Ved spørsmål, ta kontakt med oss på <a href="mailto:sp@hc.ntnu.no">sp@hc.ntnu.no</a>.
          </P>
          <ShitboxForm />
        </Container>
    )
}

export { Shitbox };

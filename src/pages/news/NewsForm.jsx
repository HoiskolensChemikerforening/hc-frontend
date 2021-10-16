import styled from "styled-components";
import React, { useRef, useState } from "react";
import "./news.css";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { TextField, ImageField } from "../../components/Form"
import { Button } from "../../components/Button.js";

export const NewsForm = () => {

  // For validation
  const [dataEdit, setData] = useState("<p>Din spennende nyhet</p>");
  const [imageFile, setImage] = useState(null);
  const [error, setError] = useState(false);
  const title = useRef(null);

  const isNotEmpty = (value) => value.trim() !== "";
  const postArticle =(event) => {
    event.preventDefault();
    if(title != null && dataEdit != null && imageFile != null){
      setError(false);
      const image = imageFile.file;
      const articleText = dataEdit;
      console.log("image: "+ image + "article text: " + articleText);
    }
    else {setError(true)}

  };

  return (
    <NewArticleContainer>
      <h1>New Article</h1>
    <form onSubmit={postArticle} onFocus={() => setError(false)}>
      <FormContainer >
        <TextField placeholder="Tittel på nyheten" ref={title}/>
        <CKEditor 
          data={dataEdit} 
          editor={ClassicEditor} 
          onChange={(event, editor) => {setData(editor.getData())}} onFocus={() => setError(false)}/>

        {imageFile && 
          <ImageContainer> <ImagePreview src={imageFile.file}/> </ImageContainer>
        }

        <ImageField onChange={(event) => {setImage({file: URL.createObjectURL(event.target.files[0])})}} onFocus={() => setError(false)}/>
      </FormContainer>
      { error && <Error>Husk både tittel, tekst OG bilde!</Error>}
      <ButtonContainer>
        <Button primary type="submit" >Send inn</Button>
      </ButtonContainer>
    </form>
    </NewArticleContainer>
  )
  };

const NewArticleContainer = styled.div`
  margin: 10px 200px;
`; 

const FormContainer = styled.div`
  display: flex;
  padding: 10px 15px;
  flex-direction: column;
  justify-content: space-between;
  min-height: 500px;
  max-height: 1000px;
`;  

const Title = styled.h2 `
  margin-bottom: 20px;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
`;

const ImageContainer = styled.div `
    display: flex;
    align-self: center;
    margin: 20px 0px;
    width: 30%;
` 

const ImagePreview = styled.img `
    width: 100%;
` 

const Error = styled.p `
  display: flex;
  justify-content: center;
  width: 100%;
  color: black;
  font-style: bold;
  background-color: var(--yellow-30);
`
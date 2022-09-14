import styled from "styled-components";
import React, { useState } from "react";
import axios from 'axios';
import "./news.css";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { TextField, ImageField } from "../../components/Form"
import { Button } from "../../components/Button.js";

export const NewsForm = () => {
   // For validation
   const [content, setContent] = useState(null);
   const [imageFile, setImageFile] = useState(null);
   const [title, setTitle] = useState(null);

  const postArticle = (event) => {

    event.preventDefault();
    let author = 1;
    
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", imageFile);
    formData.append("author", author);

    const url = "http://localhost:8000/nyheter/api/";

    axios.post(
      url, formData
      ).then(res => {
          // Er vil vi vel legge til en melding om at det gikk bra
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        })
  }

  return (
    <NewArticleContainer>
      <h1>New Article</h1>
    <form  onSubmit={postArticle}>
      <FormContainer >
        <TextField placeholder="Tittel på nyheten" onChange={(event) => {setTitle(event.target.value)}} />
        <CKEditor
          data={content} 
          editor={ClassicEditor} 
          onChange={(event, editor) => {setContent(editor.getData())}} />

        {imageFile && 
          <ImageContainer> <ImagePreview src={imageFile.file}/> </ImageContainer>
        }

        <ImageField onChange={(event) => {setImageFile(event.target.files[0])}}/>

      </FormContainer>
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

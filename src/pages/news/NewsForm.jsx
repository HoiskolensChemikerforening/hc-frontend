import styled from "styled-components";
import React, { useState } from "react";
import "./news.css";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { TextField, ImageField } from "../../components/Form"
import { Button, ButtonContainer } from "../../components/Button.js";

export const NewsForm = () => {
   // For validation
   const [dataEdit, setData] = useState("<p>Din spennende nyhet</p>");
   const [imageFile, setImage] = useState(null);
   const [title, setTitle] = useState(null);
   const [error, setError] = useState(false);
   const [sendNews, setSendNews] = useState(false);
   //const [news, setNews] = useState(null);
   // const title = useRef(null); // ref={}
  // Post Form
  //useEffect(() => {
   //   sendArticle();
  
    /*if (!response.ok) {
      throw new Error(data.message || 'Could not create quote.');
    }
    else {
    return null; }*/
   // }, [sendNews]);

    const sendArticle = async() => {
      const response = await fetch("http://localhost:8000/nyheter/api/", {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        content: "dataEdit",
        author: {username: "Helebo", email: "helebo@stud.ntnu.no",
        first_name: "",
        last_name: "",
        full_name: "Helene"},
        image: imageFile.djFile,
        published_date: new Date(), 
        slug: title.split(" ").join("-"),
      }),
      //JSON.stringify(news),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data)
  
    }  // use Callback?

  //const isNotEmpty = (value) => value.trim() !== "";
  const postArticle =(event) => {
    event.preventDefault();
    if(title != null && dataEdit != null && imageFile != null){
      setError(false);
      setSendNews(true);
      sendNews && sendArticle();
    }
    else {setError(true)}

  };

  return (
    <NewArticleContainer>
      <h1>New Article</h1>
    <form onSubmit={postArticle} onFocus={() => setError(false)}>
      <FormContainer >
        <TextField placeholder="Tittel på nyheten" onChange={(event) => {setTitle(event.target.value)}} />
        <CKEditor 
          data={dataEdit} 
          editor={ClassicEditor} 
          onChange={(event, editor) => {setData(editor.getData())}} onFocus={() => setError(false)}/>

        {imageFile && 
          <ImageContainer> <ImagePreview src={imageFile.file}/> </ImageContainer>
        }

        <ImageField onChange={(event) => {setImage({file: URL.createObjectURL(event.target.files[0]), djFile: event.target.files[0]});console.log(URL.createObjectURL(event.target.files[0]))}} onFocus={() => setError(false)}/>
      </FormContainer>
      { error && <Error>Husk både tittel, tekst OG bilde!</Error>}
      <ButtonContainer center>
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

// console.log("image: "+ image + "article text: " + articleText);
      // Either delete this or pass to post request
      /*const data = {
        title: title,
        content: dataEdit,
        author: {full_name: "Helene", username: "Helebo", email: "helebo@stud.ntnu.no",
        first_name: "",
        last_name: "",
        full_name: ""},
        image: imageFile.file.toString(),
        published_date: new Date(), 
      };
      console.log(data)
      */
      //setNews(data);
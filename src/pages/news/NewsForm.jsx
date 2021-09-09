import styled from "styled-components";
import React from "react";
import "./news.css";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { TextField, ImageField } from "../../components/Form"

const NewsForm = () => (
    <form>
      <FormContainer>
        <TextField placeholder="Tittel på nyheten"/>
        <CKEditor editor={ClassicEditor}/>
        <ImageField/>
      </FormContainer>
    </form>
);

const FormContainer = styled.div`
  display: flex;
  padding: 10px 15px;
  flex-direction: column;
  justify-content: space-between;
  min-height: 500px;
  max-height: 1000px;
`;

export { NewsForm };

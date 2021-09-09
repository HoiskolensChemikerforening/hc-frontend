import styled from "styled-components";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "../index.css";
import React from "react";
import { H1 } from "./Text";

const ExampleForm = ({ children }) => (
    <form>
      <FormContainer>
        <H1>Hei</H1>
        <TextArea width="600px" placeholder="Skriv noe sladder..."/>
        <TextField/>
        <DropDown>
          <Option>Value1</Option>
          <Option>Value2</Option>
        </DropDown>
        <ImageField/>
        <Password/>
      </FormContainer>
    </form>
);

const ImageUpload = () => (
    <ImageFieldLabel>
      <i class="fa fa-cloud-upload"></i> Last opp bilde...
      <ImageField/>
    </ImageFieldLabel>
);

function RichTextEditor() {
  return (
      <CKEditor
          editor={ ClassicEditor }
          data={ Text }
      />
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextField = styled.input`
  border: solid 1px var(--gray-50);
  border-radius: 4px;
  background-color: white;
  padding: 10px;
  width: ${ props => props.width || "200px" };
  placeholder: ${ props => props.placeholder || "" };
`;

const TextArea = styled.textarea`
  border: solid 1px var(--gray-50);
  border-radius: 4px;
  background-color: white;
  padding: 10px;
  overflow: auto;
  resize: none;
  width: ${ props => props.width || "200px" };
  height: ${ props => props.height || "100px" };
  placeholder: ${ props => props.placeholder || "" };
`;

const DropDown = styled.select`
  border: solid 1px var(--gray-50);
  border-radius: 4px;
  background-color: white;
  padding: 10px;

  /* reset for custom styling */
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  /* custom dropdown arrow */
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 0px 1.5em;
  background-repeat: no-repeat;

  /* props */
  id: ${ props => props.id || null };
  width: ${ props => props.width || "200px" };
`;

const Option = styled.option`
  value: ${ props => props.value };
`;

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

const Password = styled.input.attrs({ type: "password" })`
  placeholder: ${ props => props.placeholder || "Select an image..." };
  width: ${ props => props.width || "200px" };
`;

export {TextArea, TextField, ImageField };

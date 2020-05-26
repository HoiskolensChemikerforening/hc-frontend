import styled, { css } from "styled-components";
import "../index.css";
import React from "react";

// Usage:
// <Button buttonType="primary" dark>Text inside button</Button
// Keyword dark is omitted for a standard yellow button
const Button = props => {
  // Check buttonType="keyword"
  switch (props.buttonType) {
    case "secondary": // buttonType="secondary" was passed in
      return (
        <SecondaryButton dark={props.dark}>{props.children}</SecondaryButton>
      );
    case "accept": // buttonType="accept" was passed in
      return <AcceptButton>{props.children}</AcceptButton>;
    case "error": // buttonType="error" was passed in
      return <ErrorButton>{props.children}</ErrorButton>;
    default:
      // Primary button acts as fallback
      return <PrimaryButton dark={props.dark}>{props.children}</PrimaryButton>;
  }
};

const PrimaryButton = styled.button`
  /* Set spacing around button */
  margin: 10px 0;
  padding: 8px 24px;

  /* Set styling related to the text */
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${props => (props.dark ? "var(--gray-00)" : "var(--gray-90)")};

  /* Set rules related to the button box and border */
  background: ${props => (props.dark ? "var(--gray-90)" : "var(--primary)")};
  border: 2px ${props => (props.dark ? "var(--gray-90)" : "var(--primary)")}
    solid;
  border-radius: 0px;

  /* Set pointer when hover */
  cursor: pointer;
`;

const SecondaryButton = styled.button`
  /* Set spacing around button */
  margin: 10px 0;
  padding: 8px 24px;

  /* Set styling related to the text */
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  color: ${props => (props.dark ? "var(--gray-90)" : "var(--gray-90)")};

  /* Set rules related to the button box and border */
  background: transparent;
  border: 2px ${props => (props.dark ? "var(--gray-90)" : "var(--primary)")}
    solid;
  border-radius: 0px;

  /* Set pointer when hover */
  cursor: pointer;
`;

const AcceptButton = styled.button`
  /* Set spacing around button */
  margin: 10px 0;
  padding: 8px 24px;

  /* Set styling related to the text */
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--gray-00);

  /* Set rules related to the button box and border */
  background: var(--accept);
  border: 2px var(--accept) solid;
  border-radius: 0px;

  /* Set pointer when hover */
  cursor: pointer;
`;

const ErrorButton = styled.button`
  /* Set spacing around button */
  margin: 10px 0;
  padding: 8px 24px;

  /* Set styling related to the text */
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--gray-00);

  /* Set rules related to the button box and border */
  background: var(--error);
  border: 2px var(--error) solid;
  border-radius: 0px;

  /* Set pointer when hover */
  cursor: pointer;
`;

export { Button };

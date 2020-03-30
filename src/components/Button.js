import styled, { css } from "styled-components";
import "../index.css";
import React from "react";

const Button = props => {
  switch (props.buttonType) {
    case "primary":
      return (
        <PrimaryButton yellow={props.yellow}>{props.children}</PrimaryButton>
      );
    case "secondary":
      return (
        <SecondaryButton yellow={props.yellow}>
          {props.children}
        </SecondaryButton>
      );
    case "accept":
      return <AcceptButton>{props.children}</AcceptButton>;
    case "error":
      return <ErrorButton>{props.children}</ErrorButton>;
    default:
      return <div></div>;
  }
};

const PrimaryButton = styled.button`
  margin: 10px 0;
  padding: 8px 24px;

  font-weight: bold;
  font-size: 1rem;

  color: ${props => (props.yellow ? "var(--gray-90)" : "var(--gray-00)")};

  background: ${props => (props.yellow ? "var(--primary)" : "var(--gray-90)")};
  border: 2px ${props => (props.yellow ? "var(--primary)" : "var(--gray-90)")}
    solid;
  border-radius: 5px;

  cursor: pointer;
`;

const SecondaryButton = styled.button`
  margin: 10px 0;
  padding: 8px 24px;

  font-weight: bold;
  font-size: 1rem;
  color: ${props => (props.yellow ? "var(--primary)" : "var(--gray-90)")};

  background: transparent;
  border: 2px ${props => (props.yellow ? "var(--primary)" : "var(--gray-90)")}
    solid;
  border-radius: 5px;

  cursor: pointer;
`;

const AcceptButton = styled.button`
  margin: 10px 0;
  padding: 8px 24px;

  font-weight: bold;
  font-size: 1rem;
  color: var(--gray-00);

  background: var(--accept);
  border: 2px var(--accept) solid;
  border-radius: 5px;

  cursor: pointer;
`;

const ErrorButton = styled.button`
  margin: 10px 0;
  padding: 8px 24px;

  font-weight: bold;
  font-size: 1rem;
  color: var(--gray-00);

  background: var(--error);
  border: 2px var(--error) solid;
  border-radius: 5px;

  cursor: pointer;
`;

export { Button };

import React from 'react';
import styled, { css } from 'styled-components';
import '../index.css';

const InputField = styled.input`
  margin: 8px 0;
  
  padding: 0.5rem;
  font-size: 16px;
  color: black;
  border: 0;
  background-color: #eeeeee;
`;


/* Checkboxes */
/* Styling checkboxes can be kind of a pain in the ass */
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
  cursor: pointer;
`;

// This is the actual checkmark icon
const Icon = styled.svg` 
  fill: none;
  stroke: ${props => props.checked ? '#000000' : 'transparent'}
  stroke-width: 4px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 1px;
  border: ${props => props.checked ? '2px solid #ffd900' : '2px solid #000000'};
  background: ${props => props.checked ? '#ffd900' : 'transparent'};
  transition: all 150ms;
`;

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon checked={checked} viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export {
  InputField,
  Checkbox
};
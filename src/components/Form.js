import styled, { css } from 'styled-components';
import '../index.css';
import React from 'react';

const Form = ({ children }) => (
    <form>
        <Input/>
    </form>
);

const Input = styled.input`
    width: 100%;

`;
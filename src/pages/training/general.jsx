import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { PageContainer } from "../../components/Layout";
import { P, TitleContainer, Title } from '../../components/Text'; 
import { Button } from "../../components/Button";

export const General = () => {

    const [clicked, setClicked] = useState(false); // useState hook to manage 'clicked' state
    const [inputValue, setInputValue] = useState(''); // State for managing input field value
    const [secondInputValue, setSecondInputValue] = useState(''); // State for managing second input field value
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]); // State for list of items

     // useEffect hook for demonstrating side effects (e.g., data fetching)
     useEffect(() => {
        // This code runs once after the component mounts, will run again if page is refreshed
    }, []);

    const handleClick = () => { // Function to handle click events
        setClicked(true); // Sets 'clicked' state to true when button is clicked
    };

    const handleSubmit = (event) => { // Function to handle form submission
        event.preventDefault();
        alert(`Skjema sendt inn med input: ${inputValue} og ${secondInputValue}`);
    };

    return (
        <PageContainer> {/* PageContainer is used as the main wrapper for the page */}
            <TitleContainer> {/* TitleContainer wraps and styles the title */}
                <Title> {/* Title component for displaying the main title */}
                    Velkommen til Webkom! 
                </Title>
            </TitleContainer>

            {/* Buttons and conditional rendering */}
            <Button> {/* Simple Button component */}
                Dette er en knapp som ikke gjør noe
            </Button>
            <Button primary type="button"> {/* Button with 'primary' styling */}
                Dette er en knapp som heller ikke gjør noe, men som er styla
            </Button>
            <Button primary type="button" onClick={handleClick}> {/* Button that triggers handleClick */}
                Dette er en knapp som fungerer 
            </Button>
            {clicked && <P>Jippi, du trykket på knappen!</P>} {/* Conditional rendering based on 'clicked' state */}

            {/* Custom styled containers */}
            <OuterContainer> {/* Custom styled container outside the other containers */}
                <InnerContainer> {/* Each InnerContainer is a child of OuterContainer */}
                    Flytt på oss!
                </InnerContainer>
                <InnerContainer>
                    Do it!
                </InnerContainer>
                <InnerContainer>
                    I believe in you
                </InnerContainer>
            </OuterContainer>

            {/* Input field with state management */}
            <StyledInput
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Skriv noe her"
            />

            {/* Displaying typed text */}
            {inputValue && <P>Du skrev: {inputValue}</P>}
            {secondInputValue && <P>Du skrev også: {secondInputValue}</P>}

            {/* Form submission */}
            <form onSubmit={handleSubmit}>
                <StyledInput
                    type="text"
                    value={secondInputValue}
                    onChange={(e) => setSecondInputValue(e.target.value)}
                />
                <Button secondary type="submit">Submit</Button>
            </form>

            {/* Rendering a list of items */}
            {items.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
            ))}
        </PageContainer>
    )
};

const OuterContainer = styled.div`
    display: flex;
    flex-direction: row; // Children elements are in a row
    justify-content: space-between; // Space between the children elements
    background-color: lightyellow; // Light gray background to distinguish the outer container
    padding: 15px; // Padding inside the container
    margin: 15px; // Space outside the container
    border: 2px solid black; // Border to visualize the container
    border-radius: 10px; // Rounded the corners of the container
`;

const InnerContainer = styled.div`
    flex-direction: column;
    justify-content: space-between;
    margin: 10px; // Margin around each inner container
    padding: 10px; // Padding inside each inner container
    background-color: white; // White background to contrast with OuterContainer
    border: 1px solid black; // Blue border to distinguish each inner container
    font-weight: bold;
`;

const StyledInput = styled.input`
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid grey;
`;

const ListItem = styled.div`
    padding: 5px;
    margin: 5px;
    border-bottom: 3px solid lightgrey;
    font weight: bold;
    border-radius: 5px;
`;
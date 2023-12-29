import React, { useState, useEffect } from "react";
import axios from 'axios'; // Importing Axios for making HTTP requests
import { PageContainer } from "../../components/Layout";
import { P, TitleContainer, Title, H1 } from '../../components/Text'; 
import { Button } from "../../components/Button";

export const ApiDemo = () => {
    const [catData, setCatData] = useState([]); // State for storing cat image data
    const [postData, setPostData] = useState(null); // Stores user input to simulate POST request data
    const [response, setResponse] = useState(''); // Stores the simulated server response

    // Fetch data using Axios GET
    useEffect(() => {
        axios.get('https://api.thecatapi.com/v1/images/search')
            .then(response => {
                setCatData(response.data); // Store the array of cat data
            })
            .catch(error => {
                console.error('There was an error!', error); // Log errors to console
            });
    }, []); // Empty dependency array means this effect runs once on mount

    // Function to handle POST request, a form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents default form submission behavior
        alert(`You have posted: ${postData} to the API`); // Alert to simulate POST request

        // Example of how a real POST request could be handled
        axios.post('https://exampleapi.com/submit', { data: postData })
            .then(response => {
                setResponse(`Server Response: ${response.data.message}`); // Update response state with server message
            })
            .catch(error => {
                console.error('There was an error!', error); // Log errors to console
            });
    };

    return (
        <PageContainer>
            <TitleContainer>
                <Title>API med Axios - Fetch og Post </Title>
            </TitleContainer>

            {/* Display fetched cat images and details */}
            <H1>Fetched cat data 🐱</H1>
            {catData.map((cat, index) => (
                <div key={index}>
                    <img src={cat.url} alt="Cat" style={{ width: '${cat.width}px', height: '${cat.height}px' }} />
                </div>
            ))}
            <P>For å få nytt katte-bilde må du refreshe skjermen for at useEffect hooken skal laste inn på nytt</P>

            {/* Form for POST request */}
            <H1>Slik kan en post request se ut</H1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={postData} 
                    onChange={(e) => setPostData(e.target.value)} 
                    placeholder="Enter data to post"
                />
                <Button primary type="submit"> Submit Data </Button>
            </form>

            {/* Display server response */}
            {response && <P>{response}</P>}
        </PageContainer>
    );
};

import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/Layout";
import { Button } from "../../components/Button";
import { H1, H3, P } from "../../components/Text";

export const Login = () =>  {
    
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    

    async function loginRequest(url, enteredEmail, enteredPassword) {
        console.log("Log in :)")
        /*
        try {
            const response = await fetch(url, 
            {
            method: "POST",
            body: JSON.stringify({
              email: enteredEmail,
              password: enteredPassword,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          setIsLoading(false);
          
          const data = await response.json();
          console.log(data);
    
          if (!response.ok) {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
        }
        const expirationTime = new Date(new Date().getTime() +  (data.expiresIn * 1000));
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace('/');
        
    } catch (error){
        alert(error.message);
    }
    */
};



    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        // Add validation

        
        setIsLoading(true);
        const KEY = 1;
        
        let url;
        if (isLogin) {
        url = `https://hc.ntnu.no/accounts:signInWithPassword?key=${KEY}`;
        } else {
        url = `https://hc.ntnu.no/accounts:forgot?key=${KEY}`;
        }
        loginRequest( url, enteredEmail, enteredPassword);
    }

    const switchLoginHandler = () => {
        setIsLogin((prevState) => !prevState)
    }
    
    return (
        <PageContainer>
            <Auth>
                { isLogin ? <H1> Log Inn</H1> : <H3>Har du glemt Passordet ditt?</H3> }
                <form onSubmit={submitHandler}>
                    <Control>
                    <Label htmlFor="email">Din e-post</Label>
                    <Input type="email" id="email" required ref={emailInputRef} placeholder="hc@ntnu.no" />
                    </Control>
                    { isLogin &&
                    <Control>
                    <Label htmlFor="password">Passord</Label>
                     <Input
                        type="password"
                        id="password"
                        required
                        ref={passwordInputRef}
                    />
                    </Control> }
                    <Action>
                    {!isLoading && (
                        <Button primary> {isLogin ? "Login" : "Send" }</Button>
                    )}
                    {isLoading && <p>Sending request...</p>}
                    </Action>
                </form>
                <br/>
                <P italic small cursor onClick={switchLoginHandler}> 
                    { isLogin ? "Glemt passord?" : "Tilbake til innlogging" }
                </P>
                </Auth>

        </PageContainer>
    );
}

const Auth = styled.section`
    margin: 3rem auto;
    width: 95%;
    max-width: 25rem;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    text-align: center;
`
const Control = styled.div`
    margin-bottom: 0.5rem;
`
const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
`
const Input = styled.input`
    font-style: inherit;
    background-color: var(--yellow-00);
    border-radius: 4px;
    border: 1px solid white;
    width: 70%;
    text-align: left;
    padding: 0.25rem;
  `

const Action = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
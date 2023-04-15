import React from "react";
import { useState, useContext } from "react";
import styled from "styled-components";
import { PageContainer } from "../../components/Layout";
import { Button } from "../../components/Button";
import { H1, H3, P } from "../../components/Text";

import AuthContext from "../../context/AuthContext";

export const Login = () =>  {
    let {loginUser} = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const switchLoginHandler = () => {
        setIsLoading(true);
        setIsLogin((prevState) => !prevState);
        setIsLoading(false);
    }
    
    return (
        <PageContainer>
            <Auth>
                { isLogin ? <H1> Logg inn</H1> : <H3>Har du glemt Passordet ditt?</H3> }
                <form onSubmit={loginUser}>
                    <Control>
                    <Label htmlFor="username">Brukernavn</Label>
                    <Input type="username" id="username" required placeholder="Skriv inn brukernavn..." />
                    </Control>
                    { isLogin &&
                    <Control>
                    <Label htmlFor="password">Passord</Label>
                     <Input
                        type="password"
                        id="password"
                        required
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
                <P italic small cursor="true" onClick={switchLoginHandler}> 
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
import React, {useState} from "react";
import axios from "axios";
import { setAuthToken } from "../../helpers/setAuthToken";


const LoginPage = () => {

  const handleSubmit = (username, password) => {
    const loginPayload = {
        "username": username,
        "password": password
    }
  
    axios.post("http://localhost:8000/api/token/", loginPayload)
      .then(response => {
        // Get token from response
        const token  =  response.data.access;
        const refresh = response.data.refresh;

        console.log("Token: " + token);
        console.log("Refresh: " + refresh);
  
        // Set JWT token to local
        localStorage.setItem("token", token);
        localStorage.setItem("refresh", refresh);
  
        // Set token to axios common header
        setAuthToken(token);
  
        // Redirect user to home page
        window.location.href = '/'
      })
      .catch(err => console.log(err));
  };

  return (
    <>
    <h1>Her kan du logge inn</h1>
    <form
      onSubmit={(event) => {
        event.preventDefault()
        const username = event.target.children.username.value;
        const password = event.target.children.password.value;
        handleSubmit(username, password);
      }}
    >
      <input type="username" id="username" name="username"/>
      <br />
      <input type="password" id="password" name="password"/>
      <br/>
      <input type="submit" value="Submit" />
    </form>
    </>
  );
}
export { LoginPage };
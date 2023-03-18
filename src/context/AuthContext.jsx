import React, { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom'
import { baseUrl } from "../utils/requests";
import axios from 'axios';

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
    let [loading, setLoading] = useState(true);

    const history = useHistory();

    const setAuthHeader = token => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    let loginUser = async (event) => {
        event.preventDefault();

        let data = JSON.stringify({
            'username': event.target.username.value, 
            'password': event.target.password.value
        });

        const headers = {
            'Content-Type':'application/json'
        }

        await axios.post(baseUrl + 'api/token/', data, {headers: headers})
        .then((response) => {
            const data = response.data;
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
            setAuthHeader(data.access);
            localStorage.setItem('authTokens', JSON.stringify(data));
            history.push('/');
        })
        .catch((error) => {
            alert(error);
        })
    }


    let logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
    };


    let updateToken = async () => {
        const headers = {'Content-Type':'application/json'};
        let data = {'refresh': authTokens?.refresh};
        await axios.post(baseUrl + 'api/token/refresh/', data, {headers: headers})
        .then((response) => {
            setAuthTokens(response.data);
            setUser(jwt_decode(response.data.access));
            setAuthHeader(response.data.access);
            localStorage.setItem('authTokens', JSON.stringify(response.data));
        })
        .catch((error) => {
            logoutUser();
        })

        if (loading) {
            setLoading(false);
        }
    }

    let contextData = {
        user:user,
        authTokens:authTokens,
        loginUser:loginUser,
        logoutUser:logoutUser,
    };


    useEffect(()=> {

        if (loading) {
            updateToken();
        }

        let oneMinute = 1000 * 60 * 1;

        let interval =  setInterval(() => {
            if (authTokens) {
                updateToken();
            }
        }, oneMinute)
        return () => clearInterval(interval);

    }, [authTokens, loading])

    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
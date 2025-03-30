import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FlatpageDetail = ({pageurl}) => {
    const url = "http://localhost:8000/api/s/" + pageurl +"/";
    console.log(url);

    const [info, setInfo] = useState([]);
    //const [title, setTitle] = useState("Loading title ....")
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect (
        () => {
            axios
            .get(url,{auth:{
                username: "annikenmuri",
                password: "webkom",
            }})
            .then(
                (response) => {
                setInfo(response.data);
                console.log(response.data)
                })
            .catch((err) => {
                console.log("Fant ikke siden");

            }); 
        }, []);


        return <>
            <div>
                {info.length === 0 ? "feil" : info.content}
            </div>
            </>
}


export default FlatpageDetail;

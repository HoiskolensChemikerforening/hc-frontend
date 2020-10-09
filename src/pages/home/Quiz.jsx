import React, {useState, useEffect} from "react";
import "../../index.css";
import {Col, Row} from "../../components/FlexLayout";
import {P} from "../../components/Text";

function QuizTermBox() {
    // Declares var quizTerm and quizScores, and an update function, useState sets initial value to an empty list
    const [quizTerm, setQuizTerm] = useState([]);
    const [quizScore, setQuizScore] = useState([]);

    // Runs once HomePage component is loaded
    useEffect(() => {
        const data = fetchAllQuizData();
        setQuizTerm(data);
    }, []);

    // Gets all quiz terms and scores from the quiz api url and sets the quizTerm variable
    async function fetchAllQuizData() {
        const response = await fetch("http://127.0.0.1:8000/quiz/api/");
        const jsonData = await response.json();
        return jsonData;

    }

    console.log(quizTerm);
    return(
        <Col>

{/*            {quizTerm.map(quizTerm => (
                <div key={quizTerm.id}>{quizTerm}</div>
            ))}*/}
        </Col>
    );
}

export { QuizTermBox };
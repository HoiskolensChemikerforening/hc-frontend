import React, {useState, useEffect} from "react";
import "../../index.css";

// Fetches data from ListAllQuizTerms
function QuizTermBox() {
  // Declares var quizTerm and an update function, useState sets initial value to an empty list
  const [quizTerm, setQuizTerm] = useState([]);

  // Runs once HomePage component is loaded
  useEffect(() => {
    fetchQuizData();
  }, []);

  // Gets all quiz terms (and scores) from the quiz api url and sets the quizTerm variable
  async function fetchQuizData() {
    const response = await fetch("http://127.0.0.1:8000/quiz/periode/api/");
    const jsonData = await response.json();
    setQuizTerm(jsonData);
  }

  return (
      <div>
        {quizTerm.map(term => (
            <div key={term.id}>{term.term}</div>
        ))}
      </div>
  );

}

// Fetches data from ListAllScores
function QuizScoreBox() {
  const [quizScore, setQuizScore] = useState([]);

  // Runs once HomePage component is loaded
  useEffect(() => {
    fetchQuizScore();
  }, []);

  // Gets all quiz score from the quiz api url and sets the quizScore
  async function fetchQuizScore() {
    const response = await fetch("http://127.0.0.1:8000/quiz/poeng/api/");
    const jsonData = await response.json();
    setQuizScore(jsonData);
  }

  return (
      <div>
        {quizScore.map(score => (
            <div key={score.id}>{score.score}</div>
        ))}
      </div>
  );

}

/*
// Fetches data from QuizTermDetails - data may be retrieved, updated and destroyed
function QuizTermDetailBox() {
  const [quizTermDetail, setQuizTermDetail] = useState([]);

  // Runs once HomePage component is loaded
  useEffect(() => {
    fetchTermDetail();
  }, []);


  // Gets all quiz score from the quiz api url and sets the quizScore
  async function fetchTermDetail() {
    const response = await fetch("http://127.0.0.1:8000/quiz/periode-detaljer/api/1"); // switch 1 with wanted integer/id
    const jsonData = await response.json();
    setQuizTermDetail(jsonData);
  }

    return (
      <div>
        {quizTermDetail.map(termDet => (
            <div key={termDet.id}>{termDet.is_active}</div>
        ))}
      </div>
  );

}

*/

export {QuizTermBox, QuizScoreBox};
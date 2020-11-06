import React, {useState, useEffect} from "react";
import "../../index.css";
import {Col, Row} from "../../components/FlexLayout";
import {P} from "../../components/Text";

function QuizTermBox() {
  // Declares var quizTerm and quizScores, and an update function, useState sets initial value to an empty list
  const [quizTerm, setQuizTerm] = useState([]);

  // Runs once HomePage component is loaded
  useEffect(() => {
      fetchQuizData();
  }, []);
  // Gets all quiz terms (and scores) from the quiz api url and sets the quizTerm variable
  async function fetchQuizData() {
    const response = await fetch("http://127.0.0.1:8000/quiz/api/");
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

function QuizScoreBox() {
  const [quizScore, setQuizScore] = useState([]);

  // Runs once HomePage component is loaded
  useEffect(() => {
    fetchQuizScore();
  }, []);

  // Gets all quiz score from the quiz api url and sets the quizScore
  async function fetchQuizScore() {
    const response = await fetch("http://127.0.0.1:8000/quiz/api/");
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

export {QuizTermBox ,  QuizScoreBox};
import React from "react";
import "./index.css";
import { ExampleForm } from "./components/Form";
import { HomePage } from "./pages/home/HomePage";
import { QuizTermBox } from "./pages/home/Quiz";

class ExampleApp extends React.Component {
  render() {
    return (
      <>
        <h1>Hello</h1>
        <QuizTermBox />
      </>
    );
  }
}

export default ExampleApp;

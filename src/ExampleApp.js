import React from "react";
import "./index.css";
import { ExampleForm } from "./components/Form";
import { HomePage } from "./pages/home/HomePage";

class ExampleApp extends React.Component {
  render() {
    return (
      <>
        <HomePage />
      </>
    );
  }
}

export default ExampleApp;

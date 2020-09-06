import React from "react";
import "./index.css";
import { ExampleForm } from "./components/Form";
import { HomePage } from "./pages/home/HomePage";
import { News } from "./pages/news/News";

class ExampleApp extends React.Component {
  render() {
    return (
      <>
        <News />
      </>
    );
  }
}

export default ExampleApp;

import React from "react";
import "./index.css";
import { ExampleForm } from "./components/Form";
import { HomePage } from "./pages/home/HomePage";
import { News } from "./pages/news/News";
import {NavBar} from "./components/NavBar";

class ExampleApp extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <News />
      </>
    );
  }
}

export default ExampleApp;

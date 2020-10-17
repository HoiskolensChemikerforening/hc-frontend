import React from "react";
import "./index.css";
import { NewsList } from "./pages/news/NewsList";

class ExampleApp extends React.Component {
  render() {
    return (
      <>
          <div style={{width: "600px"}}>
              <NewsList />
          </div>
      </>
    );
  }
}

export default ExampleApp;

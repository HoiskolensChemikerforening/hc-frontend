import React from "react";
import "./index.css";
import {NewsList} from "./pages/news/NewsList";
import {NewsDetail} from "./pages/news/NewsDetail";

class ExampleApp extends React.Component {
    render() {
        return (
            <>
                <NewsDetail/>
            </>
        );
    }
}

export default ExampleApp;

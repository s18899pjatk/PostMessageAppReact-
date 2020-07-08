import React, { Fragment } from "react";
import "./App.css";
import InputArea from "./components/InputArea";
import PostsArea from "./components/PostsArea";

function App() {
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <InputArea />
          <PostsArea />
        </header>
      </div>
    </Fragment>
  );
}

export default App;

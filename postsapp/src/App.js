import React, { useState, useEffect } from "react";
import "./App.css";
import InputArea from "./components/InputArea";
import PostsArea from "./components/PostsArea";

function App() {
  const [arr, setArray] = useState([]);

  const addHandler = async ({ txt_content }) => {
    try {
      const body = { txt_content };
      const response = await fetch("/api/posts/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      getPosts();
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const deletePost = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      console.log(deletePost);
      setArray(arr.filter((arr) => arr.post_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateHandler = async (id, { txt_content }) => {
    try {
      if (txt_content === "") return;
      const body = { txt_content };
      const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getPosts = async () => {
    try {
      const response = await fetch("/api/posts/");
      const jsonData = await response.json();
      setArray(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <InputArea addHandler={addHandler} />
          <PostsArea
            deleteHandler={deleteHandler}
            updateHandler={updateHandler}
            arr={arr}
          />
        </header>
      </div>
  );
}

export default App;

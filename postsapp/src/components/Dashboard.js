import React, { useState, useEffect } from "react";
import "../App.css";
import InputArea from "./InputArea";
import PostsArea from "./PostsArea";
import { Grid } from "@material-ui/core";
import Header from "./Header";

const Dashboard = ({ setAuth }) => {
  const [arr, setArray] = useState([]);
  const [name, setName] = useState("");

  const getName = async () => {
    try {
      const response = await fetch("/api/dashboard", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      setName(parseRes.user_name);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getName();
  });

  const addHandler = async ({ txt_content }) => {
    try {
      if (txt_content === "") return;
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
    <Grid container direction="column">
      <Grid item>
        <Header setAuth={setAuth} />
      </Grid>
      <Grid item container>
      <Grid item xs={1} />

        <h2>Welcome: {name}</h2>
      </Grid>
      <Grid item container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <InputArea addHandler={addHandler} />
          <PostsArea
            deleteHandler={deleteHandler}
            updateHandler={updateHandler}
            arr={arr}
          />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
};
export default Dashboard;

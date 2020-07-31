import React, { useState, useEffect } from "react";
import "../App.css";
import InputArea from "./InputArea";
import PostsArea from "./PostsArea";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import { toast } from "react-toastify";

const Dashboard = ({ setAuth }) => {
  const [arr, setArray] = useState([]);
  const [name, setName] = useState("");
  const [usr_id, setId] = useState("");

  const getName = async () => {
    try {
      const response = await fetch("/api/dashboard", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      setName(parseRes.user_name);
      setId(parseRes.user_id);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getName();
  });

  const addHandler = async ({ txt_content }, post_date, user_id) => {
    try {
      if (txt_content === "") return;
      const body = { txt_content, post_date, user_id };
      await fetch("/api/posts/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      getPosts();
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const getPost = await fetch(`/api/posts/${id}`, {
        method: "GET",
      });
      const parseRes = await getPost.json();
      if (parseRes[0].user_id !== usr_id) {
        toast.error("cannot delete someone's post");
        return;
      }
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      setArray(arr.filter((arr) => arr.post_id !== id));
      toast.info("deleted");
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateHandler = async (id, { txt_content }) => {
    try {
      const getPost = await fetch(`/api/posts/${id}`, {
        method: "GET",
      });
      const parseRes = await getPost.json();
      if (parseRes[0].user_id !== usr_id) {
        toast.error("cannot edit someone's post");
        return;
      }

      document.getElementById(`id${id}`).disabled = false;

      if (txt_content === "") return;

      const body = { txt_content };
      await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      toast.info("updated");
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
          <InputArea addHandler={addHandler} id={usr_id} />
          <PostsArea
            deleteHandler={deleteHandler}
            updateHandler={updateHandler}
            arr={arr}
            usrId={usr_id}
          />
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </Grid>
  );
};
export default Dashboard;

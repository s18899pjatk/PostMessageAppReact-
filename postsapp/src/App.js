import React, { useState, useEffect } from "react";
import "./App.css";
<<<<<<< HEAD
import { Grid } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

=======
import InputArea from "./components/InputArea";
import PostsArea from "./components/PostsArea";
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
>>>>>>> 5f5ffb817ca11d3bf831f8cf7f2955f441de7802
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

<<<<<<< HEAD
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
=======
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
>>>>>>> 5f5ffb817ca11d3bf831f8cf7f2955f441de7802
  };

  const isAuth = async () => {
    try {
<<<<<<< HEAD
      const resp = await fetch("/api/jwtAuth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await resp.json();
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
=======
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
>>>>>>> 5f5ffb817ca11d3bf831f8cf7f2955f441de7802
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    isAuth();
  });

  return (
<<<<<<< HEAD
    <Router>
      <Grid container>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Redirect to="/dashboard" />}
          />

          <Route
            exact
            path="/dashboard"
            render={(props) =>
              isAuthenticated ? (
                <Dashboard {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/login"
            render={(props) =>
              !isAuthenticated ? (
                <Login {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/dashboard" />
              )
            }
          />
          <Route
            exact
            path="/register"
            render={(props) =>
              !isAuthenticated ? (
                <Register {...props} setAuth={setAuth} />
              ) : (
                <Redirect to="/dashboard" />
              )
            }
          />
        </Switch>
      </Grid>
    </Router>
=======
    <Grid container direction="column">
      <Grid item>
        <Header />
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
>>>>>>> 5f5ffb817ca11d3bf831f8cf7f2955f441de7802
  );
}

export default App;

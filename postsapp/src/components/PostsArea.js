import React, { useState } from "react";
<<<<<<< HEAD
import { TextField, Button, Grid, Box } from "@material-ui/core";
=======
import { TextField, Button, Grid } from "@material-ui/core";
>>>>>>> 5f5ffb817ca11d3bf831f8cf7f2955f441de7802
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  deleteButton: {
<<<<<<< HEAD
    position: "relative",
  },
  updateButton: {
    position: "relative",
=======
    position: "absolute",
    top: "0",
    right: "0",
    margin: "10px",
  },
  updateButton: {
    position: "absolute",
    top: "5px",
    right: "50px",
    margin: "10px",
>>>>>>> 5f5ffb817ca11d3bf831f8cf7f2955f441de7802
  },
  container: {
    position: "relative",
  },
<<<<<<< HEAD

  hiddenDumb: {
    visibility: "hidden",
  },
=======
>>>>>>> 5f5ffb817ca11d3bf831f8cf7f2955f441de7802
}));

const PostsArea = ({ updateHandler, deleteHandler, arr }) => {
  const [txt_content, setText] = useState("");
  const classes = useStyles();
<<<<<<< HEAD
  const [m, setM] = useState("");

  const getUserEmail = async function (id) {
    try {
      const response = await fetch(`/api/jwtAuth/${id}`, {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      let email = parseRes[0].user_email;
      setM(email);
    } catch (error) {
      console.error(error.message);
    }
  };
=======
>>>>>>> 5f5ffb817ca11d3bf831f8cf7f2955f441de7802

  let posts = arr
    .slice(0)
    .reverse()
    .map((post) => (
      <Grid className={classes.container} key={post.post_id}>
<<<<<<< HEAD
        <Box borderTop={1} borderColor="primary.main">
          <Grid>
            <h4>
              {"Posted at " +
                post.post_date
                  .slice(0, post.post_date.length - 5)
                  .replace(/T/, " ")}
            </h4>
          </Grid>
          <TextField
            id={`id${post.post_id}`}
            multiline
            variant="outlined"
            rows={8}
            defaultValue={post.txt_content}
            xs={8}
            fullWidth
            onChange={(e) => setText(e.currentTarget.value)}
          />

          <IconButton
            className={classes.deleteButton}
            aria-label="delete"
            color="secondary"
            onClick={(e) => {
              e.preventDefault();
              deleteHandler(post.post_id);
            }}
          >
            <DeleteIcon />
          </IconButton>

          <Button
            className={classes.updateButton}
            variant="outlined"
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              updateHandler(post.post_id, { txt_content });
            }}
          >
            Edit
          </Button>
        </Box>
=======
        <TextField
          id={`id${post.post_id}`}
          multiline
          variant="outlined"
          rows={8}
          defaultValue={post.txt_content}
          xs={8}
          fullWidth
          onChange={(e) => setText(e.currentTarget.value)}
        />

        <IconButton
          className={classes.deleteButton}
          aria-label="delete"
          color="secondary"
          onClick={(e) => {
            e.preventDefault();
            deleteHandler(post.post_id);
          }}
        >
          <DeleteIcon />
        </IconButton>

        <Button
          className={classes.updateButton}
          variant="outlined"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            updateHandler(post.post_id, { txt_content });
          }}
        >
          Edit
        </Button>
>>>>>>> 5f5ffb817ca11d3bf831f8cf7f2955f441de7802
      </Grid>
    ));

  return (
    <Grid>
      <Grid>{posts}</Grid>
    </Grid>
  );
};
export default PostsArea;

import React, { useState } from "react";
import { TextField, Button, Grid, Box } from "@material-ui/core";
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
    position: "relative",
  },
  updateButton: {
    position: "relative",
  },
  container: {
    position: "relative",
  },

  hiddenDumb: {
    visibility: "hidden",
  },
}));

const PostsArea = ({ updateHandler, deleteHandler, arr }) => {
  const [txt_content, setText] = useState("");
  const classes = useStyles();
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

  let posts = arr
    .slice(0)
    .reverse()
    .map((post) => (
      <Grid className={classes.container} key={post.post_id}>
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
      </Grid>
    ));

  return (
    <Grid>
      <Grid>{posts}</Grid>
    </Grid>
  );
};
export default PostsArea;

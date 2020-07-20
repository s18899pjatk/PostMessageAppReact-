import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
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
  },
  container: {
    position: "relative",
  },
}));

const PostsArea = ({ updateHandler, deleteHandler, arr }) => {
  const [txt_content, setText] = useState("");
  const classes = useStyles();

  let posts = arr
    .slice(0)
    .reverse()
    .map((post) => (
      <Grid className={classes.container} key={post.post_id}>
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
        <Grid container>

        <h3>{}</h3>
        </Grid>
      </Grid>
    ));

  return (
    <Grid>
      <Grid>{posts}</Grid>
    </Grid>
  );
};
export default PostsArea;

import React, { useState } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  sendBtn: {
    position: "absolute",
    bottom: "20px",
    right: "10px",
    margin: theme.spacing(1),
  },
  writePost: {
    position: "relative",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
}));

const InputArea = ({ addHandler, id }) => {
  const [txt_content, setText] = useState("");
  const classes = useStyles();
  const date = new Date().toLocaleString();

  const submitHandler = (e) => {
    e.preventDefault();
    addHandler({ txt_content }, date, id);
    setText("");
  };

  return (
    <Grid className={classes.writePost}>
      <TextField
        className="txt"
        id="outlined-multiline-static"
        multiline
        variant="outlined"
        rows={8}
        value={txt_content}
        xs={8}
        fullWidth
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <Button
        className={classes.sendBtn}
        variant="contained"
        size="medium"
        color="primary"
        onClick={submitHandler}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
    </Grid>
  );
};

export default InputArea;

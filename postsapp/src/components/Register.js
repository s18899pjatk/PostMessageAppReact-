import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "blue",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  multilineColor: {
    color: "white",
  },

  floatingLabelFocusStyle: {
    color: "white",
  },
}));

const Regiser = ({ setAuth }) => {
  const classes = useStyles();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, email, password };
      const response = await fetch("/api/jwtAuth/register", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const parseResponse = await response.json();
      if (parseResponse.token) {
        localStorage.setItem("token", parseResponse.token);
        setAuth(true);
        toast.success("Registered");
      } else {
        setAuth(false);
        toast.error(parseResponse);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={onSubmitForm}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                InputProps={{
                  className: classes.multilineColor,
                }}
                InputLabelProps={{
                  className: classes.floatingLabelFocusStyle,
                }}
                defaultValue={name}
                onChange={(e) => onChange(e)}
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                InputProps={{
                  className: classes.multilineColor,
                }}
                InputLabelProps={{
                  className: classes.floatingLabelFocusStyle,
                }}
                defaultValue={email}
                onChange={(e) => onChange(e)}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                InputProps={{
                  className: classes.multilineColor,
                }}
                InputLabelProps={{
                  className: classes.floatingLabelFocusStyle,
                }}
                defaultValue={password}
                onChange={(e) => onChange(e)}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default Regiser;

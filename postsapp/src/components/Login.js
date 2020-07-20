import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://cdn.filestackcontent.com/G33P8iuoRuinYep5O6dt)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
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

const Login = ({ setAuth }) => {
  const classes = useStyles();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch("/api/jwtAuth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const parseResponse = await response.json();

      if (parseResponse.token) {
        localStorage.setItem("token", parseResponse.token);
        setAuth(true);
        toast.success("loged in");
      } else {
        setAuth(false);
        toast.error(parseResponse);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="primary">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={onSubmitForm}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              InputProps={{
                className: classes.multilineColor,
              }}
              InputLabelProps={{
                className: classes.floatingLabelFocusStyle,
              }}
              defaultValue={email}
              onChange={(e) => onChange(e)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default Login;

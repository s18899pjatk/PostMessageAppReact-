import React from "react";
<<<<<<< HEAD
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  cicon: {},
}));

const Header = ({ setAuth }) => {
  const classes = useStyles();
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
    toast.info("logged out");
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography>POSTS</Typography>
          <Grid item xs={12} />
          {auth && (
            <Grid>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={(e) => handleLogOut(e)}>Logout</MenuItem>
              </Menu>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
=======
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography>POSTS</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
>>>>>>> 5f5ffb817ca11d3bf831f8cf7f2955f441de7802

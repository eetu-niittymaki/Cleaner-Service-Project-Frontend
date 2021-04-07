import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 20,
    textAlign: "left",
  },
  buttons: {},
  button: {
    minWidth: 150,
    display: "block",
    margin: 10,
  },
}));

const HeaderComponent = ({ onChangePage }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("Clicked menu button");
  };

  const handleClose = (nav) => {
    setAnchorEl(null);
    console.log("nav is" + nav);
    //onChangePage(nav);
    window.location.href = nav;
  };

  const clickedLogin = () => {
    console.log("clicked login button");
  };

  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.title}>
          <Typography variant="h3">CleanBuddy</Typography>
          <Typography variant="h6">Siivouspalvelut helposti netistä</Typography>
        </div>
        <div className={classes.buttons}>
          <Button
            className={classes.button}
            size="large"
            variant="outlined"
            color="inherit"
            onClick={clickedLogin}
          >
            Login
          </Button>
          <Button
            className={classes.button}
            size="large"
            variant="outlined"
            color="inherit"
            startIcon={<MenuIcon />}
            onClick={handleClick}
          >
            Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: -65, horizontal: "center" }}
            //aria-label="menu"
            //aria-haspopup="true"
          >
            <MenuItem onClick={() => handleClose("/info")}>
              Tietoa palvelusta
            </MenuItem>
            <MenuItem onClick={() => handleClose("/")}>Pikatarjoukset</MenuItem>
            <MenuItem onClick={() => handleClose("/companies")}>
              Palveluntarjoajat
            </MenuItem>
            <MenuItem onClick={() => handleClose("/tarjouspyynto")}>
              Pyydä tarjous
            </MenuItem>
            <MenuItem onClick={() => handleClose("/privacy")}>
              Tietosuojaseloste
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;

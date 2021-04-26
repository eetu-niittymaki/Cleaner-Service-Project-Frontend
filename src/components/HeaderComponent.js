import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

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
  login: {
    margin: 50,
  },
}));

const HeaderComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [adminRights, setAdminRights] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const PORT = (8080 || process.env.PORT)

  const setToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("Clicked menu button");
  };

  const handleClose = (nav) => {
    setAnchorEl(null);
    console.log("nav is" + nav);
    //onChangePage(nav);
    //<Redirect to={nav.toString()} />;
    window.location.href = nav;
  };
  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleLogin = async () => {
    if (email && password) {
      const login = await axios.post(
        `https://clean-buddy.herokuapp.com/api/auth/signin`,
        {
          email: email,
          password: password,
        }
      );
      if (login.status === 204) {
        alert("Väärä sähköposti/salasana!");
      } else if (login.status === 200) {
        setToken(login.token);
        window.location.href = "/mypage/customer";
        handleModalClose();
      }
    } else {
      alert("Give email and password");
    }

    //return <Redirect to="/companies/" />;
  };

  const clickedLogin = () => {
    console.log("clicked login button");
    handleModalOpen();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // if user is admin, dropdown menu will have an Admin button
  const checkIfAdmin = () => {
    //TODO
    //check from backend if current user has admin rights
    setAdminRights(true);
  };
  useEffect(() => {
    checkIfAdmin();
  }, []);

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
          <div>
            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
            <Dialog
              open={open}
              maxWidth="sm"
              onClose={handleModalClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">
                Sisäänkirjautuminen:
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Kirjaudu omille sivuillesi kirjoittamalla sähköpostiosoite ja
                  salasana.
                </DialogContentText>
                <TextField
                  required
                  autoFocus
                  variant="outlined"
                  margin="normal"
                  id="email"
                  label="Sähköpostiosoite"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  fullWidth
                />
                <TextField
                  required
                  autoFocus
                  variant="outlined"
                  margin="normal"
                  id="password"
                  label="Salasana"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button
                  variant="outlined"
                  onClick={handleModalClose}
                  color="primary"
                >
                  Peruuta
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleLogin}
                  color="primary"
                >
                  Kirjaudu sisään
                </Button>
              </DialogActions>
            </Dialog>
          </div>
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
            //this line caused an error
            //anchorOrigin={{ vertical: "bottom", horizontal: "center" }}

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
            <MenuItem onClick={() => handleClose("/offerRequest")}>
              Pyydä tarjous
            </MenuItem>
            <MenuItem onClick={() => handleClose("/privacy")}>
              Tietosuojaseloste
            </MenuItem>

            {adminRights ? (
              <MenuItem onClick={() => handleClose("/admin")}>Admin</MenuItem>
            ) : null}
            <MenuItem onClick={() => handleClose("/mypage/customer/")}>
              Customer myPages
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;

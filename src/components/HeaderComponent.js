import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Menu,
  MenuItem,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 30,
    marginBottom: 30,
    //marginLeft: 20,
    display: "block",
    textAlign: "left",
  },
  button: {
    margin: 10,
  },
  login: {
    //margin: 50,
  },
  frontLink: {
    textDecoration: "none",
    color: "white",
  },
}));

const HeaderComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [adminRights, setAdminRights] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [customerId, setCustomerId] = useState()

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
        //`http://localhost:8080/api/auth/signin`,
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
        setCustomerId(login.customer_id)
        window.location.href = "/mypage/customer";
        handleModalClose();
      }
    } else {
      alert("Give email and password");
    }
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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <div className={classes.title}>
                <Typography variant="h3">CleanBuddy</Typography>
                <Typography variant="h6">
                  Siivouspalvelut helposti netistä
                </Typography>
              </div>
            </Link>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              className={classes.button}
              size="large"
              variant="outlined"
              color="inherit"
              fullWidth
              onClick={clickedLogin}
            >
              Login
            </Button>
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
                <div>
                  <Link to="/signup" onClick={handleModalClose}>
                    Luo uusi käyttäjätili
                  </Link>
                </div>
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
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              className={classes.button}
              size="large"
              variant="outlined"
              color="inherit"
              startIcon={<MenuIcon />}
              onClick={handleClick}
              fullWidth
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

              transformOrigin={{ vertical: -50, horizontal: 20 }}
              //aria-label="menu"
              //aria-haspopup="true"
            >
              <MenuItem onClick={() => handleClose("/info")}>
                Tietoa palvelusta
              </MenuItem>
              <MenuItem onClick={() => handleClose("/")}>
                Pikatarjoukset
              </MenuItem>
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
              <MenuItem onClick={() => handleClose("/mypage/company/")}>
                Company myPages
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
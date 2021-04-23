import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import React, { useState, useEffect } from "react";
import HeaderComponent from "./HeaderComponent";
import "./styles/TextPage.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    //margin: theme.spacing(1),
    minWidth: "100%",
    marginBottom: theme.spacing(2),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const handleClick = () => {
  //TODO: send special order data and create new special offer
  console.log("create new special offer and go to companyfront");
  window.location.href = "/mypage/company";
};

const CreateSpecialOffer = () => {
  const styles = useStyles();

  return (
    <div>
      <HeaderComponent />
      <div>
        <h1>Luo uusi pikatarjous:</h1>
        <div className="TextContainer">
          <form
            style={{ textAlign: "left", marginBottom: 30 }}
            autoComplete="false"
          >
            <TextField
              className={styles.formControl}
              required
              id="special-offer-title"
              label="Otsikko"
              placeholder="Otsikko"
              variant="outlined"
            />
            <TextField
              className={styles.formControl}
              required
              id="special-offer-time"
              label="Kesto"
              placeholder="Kesto"
              variant="outlined"
            />
            <TextField
              className={styles.formControl}
              required
              id="special-offer-price"
              label="Hinta"
              placeholder="Hinta"
              variant="outlined"
            />
            <TextField
              className={styles.formControl}
              id="description"
              label="Kuvaus"
              fullWidth
              multiline
              rows={4}
              rowsMax={7}
              placeholder="Anna tarkempi kuvaus siivouksen yksityiskohdista."
              variant="outlined"
            />
          </form>
        </div>
      </div>
      <div className="bottomButtons">
        <Button
          variant="outlined"
          size="large"
          color="primary"
          onClick={handleClick}
        >
          Luo pikatarjous
        </Button>
      </div>
    </div>
  );
};

export default CreateSpecialOffer;

import { TextField, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
          <Grid className={styles.info} container spacing={1} p={2} m={2}>
            <Grid item xs={6} ml={2}>
              <Button
                variant="outlined"
                size="large"
                color="primary"
                fullWidth
                onClick={() => (window.location.href = "/mypage/company")}
              >
                Takaisin
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                size="large"
                color="primary"
                fullWidth
                onClick={handleClick}
              >
                Luo pikatarjous
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default CreateSpecialOffer;

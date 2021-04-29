import { TextField, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import HeaderComponent from "./HeaderComponent";
import BackendConnection from "./BackendConnection.js";
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

const CreateSpecialOffer = () => {
  const styles = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(100);
  //TODO: Change duration to real duration
  const [duration, setDuration] = useState(3);

  const handleClick = () => {
    //TODO: send special order data and create new special offer
    console.log(`Sending values: ${title}
    ${description}\n ${price}`);
    const offer = {
      product_name: "perusteellisempi siivous",
      product_description: "joku kuvausteksti",
      product_price: 100,
    };
    BackendConnection.postSpecialOffer(offer);
    //const priceToDouble = parseFloat(price).toFixed(2);
    if (checkValues()) {
      console.log("create new special offer and go to companyfront");
      /*BackendConnection.postSpecialOffer({
        product_name: title,
        product_description: description,
        product_price: 100,
      });*/
      window.location.href = "/mypage/company";
    } else {
      alert("Tarkista pikatarjouksen tiedot");
    }
  };

  // Checking that title and description have content and price is positive
  const checkValues = () => {
    return title !== "" && description !== "" && price >= 0;
  };

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
              onChange={(event) => setTitle(event.target.value)}
            />
            <TextField
              className={styles.formControl}
              required
              id="special-offer-time"
              label="Kesto"
              placeholder="Kesto"
              variant="outlined"
              onChange={(event) => setDuration(event.target.value)}
            />
            <TextField
              className={styles.formControl}
              required
              id="special-offer-price"
              label="Hinta"
              placeholder="Hinta"
              variant="outlined"
              onChange={(event) => setPrice(event.target.value)}
            />
            <TextField
              className={styles.formControl}
              required
              id="description"
              label="Kuvaus"
              fullWidth
              multiline
              rows={4}
              rowsMax={7}
              placeholder="Anna tarkempi kuvaus siivouksen yksityiskohdista."
              variant="outlined"
              onChange={(event) => setDescription(event.target.value)}
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

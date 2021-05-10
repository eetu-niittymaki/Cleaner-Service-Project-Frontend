import { TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import BackendConnection from "./BackendConnection.js";
import "./styles/TextPage.css";
import { PurpleButton } from "./CustomButtons";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "100%",
    marginBottom: theme.spacing(2),
  },
}));

const CreateSpecialOffer = ({ companyId }) => {
  const styles = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  //TODO: Change duration to real duration
  const [duration, setDuration] = useState(0);

  const handleClick = () => {
    //TODO: send special order data and create new special offer
    const offer = {
      supplier_id: companyId,
      product_name: title,
      product_description: description,
      product_price: price,
      ends_at: "2021-05-20",
      work_hours: duration,
      product_is_available: 1,
    };
    //console.log(JSON.stringify(offer));
    if (checkValues()) {
      console.log("create new special offer and go to companyfront");
      BackendConnection.postSpecialOffer({
        supplier_name: "Siivouspojat Oy",
        product_name: "Testitarjous",
        product_description: "Astetta parempi imurointi",
        product_price: 100,
        ends_at: null,
        work_hours: 5.5,
        is_available: true,
      });
      window.location.href = "/mypage/company";
    } else {
      alert("Tarkista pikatarjouksen tiedot");
    }
  };

  // Checking that title and description have content and price is positive
  const checkValues = () => {
    return title !== "" && description !== "" && price >= 0 && duration >= 0;
  };

  return (
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
            onChange={(event) =>
              setDuration(parseFloat(event.target.value).toFixed(2))
            }
          />
          <TextField
            className={styles.formControl}
            required
            id="special-offer-price"
            label="Hinta"
            placeholder="Hinta"
            variant="outlined"
            onChange={(event) =>
              setPrice(parseFloat(event.target.value).toFixed(2))
            }
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
            <PurpleButton
              variant="outlined"
              size="large"
              color="primary"
              fullWidth
              onClick={() => (window.location.href = "/mypage/company")}
            >
              Takaisin
            </PurpleButton>
          </Grid>
          <Grid item xs={6}>
            <PurpleButton
              variant="outlined"
              size="large"
              color="primary"
              fullWidth
              onClick={handleClick}
            >
              Luo pikatarjous
            </PurpleButton>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CreateSpecialOffer;

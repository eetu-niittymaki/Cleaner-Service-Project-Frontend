import { TextField, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
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

/*
created_at: "2021-04-29T10:16:16.000Z"

ends_at: "0000-00-00"

product_description: "Siivoon"

product_id: 16

product_is_available: 0

product_name: "Mä tuun siivoon"

product_price: 2.5

supplier_id: null

work_hours: 0
*/

const AdminModifyOfferData = ({ oData, oSave, oDelete }) => {
  const [offer, setOffer] = useState(null);
  const styles = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(100);
  //TODO: Change duration to real duration
  //const [duration, setDuration] = useState(3);

  const fillValues = (comp) => {
    setTitle(comp.product_name);
    setDescription(comp.product_description);
    setPrice(comp.product_price);
    //setDuration(comp.postcode);
    
  };

  useEffect(() => {
    const loadCompanyData = async () => {
      
        setOffer(oData);
        fillValues(oData);
      
    };
    loadCompanyData();
  }, []);

  // Checking that title and description have content and price is positive
  const checkValues = () => {
    return title !== "" && description !== "" && price >= 0;
  };

  return (
      <div>
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
              value={title}
              variant="outlined"
              onChange={(event) => setTitle(event.target.value)}
            />
            <TextField
              className={styles.formControl}
              required
              id="special-offer-price"
              label="Hinta"
              placeholder="Hinta"
              value={price}
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
              value={description}
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
                onClick={() => oSave()}
              >
                Tallenna
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                size="large"
                color="primary"
                fullWidth
                onClick={() => oDelete()}
              >
                Poista
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
  );
}

export default AdminModifyOfferData;
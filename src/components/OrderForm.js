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
import SpecialOfferDataBox from "./SpecialOfferDataBox";

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

const OrderForm = ({ specialOfferId }) => {
  const styles = useStyles();
  const [specialOffer, setSpecialOffer] = useState({});

  useEffect(() => {
    console.log("apartment type or area changed");
  }, []);

  return (
    <div>
      <HeaderComponent />
      <div>
        <h1>Tilauksen tiedot:</h1>
        <div className="TextContainer">
          <form
            style={{ textAlign: "left", marginBottom: 30 }}
            autoComplete="false"
          >
            <h3>Siivoustarjouksen tiedot:</h3>
            <SpecialOfferDataBox specialOffer={specialOffer} />
          </form>
          <form style={{ textAlign: "left" }}>
            <h3>Asiakkaan tiedot:</h3>
            <div>
              <TextField
                className={styles.formControl}
                required
                id="standard-required"
                label="Etunimi"
                placeholder="Etunimi"
                variant="outlined"
              />
              <TextField
                className={styles.formControl}
                required
                id="standard-required"
                label="Sukunimi"
                placeholder="Sukunimi"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                className={styles.formControl}
                required
                id="standard-required"
                label="Osoite"
                placeholder="Osoite"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                className={styles.formControl}
                required
                id="standard-required"
                label="Postinumero"
                placeholder="Postinumero"
                variant="outlined"
              />
              <TextField
                className={styles.formControl}
                required
                id="standard-required"
                label="Postitoimipaikka"
                placeholder="Postitoimipaikka"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                className={styles.formControl}
                id="standard-required"
                label="Puhelinnumero"
                placeholder="Puhelinnumero"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                className={styles.formControl}
                required
                id="standard-required"
                type="email"
                label="Sähköpostiosoite"
                placeholder="Sähköpostiosoite"
                variant="outlined"
              />
            </div>
            <TextField
              className={styles.formControl}
              id="standard-required"
              label="Lisätietoa"
              fullWidth
              multiline
              rows={4}
              rowsMax={7}
              placeholder="Tähän voit antaa lisätietoa, esimerkiksi onko asunnossa lemmikkejä."
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
          onClick={() => (window.location.href = "/")}
        >
          Vahvista tilaus
        </Button>
      </div>
    </div>
  );
};

export default OrderForm;

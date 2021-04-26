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

const ModifyCompanyData = ({ company }) => {
  const styles = useStyles();
  if (!company) {
    company = exampledata;
  }
  const [name, setName] = useState(company.name);
  const [phone, setPhone] = useState(company.phone);
  const [address, setAddress] = useState(company.street_address);
  const [postcode, setPostcode] = useState(company.postcode);
  const [city, setCity] = useState(company.city);
  const [email, setEmail] = useState(company.email);
  const [description, setDescription] = useState(company.supplier_description);

  const exampledata = {
    id: 1,
    name: "Siivouspojat Ab",
    contactPerson: "Jussi Mäkinen",
    phone: "040 5544671",
    streetAddress: "Mäkitie 3",
    postcode: "36100",
    city: "Tampere",
    email: "asiakaspalvelu@siivouspojat.fi",
    supplier_description: "Tehdään loistavaa jälkeä",
  };
  const handleClick = () => {
    //TODO: send modified data to db

    if (checkValues()) {
      console.log("post modification and go to companyfront");
      /*BackendConnection.postSpecialOffer({
        product_name: title,
        product_description: description,
        product_price: 100,
      });*/
      window.location.href = "/mypage/company";
    } else {
      alert("Jokin kenttä on jätetty tyhjäksi, tarkista tiedot.");
    }
  };

  // Checking that title and description have content and price is positive
  const checkValues = () => {
    return (
      name !== "" &&
      description !== "" &&
      phone !== "" &&
      postcode !== "" &&
      address !== "" &&
      city !== "" &&
      email !== ""
    );
  };

  return (
    <div>
      <HeaderComponent />
      <div>
        <h1>Muokkaa yrityksen tietoja:</h1>
        <div className="TextContainer">
          <form
            style={{ textAlign: "left", marginBottom: 30 }}
            autoComplete="false"
          >
            <TextField
              className={styles.formControl}
              required
              id="modify-name"
              label="Yrityksen nimi"
              placeholder="Yrityksen nimi"
              variant="outlined"
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              className={styles.formControl}
              required
              id="modify-phone"
              label="Puhelinnumero"
              placeholder="Puhelinnumero"
              variant="outlined"
              onChange={(event) => setPhone(event.target.value)}
            />
            <TextField
              className={styles.formControl}
              required
              id="modify-address"
              label="Osoite"
              placeholder="Osoite"
              variant="outlined"
              onChange={(event) => setAddress(event.target.value)}
            />
            <TextField
              className={styles.formControl}
              required
              id="modify-postcode"
              label="Postinumero"
              placeholder="Postinumero"
              variant="outlined"
              onChange={(event) => setPostcode(event.target.value)}
            />
            <TextField
              className={styles.formControl}
              required
              id="modify-city"
              label="Postitoimipaikka"
              placeholder="Postitoimipaikka"
              variant="outlined"
              onChange={(event) => setCity(event.target.value)}
            />
            <TextField
              className={styles.formControl}
              required
              id="modify-email"
              label="Sähköpostiosoite"
              placeholder="Sähköpostiosoite"
              variant="outlined"
              onChange={(event) => setEmail(event.target.value)}
            />
            {/* <TextField
              className={styles.formControl}
              required
              id="modify-description"
              label="Kuvaus"
              fullWidth
              multiline
              rows={4}
              rowsMax={7}
              placeholder="Yrityksen kuvaus"
              variant="outlined"
              onChange={(event) => setDescription(event.target.value)}
            /> */}
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
                Tallenna muutokset
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ModifyCompanyData;

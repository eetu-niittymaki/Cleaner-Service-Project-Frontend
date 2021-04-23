import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import HeaderComponent from "./HeaderComponent";
import "./styles/TextPage.css";
import Connection from "./BackendConnection";
//import Box from "@material-ui/core/Box";
//import Grid from "@material-ui/core/Grid";
import { Paper, Grid, Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  info: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  leftColumn: {
    textAlign: "right",
  },
  rightColumn: {
    textAlign: "left",
  },
}));

const CompanyFront = () => {
  const styles = useStyles();

  const exampleData = {
    id: 1,
    name: "Siivouspojat Ab",
    contactPerson: "Jussi Mäkinen",
    phone: "040 5544671",
    address: "Mäkitie 3",
    postnumber: "36100",
    city: "Tampere",
    email: "asiakaspalvelu@siivouspojat.fi",
    description: "Tehdään loistavaa jälkeä",
  };
  const [company, setCompany] = useState(exampleData);

  const handleChange = (event) => {};

  const readCompanies = async () => {
    try {
      const companies = Connection.getAllCompanies();
      setCompany(companies);
    } catch (e) {
      alert("Problem with getting companies");
    }
  };

  // Get companies
  useEffect(() => {
    //console.log("fetching company data");
    //readCompanies();
    /*fetch("https://clean-buddy.herokuapp.com/api/suppliers")
      .then((res) => res.json())
      .then((data) => setCompany(data));
      */
    //companies();
  }, []);

  const companies = () => {
    if (company.length !== 0) {
      let ui = company.map((company) => (
        <li key={company.supplier_id}>
          {company.name} - {company.phone} - {company.email} -{" "}
        </li>
      ));
      return ui;
    }
  };

  return (
    <div>
      <HeaderComponent />

      <h1>Tervetuloa yrityksen omille sivuille!</h1>

      <h3>Tässä on yrityksen yhteystiedot.</h3>
      {/* <Paper variant="outlined" elevation={3} p={2}> */}
      <Box border={1} m={2} p={1}>
        <Grid className={styles.info} container spacing={1} p={2} mb={2}>
          <Grid className={styles.leftColumn} item xs={4} sm={5}>
            Yrityksen nimi:
          </Grid>
          <Grid item xs={1} />
          <Grid className={styles.rightColumn} item xs={7} sm={6}>
            {company.name}
          </Grid>
          <Grid className={styles.leftColumn} item xs={4} sm={5}>
            Yhteyshenkilö:
          </Grid>
          <Grid item xs={1} />
          <Grid className={styles.rightColumn} item xs={7} sm={6}>
            {company.contactPerson}
          </Grid>
          <Grid className={styles.leftColumn} item xs={4} sm={5}>
            Puhelinnumero:
          </Grid>
          <Grid item xs={1} />
          <Grid className={styles.rightColumn} item xs={7} sm={6}>
            {company.phone}
          </Grid>
          <Grid className={styles.leftColumn} item xs={4} sm={5}>
            Osoite:
          </Grid>
          <Grid item xs={1} />
          <Grid className={styles.rightColumn} item xs={7} sm={6}>
            {company.address}
          </Grid>
          <Grid className={styles.leftColumn} item xs={4} sm={5}>
            Postinumero:
          </Grid>
          <Grid item xs={1} />
          <Grid className={styles.rightColumn} item xs={7} sm={6}>
            {company.postnumber}
          </Grid>
          <Grid className={styles.leftColumn} item xs={4} sm={5}>
            Postitoimipaikka:
          </Grid>
          <Grid item xs={1} />
          <Grid className={styles.rightColumn} item xs={7} sm={6}>
            {company.city}
          </Grid>
          <Grid className={styles.leftColumn} item xs={4} sm={5}>
            Sähköpostiosoite:
          </Grid>
          <Grid item xs={1} />
          <Grid className={styles.rightColumn} item xs={7} sm={6}>
            {company.email}
          </Grid>
        </Grid>
        <div className={styles.info}>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            //onClick={() => (window.location.href = "/")}
          >
            Muokkaa tietoja
          </Button>
        </div>
      </Box>
      {/* </Paper> */}
    </div>
  );
};

export default CompanyFront;

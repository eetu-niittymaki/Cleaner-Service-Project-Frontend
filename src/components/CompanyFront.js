import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import HeaderComponent from "./HeaderComponent";
import "./styles/TextPage.css";
import Connection from "./BackendConnection";
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

const CompanyFront = ({ companyId }) => {
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

  useEffect(() => {
    // Load all companies from database and search with given props companyId
    const loadCompanyData = async () => {
      const temp = await Connection.getAllCompanies();
      if (temp.length > 0) {
        temp.filter((comp) => comp.supplier_id === companyId);
        setCompany(temp[0]);
      }
    };
    loadCompanyData();
  }, [companyId]);

  return (
    <div>
      <HeaderComponent />

      <h1>Tervetuloa yrityksen omille sivuille!</h1>
      <Box m={1} p={2}>
        <Grid className={styles.info} container spacing={1} p={2} mb={2}>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              fullWidth
              //onClick={() => (window.location.href = "/")}
            >
              Luo pikatarjous
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              fullWidth
              //onClick={() => (window.location.href = "/")}
            >
              Katso tarjouspyynnöt
            </Button>
          </Grid>
        </Grid>
      </Box>
      <h3>Tässä on yrityksen yhteystiedot.</h3>
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
            {company.street_address}
          </Grid>
          <Grid className={styles.leftColumn} item xs={4} sm={5}>
            Postinumero:
          </Grid>
          <Grid item xs={1} />
          <Grid className={styles.rightColumn} item xs={7} sm={6}>
            {company.postcode}
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
      <Box border={1} m={2} p={3}>
        <div>Data from database is now: {JSON.stringify(company)}</div>
      </Box>
    </div>
  );
};

export default CompanyFront;

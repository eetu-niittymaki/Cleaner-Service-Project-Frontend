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
import Checkbox from "@material-ui/core/Checkbox";
import React, { useState, useEffect } from "react";
import HeaderComponent from "./HeaderComponent";
import "./styles/TextPage.css";
import Connection from "./BackendConnection";
import Box from "@material-ui/core/Box";

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

const CompanyFront = () => {
  const styles = useStyles();

  const exampleData = {
    id: 1,
    name: "Siivouspojat Ab",
    contactPerson: "Jussi Mäkinen",
    phonenumber: "040 5544671",
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
      <Box border={1} mb={2} p={1}>
        <div>Yrityksen nimi: {company.name}</div>
        <div>Yhteyshenkilö: {company.contactPerson}</div>
        <div>Puhelinnumero: {company.phone}</div>
        <div>Osoite: {company.address}</div>
        <div>Postinumero: {company.postnumber}</div>
        <div>Postitoimipaikka: {company.city}</div>
        <div>Sähköpostiosoite: {company.email}</div>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          //onClick={() => (window.location.href = "/")}
        >
          Muokkaa tietoja
        </Button>
      </Box>
    </div>
  );
};

export default CompanyFront;

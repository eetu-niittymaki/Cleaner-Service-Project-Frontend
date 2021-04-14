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

const OfferRequest = () => {
  const styles = useStyles();

  const [apartmentType, setApartmentType] = useState("");
  const [apartmentArea, setApartmentArea] = useState("");
  const [frequency, setFrequency] = useState("");

  useEffect(() => {
    console.log("apartment type or area changed");
  }, [apartmentType, apartmentArea]);

  const handleChange = (event) => {
    setApartmentType(event.target.value);
  };

  const [companies, setCompanies] = useState({
    siivouspojat: false,
    yritys: false,
    duuniapukkaa: false,
  });

  const { siivouspojat, yritys, duuniapukkaa } = companies;
  const error =
    [siivouspojat, yritys, duuniapukkaa].filter((v) => v).length < 1;

  return (
    <div>
      <HeaderComponent />
      <div>
        <h1>Pyydä tarjous:</h1>
        <div className="TextContainer">
          <form
            style={{ textAlign: "left", marginBottom: 30 }}
            autoComplete="false"
          >
            <h3>Siivottavan kohteen tiedot</h3>
            <FormControl variant="outlined" className={styles.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Asuntotyyppi
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={apartmentType}
                onChange={(event) => setApartmentType(event.target.value)}
                //onChange={handleChange}
                label="Asuntotyyppi"
              >
                <MenuItem value="" disabled>
                  Valitse asuntotyyppi
                </MenuItem>
                <MenuItem value={"kerrostalo"}>Kerrostalo</MenuItem>
                <MenuItem value={"omakotitalo"}>Omakotitalo</MenuItem>
                <MenuItem value={"rivitalo"}>Rivitalo</MenuItem>
                <MenuItem value={"muu asunto"}>Muu asuntotyyppi</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={styles.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Asuinpinta-ala
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-weight"
                value={apartmentArea}
                onChange={(event) => setApartmentArea(event.target.value)}
                endAdornment={
                  <InputAdornment position="end">m2</InputAdornment>
                }
                label="Asuinpinta-ala"
              />
            </FormControl>
            <FormControl variant="outlined" className={styles.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Siivoustiheys
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={frequency}
                onChange={(event) => setFrequency(event.target.value)}
                //onChange={handleChange}
                label="Siivoustiheys"
              >
                <MenuItem value="" disabled>
                  Valitse siivoustiheys
                </MenuItem>
                <MenuItem value={"kerran"}>Kertasiivous</MenuItem>
                <MenuItem value={"1 / vko"}>1 kerran viikossa</MenuItem>
                <MenuItem value={"2 / kk"}>2 kertaa kuukaudessa</MenuItem>
                <MenuItem value={"1 /kk"}>1 kerran kuukaudessa</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              required
              error={error}
              component="fieldset"
              className={styles.formControl}
            >
              <FormLabel component="legend">
                Valitse palveluntarjoajat, joilta tahdot tarjouksen
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={siivouspojat}
                      onChange={(event) =>
                        setCompanies({
                          ...companies,
                          [event.target.name]: event.target.checked,
                        })
                      }
                      name="siivouspojat"
                    />
                  }
                  label="Siivouspojat"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={yritys}
                      onChange={(event) =>
                        setCompanies({
                          ...companies,
                          [event.target.name]: event.target.checked,
                        })
                      }
                      name="yritys"
                    />
                  }
                  label="Yritys Oy"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={duuniapukkaa}
                      onChange={(event) =>
                        setCompanies({
                          ...companies,
                          [event.target.name]: event.target.checked,
                        })
                      }
                      name="duuniapukkaa"
                    />
                  }
                  label="DuuniaPukkaa"
                />
              </FormGroup>
              {/* <FormHelperText display={error}>
                Valitse vähintään yksi palveluntarjoaja
              </FormHelperText> */}
            </FormControl>
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
                placeholder="Postinumer"
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
                label="Sähköpostiosoite"
                placeholder="Sähköpostiosoite"
                variant="outlined"
              />
            </div>
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
          Lähetä
        </Button>
      </div>
    </div>
  );
};

export default OfferRequest;

import React from "react";
import { Box, Grid, Button } from "@material-ui/core";
import "./styles/SpecialOffer.css";
import { makeStyles } from "@material-ui/core/styles";
import { PurpleButton } from "./CustomButtons";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#FFDEF1",
    padding: 10,
    borderRadius: 5,
  },
  leftColumn: {
    backgroundColor: "#F8F9F6",
    borderRadius: 5,
    textAlign: "left",
    color: "black",
  },
  rightColumn: {
    textAlign: "right",
  },
  title: {
    color: "#A6038D",
  },
  // button: {
  //   "&:hover": {
  //     background: "#f00",
  //   },
  // },
}));

const SpecialOffer = ({
  id,
  title,
  companyName,
  duration,
  price,
  description,
}) => {
  const styles = useStyles();
  return (
    <Box className="SpecialOffer" border={1} mb={2} p={1}>
      <Grid container spacing={1} className={styles.container}>
        {/* <Grid item xs={1} sm={2} /> */}
        <Grid item xs={6} sm={6} className={styles.leftColumn}>
          <div>
            <h2 className={styles.title}>{title}</h2>
            <p>Kesto: {duration}h</p>
            <p>Hinta: {price}€</p>
            <p>Yritys: {companyName}</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={styles.rightColumn}>
          <PurpleButton
            className={styles.button}
            //color="secondary"
            size="large"
            variant="contained"
            onClick={() => (window.location.href = `/orderform/${id}`)}
          >
            Osta diili!
            {/* <Link to={`/orderform/${id}`}>Osta diili! </Link> */}
          </PurpleButton>
          <p>{description}</p>
        </Grid>

        {/* <Grid item xs={1} sm={2} /> */}
      </Grid>
      {/* <div className="OfferContainer">
        <div className="FlexIt1">
          <h2>{title}</h2>
          <p>Kesto: {duration}h</p>
          <p>Hinta: {price}€</p>
          <p>Yritys: {companyName}</p>
        </div>
        <div className="FlexIt2">
          <Button
            color="secondary"
            size="large"
            variant="outlined"
            onClick={() => (window.location.href = `/orderform/${id}`)}
          >
            Osta diili!
          </Button>
        </div>
        <div className="FlexIt3">
          <p>{description}</p>
        </div>
      </div> */}
    </Box>
  );
};

export default SpecialOffer;

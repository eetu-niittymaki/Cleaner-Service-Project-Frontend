import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  backButton: {
    textAlign: "center",
  },
  leftColumn: {
    textAlign: "right",
  },
  rightColumn: {
    textAlign: "left",
  },
}));

const CompOffReqBox = ({ offerReq }) => {
  const styles = useStyles();
  const [offerRequest, setOfferRequest] = useState(offerReq);

  if (offerReq !== null) {
    return (
      <Box border={1} m={1} p={2}>
        <Grid className={styles.info} container spacing={1} p={2} mb={2}>
          <Grid className={styles.leftColumn} item xs={5}>
            ID:
          </Grid>
          <Grid className={styles.rightColumn} item xs={7}>
            {offerRequest.request_id}
          </Grid>
          <Grid className={styles.leftColumn} item xs={5}>
            Asuntotyyppi:
          </Grid>
          <Grid className={styles.rightColumn} item xs={7}>
            {offerRequest.apartment_type}
          </Grid>
          <Grid className={styles.leftColumn} item xs={5}>
            Asunnon pinta-ala:
          </Grid>
          <Grid className={styles.rightColumn} item xs={7}>
            {offerRequest.apartment_area}
          </Grid>
          <Grid className={styles.leftColumn} item xs={5}>
            Siivoustiheys:
          </Grid>
          <Grid className={styles.rightColumn} item xs={7}>
            {offerRequest.cleaning_frequency}
          </Grid>
          <Grid className={styles.leftColumn} item xs={5}>
            Asiakas:
          </Grid>
          <Grid className={styles.rightColumn} item xs={7}>
            {offerRequest.first_name} {offerRequest.last_name}
          </Grid>
          <Grid className={styles.leftColumn} item xs={5}>
            Osoite:
          </Grid>
          <Grid className={styles.rightColumn} item xs={7}>
            {offerRequest.street_address}
          </Grid>
          <Grid className={styles.leftColumn} item xs={5}>
            Postinumero:
          </Grid>
          <Grid className={styles.rightColumn} item xs={7}>
            {offerRequest.postcode}
          </Grid>
          <Grid className={styles.leftColumn} item xs={5}>
            Postitoimipaikka:
          </Grid>
          <Grid className={styles.rightColumn} item xs={7}>
            {offerRequest.city}
          </Grid>
          <Grid className={styles.leftColumn} item xs={5}>
            Puhelinnumero:
          </Grid>
          <Grid className={styles.rightColumn} item xs={7}>
            {offerRequest.phone}
          </Grid>
          <Grid className={styles.leftColumn} item xs={5}>
            Sähköpostiosoite:
          </Grid>
          <Grid className={styles.rightColumn} item xs={7}>
            {offerRequest.email}
          </Grid>
          <Grid className={styles.leftColumn} item xs={5}>
            Lisätietoa:
          </Grid>
          <Grid className={styles.rightColumn} item xs={7}>
            {offerRequest.optional_information}
          </Grid>
        </Grid>
      </Box>
    );
  }
};

export default CompOffReqBox;

import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  backButton: {
    textAlign: "center",
  },
}));

const CompOffReqBox = ({ offerReq }) => {
  const styles = useStyles();
  const [offerRequest, setOfferRequest] = useState(offerReq);

  if (offerReq !== null) {
    return (
      <Box m={1} p={2}>
        <Grid className={styles.info} container spacing={1} p={2} mb={2}>
          <Grid item xs={6}>
            ID:
          </Grid>
          <Grid item xs={6}>
            {offerRequest.request_id}
          </Grid>
          <Grid item xs={6}>
            Asuntotyyppi:
          </Grid>
          <Grid item xs={6}>
            {offerRequest.apartment_type}
          </Grid>
          <Grid item xs={6}>
            Asunnon pinta-ala:
          </Grid>
          <Grid item xs={6}>
            {offerRequest.apartment_area}
          </Grid>
        </Grid>
      </Box>
    );
  }
};

export default CompOffReqBox;

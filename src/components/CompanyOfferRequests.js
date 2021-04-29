import { TextField, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import HeaderComponent from "./HeaderComponent";
import "./styles/TextPage.css";

const useStyles = makeStyles((theme) => ({
  backButton: {
    textAlign: "center",
  },
}));

const CompanyOfferRequests = () => {
  const styles = useStyles();

  return (
    <div>
      <HeaderComponent />
      <div>
        <h1>Tässä saapuneet tarjouspyynnöt:</h1>

        <Button
          variant="outlined"
          size="large"
          color="primary"
          onClick={() => (window.location.href = "/mypage/company")}
        >
          Takaisin
        </Button>
      </div>
    </div>
  );
};

export default CompanyOfferRequests;

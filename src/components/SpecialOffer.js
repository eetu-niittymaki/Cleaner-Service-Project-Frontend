import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import "./styles/SpecialOffer.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const SpecialOffer = ({
  id,
  title,
  companyName,
  duration,
  price,
  description,
}) => {
  return (
    <Box className="SpecialOffer" border={1} mb={2} p={1}>
      <div className="OfferContainer">
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
            //onClick={() => (window.location.href = `/orderform/${id}`)}
          >
            <Link to={`/orderform/${id}`}>Osta diili! </Link>
          </Button>
        </div>
        <div className="FlexIt3">
          <p>{description}</p>
        </div>
      </div>
    </Box>
  );
};

export default SpecialOffer;

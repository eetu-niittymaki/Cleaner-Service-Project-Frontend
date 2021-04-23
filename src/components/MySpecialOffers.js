import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import HeaderComponent from "./HeaderComponent";
import Connection from "./BackendConnection";

const MySpecialOffers = ({ companyId }) => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    // TODO: load special offers from db and map them
  });

  return (
    <div>
      <HeaderComponent />
      <h3>Omat pikatarjoukset:</h3>
      <Box border={1} mb={2} p={1}>
        <div>
          <p>Otsikko</p>
          <p>Kesto: 5 h</p>
          <p>Hinta: 100 €</p>
        </div>
        <div>
          <p>Kuvaus</p>
        </div>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          //   onClick={() =>
          //     (window.location.href = "/mypage/company/myspecialoffers")
          //   }
        >
          Muokkaa
        </Button>
      </Box>
      <Button
        variant="outlined"
        size="large"
        color="primary"
        onClick={() => (window.location.href = "/mypage/company")}
      >
        Omalle sivulle
      </Button>
    </div>
  );
};

export default MySpecialOffers;

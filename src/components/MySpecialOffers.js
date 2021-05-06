import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import BackendConnection from "./BackendConnection";
import CompanySpecialOffer from "./CompanySpecialOffer";

const MySpecialOffers = ({ companyId }) => {
  const [specialOffers, setSpecialOffers] = useState([]);

  const loadSpecialOffers = async () => {
    console.log("loading all special offers now once");
    let specOffers = await BackendConnection.getAllSpecialOffers();
    if (specOffers.length > 0) {
      // TODO: change this to filter values with companyId props
      let temp = specOffers.filter((spec) => spec.supplier_id === 2);
      if (temp.length > 0) {
        temp = temp.reverse();
        setSpecialOffers(temp);
      }
    }
  };

  useEffect(() => {
    loadSpecialOffers();
  }, []);

  const showSpecialOfferList = () => {
    return specialOffers.map((spec) => {
      return <CompanySpecialOffer key={spec.product_id} specialOffer={spec} />;
    });
  };

  if (specialOffers.length === 0) {
    return (
      <div>
        <h3>Et ole luonut vielä pikatarjouksia.</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Omat pikatarjoukset:</h3>
        {showSpecialOfferList()}
        <Button
          variant="outlined"
          size="large"
          color="primary"
          onClick={() => (window.location.href = "/mypage/company")}
        >
          Takaisin
        </Button>
      </div>
    );
  }
};

export default MySpecialOffers;

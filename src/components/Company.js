import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const Company = ({
  id,
  name,
  contactPerson,
  address,
  postnumber,
  city,
  email,
}) => {
  return (
    <Box border={1} m={3} p={1}>
      <h2>{name}</h2>
      <p>Tässä yksi yritysinfo</p>
    </Box>
  );
};

export default Company;

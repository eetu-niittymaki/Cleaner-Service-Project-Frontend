import React from "react";
import HeaderComponent from "./HeaderComponent";
import Company from "./Company";

const CompaniesPage = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        <h1>Palveluntarjoajat:</h1>
        <Company name="Yritys Oy" />
        <Company name="Siivouspojat Ab" />
        <Company name="DuuniaPukkaa Ky" />
      </div>
    </div>
  );
};

export default CompaniesPage;

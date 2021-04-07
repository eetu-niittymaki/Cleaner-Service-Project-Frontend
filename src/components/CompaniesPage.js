import React from "react";
import HeaderComponent from "./HeaderComponent";
import Company from "./Company";

const CompaniesPage = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        <h1>Palveluntarjoajat</h1>
        <Company />
        <Company />
        <Company />
      </div>
    </div>
  );
};

export default CompaniesPage;

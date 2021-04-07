import React from "react";
import HeaderComponent from "./HeaderComponent";
import Company from "./Company";

const MainPage = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        <h1>Sisältöä ja muuta etusivun juttua</h1>
        <Company />
      </div>
    </div>
  );
};

export default MainPage;

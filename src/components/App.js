import HeaderComponent from "./HeaderComponent.js";
import "./styles/App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const pages = ["front", "companies", "offerRequest", "info", "gdpr"];
  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [products, setProducts] = useState([])

  const onChangePage = (nav) => {
    if (nav === "/palveluntarjoajat") {
      console.log("Browsing cleaning companies");
      setCurrentPage(pages[1]);
    } else if (nav === "/tarjouspyynto") {
      console.log("Asking for custom offer");
      setCurrentPage(pages[2]);
    } else if (nav === "/info") {
      console.log("Getting additional info");
      setCurrentPage(pages[3]);
    } else if (nav === "/pikatarjoukset") {
      console.log("Getting additional info");
      setCurrentPage(pages[0]);
    } else if (nav === "/tietosuojaseloste") {
      console.log("Getting additional info");
      setCurrentPage(pages[4]);
    }
  };

  useEffect(() => {
    console.log("Changed page now!");
  }, [currentPage]);

  // Get products
  useEffect(() => {
    fetch("https://clean-buddy.herokuapp.com/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const getUI = () => {
    if (products.length !== 0) {
      let ui = products.map((prod) => (
        <li key={prod.product_id}>
          {prod.name} - {prod.product_name} - {prod.product_description} - {prod.product_price}€
        </li>
      ))
      return ui
    }
  }

  return (
    <div className="App">
      <HeaderComponent onChangePage={onChangePage} />
      {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </header> */}
      <div className="pageContent">
        <h1>Current page: {currentPage}</h1>
        <p>Sisältöä ja muuta härpäkettä jne lorem ipsum yms..</p>
        <ui>{getUI()}</ui>
      </div>
    </div>
  );
};

export default App;
/*
let ui = products.map((prod) => (
  <li key={prod.product_id}>
    {prod.name} - {prod.product_name} - {prod.product_description} - {prod.product_price}€
  </li>*/
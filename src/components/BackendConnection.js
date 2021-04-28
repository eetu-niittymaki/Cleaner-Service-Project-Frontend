import axios from "axios";

const baseUrl = "https://clean-buddy.herokuapp.com/api/";
//const baseUrl = "http://localhost:8080/api/";

const getAllCompanies = async () => {
  const result = await axios.get(`${baseUrl}suppliers/`);
  console.log("BackendConnection: Getting all companies");
  console.log(result.data);
  return result.data;
};

const getAllCustomers = async () => {
  const result = await axios.get(`${baseUrl}customers/`);
  console.log("BackendConnection: Getting all customers");
  console.log(result.data);
  return result.data;
};

const getAllSpecialOffers = async () => {
  const result = await axios.get(`${baseUrl}products/`);
  console.log("BackendConnection: Getting all specialoffers.");
  console.log(result.data);
  return result.data;
};

const postSpecialOffer = async ({
  product_name,
  product_description,
  product_price,
}) => {
  console.log(
    `Posting values: ${product_name}, ${product_description}, ${product_price}`
  );
  const result = await axios
    .post(`${baseUrl}products/`, {
      // product_name: "Perusteellisempi siivous",
      // product_description: "Tähän joku hyvä testikuvaus.",
      // product_price: 150,
      product_name: product_name,
      product_description: product_description,
      product_price: product_price,
    })
    .then(function (response) {
      try {
        // your own try...catch block to catch the error before axios ..catch
        console.log(response);
      } catch (e) {
        console.log(e);
      } // your catch block
    })
    .catch(function (error) {
      console.log(error);
    });
  //console.log(result.data);
  return result.data;
};

const postNewCustomer = async ({
  first_name,
  last_name,
  street_address,
  city,
  postcode,
  phone,
  email,
  password,
}) => {
  console.log(`Sending this data with axios post
    ${first_name},
    ${last_name},
    ${street_address},
    ${city},
    ${postcode},
    ${phone},
    ${email},
    ${password}`);
  const result = await axios
    .post(`${baseUrl}customers/`, {
      first_name: first_name,
      last_name: last_name,
      street_address: street_address,
      city: city,
      postcode: postcode,
      phone: phone,
      email: email,
      password: password,
    })
    .then(function (response) {
      try {
        // your own try...catch block to catch the error before axios ..catch
        console.log(response);
      } catch (e) {
        console.log(e);
      } // your catch block
    })
    .catch(function (error) {
      console.log(error);
    });
  //console.log(result.data);
  return result.data;
};

const postNewSupplier = async ({
  name,
  supplier_description,
  street_address,
  city,
  postcode,
  phone,
  email,
  password,
}) => {
  console.log(`Sending this data with axios post
    ${name},
    ${supplier_description},
    ${street_address},
    ${city},
    ${postcode},
    ${phone},
    ${email},
    ${password}`);
  const result = await axios
    .post(`${baseUrl}suppliers/`, {
      name: name,
      supplier_description: supplier_description,
      street_address: street_address,
      city: city,
      postcode: postcode,
      phone: phone,
      email: email,
      password: password,
    })
    .then(function (response) {
      try {
        // your own try...catch block to catch the error before axios ..catch
        console.log(response);
      } catch (e) {
        console.log(e);
      } // your catch block
    })
    .catch(function (error) {
      console.log(error);
    });
  //console.log(result.data);
  return result.data;
};

const obj = {
  getAllCompanies,
  getAllCustomers,
  getAllSpecialOffers,
  postSpecialOffer,
  postNewCustomer,
  postNewSupplier,
};
export default obj;

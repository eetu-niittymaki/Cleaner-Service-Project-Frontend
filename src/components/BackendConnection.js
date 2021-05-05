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

const getOfferRequestsBySupplier = async (supplier) => {
  const result = await axios.get(
    `${baseUrl}offer-requests?supplier=${supplier}`
  );
  console.log("BackendConnection: Getting all offer request for supplier.");
  console.log(result.data);
  return result.data;
};

const postSpecialOffer = async ({
  supplier_id,
  product_name,
  product_description,
  product_price,
  ends_at,
  work_hours,
  is_available,
}) => {
  console.log(
    `Posting values to db with axios:
    ${supplier_id},
    ${product_name},
    ${product_description},
    ${product_price},
    ${ends_at},
    ${work_hours},
    ${is_available}`
  );
  const result = await axios
    .post(`${baseUrl}products/`, {
      supplier_id: 1,
      product_name: "Juhlasiivous",
      product_description: "Tarkempi kuvaus juhlasiivouksesta",
      product_price: 100,
      ends_at: null,
      work_hours: 5,
      is_available: true,
      // supplier_id: supplier_id,
      // product_name: product_name,
      // product_description: product_description,
      // product_price: product_price,
      // ends_at: ends_at,
      // work_hours: work_hours,
      // product_is_available: product_is_available,
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
      //supplierDescription: supplier_description,
      //streetAddress: street_address,
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
  console.log(result.data);
  return result.data;
  //return result[0].data;
};

const postNewOfferRequest = async ({
  apartment_type,
  apartment_area,
  cleaning_frequency,
  request_suppliers,
  optional_information,
  first_name,
  last_name,
  street_address,
  city,
  postcode,
  phone,
  email,
}) => {
  console.log(`Sending this data with axios post
    ${apartment_type},
    ${apartment_area},
    ${cleaning_frequency},
    ${request_suppliers}
    ${optional_information},
    ${first_name},
    ${last_name},
    ${street_address},
    ${city},
    ${postcode},
    ${phone},
    ${email}`);
  const result = await axios
    .post(`${baseUrl}offer-requests/`, {
      apartment_type: apartment_type,
      apartment_area: apartment_area,
      cleaning_frequency: cleaning_frequency,
      request_suppliers: request_suppliers,
      optional_information: optional_information,
      first_name: first_name,
      last_name: last_name,
      street_address: street_address,
      city: city,
      postcode: postcode,
      phone: phone,
      email: email,
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

const deleteCustomer = async (id) => {
  //const result = 
  const result = await axios.delete(`${baseUrl}customers/${id}`)
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
}

const deleteSupplier = async (id) => {
  const result = await axios.delete(`${baseUrl}suppliers/${id}`)
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
}

const deleteOffer = async (id) => {
  const result = await axios.delete(`${baseUrl}products/${id}`)
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
}

const obj = {
  getAllCompanies,
  getAllCustomers,
  getAllSpecialOffers,
  getOfferRequestsBySupplier,
  postSpecialOffer,
  postNewCustomer,
  postNewSupplier,
  postNewOfferRequest,
  deleteCustomer,
  deleteSupplier,
  deleteOffer,
};
export default obj;

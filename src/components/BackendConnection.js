import axios from "axios";

const baseUrl = "https://clean-buddy.herokuapp.com/api/";

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

const obj = { getAllCompanies, getAllCustomers, getAllSpecialOffers };
export default obj;

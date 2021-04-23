import axios from "axios";

const baseUrl = "https://clean-buddy.herokuapp.com/api/";

const getAllCompanies = async () => {
  const result = await axios.get(`${baseUrl}suppliers/`);
  console.log("BackendConnection: Getting all companies");
  console.log(result.data);
  return result.data;
};

const obj = { getAllCompanies };
export default obj;
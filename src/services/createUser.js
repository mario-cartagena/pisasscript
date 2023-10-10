import axios from "axios";

//const URL = "https://backpisassscript.herokuapp.com/";
const URL = "https://backpisassscript.onrender.com/";
const endpointUsers = "users";

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${URL}${endpointUsers}`, userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// createUser()
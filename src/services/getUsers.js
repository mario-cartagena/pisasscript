import axios from "axios";
const URL = "https://backpisassscript.herokuapp.com/";

const endpointUsers = "users";

export const getUsers = async () => {
    try {
        const { data } = await axios.get(`${URL}${endpointUsers}`);
        console.log(data)
        return data;
        
    } catch (error) {
        console.log(error);
        return [];
    }
}

getUsers()